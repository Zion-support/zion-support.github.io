
<<<<<<< HEAD
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
;
export interface ContractTemplate {;
  id:string,;
  title:string,;
  template_data:ContractFormValues,;
  is_default:boolean,;
  created_at:string,;
  updated_at:string;
=======
import { ContractFormValues } from "@/components/contracts/components/ContractForm",export interface ContractTemplate {
  id: string,
  title: string,
  template_data: ContractFormValues,
  is_default: boolean,
  created_at: string,
  updated_at: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

export interface ContractTemplate {_id: string;
  title: string;
  template_data: ContractFormValues;
  is_default: boolean;
  created_at: string;
  updated_at: string;}
