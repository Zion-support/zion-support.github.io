

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { UseFormReturn } from "react-hook-form";

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
<<<<<<< HEAD
  FormDescription,;

  FormField,
  FormItem,
  FormLabel,
  FormControl,

} from "@/components/ui/form";

} from "@/components/ui/form";
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
=======
  FormDescription,;} from "@/components/ui/form";import { Checkbox } from "@/components/ui/checkbox";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}

<<<<<<< HEAD





=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function AdditionalClausesFields({
  form
}: AdditionalClausesFieldsProps) {
  return (
    <FormField

<<<<<<< HEAD





import { UseFormReturn } from "react-hook-form",
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription 
} from "@/components/ui/form",
import { Checkbox } from "@/components/ui/checkbox",
import { ContractFormValues } from "./ContractForm",
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>
import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription;
} from "@/components/ui/form",;
import { Checkbox } from "@/components/ui/checkbox",;
import { ContractFormValues } from "./ContractForm",;
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
;
export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {;
  return (;
    <FormField;


      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField
      control={form && form.control}
      name="additionalClauses"
      render={() => (;
=======
      name="additionalClauses"      render={() => (;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
      control={form.control}
      name="additionalClauses"
      render={() => (
            <FormDescription>;
              Select additional clauses to include in your contract;
            </FormDescription>;
          </div>;

                      checked={field && field.value?.includes("nda")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "nda"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "nda"),;
<<<<<<< HEAD

          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;
              control={form.control}
              name="additional_clauses";
              render={({ field }) => (
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
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


                      checked={field.value?.includes("nda")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
                      onCheckedChange={(checked) => {;
=======
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
            <FormField;                      onCheckedChange={(checked) => {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda"),
<<<<<<< HEAD

                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'nda');


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Confidentiality (NDA)
                    </FormLabel>
                    <FormDescription>
                      Protect sensitive information
                    </FormDescription>
                  </div>
                </FormItem>
              )}

<<<<<<< HEAD
            />
            <FormField
            />;
            <FormField;
              control={form.control}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                            );
                      }}
                    />;
                  </FormControl>;

<<<<<<< HEAD
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;

                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;

            />;


            <FormField
              control={form && form.control}

            />;
            <FormField;

              control={form.control}
            <FormField
              control={form && form.control}
              name="additionalClauses"
=======
                  <div className="space - y-1 leading-none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;              name="additionalClauses"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                      checked={field && field.value?.includes("ip")}

                              currentValues.filter((value) => value !== "ip"),

                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
<<<<<<< HEAD

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

                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');


            />
            <FormField
            />;
            <FormField;
              control={form.control}
              name="additionalClauses"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes("ip")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "ip"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "ip")
                              currentValues.filter((value) => value !== "ip"),
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'ip');
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Intellectual Property Transfer
                    </FormLabel>
                    <FormDescription>
                      Transfer ownership of work products
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
            />;
            <FormField;

<<<<<<< HEAD
              control={form.control}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                            );
                      }}
                    />;
                  </FormControl>;

<<<<<<< HEAD
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;

                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;

            />;


            <FormField
              control={form && form.control}

            />;
            <FormField;

              control={form.control}
            <FormField
              control={form && form.control}
              name="additionalClauses"
=======
                  <div className="space - y-1 leading-none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;              name="additionalClauses"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
<<<<<<< HEAD

                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "termination",;
                              ),;

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
                                (value) => value !== "termination"
                              )
                                (value) => value !== "termination",
                              ),
                        const current_values = field.value || [];
                        return checked;
                          ? field.on_change ([...current_values, "termination"]);
                          : field.on_change (
                              current_values.filter (
                                (value) => value !== "termination",
                              ),

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                                (value) => value !== "termination",
                              ),

                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          : field.onChange(;
<<<<<<< HEAD
                              currentValues.filter((value) => value !== 'termination');


                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Termination Clause
                    </FormLabel>
                    <FormDescription>
                      Define conditions for ending the contract
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
            />;
            <FormField;

              control={form.control}
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

            />;


            <FormField
              control={form && form.control}

=======
                              currentValues.filter((value) => value !== 'termination');                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
            <FormField
              control={form && form.control}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            />;
            <FormField;

              control={form.control}
            <FormField
              control={form && form.control}
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox

<<<<<<< HEAD


                                (value) => value !== "revisions"
                              )
                                (value) => value !== "revisions",
                              ),


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;
                                (value) => value !== "revisions",;
                              ),;

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";
                                (value) => value !== "revisions",
<<<<<<< HEAD
                              ),
                                (value) => value !== "revisions",
                              ),

                                (value) => value !== "revisions",
                              ),

                      checked={field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];

                        return checked
                          ? field.onChange([...currentValues, "revisions"])
                          : field.onChange(
                              currentValues.filter(
                                (value) => value !== "revisions"
                              )
                                (value) => value !== "revisions",
                              ),
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');


                            );
=======
                              ),                            );
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Revisions & Amendments
                    </FormLabel>
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

                            );
                      }}
                    />;
                  </FormControl>;

<<<<<<< HEAD
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;

=======
                  <div className="space - y-1 leading-none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    />;
  );
                </FormItem>)}
            />;
          </div>;
        </FormItem>)}
    />);
                            );
                      }}
                    />;
                  </FormControl>;
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;
<<<<<<< HEAD
}
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
