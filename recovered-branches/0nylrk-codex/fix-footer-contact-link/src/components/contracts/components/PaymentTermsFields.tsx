
<<<<<<< HEAD
import { UseFormReturn } from "react-hook-form";
import { 
  FormField;
  FormItem;
  FormLabel;
  FormControl;
  FormDescription;
  FormMessage 
} from "@/components/ui/form",
import { Input } from "@/components/ui/input";
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
interface PaymentTermsFieldsProps {

  form: UseFormReturn<ContractFormValues>
  talent: TalentProfile

  handleMilestonesGenerated: (milestones: GeneratedMilestone[]) => void
}
export function PaymentTermsFields({
  form;
  talent;
  handleMilestonesGenerated
}: PaymentTermsFieldsProps) {
=======
import {UseFormReturn} from "react-hook-form";
import {FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MilestoneSuggestions} from "@/components/projects/milestones/MilestoneSuggestions";
import {TalentProfile} from "@/types/talent";
import {GeneratedMilestone} from "@/hooks/useMilestoneGenerator";
import {ContractFormValues} from "./ContractForm";
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
<<<<<<< HEAD
        />
=======
        />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <FormField
          control={form && form.control}
          name="paymentAmount"
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>;
              <FormMessage />;
            </FormItem>;
          )}
<<<<<<< HEAD
        />
      </div>
=======
        />;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Project Milestones */}
      {form && form.watch("paymentTerms") === "milestone" && (;
        <div className="pt-2">;
          <MilestoneSuggestions
<<<<<<< HEAD
            projectName={form.getValues("projectName") |"Project"}
            scopeSummary={form.getValues("scopeSummary") |""}
            startDate={form.getValues("startDate") |new Date()}
            endDate={form.getValues("endDate")}
            projectType={form.getValues("projectName").includes("AI") ? "AI/ML" :
                        form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
=======
            projectName={form && form.getValues("projectName") || "Project"}
            scopeSummary={form && form.getValues("scopeSummary") || ""}
            startDate={form && form.getValues("startDate") || new Date()}
            endDate={form && form.getValues("endDate")}
            projectType={form && form.getValues("projectName").includes("AI") ? "AI/ML" : 
                        form && form.getValues("projectName").includes("Web") ? "Web Development" : "Other"}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            onMilestonesGenerated={handleMilestonesGenerated}
          />;
        </div>;
      )}
<<<<<<< HEAD
    </>
  )
}
=======
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
