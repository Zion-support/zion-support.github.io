import { useState, useEffect } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';
import {logErrorToProduction} from '@/utils/productionLogger';


interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed';
  errorMessage?: string;
}

export function ZionGPTModelManager() {
  const [models, setModels] = useState<ModelVersionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({});

  // Fetch model data on component mount
  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('model_versions')
        .select('*')
        .order('createdAt', { ascending: false });
      
      if (error) throw error;
      
      // Map the data to our component state
      setModels(data.map((model: any) => ({
        id: model.id,
        version: model.version,
        createdAt: model.created_at,
        baseModel: model.base_model,
        purpose: model.purpose,
        active: model.active,
        trainingStatus: model.training_status,
        errorMessage: model.error_message
      })));
    } catch (error) {
      logErrorToProduction('Error fetching models:', { data: error });
    } finally {
      setIsLoading(false);
    }
  };

  const checkTrainingStatus = async (modelId: string) => {
    try {
      setActiveJobs(prev => ({ ...prev, [modelId]: true }));
      
      // Call an edge function that checks the OpenAI fine-tuning job status
      const { data, error } = await supabase.functions.invoke('check-training-status', {
        body: { modelId }
      });
      
      if (error) throw error;
      
      // Update the local model status
      setModels(prev => 
        prev.map(model => 
          model.id === modelId 
            ? { ...model, trainingStatus: (data as any)?.status || 'failed', errorMessage: (data as any)?.error || 'Unknown error' } 
            : model
        )
      );
      
      // Also update in the database
      await supabase
        .from('model_versions')
        .update({
          training_status: (data as any)?.status || 'failed',
          error_message: (data as any)?.error || 'Unknown error',
          // If training succeeded, automatically set to active
          ...((data as any)?.status === 'succeeded' ? { active: true } : {})
        })
        .eq('id', modelId);
      
    } catch (error) {
      logErrorToProduction('Error checking status for model ${modelId}:', { data: error });
    } finally {
      setActiveJobs(prev => ({ ...prev, [modelId]: false }));
    }
  };

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {
    try {
      // If activating, deactivate all other models with the same purpose
      if (!currentActive) {
        await supabase
          .from('model_versions')
          .update({ active: false })
          .eq('purpose', purpose);
      }
      
      // Update this model
      await supabase
        .from('model_versions')
        .update({ active: !currentActive })
        .eq('id', modelId);
      
      // Refresh the model list
      fetchModels();
    } catch (error) {
      logErrorToProduction('Error toggling model active state:', { data: error });
    }
  };

  return (
    <Card className=&quot;w-full&quot;>
      <CardHeader className=&quot;flex flex-row items-center justify-between&quot;>
        <div>
          <CardTitle>ZionGPT Models</CardTitle>
          <CardDescription>
            Manage fine-tuned AI models for different platform features
          </CardDescription>
        </div>
        <Button onClick={fetchModels} variant=&quot;outline&quot; size=&quot;sm&quot;>
          <RefreshCw className=&quot;h-4 w-4 mr-2&quot; /> Refresh
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className=&quot;flex items-center justify-center h-24&quot;>
            <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model ID</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Base Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className=&quot;text-right&quot;>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model) => (
                <TableRow key={model.id}>
                  <TableCell className=&quot;font-medium&quot;>{model.id}</TableCell>
                  <TableCell>v{model.version}</TableCell>
                  <TableCell>{model.purpose}</TableCell>
                  <TableCell>{model.baseModel}</TableCell>
                  <TableCell>
                    {model.trainingStatus === 'succeeded' ? (
                      <Badge className=&quot;bg-green-500&quot;>Ready</Badge>
                    ) : model.trainingStatus === 'failed' ? (
                      <Badge className=&quot;bg-red-500&quot;>Failed</Badge>
                    ) : model.trainingStatus === 'running' ? (
                      <Badge className=&quot;bg-blue-500&quot;>Training</Badge>
                    ) : (
                      <Badge className=&quot;bg-yellow-500&quot;>Queued</Badge>
                    )}
                    {model.active && <Badge className=&quot;ml-2 bg-purple-500&quot;>Active</Badge>}
                  </TableCell>
                  <TableCell>{new Date(model.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className=&quot;text-right&quot;>
                    {model.trainingStatus === 'queued' || model.trainingStatus === 'running' ? (
                      <Button
                        variant=&quot;ghost&quot;
                        size=&quot;sm&quot;
                        onClick={() => checkTrainingStatus(model.id)}
                        disabled={activeJobs[model.id]}
                      >
                        {activeJobs[model.id] ? (
                          <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
                        ) : (
                          <RefreshCw className=&quot;h-4 w-4&quot; />
                        )}
                        <span className=&quot;ml-1&quot;>Check</span>
                      </Button>
                    ) : model.trainingStatus === 'succeeded' ? (
                      <Button
                        variant={model.active ? &quot;outline&quot; : &quot;default&quot;}
                        size=&quot;sm&quot;
                        onClick={() => toggleModelActive(model.id, model.active, model.purpose)}
                      >
                        {model.active ? (
                          <>
                            <CheckCircle className=&quot;h-4 w-4 mr-1&quot; /> Active
                          </>
                        ) : (
                          <>
                            <Play className=&quot;h-4 w-4 mr-1&quot; /> Activate
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant=&quot;ghost&quot;
                        size=&quot;sm&quot;
                        className=&quot;text-red-500&quot;
                        title={model.errorMessage || &quot;Training failed&quot;}
                      >
                        <AlertCircle className=&quot;h-4 w-4 mr-1&quot; /> Error
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
