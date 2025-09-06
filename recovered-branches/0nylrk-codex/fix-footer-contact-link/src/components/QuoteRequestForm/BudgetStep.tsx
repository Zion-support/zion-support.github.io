 interface BudgetStepProps {
  formData: QuoteFormData;
updateFormData: (data: Partial<QuoteFormData>) => void 
}export function BudgetStep ({
  formData, updateFormData 
}: BudgetStepProps) {
  const handleBudgetTypeSelect = (type: "fixed" | "hourly" | "range") => {
  if (type === "range" && !formData.budget.maxAmount) {
  updateFormData ({
  budget: {
  ...formData.budget;
type;
maxAmount: formData.budget.amount + 5000 
}
}) 
}else {
  updateFormData ({
  budget: {
  ...formData.budget;
type 
}
}) 
}
};
<div> <h3 className="text-xl font-semibold text-white mb-4" >What's your budget?</h3> <div className="space-y-4" > <div className="grid grid-cols-1 md:grid-cols-3 gap-4" > <div > <h4 className="font-medium text-white" >Fixed Budget</h4> <p className="text-sm text-zion-slate-light" >I have a set amount</p> </div> <div > <h4 className="font-medium text-white" >Hourly Rate</h4> <p className="text-sm text-zion-slate-light" >Pay per hour of work</p> </div> <div > <h4 className="font-medium text-white" >Budget Range</h4> <p className="text-sm text-zion-slate-light" >I have a min and max</p> </div> </div> Fixed Budget: {
  formatCurrency (formData.budget.amount) 
}</Label> <Slider defaultValue= {
  [formData.budget.amount] 
}max= {
  50000 
}step= {
  500 
}onValueChange= {
  (value) => updateFormData ({
  budget: {
  ...formData.budget, amount: value[0] 
}
}) 
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0</span> <span>$50, 000+</span> </div> </div>) 
}Hourly Rate: {
  formatCurrency (formData.budget.amount) 
}/hour </Label> <Slider defaultValue= {
  [formData.budget.amount] 
}max= {
  500 
}step= {
  5 
}onValueChange= {
  (value) => updateFormData ({
  budget: {
  ...formData.budget, amount: value[0] 
}
}) 
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0/hour</span> <span>$500/hour</span> </div> </div>) 
}<div> <Label className="text-zion-slate-light mb-4 block" > Minimum Budget: {
  formatCurrency (formData.budget.amount) 
}</Label> <Slider 
}
}className="py-4" /> <div className="flex justify-between text-sm text-zion-slate-light mt-2" > <span>$0</span> <span>$50, 000</span> </div> </div> <div> </Label> <Slider defaultValue= {
  [formData.budget.maxAmount || formData.budget.amount + 5000] 
}min= {
  formData.budget.amount 
}max= {
  100000 
}step= {
  500 
}onValueChange= {
  (value) => updateFormData ({
  budget: {
  ...formData.budget, maxAmount: value[0] 
}
}) 
}className="py-4" /> <span>$100, 000+</span> </div> </div> </div>) 
}</div> </div> </div>) 
}