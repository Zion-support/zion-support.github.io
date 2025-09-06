
import {supabase} from "@/integrations/supabase/client";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "../components/ContractForm";
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "../components/ContractForm";
interface Milestone {
  title: string;
  description: string;


import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "../components/ContractForm",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface Milestone {
  title: string,
  description: string,
  dueDate: string,

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  estimatedHours: number
}
export async function generateContract(

  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
  const additionalClauses = values.additionalClauses || [],

  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = generatedMilestones.length > 0
    ? generatedMilestones.map(m => ({

import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",;
import { ContractFormValues } from "../components/ContractForm",;
interface Milestone {;
  title: string,;
  description: string,;
  dueDate: string,;
  estimatedHours: number;
}
;
export async function generateContract(;
  values: ContractFormValues,;
  talent: TalentProfile,;
  clientName: string,;
  generatedMilestones: GeneratedMilestone[];
): Promise<string> {;
  const additionalClauses = values.additionalClauses || [],;
  // Prepare milestone data if we have AI-generated milestones;
  const milestoneData = generatedMilestones.length > 0;
    ? generatedMilestones.map(m => ({;
        title: m.title,;
        description: m.description,;
        dueDate: m.dueDate,;
        estimatedHours: m.estimatedHours;
      }));
    : [],;
  const { data, error } = await supabase.functions.invoke("generate-contract", {;
    body: {;
      talentName: talent.full_name,;
      clientName: clientName,;
      projectName: values.projectName,;
      scopeSummary: values.scopeSummary,;
      startDate: values.startDate.toISOString(),;
      endDate: values.endDate?.toISOString(),;
      paymentTerms: values.paymentTerms,;
      paymentAmount: values.paymentAmount,;
      additionalClauses: additionalClauses;
      milestones: milestoneData}
  });
  if (error) {;
    throw error;
=======
  }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  if (data.success && data.contract) {
    return data.contract
  } else {
    throw new Error("Failed to generate contract")
  }
}
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
;
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
