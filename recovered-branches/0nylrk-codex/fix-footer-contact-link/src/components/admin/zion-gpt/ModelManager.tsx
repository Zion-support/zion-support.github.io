
<<<<<<< HEAD

=======
import { useState, useEffect } from 'react',

import { useState, useEffect } from 'react',
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from 'react';

import { useState, useEffect } from 'react',

import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react',

import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Loader2, RefreshCw, Play, CheckCircle, AlertCircle} from "lucide-react";
import {supabase} from '@/integrations/supabase/client';

import {ModelConfig} from '@/utils/zion-gpt';


interface ModelVersionData extends ModelConfig {

interface ModelVersionData extends ModelConfig {}
'
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed'

  errorMessage?: string

export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;

  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels();
  }, []);

  const fetchModels = async () => {;
    try {;
      setIsLoading(true);

<<<<<<< HEAD

=======
  errorMessage?: string;
export function ZionGPTModelManager() { return null; }
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;

  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels();
  }, []);

  const fetchModels = async () => {;
    try {;
      setIsLoading(true);


>>>>>>> origin/cursor/delete-old-data-records-6bba
      console.error ('Error fetching models:', error);
    } finally {}
      setIsLoading (false);
    }

<<<<<<< HEAD
  }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
      // Update the local model status;
      set_models (prev =>;
        prev.map (model =>;
          model.id === model_id;
            ? { ...model, training_status: data.status, error_message: data.error || null }
            : model));
;
      // Also update in the database;

<<<<<<< HEAD
      await supabase;
        .from ('model_versions');
        .update ({
          training_status: data.status,
          error_message: data.error || null,
          // If training succeeded, automatically set to active;
          ...(data.status === 'succeeded' ? { active: true } : {});
        });
        .eq ('id', model_id);
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      console.error (`Error checking status for model ${model_id}:`, error);
    } finally {}
      setActiveJobs (prev => ({ ...prev, [model_id]: false }));
    }
  }

<<<<<<< HEAD
    }

}
export function ZionGPTModelManager() {
  const [models, setModels] = useState<ModelVersionData[]>([]),

export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({})
  // Fetch model data on component mount
  useEffect(() => {
    fetchModels()
  }, []);

  const fetchModels = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('model_versions')
        .select('*')
        .order('createdAt', { ascending: false })
      if (error) throw error;
      // Map the data to our component state
      setModels(data.map(model => ({
        id: model.id
        version: model.version
        createdAt: model.created_at
        baseModel: model.base_model
        purpose: model.purpose
        active: model.active
        trainingStatus: model.training_status
        errorMessage: model.error_message
      })))
    } catch (error) {
      console.error('Error fetching models:', error)
    } finally {
      setIsLoading(false)
    }
  }
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
            ? { ...model, trainingStatus: data.status, errorMessage: data.error |null }
            : model
        )
      );
      // Also update in the database
      await supabase
        .from('model_versions')
        .update({
          training_status: data.status
          error_message: data.error |null
          // If training succeeded, automatically set to active
          ...(data.status === 'succeeded' ? { active: true } : {})
        })
        .eq('id', modelId)
    } catch (error) {
      console.error(`Error checking status for model ${modelId}:`, error)
    } finally {
      setActiveJobs(prev => ({ ...prev, [modelId]: false }))
    }
  }
  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {
    try {
      // If activating, deactivate all other models with the same purpose
      if (!currentActive) {
        await supabase
          .from('model_versions')
          .update({ active: false })
          .eq('purpose', purpose)
      }
      // Update this model
      await supabase
        .from('model_versions')
        .update({ active: !currentActive })
        .eq('id', modelId);
      // Refresh the model list
      fetchModels()
    } catch (error) {
      console.error('Error toggling model active state:', error)
    }
  }

