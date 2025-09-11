



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
          maxAmount: formData && formData.budget.amount + 5000;
=======

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
=======
  };
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


            <div 


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


            <div 


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
          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {formData.budget.type === "fixed" && (
            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>
=======
  };

  const formatCurrency = (value: number) => {;
    return new Intl && Intl.NumberFormat('en-US', {;
      style: 'currency',;
      currency: 'USD',;
      maximumFractionDigits: 0;
    }).format(value);
  };

  return (
    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">What's your budget?</h3>;

        <div className="space-y-4">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
            <div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.budget.type === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => handleBudgetTypeSelect("fixed")}
            >;
              <h4 className="font-medium text-white">Fixed Budget</h4>;
              <p className="text-sm text-zion-slate-light">I have a set amount</p>;
            </div>;

            <div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.budget.type === "hourly" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => handleBudgetTypeSelect("hourly")}
            >;
              <h4 className="font-medium text-white">Hourly Rate</h4>;
              <p className="text-sm text-zion-slate-light">Pay per hour of work</p>;
            </div>;

            <div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.budget.type === "range" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}
              onClick={() => handleBudgetTypeSelect("range")}
            >;
              <h4 className="font-medium text-white">Budget Range</h4>;
              <p className="text-sm text-zion-slate-light">I have a min and max</p>;
            </div>;
          </div>;

          {formData && formData.budget.type === "fixed" && (;
            <div className="mt-6">;
              <Label className="text-zion-slate-light mb-4 block">;
                Fixed Budget: {formatCurrency(formData && formData.budget.amount)}
              </Label>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
                  className="py-4";
                />;
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                  <span>$0</span>;
                  <span>$50,000</span>;
                </div>;
              </div>;

              <div>;
                <Label className="text-zion-slate-light mb-4 block">;
                  Maximum Budget: {formatCurrency(formData && formData.budget.maxAmount || 0)}
                </Label>;
                <Slider
                  defaultValue={[formData && formData.budget.maxAmount || formData && formData.budget.amount + 5000]}
                  min={formData && formData.budget.amount}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======
          ...form_data.budget,
          type;
        }
      });
    }
  }
;
  const format_currency = (value: number) =>: any {
    return new Intl.NumberFormat ('en - US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0;
    }).format (value);
  }
;
  return (
    <div className="space - y-6">;
      <div>;
        <h3 className="text - xl font - semibold text - white mb - 4">What's your budget?</h3>;
        <div className="space - y-4">;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
            <div;
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.budget.type === "fixed";
                  ? "bg - zion - purple / 20 border - zion - purple";
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
              }`}
              on_click={() => handleBudgetTypeSelect ("fixed")}
            >;
              <h4 className="font - medium text - white">Fixed Budget</h4>;
              <p className="text - sm text - zion - slate - light">I have a set amount</p>;
            </div>;
            <div;
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.budget.type === "hourly";
                  ? "bg - zion - purple / 20 border - zion - purple";
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
              }`}
              on_click={() => handleBudgetTypeSelect ("hourly")}
            >;
              <h4 className="font - medium text - white">Hourly Rate</h4>;
              <p className="text - sm text - zion - slate - light">Pay per hour of work</p>;
            </div>;
            <div;
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.budget.type === "range";
                  ? "bg - zion - purple / 20 border - zion - purple";
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
              }`}
              on_click={() => handleBudgetTypeSelect ("range")}
            >;
              <h4 className="font - medium text - white">Budget Range</h4>;
              <p className="text - sm text - zion - slate - light">I have a min and max</p>;
            </div>;
          </div>;
          {form_data.budget.type === "fixed" && (
            <div className="mt - 6">;
              <Label className="text - zion - slate - light mb - 4 block">;
                Fixed Budget: {format_currency (form_data.budget.amount)}
              </Label>;
              <Slider;
                default_value={[form_data.budget.amount]}
                max={50000}
                step={500}
                onValueChange={(value) => updateFormData ({
                  budget: { ...form_data.budget, amount: value[0] }
                })}
                className="py - 4";
              />;
              <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;
                <span>$0</span>;
                <span>$50, 000+</span>;
              </div>;
            </div>)}
          {form_data.budget.type === "hourly" && (
            <div className="mt - 6">;
              <Label className="text - zion - slate - light mb - 4 block">;
                Hourly Rate: {format_currency (form_data.budget.amount)}/hour;
              </Label>;
              <Slider;
                default_value={[form_data.budget.amount]}
                max={500}
                step={5}
                onValueChange={(value) => updateFormData ({
                  budget: { ...form_data.budget, amount: value[0] }
                })}
                className="py - 4";
              />;
              <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;
                <span>$0 / hour</span>;
                <span>$500 / hour</span>;
              </div>;
            </div>)}
          {form_data.budget.type === "range" && (
            <div className="mt - 6 space - y-8">;
              <div>;
                <Label className="text - zion - slate - light mb - 4 block">;
                  Minimum Budget: {format_currency (form_data.budget.amount)}
                </Label>;
                <Slider;
                  default_value={[form_data.budget.amount]}
                  max={50000}
                  step={500}
                  onValueChange={(value) => {
                    const new_amount = value[0];
                    const max_amount = form_data.budget.max_amount || 50000;
;
                    updateFormData ({
                      budget: {
                        ...form_data.budget,
                        amount: new_amount,
                        max_amount: new_amount >= max_amount ? new_amount + 5000 : max_amount;
                      }
                    });
                  }}
                  className="py - 4";
                />;
                <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;
                  <span>$0</span>;
                  <span>$50, 000</span>;
                </div>;
              </div>;
              <div>;
                <Label className="text - zion - slate - light mb - 4 block">;
                  Maximum Budget: {format_currency (form_data.budget.max_amount || 0)}
                </Label>;
                <Slider;
                  default_value={[form_data.budget.max_amount || form_data.budget.amount + 5000]}
                  min={form_data.budget.amount}
                  max={100000}
                  step={500}
                  onValueChange={(value) => updateFormData ({
                    budget: { ...form_data.budget, max_amount: value[0] }
                  })}
                  className="py - 4";
                />;
                <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;
                  <span>{format_currency (form_data.budget.amount)}</span>;
                  <span>$100, 000+</span>;
                </div>;
              </div>;
            </div>)}
        </div>;
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}