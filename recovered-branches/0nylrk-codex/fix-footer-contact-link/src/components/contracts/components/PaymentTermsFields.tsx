





import { UseFormReturn } from "react-hook-form",

import { 
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage 
} from "@/components/ui/form",

import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input",

import { 
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue 
} from "@/components/ui/select",
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions",
import { TalentProfile } from "@/types/talent",

import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator";
import { ContractFormValues } from "./ContractForm";
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

interface PaymentTermsFieldsProps {

  form: UseFormReturn<ContractFormValues>
  talent: TalentProfile

  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void
}

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

interface PaymentTermsFieldsProps {;
  form: UseFormReturn<ContractFormValues>,;
  talent: TalentProfile,;
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void;
}

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




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


          )}

        />;


        <FormField
          control={form && form.control}
          name="paymentAmount"

          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Amount</FormLabel>;
              <FormControl>;
                <Input
                  placeholder={form && form.getValues("paymentTerms") === "hourly" ? "$X per hour" : "Total $X"} 
                  {...field} 
                />;
              </FormControl>;
              <FormDescription>;
                {form && form.getValues("paymentTerms") === "milestone" && ;

                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>;
          )}

        />;
      </div>;


      {/* Project Milestones */}
      {form && form.watch("paymentTerms") === "milestone" && (;
        <div className="pt-2">;
          <MilestoneSuggestions

            projectName={form.getValues("projectName") |"Project"}
            scopeSummary={form.getValues("scopeSummary") |""}
            startDate={form.getValues("startDate") |new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" :
            projectName={form.getValues("projectName") || "Project"}
            scopeSummary={form.getValues("scopeSummary") || ""}
            startDate={form.getValues("startDate") || new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" : 

                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}

            onMilestonesGenerated={handleMilestonesGenerated}
          />;
        </div>;
      )}

    </>;
  );
}


