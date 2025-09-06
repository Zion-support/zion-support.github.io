<<<<<<< HEAD
.order ('created_at', { ascending: false }),
  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string, ) => {
    try {
      // If activating, deactivate all other models with the same purpose;
      // Check condition
if ( {) {
  $2
}
        await supabase;
          .from ('model_versions');
          .update ({ active: false });
          .eq ('purpose', purpose);
      }
      // Update this model;
      await supabase;
        .from ('model_versions');
        .update ({ active: !current_active });
        .eq ('id', model_id),
      // Refresh the model list;
      fetch_models ();
    } catch (error) {
      logErrorToProduction ('Error toggling model active state:', { data: error });
    }
        .order('createdAt', { ascending: false }),;
  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string,) => {;
=======
import { useState, useEffect } from 'react',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client',;
import { ModelConfig } from '@/utils/zion-gpt',;
import {logErrorToProduction} from '@/utils/productionLogger',;
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
      setModels(data.map((model:any) => ({;
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
      logErrorToProduction('Error fetching models:', { data:error }),;
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
            ? { ...model, trainingStatus:(data as any)?.status || 'failed', errorMessage:(data as any)?.error || 'Unknown error' } model;
        );
      ),;
      ;
      // Also update in the database;
      await supabase;
        .from('model_versions');
        .update({;
          training_status:(data as any)?.status || 'failed',;
          error_message:(data as any)?.error || 'Unknown error',;
          // If training succeeded, automatically set to active;
          ...((data as any)?.status === 'succeeded' ? { active:true } {});
        });
        .eq('id', modelId),;
      ;
    } catch (error) {;
      logErrorToProduction('Error checking status for model ${modelId} ', { data:error }),;
    } finally {;
      setActiveJobs(prev => ({ ...prev, [modelId]:false })),;
    }
  },;
;
  const toggleModelActive = async (modelId:string, currentActive:boolean, purpose:string) => {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
        await supabase;
          .from('model_versions');
<<<<<<< HEAD
          .update({ active: false });
          .eq('purpose', purpose);
      }
      // Update this model;
      await supabase;
        .from('model_versions');
        .update({ active: !currentActive });
        .eq('id', modelId),;
      // Refresh the model list;
      fetchModels();
    } catch (error) {;
      logErrorToProduction('Error toggling model active state:', { data: error });
    }
  },;
  return (
=======
          .update({ active:false });
          .eq('purpose', purpose),;
      }
      ;
      // Update this model;
      await supabase;
        .from('model_versions');
        .update({ active:!currentActive });
        .eq('id', modelId),;
      ;
      // Refresh the model list;
      fetchModels(),;
    } catch (error) {;
      logErrorToProduction('Error toggling model active state:', { data:error }),;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
        ) : (;
=======
        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
              {models && models.map((model,) => (;
                <TableRow key={model && model.id}>;
                  <TableCell className="font-medium">{model && model.id}</TableCell>;
                  <TableCell>v{model && model.version}</TableCell>;
                  <TableCell>{model && model.purpose}</TableCell>;
                  <TableCell>{model && model.baseModel}</TableCell>;
                  <TableCell>;
                    {model && model.trainingStatus === 'succeeded' ? (;
                      <Badge className="bg-green-500">Ready</Badge>;
                    ) : model && model.trainingStatus === 'failed' ? (;
                      <Badge className="bg-red-500">Failed</Badge>;
                    ) : model && model.trainingStatus === 'running' ? (;
                      <Badge className="bg-blue-500">Training</Badge>;
                    ) : (;
                      <Badge className="bg-yellow-500">Queued</Badge>;
                    )}
                    {model && model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date(model && model.createdAt).toLocaleDateString()}</TableCell>;
                  <TableCell className="text-right">;
                    {model && model.trainingStatus === 'queued' || model && model.trainingStatus === 'running' ? (;
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick = {(,) => checkTrainingStatus(model && model.id),}
                        disabled = {activeJobs[model && model.id],}
                      >;
                        {activeJobs[model && model.id] ? (;
                          <Loader2 className="h-4 w-4 animate-spin" />;
                        ) : (;
=======
              {models.map((model) => (;
                <TableRow key={model.id}>;
                  <TableCell className="font-medium">{model.id}</TableCell>;
                  <TableCell>v{model.version}</TableCell>;
                  <TableCell>{model.purpose}</TableCell>;
                  <TableCell>{model.baseModel}</TableCell>;
                  <TableCell>;
                    {model.trainingStatus === 'succeeded' ? (;
                      <Badge className="bg-green-500">Ready</Badge>;
                    ) :model.trainingStatus === 'failed' ? (;
                      <Badge className="bg-red-500">Failed</Badge>;
                    ) :model.trainingStatus === 'running' ? (;
                      <Badge className="bg-blue-500">Training</Badge>;
                    ) :(;
                      <Badge className="bg-yellow-500">Queued</Badge>;
                    )}
                    {model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date(model.createdAt).toLocaleDateString()}</TableCell>;
                  <TableCell className="text-right">;
                    {model.trainingStatus === 'queued' || model.trainingStatus === 'running' ? (;
                      <Button;
                        variant="ghost";
                        size="sm";
                        onClick={() => checkTrainingStatus(model.id)}
                        disabled={activeJobs[model.id]}
                      >;
                        {activeJobs[model.id] ? (;
                          <Loader2 className="h-4 w-4 animate-spin" />;
                        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <RefreshCw className="h-4 w-4" />;
                        )}
                        <span className="ml-1">Check</span>;
                      </Button>;
<<<<<<< HEAD
                    ) : model && model.trainingStatus === 'succeeded' ? (;
                      <Button
                        variant = {model && model.active ? "outline" : "default",}
                        size="sm"
                        onClick = {(,) => toggleModelActive(model && model.id, model && model.active, model && model.purpose),}
                      >;
                        {model && model.active ? (;
                          <>;
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;
                          </>;
                        ) : (;
=======
                    ) :model.trainingStatus === 'succeeded' ? (;
                      <Button;
                        variant={model.active ? "outline" :"default"}
                        size="sm";
                        onClick={() => toggleModelActive(model.id, model.active, model.purpose)}
                      >;
                        {model.active ? (;
                          <>;
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;
                          </>;
                        ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <>;
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;
<<<<<<< HEAD
                    ) : (;
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"
                        title = {model && model.errorMessage || "Training failed",}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;
                    )}
=======
                    ) :(;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-red-500";
                        title={model.errorMessage || "Training failed"}
                      >;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;                    )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </TableCell>;
                </TableRow>;
              ))}
            </TableBody>;
          </Table>;
        )}
      </CardContent>;
    </Card>;
<<<<<<< HEAD
  );
}
}
  },
  return (
    <Card className="w - full">;
      <CardHeader className="flex flex - row items - center justify - between">;
        <div>;
          <CardTitle > ZionGPT Models</CardTitle>;
          <CardDescription>;
            Manage fine - tuned AI models for different platform features;
          </CardDescription>;
        </div>;
        <Button on_click={fetch_models} variant="outline" size="sm">;
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {is_loading ? (
          <div className="flex items - center justify - center h - 24">;
            <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
          </div>) : (
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Model ID</TableHead>;
                <TableHead > Version</TableHead>;
                <TableHead > Purpose</TableHead>;
                <TableHead > Base Model</TableHead>;
                <TableHead > Status</TableHead>;
                <TableHead > Created</TableHead>;
                <TableHead className="text - right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {models.map ((model, ) => (
                <TableRow key={model.id}>;
                  <TableCell className="font - medium">{model.id}</TableCell>;
                  <TableCell > v{model.version}</TableCell>;
                  <TableCell>{model.purpose}</TableCell>;
                  <TableCell>{model.base_model}</TableCell>;
                  <TableCell>;
                    {model.training_status === 'succeeded' ? (
                      <Badge className="bg - green - 500">Ready</Badge>) : model.training_status === 'failed' ? (
                      <Badge className="bg - red - 500">Failed</Badge>) : model.training_status === 'running' ? (
                      <Badge className="bg - blue - 500">Training</Badge>) : (
                      <Badge className="bg - yellow - 500">Queued</Badge>)}
                    {model.active && <Badge className="ml - 2 bg - purple - 500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date (model.created_at).toLocaleDateString ()}</TableCell>;
                  <TableCell className="text - right">;
                    {model.training_status === 'queued' || model.training_status === 'running' ? (
                      <Button;
                        variant="ghost";
                        size="sm";
                        on_click = {(, ) => checkTrainingStatus (model.id), }
                        disabled = {active_jobs[model.id], }
                      >;
                        {active_jobs[model.id] ? (
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                          <RefreshCw className="h - 4 w - 4" />)}
                        <span className="ml - 1">Check</span>;
                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;
                        variant = {model.active ? "outline" : "default", }
                        size="sm";
                        on_click = {(, ) => toggleModelActive (model.id, model.active, model.purpose), }
                      >;
                        {model.active ? (
                          <>;
                            <CheckCircle className="h - 4 w - 4 mr - 1" /> Active;
                          </>) : (
                          <>;
                            <Play className="h - 4 w - 4 mr - 1" /> Activate;
                          </>)}
                      </Button>) : (
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text - red - 500";
                        title = {model.error_message || "Training failed", }
                      >;
                        <AlertCircle className="h - 4 w - 4 mr - 1" /> Error;
                      </Button>)}
                  </TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>)}
      </CardContent>;
    </Card>);
=======
  ),; import { ;
  {;
  {;
  Loader2, RefreshCw, Play,  CheckCircle, AlertCircle ;
 } from "lucide-react";
import {;
  {;
  {;
  supabase ';
}from '@/integrations/supabase/client';
import {;
  {;
  {;
  ModelConfig ';
}from '@/utils/zion-gpt';
import {;
  {;
  {;
  logErrorToProduction ';
}from '@/utils/productionLogger';
interface ModelVersionData extends ModelConfig {';
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed';
errorMessage?: string ;
}export function ZionGPTModelManager () {;
  const [models, setModels] = useState<ModelVersionData[]> ([]);
const [isLoading,  setIsLoading] = useState (true);
const [activeJobs, setActiveJobs] = useState< {;
  [key: string]: boolean ;
}> ({;
  ;
});
//Fetch model data on component mount useEffect ( () => {;
  fetchModels () ;
}, []);
const fetchModels = async () => {;
  try {;
  setIsLoading (true);
const {;
  data, error ';
}= await supabase .from ('model versions') .select ('*') .order ('createdAt', {;
  ascending: false ;
});
//Map the data to our component state if (error) throw error;
//Update the local model status setModels (prev => prev.map (model => model.id === modelId ? {';
  ...model,  trainingStatus: (data as any) ?.status || 'failed', errorMessage: (data as any) ?.error || 'Unknown error' ;
}: model) );';
//Also update in the database await supabase .from ('model versions') .update ({';
  training status: (data as any) ?.status || 'failed', error message: (data as any) ?.error || 'Unknown error',  //If training succeeded, automatically set to active ... ( (data as any) ?.status === 'succeeded' ? {;
  active: true ;
}: {;
  ;
}) ';
}) .eq ('id', modelId) ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
};
const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
  try {;
  //If activating, deactivate all other models with the same purpose if (!currentActive) {';
  await supabase .from ('model versions') ';
}//Update this model await supabase .from ('model versions') ;
}
};
return (<Card className="w-full" > <CardHeader className="flex flex-row items-center justify-between" > <div> <CardTitle>ZionGPT Models</CardTitle> <CardDescription> Manage fine-tuned AI models for different platform features </CardDescription> </div> </div>) : (<Table> <TableHeader> <TableRow> <TableHead>Model ID</TableHead> <TableHead>Version</TableHead> <TableHead>Purpose</TableHead> <TableHead>Base Model</TableHead> <TableHead>Status</TableHead> <TableHead>Created</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  models.map ( (model) => (<TableRow key= {;
  model.id '";
}>) : model.trainingStatus === 'failed' ? (<Badge className="bg-red-500" >Failed</Badge>) : model.trainingStatus === 'running' ? (<Badge className="bg-blue-500" >Training</Badge>) : (<Badge className="bg-yellow-500" >Queued</Badge>) ;
}onClick={;
  () => checkTrainingStatus (model.id) ;
}disabled= {;
  activeJobs[model.id] ";
}>) : (<RefreshCw className="h-4 w-4" />) ";
}<span className="ml-1" >Check</span> </Button> > {";
  model.active ? (<> <CheckCircle className="h-4 w-4 mr-1" /> Active </>) : (<> <Play className="h-4 w-4 mr-1" /> Activate </>) ";
}</Button>) : (<Button > <AlertCircle className="h-4 w-4 mr-1" /> Error </Button>) ;
}</TableCell> </TableRow>) ) ;
}</TableBody> </Table>) ;
}</CardContent> </Card>) ;
}'"