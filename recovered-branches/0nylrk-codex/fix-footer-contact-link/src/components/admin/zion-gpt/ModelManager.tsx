<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState, useEffect  } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from 'react','
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table","
import { Badge } from "@/components/ui/badge",import {useState, useEffect} from 'react';'
import {Button} from "@/components/ui/button";"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";"
import {Badge} from "@/components/ui/badge";"
import {Loader2, RefreshCw, Play, CheckCircle, AlertCircle} from "lucide-react";"
import {supabase} from '@/integrations/supabase/client';'
import {ModelConfig} from '@/utils/zion-gpt';interface ModelVersionData extends ModelConfig {'
  }
  "trainingStatus": 'queued' | 'running' | 'succeeded' | 'failed''
  errorMessage?: string,
import { Button } from '@/components / ui / button';'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Badge } from '@/components / ui / badge';'
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from './lucide-react';'
import {supabase} from '@/integrations / supabase / client';'
import {ModelConfig} from '@/utils / zion - gpt';'
=======
import { useState, useEffect } from 'react',
<<<<<<< HEAD
=======
=======
import { useState, useEffect } from 'react',



<<<<<<< HEAD
import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react',
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from 'react',

import { useState, useEffect } from 'react',

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
import {ModelConfig} from '@/utils/zion-gpt';

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ModelVersionData extends ModelConfig {

interface ModelVersionData extends ModelConfig {}
'
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed'

  errorMessage?: string

export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;

<<<<<<< HEAD
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

=======
  // Fetch model data on component mount;
  useEffect(() => {;
    fetchModels();
  }, []);

  const fetchModels = async () => {;
    try {;
      setIsLoading(true);

<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      console.error ('Error fetching models:', error);
    } finally {}
      setIsLoading (false);
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD

=======
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      console.error (`Error checking status for model ${model_id}:`, error);
    } finally {}
      setActiveJobs (prev => ({ ...prev, [model_id]: false }));
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> merged-prs-20250907-203621
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  };
import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
>>>>>>> origin/chore/fix-lint-and-merge
interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',
  errorMessage?: string
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
=======
      setIsLoading(true),;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const { data, error } = await supabase;
        .from('model_versions');
        .select('*');
        .order('createdAt', { ascending: false }),;

<<<<<<< HEAD
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;
=======
<<<<<<< HEAD
  const [activeJobs, setActiveJobs] = useState<{[key: string]: boolean}>({}),;
=======
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
      if (error) throw error;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
  };

=======
<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Also update in the database;
      await supabase;
        .from('model_versions');
        .update({;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Update this model;

        .eq('id', modelId);
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      // Refresh the model list;
      fetchModels();
    } catch (error) {;

  return (

<<<<<<< HEAD
=======
    }

  },

  return (
<<<<<<< HEAD

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Card className="w-full">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

=======
        {isLoading ? (;
          <div className="flex items-center justify-center h-24">;
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;
          </div>;
<<<<<<< HEAD
        ) :(;
=======
        ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
              {models && models.map((model) => (;
                <TableRow key={model && model.id}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <TableCell className="font-medium">{model && model.id}</TableCell>;

                  <TableCell>v{model && model.version}</TableCell>;
                  <TableCell>{model && model.purpose}</TableCell>;
                  <TableCell>{model && model.baseModel}</TableCell>;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    {model && model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date(model && model.createdAt).toLocaleDateString()}</TableCell>;
                  <TableCell className="text-right">;
                    {model && model.trainingStatus === 'queued' || model && model.trainingStatus === 'running' ? (;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <Button
                        variant="ghost"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        size="sm"
                        onClick={() => checkTrainingStatus(model && model.id)}
                        disabled={activeJobs[model && model.id]}
                      >;
<<<<<<< HEAD

=======
                        {activeJobs[model && model.id] ? (;
                          <Loader2 className="h-4 w-4 animate-spin" />;
                        ) : (;
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
                          <RefreshCw className="h-4 w-4" />;
                        )}
                        <span className="ml-1">Check</span>;
                      </Button>;
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
                    ) : model && model.trainingStatus === 'succeeded' ? (;
                      <Button
                        variant={model && model.active ? "outline" : "default"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        size="sm"
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}
                      >;
                        {model && model.active ? (;
<<<<<<< HEAD

=======
                          <>;
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;
                          </>;
                        ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                          <>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.error('Error toggling model active state:', error);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
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
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                        title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;

                    )}

                  </TableCell>;
                </TableRow>;
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                  </TableCell>;
                </TableRow>;

<<<<<<< HEAD
              ))}
            </TableBody>;
          </Table>;
<<<<<<< HEAD

      </CardContent>;
    </Card>;
  );
}

;

=======
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string) => {
    try {

      // If activating, deactivate all other models with the same purpose;
<<<<<<< HEAD
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
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        .eq ('id', model_id);
;
      // Refresh the model list;
      fetch_models ();
<<<<<<< HEAD
    } catch (error) {'
=======
    } catch (error) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      console.error ('Error toggling model active state:', error);
    }
  }
;
<<<<<<< HEAD

=======
  return (
    <Card className="w - full">;
      <CardHeader className="flex flex - row items - center justify - between">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div>;
</div>
          <CardTitle > ZionGPT Models</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
<<<<<<< HEAD

=======
        </div>;
        <Button on_click={fetch_models} variant="outline" size="sm">;
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {is_loading ? (
          <div className="flex items - center justify - center h - 24">;
            <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
                <TableHead > Created</TableHead>;
                <TableHead className="text - right">Actions</TableHead>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {models.map ((model) => (
<<<<<<< HEAD

                    {model.training_status === 'queued' || model.training_status === 'running' ? (
                      <Button;"
                        variant="ghost";"
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        size="sm";
                        on_click={() => checkTrainingStatus (model.id)}
                        disabled={active_jobs[model.id]}
                      >;
<<<<<<< HEAD

                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;"
                        variant={model.active ? "outline" : "default"}"
=======
                        {active_jobs[model.id] ? (
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                          <RefreshCw className="h - 4 w - 4" />)}
                        <span className="ml - 1">Check</span>;
                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;
                        variant={model.active ? "outline" : "default"}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        size="sm";
                        on_click={() => toggleModelActive (model.id, model.active, model.purpose)}
                      >;
                        {model.active ? (
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

      </CardContent>
    </Card>
      </CardContent>;
    </Card>;
  );
}
=======
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
>>>>>>> merged-prs-20250907-203621
                        title={model.errorMessage |"Training failed"}
                      >
                        <AlertCircle className="h-4 w-4 mr-1" /> Error
                      </Button>
                    )}
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
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
        <div>;
</div>
          <CardTitle > ZionGPT Models</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;

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

              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {models.map ((model) => (

                    {model.training_status === 'queued' || model.training_status === 'running' ? (
                      <Button;"
                        variant="ghost";"
                        size="sm";
                        on_click={() => checkTrainingStatus (model.id)}
                        disabled={active_jobs[model.id]}
                      >;

                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;"
                        variant={model.active ? "outline" : "default"}"
                        size="sm";
                        on_click={() => toggleModelActive (model.id, model.active, model.purpose)}
                      >;
                        {model.active ? (

                      </Button>)}
                  </TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>)}
      </CardContent>;
    </Card>);
}

      </CardContent>
    </Card>
      </CardContent>;
    </Card>;
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
