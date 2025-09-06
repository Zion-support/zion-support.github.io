<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

import { useState, useEffect } from 'react',
import { useState, useEffect } from 'react',
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { useState, useEffect  } from 'react';
import { useState, useEffect } from 'react',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { useState, useEffect } from 'react',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

import { useState, useEffect } from 'react',
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',


<<<<<<< HEAD
=======
=======
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react";
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig } from '@/utils/zion-gpt';
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from 'react';
=======
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",import {useState, useEffect} from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


import { useState, useEffect } from 'react',



import { useState, useEffect } from 'react',
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge",import {useState, useEffect} from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Badge } from "@/components/ui/badge",


import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",
import { supabase } from '@/integrations/supabase/client',
import { ModelConfig } from '@/utils/zion-gpt',


import {useState, useEffect} from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Loader2, RefreshCw, Play, CheckCircle, AlertCircle} from "lucide-react";
import {supabase} from '@/integrations/supabase/client';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {ModelConfig} from '@/utils/zion-gpt';
<<<<<<< HEAD
=======
=======
import {ModelConfig} from '@/utils/zion-gpt';


interface ModelVersionData extends ModelConfig {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======



import { useState, useEffect } from 'react',

import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table","
import { Badge } from "@/components/ui/badge",
"
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",'
import { supabase } from '@/integrations/supabase/client','
import { ModelConfig } from '@/utils/zion-gpt',




';
import {useState, useEffect} from 'react';"
import {Button} from "@/components/ui/button";"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";"
import {Badge} from "@/components/ui/badge";"
import {Loader2, RefreshCw, Play, CheckCircle, AlertCircle} from "lucide-react";'
import {supabase} from '@/integrations/supabase/client';'
import {ModelConfig} from '@/utils/zion-gpt';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ModelVersionData extends ModelConfig {
=======
import {ModelConfig} from '@/utils/zion-gpt';interface ModelVersionData extends ModelConfig {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {ModelConfig} from '@/utils/zion-gpt';interface ModelVersionData extends ModelConfig {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface ModelVersionData extends ModelConfig {}
'
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed'

<<<<<<< HEAD
  errorMessage?: string
<<<<<<< HEAD
}
export function ZionGPTModelManager() {
  const [models, setModels] = useState<ModelVersionData[]>([]),

<<<<<<< HEAD
<<<<<<< HEAD
export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export function ZionGPTModelManager() {;
  const [models, setModels] = useState<ModelVersionData[]>([]);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

=======
interface ModelVersionData extends ModelConfig {;
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed',;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState, useEffect} from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import {useState, useEffect} from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from './lucide-react';
import {supabase} from '@/integrations / supabase / client';
=======
'
import {useState, useEffect} from 'react';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Badge } from '@/components / ui / badge';'
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from './lucide-react';'
import {supabase} from '@/integrations / supabase / client';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    } catch (error) {
=======



    } catch (error) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console.error ('Error fetching models:', error);
    } finally {}
      setIsLoading (false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }    } catch (error) {
=======
  }

;
  const checkTrainingStatus = async (model_id: string) => {}
    try {}
      setActiveJobs (prev => ({ ...prev, [model_id]: true }));
;
      // Call an edge function that checks the OpenAI fine - tuning job status;'
      const { data, error } = await supabase.functions.invoke ('check - training - status', {}
        body: { model_id }
      });
;
      // Check condition;
if (throw error) {}
  $2;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

    } catch (error) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      console.error (`Error checking status for model ${model_id}:`, error);
    } finally {}
      setActiveJobs (prev => ({ ...prev, [model_id]: false }));
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState, useEffect } from 'react',;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { useState, useEffect } from 'react',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from "lucide-react",;
import { supabase } from '@/integrations/supabase/client',;
=======
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  }, []),;
  const fetchModels = async () => {;
    try {;
      setIsLoading(true),;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  };
=======




      const { data, error } = await supabase;'
        .from('model_versions');'
        .select('*');'
        .order('createdAt', { ascending: false }),;


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
    } catch (error) {;'
      console && console.error('Error fetching models:', error);
    } finally {;
      setIsLoading(false);
    }



      // Also update in the database;
      await supabase;'
        .from('model_versions');
        .update({;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string) => {;
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
<<<<<<< HEAD
        await supabase;'
          .from('model_versions');
          .update({ active: false });'
=======
        await supabase;
          .from('model_versions');
          .update({ active: false });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          .eq('purpose', purpose);
      }

      // Update this model;
<<<<<<< HEAD
      await supabase;'
        .from('model_versions');
        .update({ active: !currentActive });'
=======
      await supabase;
        .from('model_versions');
        .update({ active: !currentActive });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq('id', modelId);

      // Refresh the model list;
      fetchModels();
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.error('Error toggling model active state:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

  },
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
=======
=======
      console && console.error('Error toggling model active state:', error);
    }

  },




  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }

  },
    }
  }

  return (
<<<<<<< HEAD
"
    <Card className="w-full">;"
=======
    <Card className="w-full">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <CardHeader className="flex flex-row items-center justify-between">;
        <div>;
          <CardTitle>ZionGPT Models</CardTitle>;
          <CardDescription>;
            Manage fine-tuned AI models for different platform features;
          </CardDescription>;
<<<<<<< HEAD
        </div>;"
        <Button onClick={fetchModels} variant="outline" size="sm">;"
=======
        </div>;
        <Button onClick={fetchModels} variant="outline" size="sm">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
        {isLoading ? (;"
          <div className="flex items-center justify-center h-24">;"
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;
          </div>;


        ) : (;

=======
        {isLoading ? (;
          <div className="flex items-center justify-center h-24">;
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;
          </div>;
        ) : (;
        ) : (;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Model ID</TableHead>;
                <TableHead>Version</TableHead>;
                <TableHead>Purpose</TableHead>;
                <TableHead>Base Model</TableHead>;
                <TableHead>Status</TableHead>;
<<<<<<< HEAD
                <TableHead>Created</TableHead>;"
=======
                <TableHead>Created</TableHead>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
<<<<<<< HEAD

              {models && models.map((model) => (;
                <TableRow key={model && model.id}>;"
=======
              {models && models.map((model) => (;
                <TableRow key={model && model.id}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  <TableCell className="font-medium">{model && model.id}</TableCell>;
                  <TableCell>v{model && model.version}</TableCell>;
                  <TableCell>{model && model.purpose}</TableCell>;
                  <TableCell>{model && model.baseModel}</TableCell>;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        size="sm"
                        onClick={() => checkTrainingStatus(model && model.id)}
                        disabled={activeJobs[model && model.id]}
                      >;
<<<<<<< HEAD
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
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        size="sm"
                        onClick={() => toggleModelActive(model && model.id, model && model.active, model && model.purpose)}
                      >;
                        {model && model.active ? (;
<<<<<<< HEAD
                          <>;"
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;
                          </>;
                        ) : (;



                          <>;"
=======
                          <>;
                            <CheckCircle className="h-4 w-4 mr-1" /> Active;
                          </>;
                        ) : (;
                          <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                            <Play className="h-4 w-4 mr-1" /> Activate;
                          </>;
                        )}
                      </Button>;
<<<<<<< HEAD


                    ) : (;

                      <Button"
                        variant="ghost""
                        size="sm""
                        className="text-red-500"

<<<<<<< HEAD
=======
                    ) : (;
                    ) : (;
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        title={model && model.errorMessage || "Training failed"}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;

                    )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </TableCell>;
                </TableRow>;


                    )}
=======
  };                    )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  };                    )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  </TableCell>;
                </TableRow>;
                    )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                  </TableCell>;
                </TableRow>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              ))}
            </TableBody>;
          </Table>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;



