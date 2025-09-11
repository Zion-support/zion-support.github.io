
import { ContractFormValues } from '@/components / contracts / components / ContractForm';

export interface ContractTemplate {
=======

import {ContractFormValues} from "@/components/contracts/components/ContractForm";
export interface ContractTemplate {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  title: string;
  template_data: ContractFormValues;
  is_default: boolean;


  created_at: string,
  updated_at: string;
=======

=======
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
export interface ContractTemplate {
  id: string,
  title: string,
  template_data: ContractFormValues,
  is_default: boolean,
  created_at: string,
  updated_at: string
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
export interface ContractTemplate {;
  id: string,;
  title: string,;
  template_data: ContractFormValues,;
  is_default: boolean;
  created_at: string;
  updated_at: string;


}
;
