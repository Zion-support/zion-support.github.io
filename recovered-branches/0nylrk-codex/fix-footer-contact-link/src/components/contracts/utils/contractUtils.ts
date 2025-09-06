
import {supabase} from "@/integrations/supabase/client";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "../components/ContractForm";
interface Milestone {
  title: string;
  description: string;
  dueDate: string,
  estimatedHours: number
}

export async function generateContract(
  values: ContractFormValues,
  talent: TalentProfile, 
  clientName: string;
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
  const additionalClauses = values && values.additionalClauses || [];
  
  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = generatedMilestones && generatedMilestones.length > 0 
    ? generatedMilestones && generatedMilestones.map(m => ({
        title: m && m.title;
        description: m && m.description;
        dueDate: m && m.dueDate,
        estimatedHours: m && m.estimatedHours
      }))
    : [];
  
  const { data, error } = await supabase && supabase.functions.invoke("generate-contract", {
    body: {
      talentName: talent && talent.full_name;
      clientName: clientName;
      projectName: values && values.projectName;
      scopeSummary: values && values.scopeSummary;
      startDate: values && values.startDate.toISOString();
      endDate: values && values.endDate?.toISOString();
      paymentTerms: values && values.paymentTerms;
      paymentAmount: values && values.paymentAmount;
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
  }
}
