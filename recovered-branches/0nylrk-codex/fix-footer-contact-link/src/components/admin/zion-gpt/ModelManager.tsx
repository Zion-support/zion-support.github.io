
import { useState, useEffect } from 'react',
import { useState, useEffect } from 'react',

import { useState, useEffect  } from 'react';
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
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",import {useState, useEffect} from 'react';

import { useState, useEffect } from 'react',

import { useState, useEffect } from 'react',

import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react',

import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",import {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Loader2, RefreshCw, Play, CheckCircle, AlertCircle} from "lucide-react";
import {supabase} from '@/integrations/supabase/client';
import {ModelConfig} from '@/utils/zion-gpt';

interface ModelVersionData extends ModelConfig {
import {ModelConfig} from '@/utils/zion-gpt';interface ModelVersionData extends ModelConfig {
import {ModelConfig} from '@/utils/zion-gpt';interface ModelVersionData extends ModelConfig {

interface ModelVersionData extends ModelConfig {}
'
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed'

  errorMessage?: string
}
export function ZionGPTModelManager() {
  const [models, setModels] = useState<ModelVersionData[]>([]),

export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);
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
import {useState, useEffect} from 'react';

import {useState, useEffect} from 'react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from './lucide-react';
import {supabase} from '@/integrations / supabase / client';
import {ModelConfig} from '@/utils / zion - gpt';
interface ModelVersionData extends ModelConfig {'
  training_status: 'queued' | 'running' | 'succeeded' | 'failed',
  error_message?: string;
}
export /**;
 * ZionGPTModelManager - Function description;
 */
function ZionGPTModelManager() {}
  const [models, set_models] = useState < ModelVersionData[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [active_jobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),
  // Fetch model data on component mount;
  useEffect (() => {}
    fetch_models ();
  }, []);
;
  const fetch_models = async () => {}
    try {}
      setIsLoading (true);
      const { data, error } = await supabase;'
        .from ('model_versions');'
        .select ('*');'
        .order ('created_at', { ascending: false }),
      // Check condition;
if (throw error) {}
  $2;
}
      // Map the data to our component state;
      set_models (data.map (model => ({}
        id: model.id,
        version: model.version,
        created_at: model.created_at,
        base_model: model.base_model,
        purpose: model.purpose,
        active: model.active,
        training_status: model.training_status,
        error_message: model.error_message;
      })));
} catch (error) {
      console.error ('Error fetching models:', error);
    } finally {}
      setIsLoading (false);
    }
}    } catch (error) {
}
      // Update the local model status;
      set_models (prev =>;
        prev.map (model =>;
          model.id === model_id;
            ? { ...model, training_status: data.status, error_message: data.error || null }
            : model));
;
      // Also update in the database;
await supabase;'
        .from ('model_versions');
        .update ({}
          training_status: data.status,
          error_message: data.error || null,
          // If training succeeded, automatically set to active;'
          ...(data.status === 'succeeded' ? { active: true } : {});
        });'
        .eq ('id', model_id);

    } catch (error) {}
      console.error (`Error checking status for model ${model_id}:`, error);
    } finally {}
      setActiveJobs (prev => ({ ...prev, [model_id]: false }));
    }
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

import { useState, useEffect } from 'react',;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",;
import { supabase } from '@/integrations/supabase/client',;
  };'
import { useState, useEffect } from 'react',"
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table","
import { Badge } from "@/components/ui/badge","
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",'
import { supabase } from '@/integrations/supabase/client','
import { ModelConfig } from '@/utils/zion-gpt',
interface ModelVersionData extends ModelConfig {'
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',;
  errorMessage?: string;
'
import { useState, useEffect } from 'react',;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",;'
import { supabase } from '@/integrations/supabase/client',;'
import { ModelConfig } from '@/utils/zion-gpt',;
interface ModelVersionData extends ModelConfig {;'
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',;
  errorMessage?: string;
}
;
export function ZionGPTModelManager() { return null; }
interface ModelVersionData extends ModelConfig {;
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',;
  errorMessage?: string;
}
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
setIsLoading(true),;
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

// Update the local model status;
      setModels(prev => ;
        prev && prev.map(model => ;
          model && model.id === modelId ;
            ? { ...model, trainingStatus: data && data.status, errorMessage: data && data.error || null } ;
            : model;
        );
      );

