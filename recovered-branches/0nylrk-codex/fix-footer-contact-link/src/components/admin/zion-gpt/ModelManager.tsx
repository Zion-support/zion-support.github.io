
import { useState, useEffect } from 'react',

import { useState, useEffect } from 'react',

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",


import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',


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


      console.error ('Error fetching models:', error);
    } finally {}
      setIsLoading (false);
    }


}
      // Update the local model status;
      set_models (prev =>;
        prev.map (model =>;
          model.id === model_id;
            ? { ...model, training_status: data.status, error_message: data.error || null }
            : model));
;
      // Also update in the database;


      console.error (`Error checking status for model ${model_id}:`, error);
    } finally {}
      setActiveJobs (prev => ({ ...prev, [model_id]: false }));
    }
  }

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
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';


  };
import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',
  errorMessage?: string

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


      const { data, error } = await supabase;
        .from('model_versions');
        .select('*');
        .order('createdAt', { ascending: false }),;


  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;

  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels();
  }, []);

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

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;

          .eq('purpose', purpose);
      }

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

      // Refresh the model list;
      fetchModels();
    } catch (error) {;

  return (


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


                  <TableCell className="font-medium">{model && model.id}</TableCell>;

                  <TableCell>v{model && model.version}</TableCell>;
                  <TableCell>{model && model.purpose}</TableCell>;
                  <TableCell>{model && model.baseModel}</TableCell>;


                        size="sm"
                        onClick={() => checkTrainingStatus(model && model.id)}
                        disabled={activeJobs[model && model.id]}
                      >;


                        size="sm"
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}
                      >;
                        {model && model.active ? (;


                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;


                        title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;

                    )}

                  </TableCell>;
                </TableRow>;


                    )}

                  </TableCell>;
                </TableRow>;


              ))}
            </TableBody>;
          </Table>;

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


}
