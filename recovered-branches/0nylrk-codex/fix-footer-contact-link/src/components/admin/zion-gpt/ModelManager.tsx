<<<<<<< HEAD
import { useState, useEffect } from 'react',



<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react',
=======

import { useState, useEffect } from 'react',


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


import { useState, useEffect } from 'react',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Loader2, RefreshCw, Play, CheckCircle, AlertCircle} from "lucide-react";
import {supabase} from '@/integrations/supabase/client';
import {ModelConfig} from '@/utils/zion-gpt';

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ModelVersionData extends ModelConfig {

  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed'

  errorMessage?: string


<<<<<<< HEAD
<<<<<<< HEAD
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
      setIsLoading(true);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [isLoading, setIsLoading] = useState(true);
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;

  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }, []);

  const fetchModels = async () => {;
    try {;
      setIsLoading(true);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {
      console.error ('Error fetching models:', error);
    } finally {
      setIsLoading (false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (error) {
      console.error (`Error checking status for model ${model_id}:`, error);
    } finally {
      setActiveJobs (prev => ({ ...prev, [model_id]: false }));
    }
  }
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
=======

=======
    }

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const { data, error } = await supabase;
        .from('model_versions');
        .select('*');
        .order('createdAt', { ascending: false }),;

<<<<<<< HEAD
<<<<<<< HEAD
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
      if (error) throw error,;
      // Map the data to our component state;
      setModels(data.map(model => ({;
        id: model.id,;
        version: model.version,;
        createdAt: model.created_at,;
        baseModel: model.base_model,;
        purpose: model.purpose,;
        active: model.active,;
        trainingStatus: model.training_status,;
        errorMessage: model.error_message;
      })));
    } catch (error) {;
      console.error('Error fetching models:', error);
    } finally {;
      setIsLoading(false);
    }
  },;
  const checkTrainingStatus = async (modelId: string) => {;
    try {;
      setActiveJobs(prev => ({ ...prev, [modelId]: true })),;
      // Call an edge function that checks the OpenAI fine-tuning job status;
      const { data, error } = await supabase.functions.invoke('check-training-status', {;
        body: { modelId }
      }),;
      if (error) throw error,;
      // Update the local model status;
      setModels(prev =>;
        prev.map(model =>;
          model.id === modelId;
            ? { ...model, trainingStatus: data.status, errorMessage: data.error || null } ;
            : model;
        );
      ),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Also update in the database;
      await supabase;
        .from('model_versions');
        .update({;
<<<<<<< HEAD
<<<<<<< HEAD
          training_status:data.status,;
          error_message:data.error || null,;
          // If training succeeded, automatically set to active;
          ...(data.status === 'succeeded' ? { active:true } {});
        });
        .eq('id', modelId),;
      ;
    } catch (error) {;
      console.error(`Error checking status for model ${modelId} `, error),;
    } finally {;
      setActiveJobs(prev => ({ ...prev, [modelId]:false })),;
    }
  },;
