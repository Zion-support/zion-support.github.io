
import {QuoteFormData} from "@/types/quotes";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";

import {QuoteFormData} from "@/types/quotes";
import {Label} from "@/components/ui/label";
import {Slider} from "@/components/ui/slider";


import { QuoteFormData } from "@/types/quotes",
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label",

import { Slider } from "@/components/ui/slider",

        }
      })
    } else {
      updateFormData({
        budget: {

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


interface BudgetStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}


        }

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

  }


  },

  }
  },
  };
  },  },

  };
  },

  },
  };
  },


  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: 'USD'
      maximumFractionDigits: 0

  },


  return (

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


          


          
          
          {formData.budget.type === "fixed" && (

            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>


  };
  const formatCurrency = (value: number) => {;'
    return new Intl && Intl.NumberFormat('en-US', {;'
      style: 'currency',;'
      currency: 'USD',;
      maximumFractionDigits: 0;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
            <div;`
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${"
                formData && formData.budget.type === "fixed" "
                  ? "bg-zion-purple/20 border-zion-purple" "
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"


              onClick={() => handleBudgetTypeSelect("fixed")}
            >;"
              <h4 className="font-medium text-white">Fixed Budget</h4>;"
              <p className="text-sm text-zion-slate-light">I have a set amount</p>;
            </div>;

              }`}
              onClick={() => handleBudgetTypeSelect("hourly")}
            >;"
              <h4 className="font-medium text-white">Hourly Rate</h4>;"
              <p className="text-sm text-zion-slate-light">Pay per hour of work</p>;
            </div>;

              }`}
              onClick={() => handleBudgetTypeSelect("range")}
            >;"
              <h4 className="font-medium text-white">Budget Range</h4>;"
              <p className="text-sm text-zion-slate-light">I have a min and max</p>;
            </div>;
          </div>;

              <Slider

                defaultValue={[formData && formData.budget.amount]}
                max={50000}
                step={500}
                onValueChange={(value) => updateFormData({;


              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                <span>$0</span>;
                <span>$50,000+</span>;
              </div>;
            </div>;
          )}

              <Slider
                defaultValue={[formData && formData.budget.amount]}
                max={500}
                step={5}
                onValueChange={(value) => updateFormData({;
                  budget: { ...formData && formData.budget, amount: value[0] }


              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;
                <span>$0/hour</span>;
                <span>$500/hour</span>;
              </div>;
            </div>;
          )}

                  defaultValue={[formData && formData.budget.amount]}
                  max={50000}
                  step={500}

                    const maxAmount = formData && formData.budget.maxAmount || 50000;

                <Slider
                  defaultValue={[formData && formData.budget.amount]}
                  max={50000}
                  step={500}
                    const maxAmount = formData && formData.budget.maxAmount || 50000;


                  onValueChange={(value) => {;
                    const newAmount = value[0],;
                    const maxAmount = formData.budget.maxAmount || 50000,;


                      budget: { ;
                        ...formData && formData.budget, ;
                        amount: newAmount,;
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount;

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

                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount
                  onValueChange={(value) => {;
                    const newAmount = value[0],;
                    const maxAmount = formData.budget.maxAmount || 50000,;
                    updateFormData({;
                      budget: {;
                        ...formData.budget;
                        amount: newAmount;
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount;

                  Maximum Budget: {formatCurrency(formData.budget.maxAmount || 0)}
                </Label>;
</Slider>
                <Slider;
                  defaultValue={[formData.budget.maxAmount || formData.budget.amount + 5000]}
                      }
                    })
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
</div>"
                <Label className="text-zion-slate-light mb-4 block">"
</Label>
                </Label>
                <Slider;
                  defaultValue={[formData.budget.maxAmount |formData.budget.amount + 5000]}

                  Maximum Budget: {formatCurrency(formData.budget.maxAmount || 0)}
                </Label>;
</Slider>
                <Slider;
                  defaultValue={[formData.budget.maxAmount || formData.budget.amount + 5000]}

                  min={formData.budget.amount}
}
                    });
                  }}

                  className="py-4";

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
      })
    } else {
      updateFormData({
        budget: {
          ...formData.budget
          type
        }
      })
    }
  },

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0}).format(value)
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
          {formData.budget.type === "fixed" && (
            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>
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
                className = $2;
                    const maxAmount = $2;
                    updateFormData({
                      budget: { 
                        ...formData.budget, 
                        amount: newAmount,
                        maxAmount: newAmount>= maxAmount ? newAmount + 5000 : maxAmount
                      }
                    })
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
;
          {formData.budget.type === "range" && (;
            <div className="mt-6 space-y-8">;
              <div>;
                <Label className="text-zion-slate-light mb-4 block">;
                  Minimum Budget:{formatCurrency(formData.budget.amount)}
                </Label>;
                <Slider;
                  defaultValue={[formData.budget.amount]}
                  max={50000}
    </div>);}
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;"
                <span>$0</span>;
                <span>$50,000+</span>;

                max={500}
                step={5})
                <span>$0/hour</span>;
                <span>$500/hour</span>;

    </div>);"
            <div className="mt-6 space-y-8">;"

                    const maxAmount = formData && formData.budget.maxAmount || 50000;

)
                  onValueChange={(value) => {;

                defaultValue={[formData.budget.amount]}
                onValueChange={(value) => updateFormData({
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">"
                <span>$0</span>
                <span>$50,000+</span>

                <span>$0/hour</span>
                <span>$500/hour</span>
            <div className="mt-6 space-y-8">"

                  step={500})
                  onValueChange={(value) => {
                  <span>$50,000</span>

                  defaultValue={[formData.budget.maxAmount |formData.budget.amount + 5000]}

                  Maximum Budget: {formatCurrency(formData.budget.maxAmount || 0)}

                  defaultValue={[formData.budget.maxAmount || formData.budget.amount + 5000]}

                  min={formData.budget.amount}
                  min={formData.budget.amount}"
                  className="py-4";"
                />;
                  <span>$50,000</span>;

                  defaultValue={[formData && formData.budget.maxAmount || formData && formData.budget.amount + 5000]}
                  min={formData && formData.budget.amount}
                  <span>{formatCurrency(formData && formData.budget.amount)}</span>;
                  <span>$100,000+</span>;
    <div className="space - y-6">;"
        <h3 className="text - xl font - semibold text - white mb - 4">What's your budget?</h3>;
        <div className="space - y-4">;"
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;"
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "fixed";""
                  ? "bg - zion - purple / 20 border - zion - purple";""
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"`;
              on_click={() => handleBudgetTypeSelect ("fixed")}"
              <h4 className="font - medium text - white">Fixed Budget</h4>;""
              <p className="text - sm text - zion - slate - light">I have a set amount</p>;"
                form_data.budget.type === "hourly";""
              on_click={() => handleBudgetTypeSelect ("hourly")}"
              <h4 className="font - medium text - white">Hourly Rate</h4>;""
              <p className="text - sm text - zion - slate - light">Pay per hour of work</p>;"
                form_data.budget.type === "range";""
              on_click={() => handleBudgetTypeSelect ("range")}"
              <h4 className="font - medium text - white">Budget Range</h4>;""
              <p className="text - sm text - zion - slate - light">I have a min and max</p>;"
            <div className="mt - 6">;"
              <Label className="text - zion - slate - light mb - 4 block">;"

                default_value={[form_data.budget.amount]}
                onValueChange={(value) => updateFormData ({
              <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;"
                <span>$50, 000+</span>;
              </div>;)
            </div>)}"

                step={5}
                <span>$0 / hour</span>;
                <span>$500 / hour</span>;
            <div className="mt - 6 space - y-8">;"

                  <span>$50, 000</span>;

                  default_value={[form_data.budget.max_amount || form_data.budget.amount + 5000]}
                  min={form_data.budget.amount}
                  max={100000}
</div>)
                  <span>{format_currency (form_data.budget.amount)}</span>;
                  <span>$100, 000+</span>;
            </div>)}
    </div>);"

                  <span>{formatCurrency(formData.budget.amount)}</span>;
