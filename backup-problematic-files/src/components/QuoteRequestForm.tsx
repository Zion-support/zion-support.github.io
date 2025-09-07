
import { useState } from "react",;""
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',;
import { useToast } from "@/hooks/use-toast",;""
import { useRouter } from 'next/router',;
import { Button } from "@/components/ui/button",;""
import { Card, CardContent } from "@/components/ui/card",;""
import { GradientHeading } from "@/components/GradientHeading",;""
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress",;""
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep",;""
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep",;""
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep",;""
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep",;""
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep",;""
import { AutoFillModal } from "@/components/QuoteRequestForm/AutoFillModal",;""
import { QuoteFormData } from "@/types/quotes",;""
import { Sparkles, Loader2 } from 'lucide-react';
import { z } from "zod",;"
;"
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary",;"
;
const serviceStepSchema = z.object({;)
  serviceType:z.string().min(1),;
  specificItem:z.object({ id:z.string() })}),;
export function QuoteRequestForm() {;
  const router = useRouter(),;
  const { toast } = useToast(),;"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),;"

  const [formData, setFormData] = useState<QuoteFormData>({;
)
  const updateFormData = (data:Partial<QuoteFormData>) => {;

        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />,;

        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />,;

        return <TimelineStep formData={formData} updateFormData={updateFormData} />,;

        return <BudgetStep formData={formData} updateFormData={updateFormData} />,;

        return <SummaryStep formData={formData} updateFormData={updateFormData} />,;
"
    <div className="container mx-auto px-4 py-12">;"
</div>"
      <div className="max-w-3xl mx-auto">;"
        <div className="text-center mb-8 space-y-3">;"
</div>
          <GradientHeading>Request a Quote;"
          <p className="text-zion-slate-light mt-4">;"
</p>
          </p>;"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">;"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />;"
            <span className="text-sm text-white">AI-powered matching</span>;"
          </div>;
          <Button;"
            size="sm";"
            onClick={() => setAutoFillOpen(true)}
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;"
</Loader2>
        </div>;"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;"
          <CardContent className="px-6 py-8">;"

            <StepProgress currentStep={currentStep} />;
            <div className="mt-8">;"
            <div className="flex justify-between mt-8">;"
                  variant="outline";"
                  onClick={handleBack}"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10";"
                >;

                <Button ;
                  onClick={handleNext}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";"

                  onClick={handleSubmit}
                  disabled={isSubmitting}"

      <AutoFillModal;
        open={autoFillOpen}
        onOpenChange={setAutoFillOpen}
        onSubmit={handleAutoFill}
        loading={autoFillLoading}
      />;

<GradientHeading>Request a Quote <p className="text-zion-slate-light mt-4" > Tell us about your project and we'll create a customized quote for you </p> <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20" > <Sparkles className="h-4 w-4 text-zion-cyan mr-1" /> <span className="text-sm text-white" >AI-powered matching</span> </div> <Button) ";""
}Auto Fill with AI  </div> <Button variant="outline" onClick={;""
  handleBack ";""
}className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > Back ) ;"
}<Button onClick={;"
  handleNext ";""
}className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Continue ) : (<Button ) ;"
}</div>   </div> <AutoFillModal open= {;
  autoFillOpen ;
}onOpenChange= {;
  setAutoFillOpen ;
}onSubmit= {;
  handleAutoFill ;
}loading= {;
  autoFillLoading ;
}/> </div>) ;