;
  const toggleModelActive = async (modelId:string, currentActive:boolean, purpose:string) => {;
          training_status: data.status,;
          error_message: data.error || null,;
          // If training succeeded, automatically set to active;
          ...(data.status === 'succeeded' ? { active: true } : {});
        });
        .eq('id', modelId);
    } catch (error) {;
      console.error(`Error checking status for model ${modelId}:`, error);
    } finally {;
      setActiveJobs(prev => ({ ...prev, [modelId]: false }));
    }
  },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
        await supabase;
          .from('model_versions');
          .update({ active: false });
          .eq('purpose', purpose);
      }
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Update this model;
      await supabase;
        .from('model_versions');
        .update({ active: !currentActive });
        .eq('id', modelId);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      // Refresh the model list;
      fetchModels();
    } catch (error) {;
      console && console.error('Error toggling model active state:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        ) :(;
=======
        ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {models && models.map((model) => (;
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {model && model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date(model && model.createdAt).toLocaleDateString()}</TableCell>;
                  <TableCell className="text-right">;
                    {model && model.trainingStatus === 'queued' || model && model.trainingStatus === 'running' ? (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => checkTrainingStatus(model && model.id)}
                        disabled={activeJobs[model && model.id]}
                      >;
                        {activeJobs[model && model.id] ? (;
                          <Loader2 className="h-4 w-4 animate-spin" />;
                        ) : (;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <RefreshCw className="h-4 w-4" />;
                        )}
                        <span className="ml-1">Check</span>;
                      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <>;
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
      console.error('Error toggling model active state:', error);
    }
  },

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>ZionGPT Models</CardTitle>
          <CardDescription>
            Manage fine-tuned AI models for different platform features
          </CardDescription>
        </div>
        <Button onClick={fetchModels} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model) => (
                <TableRow key={model.id}>
                  <TableCell className="font-medium">{model.id}</TableCell>
                  <TableCell>v{model.version}</TableCell>
                  <TableCell>{model.purpose}</TableCell>
                  <TableCell>{model.baseModel}</TableCell>
                  <TableCell>
                    {model.trainingStatus === 'succeeded' ? (
                      <Badge className="bg-green-500">Ready</Badge>
                    ) : model.trainingStatus === 'failed' ? (
                      <Badge className="bg-red-500">Failed</Badge>
                    ) : model.trainingStatus === 'running' ? (
                      <Badge className="bg-blue-500">Training</Badge>
                    ) : (
                      <Badge className="bg-yellow-500">Queued</Badge>
                    )}
                    {model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>
                  <TableCell>{new Date(model.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    {model.trainingStatus === 'queued' |model.trainingStatus === 'running' ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => checkTrainingStatus(model.id)}
                        disabled={activeJobs[model.id]}
                      >
                        {activeJobs[model.id] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <RefreshCw className="h-4 w-4" />
                        )}
                        <span className="ml-1">Check</span>
                      </Button>
                    ) : model.trainingStatus === 'succeeded' ? (
                      <Button
                        variant={model.active ? "outline" : "default"}
                        size="sm"
                        onClick={() => toggleModelActive(model.id, model.active, model.purpose)}
                      >
                        {model.active ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" /> Active
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" /> Activate
                          </>
                        )}
                      </Button>
                    ) : (
=======
                    ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    ) : (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"
<<<<<<< HEAD
<<<<<<< HEAD
                        title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;
                    )}
                    ) :(;
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text-red-500";
                        title={model.errorMessage || "Training failed"}
                      >;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;                    )}
                  </TableCell>;
                </TableRow>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;

                    )}
<<<<<<< HEAD
                  </TableCell>;
                </TableRow>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    )}

                  </TableCell>;
                </TableRow>;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              ))}
            </TableBody>;
          </Table>;
        )}
<<<<<<< HEAD
      </CardContent>;
    </Card>;
  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string) => {
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
        .eq ('id', model_id);
;
      // Refresh the model list;
      fetch_models ();
    } catch (error) {
      console.error ('Error toggling model active state:', error);
    }
  }
;
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
              {models.map ((model) => (
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
                        on_click={() => checkTrainingStatus (model.id)}
                        disabled={active_jobs[model.id]}
                      >;
                        {active_jobs[model.id] ? (
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                          <RefreshCw className="h - 4 w - 4" />)}
                        <span className="ml - 1">Check</span>;
                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;
                        variant={model.active ? "outline" : "default"}
                        size="sm";
                        on_click={() => toggleModelActive (model.id, model.active, model.purpose)}
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
                        title={model.error_message || "Training failed"}
                      >;
                        <AlertCircle className="h - 4 w - 4 mr - 1" /> Error;
                      </Button>)}
                  </TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>)}
      </CardContent>;
    </Card>);
  ),; interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed';
errorMessage?: string 
}export function ZionGPTModelManager () {
  const [models, setModels] = useState<ModelVersionData[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [activeJobs, setActiveJobs] = useState< {
  [key: string]: boolean 
}> ({
  
});
//Fetch model data on component mount useEffect ( () => {
  fetchModels () 
}, []);
const fetchModels = async () => {
  try {
  setIsLoading (true);
const {
  data, error 
}= await supabase .from ('model versions') .select ('*') .order ('createdAt', {
  ascending: false 
});
//Map the data to our component state if (error) throw error;
//Update the local model status setModels (prev => prev.map (model => model.id === modelId ? {
  ...model, trainingStatus: data.status, errorMessage: data.error || null 
}: model) );
//Also update in the database await supabase .from ('model versions') .update ({
  training status: data.status, error message: data.error || null, //If training succeeded, automatically set to active ... (data.status === 'succeeded' ? {
  active: true 
}: {
  
}) 
}) .eq ('id', modelId) 
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </TableCell>
                </TableRow>
                  </TableCell>;
                </TableRow>;
<<<<<<< HEAD
              ))}
            </TableBody>
          </Table>
=======
=======
                    )}

                  </TableCell>;
                </TableRow>;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              ))}
            </TableBody>;
          </Table>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )}
      </CardContent>
    </Card>
  )
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
