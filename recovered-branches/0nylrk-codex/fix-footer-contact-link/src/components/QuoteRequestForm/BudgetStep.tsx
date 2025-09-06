






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


interface BudgetStepProps {

  formData: QuoteFormData

  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function BudgetStep({ formData, updateFormData }: BudgetStepProps) {

  const handleBudgetTypeSelect = (type: "fixed" | "hourly" | "range") => {
    if (type === "range" && !formData.budget.maxAmount) {
      updateFormData({

        budget: {;
          ...formData.budget;
          type,
          maxAmount: formData.budget.amount + 5000
        budget: {
          ...formData.budget;
          type
          maxAmount: formData.budget.amount + 5000
          ...formData.budget,
          type,
          max_amount: form_data.budget.amount + 5000;

        }
      });
    } else {
      updateFormData ({
        budget: {

import {QuoteFormData} from "@/types/quotes";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
interface BudgetStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

export function BudgetStep(): any ({ formData, updateFormData }: BudgetStepProps) {;
  const handleBudgetTypeSelect = (type: "fixed" | "hourly" | "range") => {;
    if (type === "range" && !formData && formData.budget.maxAmount) {;
      updateFormData({;
        budget: {;
          ...formData && formData.budget;
          type,;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

        }
      })
    } else {
      updateFormData({


          maxAmount: formData && formData.budget.amount + 5000;


        budget: {


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
      });
    } else {;
      updateFormData({;
        budget: {;
          ...formData && formData.budget,;
          type;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      });
    }



  },




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: 'USD'
      maximumFractionDigits: 0
    }).format(value)

  }
  },


  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What's your budget?</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "fixed"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => handleBudgetTypeSelect("fixed")}
            >
              <h4 className="font-medium text-white">Fixed Budget</h4>
              <p className="text-sm text-zion-slate-light">I have a set amount</p>
            </div>







              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "hourly"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => handleBudgetTypeSelect("hourly")}
            >
              <h4 className="font-medium text-white">Hourly Rate</h4>
              <p className="text-sm text-zion-slate-light">Pay per hour of work</p>
            </div>







              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "range"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => handleBudgetTypeSelect("range")}
            >
              <h4 className="font-medium text-white">Budget Range</h4>
              <p className="text-sm text-zion-slate-light">I have a min and max</p>
            </div>
          </div>

          





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

          {formData.budget.type === "fixed" && (
            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>

              <Slider
                defaultValue={[formData && formData.budget.amount]}
                max={50000}
                step={500}
                onValueChange={(value) => updateFormData({;
                  budget: { ...formData && formData.budget, amount: value[0] }
                })}
                className="py-4";
              />;
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                <span>$0</span>;
                <span>$50,000+</span>;
              </div>;
            </div>;
          )}


          {formData && formData.budget.type === "hourly" && (;
            <div className="mt-6">;
              <Label className="text-zion-slate-light mb-4 block">;
                Hourly Rate: {formatCurrency(formData && formData.budget.amount)}/hour;
              </Label>;

              <Slider
                defaultValue={[formData && formData.budget.amount]}
                max={500}
                step={5}
                onValueChange={(value) => updateFormData({;
                  budget: { ...formData && formData.budget, amount: value[0] }
                })}
                className="py-4";
              />;
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                <span>$0/hour</span>;
                <span>$500/hour</span>;
              </div>;
            </div>;
          )}


          {formData && formData.budget.type === "range" && (;
            <div className="mt-6 space-y-8">;
              <div>;
                <Label className="text-zion-slate-light mb-4 block">;
                  Minimum Budget: {formatCurrency(formData && formData.budget.amount)}
                </Label>;

                <Slider
                  defaultValue={[formData && formData.budget.amount]}
                  max={50000}
                  step={500}

                  onValueChange={(value) => {
                    const newAmount = value[0];
                    const maxAmount = formData.budget.maxAmount |50000;
                    updateFormData({
                      budget: {
                        ...formData.budget
                        amount: newAmount

                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount
                  onValueChange={(value) => {;
                    const newAmount = value[0],;
                    const maxAmount = formData.budget.maxAmount || 50000,;

                    updateFormData({;
                      budget: { ;
                        ...formData && formData.budget, ;
                        amount: newAmount,;
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount;





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


                      }
                    });
                  }}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">
                  <span>$0</span>
                  <span>$50,000</span>
                </div>
              </div>
              <div>
                <Label className="text-zion-slate-light mb-4 block">

                  Maximum Budget: {formatCurrency(formData.budget.maxAmount |0)}
                </Label>
                <Slider
                  defaultValue={[formData.budget.maxAmount |formData.budget.amount + 5000]}
                  Maximum Budget: {formatCurrency(formData.budget.maxAmount || 0)}
                </Label>;
                <Slider;
                  defaultValue={[formData.budget.maxAmount || formData.budget.amount + 5000]}

                  min={formData.budget.amount}

                  max={100000}
                  step={500}
                  onValueChange={(value) => updateFormData({;
                    budget: { ...formData && formData.budget, maxAmount: value[0] }
                  })}
                  className="py-4";
                />;
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                  <span>{formatCurrency(formData && formData.budget.amount)}</span>;
                  <span>$100,000+</span>;
                </div>;
              </div>;
            </div>;
          )}
        </div>;
      </div>;
    </div>;
  );

}