=======
import { Button } from "@/components/ui/button";"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",;"
import { supabase } from '@/integrations/supabase/client',;'
import { ModelConfig } from '@/utils/zion-gpt',;'
interface ModelVersionData extends ModelConfig {;
  }
  "trainingStatus": 'queued' | 'running' | 'succeeded' | 'failed',;'
  errorMessage?: string;
}
;
export function ZionGPTModelManager() {;
  }
  const [models, setModels] = useState<ModelVersionData[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [activeJobs, setActiveJobs] = useState<{["key": string]: boolean}>({}),;
  // Fetch model data on component mount;
  useEffect(() => {;
    }
    fetchModels();
  }, []),;
  const fetchModels = async () => {;
    }
    try {;
      }
      setIsLoading(true),;
        .from('model_versions');'
        .select('*');'
        .order('createdAt', { "ascending": false }),;      // Also update in the database;'
      await supabase;
        .from('model_versions');'
        .update({;
          }
          "training_status": data && data.status,;
          "error_message": data && data.error || null,;
          // If training succeeded, automatically set to active;
          ...(data && data.status === 'succeeded' ? { "active": true } : {});'
        });
        .eq('id', modelId);'
    } catch (error) {;
      }
      console && console.error(`Error checking status for model ${modelId}:`, error);`
    } finally {;
      }
      setActiveJobs(prev => ({ ...prev, [modelId]: false }));
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  };
import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',
  errorMessage?: string

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect } from 'react',;

import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",;
import { supabase } from '@/integrations/supabase/client',;

import { ModelConfig } from '@/utils/zion-gpt',;
interface ModelVersionData extends ModelConfig {;'
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',;
  errorMessage?: string;
}
;
export function ZionGPTModelManager() { return null; }

  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;
  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels();
  }, []);
  const fetchModels = async () => {;
    try {;

<<<<<<< HEAD
      setIsLoading(true),;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      const { data, error } = await supabase;
        .from('model_versions');
        .select('*');
        .order('createdAt', { ascending: false }),;

<<<<<<< HEAD
=======

  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  return (
    <Card className="w-full">;
      <CardHeader className="flex flex - row items - center justify-between">;
        <div>;
          <CardTitle > ZionGPT Models</CardTitle>;
          <CardDescription>;
            Manage fine - tuned AI models for different platform features;
          </CardDescription>;
        </div>;
        <Button on_click={fetch_models} variant="outline" size="sm">;
          <RefreshCw className="h - 4 w - 4 mr-2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {is_loading ? (
          <div className="flex items - center justify - center h-24">;
            <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
          </div>) : (
          <Table>;
            <TableHeader>;
              <TableRow>;


  };

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;

          .eq('purpose', purpose);
      }

<<<<<<< HEAD


      // Update this model;

        .eq('id', modelId);


=======
      // Update this model;

        .eq('id', modelId);
      // Update this model;

        .eq('id', modelId);
      // Refresh the model list;
      fetchModels();
    } catch (error) {;




  }
  return (
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
      console.error('Error toggling model active state:', error),;
    }
  },;
;
  return (;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Refresh the model list;
      fetchModels();
    } catch (error) {;

  return (

<<<<<<< HEAD
    }

  },

  return (

=======

  }
  return ()
          .update({ active:false });'
          .eq('purpose', purpose),;'
      }
      ;
      // Update this model;
      await supabase;'
        .from('model_versions');'
        .update({ active:!currentActive });'
        .eq('id', modelId),;'
      ;
      // Refresh the model list;
      fetchModels(),;
    } catch (error) {;'
      console.error('Error toggling model active state:', error),;'
    }
  },;
;
  return (;

    }

  },
    }
  }

    <Card className="w-full">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CardHeader className="flex flex-row items-center justify-between">;

        <div>;
</div>
          <CardTitle>ZionGPT Models</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;

          <RefreshCw className="h-4 w-4 mr-2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;

<<<<<<< HEAD
        {isLoading ? (;
          <div className="flex items-center justify-center h-24">;
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;
          </div>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <Table>;
</Table>
            <TableHeader>;
</TableHeader>
              <TableRow>;
</TableRow>
                <TableHead>Model ID</TableHead>;
                <TableHead>Version</TableHead>;
                <TableHead>Purpose</TableHead>;
                <TableHead>Base Model</TableHead>;
                <TableHead>Status</TableHead>;

                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;

<<<<<<< HEAD

=======

                  <TableCell className="font-medium">{model && model.id}</TableCell>;

                  <TableCell>v{model && model.version}</TableCell>;
                  <TableCell>{model && model.purpose}</TableCell>;
                  <TableCell>{model && model.baseModel}</TableCell>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
                        size="sm"
                        onClick={() => checkTrainingStatus(model && model.id)}
                        disabled={activeJobs[model && model.id]}
                      >;

<<<<<<< HEAD
                        {activeJobs[model && model.id] ? (;
                          <Loader2 className="h-4 w-4 animate-spin" />;
                        ) : (;

=======

                        size="sm"
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}
                      >;
                        {model && model.active ? (;


>>>>>>> origin/cursor/delete-old-data-records-6bba
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;

<<<<<<< HEAD
=======

                        title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    )}

                  </TableCell>;
                </TableRow>;

<<<<<<< HEAD
=======

                    )}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

              ))}
            </TableBody>;
          </Table>;
        )}

=======

              ))}
            </TableBody>;
          </Table>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      </CardContent>;
    </Card>;
  );
}


;

  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string) => {
    try {

      // If activating, deactivate all other models with the same purpose;
      // Check condition;
if ( {) {}
  $2;
}
        await supabase;'
          .from ('model_versions');
          .update ({ active: false });'
          .eq ('purpose', purpose);
      }
      // Update this model;
      await supabase;'
        .from ('model_versions');
        .update ({ active: !current_active });'
        .eq ('id', model_id);
;
      // Refresh the model list;
      fetch_models ();
    } catch (error) {'
      console.error ('Error toggling model active state:', error);
    }
  }
;


<<<<<<< HEAD



=======
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
