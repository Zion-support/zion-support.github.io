    body: {
      talentName: talent && talent.full_name;
      clientName: clientName;
      milestones: milestoneData}
  });

  if (error) {
    throw error
  }
  } else {
    throw new Error("Failed to generate contract")
=======
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
  } else {
    throw new Error ("Failed to generate contract");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}