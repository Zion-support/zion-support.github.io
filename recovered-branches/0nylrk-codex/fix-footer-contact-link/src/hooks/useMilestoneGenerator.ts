


      }
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {'
      }
      }
      setIsGenerating(true),
        }
        "body": input

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

    } catch (error) {
      console.error ('Error generating milestones:', error);
      toast.error ('Failed to generate milestones');
      return [];
    } finally {
      setIsGenerating (false);
    }
  }






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

