import { QuoteRequestSteps } from "../QuoteRequestForm";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface StepProgressProps {
<<<<<<< HEAD
currentStep: QuoteRequestSteps,
export function StepProgress({ currentStep }: StepProgressProps) {
const steps: { id: QuoteRequestSteps; label: string }[] = [
{ id: 'service', label: 'Service' },
=======
  currentStep: QuoteRequestSteps,}
export function StepProgress({ currentStep }: StepProgressProps) {
  const steps: { id: QuoteRequestSteps; label: string }[] = [{ id: 'service', label: 'Service' },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
{ id: 'details', label: 'Details' }
{ id: 'timeline', label: 'Timeline' },
{ id: 'budget', label: 'Budget' }
<<<<<<< HEAD
{ id: 'summary', label: 'Summary' },  ];  const steps: { id: QuoteRequestSteps label: string }[] = [
"text-zion-slate-light";
)}
<span,
className = {cn(
"text-xs mt-2 font-medium";
status === "complete" ? "text-zion-cyan" :
status === "current" ? "text-white" :
"text-zion-slate-light";
),}
>;
{step.label}
</span>
</div>
)
})}
</div>
</div>
)
(steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100,
}%`;
}/> </div>
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {
steps.findIndex (s => s.id === step.id) + 1,
}</span>)
}</div> <span)
}> {
step.label,
}</span> </div>)
=======
    { id: 'summary', label: 'Summary' }];  const steps: { id: QuoteRequestSteps label: string }[] = [
                  "text-zion-slate-light"
                )}
              <span
className = {cn(
                  "text-xs mt-2 font-medium"
                  status === "complete" ? "text-zion-cyan" :
                  status === "current" ? "text-white" :
                  "text-zion-slate-light"
                )}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
  (steps.findIndex (s => s.id === currentStep) / (steps.length - 1) ) * 100,
}%`
}/> </div>
}className=" flex flex-col items-center relative"> <div) : (<span className=" text-xs" > {steps.findIndex (s => s.id === step.id) + 1}</span>)
}</div> <span)
}> {step.label}</span> </div>)
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
})
}</div> </div>)
}"          )
})}
</div>
</div>
)
}