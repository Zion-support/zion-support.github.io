<div

interface TimelineStepProps {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void





export function TimelineStep({ formData, updateFormData }: TimelineStepProps) {
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-zion-blue border border-zion-blue-light hover:bg-zion-blue-dark",
                        !formData.endDate && "text-zion-slate-light"
;
