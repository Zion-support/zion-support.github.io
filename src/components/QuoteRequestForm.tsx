
import { useState } from "react";
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientHeading } from "@/components/GradientHeading";
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress";
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep";
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep";
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep";
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep";
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep";
import { AutoFillModal } from "@/components/QuoteRequestForm/AutoFillModal";
import { QuoteFormData } from "@/types/quotes";
import { Sparkles, Loader2 } from 'lucide-react'
import { z } from "zod";
export type QuoteRequestSteps = $2;
const serviceStepSchema = z.object({
  serviceType: z.string().min($2);
  specificItem: z.object({ id: z.string() })}),

export function QuoteRequestForm() {
  const router = useRouter($2);
  const { toast } = useToast($2);
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),
  const [isSubmitting, setIsSubmitting] = useState($2);
  const [autoFillLoading, setAutoFillLoading] = useState($2);
  const [autoFillOpen, setAutoFillOpen] = useState($2);
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: "",
    serviceCategory: "",
    specificItem: null,
    projectName: "",
    projectDescription: "",
    startDate: undefined,
    endDate: undefined,
    timeline: "flexible",
    budget: {
      amount: 0,
      type: "fixed"
    },
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      company: ""
    }
  }),
  
  const updateFormData = $2;
      ...data
    }))
  },
  
  const handleNext = () => {
    switch (currentStep) {
      case "service": {
        const result = serviceStepSchema.safeParse($2);
        if (!result.success) {
          toast($2);
          return
        }
        setCurrentStep($2);
        break
      }
      case "details": setCurrentStep($2);
        break,
      case "timeline":
        setCurrentStep($2);
        break,
      case "budget":
        setCurrentStep($2);
        break,
      default: break}
  },
  
  const handleBack = () => {
    switch (currentStep) {
      case "details": setCurrentStep($2);
        break,
      case "timeline":
        setCurrentStep($2);
        break,
      case "budget":
        setCurrentStep($2);
        break,
      case "summary":
        setCurrentStep($2);
        break,
      default: break}
  },
  
  const handleSubmit = async () => {
    setIsSubmitting($2);
    try {
      // In a real application, you would send the data to your backend
      logDebug($2);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
      
      toast($2);
      // Redirect to confirmation page or homepage
      router.push("/")
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
    }
  },

  const handleAutoFill = async (description: string) => {
    setAutoFillLoading($2);
    try {
      const res = await fetch("/api/openai/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectDescription: description})}),
      if (!res.ok) throw new Error($2);
      const { category, itemId, timeline, budget } = await res.json($2);
      updateFormData({
        projectDescription: description,
        serviceType: category,
        serviceCategory: category,
        specificItem: itemId ? { id: itemId, title: "AI Selected Item", category }
          : formData.specificItem,
        timeline: timeline || formData.timeline,
        budget: { ...formData.budget, ...(budget || {}) }}),
      setCurrentStep($2);
      setAutoFillOpen(false)
    } catch (err) {
      logErrorToProduction($2);
      toast({
        title: "Auto-fill Failed",
        description: "We couldn't process your request. Please try again.",
        variant: "destructive"})
    } finally {
      setAutoFillLoading(false)
    }
  },
  
  const renderStepContent = $2;
      case "details":
        return <ProjectDetailsStep formData = $2;
      case "timeline":
        return <TimelineStep formData = $2;
      case "budget":
        return <BudgetStep formData = $2;
      case "summary":
        return <SummaryStep formData = $2;
      default: return null
    }
  },
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <GradientHeading>Request a Quote</GradientHeading>
          <p className="text-zion-slate-light mt-4">
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
          <Button
            size="sm"
            onClick={() => setAutoFillOpen(true)}
            disabled={autoFillLoading}
            className="mt-2"
          >
            {autoFillLoading && (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            )}
            Auto Fill with AI
          </Button>
        </div>
        
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={currentStep} />
            
            <div className="mt-8">
              {renderStepContent()}
            </div>
            
            <div className="flex justify-between mt-8">
              {currentStep !== "service" && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                >
                  Back
                </Button>
              )}
              
              {currentStep !== "summary" ? (
                <Button 
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  Continue
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AutoFillModal
        open={autoFillOpen}
        onOpenChange={setAutoFillOpen}
        onSubmit={handleAutoFill}
        loading={autoFillLoading}
      />
    </div>
  )
}
