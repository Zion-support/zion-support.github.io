<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {QuoteFormData} from "@/types/quotes";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {QuoteFormData} from "@/types/quotes";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { QuoteFormData } from "@/types/quotes",
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label",
<<<<<<< HEAD
import { Slider } from "@/components/ui/slider",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface BudgetStepProps {

  formData: QuoteFormData

  updateFormData: (data: Partial<QuoteFormData>) => void
}
export function BudgetStep({ formData, updateFormData }: BudgetStepProps) {

  const handleBudgetTypeSelect = (type: "fixed" | "hourly" | "range") => {
    if (type === "range" && !formData.budget.maxAmount) {
      updateFormData({
import { QuoteFormData } from '@/types / quotes';
import { Label } from '@/components / ui / label';
import { Slider } from '@/components / ui / slider';
interface BudgetStepProps {
  form_data: QuoteFormData,
  updateFormData: (data: Partial < QuoteFormData>) => void;
}
export /**
 * BudgetStep - Function description
 */
function BudgetStep() {
  const handleBudgetTypeSelect = (type: "fixed" | "hourly" | "range") =>: any {
    // Check condition
if ( {) {
  $2
}
      updateFormData ({
        budget: {
          ...form_data.budget;
          type,
          max_amount: form_data.budget.amount + 5000;
        }
      })
    } else {
      updateFormData({
        budget: {
import {QuoteFormData} from "@/types/quotes";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        }
=======
import { Slider } from "@/components/ui/slider",        }
=======
import { Slider } from "@/components/ui/slider",        }
      })
} else {
      updateFormData({
        budget: {        }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      })
    } else {
      updateFormData({
        budget: {        }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      })
    } else {
      updateFormData({
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        budget: {
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      });
    } else {;
      updateFormData({;
        budget: {;
          ...formData && formData.budget,;
          type;
        }
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
  },
  };
  },  },
  };
  },
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
  };
  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: 'USD'
      maximumFractionDigits: 0
<<<<<<< HEAD
    }).format(value)
<<<<<<< HEAD

  },

