<<<<<<< HEAD
'scope': string;
  'startDate': string;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"scope": string;
  "startDate": string;
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

export interface GeneratedMilestone {;

  description: string;
<<<<<<< HEAD

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

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

export function useMilestoneGenerator() {};
  const [isGenerating, setIsGenerating] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      }
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {'
      }
<<<<<<< HEAD
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {'
      }
      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {'
        }
        'body': input
      });
      if (error) throw error;
      // Mark each milestone as AI generated;
    'isAiGenerated': true}));      const milestonesWithFlag = data && data.milestones.map(('milestone': any) => ({    } finally {
      }
      setIsGenerating (false);
    }
  }    clearGeneratedMilestones}
}
=======
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
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      setIsGenerating($2);
      const { data, error } = await supabase.functions.invoke($2);
      if (error) throw error,

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Mark each milestone as AI generated

<<<<<<< HEAD
=======
      setGeneratedMilestones($2);
<<<<<<< HEAD
=======
=======
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

=======
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
export function useMilestoneGenerator() {

export function useMilestoneGenerator() {;
  const [isGenerating, setIsGenerating] = useState(false);

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

<<<<<<< HEAD
      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        body: input
>>>>>>> origin/chore/fix-lint-and-merge
      });
      if (error) throw error;
      // Mark each milestone as AI generated
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const milestonesWithFlag = data && data.milestones.map((milestone: any) => ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  due_date: string;
  estimated_hours: number,
  isAiGenerated: boolean;
}
<<<<<<< HEAD

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
=======
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        isAiGenerated: true}));
;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;
<<<<<<< HEAD
=======
    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];
    } finally {
      setIsGenerating (false);
    }
  }
<<<<<<< HEAD
      const milestonesWithFlag = data.milestones.map((milestone: any) => ({
        ...milestone
        isAiGenerated: true}));
      setGeneratedMilestones(milestonesWithFlag);
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
      return milestonesWithFlag
    } catch (error) {
      console.error($2);
      toast.error($2);
      return []
    } finally {
      setIsGenerating(false)
    }
  },

  const clearGeneratedMilestones = $2;
  return {
<<<<<<< HEAD
    generateMilestones,
    generatedMilestones,
    isGenerating,
    clearGeneratedMilestones}
}
=======
    generateMilestones;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },;
  const clearGeneratedMilestones = () => {;
    setGeneratedMilestones([]);
  },;
  return {;
    generateMilestones,;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    generatedMilestones;
    isGenerating;

    clearGeneratedMilestones}
}

<<<<<<< HEAD
}
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    generatedMilestones;
    isGenerating;

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
