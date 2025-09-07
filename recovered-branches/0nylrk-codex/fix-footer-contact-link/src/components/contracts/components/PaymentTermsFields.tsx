<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select",
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions";
import { TalentProfile } from "@/types/talent";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "./ContractForm";
interface PaymentTermsFieldsProps {
  form: UseFormReturn<ContractFormValues>,
  talent: TalentProfile,
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void
}

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MilestoneSuggestions} from "@/components/projects/milestones/MilestoneSuggestions";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "./ContractForm";
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form",

import { UseFormReturn } from "react-hook-form",
import { UseFormReturn } from "react-hook-form",
=======

"
import { UseFormReturn } from "react-hook-form",
"
import { UseFormReturn } from "react-hook-form","
import { UseFormReturn } from "react-hook-form",

"
import { UseFormReturn } from "react-hook-form",

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  FormField;
  FormItem;
  FormLabel;
  FormControl;

  FormDescription;
<<<<<<< HEAD
=======
  FormMessage 
} from "@/components/ui/form",

<<<<<<< HEAD
import { Input } from "@/components/ui/input",


import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input",
=======

import { Input } from "@/components/ui/input",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { 

  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
<<<<<<< HEAD
=======
  SelectValue 
} from "@/components/ui/select",
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions",
import { TalentProfile } from "@/types/talent",

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",

<<<<<<< HEAD
=======

<<<<<<< HEAD
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "./ContractForm";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface PaymentTermsFieldsProps {

interface PaymentTermsFieldsProps {}
  form: UseFormReturn<ContractFormValues>;
  talent: TalentProfile;
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void;
}

<<<<<<< HEAD
=======
import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MilestoneSuggestions} from "@/components/projects/milestones/MilestoneSuggestions";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "./ContractForm";



