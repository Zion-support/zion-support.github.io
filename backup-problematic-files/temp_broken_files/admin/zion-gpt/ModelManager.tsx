
import { useState, useEffect } from 'react',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",;
import { supabase } from '@/integrations/supabase/client',;
import { ModelConfig } from '@/utils/zion-gpt',;
;
interface ModelVersionData extends ModelConfig {;
  trainingStatus:'queued' | 'running' | 'succeeded' | 'failed',;
  errorMessage?:string;
}
;
export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [activeJobs, setActiveJobs] = useState<{[key:string]:boolean}>({}),;
;
  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels(),;
  }, []),;
;
  const fetchModels = async () => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('model_versions');
        .select('*');
        .order('createdAt', { ascending:false }),;
      ;
      if (error) throw error,;
      ;
      // Map the data to our component state;
      setModels(data.map(model => ({;
        id:model.id,;
        version:model.version,;
        createdAt:model.created_at,;
        baseModel:model.base_model,;
        purpose:model.purpose,;
        active:model.active,;
        trainingStatus:model.training_status,;
        errorMessage:model.error_message;
      }))),;
    } catch (error) {;
      console.error('Error fetching models:', error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  const checkTrainingStatus = async (modelId:string) => {;
    try {;
      setActiveJobs(prev => ({ ...prev, [modelId]:true })),;
      ;
      // Call an edge function that checks the OpenAI fine-tuning job status;
      const { data, error } = await supabase.functions.invoke('check-training-status', {;
        body:{ modelId }
      }),;
      ;
      if (error) throw error,;
      ;
      // Update the local model status;
      setModels(prev => ;
        prev.map(model => ;
          model.id === modelId ;
            ? { ...model, trainingStatus:data.status, errorMessage:data.error || null } model;
        );
      ),;
      ;
      // Also update in the database;
      await supabase;
        .from('model_versions');
        .update({;

    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
        await supabase;
          .from('model_versions');

    <Card className="w-full">;
      <CardHeader className="flex flex-row items-center justify-between">;
        <div>;
          <CardTitle>ZionGPT Models</CardTitle>;
          <CardDescription>;
            Manage fine-tuned AI models for different platform features;
          </CardDescription>;
        </div>;
        <Button onClick={fetchModels} variant="outline" size="sm">;
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {isLoading ? (;
          <div className="flex items-center justify-center h-24">;
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;
          </div>;

          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Model ID</TableHead>;
                <TableHead>Version</TableHead>;
                <TableHead>Purpose</TableHead>;
                <TableHead>Base Model</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead>Created</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;

                          <RefreshCw className="h-4 w-4" />;
                        )}
                        <span className="ml-1">Check</span>;
                      </Button>;

                          <>;
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;

                  </TableCell>;
                </TableRow>;
              ))}
            </TableBody>;
          </Table>;
        )}
      </CardContent>;
    </Card>;

}