<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
=======

  const formatCurrency = (value: number) => {}
    return new Intl.NumberFormat('en-US', {'
      style: 'currency''
      currency: 'USD'
      maximumFractionDigits: 0;
    }).format(value)

  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="space-y-6">
      <div>'"
        <h3 className="text-xl font-semibold text-white mb-4">What's your budget?</h3>"
        <div className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div;
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${"
                formData.budget.type === "fixed""
                  ? "bg-zion-purple/20 border-zion-purple""
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"`
              }`}"
              onClick={() => handleBudgetTypeSelect("fixed")}
            >"
              <h4 className="font-medium text-white">Fixed Budget</h4>"
              <p className="text-sm text-zion-slate-light">I have a set amount</p>
            </div>
<div
            <div
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "hourly"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}

              onClick={() => handleBudgetTypeSelect("hourly")}
            >"
              <h4 className="font-medium text-white">Hourly Rate</h4>"
              <p className="text-sm text-zion-slate-light">Pay per hour of work</p>
            </div>
<div
            <div 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              onClick={() => handleBudgetTypeSelect("hourly")}
            >
              <h4 className="font-medium text-white">Hourly Rate</h4>
              <p className="text-sm text-zion-slate-light">Pay per hour of work</p>
            </div>

            <div 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "range"
                  ? "bg-zion-purple/20 border-zion-purple"
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
              }`}

              onClick={() => handleBudgetTypeSelect("range")}
            >"
              <h4 className="font-medium text-white">Budget Range</h4>"
              <p className="text-sm text-zion-slate-light">I have a min and max</p>
            </div>
          </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {formData.budget.type === "fixed" && (
=======
    }).format(value)          {formData.budget.type === "fixed" && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }).format(value)          {formData.budget.type === "fixed" && (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          {formData.budget.type === "fixed" && (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
          {formData.budget.type === "fixed" && ("
            <div className="mt-6">"
              <Label className="text-zion-slate-light mb-4 block">
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };
  const formatCurrency = (value: number) => {;'
    return new Intl && Intl.NumberFormat('en-US', {;'
      style: 'currency',;'
      currency: 'USD',;
      maximumFractionDigits: 0;
}).format(value)
};
  return (
    <div className="space-y-6">;
      <div>;'"
        <h3 className="text-xl font-semibold text-white mb-4">What's your budget?</h3>;"
        <div className="space-y-4">;"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
            <div;`
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${"
                formData && formData.budget.type === "fixed" "
                  ? "bg-zion-purple/20 border-zion-purple" "
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
}`}
              onClick={() => handleBudgetTypeSelect("fixed")}
            >;"
              <h4 className="font-medium text-white">Fixed Budget</h4>;"
              <p className="text-sm text-zion-slate-light">I have a set amount</p>;
            </div>;

<div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.budget.type === "hourly" 
                  ? "bg-zion-purple/20 border-zion-purple" 
: "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"              }`}
              onClick={() => handleBudgetTypeSelect("hourly")}
            >;"
              <h4 className="font-medium text-white">Hourly Rate</h4>;"
              <p className="text-sm text-zion-slate-light">Pay per hour of work</p>;
            </div>;

<div
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData && formData.budget.type === "range" 
                  ? "bg-zion-purple/20 border-zion-purple" 
: "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"              }`}
              onClick={() => handleBudgetTypeSelect("range")}
            >;"
              <h4 className="font-medium text-white">Budget Range</h4>;"
              <p className="text-sm text-zion-slate-light">I have a min and max</p>;
            </div>;
          </div>;

{formData && formData.budget.type === "fixed" && (;
            <div className="mt-6">;
              <Label className="text-zion-slate-light mb-4 block">;
                Fixed Budget: {formatCurrency(formData && formData.budget.amount)}
              </Label>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <Slider
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <Slider;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        }
      });
    }
              <Slider
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                defaultValue={[formData && formData.budget.amount]}
                max={50000}
                step={500}
                onValueChange={(value) => updateFormData({;
budget: { ...formData && formData.budget, amount: value[0] }                    updateFormData({;
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                <span>$0</span>;
                <span>$50,000+</span>;
              </div>;
            </div>;
          )}

<Slider;
                defaultValue={[formData && formData.budget.amount]}
                max={500}
                step={5}
                onValueChange={(value) => updateFormData({;
                  budget: { ...formData && formData.budget, amount: value[0] }
})}"
                className="py-4";
              />;"
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                <span>$0/hour</span>;
                <span>$500/hour</span>;
              </div>;
            </div>;
          )}

<Slider;
                  defaultValue={[formData && formData.budget.amount]}
                  max={50000}
                  step={500}

                    const maxAmount = formData && formData.budget.maxAmount || 50000;

                  onValueChange={(value) => {;
                    const newAmount = value[0],;
                    const maxAmount = formData.budget.maxAmount || 50000,;

updateFormData({;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      budget: { ;
                        ...formData && formData.budget, ;
                        amount: newAmount,;
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount;

<<<<<<< HEAD
                      }
                    });
                  }}
<<<<<<< HEAD
<<<<<<< HEAD
              <Slider
                defaultValue={[formData.budget.amount]}
                max={50000}
                step={500}
                onValueChange={(value) => updateFormData({
                  budget: { ...formData.budget, amount: value[0] }
                })}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">
                <span>$0</span>
                <span>$50,000+</span>
              </div>
            </div>
          )}
          {formData.budget.type === "hourly" && (
            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Hourly Rate: {formatCurrency(formData.budget.amount)}/hour
              </Label>
              <Slider
                defaultValue={[formData.budget.amount]}
                max={500}
                step={5}
                onValueChange={(value) => updateFormData({
                  budget: { ...formData.budget, amount: value[0] }
                })}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">
                <span>$0/hour</span>
                <span>$500/hour</span>
              </div>
            </div>
          )}
          {formData.budget.type === "range" && (
            <div className="mt-6 space-y-8">
              <div>
                <Label className="text-zion-slate-light mb-4 block">
                  Minimum Budget: {formatCurrency(formData.budget.amount)}
                </Label>
                <Slider
                  defaultValue={[formData.budget.amount]}
                  max={50000}
                  step={500}
                  onValueChange={(value) => {
                    const newAmount = value[0];
                    const maxAmount = formData.budget.maxAmount |50000;
                    updateFormData({
                      budget: {
                        ...formData.budget
                        amount: newAmount

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount
                  onValueChange={(value) => {;
                    const newAmount = value[0],;
                    const maxAmount = formData.budget.maxAmount || 50000,;
                    updateFormData({;
                      budget: {;
                        ...formData.budget;
                        amount: newAmount;
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      }
                    })
                  }}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <span>$0</span>
                  <span>$50,000</span>
                </div>
              </div>
              <div>
                <Label className="text-zion-slate-light mb-4 block">

<<<<<<< HEAD
                  Maximum Budget: {formatCurrency(formData.budget.maxAmount |0)}
</div>"
                <Label className="text-zion-slate-light mb-4 block">"
</Label>
                </Label>
                <Slider;
                  defaultValue={[formData.budget.maxAmount |formData.budget.amount + 5000]}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  Maximum Budget: {formatCurrency(formData.budget.maxAmount || 0)}
                </Label>;
</Slider>
                <Slider;
                  defaultValue={[formData.budget.maxAmount || formData.budget.amount + 5000]}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  min={formData.budget.amount}
<<<<<<< HEAD
=======
                  min={formData.budget.amount}                  min={formData.budget.amount}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  min={formData.budget.amount}                  min={formData.budget.amount}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  min={formData.budget.amount}
}
                    });
                  }}
                  min={formData.budget.amount}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  className="py-4";
/>;"
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                  <span>$0</span>;
                  <span>$50,000</span>;
                </div>;
              </div>;

              <div>;"
                <Label className="text-zion-slate-light mb-4 block">;
                  Maximum Budget: {formatCurrency(formData && formData.budget.maxAmount || 0)}
                </Label>;
                <Slider;
                  defaultValue={[formData && formData.budget.maxAmount || formData && formData.budget.amount + 5000]}
                  min={formData && formData.budget.amount}
                  onValueChange={(value) => {;
                    const newAmount = value[0];
                      }
                    });
                  }}
                  max={100000}
                  step={500}
                  onValueChange={(value) => updateFormData({;
                    budget: { ...formData && formData.budget, maxAmount: value[0] }
                  })}"
                  className="py-4";
                />;"
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
              <div>;
