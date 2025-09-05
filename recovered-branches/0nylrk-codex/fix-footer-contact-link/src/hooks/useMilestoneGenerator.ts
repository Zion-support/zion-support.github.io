
<<<<<<< HEAD
import { useState } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { toast } from 'sonner',
export interface MilestoneInput {
  scope: string,
  startDate: string,
  endDate: string | null,
  projectType: string
}

export interface GeneratedMilestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number,
  isAiGenerated: boolean
}

export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false),
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),
=======

export interface MilestoneInput {_scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string;}

export interface GeneratedMilestone {_title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;
  isAiGenerated: boolean;}

export function useMilestoneGenerator() {_const [isGenerating, _setIsGenerating] = useState(false);
  const [generatedMilestones, _setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true),

<<<<<<< HEAD
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
        body: input
      }),
=======
      const { data, _error} = await supabase.functions.invoke('generate-milestones', {_body: input});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      if (error) throw error,

      // Mark each milestone as AI generated
<<<<<<< HEAD
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
    clearGeneratedMilestones}
=======
      const _milestonesWithFlag = data.milestones.map(_(milestone: unknown) => ({_...milestone, _isAiGenerated: true}));

      setGeneratedMilestones(milestonesWithFlag);
      return milestonesWithFlag;
    } catch (error) {_toast.error('Failed to generate milestones');
      return [];} finally {_setIsGenerating(false);}
  };

  const _clearGeneratedMilestones = () => {_setGeneratedMilestones([]);};

  return {_generateMilestones, _generatedMilestones, _isGenerating, _clearGeneratedMilestones};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
