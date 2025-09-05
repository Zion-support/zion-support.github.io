<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
=======
import { useState, useEffect } from 'react';
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
import {logErrorToProduction} from '@/utils/productionLogger',
interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',
  errorMessage?: string
}

export function ZionGPTModelManager() {
  const [models, setModels] = useState<ModelVersionData[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),

  // Fetch model data on component mount
  useEffect(() => {
    fetchModels()
  }, []),

  const fetchModels = async () => {
    try {
      setIsLoading(true),
      const { data, error } = await supabase
        .from('model_versions')
        .select('*')
        .order('createdAt', { ascending: false }),
=======


interface ModelVersionData extends ModelConfig {_trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed';
  errorMessage?: string;}

export function ZionGPTModelManager() {_const [models, _setModels] = useState<ModelVersionData[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  const [activeJobs, _setActiveJobs] = useState<{[key: string]: boolean}>({});

  // Fetch model data on component mount
  useEffect__(() => {_fetchModels();}, []);

  const _fetchModels = async () => {_try {
      setIsLoading(true);
      const { data, _error} = await supabase
        .from('model_versions')
        .select('*')
        .order('createdAt', {_ascending: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
      // Map the data to our component state
<<<<<<< HEAD
      setModels(data.map((model: any) => ({
        id: model.id,
        version: model.version,
        createdAt: model.created_at,
        baseModel: model.base_model,
        purpose: model.purpose,
        active: model.active,
        trainingStatus: model.training_status,
        errorMessage: model.error_message
      })))
    } catch (error) {
      logErrorToProduction('Error fetching models:', { data: error })
    } finally {
      setIsLoading(false)
    }
  },

  const checkTrainingStatus = async (modelId: string) => {
    try {
      setActiveJobs(prev => ({ ...prev, [modelId]: true })),
      
      // Call an edge function that checks the OpenAI fine-tuning job status
      const { data, error } = await supabase.functions.invoke('check-training-status', {
        body: { modelId }
      }),
=======
      setModels(_data.map((model: unknown) => ({_id: model.id, _version: model.version, _createdAt: model.created_at, _baseModel: model.base_model, _purpose: model.purpose, _active: model.active, _trainingStatus: model.training_status, _errorMessage: model.error_message})));
    } catch (error) {_logErrorToProduction('Error fetching models:', _{ data: error});
    } finally {_setIsLoading(false);}
  };

  const _checkTrainingStatus = async (_modelId: string) => {_try {
      setActiveJobs(prev => ({ ...prev, _[modelId]: true}));
      
      // Call an edge function that checks the OpenAI fine-tuning job status
      const {_data, _error} = await supabase.functions.invoke(_'check-training-status', _{_body: { modelId}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (error) throw error,
      
      // Update the local model status
      setModels(prev => 
        prev.map(model => 
          model.id === modelId 
            ? {_...model, _trainingStatus: (data as any)?.status || 'failed', _errorMessage: (data as any)?.error || 'Unknown error'} 
            : model
        )
      ),
      
      // Also update in the database
      await supabase
        .from('model_versions')
        .update({_training_status: (data as any)?.status || 'failed', _error_message: (data as any)?.error || 'Unknown error', _// If training succeeded, _automatically set to active
          ...((data as any)?.status === 'succeeded' ? { active: true} : {})
        })
        .eq('id', modelId)
      
<<<<<<< HEAD
    } catch (error) {
      logErrorToProduction('Error checking status for model ${modelId}:', { data: error })
    } finally {
      setActiveJobs(prev => ({ ...prev, [modelId]: false }))
=======
    } catch (error) {_logErrorToProduction('Error checking status for model ${modelId}:', {_data: error});
    } finally {_setActiveJobs(prev => ({ ...prev, _[modelId]: false}));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  const _toggleModelActive = async (_modelId: string, _currentActive: boolean, _purpose: string) => {_try {
      // If activating, _deactivate all other models with the same purpose
      if (!currentActive) {
        await supabase
          .from('model_versions')
<<<<<<< HEAD
          .update({ active: false })
          .eq('purpose', purpose)
=======
          .update({ active: false})
          .eq('purpose', purpose);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
      
      // Update this model
      await supabase
        .from('model_versions')
<<<<<<< HEAD
        .update({ active: !currentActive })
        .eq('id', modelId),
      
      // Refresh the model list
      fetchModels()
    } catch (error) {
      logErrorToProduction('Error toggling model active state:', { data: error })
=======
        .update({_active: !currentActive})
        .eq('id', modelId);
      
      // Refresh the model list
      fetchModels();
    } catch (error) {_logErrorToProduction('Error toggling model active state:', _{ data: error});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
    <Card className=&quot;w-full&quot;>
      <CardHeader className=&quot;flex flex-row items-center justify-between&quot;>
        <div>
          <CardTitle>ZionGPT Models</CardTitle>
          <CardDescription>
            Manage fine-tuned AI models for different platform features
          </CardDescription>
        </div>
<<<<<<< HEAD
        <Button onClick={fetchModels} variant=&quot;outline&quot; size=&quot;sm&quot;>
          <RefreshCw className=&quot;h-4 w-4 mr-2&quot; /> Refresh
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className=&quot;flex items-center justify-center h-24&quot;>
            <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
=======
        <Button onClick={_fetchModels} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh
        </Button>
      </CardHeader>
      <CardContent>
        {_isLoading ? (
          <div className="flex items-center justify-center h-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        ) : (_<Table>
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
<<<<<<< HEAD
                  <TableCell className=&quot;font-medium&quot;>{model.id}</TableCell>
                  <TableCell>v{model.version}</TableCell>
                  <TableCell>{model.purpose}</TableCell>
                  <TableCell>{model.baseModel}</TableCell>
                  <TableCell>
                    {model.trainingStatus === 'succeeded' ? (
                      <Badge className=&quot;bg-green-500&quot;>Ready</Badge>
=======
                  <TableCell className="font-medium">{_model.id}</TableCell>
                  <TableCell>v{_model.version}</TableCell>
                  <TableCell>{_model.purpose}</TableCell>
                  <TableCell>{_model.baseModel}</TableCell>
                  <TableCell>
                    {_model.trainingStatus === 'succeeded' ? (
                      <Badge className="bg-green-500">Ready</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ) : model.trainingStatus === 'failed' ? (
                      <Badge className=&quot;bg-red-500&quot;>Failed</Badge>
                    ) : model.trainingStatus === 'running' ? (
                      <Badge className=&quot;bg-blue-500&quot;>Training</Badge>
                    ) : (
                      <Badge className=&quot;bg-yellow-500&quot;>Queued</Badge>
                    )}
<<<<<<< HEAD
                    {model.active && <Badge className=&quot;ml-2 bg-purple-500&quot;>Active</Badge>}
                  </TableCell>
                  <TableCell>{new Date(model.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className=&quot;text-right&quot;>
                    {model.trainingStatus === 'queued' || model.trainingStatus === 'running' ? (
                      <Button
                        variant=&quot;ghost&quot;
                        size=&quot;sm&quot;
=======
                    {_model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>
                  <TableCell>{_new Date(model.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    {_model.trainingStatus === 'queued' || model.trainingStatus === 'running' ? (_<Button
                        variant="ghost"
                        size="sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        onClick={() => checkTrainingStatus(model.id)}
                        disabled={_activeJobs[model.id]}
                      >
<<<<<<< HEAD
                        {activeJobs[model.id] ? (
                          <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
=======
                        {_activeJobs[model.id] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        ) : (
                          <RefreshCw className=&quot;h-4 w-4&quot; />
                        )}
                        <span className=&quot;ml-1&quot;>Check</span>
                      </Button>
<<<<<<< HEAD
                    ) : model.trainingStatus === 'succeeded' ? (
                      <Button
                        variant={model.active ? &quot;outline&quot; : &quot;default&quot;}
                        size=&quot;sm&quot;
                        onClick={() => toggleModelActive(model.id, model.active, model.purpose)}
=======
                    ) : model.trainingStatus === 'succeeded' ? (_<Button
                        variant={_model.active ? "outline" : "default"}
                        size="sm"
                        onClick={_() => toggleModelActive(model.id, _model.active, _model.purpose)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        {_model.active ? (
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
<<<<<<< HEAD
                        variant=&quot;ghost&quot;
                        size=&quot;sm&quot;
                        className=&quot;text-red-500&quot;
                        title={model.errorMessage || &quot;Training failed&quot;}
=======
                        variant="ghost"
                        size="sm"
                        className="text-red-500"
                        title={_model.errorMessage || "Training failed"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
  )
}