      // Also update in the database;
      await supabase;
        .from('model_versions');
        .update({;
          training_status: data && data.status,;
          error_message: data && data.error || null,;
          // If training succeeded, automatically set to active;
          ...(data && data.status === 'succeeded' ? { active: true } : {});
        });
        .eq('id', modelId);

    } catch (error) {;
      console && console.error(`Error checking status for model ${modelId}:`, error);
    } finally {;
      setActiveJobs(prev => ({ ...prev, [modelId]: false }));
    }
  };

  };

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
await supabase;'
          .from('model_versions');
          .update({ active: false });'
          .eq('purpose', purpose);
      }

      // Update this model;
await supabase;'
        .from('model_versions');
        .update({ active: !currentActive });'
        .eq('id', modelId);

      // Refresh the model list;
      fetchModels();
    } catch (error) {;
      console && console.error('Error toggling model active state:', error);
    }

  },

  return (
    }

  },

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

return (
"
    <Card className="w-full">;"
      <CardHeader className="flex flex-row items-center justify-between">;
        <div>;
</div>
          <CardTitle>ZionGPT Models</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
</div>;"
        <Button onClick={fetchModels} variant="outline" size="sm">;"
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
{isLoading ? (;"
          <div className="flex items-center justify-center h-24">;"
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;
          </div>;

        ) : (;
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
<TableHead>Created</TableHead>;"
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
{models && models.map((model) => (;
                <TableRow key={model && model.id}>;"
                  <TableCell className="font-medium">{model && model.id}</TableCell>;
                  <TableCell>v{model && model.version}</TableCell>;
                  <TableCell>{model && model.purpose}</TableCell>;
                  <TableCell>{model && model.baseModel}</TableCell>;
<TableCell>;'
                    {model && model.trainingStatus === 'succeeded' ? (;"
                      <Badge className="bg-green-500">Ready</Badge>;'
                    ) : model && model.trainingStatus === 'failed' ? (;"
                      <Badge className="bg-red-500">Failed</Badge>;'
                    ) : model && model.trainingStatus === 'running' ? (;"
                      <Badge className="bg-blue-500">Training</Badge>;
                    ) : (;"
                      <Badge className="bg-yellow-500">Queued</Badge>;
                    )}
"
                    {model && model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date(model && model.createdAt).toLocaleDateString()}</TableCell>;"
                  <TableCell className="text-right">;'
                    {model && model.trainingStatus === 'queued' || model && model.trainingStatus === 'running' ? (;

                      <Button"
                        variant="ghost""
                        size="sm"
                        onClick={() => checkTrainingStatus(model && model.id)}
                        disabled={activeJobs[model && model.id]}
                      >;
{activeJobs[model && model.id] ? (;"
                          <Loader2 className="h-4 w-4 animate-spin" />;
                        ) : (;

"
                          <RefreshCw className="h-4 w-4" />;
                        )}"
                        <span className="ml-1">Check</span>;
                      </Button>;
'
                    ) : model && model.trainingStatus === 'succeeded' ? (;
                      <Button"
                        variant={model && model.active ? "outline" : "default"}"
                        size="sm"
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}
                      >;
                        {model && model.active ? (;
<>;"
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;
                          </>;
                        ) : (;

                          <>;"
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;
) : (;

                      <Button"
                        variant="ghost""
                        size="sm""
                        className="text-red-500"

title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;

                    )}
                  </TableCell>;
                </TableRow>;

                    )}
  };                    )}
  };                    )}
                  </TableCell>;
                </TableRow>;
                    )}

                  </TableCell>;
                </TableRow>;

              ))}
            </TableBody>;
          </Table>;
        )}

      </CardContent>;
    </Card>;
  );
}
;
        )};
      </CardContent>;
    </Card>;
;
;
  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string) => {
    try {

  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string) => {}
    try {}
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
return (
<Card className="w-full">;
      <CardHeader className="flex flex - row items - center justify-between">;
</TableCell>"
                      <Badge className="bg-green-500">Ready</Badge>;""
                      <Badge className="bg-red-500">Failed</Badge>;""
                      <Badge className="bg-blue-500">Training</Badge>;""
                      <Badge className="bg-yellow-500">Queued</Badge>;""
                    {model && model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}"
                  </TableCell>;)
                  <TableCell>{new Date(model && model.createdAt).toLocaleDateString()}</TableCell>;"
                  <TableCell className="text-right">;"
</TableCell>
                      <Button;"
                        variant="ghost"""
                        size="sm""
                        onClick={() => checkTrainingStatus(model && model.id)}
</Button>"
                          <Loader2 className="h-4 w-4 animate-spin" />;"
</Loader2>"
                          <RefreshCw className="h-4 w-4" />;"
</RefreshCw>"
                        <span className="ml-1">Check</span>;"
                      </Button>;
                      <Button;"
                        variant={model && model.active ? "outline" : "default"}""
                        size="sm""
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}
</Button>
                          <>;"
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;"
</CheckCircle>
                          </>;
                        ) : (;
                          <>;"
                            <Play className="h-4 w-4 mr-1" /> Activate;"
</Play>
                          </>;)
                        )}
                      </Button>;
                      <Button;"
                        variant="ghost"""
                        size="sm"""
                        className="text-red-500"""
                        title={model && model.errorMessage || "Training failed"}>;"
