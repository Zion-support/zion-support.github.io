

  estimatedHours: number
}
export async function generateContract(


  const additionalClauses = values.additionalClauses || [],
  
  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = generatedMilestones.length > 0
    ? generatedMilestones.map(m => ({
        title: m.title;
        description: m.description;
        dueDate: m.dueDate
        estimatedHours: m.estimatedHours
      }))
    : [];
  const { data, error } = await supabase.functions.invoke("generate-contract", {
    body: {
      talentName: talent.full_name;
      clientName: clientName;
      projectName: values.projectName;
      scopeSummary: values.scopeSummary;
      startDate: values.startDate.toISOString();
      endDate: values.endDate?.toISOString();
      paymentTerms: values.paymentTerms;
      paymentAmount: values.paymentAmount;
      additionalClauses: additionalClauses



      additionalClauses: additionalClauses,
      milestones: milestoneData}
  });
  if (error) {
    throw error
  }
  

  if (data && data.success && data && data.contract) {
    return data && data.contract
  } else {
    throw new Error("Failed to generate contract")
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';

  talent: TalentProfile,
  client_name: string;
  generated_milestones: GeneratedMilestone[]): Promise < string> {
  const additional_clauses = values.additional_clauses || [];





  }

  }
}
;

