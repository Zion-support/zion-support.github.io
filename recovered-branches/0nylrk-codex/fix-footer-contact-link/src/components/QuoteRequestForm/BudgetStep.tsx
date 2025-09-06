import { QuoteFormData } from "@/types/quotes",
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
interface BudgetStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
}

export function BudgetStep({ formData, updateFormData }: BudgetStepProps) {
  const handleBudgetTypeSelect = null;
                        maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount
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
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">
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
};