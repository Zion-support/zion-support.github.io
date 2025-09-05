

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

  const _generateMilestones = async (input: MilestoneInput): Promise<GeneratedMilestone[]> => {
    try {
      setIsGenerating(true);

      const { data, _error} = await supabase.functions.invoke('generate-milestones', {_body: input});

      if (error) throw error;

      // Mark each milestone as AI generated
      const _milestonesWithFlag = data.milestones.map(_(milestone: unknown) => ({_...milestone, _isAiGenerated: true}));

      setGeneratedMilestones(milestonesWithFlag);
      return milestonesWithFlag;
    } catch (error) {_toast.error('Failed to generate milestones');
      return [];} finally {_setIsGenerating(false);}
  };

  const _clearGeneratedMilestones = () => {_setGeneratedMilestones([]);};

  return {_generateMilestones, _generatedMilestones, _isGenerating, _clearGeneratedMilestones};
}
