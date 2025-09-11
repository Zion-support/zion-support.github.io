




interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number
}
export async function generateContract(

  values: ContractFormValues
  talent: TalentProfile
  clientName: string;
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
  const additionalClauses = values.additionalClauses |[];
  values: ContractFormValues,
  talent: TalentProfile, ;
  clientName: string;
  talent: TalentProfile, 
  clientName: string,
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
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
        title: m.title,
        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours
      }))
    : [],
  
  const { data, error } = await supabase.functions.invoke("generate-contract", {
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

  }
  
  if (data.success && data.contract) {
    return data.contract
=======
  
  if (data && data.success && data && data.contract) {
    return data && data.contract
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } else {
    throw new Error("Failed to generate contract")

import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';
import { ContractFormValues } from '../components / ContractForm';
interface Milestone {
  title: string;
  description: string;
  due_date: string,
  estimated_hours: number;
}
export async function generate_contract (
  values: ContractFormValues,
  talent: TalentProfile,
  client_name: string;
  generated_milestones: GeneratedMilestone[]): Promise < string> {
  const additional_clauses = values.additional_clauses || [];
=======


=======

;
  // Prepare milestone data if we have AI - generated milestones;
  const milestone_data = generated_milestones.length > 0;
    ? generated_milestones.map (m => ({
        title: m.title;
        description: m.description;
        due_date: m.due_date,
        estimated_hours: m.estimated_hours;
      }));
    : [];
;
  const { data, error } = await supabase.functions.invoke ("generate - contract", {
    body: {
      talent_name: talent.full_name;
      client_name: client_name;
      project_name: values.project_name;
      scope_summary: values.scope_summary;
      start_date: values.start_date.toISOString ();
      end_date: values.end_date?.toISOString ();
      payment_terms: values.payment_terms;
      payment_amount: values.payment_amount;
      additional_clauses: additional_clauses,
      milestones: milestone_data}
  });
;
  // Check condition
if ( {) {
  $2
}
    throw error;
  }
  // Check condition
if ( {) {
  $2
}
    return data.contract;

  } else {;
    throw new Error("Failed to generate contract");



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
