
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { GeneratedMilestone } from &quot;@/hooks/useMilestoneGenerator&quot;;
import { ContractFormValues } from &quot;../components/ContractForm&quot;;

interface Milestone {
  title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;
}

export async function generateContract(
  values: ContractFormValues, 
  talent: TalentProfile, 
  clientName: string,
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
  const additionalClauses = values.additionalClauses || [];
  
  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = generatedMilestones.length > 0 
    ? generatedMilestones.map(m => ({
        title: m.title,
        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours
      }))
    : [];
  
  const { data, error } = await supabase.functions.invoke(&quot;generate-contract&quot;, {
    body: {
      talentName: talent.full_name,
      clientName: clientName,
      projectName: values.projectName,
      scopeSummary: values.scopeSummary,
      startDate: values.startDate.toISOString(),
      endDate: values.endDate?.toISOString(),
      paymentTerms: values.paymentTerms,
      paymentAmount: values.paymentAmount,
      additionalClauses: additionalClauses,
      milestones: milestoneData}
  });
  
  if (error) {
    throw error;
  }
  
  if (data.success && data.contract) {
    return data.contract;
  } else {
    throw new Error(&quot;Failed to generate contract&quot;);
  }
}