</div>"
                <Label className="text-zion-slate-light mb-4 block">;"
</Label>
                </Label>;
                <Slider;
                  defaultValue={[formData && formData.budget.maxAmount || formData && formData.budget.amount + 5000]}
                  min={formData && formData.budget.amount}
                  onValueChange={(value) => {;
</Slider>"
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">;"
</div>
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
          ...form_data.budget,
          type;
        }
      });
    }
  }
;
  const format_currency = (value: number) =>: any {'
    return new Intl.NumberFormat ('en - US', {'
      style: 'currency','
      currency: 'USD',
      maximumFractionDigits: 0;
    }).format (value);
  }
;
return (
    <div className="space-y-6">;
      <div>;
        <h3 className="text - xl font - semibold text - white mb-4">What's your budget?</h3>;
        <div className="space-y-4">;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap-4">;
            <div;
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${
                form_data.budget.type === "fixed";
                  ? "bg - zion - purple / 20 border - zion - purple";
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
              }`}
              on_click={() => handleBudgetTypeSelect ("fixed")}
            >;
<<<<<<< HEAD
              <h4 className="font - medium text-white">Fixed Budget</h4>;
              <p className="text - sm text - zion - slate-light">I have a set amount</p>;
=======
              <h4 className="font - medium text-white">Fixed Budget</h4>;
              <p className="text - sm text - zion - slate-light">I have a set amount</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </div>;
            <div;`
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "hourly";"
                  ? "bg - zion - purple / 20 border - zion - purple";"
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";`
              }`}"
              on_click={() => handleBudgetTypeSelect ("hourly")}
>;
<<<<<<< HEAD
              <h4 className="font - medium text-white">Hourly Rate</h4>;
              <p className="text - sm text - zion - slate-light">Pay per hour of work</p>;
=======
              <h4 className="font - medium text-white">Hourly Rate</h4>;
              <p className="text - sm text - zion - slate-light">Pay per hour of work</p>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </div>;
            <div;`
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "range";"
                  ? "bg - zion - purple / 20 border - zion - purple";"
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";`
              }`}"
              on_click={() => handleBudgetTypeSelect ("range")}
>;
              <h4 className="font - medium text-white">Budget Range</h4>;
              <p className="text - sm text - zion - slate-light">I have a min and max</p>;
            </div>;
          </div>;
          {form_data.budget.type === "fixed" && (
<<<<<<< HEAD
            <div className="mt-6">;
              <Label className="text - zion - slate - light mb-4 block">;
=======
            <div className="mt-6">;
              <Label className="text - zion - slate - light mb-4 block">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Fixed Budget: {format_currency (form_data.budget.amount)}
        </div>;
      </div>;

    </div>;"
    <div className="space - y-6">;"
</div>
      <div>;
</div>"
        <h3 className="text - xl font - semibold text - white mb - 4">What's your budget?</h3>;''
        <div className="space - y-4">;"
</div>"
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;"
</div>
            <div;
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "fixed";""
                  ? "bg - zion - purple / 20 border - zion - purple";""
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"
              }`}"
              on_click={() => handleBudgetTypeSelect ("fixed")}"
</div>"
              <h4 className="font - medium text - white">Fixed Budget</h4>;""
              <p className="text - sm text - zion - slate - light">I have a set amount</p>;"
            </div>;
            <div;
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "hourly";""
                  ? "bg - zion - purple / 20 border - zion - purple";""
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"
              }`}"
              on_click={() => handleBudgetTypeSelect ("hourly")}"
</div>"
              <h4 className="font - medium text - white">Hourly Rate</h4>;""
              <p className="text - sm text - zion - slate - light">Pay per hour of work</p>;"
            </div>;
            <div;
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "range";""
                  ? "bg - zion - purple / 20 border - zion - purple";""
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"
              }`}"
              on_click={() => handleBudgetTypeSelect ("range")}"
