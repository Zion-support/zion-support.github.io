import { UseFormReturn  } from './react - hook - form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from '@/components / ui / form';
import { Checkbox  } from '@/components / ui / checkbox';
import { ContractFormValues  } from './ContractForm';
interface AdditionalClausesFieldsProps {
  form: UseFormReturn < ContractFormValues>;
}
export /**
 * AdditionalClausesFields - Function description
 */
function AdditionalClausesFields() {
  return (
    <FormField;
      control={form.control}
      name="additional_clauses";
      render={() => (
        <FormItem>;
          <div className="mb - 4">;
            <FormLabel > Additional Clauses</FormLabel>;
            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("nda")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "nda"]);
                          : field.on_change (
                              current_values.filter ((value) => value !== "nda"),
                            );
                      }}
                    />;
                  </FormControl>;
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;
                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("ip")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "ip"]);
                          : field.on_change (
                              current_values.filter ((value) => value !== "ip"),
                            );
                      }}
                    />;
                  </FormControl>;
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;
                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("termination")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "termination"]);
                          : field.on_change (
                              current_values.filter (
                                (value) => value !== "termination",
                              ),
                            );
                      }}
                    />;
                  </FormControl>;
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;
                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes ("revisions")}
                      onCheckedChange={(checked) => {
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "revisions"]);
                          : field.on_change (
                              current_values.filter (
                                (value) => value !== "revisions",
                              ),
                            );
                      }}
                    />;
                  </FormControl>;
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
                </FormItem>)}
            />;
          </div>;
        </FormItem>)}
    />);
}