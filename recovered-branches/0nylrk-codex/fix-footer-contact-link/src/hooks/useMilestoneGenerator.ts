
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from 'sonner';
export interface MilestoneInput {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  scope: string;
  start_date: string;
  end_date: string | null,
  project_type: string;

}

<<<<<<< HEAD
export interface GeneratedMilestone {

export interface GeneratedMilestone {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

export interface GeneratedMilestone {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  title: string;
  description: string;

      setIsGenerating(true),

<<<<<<< HEAD

  isAiGenerated: boolean
}

  const [isGenerating, setIsGenerating] = useState(false);

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
=======
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

        body: input
      });
      if (error) throw error;
      // Mark each milestone as AI generated

      const milestonesWithFlag = data && data.milestones.map((milestone: any) => ({

        isAiGenerated: true}));

;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;
    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];

    } finally {
      setIsGenerating (false);
    }
  }
  const clearGeneratedMilestones = () => {
    setGeneratedMilestones([])
  }
  return {
    generateMilestones;
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
export function useMilestoneGenerator() {;
  const [isGenerating, setIsGenerating] = useState(false),;
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),;
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {;
    try {;
      setIsGenerating(true),;
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
    } catch (error) {;
      console.error('Error generating milestones:', error),;
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    generatedMilestones;
    isGenerating;


    clearGeneratedMilestones}
}