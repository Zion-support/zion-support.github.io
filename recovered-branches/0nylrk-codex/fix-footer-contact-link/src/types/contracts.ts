
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export interface ContractTemplate {
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
export interface ContractTemplate {;
  id: string;
  title: string;
  template_data: ContractFormValues;
  is_default: boolean;
