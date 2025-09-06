<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx


<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import { UseFormReturn } from "react-hook-form",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { UseFormReturn } from "react-hook-form",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

import { Input } from "@/components/ui/input",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
=======
import { Input } from "@/components/ui/input",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "./ContractForm";
=======
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface PaymentTermsFieldsProps {

  form: UseFormReturn<ContractFormValues>
  talent: TalentProfile

  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void
}
<<<<<<< HEAD
<<<<<<< HEAD

  handleMilestonesGenerated 
=======

import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MilestoneSuggestions} from "@/components/projects/milestones/MilestoneSuggestions";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "./ContractForm";
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
export function PaymentTermsFields({
  form;
  talent;
  handleMilestonesGenerated
=======

<<<<<<< HEAD
export function PaymentTermsFields({ ;
  form;
  talent;
=======
export function PaymentTermsFields({ 
  form,
  talent,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  handleMilestonesGenerated 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface PaymentTermsFieldsProps {;
  form: UseFormReturn<ContractFormValues>,;
  talent: TalentProfile,;
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void;
}
<<<<<<< HEAD
export function PaymentTermsFields(): any ({ ;
  form;
  talent;
  handleMilestonesGenerated ;
}: PaymentTermsFieldsProps) {;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          )}

        />;


        <FormField
          control={form && form.control}
          name="paymentAmount"

========
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
        <FormField
          control={form && form.control}
          name="paymentAmount"
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Amount</FormLabel>;
              <FormControl>;
<<<<<<< HEAD
                <Input
                  placeholder={form && form.getValues("paymentTerms") === "hourly" ? "$X per hour" : "Total $X"} 
                  {...field} 
                />;
              </FormControl>;
              <FormDescription>;
                {form && form.getValues("paymentTerms") === "milestone" && ;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx

        />;
      </div>;


========
        />;
      </div>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx
      {/* Project Milestones */}
      {form && form.watch("paymentTerms") === "milestone" && (;
        <div className="pt-2">;
          <MilestoneSuggestions
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
            projectName={form.getValues("projectName") |"Project"}
            scopeSummary={form.getValues("scopeSummary") |""}
            startDate={form.getValues("startDate") |new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" :
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            projectName={form.getValues("projectName") || "Project"}
            scopeSummary={form.getValues("scopeSummary") || ""}
            startDate={form.getValues("startDate") || new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" : 
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx
            projectName={form && form.getValues("projectName") || "Project"}
            scopeSummary={form && form.getValues("scopeSummary") || ""}
            startDate={form && form.getValues("startDate") || new Date()}
            endDate={form && form.getValues("endDate")}
            projectType={form && form.getValues("projectName").includes("AI") ? "AI/ML" : 
                        form && form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onMilestonesGenerated={handleMilestonesGenerated}
          />;
        </div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx
    </>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/components/PaymentTermsFields.tsx
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
            onMilestonesGenerated={handleMilestonesGenerated}
          />
        </div>
      )}
    </>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
