<<<<<<< HEAD
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
export interface MilestoneInput {
  }
  "scope": string;
  "start_date": string;
  "end_date": string | null,
  "project_type": string;
=======
scope: string;
  scope: string;
  scope: string;,
pr-12325
  startDate: string;

import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';

import { toast } from 'sonner';

  scope: string;
  start_date: string;
  end_date: string | null,
  project_type: string;

>>>>>>> origin/chore/fix-lint-and-merge
}

export interface GeneratedMilestone {;

  description: string;

      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

export function useMilestoneGenerator() {};
  const [isGenerating, setIsGenerating] = useState(false);
<<<<<<< HEAD
  scope: string,
  startDate: string,
  endDate: string | null,
  projectType: string}

  endDate: string | null

  projectType: string
}
export interface GeneratedMilestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number,
  isAiGenerated: boolean}

  isAiGenerated: boolean
}
export function useMilestoneGenerator() {
export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState($2);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async ("input": MilestoneInput): Promise<GeneratedMilestone[]> => {
    }
    try {
      }
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {'
      }
      }
      setIsGenerating(true),
        }
        "body": input
=======

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);

        body: input
>>>>>>> origin/chore/fix-lint-and-merge
      });
      if (error) throw error;
      // Mark each milestone as AI generated

  due_date: string;
  estimated_hours: number,
  isAiGenerated: boolean;
}

        isAiGenerated: true}));

;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;

import { toast } from 'sonner',;
export interface MilestoneInput {;
  scope: string,;
  startDate: string,;
  endDate: string | null,;
  projectType: string;
}
;
export interface GeneratedMilestone {;
  title: string,;
  description: string,;
  dueDate: string,;
  estimatedHours: number,;
  isAiGenerated: boolean;
}
;

      const { data, error } = await supabase.functions.invoke('generate-milestones', {;
        body: input;
      }),;
      if (error) throw error,;
      // Mark each milestone as AI generated;
      const milestonesWithFlag = data.milestones.map((milestone: any) => ({;
        ...milestone,;
        isAiGenerated: true})),;
      setGeneratedMilestones(milestonesWithFlag),;
      return milestonesWithFlag;

      toast.error('Failed to generate milestones'),;
      return [];
    } finally {;
      setIsGenerating(false);
    }
  },;
  const clearGeneratedMilestones = () => {;
    setGeneratedMilestones([]);
  },;
  return {;
    generateMilestones,;

    generatedMilestones;
    isGenerating;

    clearGeneratedMilestones}
}

}