<div> <h3 className="text-xl font-semibold text-white mb-4" >What's your budget?</h3> <div className="space-y-4" > <div className="grid grid-cols-1 md:grid-cols-3 gap-4" > <div > <h4 className="font-medium text-white" >Fixed Budget</h4> <p className="text-sm text-zion-slate-light" >I have a set amount</p> </div> <div > <h4 className="font-medium text-white" >Hourly Rate</h4> <p className="text-sm text-zion-slate-light" >Pay per hour of work</p> </div> <div > <h4 className="font-medium text-white" >Budget Range</h4> <p className="text-sm text-zion-slate-light" >I have a min and max</p> </div> </div> Fixed Budget: {"
} <Slider defaultValue= {
  [formData.budget.amount] 
}max= {
  50000;
}step= {
  500;
}onValueChange= {
  (value) => updateFormData ({
)"
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0</span> <span>$50, 000+</span> </div> </div>)"
}/hour  <Slider defaultValue= {
  5;
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0/hour</span> <span>$500/hour</span> </div> </div>)""
}<div> <Label className="text-zion-slate-light mb-4 block" > Minimum Budget: {"
} <Slider;
}"
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0</span> <span>$50, 000</span> </div> </div> <div>  <Slider defaultValue= {"
}className="py-4" /> <span>$100, 000+</span> </div> </div> </div>)"
}</div> </div> </div>) "
                  <span>{formatCurrency(formData.budget.amount)}</span>
                  <span>$100,000+</span>
    </div>"`;
