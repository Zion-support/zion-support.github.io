
import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
import {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Loader2, RefreshCw, Play, CheckCircle, AlertCircle} from "lucide-react";
import {supabase} from '@/integrations/supabase/client';
import {ModelConfig} from '@/utils/zion-gpt';
interface ModelVersionData extends ModelConfig {

  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed'

  errorMessage?: string
}
export function ZionGPTModelManager() {
  const [models, setModels] = useState<ModelVersionData[]>([]),

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

import {useState, useEffect} from 'react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from './lucide-react';
import {supabase} from '@/integrations / supabase / client';
import {ModelConfig} from '@/utils / zion - gpt';
interface ModelVersionData extends ModelConfig {
  training_status: 'queued' | 'running' | 'succeeded' | 'failed',
  error_message?: string;
}
export /**
 * ZionGPTModelManager - Function description
 */
function ZionGPTModelManager() {
  const [models, set_models] = useState < ModelVersionData[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [active_jobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),
  // Fetch model data on component mount;
  useEffect (() => {
    fetch_models ();
  }, []);
;
  const fetch_models = async () => {
    try {
      setIsLoading (true);
      const { data, error } = await supabase;
        .from ('model_versions');
        .select ('*');
        .order ('created_at', { ascending: false }),
      // Check condition
if (throw error) {
  $2
}
      // Map the data to our component state;
      set_models (data.map (model => ({
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
    } finally {
      setIsLoading (false);
    }
  }

;
  const checkTrainingStatus = async (model_id: string) => {
    try {
      setActiveJobs (prev => ({ ...prev, [model_id]: true }));
;
      // Call an edge function that checks the OpenAI fine - tuning job status;
      const { data, error } = await supabase.functions.invoke ('check - training - status', {
        body: { model_id }
      });
;
      // Check condition
if (throw error) {
  $2
}
      // Update the local model status;
      set_models (prev =>;
        prev.map (model =>;
          model.id === model_id;
            ? { ...model, training_status: data.status, error_message: data.error || null }
            : model));
;
      // Also update in the database;
      await supabase;
        .from ('model_versions');
        .update ({
          training_status: data.status,
          error_message: data.error || null,
          // If training succeeded, automatically set to active;
          ...(data.status === 'succeeded' ? { active: true } : {});
        });
        .eq ('id', model_id);

    } catch (error) {
      console.error (`Error checking status for model ${model_id}:`, error);
    } finally {
      setActiveJobs (prev => ({ ...prev, [model_id]: false }));
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
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",;
import { supabase } from '@/integrations/supabase/client',;
import { ModelConfig } from '@/utils/zion-gpt',;
interface ModelVersionData extends ModelConfig {;
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',;
  errorMessage?: string;
}
;
export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;
  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels();
  }, []),;
  const fetchModels = async () => {;
    try {;
      setIsLoading(true),;

      const { data, error } = await supabase;
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
        errorMessage: model && model.error_message;
      })));
    } catch (error) {;
      console && console.error('Error fetching models:', error);
    } finally {;
      setIsLoading(false);
    }
  };

  const checkTrainingStatus = async (modelId: string) => {;
    try {;
      setActiveJobs(prev => ({ ...prev, [modelId]: true }));

      // Call an edge function that checks the OpenAI fine-tuning job status;
      const { data, error } = await supabase && supabase.functions.invoke('check-training-status', {;
        body: { modelId }
      });

      if (error) throw error;

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

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
        await supabase;
          .from('model_versions');
          .update({ active: false });
          .eq('purpose', purpose);
      }
      // Update this model
      await supabase
        .from('model_versions')
        .update({ active: !currentActive })
        .eq('id', modelId);

      // Refresh the model list;
      fetchModels();
    } catch (error) {;
      console && console.error('Error toggling model active state:', error);
    }

  },

                    {model && model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date(model && model.createdAt).toLocaleDateString()}</TableCell>;
                  <TableCell className="text-right">;
                    {model && model.trainingStatus === 'queued' || model && model.trainingStatus === 'running' ? (;

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => checkTrainingStatus(model && model.id)}
                        disabled={activeJobs[model && model.id]}
                      >;
                        {activeJobs[model && model.id] ? (;
                          <Loader2 className="h-4 w-4 animate-spin" />;
                        ) : (;
                          <RefreshCw className="h-4 w-4" />;
                        )}
                        <span className="ml-1">Check</span>;
                      </Button>;
                    ) : model && model.trainingStatus === 'succeeded' ? (;
                      <Button
                        variant={model && model.active ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}
                      >;
                        {model && model.active ? (;
                          <>;
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;
                          </>;
                        ) : (;
                          <>;
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;
                    ) : (;
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"

                        title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;

                    )}
                  </TableCell>
                </TableRow>
                  </TableCell>;
                </TableRow>;
              ))}
            </TableBody>;
          </Table>;
        )}
      </CardContent>
    </Card>
  )
}
      </CardContent>;
    </Card>;
  );
}
;
