import {supabase} from "@/integrations/supabase/client";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "../components/ContractForm";

import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",


import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "../components/ContractForm";
interface Milestone {
  title: string,

  description: string;

      milestones: milestoneData}
  });

  if (error) {}
    throw error;
  }
        title: m.title,

        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours;
      }))
    : [],
  "
  const { data, error } = await supabase.functions.invoke("generate-contract", {}
    body: {}
      talentName: talent.full_name,
      clientName: clientName,
      projectName: values.projectName,
      scopeSummary: values.scopeSummary,
      startDate: values.startDate.toISOString(),
      endDate: values.endDate?.toISOString(),
      paymentTerms: values.paymentTerms,
      paymentAmount: values.paymentAmount,
      additionalClauses: additionalClauses,


  if (data.success && data.contract) {

    throw new Error("Failed to generate contract")

      milestones: milestoneData}
  });

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
    : [],;"
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


import { ContractFormValues } from '../components / ContractForm';
interface Milestone {}

  title: string;
  description: string;
  due_date: string,
  estimated_hours: number;
}
export async function generate_contract (
  values: ContractFormValues,


;
  // Prepare milestone data if we have AI - generated milestones;
  const milestone_data = generated_milestones.length > 0;
    ? generated_milestones.map (m => ({}

        title: m.title;
        description: m.description;
        due_date: m.due_date,
        estimated_hours: m.estimated_hours;
      }));
    : [];

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

}

  } else {;
    throw new Error("Failed to generate contract");

  } else {

  }
}
}
}
  } else {

    throw new Error ("Failed to generate contract");
  }
}
;
  if (data.success && data.contract) {;
    return data.contract;
  } else {;
    throw new Error("Failed to generate contract");

;