<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function PaymentTermsFields({
  form;
  talent;
  handleMilestonesGenerated

<<<<<<< HEAD
=======
export function PaymentTermsFields({ ;
  form;
  talent;
>>>>>>> merged-prs-20250907-203621
export function PaymentTermsFields({ 
  form,
  talent,
  handleMilestonesGenerated 
<<<<<<< HEAD
}: PaymentTermsFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}: PaymentTermsFieldsProps) {

export function PaymentTermsFields({ ;
  form;
  talent;
export function PaymentTermsFields({ 
  form,
  talent,
  handleMilestonesGenerated
}: PaymentTermsFieldsProps) {

  return (
    <>"
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField;
          control={form.control}"
>>>>>>> merged-prs-20250907-203621
          name="paymentTerms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Terms</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
<<<<<<< HEAD
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hourly">Hourly Rate</SelectItem>
                  <SelectItem value="fixed">Fixed Price</SelectItem>
=======
                  <SelectTrigger>"
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>"
                  <SelectItem value="hourly">Hourly Rate</SelectItem>"
                  <SelectItem value="fixed">Fixed Price</SelectItem>"
>>>>>>> merged-prs-20250907-203621
                  <SelectItem value="milestone">Milestone Payments</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;

import { Input } from "@/components/ui/input",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
<<<<<<< HEAD
=======
  SelectValue;
} from "@/components/ui/select",;
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions",;
import { TalentProfile } from "@/types/talent",;
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",;
import { ContractFormValues } from "./ContractForm",;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface PaymentTermsFieldsProps {;
  form: UseFormReturn<ContractFormValues>,;
  talent: TalentProfile,;
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void;
}
<<<<<<< HEAD
;
export function PaymentTermsFields({;
  form;
  talent;
  handleMilestonesGenerated;
}: PaymentTermsFieldsProps) {;
  return (;
    <>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}
          name="paymentTerms"
          render={({ field }) => (
=======

  return (

    <>;

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form && form.control}"
          name="paymentTerms"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Terms</FormLabel>;
              <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;

import { ContractFormValues } from './ContractForm';
interface PaymentTermsFieldsProps {}
  form: UseFormReturn < ContractFormValues>,
  talent: TalentProfile,
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void;
}
export /**;
 * PaymentTermsFields - Function description;
 */
function PaymentTermsFields() {}
  return (

      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;

        <FormField;
          control={form.control}"
          name="payment_terms";
          render={({ field }) => (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <FormItem>

              <FormLabel>Payment Terms
              <Select onValueChange={field.onChange} defaultValue={field.value}>

                <FormControl>

                  <SelectTrigger>
"
                    <SelectValue placeholder="Select payment terms" />"

                <SelectContent>
                  <SelectItem value="hourly">Hourly Rate""
                  <SelectItem value="fixed">Fixed Price""
                  <SelectItem value="milestone">Milestone Payments"
              <FormMessage />

</SelectContent>"
                  <SelectItem value="hourly">Hourly Rate</SelectItem>""
                  <SelectItem value="fixed">Fixed Price</SelectItem>""
                  <SelectItem value="milestone">Milestone Payments</SelectItem>"

                </SelectContent>
              </Select>
              <FormMessage />
</FormMessage>
            </FormItem>

  form: UseFormReturn<ContractFormValues>,;

        <FormField
          control={form && form.control}
          name="paymentAmount"

<FormItem>
              <FormLabel>Payment Terms</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>

                  <SelectItem value="milestone">Milestone Payments</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
<<<<<<< HEAD
            <FormItem>;
              <FormLabel > Payment Terms</FormLabel>;
              <Select onValueChange={field.on_change} default_value={field.value}>;
                <FormControl>;
                  <SelectTrigger>;
                    <SelectValue placeholder="Select payment terms" />;
                  </SelectTrigger>;
                </FormControl>;
                <SelectContent>;
                  <SelectItem value="hourly">Hourly Rate</SelectItem>;
                  <SelectItem value="fixed">Fixed Price</SelectItem>;
                  <SelectItem value="milestone">Milestone Payments</SelectItem>;
                </SelectContent>;
              </Select>;
              <FormMessage />;
        />;
=======

          )}

        />;

                <FormControl>;
                  <SelectTrigger>;
                    <SelectValue placeholder="Select payment terms" />;
                  </SelectTrigger>;
                </FormControl>;
                <SelectContent>;
                  <SelectItem value="hourly">Hourly Rate</SelectItem>;
                  <SelectItem value="fixed">Fixed Price</SelectItem>;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <FormField
          control={form && form.control}
          name="paymentAmount"

<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form",;
import { ;
  FormField,;
  FormItem, ;
  FormLabel, ;
  FormControl, ;
  FormDescription, ;
  FormMessage ;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import { ;
  Select,;
  SelectContent, ;
  SelectItem, ;
  SelectTrigger, ;
  SelectValue ;
} from "@/components/ui/select",;
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions",;
import { TalentProfile } from "@/types/talent",;
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",;
import { ContractFormValues } from "./ContractForm",;
;
interface PaymentTermsFieldsProps {;
  form:UseFormReturn<ContractFormValues>,;
  talent:TalentProfile,;
  handleMilestonesGenerated:(milestones:GeneratedMilestone[]) => void;
}
;
export function PaymentTermsFields({ ;
  form,;
  talent,;
  handleMilestonesGenerated ;
} PaymentTermsFieldsProps) {;
  return (;
    <>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField;
          control={form.control}
          name="paymentTerms";
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Terms</FormLabel>;
              <Select onValueChange={field.onChange} defaultValue={field.value}>;
                <FormControl>;
                  <SelectTrigger>;
                    <SelectValue placeholder="Select payment terms" />;
                  </SelectTrigger>;
                </FormControl>;
                <SelectContent>;
                  <SelectItem value="hourly">Hourly Rate</SelectItem>;
                  <SelectItem value="fixed">Fixed Price</SelectItem>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  <SelectItem value="milestone">Milestone Payments</SelectItem>;
                </SelectContent>;
              </Select>;
              <FormMessage />;
<<<<<<< HEAD
=======
            </FormItem>;
          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="paymentAmount";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Amount</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
=======
                <Input
                  placeholder={form && form.getValues("paymentTerms") === "hourly" ? "$X per hour" : "Total $X"} 
                  {...field} 
                />;
              </FormControl>;
              <FormDescription>;
                {form && form.getValues("paymentTerms") === "milestone" && ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD
        />;
      </div>;
=======

<<<<<<< HEAD
=======
        />;
      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Project Milestones */}

      {form && form.watch("paymentTerms") === "milestone" && (;
        <div className="pt-2">;
          <MilestoneSuggestions

<<<<<<< HEAD
      {form && form.watch("paymentTerms") === "milestone" && (;
        <div className="pt-2">;
          <MilestoneSuggestions
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          )}
        />
        <FormField
          control={form.control}
          name="paymentAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder={form.getValues("paymentTerms") === "hourly" ? "$X per hour" : "Total $X"}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {form.getValues("paymentTerms") === "milestone" &&
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* Project Milestones */}
      {form.watch("paymentTerms") === "milestone" && (
        <div className="pt-2">
          <MilestoneSuggestions
            projectName={form.getValues("projectName") |"Project"}
            scopeSummary={form.getValues("scopeSummary") |""}
            startDate={form.getValues("startDate") |new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" :
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            projectName={form.getValues("projectName") || "Project"}
            scopeSummary={form.getValues("scopeSummary") || ""}
            startDate={form.getValues("startDate") || new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" : 
<<<<<<< HEAD
=======

                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            projectName={form && form.getValues("projectName") || "Project"}
            scopeSummary={form && form.getValues("scopeSummary") || ""}
            startDate={form && form.getValues("startDate") || new Date()}
            endDate={form && form.getValues("endDate")}
            projectType={form && form.getValues("projectName").includes("AI") ? "AI/ML" : 
                        form && form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
<<<<<<< HEAD

=======
                <Input ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  placeholder={form.getValues("paymentTerms") === "hourly" ? "$X per hour" :"Total $X"} ;
                  {...field} ;
                />;
              </FormControl>;
              <FormDescription>;
                {form.getValues("paymentTerms") === "milestone" && ;
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>;          )}
        />;
      </div>;
;
      {/* Project Milestones */}
      {form.watch("paymentTerms") === "milestone" && (;
        <div className="pt-2">;
          <MilestoneSuggestions;
            projectName={form.getValues("projectName") || "Project"}
            scopeSummary={form.getValues("scopeSummary") || ""}
            startDate={form.getValues("startDate") || new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" :;
                        form.getValues("projectName").includes("Web") ? "Web Development" :"Other"}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            onMilestonesGenerated={handleMilestonesGenerated}

        </div>;
      )}
<<<<<<< HEAD

            </FormItem>)}
        />;
        <FormField;
          control={form.control}"
          name="payment_amount";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Payment Amount</FormLabel>;
              <FormControl>;
                <Input;"
                  placeholder={form.get_values ("payment_terms") === "hourly" ? "$X per hour" : "Total $X"}
                  {...field}
                />;
              </FormControl>;
              <FormDescription>;"
                {form.get_values ("payment_terms") === "milestone" &&;"
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>)}
        />;
      </div>;
      {/* Project Milestones */}"
      {form.watch ("payment_terms") === "milestone" && ("
        <div className="pt - 2">;
          <MilestoneSuggestions;"
            project_name={form.get_values ("project_name") || "Project"}"
            scope_summary={form.get_values ("scope_summary") || ""}"
            start_date={form.get_values ("start_date") || new Date ()}"
            end_date={form.get_values ("end_date")}"
            project_type={form.get_values ("project_name").includes ("AI") ? "AI / ML" :;"
                        form.get_values ("project_name").includes ("Web") ? "Web Development" : "Other"}
            onMilestonesGenerated={handleMilestonesGenerated}
          />;
        </div>)}
    </>);
}

</>;
=======
    </>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </FormItem>)}
        />;
        <FormField;
          control={form.control}
          name="payment_amount";
          render={({ field }) => (
            <FormItem>;
              <FormLabel > Payment Amount</FormLabel>;
              <FormControl>;
                <Input;
                  placeholder={form.get_values ("payment_terms") === "hourly" ? "$X per hour" : "Total $X"}
                  {...field}
                />;
              </FormControl>;
              <FormDescription>;
                {form.get_values ("payment_terms") === "milestone" &&;
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>)}
        />;
      </div>;
      {/* Project Milestones */}
      {form.watch ("payment_terms") === "milestone" && (
        <div className="pt - 2">;
          <MilestoneSuggestions;
            project_name={form.get_values ("project_name") || "Project"}
            scope_summary={form.get_values ("scope_summary") || ""}
            start_date={form.get_values ("start_date") || new Date ()}
            end_date={form.get_values ("end_date")}
            project_type={form.get_values ("project_name").includes ("AI") ? "AI / ML" :;
                        form.get_values ("project_name").includes ("Web") ? "Web Development" : "Other"}
            onMilestonesGenerated={handleMilestonesGenerated}
          />;
        </div>)}
    </>);
}
<<<<<<< HEAD
            )}
          name="payment_amount";"

              <FormLabel > Payment Amount;

                  placeholder={form.get_values ("payment_terms") === "hourly" ? "$X per hour" : "Total $X"}"

        <div className="pt - 2">;"
            project_name={form.get_values ("project_name") || "Project"}""
            scope_summary={form.get_values ("scope_summary") || ""}""
            start_date={form.get_values ("start_date") || new Date ()}""
            end_date={form.get_values ("end_date")}""
            project_type={form.get_values ("project_name").includes ("AI") ? "AI / ML" :;""
                        form.get_values ("project_name").includes ("Web") ? "Web Development" : "Other"}"

        </div>)}
    </>);
  ),;}
  // TODO: Implement
FormMessage import {
  // TODO: Implement
SelectValue interface PaymentTermsFieldsProps {
  // TODO: Implement
  form: UseFormReturn<ContractFormValues>;
  return (<> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField control= {"
</div>)"
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select payment terms" />   <SelectContent> <SelectItem value="hourly" >Hourly Rate <SelectItem value="fixed" >Fixed Price <SelectItem value="milestone" >Milestone Payments   <FormMessage /> )"
}/> <FormField <FormItem> <FormLabel>Payment Amount <FormControl> <Input  <FormMessage /> ) 

}/> </div> /> </div>) 
}</>) 
}"
                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}"
          />
    </>
  )
