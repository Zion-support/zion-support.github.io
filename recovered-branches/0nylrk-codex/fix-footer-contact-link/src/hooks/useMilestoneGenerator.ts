<<<<<<< HEAD


=======
'scope': string;
  'startDate': string;
"scope": string;
  "startDate": string;
import { useState  } from 'react';'
import { supabase  } from '@/integrations/supabase/client';'
import { toast } from 'sonner';'
export interface MilestoneInput {
}
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {toast} from 'sonner';'
export interface MilestoneInput {;
}
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {toast} from 'sonner';'
export interface MilestoneInput {
  scope: string;
  start_date: string;
  end_date: string | null,
  project_type: string;
}

export interface GeneratedMilestone {;

  title: string,
  description: string;

      }
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {'
      }
      }
      setIsGenerating(true),

      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState($2);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async ('input': MilestoneInput): Promise<GeneratedMilestone[]> => {
    }
    try {

      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
        body: input
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
      if (error) throw error;
      // Mark each milestone as AI generated
        isAiGenerated: true}));      const milestonesWithFlag = data && data.milestones.map((milestone: any) => ({    } finally {
      setIsGenerating (false);
    }
  }    clearGeneratedMilestones}
}
