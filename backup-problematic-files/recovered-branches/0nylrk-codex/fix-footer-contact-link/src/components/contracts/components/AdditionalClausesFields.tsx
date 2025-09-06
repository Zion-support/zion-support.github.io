
=======
import { UseFormReturn } from "react-hook-form",;
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription ;
} from "@/components/ui/form",;
import { Checkbox } from "@/components/ui/checkbox",;
import { ContractFormValues } from "./ContractForm",;
;
interface AdditionalClausesFieldsProps {;
  form:UseFormReturn<ContractFormValues>;
}
;
export function AdditionalClausesFields({ form } AdditionalClausesFieldsProps) {;
  return (;
    <FormField;
      control={form.control}
      name="additionalClauses";
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      render={() => (;
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
<<<<<<< HEAD

                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;

                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;

                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;

                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;

