
interface BudgetStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

export function BudgetStep(_{_formData, _updateFormData}: BudgetStepProps) {_const _handleBudgetTypeSelect = (_type: "fixed" | "hourly" | "range") => {
    if (type === "range" && !formData.budget.maxAmount) {
      updateFormData({
        budget: {
          ...formData.budget, _type, _maxAmount: formData.budget.amount + 5000}
      });
    } else {_updateFormData({
        budget: {
          ...formData.budget, _type}
      });
    }
  };

  const _formatCurrency = (_value: number) => {_return new Intl.NumberFormat('en-US', _{
      style: 'currency', _currency: 'USD', _maximumFractionDigits: 0}).format(value);
  };

  return (_<div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What's your budget?</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              className={_`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "fixed" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
              onClick={_() => handleBudgetTypeSelect("fixed")}
            >
              <h4 className="font-medium text-white">Fixed Budget</h4>
              <p className="text-sm text-zion-slate-light">I have a set amount</p>
            </div>
            
            <div 
              className={_`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "hourly" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
              onClick={_() => handleBudgetTypeSelect("hourly")}
            >
              <h4 className="font-medium text-white">Hourly Rate</h4>
              <p className="text-sm text-zion-slate-light">Pay per hour of work</p>
            </div>
            
            <div 
              className={_`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.budget.type === "range" 
                  ? "bg-zion-purple/20 border-zion-purple" 
                  : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
              onClick={_() => handleBudgetTypeSelect("range")}
            >
              <h4 className="font-medium text-white">Budget Range</h4>
              <p className="text-sm text-zion-slate-light">I have a min and max</p>
            </div>
          </div>
          
          {_formData.budget.type === "fixed" && (
            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Fixed Budget: {formatCurrency(formData.budget.amount)}
              </Label>
              <Slider
                defaultValue={_[formData.budget.amount]}
                max={_50000}
                step={_500}
                onValueChange={_(_value) => updateFormData({
                  budget: { ...formData.budget, _amount: value[0]}
                })}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">
                <span>$0</span>
                <span>$50,000+</span>
              </div>
            </div>
          )}
          
          {_formData.budget.type === "hourly" && (
            <div className="mt-6">
              <Label className="text-zion-slate-light mb-4 block">
                Hourly Rate: {formatCurrency(formData.budget.amount)}/hour
              </Label>
              <Slider
                defaultValue={_[formData.budget.amount]}
                max={_500}
                step={_5}
                onValueChange={_(_value) => updateFormData({
                  budget: { ...formData.budget, _amount: value[0]}
                })}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-zion-slate-light mt-2">
                <span>$0/hour</span>
                <span>$500/hour</span>
              </div>
            </div>
          )}
          
          {_formData.budget.type === "range" && (
            <div className="mt-6 space-y-8">
              <div>
                <Label className="text-zion-slate-light mb-4 block">
                  Minimum Budget: {formatCurrency(formData.budget.amount)}
                </Label>
                <Slider
                  defaultValue={_[formData.budget.amount]}
                  max={_50000}
                  step={_500}
                  onValueChange={_(_value) => {
                    const _newAmount = value[0];
                    const _maxAmount = formData.budget.maxAmount || 50000;
                    
                    updateFormData({
                      budget: { 
                        ...formData.budget, _amount: newAmount, _maxAmount: newAmount >= maxAmount ? newAmount + 5000 : maxAmount}
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
                  Maximum Budget: {_formatCurrency(formData.budget.maxAmount || 0)}
                </Label>
                <Slider
                  defaultValue={_[formData.budget.maxAmount || formData.budget.amount + 5000]}
                  min={_formData.budget.amount}
                  max={_100000}
                  step={_500}
                  onValueChange={_(_value) => updateFormData({
                    budget: { ...formData.budget, _maxAmount: value[0]}
                  })}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-zion-slate-light mt-2">
                  <span>{_formatCurrency(formData.budget.amount)}</span>
                  <span>$100,000+</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}