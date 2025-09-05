
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
            <FormItem>
              <FormLabel>Payment Terms</FormLabel>
              <Select onValueChange={_field.onChange} defaultValue={_field.value}>
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
          )}
        />
        
        <FormField
          control={_form.control}
          name="paymentAmount"
          render={_(_{ field}) => (
            <FormItem>
              <FormLabel>Payment Amount</FormLabel>
              <FormControl>
                <Input 
                  placeholder={_form.getValues("paymentTerms") === "hourly" ? "$X per hour" : "Total $X"} 
                  {_...field} 
                />
              </FormControl>
              <FormDescription>
                {_form.getValues("paymentTerms") === "milestone" && 
                  "You can define specific milestone amounts in the contract text or use AI to suggest milestones"}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

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
          />
        </div>
      )}
    </>
  );
}