pr-12325
}
=======
<<<<<<< HEAD
  ),;}
 import {
  FormField;
FormItem;
FormLabel;
FormControl;
FormDescription;
FormMessage import {
  Select;
SelectContent;
SelectItem;
SelectTrigger;
SelectValue interface PaymentTermsFieldsProps {
  form: UseFormReturn<ContractFormValues>;
talent: TalentProfile;
handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void 
}export function PaymentTermsFields ({
  form;
talent;
handleMilestonesGenerated 
}: PaymentTermsFieldsProps) {
  return (<> <div className="grid grid-cols-1 md:grid-cols-2 gap-6" > <FormField control= {
  form.control 
}name="paymentTerms" render= {
  ({
  field 
}) => (field.onChange 
}defaultValue= {
  field.value 
}> <FormControl> <SelectTrigger> <SelectValue placeholder="Select payment terms" /> </SelectTrigger> </FormControl> <SelectContent> <SelectItem value="hourly" >Hourly Rate</SelectItem> <SelectItem value="fixed" >Fixed Price</SelectItem> <SelectItem value="milestone" >Milestone Payments</SelectItem> </SelectContent> </Select> <FormMessage /> </FormItem>) 
}/> <FormField <FormItem> <FormLabel>Payment Amount</FormLabel> <FormControl> <Input </FormDescription> <FormMessage /> </FormItem>) 
}/> </div> /> </div>) 
}</>) 
}
                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
            onMilestonesGenerated={handleMilestonesGenerated}
          />
        </div>
      )}
    </>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
