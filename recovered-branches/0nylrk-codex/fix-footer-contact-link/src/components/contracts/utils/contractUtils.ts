
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "../components/ContractForm";
interface Milestone {
  title: string;
  description: string;
<<<<<<< HEAD
  dueDate: string;
=======
  dueDate: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  estimatedHours: number
}
export async function generateContract(
<<<<<<< HEAD
  values: ContractFormValues;
  talent: TalentProfile;
  clientName: string;
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
  const additionalClauses = null;
=======
  values: ContractFormValues
  talent: TalentProfile
  clientName: string;
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
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
      milestones: milestoneData}
  });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  if (error) {
    throw error
  }
  if (data.success && data.contract) {
    return data.contract
  } else {
    throw new Error("Failed to generate contract")
  }
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
