scope: string;
  scope: string;
  scope: string;,
pr-12325
  startDate: string;

<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {';
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {toast} from 'sonner';
export interface MilestoneInput {;'
import {useState} from 'react';'
import {supabase} from '@/integrations / supabase / client';'
import {toast} from 'sonner';
export interface MilestoneInput {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  scope: string;
  start_date: string;
  end_date: string | null,
  project_type: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

}
export interface GeneratedMilestone {

export interface GeneratedMilestone {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export interface GeneratedMilestone {;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  title: string;
=======
  title: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export interface MilestoneInput {

}
  scope: string;,
  start_date: string;
  end_date: string | null,}
  project_type: string;}
}
export interface GeneratedMilestone {;

  title: string;,
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  description: string;
setIsGenerating(true),

<<<<<<< HEAD
  isAiGenerated: boolean
}
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {

export function useMilestoneGenerator() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function useMilestoneGenerator() {};
  const [isGenerating, setIsGenerating] = useState(false);

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        body: input
      });
      if (error) throw error;
      // Mark each milestone as AI generated
isAiGenerated: true}));      const milestonesWithFlag = data && data.milestones.map((milestone: any) => ({    } finally {
  due_date: string;
  estimated_hours: number,
  isAiGenerated: boolean;
}
export /**;
 * useMilestoneGenerator - Function description;
 */
function useMilestoneGenerator() {}
  const [is_generating, setIsGenerating] = useState (false);
  const [generated_milestones, setGeneratedMilestones] = useState < GeneratedMilestone[]>([]);
;
  const generate_milestones = async (input: MilestoneInput): Promise < GeneratedMilestone[]> => {}
    try {}
      setIsGenerating (true),'
      const { data, error } = await supabase.functions.invoke ('generate - milestones', {}
        body: input;
      });
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Mark each milestone as AI generated;
      const milestonesWithFlag = data.milestones.map ((milestone: any) => ({}
        ...milestone,
        isAiGenerated: true}));

;
      setGeneratedMilestones (milestonesWithFlag);
      return milestonesWithFlag;
} catch (error) {'
      console.error ('Error generating milestones:', error);'
      toast.error ('Failed to generate milestones');
      return [];

        isAiGenerated: true}));

    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsGenerating (false);
    }
<<<<<<< HEAD
  }

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
=======

'
import { useState } from 'react',;'
import { supabase } from '@/integrations/supabase/client',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];

        isAiGenerated: true}));
    } finally {
      setIsGenerating (false);
    }
  }

import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
export function useMilestoneGenerator() { return null; }
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
} catch (error) {;'
      console.error('Error generating milestones:', error),;'
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

    generatedMilestones;
    isGenerating;

generatedMilestones;
    isGenerating;

;
  const clearGeneratedMilestones = () =>: any {}
    setGeneratedMilestones ([]);
  }
;
  return {}
    generate_milestones;
    generated_milestones;
    is_generating;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    clearGeneratedMilestones}
<<<<<<< HEAD
}

    clearGeneratedMilestones}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }    clearGeneratedMilestones}
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  const [isGenerating, setIsGenerating] = useState(false);

      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {')
pr-12325
export function useMilestoneGenerator() {

export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
