
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",;
import { ContractFormValues } from "../components/ContractForm",;
;
interface Milestone {;
  title:string,;
  description:string,;
  dueDate:string,;
  estimatedHours:number;
}
;
export async function generateContract(;
  values:ContractFormValues,;
  talent:TalentProfile, ;
  clientName:string,;
  generatedMilestones:GeneratedMilestone[];
):Promise<string> {;
  const additionalClauses = values.additionalClauses || [],;
  ;
  // Prepare milestone data if we have AI-generated milestones;
  const milestoneData = generatedMilestones.length > 0 ;
    ? generatedMilestones.map(m => ({;
        title:m.title,;
        description:m.description,;
        dueDate:m.dueDate,;
        estimatedHours:m.estimatedHours;
      }));
    :[],;
  ;
  const { data, error } = await supabase.functions.invoke("generate-contract", {;
    body:{;
      talentName:talent.full_name,;
      clientName:clientName,;
      projectName:values.projectName,;
      scopeSummary:values.scopeSummary,;
      startDate:values.startDate.toISOString(),;
      endDate:values.endDate?.toISOString(),;
      paymentTerms:values.paymentTerms,;
      paymentAmount:values.paymentAmount,;
      additionalClauses:additionalClauses,;
      milestones:milestoneData}
  }),;
  ;
  if (error) {;
    throw error,;
  }
  ;
  if (data.success && data.contract) {;
    return data.contract,;
  } else {;
    throw new Error("Failed to generate contract"),;
  }
=======
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "../components/ContractForm",interface Milestone {
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
  const additionalClauses = values.additionalClauses || [],

interface Milestone {_title: string;
  description: string;
  dueDate: string;
  estimatedHours: number;}

export async function generateContract(_values: ContractFormValues, _talent: TalentProfile, _clientName: string, _generatedMilestones: GeneratedMilestone[]): Promise<string> {_const _additionalClauses = values.additionalClauses || [];
  
  // Prepare milestone data if we have AI-generated milestones
  const _milestoneData = generatedMilestones.length > 0 
    ? generatedMilestones.map(m => ({
        title: m.title,
        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours
      }))
    : [],
  
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
  }),
  
  if (error) {
    throw error
  }
  
  if (data.success && data.contract) {
    return data.contract
  } else {
    throw new Error("Failed to generate contract")  }
        title: m.title, _description: m.description, _dueDate: m.dueDate, _estimatedHours: m.estimatedHours}))
    : [];
  
  const {_data, _error} = await supabase.functions.invoke("generate-contract", {_body: {
      talentName: talent.full_name, _clientName: clientName, _projectName: values.projectName, _scopeSummary: values.scopeSummary, _startDate: values.startDate.toISOString(), _endDate: values.endDate?.toISOString(), _paymentTerms: values.paymentTerms, _paymentAmount: values.paymentAmount, _additionalClauses: additionalClauses, _milestones: milestoneData}
  });
  
  if (error) {_throw error;}
  
  if (data.success && data.contract) {_return data.contract;} else {_throw new Error("Failed to generate contract");}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
