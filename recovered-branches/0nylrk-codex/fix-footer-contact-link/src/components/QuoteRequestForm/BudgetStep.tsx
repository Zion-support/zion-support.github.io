<<<<<<< HEAD
import { QuoteFormData } from "@/types/quotes",
import { Label } from "@/components/ui/label",
import { Slider } from "@/components/ui/slider",
=======
import { QuoteFormData } from &quot;@/types/quotes&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Slider } from &quot;@/components/ui/slider&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface BudgetStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function BudgetStep({ formData, updateFormData }: BudgetStepProps) {
  const handleBudgetTypeSelect = (type: &quot;fixed&quot; | &quot;hourly&quot; | &quot;range&quot;) => {
    if (type === &quot;range&quot; && !formData.budget.maxAmount) {
      updateFormData({
        budget: {
          ...formData.budget,
          type,
          maxAmount: formData.budget.amount + 5000
        }
      })
    } else {
      updateFormData({
        budget: {
          ...formData.budget,
          type
        }
      })
    }
  },

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  },

  return (
    <div className=&quot;space-y-6&quot;>
      <div>
        <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>What's your budget?</h3>
        
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
            <div 
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === &quot;fixed&quot; 
                  ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                  : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
              }`}
              onClick={() => handleBudgetTypeSelect(&quot;fixed&quot;)}
            >
              <h4 className=&quot;font-medium text-white&quot;>Fixed Budget</h4>
              <p className=&quot;text-sm text-zion-slate-light&quot;>I have a set amount</p>
            </div>
            
            <div 
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === &quot;hourly&quot; 
                  ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                  : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
              }`}
              onClick={() => handleBudgetTypeSelect(&quot;hourly&quot;)}
            >
              <h4 className=&quot;font-medium text-white&quot;>Hourly Rate</h4>
              <p className=&quot;text-sm text-zion-slate-light&quot;>Pay per hour of work</p>
            </div>
            
            <div 
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === &quot;range&quot; 
                  ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                  : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
              }`}
              onClick={() => handleBudgetTypeSelect(&quot;range&quot;)}
            >
              <h4 className=&quot;font-medium text-white&quot;>Budget Range</h4>
              <p className=&quot;text-sm text-zion-slate-light&quot;>I have a min and max</p>
            </div>
          </div>
          
          {formData.budget.type === &quot;fixed&quot; && (
            <div className=&quot;mt-6&quot;>
              <Label className=&quot;text-zion-slate-light mb-4 block&quot;>
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>
              <Slider
                defaultValue={[formData.budget.amount]}
                max={50000}
                step={500}
                onValueChange={(value) => updateFormData({
                  budget: { ...formData.budget, amount: value[0] }
                })}
                className=&quot;py-4&quot;
              />
              <div className=&quot;flex justify-between text-sm text-zion-slate-light mt-2&quot;>
                <span>$0</span>
                <span>$50,000+</span>
              </div>
            </div>
          )}
          
          {formData.budget.type === &quot;hourly&quot; && (
            <div className=&quot;mt-6&quot;>
              <Label className=&quot;text-zion-slate-light mb-4 block&quot;>
                Hourly Rate: {formatCurrency(formData.budget.amount)}/hour
              </Label>
              <Slider
                defaultValue={[formData.budget.amount]}
                max={500}
                step={5}
                onValueChange={(value) => updateFormData({
                  budget: { ...formData.budget, amount: value[0] }
                })}
                className=&quot;py-4&quot;
              />
              <div className=&quot;flex justify-between text-sm text-zion-slate-light mt-2&quot;>
                <span>$0/hour</span>
                <span>$500/hour</span>
              </div>
            </div>
          )}
          
          {formData.budget.type === &quot;range&quot; && (
            <div className=&quot;mt-6 space-y-8&quot;>
              <div>
                <Label className=&quot;text-zion-slate-light mb-4 block&quot;>
                  Minimum Budget: {formatCurrency(formData.budget.amount)}
                </Label>
                <Slider
                  defaultValue={[formData.budget.amount]}
                  max={50000}
                  step={500}
                  onValueChange={(value) => {
                    const newAmount = value[0],
                    const maxAmount = formData.budget.maxAmount || 50000,
                    
                    updateFormData({
                      budget: { 
                        ...formData.budget, 
                        amount: newAmount,
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount
                      }
                    })
                  }}
                  className=&quot;py-4&quot;
                />
                <div className=&quot;flex justify-between text-sm text-zion-slate-light mt-2&quot;>
                  <span>$0</span>
                  <span>$50,000</span>
                </div>
              </div>
              
              <div>
                <Label className=&quot;text-zion-slate-light mb-4 block&quot;>
                  Maximum Budget: {formatCurrency(formData.budget.maxAmount || 0)}
                </Label>
                <Slider
                  defaultValue={[formData.budget.maxAmount || formData.budget.amount + 5000]}
                  min={formData.budget.amount}
                  max={100000}
                  step={500}
                  onValueChange={(value) => updateFormData({
                    budget: { ...formData.budget, maxAmount: value[0] }
                  })}
                  className=&quot;py-4&quot;
                />
                <div className=&quot;flex justify-between text-sm text-zion-slate-light mt-2&quot;>
                  <span>{formatCurrency(formData.budget.amount)}</span>
                  <span>$100,000+</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}