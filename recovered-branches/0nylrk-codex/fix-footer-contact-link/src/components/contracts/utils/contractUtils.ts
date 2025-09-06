
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "../components/ContractForm";
interface Milestone {
  title: string;
  description: string;

  dueDate: string

  estimatedHours: number
}
export async function generateContract(

  values: ContractFormValues
  talent: TalentProfile
  clientName: string;
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
<<<<<<< HEAD
  const additionalClauses = values.additionalClauses |[];
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    body: {
      talentName: talent && talent.full_name;
      clientName: clientName;
<<<<<<< HEAD
      projectName: values.projectName;
      scopeSummary: values.scopeSummary;
      startDate: values.startDate.toISOString();
      endDate: values.endDate?.toISOString();
      paymentTerms: values.paymentTerms;
      paymentAmount: values.paymentAmount;
      additionalClauses: additionalClauses
=======
      projectName: values && values.projectName;
      scopeSummary: values && values.scopeSummary;
      startDate: values && values.startDate.toISOString();
      endDate: values && values.endDate?.toISOString();
      paymentTerms: values && values.paymentTerms;
      paymentAmount: values && values.paymentAmount;
      additionalClauses: additionalClauses,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      milestones: milestoneData}
  });

  if (error) {
    throw error
  }
<<<<<<< HEAD
  if (data.success && data.contract) {
    return data.contract
=======
  
  if (data && data.success && data && data.contract) {
    return data && data.contract
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } else {
    throw new Error("Failed to generate contract")
  }
}