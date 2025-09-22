
import { UseFormReturn } from "react-hook-form";

import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;

  FormDescription,;

  FormField,
  FormItem,
  FormLabel,
  FormControl,

} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
  FormDescription,;} from "@/components/ui/form";import { Checkbox } from "@/components/ui/checkbox";
  FormDescription,;} from "@/components/ui/form";import { Checkbox } from "@/components/ui/checkbox";

} from "@/components/ui/form";

"
import { Checkbox } from "@/components/ui/checkbox";"
} from "@/components/ui/form";

} from "@/components/ui/form";
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";

import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}

FormDescription,
  FormDescription,;
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";
interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}
export function AdditionalClausesFields({
  form
}: AdditionalClausesFieldsProps) {
  return (
    <FormField



import { UseFormReturn } from "react-hook-form",
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription
} from "@/components/ui/form",
import { Checkbox } from "@/components/ui/checkbox",
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
FormDescription "
} from "@/components/ui/form","
import { Checkbox } from "@/components/ui/checkbox","
import { ContractFormValues } from "./ContractForm",
interface AdditionalClausesFieldsProps {}
  form: UseFormReturn<ContractFormValues>";
import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
FormDescription;"
} from "@/components/ui/form",;"
import { Checkbox } from "@/components/ui/checkbox",;"
import { ContractFormValues } from "./ContractForm",;
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;
}
;
export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {;
  return (;
    <FormField;
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
      control={form.control}
      name="additionalClauses"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel>Additional Clauses</FormLabel>
            <FormDescription>
              Select additional clauses to include in your contract
            </FormDescription>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="additionalClauses"
              render={({ field }) => (
<FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox

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

      control={form.control}
      name="additionalClauses"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel>Additional Clauses</FormLabel>
            <FormDescription>
              Select additional clauses to include in your contract
            </FormDescription>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="additionalClauses"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;
}: AdditionalClausesFieldsProps) {;
  return (
    <FormField;
      control={form && form.control}
"
      name="additionalClauses"

      render={() => (;

      name="additionalClauses"      render={() => (;
        <FormItem>;
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;
      control={form.control}
      name="additionalClauses"
      render={() => (
        <FormItem>;"
          <div className="mb-4">;
            <FormLabel>Additional Clauses</FormLabel>;

      control={form.control}"
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
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <FormField;

              control={form.control}"
              name="additional_clauses";
              render={({ field }) => (
                      onCheckedChange={(checked) => {}
                        const currentValues = field.value |[];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])
: field.onChange(
                              currentValues.filter((value) => value !== "nda")
<FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;"
                      checked={field.value?.includes ("nda")}
                      onCheckedChange={(checked) => {}
                        const current_values = field.value || [];
                        return checked;"
                          ? field.on_change ([...current_values, "nda"]);
                          : field.on_change ("
                              current_values.filter ((value) => value !== "nda"),

checked={field.value?.includes("nda")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "nda")
                      onCheckedChange={(checked) => {;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
            <FormField;                      onCheckedChange={(checked) => {;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4">;
            <FormField;                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked"
                          ? field.onChange([...currentValues, "nda"])
                          : field.onChange("
                              currentValues.filter((value) => value !== "nda"),

                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;'
                          ? field.onChange([...currentValues, 'nda']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'nda');

                            );
                      }}
                    />
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Confidentiality (NDA)
                    </FormLabel>
                    <FormDescription>
                      Protect sensitive information;
                    </FormDescription>
                  </div>
                </FormItem>
              )}

            />
            <FormField
            />;
            <FormField;
              control={form.control}
              control={form.control}
                            );
                      }}
                    />;
                  </FormControl>;

<div className="space - y-1 leading-none">;
                    <FormLabel > Confidentiality (NDA)</FormLabel>;              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox
                      checked={field.value?.includes("ip")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "ip"])
                          : field.onChange(
                              currentValues.filter((value) => value !== "ip")
                              currentValues.filter((value) => value !== "ip"),

                    <FormDescription>;
                      Protect sensitive information;
                    </FormDescription>;
                  </div>;

            />;
            <FormField;

              control={form.control}

            <FormField;
              control={form && form.control}
"
              name="additionalClauses"
              render={({ field }) => (;"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
"
                      checked={field && field.value?.includes("ip")}
"
                              currentValues.filter((value) => value !== "ip"),
                      checked={field.value?.includes('ip')}

                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;

? field && field.onChange([...currentValues, "ip"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter((value) => value !== "ip"),;
                </FormItem>)}
            />;
            <FormField;
control={form.control}"
              name="additional_clauses";
              render={({ field }) => ("
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;"
                      checked={field.value?.includes ("ip")}
                      onCheckedChange={(checked) => {}
                        const current_values = field.value || [];
                        return checked;"
                          ? field.on_change ([...current_values, "ip"]);
                          : field.on_change ("
                              current_values.filter ((value) => value !== "ip"),

                          ? field.onChange([...currentValues, 'ip']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'ip');

            />
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

                            );
                      }}
                    />
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Intellectual Property Transfer;
                    </FormLabel>
                    <FormDescription>
                      Transfer ownership of work products;
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField;
            />;
            <FormField;
              control={form.control}

              control={form.control}
                            );
                      }}
                    />;
                  </FormControl>;

<div className="space - y-1 leading-none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox

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


                  <div className="space - y-1 leading - none">;
                    <FormLabel > Intellectual Property Transfer</FormLabel>;

                    <FormDescription>;
                      Transfer ownership of work products;
                    </FormDescription>;
                  </div>;

            />;
            <FormField;

              control={form.control}

            <FormField;
              control={form && form.control}
"
              name="additionalClauses"
render={({ field }) => (;"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
"
                      checked={field && field.value?.includes("termination")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;"
                          ? field && field.onChange([...currentValues, "termination"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "termination",;
                              ),;

</FormItem>)}
            />;
            <FormField;
              control={form.control}"
              name="additional_clauses";
              render={({ field }) => ("
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;
                  <FormControl>;
                    <Checkbox;"
                      checked={field.value?.includes ("termination")}

                      onCheckedChange={(checked) => {"
                                (value) => value !== "termination"
                              )"
                                (value) => value !== "termination",
                              ),
                        const current_values = field.value || [];
                        return checked;"
                          ? field.on_change ([...current_values, "termination"]);
                          : field.on_change (
                              current_values.filter ("
                                (value) => value !== "termination",
                              ),

"
                                (value) => value !== "termination",
                              ),
                                (value) => value !== "termination",
                              ),


'
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;'
                          ? field.onChange([...currentValues, 'termination']);
: field.onChange(;
                              currentValues.filter((value) => value !== 'termination');
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

                                (value) => value !== "termination",
                              ),

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
                      checked={field.value?.includes("termination")}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value |[];
                        return checked
                          ? field.onChange([...currentValues, "termination"])
                          : field.onChange(
                              currentValues.filter(
                                (value) => value !== "termination"
                              )
                                (value) => value !== "termination",
                              ),
                                (value) => value !== "termination",
                              ),

                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'termination');

                            );
                      }}
                    />
</FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Termination Clause;
                    </FormLabel>
                    <FormDescription>
                      Define conditions for ending the contract;
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
<FormField;
            />;
            <FormField;
              control={form.control}

            <FormField
            />;
            <FormField;

control={form.control}
                            );
                      }}
                    />;
                  </FormControl>;

<FormDescription>;
                              currentValues.filter((value) => value !== 'termination');                    <FormDescription>;
                      Define conditions for ending the contract;
                    </FormDescription>;
                  </div>;
<FormField
              control={form && form.control}
                  <div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;

<div className="space - y-1 leading - none">;
                    <FormLabel > Termination Clause</FormLabel>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'termination']);
                          :field.onChange(;
                              currentValues.filter((value) => value !== 'termination');
                            ),;
                      }}
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>;
                      Termination Clause;
                    </FormLabel>;
                    <FormDescription>;
                      Define conditions for ending the contract;
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
              render={({ field }) => (;"
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
<Checkbox

                    <Checkbox;
"
                                (value) => value !== "revisions"
                              )"
            <FormField
              control={form && form.control}
              name="additionalClauses"
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox

                                (value) => value !== "revisions"
                              )
                                (value) => value !== "revisions",
                              ),

"
                      checked={field && field.value?.includes("revisions")}
                      onCheckedChange={(checked) => {;
                        const currentValues = field && field.value || [];
                        return checked;"
                          ? field && field.onChange([...currentValues, "revisions"]);
                          : field && field.onChange(;
                              currentValues && currentValues.filter(;"
                                (value) => value !== "revisions",;
                              ),;

                </FormItem>)}
            />;
            <FormField;
              control={form.control}
              name="additional_clauses";

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
'
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;'
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;'
                              currentValues.filter((value) => value !== 'revisions');

                            );
                              ),                            );
                              ),                            );
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [];
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          : field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');

                            );
                      }}
                    />
                  </FormControl>"
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Revisions & Amendments;
                    </FormLabel>
                    <FormDescription>
                      Define how changes to the contract are handled;
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </FormItem>
      )}
    />
    />;
  );
}

                            );
                      }}
                    />;
                  </FormControl>;

                  <div className="space - y-1 leading-none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;