pr-12325
                </div>
              </div>
            </div>
                  min={formData.budget.amount}
                  max={100000}
                  step={500}
    </div>);}
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">;"
                <span>$0</span>;
                <span>$50,000+</span>;

                max={500}
                step={5})
                <span>$0/hour</span>;
                <span>$500/hour</span>;

    </div>);"
            <div className="mt-6 space-y-8">;"

                    const maxAmount = formData && formData.budget.maxAmount || 50000;

)
                  onValueChange={(value) => {;

                defaultValue={[formData.budget.amount]}
                onValueChange={(value) => updateFormData({
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">"
                <span>$0</span>
                <span>$50,000+</span>

                <span>$0/hour</span>
                <span>$500/hour</span>
            <div className="mt-6 space-y-8">"

                  step={500})
                  onValueChange={(value) => {
                  <span>$50,000</span>

                  defaultValue={[formData.budget.maxAmount |formData.budget.amount + 5000]}

                  Maximum Budget: {formatCurrency(formData.budget.maxAmount || 0)}

                  defaultValue={[formData.budget.maxAmount || formData.budget.amount + 5000]}

                  min={formData.budget.amount}
                  min={formData.budget.amount}"
                  className="py-4";"
                />;
                  <span>$50,000</span>;

                  defaultValue={[formData && formData.budget.maxAmount || formData && formData.budget.amount + 5000]}
                  min={formData && formData.budget.amount}
                  <span>{formatCurrency(formData && formData.budget.amount)}</span>;
                  <span>$100,000+</span>;
    <div className="space - y-6">;"
        <h3 className="text - xl font - semibold text - white mb - 4">What's your budget?</h3>;
        <div className="space - y-4">;"
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;"
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "fixed";""
                  ? "bg - zion - purple / 20 border - zion - purple";""
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"`;
              on_click={() => handleBudgetTypeSelect ("fixed")}"
              <h4 className="font - medium text - white">Fixed Budget</h4>;""
              <p className="text - sm text - zion - slate - light">I have a set amount</p>;"
                form_data.budget.type === "hourly";""
              on_click={() => handleBudgetTypeSelect ("hourly")}"
              <h4 className="font - medium text - white">Hourly Rate</h4>;""
              <p className="text - sm text - zion - slate - light">Pay per hour of work</p>;"
                form_data.budget.type === "range";""
              on_click={() => handleBudgetTypeSelect ("range")}"
              <h4 className="font - medium text - white">Budget Range</h4>;""
              <p className="text - sm text - zion - slate - light">I have a min and max</p>;"
            <div className="mt - 6">;"
              <Label className="text - zion - slate - light mb - 4 block">;"

                default_value={[form_data.budget.amount]}
                onValueChange={(value) => updateFormData ({
              <div className="flex justify - between text - sm text - zion - slate - light mt - 2">;"
                <span>$50, 000+</span>;
              </div>;)
            </div>)}"

                step={5}
                <span>$0 / hour</span>;
                <span>$500 / hour</span>;
            <div className="mt - 6 space - y-8">;"

                  <span>$50, 000</span>;

                  default_value={[form_data.budget.max_amount || form_data.budget.amount + 5000]}
                  min={form_data.budget.amount}
                  max={100000}
</div>)
                  <span>{format_currency (form_data.budget.amount)}</span>;
                  <span>$100, 000+</span>;
            </div>)}
    </div>);"

                  <span>{formatCurrency(formData.budget.amount)}</span>;
<div> <h3 className="text-xl font-semibold text-white mb-4" >What's your budget?</h3> <div className="space-y-4" > <div className="grid grid-cols-1 md:grid-cols-3 gap-4" > <div > <h4 className="font-medium text-white" >Fixed Budget</h4> <p className="text-sm text-zion-slate-light" >I have a set amount</p> </div> <div > <h4 className="font-medium text-white" >Hourly Rate</h4> <p className="text-sm text-zion-slate-light" >Pay per hour of work</p> </div> <div > <h4 className="font-medium text-white" >Budget Range</h4> <p className="text-sm text-zion-slate-light" >I have a min and max</p> </div> </div> Fixed Budget: {"
} <Slider defaultValue= {
  [formData.budget.amount] 
}max= {
  50000;
}step= {
  500;
}onValueChange= {
  (value) => updateFormData ({
)"
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0</span> <span>$50, 000+</span> </div> </div>)"
}/hour  <Slider defaultValue= {
  5;
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0/hour</span> <span>$500/hour</span> </div> </div>)""
}<div> <Label className="text-zion-slate-light mb-4 block" > Minimum Budget: {"
} <Slider;
}"
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0</span> <span>$50, 000</span> </div> </div> <div>  <Slider defaultValue= {"
}className="py-4" /> <span>$100, 000+</span> </div> </div> </div>)"
}</div> </div> </div>) "
                  <span>{formatCurrency(formData.budget.amount)}</span>
                  <span>$100,000+</span>
    </div>"`;
pr-12325
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )

}