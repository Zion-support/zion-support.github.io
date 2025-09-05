
<<<<<<< HEAD
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form",
=======
import { UseFormReturn } from &quot;react-hook-form&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
<<<<<<< HEAD
} from "@/components/ui/form",
import { Input } from "@/components/ui/input",
=======
} from &quot;@/components/ui/form&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
<<<<<<< HEAD
} from "@/components/ui/select",
import { MilestoneSuggestions } from "@/components/projects/milestones/MilestoneSuggestions",
import { TalentProfile } from "@/types/talent",
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator",
import { ContractFormValues } from "./ContractForm",
=======
} from &quot;@/components/ui/select&quot;;
import { MilestoneSuggestions } from &quot;@/components/projects/milestones/MilestoneSuggestions&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { GeneratedMilestone } from &quot;@/hooks/useMilestoneGenerator&quot;;
import { ContractFormValues } from &quot;./ContractForm&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PaymentTermsFieldsProps {
  form: UseFormReturn<ContractFormValues>,
  talent: TalentProfile,
  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void
}

export function PaymentTermsFields({ 
  form,
  talent,
  handleMilestonesGenerated 
}: PaymentTermsFieldsProps) {
  return (
    <>
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
        <FormField
          control={form.control}
          name=&quot;paymentTerms&quot;
          render={({ field }) => (
=======
import {_FormField, _FormItem, _FormLabel, _FormControl, _FormDescription, _FormMessage} from "@/components/ui/form";
import {_Select, _SelectContent, _SelectItem, _SelectTrigger, _SelectValue} from "@/components/ui/select";

interface PaymentTermsFieldsProps {_form: UseFormReturn<ContractFormValues>;
  talent: TalentProfile;
  handleMilestonesGenerated: (_milestones: GeneratedMilestone[]) => void;}

export function PaymentTermsFields(_{_form, _talent, _handleMilestonesGenerated}: PaymentTermsFieldsProps) {_return (_<>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="paymentTerms"
          render={_({ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem>
              <FormLabel>Payment Terms</FormLabel>
              <Select onValueChange={_field.onChange} defaultValue={_field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder=&quot;Select payment terms&quot; />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value=&quot;hourly&quot;>Hourly Rate</SelectItem>
                  <SelectItem value=&quot;fixed&quot;>Fixed Price</SelectItem>
                  <SelectItem value=&quot;milestone&quot;>Milestone Payments</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
<<<<<<< HEAD
          control={form.control}
          name=&quot;paymentAmount&quot;
          render={({ field }) => (
=======
          control={_form.control}
          name="paymentAmount"
          render={_(_{ field}) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <FormItem>
              <FormLabel>Payment Amount</FormLabel>
              <FormControl>
                <Input 
<<<<<<< HEAD
                  placeholder={form.getValues(&quot;paymentTerms&quot;) === &quot;hourly&quot; ? &quot;$X per hour&quot; : &quot;Total $X&quot;} 
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {form.getValues(&quot;paymentTerms&quot;) === &quot;milestone&quot; && 
                  &quot;You can define specific milestone amounts in the contract text or use AI to suggest milestones&quot;}
=======
                  placeholder={_form.getValues("paymentTerms") === "hourly" ? "$X per hour" : "Total $X"} 
                  {_...field} 
                />
              </FormControl>
              <FormDescription>
                {_form.getValues("paymentTerms") === "milestone" && 
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

<<<<<<< HEAD
      {/* Project Milestones */}
      {form.watch(&quot;paymentTerms&quot;) === &quot;milestone&quot; && (
        <div className=&quot;pt-2&quot;>
          <MilestoneSuggestions
            projectName={form.getValues(&quot;projectName&quot;) || &quot;Project&quot;}
            scopeSummary={form.getValues(&quot;scopeSummary&quot;) || "&quot;}
            startDate={form.getValues(&quot;startDate&quot;) || new Date()}
            endDate={form.getValues(&quot;endDate&quot;)}
            projectType={form.getValues(&quot;projectName&quot;).includes(&quot;AI&quot;) ? &quot;AI/ML&quot; : 
                        form.getValues(&quot;projectName&quot;).includes(&quot;Web&quot;) ? &quot;Web Development&quot; : &quot;Other"}
            onMilestonesGenerated={handleMilestonesGenerated}
=======
      {_/* Project Milestones */}
      {_form.watch("paymentTerms") === "milestone" && (
        <div className="pt-2">
          <MilestoneSuggestions
            projectName={form.getValues("projectName") || "Project"}
            scopeSummary={_form.getValues("scopeSummary") || ""}
            startDate={_form.getValues("startDate") || new Date()}
            endDate={_form.getValues("endDate")}
            projectType={_form.getValues("projectName").includes("AI") ? "AI/ML" : 
                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
            onMilestonesGenerated={_handleMilestonesGenerated}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      )}
    </>
  )
}