</Button>"
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;"
</AlertCircle>
                      </Button>;
                  </TableCell>;
                </TableRow>;
                  </TableCell>;
                </TableRow>;
            </TableBody>;
          </Table>;
      </CardContent>;
    </Card>;
      </CardContent>;
    </Card>;"
    <Card className="w - full">;"
</Card>"
      <CardHeader className="flex flex - row items - center justify - between">;"
</CardHeader>
        <div>;
</div>
          <CardTitle > ZionGPT Models</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
</div>;
        <Button on_click={fetch_models} variant="outline" size="sm">;
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {is_loading ? (
          <div className="flex items - center justify - center h-24">;
            <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
        </div>;"
        <Button on_click={fetch_models} variant="outline" size="sm">;"
</Button>"
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;"
</RefreshCw>
        </Button>;
      </CardHeader>;
      <CardContent>;
</CardContent>"
          <div className="flex items - center justify - center h - 24">;"
</div>"
            <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;"
</Loader2>
          </div>) : (
          <Table>;
</Table>
            <TableHeader>;
</TableHeader>
              <TableRow>;
</TableRow>
                <TableHead > Model ID</TableHead>;
                <TableHead > Version</TableHead>;
                <TableHead > Purpose</TableHead>;
                <TableHead > Base Model</TableHead>;
                <TableHead > Status</TableHead>;
<TableHead > Created</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {models.map ((model) => (
<TableRow key={model.id}>;
                  <TableCell className="font-medium">{model.id}</TableCell>;
                <TableHead > Created</TableHead>;"
                <TableHead className="text - right">Actions</TableHead>;"
              </TableRow>;
            </TableHeader>;
            <TableBody>;
</TableBody>
                <TableRow key={model.id}>;
</TableRow>"
                  <TableCell className="font - medium">{model.id}</TableCell>;"
                  <TableCell > v{model.version}</TableCell>;
                  <TableCell>{model.purpose}</TableCell>;
                  <TableCell>{model.base_model}</TableCell>;
                  <TableCell>;
                    {model.training_status === 'succeeded' ? (
                      <Badge className="bg - green-500">Ready</Badge>) : model.training_status === 'failed' ? (
                      <Badge className="bg - red-500">Failed</Badge>) : model.training_status === 'running' ? (
                      <Badge className="bg - blue-500">Training</Badge>) : (
                      <Badge className="bg - yellow-500">Queued</Badge>)}
                    {model.active && <Badge className="ml - 2 bg - purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date (model.created_at).toLocaleDateString ()}</TableCell>;
                  <TableCell className="text-right">;
                  <TableCell className="text-right">;
                    {model.training_status === 'queued' || model.training_status === 'running' ? (
                      <Button;"
                        variant="ghost";"
                        size="sm";
                        on_click={() => checkTrainingStatus (model.id)}
                        disabled={active_jobs[model.id]}
                      >;
{active_jobs[model.id] ? (
                          <Loader2 className="h - 4 w - 4 animate-spin" />) : (
                          <RefreshCw className="h - 4 w-4" />)}
                        <span className="ml-1">Check</span>;
                          <Loader2 className="h - 4 w - 4 animate-spin" />) : (
                          <RefreshCw className="h - 4 w-4" />)}
                        <span className="ml-1">Check</span>;
                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;"
                        variant={model.active ? "outline" : "default"}"
                        size="sm";
                        on_click={() => toggleModelActive (model.id, model.active, model.purpose)}
                      >;
                        {model.active ? (
<>;
                            <CheckCircle className="h - 4 w - 4 mr-1" /> Active;
                          </>) : (
                          <>;
                            <Play className="h - 4 w - 4 mr-1" /> Activate;
                          </>)}
                      </Button>) : (
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text - red-500";
                        title={model.error_message || "Training failed"}
                      >;
                        <AlertCircle className="h - 4 w - 4 mr-1" /> Error;
                        <AlertCircle className="h - 4 w - 4 mr-1" /> Error;
</TableCell>)"
                      <Badge className="bg - green - 500">Ready</Badge>) : model.training_status === 'failed' ? (')'
                      <Badge className="bg - red - 500">Failed</Badge>) : model.training_status === 'running' ? (')'
                      <Badge className="bg - blue - 500">Training</Badge>) : (")"
                      <Badge className="bg - yellow - 500">Queued</Badge>)}""
                    {model.active && <Badge className="ml - 2 bg - purple - 500">Active</Badge>}"
                  </TableCell>;
                  <TableCell>{new Date (model.created_at).toLocaleDateString ()}</TableCell>;"
                  <TableCell className="text - right">;"
</TableCell>
                      <Button;"
                        variant="ghost";""
                        size="sm";"
                        on_click={() => checkTrainingStatus (model.id)}
</Button>"
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
</Loader2>)"
                          <RefreshCw className="h - 4 w - 4" />)}"
