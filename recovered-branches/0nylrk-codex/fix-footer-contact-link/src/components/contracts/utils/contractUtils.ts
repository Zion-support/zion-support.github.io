<<<<<<< HEAD
=======
<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {supabase} from "@/integrations/supabase/client";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "../components/ContractForm";

import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "../components/ContractForm";
interface Milestone {
  title: string,
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
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
=======
  description: string;
=======



<<<<<<< HEAD
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

  dueDate: string

import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "../components/ContractForm",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface Milestone {
  title: string,
  description: string,
  dueDate: string,
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  estimatedHours: number
}
export async function generateContract(

<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
  talent: TalentProfile, 
  clientName: string,
  generatedMilestones: GeneratedMilestone[]
): Promise<string> {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      milestones: milestoneData}
  });

  if (error) {}
    throw error;
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
  values: ContractFormValues,

  // Prepare milestone data if we have AI-generated milestones
  const milestoneData = generatedMilestones.length > 0
    ? generatedMilestones.map(m => ({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        title: m.title,

        description: m.description,
        dueDate: m.dueDate,
        estimatedHours: m.estimatedHours;
      }))
    : [],
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
  }

  if (data && data.success && data && data.contract) {
    return data && data.contract
  } else {

    throw new Error("Failed to generate contract")

import { supabase } from '@/integrations / supabase / client';'
import { TalentProfile } from '@/types / talent';'
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';'
=======
  }

  if (data && data.success && data && data.contract) {
    return data && data.contract
  } else {

    throw new Error("Failed to generate contract")

import { supabase } from '@/integrations / supabase / client';'
import { TalentProfile } from '@/types / talent';'
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';'
=======
<<<<<<< HEAD
      milestones: milestoneData}
  });
  
  if (error) {
    throw error
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const additionalClauses = values && values.additionalClauses || [];
  
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
>>>>>>> merged-prs-20250907-203621
      additionalClauses: additionalClauses,
      milestones: milestoneData}
  });
  if (error) {
    throw error
  }
  
<<<<<<< HEAD
  if (data.success && data.contract) {
    return data.contract
  } else {
    throw new Error("Failed to generate contract")
  }
}
=======
  if (data && data.success && data && data.contract) {
    return data && data.contract
  } else {
    throw new Error("Failed to generate contract")
import { supabase } from '@/integrations / supabase / client';
import { TalentProfile } from '@/types / talent';
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { ContractFormValues } from '../components / ContractForm';
interface Milestone {}

  title: string;
  description: string;
  due_date: string,
  estimated_hours: number;
}
export async function generate_contract (
  values: ContractFormValues,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  talent: TalentProfile,
  client_name: string;
  generated_milestones: GeneratedMilestone[]): Promise < string> {
  const additional_clauses = values.additional_clauses || [];


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
  } else {;
    throw new Error("Failed to generate contract");

  } else {

  }
}
}
}
  } else {

    throw new Error ("Failed to generate contract");
=======

  }
<<<<<<< HEAD
}
  } else {
    throw new Error ("Failed to generate contract");

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
  } interface Milestone {
  title: string;
description: string;
dueDate: string;
estimatedHours: number 
}export async function generateContract (values: ContractFormValues;
talent: TalentProfile;
clientName: string;
generatedMilestones: GeneratedMilestone[]) : Promise<string> {
  const additionalClauses = values.additionalClauses || [];
}
}
  }
  
  if (data.success && data.contract) {
    return data.contract
  } else {
    throw new Error("Failed to generate contract")
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
;
  if (data.success && data.contract) {;
    return data.contract;
  } else {;
    throw new Error("Failed to generate contract");
<<<<<<< HEAD
=======
<<<<<<< HEAD

  } else {

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
  }
}
;
=======
  }
}
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
