

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
      });
    } else {
      updateFormData ({
        budget: {




















  return (

    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">What's your budget?</h3>;










                  defaultValue={[formData && formData.budget.amount]}
                  max={50000}
                  step={500}


                    const maxAmount = formData && formData.budget.maxAmount || 50000;






                  min={formData.budget.amount}

              <div>;




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

            </div>;
            <div;`
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "hourly";"
                  ? "bg - zion - purple / 20 border - zion - purple";"
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";`
              }`}"
              on_click={() => handleBudgetTypeSelect ("hourly")}

            </div>;
            <div;`
              className={`p - 4 rounded - lg border - 2 cursor - pointer transition - colors ${"
                form_data.budget.type === "range";"
                  ? "bg - zion - purple / 20 border - zion - purple";"
                  : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";`
              }`}"
              on_click={() => handleBudgetTypeSelect ("range")}

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

                  budget: { ...form_data.budget, amount: value[0] }

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

                  budget: { ...form_data.budget, amount: value[0] }

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

                  <span>$0</span>;
                  <span>$50, 000</span>;
                </div>;
              </div>;

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

                    budget: { ...form_data.budget, max_amount: value[0] }

                  <span>{format_currency (form_data.budget.amount)}</span>;
                  <span>$100, 000+</span>;

                </div>;
              </div>;
            </div>)}
        </div>;
      </div>;

    </div>);