</RefreshCw>"
                        <span className="ml - 1">Check</span>;""
                      </Button>) : model.training_status === 'succeeded' ? ('
                      <Button;'
                        variant={model.active ? "outline" : "default"}""
                        size="sm";")
                        on_click={() => toggleModelActive (model.id, model.active, model.purpose)}
</Button>
                          <>;"
                            <CheckCircle className="h - 4 w - 4 mr - 1" /> Active;"
</CheckCircle>
                          </>) : (
                          <>;"
                            <Play className="h - 4 w - 4 mr - 1" /> Activate;"
</Play>)
                          </>)}
                      </Button>) : (
                      <Button;"
                        variant="ghost";""
                        size="sm";""
                        className="text - red - 500";""
                        title={model.error_message || "Training failed"}"
                      >;
</Button>"
                        <AlertCircle className="h - 4 w - 4 mr - 1" /> Error;"
</AlertCircle>)

                      </Button>)}
                  </TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>)}
      </CardContent>;
    </Card>);
}
};
const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {
  try {
  //If activating, deactivate all other models with the same purpose if (!currentActive) {
  await supabase .from ('model versions') 
}//Update this model await supabase .from ('model versions') return (<Card className="w-full" > <CardHeader className="flex flex-row items-center justify-between" > <div> <CardTitle>ZionGPT Models</CardTitle> <CardDescription> Manage fine-tuned AI models for different platform features </CardDescription> </div> </div>) : (<Table> <TableHeader> <TableRow> <TableHead>Model ID</TableHead> <TableHead>Version</TableHead> <TableHead>Purpose</TableHead> <TableHead>Base Model</TableHead> <TableHead>Status</TableHead> <TableHead>Created</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  models.map ( (model) => (<TableRow key= {
  model.id 
}>) : model.trainingStatus === 'failed' ? (<Badge className="bg-red-500" >Failed</Badge>) : model.trainingStatus === 'running' ? (<Badge className="bg-blue-500" >Training</Badge>) : (<Badge className="bg-yellow-500" >Queued</Badge>) 
}onClick= {
  () => checkTrainingStatus (model.id) 
}disabled= {
  activeJobs[model.id] 
}>) : (<RefreshCw className="h-4 w-4" />) 
}<span className="ml-1" >Check</span> </Button> > {
  model.active ? (<> <CheckCircle className="h-4 w-4 mr-1" /> Active </>) : (<> <Play className="h-4 w-4 mr-1" /> Activate </>) 
}</Button>) : (<Button > <AlertCircle className="h-4 w-4 mr-1" /> Error </Button>) 
}</TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
}</CardContent> </Card>) 
}
                        title={model.errorMessage |"Training failed"}
                      >
                        <AlertCircle className="h-4 w-4 mr-1" /> Error
                      </Button>
                    )}

    </Card>);"
}//Update this model await supabase .from ('model versions') return (<Card className="w-full" > <CardHeader className="flex flex-row items-center justify-between" > <div> <CardTitle>ZionGPT Models</CardTitle> <CardDescription> Manage fine-tuned AI models for different platform features </CardDescription> </div> </div>) : (<Table> <TableHeader> <TableRow> <TableHead>Model ID</TableHead> <TableHead>Version</TableHead> <TableHead>Purpose</TableHead> <TableHead>Base Model</TableHead> <TableHead>Status</TableHead> <TableHead>Created</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {"
</Card>)
  models.map ( (model) => (<TableRow key= {
  model.id;)"
}>) : model.trainingStatus === 'failed' ? (<Badge className="bg-red-500" >Failed</Badge>) : model.trainingStatus === 'running' ? (<Badge className="bg-blue-500" >Training</Badge>) : (<Badge className="bg-yellow-500" >Queued</Badge>)"
</TableRow>"
}>) : (<RefreshCw className="h-4 w-4" />)"
</RefreshCw>"
}<span className="ml-1" >Check</span> </Button> > {""
  model.active ? (<> <CheckCircle className="h-4 w-4 mr-1" /> Active </>) : (<> <Play className="h-4 w-4 mr-1" /> Activate </>)"
</CheckCircle>"
}</Button>) : (<Button > <AlertCircle className="h-4 w-4 mr-1" /> Error </Button>)"
}</TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
}</CardContent> </Card>) "
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;"
</AlertCircle>

                      </Button>
                  </TableCell>
                </TableRow>
                  </TableCell>;
                </TableRow>;
              ))}
            </TableBody>
          </Table>
)}
      </CardContent>
    </Card>
      </CardContent>;
    </Card>;
  );
}

