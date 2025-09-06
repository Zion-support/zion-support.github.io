<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {
=======
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {toast} from 'sonner';
export interface MilestoneInput {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  scope: string;
  startDate: string;

  endDate: string | null

  projectType: string
=======
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from 'sonner';
export interface MilestoneInput {
  scope: string;
  start_date: string;
  end_date: string | null,
  project_type: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
<<<<<<< HEAD
export interface GeneratedMilestone {
=======

export interface GeneratedMilestone {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  title: string;
  description: string;
<<<<<<< HEAD
  dueDate: string;

  estimatedHours: number

  isAiGenerated: boolean
}
<<<<<<< HEAD
export function useMilestoneGenerator() {
=======

export function useMilestoneGenerator() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [isGenerating, setIsGenerating] = useState(false);

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
<<<<<<< HEAD
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
=======
      setIsGenerating(true),

      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        body: input
      });
      if (error) throw error;
      // Mark each milestone as AI generated
<<<<<<< HEAD
      const milestonesWithFlag = data.milestones.map((milestone: any) => ({
        ...milestone
=======
      const milestonesWithFlag = data && data.milestones.map((milestone: any) => ({
=======
  due_date: string;
  estimated_hours: number,
  isAiGenerated: boolean;
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        ...milestone,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        isAiGenerated: true}));
<<<<<<< HEAD
      setGeneratedMilestones(milestonesWithFlag);
      return milestonesWithFlag
    } catch (error) {
      console && console.error('Error generating milestones:', error);
      toast && toast.error('Failed to generate milestones');
      return []
=======
;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;
    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    } finally {
      setIsGenerating (false);
    }
  }
<<<<<<< HEAD
  const clearGeneratedMilestones = () => {
    setGeneratedMilestones([])
  }
  return {
    generateMilestones;
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    generatedMilestones;
    isGenerating;

=======
;
  const clearGeneratedMilestones = () =>: any {
    setGeneratedMilestones ([]);
  }
;
  return {
    generate_milestones;
    generated_milestones;
    is_generating;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    clearGeneratedMilestones}
}