
import { useState  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { toast } from 'sonner';
export interface MilestoneInput {
  scope: string;
  startDate: string;
  endDate: string | null;
  projectType: string
}

export interface GeneratedMilestone {
  title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;
  isAiGenerated: boolean
}

export function useMilestoneGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]),

  const generateMilestones = null;
    clearGeneratedMilestones}
}