'"`
  const [models, setModels] = useState<ModelVersionData[]>([]),;

  // Fetch model data on component mount;
  }, []),;
      setIsLoading(true),;

        .from('model_versions');
        .select('*');
        .order('createdAt', { ascending: false }),;
      if (error) throw error;

      // Map the data to our component state;
      setModels(data && data.map(model => ({;
        id: model && model.id,;
        version: model && model.version,;
        createdAt: model && model.created_at,;
        baseModel: model && model.base_model,;
        purpose: model && model.purpose,;
        active: model && model.active,;
        trainingStatus: model && model.training_status,;
        errorMessage: model && model.error_message;)
    } catch (error) {;
      console && console.error('Error fetching models:', error);
    } finally {;
      setIsLoading(false);

  const checkTrainingStatus = async (modelId: string) => {;
      setActiveJobs(prev => ({ ...prev, [modelId]: true }));

      // Call an edge function that checks the OpenAI fine-tuning job status;
      const { data, error } = await supabase && supabase.functions.invoke('check-training-status', {;
        body: { modelId })

      // Update the local model status;
      setModels(prev => ;
        prev && prev.map(model => ;
          model && model.id === modelId ;
            ? { ...model, trainingStatus: data && data.status, errorMessage: data && data.error || null } ;
            : model;)
        );

      // Also update in the database;
        .update({;
          training_status: data && data.status,;
          error_message: data && data.error || null,;
          // If training succeeded, automatically set to active;)
          ...(data && data.status === 'succeeded' ? { active: true } : {});
        .eq('id', modelId);
    } catch (error) {;`;
      console && console.error(`Error checking status for model ${modelId}:`, error);
      setActiveJobs(prev => ({ ...prev, [modelId]: false }));

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
          .update({ active: false });
          .eq('purpose', purpose);

      // Update this model;
        .update({ active: !currentActive });
      // Refresh the model list;
      console && console.error('Error toggling model active state:', error);

  },

  return (

  return ()
          .update({ active:false });
          .eq('purpose', purpose),;
      // Update this model;
        .update({ active:!currentActive });
        .eq('id', modelId),;
      // Refresh the model list;
      fetchModels(),;
      console.error('Error toggling model active state:', error),;
  },;
  return (;

    <Card className="w-full">;"
"
      <CardHeader className="flex flex-row items-center justify-between">;"

        <div>;
</div>
          <CardTitle>ZionGPT Models;
          <CardDescription>;

        </div>;"
        <Button onClick={fetchModels} variant="outline" size="sm">;"
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh;"

      <CardContent>;
          <div className="flex items-center justify-center h-24">;"
</div>"
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;"
</Loader2>
          </div>;
          <Table>;

            <TableHeader>;

              <TableRow>;

                <TableHead>Model ID;
                <TableHead>Version;
                <TableHead>Purpose;
                <TableHead>Base Model;
                <TableHead>Status;
                <TableHead>Created;"
                <TableHead className="text-right">Actions;"
            <TableBody>;

                <TableRow key={model && model.id}>;
                  <TableCell className="font-medium">{model && model.id};"
                  <TableCell>v{model && model.version};
                  <TableCell>{model && model.purpose};
                  <TableCell>{model && model.baseModel};
                  <TableCell>;
                      <Badge className="bg-green-500">Ready;""
                      <Badge className="bg-red-500">Failed;""
                      <Badge className="bg-blue-500">Training;""
                      <Badge className="bg-yellow-500">Queued;""
                    {model && model.active && <Badge className="ml-2 bg-purple-500">Active}"
                  ;)
                  <TableCell>{new Date(model && model.createdAt).toLocaleDateString()};"
                  <TableCell className="text-right">;"

                      <Button;"
                        variant="ghost"""
                        size="sm""
                        onClick={() => checkTrainingStatus(model && model.id)}
                          <Loader2 className="h-4 w-4 animate-spin" />;"
</Loader2>"
                          <RefreshCw className="h-4 w-4" />;"
                        <span className="ml-1">Check</span>;"
                        variant={model && model.active ? "outline" : "default"}""
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}

                          <>;"
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;"

                          </>;
                        ) : (;
                            <Play className="h-4 w-4 mr-1" /> Activate;"

                          </>;)
                        )}
                        size="sm"""
                        className="text-red-500"""
                        title={model && model.errorMessage || "Training failed"}>;"
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;"

    ;"
    <Card className="w - full">;"
      <CardHeader className="flex flex - row items - center justify - between">;"

          <CardTitle > ZionGPT Models;

        <Button on_click={fetch_models} variant="outline" size="sm">;"
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;"

          <div className="flex items - center justify - center h - 24">;"
            <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;"
          </div>) : (

                <TableHead > Model ID;
                <TableHead > Version;
                <TableHead > Purpose;
                <TableHead > Base Model;
                <TableHead > Status;
                <TableHead > Created;"
                <TableHead className="text - right">Actions;"

                <TableRow key={model.id}>;
                  <TableCell className="font - medium">{model.id};"
                  <TableCell > v{model.version};
                  <TableCell>{model.purpose};
                  <TableCell>{model.base_model};
)"
                      <Badge className="bg - green - 500">Ready) : model.training_status === 'failed' ? (')
                      <Badge className="bg - red - 500">Failed) : model.training_status === 'running' ? (')
                      <Badge className="bg - blue - 500">Training) : (")"
                      <Badge className="bg - yellow - 500">Queued)}""
                    {model.active && <Badge className="ml - 2 bg - purple - 500">Active}"
                  <TableCell>{new Date (model.created_at).toLocaleDateString ()};"
                  <TableCell className="text - right">;"

                        variant="ghost";""
                        size="sm";"
                        on_click={() => checkTrainingStatus (model.id)}
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
</Loader2>)"
                          <RefreshCw className="h - 4 w - 4" />)}"
                        <span className="ml - 1">Check</span>;""
                      ) : model.training_status === 'succeeded' ? (
                      <Button;
                        variant={model.active ? "outline" : "default"}""
                        size="sm";")
                        on_click={() => toggleModelActive (model.id, model.active, model.purpose)}

                            <CheckCircle className="h - 4 w - 4 mr - 1" /> Active;"

                          </>) : (
                            <Play className="h - 4 w - 4 mr - 1" /> Activate;"
)
                          </>)}
                      ) : (
                        size="sm";""
                        className="text - red - 500";""
                        title={model.error_message || "Training failed"}"
                      >;
                        <AlertCircle className="h - 4 w - 4 mr - 1" /> Error;"
                ))}
    );"
}//Update this model await supabase .from ('model versions') return (<Card className="w-full" > <CardHeader className="flex flex-row items-center justify-between" > <div> <CardTitle>ZionGPT Models <CardDescription> Manage fine-tuned AI models for different platform features  </div> </div>) : (<Table> <TableHeader> <TableRow> <TableHead>Model ID <TableHead>Version <TableHead>Purpose <TableHead>Base Model <TableHead>Status <TableHead>Created <TableHead className="text-right" >Actions   <TableBody> {"
  models.map ( (model) => (<TableRow key= {
  model.id;)"
}>) : model.trainingStatus === 'failed' ? (<Badge className="bg-red-500" >Failed) : model.trainingStatus === 'running' ? (<Badge className="bg-blue-500" >Training) : (<Badge className="bg-yellow-500" >Queued)"
}>) : (<RefreshCw className="h-4 w-4" />)"
}<span className="ml-1" >Check</span>  > {""
  model.active ? (<> <CheckCircle className="h-4 w-4 mr-1" /> Active </>) : (<> <Play className="h-4 w-4 mr-1" /> Activate </>)"
}) : (<Button > <AlertCircle className="h-4 w-4 mr-1" /> Error )"
} ) ) 
} ) 
} ) "

    ;"`;
pr-12325
;
