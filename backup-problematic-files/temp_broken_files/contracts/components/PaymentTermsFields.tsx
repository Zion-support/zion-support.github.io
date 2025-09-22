
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
          render={({ field }) => (;
            <FormItem>;
              <FormLabel>Payment Amount</FormLabel>;
              <FormControl>;

            onMilestonesGenerated={handleMilestonesGenerated}
          />;
        </div>;
      )}
    </>;
