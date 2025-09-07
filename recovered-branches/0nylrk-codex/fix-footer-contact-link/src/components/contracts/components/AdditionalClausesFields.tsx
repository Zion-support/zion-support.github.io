



import { UseFormReturn } from "react-hook-form";"
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;

  FormField,
  FormItem,
  FormLabel,
  FormControl,
"
} from "@/components/ui/form";""
} from "@/components/ui/form";""
} from "@/components/ui/form";""
import { Checkbox } from "@/components/ui/checkbox";""
import { ContractFormValues } from "./ContractForm";"
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
</ContractFormValues>
    <FormField;"
import { UseFormReturn } from "react-hook-form","
import {
  // TODO: Implement
}
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription;"
} from "@/components/ui/form",""
import { Checkbox } from "@/components/ui/checkbox",""
import { ContractFormValues } from "./ContractForm","
interface AdditionalClausesFieldsProps {
  // TODO: Implement
}
  form: UseFormReturn<ContractFormValues>
</FormField>
  form: UseFormReturn<ContractFormValues>;
</ContractFormValues>
    <FormField;


      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;)
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField;
      control={form && form.control}"
      name="additionalClauses"")
      render={() => (;
</FormField>
        <FormItem>;
</FormItem>"
          <div className="mb-4">;"
</div>
            <FormLabel>Additional Clauses</FormLabel>;
            <FormDescription>;
</FormDescription>
            </FormDescription>;
          </div>;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
</div>
            <FormField;
              control={form.control}"
              name="additional_clauses";")
              render={({ field }) => (
</FormField>"
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;"
</FormItem>
                  <FormControl>;
</FormControl>
                    <Checkbox;)"
                      checked={field.value?.includes ("nda")}"
                      onCheckedChange={(checked) => {
</Checkbox>
                  </FormControl>"
                  <div className="space-y-1 leading-none">"
</div>
                    <FormLabel>
</FormLabel>
                    </FormLabel>
                    <FormDescription>
</FormDescription>
                    </FormDescription>
                  </div>
                </FormItem>
            <FormField;
            />;
</FormField>
            <FormField;
              control={form.control}
                            );
                      }}
                    />;
</FormField>
                  </FormControl>;"
                  <div className="space - y-1 leading - none">;"
</div>
                    <FormLabel > Confidentiality (NDA)</FormLabel>;
                    <FormDescription>;
</FormDescription>
                    </FormDescription>;
                  </div>;
            <FormField;
              control={form && form.control}

            />;
</FormField>
            <FormField;

              control={form.control}
            <FormField;
              control={form && form.control}"
              name="additionalClauses""
              render={({ field }) => (;
</FormField>"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"
</FormItem>
                  <FormControl>;
</FormControl>
                    <Checkbox;)"
                      checked={field && field.value?.includes("ip")}""
                              currentValues.filter((value) => value !== "ip"),"
</Checkbox>
                </FormItem>)}
            <FormField;
              control={form.control}"
              name="additional_clauses";"
              render={({ field }) => (
</FormField>"
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;"
</FormItem>
                  <FormControl>;
</FormControl>
                    <Checkbox;)"
                      checked={field.value?.includes ("ip")}"
                      onCheckedChange={(checked) => {
</Checkbox>
            <FormField;
            />;
</FormField>
            <FormField;
              control={form.control}"
              name="additionalClauses""
              render={({ field }) => (
</FormField>"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">"
</FormItem>
                  <FormControl>
</FormControl>
                    <Checkbox;)"
                      checked={field.value?.includes("ip")}"
                      onCheckedChange={(checked) => {
</Checkbox>
                  </FormControl>"
                  <div className="space-y-1 leading-none">"
</div>
                    <FormLabel>
</FormLabel>
                    </FormLabel>
                    <FormDescription>
</FormDescription>
                    </FormDescription>
                  </div>
                </FormItem>
            <FormField;
            />;
</FormField>
            <FormField;

              control={form.control}
                            );
                      }}
                    />;
</FormField>
                  </FormControl>;"
                  <div className="space - y-1 leading - none">;"
</div>
                    <FormLabel > Intellectual Property Transfer</FormLabel>;
                    <FormDescription>;
</FormDescription>
                    </FormDescription>;
                  </div>;
            <FormField;
              control={form && form.control}

            />;
</FormField>
            <FormField;

              control={form.control}
            <FormField;
              control={form && form.control}"
              name="additionalClauses""
              render={({ field }) => (;
</FormField>"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"
</FormItem>
                  <FormControl>;
</FormControl>
                    <Checkbox;)"
                      checked={field && field.value?.includes("termination")}"
                      onCheckedChange={(checked) => {;
</Checkbox>
                </FormItem>)}
            <FormField;
              control={form.control}"
              name="additional_clauses";"
              render={({ field }) => (
</FormField>"
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;"
</FormItem>
                  <FormControl>;
</FormControl>
                    <Checkbox;)"
                      checked={field.value?.includes ("termination")}"
                      onCheckedChange={(checked) => {
</Checkbox>
                  </FormControl>"
                  <div className="space-y-1 leading-none">"
</div>
                    <FormLabel>
</FormLabel>
                    </FormLabel>
                    <FormDescription>
</FormDescription>
                    </FormDescription>
                  </div>
                </FormItem>
            <FormField;
            />;
</FormField>
            <FormField;

              control={form.control}
                            );
                      }}
                    />;
</FormField>
                  </FormControl>;"
                  <div className="space - y-1 leading - none">;"
</div>
                    <FormLabel > Termination Clause</FormLabel>;
                    <FormDescription>;
</FormDescription>
                    </FormDescription>;
                  </div>;
            <FormField;
              control={form && form.control}

            />;
</FormField>
            <FormField;

              control={form.control}
            <FormField;
              control={form && form.control}"
              name="additionalClauses""
              render={({ field }) => (;
</FormField>"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"
</FormItem>
                  <FormControl>;
</FormControl>
                    <Checkbox;)"
                                (value) => value !== "revisions""
</Checkbox>
                </FormItem>)}
            <FormField;
              control={form.control}"
              name="additional_clauses";""
                                (value) => value !== "revisions","
</FormField>
                  </FormControl>"
                  <div className="space-y-1 leading-none">"
</div>
                    <FormLabel>
</FormLabel>
                    </FormLabel>
                    <FormDescription>
</FormDescription>
                    </FormDescription>
                  </div>
                </FormItem>
          </div>
        </FormItem>
                  </FormControl>;"
                  <div className="space - y-1 leading - none">;"
</div>
                    <FormLabel > Revisions & Amendments</FormLabel>;
                    <FormDescription>;
</FormDescription>
                    </FormDescription>;
                  </div>;
                </FormItem>)}
          </div>;
        </FormItem>)}
                  </FormControl>;
                    <FormDescription>;
</FormDescription>
                    </FormDescription>;
                  </div>;"