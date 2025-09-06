
import { UseFormReturn } from "react-hook-form";
import { 
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription 
} from "@/components/ui/form",
import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}

export function AdditionalClausesFields({
  form,
}: AdditionalClausesFieldsProps) {
  return (
    <FormField
      control;
                        return checked
                          ? field.onChange([...currentValues, "revisions"])
                          : field.onChange(
                              currentValues.filter(
                                (value) => value !== "revisions",
                              ),
                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Revisions & Amendments</FormLabel>
                    <FormDescription>
                      Define how changes to the contract are handled
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </FormItem>
      )}
    />
  );
}