<div className="space - y-1 leading - none">;
                    <FormLabel > Revisions & Amendments</FormLabel>;
                </FormItem>;              )}
            />;
            ;
            <FormField;
              control={form.control}
              name="additionalClauses";
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;
                  <FormControl>;
                    <Checkbox;
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {;
                        const currentValues = field.value || [],;
                        return checked;
                          ? field.onChange([...currentValues, 'revisions']);
                          :field.onChange(;
                              currentValues.filter((value) => value !== 'revisions');
                            ),;
                      }}
                    />;
                  </FormControl>;
                  <div className="space-y-1 leading-none">;
                    <FormLabel>;
                      Revisions & Amendments;
                    </FormLabel>;
                    <FormDescription>;
                      Define how changes to the contract are handled;
                    </FormDescription>;
                  </div>;

/>
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
}
                </FormItem>;              )}
            />;
          </div>;
        </FormItem>;
      )}
    />;
  ),;}
 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues> 
}form 
}: AdditionalClausesFieldsProps) {
  return (<FormField control= {
  form.control 
}<FormLabel>Additional Clauses</FormLabel> <FormDescription> Select additional clauses to include in your contract </FormDescription> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <FormField control= {
  form.control 
}/> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Confidentiality (NDA) </FormLabel> <FormDescription> Protect sensitive information </FormDescription> </div> </FormItem>) 
}/> <FormField /> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Intellectual Property Transfer </FormLabel> <FormDescription> Transfer ownership of work products </FormDescription> </div> </FormItem>) 
}/> <FormField /> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Termination Clause </FormLabel> <FormDescription> Define conditions for ending the contract </FormDescription> </div> </FormItem>) 
}/> <FormField /> </FormControl> <div className="space-y-1 leading-none" > <FormLabel> Revisions & Amendments </FormLabel> <FormDescription> Define how changes to the contract are handled </FormDescription> </div> </FormItem>) 
}/> </div> </FormItem>) 
}/>) 
}
    />
    />;
  );
}
}

