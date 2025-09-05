
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { logDebug, logErrorToProduction } from '@/utils/productionLogger',
import { useToast } from "@/hooks/use-toast",
import { useRouter } from 'next/router',
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { GradientHeading } from "@/components/GradientHeading",
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress",
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep",
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep",
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep",
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep",
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep",
import { AutoFillModal } from "@/components/QuoteRequestForm/AutoFillModal",
import { QuoteFormData } from "@/types/quotes",
import { Sparkles, Loader2 } from 'lucide-react'
import { z } from "zod",
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary",
=======
import { useState } from &quot;react&quot;;
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useRouter } from 'next/router';
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { StepProgress } from &quot;@/components/QuoteRequestForm/StepProgress&quot;;
import { ServiceTypeStep } from &quot;@/components/QuoteRequestForm/ServiceTypeStep&quot;;
import { ProjectDetailsStep } from &quot;@/components/QuoteRequestForm/ProjectDetailsStep&quot;;
import { TimelineStep } from &quot;@/components/QuoteRequestForm/TimelineStep&quot;;
import { BudgetStep } from &quot;@/components/QuoteRequestForm/BudgetStep&quot;;
import { SummaryStep } from &quot;@/components/QuoteRequestForm/SummaryStep&quot;;
import { AutoFillModal } from &quot;@/components/QuoteRequestForm/AutoFillModal&quot;;
import { QuoteFormData } from &quot;@/types/quotes&quot;;
import { Sparkles, Loader2 } from 'lucide-react'
import { z } from &quot;zod&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type QuoteRequestSteps = &quot;service&quot; | &quot;details&quot; | &quot;timeline&quot; | &quot;budget&quot; | &quot;summary&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
const serviceStepSchema = z.object({
  serviceType: z.string().min(1),
  specificItem: z.object({ id: z.string() })}),

export function QuoteRequestForm() {
<<<<<<< HEAD
  const router = useRouter(),
  const { toast } = useToast(),
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [autoFillLoading, setAutoFillLoading] = useState(false),
  const [autoFillOpen, setAutoFillOpen] = useState(false),
=======
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>(&quot;service&quot;);
=======
const _serviceStepSchema = z.object({_serviceType: z.string().min(1), _specificItem: z.object({ id: z.string()})});

export function QuoteRequestForm() {_const _router = useRouter();
  const { toast} = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoFillLoading, setAutoFillLoading] = useState(false);
  const [autoFillOpen, setAutoFillOpen] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: "&quot;,
    serviceCategory: "&quot;,
    specificItem: null,
    projectName: "&quot;,
    projectDescription: "&quot;,
    startDate: undefined,
    endDate: undefined,
    timeline: &quot;flexible&quot;,
    budget: {
      amount: 0,
      type: &quot;fixed&quot;
    },
    contactInfo: {
      name: "&quot;,
      email: "&quot;,
      phone: "&quot;,
      company: "&quot;
    }
  }),
  
  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }))
  },
  
  const handleNext = () => {
    switch (currentStep) {
      case &quot;service&quot;: {
        const result = serviceStepSchema.safeParse({
          serviceType: formData.serviceType,
          specificItem: formData.specificItem}),
        if (!result.success) {
          toast({
<<<<<<< HEAD
            title: "Service Required",
            description: "Please select a service before continuing.",
            variant: "destructive"}),
          return
        }
        setCurrentStep("details"),
        break
      }
      case "details": setCurrentStep("timeline"),
        break,
      case "timeline":
        setCurrentStep("budget"),
        break,
      case "budget":
        setCurrentStep("summary"),
        break,
=======
            title: &quot;Service Required&quot;,
            description: &quot;Please select a service before continuing.&quot;,
            variant: &quot;destructive&quot;});
