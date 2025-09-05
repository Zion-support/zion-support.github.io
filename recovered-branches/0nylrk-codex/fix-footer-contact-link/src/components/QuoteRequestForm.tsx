
<<<<<<< HEAD
import { useState } from "react",
import { useToast } from "@/hooks/use-toast",
import { useNavigate } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { GradientHeading } from "@/components/GradientHeading",
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress",
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep",
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep",
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep",
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep",
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep",
import { QuoteFormData } from "@/types/quotes",
import { Sparkles } from "lucide-react",
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary",

export function QuoteRequestForm() {
  const navigate = useNavigate(),
  const { toast } = useToast(),
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),
  const [isSubmitting, setIsSubmitting] = useState(false),
=======
import { useState } from &quot;react&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { StepProgress } from &quot;@/components/QuoteRequestForm/StepProgress&quot;;
import { ServiceTypeStep } from &quot;@/components/QuoteRequestForm/ServiceTypeStep&quot;;
import { ProjectDetailsStep } from &quot;@/components/QuoteRequestForm/ProjectDetailsStep&quot;;
import { TimelineStep } from &quot;@/components/QuoteRequestForm/TimelineStep&quot;;
import { BudgetStep } from &quot;@/components/QuoteRequestForm/BudgetStep&quot;;
import { SummaryStep } from &quot;@/components/QuoteRequestForm/SummaryStep&quot;;
import { QuoteFormData } from &quot;@/types/quotes&quot;;
import { Sparkles } from &quot;lucide-react&quot;;

export type QuoteRequestSteps = &quot;service&quot; | &quot;details&quot; | &quot;timeline&quot; | &quot;budget&quot; | &quot;summary&quot;;

export function QuoteRequestForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>(&quot;service&quot;);
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
<<<<<<< HEAD
      case "service": setCurrentStep("details"),
        break,
      case "details":
        setCurrentStep("timeline"),
        break,
      case "timeline":
        setCurrentStep("budget"),
        break,
      case "budget":
        setCurrentStep("summary"),
        break,
=======
      case &quot;service&quot;:
        setCurrentStep(&quot;details&quot;);
        break;
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
  
  const handleBack = () => {
    switch (currentStep) {
<<<<<<< HEAD
      case "details": setCurrentStep("service"),
        break,
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
        break
    }
  },
  
  const handleSubmit = async () => {
    setIsSubmitting(true),
    
    try {
      // In a real application, you would send the data to your backend
<<<<<<< HEAD
      // // // console.log("Submitting form data:", formData),
=======
      // console.log(&quot;Submitting form data:&quot;, formData);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
      
      toast({
<<<<<<< HEAD
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you soon."}),
      
      // Redirect to confirmation page or homepage
      navigate("/")
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Quote Request Submitted&quot;,
        description: &quot;We've received your request and will get back to you soon.&quot;});
      
      // Redirect to confirmation page or homepage
      navigate(&quot;/&quot;);
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
      default:
        return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  return (
    <div className=&quot;container mx-auto px-4 py-12&quot;>
      <div className=&quot;max-w-3xl mx-auto&quot;>
        <div className=&quot;text-center mb-8&quot;>
          <GradientHeading>Request a Quote</GradientHeading>
          <p className=&quot;text-zion-slate-light mt-4&quot;>
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className=&quot;inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20&quot;>
            <Sparkles className=&quot;h-4 w-4 text-zion-cyan mr-1&quot; />
            <span className=&quot;text-sm text-white&quot;>AI-powered matching</span>
          </div>
        </div>
        
        <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light mb-8&quot;>
          <CardContent className=&quot;px-6 py-8&quot;>
            <StepProgress currentStep={currentStep} />
            
            <div className=&quot;mt-8&quot;>
              {renderStepContent()}
            </div>
            
            <div className=&quot;flex justify-between mt-8&quot;>
              {currentStep !== &quot;service&quot; && (
                <Button
                  variant=&quot;outline&quot;
                  onClick={handleBack}
                  className=&quot;border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
                >
                  Back
                </Button>
              )}
              
              {currentStep !== &quot;summary&quot; ? (
                <Button 
                  onClick={handleNext}
                  className=&quot;ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                >
                  Continue
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className=&quot;ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
                >
                  {isSubmitting ? &quot;Submitting...&quot; : &quot;Submit Request&quot;}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
