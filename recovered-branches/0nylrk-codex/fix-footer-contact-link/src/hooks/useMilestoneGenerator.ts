      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState($2);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),

  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const generateMilestones = async ('input': MilestoneInput): Promise<GeneratedMilestone[]> => {
    }
    try {

      setIsGenerating(true),
      const { data, error } = await supabase && supabase.functions.invoke('generate-milestones', {
        body: input
      });
      if (error) throw error;
      // Mark each milestone as AI generated
        isAiGenerated: true}));      const milestonesWithFlag = data && data.milestones.map((milestone: any) => ({    } finally {
      setIsGenerating (false);
    }
  }    clearGeneratedMilestones}
}