=======
  const [formData, setFormData] = useState<QuoteFormData>({_serviceType: "", _serviceCategory: "", _specificItem: null, _projectName: "", _projectDescription: "", _startDate: undefined, _endDate: undefined, _timeline: "flexible", _budget: {
      amount: 0, _type: "fixed"},
    contactInfo: {_name: "", _email: "", _phone: "", _company: ""}
  });
  
  const _updateFormData = (_data: Partial<QuoteFormData>) => {_setFormData(prev => ({
      ...prev, _...data}));
  };
  
  const _handleNext = () => {_switch (currentStep) {
      case "service": {
        const _result = serviceStepSchema.safeParse({
          serviceType: formData.serviceType, _specificItem: formData.specificItem});
        if (!result.success) {_toast({
            title: "Service Required", _description: "Please select a service before continuing.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          return;
        }
        setCurrentStep(&quot;details&quot;);
        break;
      }
      case &quot;details&quot;:
        setCurrentStep(&quot;timeline&quot;);
        break;
      case &quot;timeline&quot;:
        setCurrentStep(&quot;budget&quot;);
        break;
      case &quot;budget&quot;:
        setCurrentStep(&quot;summary&quot;);
        break;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      default:
        break
    }
  },
  
<<<<<<< HEAD
  const handleBack = () => {
    switch (currentStep) {
<<<<<<< HEAD
      case "details": setCurrentStep("service"),
        break,
=======
  const _handleBack = () => {_switch (currentStep) {
      case "details":
        setCurrentStep("service");
        break;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      case "timeline":
        setCurrentStep("details"),
        break,
      case "budget":
        setCurrentStep("timeline"),
        break,
      case "summary":
        setCurrentStep("budget"),
        break,
=======
      case &quot;details&quot;:
        setCurrentStep(&quot;service&quot;);
        break;
      case &quot;timeline&quot;:
        setCurrentStep(&quot;details&quot;);
        break;
      case &quot;budget&quot;:
        setCurrentStep(&quot;timeline&quot;);
        break;
      case &quot;summary&quot;:
        setCurrentStep(&quot;budget&quot;);
        break;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      default:
<<<<<<< HEAD
        break
    }
  },
  
  const handleSubmit = async () => {
    setIsSubmitting(true),
    
    try {
      // In a real application, you would send the data to your backend
<<<<<<< HEAD
      logDebug("Submitting form data:", { data: formData }),
=======
      logDebug(&quot;Submitting form data:&quot;, { data: formData });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        break;}
  };
  
  const _handleSubmit = async () => {_setIsSubmitting(true);
    
    try {
      // In a real application, _you would send the data to your backend
      logDebug("Submitting form data:", _{ data: formData});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
      
<<<<<<< HEAD
      toast({
<<<<<<< HEAD
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you soon."}),
      
      // Redirect to confirmation page or homepage
      router.push("/")
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Quote Request Submitted&quot;,
        description: &quot;We've received your request and will get back to you soon.&quot;});
      
      // Redirect to confirmation page or homepage
      router.push(&quot;/&quot;);
    } catch (error) {
      toast({
        title: &quot;Submission Failed&quot;,
        description: &quot;There was an error submitting your request. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },

  const handleAutoFill = async (description: string) => {
    setAutoFillLoading(true),
    try {
<<<<<<< HEAD
      const res = await fetch("/api/openai/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectDescription: description })}),
      if (!res.ok) throw new Error("Request failed"),
      const { category, itemId, timeline, budget } = await res.json(),
=======
      const res = await fetch(&quot;/api/openai/match&quot;, {
        method: &quot;POST&quot;,
        headers: { &quot;Content-Type&quot;: &quot;application/json&quot; },
        body: JSON.stringify({ projectDescription: description })});
      if (!res.ok) throw new Error(&quot;Request failed&quot;);
      const { category, itemId, timeline, budget } = await res.json();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      updateFormData({
        projectDescription: description,
        serviceType: category,
        serviceCategory: category,
        specificItem: itemId
          ? { id: itemId, title: &quot;AI Selected Item&quot;, category }
          : formData.specificItem,
        timeline: timeline || formData.timeline,
<<<<<<< HEAD
        budget: { ...formData.budget, ...(budget || {}) }}),
      setCurrentStep("summary"),
      setAutoFillOpen(false)
    } catch (err) {
      logErrorToProduction("Auto-fill API error", err as Error, { component: 'QuoteRequestForm', projectDescription: description }),
      toast({
        title: "Auto-fill Failed",
        description: "We couldn't process your request. Please try again.",
        variant: "destructive"})
=======
        budget: { ...formData.budget, ...(budget || {}) }});
      setCurrentStep(&quot;summary&quot;);
      setAutoFillOpen(false);
    } catch (err) {
      logErrorToProduction(&quot;Auto-fill API error&quot;, err as Error, { component: 'QuoteRequestForm', projectDescription: description });
      toast({
        title: &quot;Auto-fill Failed&quot;,
        description: &quot;We couldn't process your request. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setAutoFillLoading(false)
    }
  },
  
  const renderStepContent = () => {
    switch (currentStep) {
<<<<<<< HEAD
      case "service":
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />,
      case "details":
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />,
      case "timeline":
        return <TimelineStep formData={formData} updateFormData={updateFormData} />,
      case "budget":
        return <BudgetStep formData={formData} updateFormData={updateFormData} />,
      case "summary":
        return <SummaryStep formData={formData} updateFormData={updateFormData} />,
      default: return null
=======
      case &quot;service&quot;:
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
      case &quot;details&quot;:
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;
      case &quot;timeline&quot;:
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;
      case &quot;budget&quot;:
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;
      case &quot;summary&quot;:
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
=======
      toast({_title: "Quote Request Submitted", _description: "We've received your request and will get back to you soon."});
      
      // Redirect to confirmation page or homepage
      router.push("/");
    } catch (error) {_toast({
        title: "Submission Failed", _description: "There was an error submitting your request. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  const _handleAutoFill = async (_description: string) => {_setAutoFillLoading(true);
    try {
      const _res = await fetch("/api/openai/match", _{
        method: "POST", _headers: { "Content-Type": "application/json"},
        body: JSON.stringify({_projectDescription: description})});
      if (!res.ok) throw new Error("Request failed");
      const {_category, _itemId, _timeline, _budget} = await res.json();
      updateFormData({_projectDescription: description, _serviceType: category, _serviceCategory: category, _specificItem: itemId
          ? { id: itemId, _title: "AI Selected Item", _category}
          : formData.specificItem,
        timeline: timeline || formData.timeline,
        budget: {_...formData.budget, _...(budget || {}) }});
      setCurrentStep("summary");
      setAutoFillOpen(false);
    } catch (err) {_logErrorToProduction("Auto-fill API error", _err as Error, _{ component: 'QuoteRequestForm', _projectDescription: description});
      toast({_title: "Auto-fill Failed", _description: "We couldn't process your request. Please try again.", _variant: "destructive"});
    } finally {_setAutoFillLoading(false);}
  };
  
  const _renderStepContent = () => {_switch (currentStep) {
      case "service":
        return <ServiceTypeStep formData={formData} updateFormData={_updateFormData} />;
      case "details":
        return <ProjectDetailsStep formData={_formData} updateFormData={_updateFormData} />;
      case "timeline":
        return <TimelineStep formData={_formData} updateFormData={_updateFormData} />;
      case "budget":
        return <BudgetStep formData={_formData} updateFormData={_updateFormData} />;
      case "summary":
        return <SummaryStep formData={_formData} updateFormData={_updateFormData} />;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      default:
        return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
<<<<<<< HEAD
  return (
    <div className=&quot;container mx-auto px-4 py-12&quot;>
      <div className=&quot;max-w-3xl mx-auto&quot;>
        <div className=&quot;text-center mb-8 space-y-3&quot;>
=======
  return (_<div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <GradientHeading>Request a Quote</GradientHeading>
          <p className=&quot;text-zion-slate-light mt-4&quot;>
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className=&quot;inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20&quot;>
            <Sparkles className=&quot;h-4 w-4 text-zion-cyan mr-1&quot; />
            <span className=&quot;text-sm text-white&quot;>AI-powered matching</span>
          </div>
          <Button
<<<<<<< HEAD
            size=&quot;sm&quot;
            onClick={() => setAutoFillOpen(true)}
            disabled={autoFillLoading}
            className=&quot;mt-2&quot;
          >
            {autoFillLoading && (
              <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
=======
            size="sm"
            onClick={_() => setAutoFillOpen(true)}
            disabled={_autoFillLoading}
            className="mt-2"
          >
            {_autoFillLoading && (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            )}
            Auto Fill with AI
          </Button>
        </div>
        
<<<<<<< HEAD
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light mb-8&quot;>
          <CardContent className=&quot;px-6 py-8&quot;>
            <StepProgress currentStep={currentStep} />
            
            <div className=&quot;mt-8&quot;>
              {renderStepContent()}
            </div>
            
            <div className=&quot;flex justify-between mt-8&quot;>
              {currentStep !== &quot;service&quot; && (
=======
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={_currentStep} />
            
            <div className="mt-8">
              {_renderStepContent()}
            </div>
            
            <div className="flex justify-between mt-8">
              {_currentStep !== "service" && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Button
                  variant=&quot;outline&quot;
                  onClick={handleBack}
                  className=&quot;border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
                >
                  Back
                </Button>
              )}
              
<<<<<<< HEAD
              {currentStep !== &quot;summary&quot; ? (
=======
              {_currentStep !== "summary" ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Button 
                  onClick={handleNext}
                  className=&quot;ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                >
                  Continue
                </Button>
              ) : (
                <Button 
<<<<<<< HEAD
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className=&quot;ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                >
                  {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Request&quot;}
=======
                  onClick={_handleSubmit}
                  disabled={_isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  {_isSubmitting ? "Submitting..." : "Submit Request"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AutoFillModal
        open={_autoFillOpen}
        onOpenChange={_setAutoFillOpen}
        onSubmit={_handleAutoFill}
        loading={_autoFillLoading}
      />
    </div>
  )
}