'"
}
  FormDescription,;

  FormField,
  FormItem,
  FormLabel,
  FormControl,
"
} from "@/components/ui/form";""
import { Checkbox } from "@/components/ui/checkbox";""
import { ContractFormValues } from "./ContractForm";"
interface AdditionalClausesFieldsProps {;
  form: UseFormReturn<ContractFormValues>;

    <FormField;"
import { UseFormReturn } from "react-hook-form","
import {
  // TODO: Implement
}
  FormDescription;"
} from "@/components/ui/form",""
import { Checkbox } from "@/components/ui/checkbox",""
import { ContractFormValues } from "./ContractForm","
interface AdditionalClausesFieldsProps {
  // TODO: Implement
  form: UseFormReturn<ContractFormValues>

    <FormField;

      control={form.control}

export function AdditionalClausesFields(): any ({;
  form,;)
}: AdditionalClausesFieldsProps) {;
  return (
      control={form && form.control}"
      name="additionalClauses"")
      render={() => (;

        <FormItem>;
          <div className="mb-4">;"
</div>
            <FormLabel>Additional Clauses;
            <FormDescription>;

            ;
          </div>;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;"
              control={form.control}"
              name="additional_clauses";")
              render={({ field }) => (
                <FormItem className="flex flex - row items - start space - x-3 space - y-0">;"

                  <FormControl>;

                    <Checkbox;)"
                      checked={field.value?.includes ("nda")}"
                      onCheckedChange={(checked) => {

                  <div className="space-y-1 leading-none">"
                    <FormLabel>

                    <FormDescription>

            />;

                            );
                      }}

                  ;"
                  <div className="space - y-1 leading - none">;"
                    <FormLabel > Confidentiality (NDA);

                  </div>;
              control={form && form.control}

              name="additionalClauses""
              render={({ field }) => (;
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">;"

                      checked={field && field.value?.includes("ip")}""
                              currentValues.filter((value) => value !== "ip"),"

                )}
              name="additional_clauses";"

                      checked={field.value?.includes ("ip")}"

                <FormItem className="flex flex-row items-start space-x-3 space-y-0">"

                  <FormControl>

                      checked={field.value?.includes("ip")}"

                    <FormLabel > Intellectual Property Transfer;

                      checked={field && field.value?.includes("termination")}"
                      onCheckedChange={(checked) => {;

                      checked={field.value?.includes ("termination")}"

                    <FormLabel > Termination Clause;

                                (value) => value !== "revisions""

              name="additional_clauses";""
                                (value) => value !== "revisions","

                    <FormLabel > Revisions & Amendments;

pr-12325
