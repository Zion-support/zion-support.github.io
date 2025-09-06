
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
import {useState} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {toast} from 'sonner';
export interface MilestoneInput {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  scope: string;
  start_date: string;
  end_date: string | null,
  project_type: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
}
<<<<<<< HEAD

=======


export interface GeneratedMilestone {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  title: string;
  description: string;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts

      setIsGenerating(true),

<<<<<<< HEAD
  isAiGenerated: boolean
}

=======
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
}
<<<<<<< HEAD
export interface GeneratedMilestone {
=======

export interface GeneratedMilestone {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  title: string;
  description: string;
  dueDate: string;

  estimatedHours: number

  isAiGenerated: boolean
}
<<<<<<< HEAD
export function useMilestoneGenerator() {
=======

export function useMilestoneGenerator() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isGenerating, setIsGenerating] = useState(false);

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
<<<<<<< HEAD
=======
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        body: input
      });
      if (error) throw error;
      // Mark each milestone as AI generated
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
      const milestonesWithFlag = data && data.milestones.map((milestone: any) => ({
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
        ...milestone,
        isAiGenerated: true}));
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;
    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
    } finally {
      setIsGenerating (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const clearGeneratedMilestones = () => {
    setGeneratedMilestones([])
  }
  return {
    generateMilestones;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    generatedMilestones;
    isGenerating;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useMilestoneGenerator.ts
;
  const clearGeneratedMilestones = () =>: any {
    setGeneratedMilestones ([]);
  }
;
  return {
    generate_milestones;
    generated_milestones;
    is_generating;
    clearGeneratedMilestones}
}
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    generatedMilestones;
    isGenerating;

    clearGeneratedMilestones}
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
