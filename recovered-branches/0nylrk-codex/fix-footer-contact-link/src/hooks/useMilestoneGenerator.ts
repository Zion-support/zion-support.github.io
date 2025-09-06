
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {
  scope: string;
  startDate: string;
<<<<<<< HEAD
  endDate: string | null;
=======
  endDate: string | null
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  projectType: string
}
export interface GeneratedMilestone {
  title: string;
  description: string;
  dueDate: string;
<<<<<<< HEAD
  estimatedHours: number;
<<<<<<< HEAD
=======
  estimatedHours: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  isAiGenerated: boolean
}
=======
  isAiGenerated: boolean;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
<<<<<<< HEAD
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),

  const generateMilestones = null;
=======
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true)
      const { data, error } = await supabase.functions.invoke('generate-milestones', {
        body: input
      });
      if (error) throw error;
      // Mark each milestone as AI generated
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
    generatedMilestones;
    isGenerating;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    clearGeneratedMilestones}
}