
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
export interface ContractTemplate {
  id: string;
  title: string;
  template_data: ContractFormValues;
  is_default: boolean;
<<<<<<< HEAD
  created_at: string;
=======
  created_at: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  updated_at: string
}