</div>"
              <h4 className="font - medium text - white">Budget Range</h4>;""
              <p className="text - sm text - zion - slate - light">I have a min and max</p>;"
            </div>;
          </div>;"
            <div className="mt - 6">;"
</div>"
              <Label className="text - zion - slate - light mb - 4 block">;"
</Label>

              </Label>;
              <Slider;
                default_value={[form_data.budget.amount]}
                max={50000}
                step={500}
onValueChange={(value) => updateFormData ({}
                  budget: { ...form_data.budget, amount: value[0] }
})}
                className="py-4";
              />;
              <div className="flex justify - between text - sm text - zion - slate - light mt-2">;
                <span>$0</span>;
                <span>$50, 000+</span>;
              </div>;
            </div>)}
          {form_data.budget.type === "hourly" && (
<<<<<<< HEAD
            <div className="mt-6">;
              <Label className="text - zion - slate - light mb-4 block">;
=======
            <div className="mt-6">;
              <Label className="text - zion - slate - light mb-4 block">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Hourly Rate: {format_currency (form_data.budget.amount)}/hour;
</Slider>"
              <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;"
</div>
                <span>$0</span>;
                <span>$50, 000+</span>;
              </div>;)
            </div>)}"
            <div className="mt - 6">;"
</div>"
              <Label className="text - zion - slate - light mb - 4 block">;"
</Label>

              </Label>;
              <Slider;
                default_value={[form_data.budget.amount]}
                max={500}
                step={5}
onValueChange={(value) => updateFormData ({}
                  budget: { ...form_data.budget, amount: value[0] }
})}
                className="py-4";
              />;
              <div className="flex justify - between text - sm text - zion - slate - light mt-2">;
                <span>$0 / hour</span>;
                <span>$500 / hour</span>;
              </div>;
            </div>)}
          {form_data.budget.type === "range" && (
            <div className="mt - 6 space-y-8">;
              <div>;
<<<<<<< HEAD
                <Label className="text - zion - slate - light mb-4 block">;
=======
                <Label className="text - zion - slate - light mb-4 block">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  Minimum Budget: {format_currency (form_data.budget.amount)}
</Slider>"
              <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;"
</div>
                <span>$0 / hour</span>;
                <span>$500 / hour</span>;
              </div>;)
            </div>)}"
            <div className="mt - 6 space - y-8">;"
</div>
              <div>;
</div>"
                <Label className="text - zion - slate - light mb - 4 block">;"
</Label>

                </Label>;
                <Slider;
                  default_value={[form_data.budget.amount]}
                  max={50000}
                  step={500}
onValueChange={(value) => {}
                    const new_amount = value[0];
                    const max_amount = form_data.budget.max_amount || 50000;
;
                    updateFormData ({}
                      budget: {}
                        ...form_data.budget,
                        amount: new_amount,
                        max_amount: new_amount >= max_amount ? new_amount + 5000 : max_amount;
                      }
                    });
}}
                  className="py-4";
                />;
<<<<<<< HEAD
                <div className="flex justify - between text - sm text - zion - slate - light mt-2">;
=======
                <div className="flex justify - between text - sm text - zion - slate - light mt-2">;
</Slider>"
                <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <span>$0</span>;
                  <span>$50, 000</span>;
                </div>;
              </div>;
<div>;
<<<<<<< HEAD
                <Label className="text - zion - slate - light mb-4 block">;
=======
                <Label className="text - zion - slate - light mb-4 block">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  Maximum Budget: {format_currency (form_data.budget.max_amount || 0)}
</div>"
                <Label className="text - zion - slate - light mb - 4 block">;"
</Label>

                </Label>;
                <Slider;
                  default_value={[form_data.budget.max_amount || form_data.budget.amount + 5000]}
                  min={form_data.budget.amount}
                  max={100000}
                  step={500}
onValueChange={(value) => updateFormData ({}
                    budget: { ...form_data.budget, max_amount: value[0] }
})}
                  className="py-4";
                />;
<<<<<<< HEAD
                <div className="flex justify - between text - sm text - zion - slate - light mt-2">;
=======
                <div className="flex justify - between text - sm text - zion - slate - light mt-2">;
</Slider>"
                <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;"
</div>)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <span>{format_currency (form_data.budget.amount)}</span>;
                  <span>$100, 000+</span>;

                </div>;
              </div>;
            </div>)}
        </div>;
      </div>;
</div>);}
