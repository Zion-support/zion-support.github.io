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
  }
  'scope': string;
  'start_date': string;
  'end_date': string | null,
  'project_type': string;
}

export interface GeneratedMilestone {;
  }
  'title': string,
  'description': string;
      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {'
}
export function useMilestoneGenerator() {
  }
  const [isGenerating, setIsGenerating] = useState(false);


>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export interface GeneratedMilestone {;

  description: string;

<<<<<<< HEAD

      }
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {'
      }
      }
      setIsGenerating(true),
        }
        "body": input

=======
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

export function useMilestoneGenerator() {};
  const [isGenerating, setIsGenerating] = useState(false);

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
  const [isGenerating, setIsGenerating] = useState(false);
export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState($2);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async ('input': MilestoneInput): Promise<GeneratedMilestone[]> => {
    }
    try {

      setIsGenerating($2);
      const { data, error } = await supabase.functions.invoke($2);
      if (error) throw error,

      // Mark each milestone as AI generated



  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);

        body: input
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
      if (error) throw error;
      // Mark each milestone as AI generated


  due_date: string;
  estimated_hours: number,
  isAiGenerated: boolean;
}

<<<<<<< HEAD
export /**
 * useMilestoneGenerator - Function description
 */
function useMilestoneGenerator() {
  const [is_generating, setIsGenerating] = useState (false);
  const [generated_milestones, setGeneratedMilestones] = useState < GeneratedMilestone[]>([]);
;
  const generate_milestones = async (input: MilestoneInput): Promise < GeneratedMilestone[]> => {
    try {
      setIsGenerating (true),
      const { data, error } = await supabase.functions.invoke ('generate - milestones', {
        body: input;
      });
;
      // Check condition
if (throw error) {
  $2
}
      // Mark each milestone as AI generated;
      const milestonesWithFlag = data.milestones.map ((milestone: any) => ({
        ...milestone,
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        isAiGenerated: true}));
;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;
<<<<<<< HEAD

    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];
    } finally {
      setIsGenerating (false);
    }
  }



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD



    clearGeneratedMilestones}
}

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from 'sonner',;
;
export interface MilestoneInput {;
  scope:string,;
  startDate:string,;
  endDate:string | null,;
  projectType:string;}
;
export interface GeneratedMilestone {;
  title:string,;
  description:string,;
  dueDate:string,;
  estimatedHours:number,;
  isAiGenerated:boolean;
}
;
export function useMilestoneGenerator() {;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),;
;
  const generateMilestones = async (input:MilestoneInput):Promise<GeneratedMilestone[]> => {;
    try {;
      setIsGenerating(true),;
;
      const { data, error } = await supabase.functions.invoke('generate-milestones', {;
        body:input;
      }),;
;
      if (error) throw error,;
;
      // Mark each milestone as AI generated;
      const milestonesWithFlag = data.milestones.map((milestone:any) => ({;
        ...milestone,;
        isAiGenerated:true})),;
;
      setGeneratedMilestones(milestonesWithFlag),;
      return milestonesWithFlag,;
    } catch (error) {;
      console.error('Error generating milestones:', error),;
      toast.error('Failed to generate milestones'),;
      return [],;
    } finally {;
      setIsGenerating(false),;
    }
  },;
;
  const clearGeneratedMilestones = () => {;
    setGeneratedMilestones([]),;
  },;
;
  return {;
    generateMilestones,;
    generatedMilestones,;
    isGenerating,;
    clearGeneratedMilestones},;
} const generateMilestones = async (input: MilestoneInput) : Promise<GeneratedMilestone[]> => {
  try {
  setIsGenerating (true);
if (error) throw error;
// Mark each milestone as AI generated 
}
    generatedMilestones;
    isGenerating;

    clearGeneratedMilestones}
}

=======

    generatedMilestones;
    isGenerating;

    clearGeneratedMilestones}
}


}
>>>>>>> origin/cursor/delete-old-data-records-6bba
