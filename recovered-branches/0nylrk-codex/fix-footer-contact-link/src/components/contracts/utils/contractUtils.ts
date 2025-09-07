import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "../components/ContractForm";
interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number}

  dueDate: string

interface Milestone {
  title: string,
  description: string,
  dueDate: string,
  estimatedHours: number
}
export async function generateContract(
  values: ContractFormValues,
  talent: TalentProfile, 
  clientName: string,
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
  const additionalClauses = $2;
  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = $2;
        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours
      }))
    : [],
  
  const { data, error } = await supabase.functions.invoke($2);
      endDate: values.endDate?.toISOString($2);
      paymentTerms: values.paymentTerms,
      paymentAmount: values.paymentAmount,
      additionalClauses: additionalClauses,
      milestones: milestoneData}
  }),
  
  if (error) {
    throw error
  }
  
  if (data.success && data.contract) {
    return data.contract
  } else {
    throw new Error("Failed to generate contract")
  }
}
  }
}
;