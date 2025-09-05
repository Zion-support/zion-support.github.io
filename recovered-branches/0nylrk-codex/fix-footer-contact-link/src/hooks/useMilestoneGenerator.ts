
<<<<<<< HEAD
import { useState } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { toast } from 'sonner',;
;
export interface MilestoneInput {;
  scope:string,;
  startDate:string,;
  endDate:string | null,;
  projectType:string;
=======
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { toast } from 'sonner',
export interface MilestoneInput {
  scope: string,
  startDate: string,
  endDate: string | null,
  projectType: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface GeneratedMilestone {;
  title:string,;
  description:string,;
  dueDate:string,;
  estimatedHours:number,;
  isAiGenerated:boolean;
}
<<<<<<< HEAD
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
}
=======

export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
  const _generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true),

      const { data, error } = await supabase.functions.invoke('generate-milestones', {
        body: input
      }),
      if (error) throw error,

      // Mark each milestone as AI generated
      const milestonesWithFlag = data.milestones.map((milestone: any) => ({
        ...milestone,
        isAiGenerated: true})),

      setGeneratedMilestones(milestonesWithFlag),
      return milestonesWithFlag
    } catch (error) {
      console.error('Error generating milestones:', error),
      toast.error('Failed to generate milestones'),
      return []
    } finally {
      setIsGenerating(false)
    }
  },

  const clearGeneratedMilestones = () => {
    setGeneratedMilestones([])
  },

  return {
    generateMilestones,
    generatedMilestones,
    isGenerating,
    clearGeneratedMilestones}}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
