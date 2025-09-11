
<<<<<<< HEAD
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MilestoneSuggestions} from "@/components/projects/milestones/MilestoneSuggestions";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "./ContractForm";
<<<<<<< HEAD
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form",

import { UseFormReturn } from "react-hook-form",
import { UseFormReturn } from "react-hook-form",
=======

=======
import { UseFormReturn } from "react-hook-form",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
import { UseFormReturn } from "react-hook-form",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { 
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage 
} from "@/components/ui/form",
<<<<<<< HEAD

<<<<<<< HEAD
import { Input } from "@/components/ui/input",


import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input",
=======

import { Input } from "@/components/ui/input",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { 
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue 
} from "@/components/ui/select",
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "./ContractForm";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface PaymentTermsFieldsProps {

  form: UseFormReturn<ContractFormValues>
  talent: TalentProfile

  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void
}
<<<<<<< HEAD

import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MilestoneSuggestions} from "@/components/projects/milestones/MilestoneSuggestions";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "./ContractForm";



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function PaymentTermsFields({
  form;
  talent;
  handleMilestonesGenerated

export function PaymentTermsFields({ ;
  form;
  talent;
export function PaymentTermsFields({ 
  form,
  talent,
  handleMilestonesGenerated 
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: PaymentTermsFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="paymentTerms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Terms</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hourly">Hourly Rate</SelectItem>
                  <SelectItem value="fixed">Fixed Price</SelectItem>
                  <SelectItem value="milestone">Milestone Payments</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { UseFormReturn } from "react-hook-form",;
import {;
  FormField,;
  FormItem,;
  FormLabel,;
  FormControl,;
  FormDescription,;
  FormMessage;
} from "@/components/ui/form",;
import { Input } from "@/components/ui/input",;
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue;
} from "@/components/ui/select",;
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions",;
import { TalentProfile } from "@/types/talent",;
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",;
import { ContractFormValues } from "./ContractForm",;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface PaymentTermsFieldsProps {;
  form: UseFormReturn<ContractFormValues>,;
  talent: TalentProfile,;
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void;
}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function PaymentTermsFields(): any ({ ;
  form;
  talent;
  handleMilestonesGenerated ;
}: PaymentTermsFieldsProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
        <FormField
          control={form && form.control}
          name="paymentTerms"
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Terms</FormLabel>;
              <Select onValueChange={field && field.onChange} defaultValue={field && field.value}>;
=======
import { UseFormReturn } from './react - hook - form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components / ui / form';
import { Input } from '@/components / ui / input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { MilestoneSuggestions } from '@/components / projects / milestones / MilestoneSuggestions';
import { TalentProfile } from '@/types / talent';
import { GeneratedMilestone } from '@/hooks / useMilestoneGenerator';
import { ContractFormValues } from './ContractForm';
interface PaymentTermsFieldsProps {
  form: UseFormReturn < ContractFormValues>,
  talent: TalentProfile,
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void;
}
export /**
 * PaymentTermsFields - Function description
 */
function PaymentTermsFields() {
  return (
    <>;
      <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
        <FormField;
          control={form.control}
          name="payment_terms";
          render={({ field }) => (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <FormItem>
              <FormLabel>Payment Terms</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hourly">Hourly Rate</SelectItem>
                  <SelectItem value="fixed">Fixed Price</SelectItem>
                  <SelectItem value="milestone">Milestone Payments</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          )}

        />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <FormField
          control={form && form.control}
          name="paymentAmount"

<<<<<<< HEAD
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
                  <SelectItem value="milestone">Milestone Payments</SelectItem>;
                </SelectContent>;
              </Select>;
              <FormMessage />;
            </FormItem>;
          )}
        />;
        ;
        <FormField;
          control={form.control}
          name="paymentAmount";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Amount</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Input
                  placeholder={form && form.getValues("paymentTerms") === "hourly" ? "$X per hour" : "Total $X"} 
                  {...field} 
                />;
              </FormControl>;
              <FormDescription>;
                {form && form.getValues("paymentTerms") === "milestone" && ;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
      </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
      </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Project Milestones */}
      {form && form.watch("paymentTerms") === "milestone" && (;
        <div className="pt-2">;
          <MilestoneSuggestions
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            projectName={form.getValues("projectName") |"Project"}
            scopeSummary={form.getValues("scopeSummary") |""}
            startDate={form.getValues("startDate") |new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" :
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            projectName={form.getValues("projectName") || "Project"}
            scopeSummary={form.getValues("scopeSummary") || ""}
            startDate={form.getValues("startDate") || new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" : 
<<<<<<< HEAD
<<<<<<< HEAD
=======


                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            projectName={form && form.getValues("projectName") || "Project"}
            scopeSummary={form && form.getValues("scopeSummary") || ""}
            startDate={form && form.getValues("startDate") || new Date()}
            endDate={form && form.getValues("endDate")}
            projectType={form && form.getValues("projectName").includes("AI") ? "AI/ML" : 
                        form && form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
<<<<<<< HEAD
                <Input ;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onMilestonesGenerated={handleMilestonesGenerated}
          />;
        </div>;
      )}
<<<<<<< HEAD
    </>;
=======

    </>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
