  scope: string;
  startDate: string;

<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from 'sonner';
export interface MilestoneInput {;
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from 'sonner';
export interface MilestoneInput {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  scope: string;
  start_date: string;
  end_date: string | null,
  project_type: string;
<<<<<<< HEAD

}
export interface GeneratedMilestone {

export interface GeneratedMilestone {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}


export interface GeneratedMilestone {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title: string;
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD

      setIsGenerating(true),

<<<<<<< HEAD
  isAiGenerated: boolean
}
=======
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

=======
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {
import {useState} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {toast} from 'sonner';
export interface MilestoneInput {;
  scope: string;
  startDate: string;

  endDate: string | null

  projectType: string
}
export interface GeneratedMilestone {

export interface GeneratedMilestone {;
  title: string;
  description: string;
  dueDate: string;

  estimatedHours: number

  isAiGenerated: boolean
}
=======
  const [isGenerating, setIsGenerating] = useState(false);

      setIsGenerating(true),

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function useMilestoneGenerator() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const [isGenerating, setIsGenerating] = useState(false);

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

<<<<<<< HEAD
      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        body: input
      });
      if (error) throw error;
      // Mark each milestone as AI generated
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        ...milestone,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        isAiGenerated: true}));
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;
    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        isAiGenerated: true}));
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } finally {
      setIsGenerating (false);
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
      const milestonesWithFlag = data.milestones.map((milestone: any) => ({
        ...milestone
        isAiGenerated: true}));
      setGeneratedMilestones(milestonesWithFlag);
      return milestonesWithFlag
    } catch (error) {
      console.error('Error generating milestones:', error);
      toast.error('Failed to generate milestones');
      return []
    } finally {
      setIsGenerating(false)
    }
  }
  const clearGeneratedMilestones = () => {
    setGeneratedMilestones([])
  }
  return {
    generateMilestones;
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    generatedMilestones;
    isGenerating;

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


    generatedMilestones;
    isGenerating;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    generatedMilestones;
    isGenerating;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
  const clearGeneratedMilestones = () =>: any {
    setGeneratedMilestones ([]);
  }
;
  return {
    generate_milestones;
    generated_milestones;
    is_generating;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    clearGeneratedMilestones}
<<<<<<< HEAD
}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    clearGeneratedMilestones}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