<<<<<<< HEAD
=======
      </CardContent>;
    </Card>;
=======
;
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
        )};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        )};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      </CardContent>;
    </Card>;
;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string) => {
    try {
=======

  const toggleModelActive = async (model_id: string, current_active: boolean, purpose: string) => {}
    try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  return (
<<<<<<< HEAD
    <Card className="w-full">;
      <CardHeader className="flex flex - row items - center justify-between">;
=======
  return ("
    <Card className="w - full">;"
      <CardHeader className="flex flex - row items - center justify - between">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <Card className="w - full">;
      <CardHeader className="flex flex - row items - center justify - between">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div>;
          <CardTitle > ZionGPT Models</CardTitle>;
          <CardDescription>;
            Manage fine - tuned AI models for different platform features;
          </CardDescription>;
<<<<<<< HEAD
        </div>;
        <Button on_click={fetch_models} variant="outline" size="sm">;
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {is_loading ? (
<<<<<<< HEAD
          <div className="flex items - center justify - center h-24">;
            <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
=======
        </div>;"
        <Button on_click={fetch_models} variant="outline" size="sm">;"
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {is_loading ? ("
          <div className="flex items - center justify - center h - 24">;"
            <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="flex items - center justify - center h - 24">;
            <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </div>) : (
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Model ID</TableHead>;
                <TableHead > Version</TableHead>;
                <TableHead > Purpose</TableHead>;
                <TableHead > Base Model</TableHead>;
                <TableHead > Status</TableHead>;
<<<<<<< HEAD
                <TableHead > Created</TableHead>;
<<<<<<< HEAD
                <TableHead className="text-right">Actions</TableHead>;
=======
                <TableHead > Created</TableHead>;"
                <TableHead className="text - right">Actions</TableHead>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                <TableHead className="text - right">Actions</TableHead>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {models.map ((model) => (
<<<<<<< HEAD
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
<<<<<<< HEAD
                  <TableCell className="text-right">;
=======
                <TableRow key={model.id}>;"
                  <TableCell className="font - medium">{model.id}</TableCell>;
                  <TableCell > v{model.version}</TableCell>;
                  <TableCell>{model.purpose}</TableCell>;
                  <TableCell>{model.base_model}</TableCell>;
                  <TableCell>;'
                    {model.training_status === 'succeeded' ? ('"
                      <Badge className="bg - green - 500">Ready</Badge>) : model.training_status === 'failed' ? ('"
                      <Badge className="bg - red - 500">Failed</Badge>) : model.training_status === 'running' ? ("
                      <Badge className="bg - blue - 500">Training</Badge>) : ("
                      <Badge className="bg - yellow - 500">Queued</Badge>)}"
                    {model.active && <Badge className="ml - 2 bg - purple - 500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date (model.created_at).toLocaleDateString ()}</TableCell>;"
                  <TableCell className="text - right">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                  <TableCell className="text - right">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    {model.training_status === 'queued' || model.training_status === 'running' ? (
                      <Button;"
                        variant="ghost";"
                        size="sm";
                        on_click={() => checkTrainingStatus (model.id)}
                        disabled={active_jobs[model.id]}
                      >;
<<<<<<< HEAD
                        {active_jobs[model.id] ? (
<<<<<<< HEAD
                          <Loader2 className="h - 4 w - 4 animate-spin" />) : (
                          <RefreshCw className="h - 4 w-4" />)}
                        <span className="ml-1">Check</span>;
=======
                        {active_jobs[model.id] ? ("
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : ("
                          <RefreshCw className="h - 4 w - 4" />)}"
                        <span className="ml - 1">Check</span>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                          <RefreshCw className="h - 4 w - 4" />)}
                        <span className="ml - 1">Check</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;"
                        variant={model.active ? "outline" : "default"}"
                        size="sm";
                        on_click={() => toggleModelActive (model.id, model.active, model.purpose)}
                      >;
                        {model.active ? (
<<<<<<< HEAD
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
<<<<<<< HEAD
                        <AlertCircle className="h - 4 w - 4 mr-1" /> Error;
=======
                          <>;"
                            <CheckCircle className="h - 4 w - 4 mr - 1" /> Active;
                          </>) : (
                          <>;"
                            <Play className="h - 4 w - 4 mr - 1" /> Activate;
                          </>)}
                      </Button>) : (
                      <Button;"
                        variant="ghost";"
                        size="sm";"
                        className="text - red - 500";"
                        title={model.error_message || "Training failed"}
                      >;"
                        <AlertCircle className="h - 4 w - 4 mr - 1" /> Error;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                        <AlertCircle className="h - 4 w - 4 mr - 1" /> Error;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                      </Button>)}
                  </TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>)}
      </CardContent>;
    </Card>);
}
<<<<<<< HEAD
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
                  </TableCell>
                </TableRow>
                  </TableCell>;
                </TableRow>;
              ))}
            </TableBody>
          </Table>
        )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </CardContent>
    </Card>
  )
}
      </CardContent>;
    </Card>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
