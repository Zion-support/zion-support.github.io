

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState} from "react";
import {useToast} from "@/hooks/use-toast";
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {GradientHeading} from "@/components/GradientHeading";
import {StepProgress} from "@/components/QuoteRequestForm/StepProgress";
import {ServiceTypeStep} from "@/components/QuoteRequestForm/ServiceTypeStep";
import {ProjectDetailsStep} from "@/components/QuoteRequestForm/ProjectDetailsStep";
import {TimelineStep} from "@/components/QuoteRequestForm/TimelineStep";
import {BudgetStep} from "@/components/QuoteRequestForm/BudgetStep";
import {SummaryStep} from "@/components/QuoteRequestForm/SummaryStep";
import {QuoteFormData} from "@/types/quotes";
import {Sparkles} from "lucide-react";
=======
import {useState} from "react";"
import {useToast} from "@/hooks/use-toast";"
import {useNavigate} from "react-router-dom";"
import {Button} from "@/components/ui/button";"
import {Card, CardContent} from "@/components/ui/card";"
import {GradientHeading} from "@/components/GradientHeading";"
import {StepProgress} from "@/components/QuoteRequestForm/StepProgress";"
import {ServiceTypeStep} from "@/components/QuoteRequestForm/ServiceTypeStep";"
import {ProjectDetailsStep} from "@/components/QuoteRequestForm/ProjectDetailsStep";"
import {TimelineStep} from "@/components/QuoteRequestForm/TimelineStep";"
import {BudgetStep} from "@/components/QuoteRequestForm/BudgetStep";"
import {SummaryStep} from "@/components/QuoteRequestForm/SummaryStep";"
import {QuoteFormData} from "@/types/quotes";"
import {Sparkles} from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";
<<<<<<< HEAD
export function QuoteRequestForm() {

<<<<<<< HEAD
export function QuoteRequestForm() {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
export function QuoteRequestForm() {;

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
export function QuoteRequestForm() {;
export function QuoteRequestForm() {

export function QuoteRequestForm() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function QuoteRequestForm() {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function QuoteRequestForm() { return null; }
  const { toast } = useToast();"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import { useState } from "react","
import { useToast } from "@/hooks/use-toast","
import { useNavigate } from "react-router-dom","
import { Button } from "@/components/ui/button","
import { Card, CardContent } from "@/components/ui/card","
import { GradientHeading } from "@/components/GradientHeading","
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress","
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep","
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep","
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep","
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep","
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep","
import { QuoteFormData } from "@/types/quotes","
import { Sparkles } from "lucide-react","
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary",

export function QuoteRequestForm() {}
  const navigate = useNavigate(),
  const { toast } = useToast(),"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),
  const [isSubmitting, setIsSubmitting] = useState(false),


  
<<<<<<< HEAD
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: ""
=======

  const [formData, setFormData] = useState<QuoteFormData>({"
    serviceType: """
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    serviceCategory: ""
    specificItem: null"
    projectName: """;
    projectDescription: "";
    startDate: undefined;
    endDate: undefined"
    timeline: "flexible"
    budget: {}
      amount: 0"
      type: "fixed"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD

    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    contactInfo: {
      name: ""
      email: ""
      phone: ""
=======
    contactInfo: {"
      name: """
      email: """
      phone: """
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      company: ""
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }),
  


<<<<<<< HEAD
<<<<<<< HEAD
=======
  });
  }),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({
      ...prev
      ...data
    }))
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  },
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleNext = () => {
    switch (currentStep) {
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
      default:
        break
    }

  const handleBack = () => {
    switch (currentStep) {
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
      default:
        break
    }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



  const updateFormData = (data: Partial<QuoteFormData>) => {}
    setFormData(prev => ({}
      ...prev;
      ...data;
    }))

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  },
  

=======
    }
  }
  },
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }
  }
  },
  
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const handleNext = () => {}
    switch (currentStep) {}
  const [formData, setFormData] = useState<QuoteFormData>({;"
    serviceType: "",;"
    serviceCategory: "",;
    specificItem: null,;"
    projectName: "",;"
    projectDescription: "",;
    startDate: undefined,;
    endDate: undefined,;"
    timeline: "flexible",;
    budget: {;
<<<<<<< HEAD
      amount: 0,;
      type: "fixed"
};
    contactInfo: {;
      name: "",;
      email: "",;
      phone: "",;
=======
      amount: 0,;"
      type: "fixed";
    };
    contactInfo: {;"
      name: "",;"
      email: "",;"
      phone: "",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      company: "";
    }
  });

  const updateFormData = (data: Partial<QuoteFormData>) => {;
    setFormData(prev => ({;
      ...prev,;
      ...data;
    }))
};

  const handleNext = () => {;
    switch (currentStep) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case "service": setCurrentStep("details");
        break;"
      case "details":;"
        setCurrentStep("timeline");
        break;"
      case "timeline":;"
        setCurrentStep("budget");
        break;"
      case "budget":;"
        setCurrentStep("summary");
        break;
      default:;
        break;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  },
  
<<<<<<< HEAD
  const handleBack = () => {
    switch (currentStep) {
=======

  const handleBack = () => {
=======

  },
  

  const handleBack = () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    switch (currentStep) {  };

  const handleBack = () => {;
    switch (currentStep) {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  };

  const handleBack = () => {;
    switch (currentStep) {;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case "details": setCurrentStep("service");
        break;"
      case "timeline":;"
        setCurrentStep("details");
        break;"
      case "budget":;"
        setCurrentStep("timeline");
        break;"
      case "summary":;"
        setCurrentStep("budget");
        break;
      default:;
        break;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
=======
    }
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleSubmit = async () => {
=======

  const handleSubmit = async () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsSubmitting(true);
    try {}
      // In a real application, you would send the data to your backend"
      console.log("Submitting form data:", formData);
<<<<<<< HEAD
      // Simulate API call  },
  
  const handleSubmit = async () => {
    setIsSubmitting(true),
    
    try {
      // In a real application, you would send the data to your backend
      // // // console.log("Submitting form data:", formData),
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
      
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      toast({
        title: "Quote Request Submitted"
=======
      // Simulate API call;
      toast({"
        title: "Quote Request Submitted""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: "We've received your request and will get back to you soon."})
      // Redirect to confirmation page or homepage"
      navigate("/")
<<<<<<< HEAD
    } catch (error) {
      toast({
        title: "Submission Failed"
        description: "There was an error submitting your request. Please try again."
        variant: "destructive"})    } finally {
=======
    } catch (error) {}
      toast({"
        title: "Submission Failed""
        description: "There was an error submitting your request. Please try again.""
        variant: "destructive"})
'
import { useState } from './react';'
import { use_toast } from '@/hooks / use - toast';'
import { use_navigate } from './react-router-dom';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent } from '@/components / ui / card';'
import { GradientHeading } from '@/components / GradientHeading';'
import { StepProgress } from '@/components / QuoteRequestForm / StepProgress';'
import { ServiceTypeStep } from '@/components / QuoteRequestForm / ServiceTypeStep';'
import { ProjectDetailsStep } from '@/components / QuoteRequestForm / ProjectDetailsStep';'
import { TimelineStep } from '@/components / QuoteRequestForm / TimelineStep';'
import { BudgetStep } from '@/components / QuoteRequestForm / BudgetStep';'
import { SummaryStep } from '@/components / QuoteRequestForm / SummaryStep';'
import { QuoteFormData } from '@/types / quotes';'
import { Sparkles } from './lucide-react';"
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";
;
export /**;
 * QuoteRequestForm - Function description;
 */
function QuoteRequestForm() {}
  const navigate = use_navigate ();
  const { toast } = use_toast ();"
  const [current_step, setCurrentStep] = useState < QuoteRequestSteps>("service");
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const [form_data, setFormData] = useState < QuoteFormData>({"
    service_type: "","
    service_category: "",
    specific_item: null,"
    project_name: "","
    project_description: "",
    start_date: undefined,
    end_date: undefined,"
    timeline: "flexible",
    budget: {}
      amount: 0,"
      type: "fixed";
    }
    contact_info: {"
      name: "","
      email: "","
      phone: "","
      company: "";
    }
  });
;
  const updateFormData = (data: Partial < QuoteFormData>) =>: any {}
    setFormData (prev => ({}
      ...prev,
      ...data;
    }));
  }
;
  const handle_next = () =>: any {}
    switch (current_step) {"
      case "service": setCurrentStep ("details");
        break;"
      case "details":;"
        setCurrentStep ("timeline");
        break;"
      case "timeline":;"
        setCurrentStep ("budget");
        break;"
      case "budget":;"
        setCurrentStep ("summary");
        break;
      default:;
        break;
    }
  }
;
  const handle_back = () =>: any {}
    switch (current_step) {"
      case "details": setCurrentStep ("service");
        break;"
      case "timeline":;"
        setCurrentStep ("details");
        break;"
      case "budget":;"
        setCurrentStep ("timeline");
        break;"
      case "summary":;"
        setCurrentStep ("budget");
        break;
      default:;
        break;
    }
  }
;
  const handle_submit = async () => {}
    setIsSubmitting (true);
;
    try {}
      // In a real application, you would send the data to your backend;"
      console.log ("Submitting form data:", form_data);
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1500));
;
      toast ({"
        title: "Quote Request Submitted",'"
        description: "We've received your request and will get back to you soon."}),
      // Redirect to confirmation page or homepage;"
      navigate ("/");
    } catch (error) {}
      toast ({"
        title: "Submission Failed","
        description: "There was an error submitting your request. Please try again.","
        variant: "destructive"});



    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setIsSubmitting (false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }

    } finally {}
      setIsSubmitting(false)
    }
  }
  },
  
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const renderStepContent = () => {
    switch (currentStep) {
      case "service":
<<<<<<< HEAD
=======
=======
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
    }

        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
      case "details":;
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;
      case "timeline":;
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;
      case "budget":;
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;
      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }


  },
  
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const renderStepContent = () => {}
    switch (currentStep) {"
      case "service":

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  };

  const handleSubmit = async () => {;
    setIsSubmitting(true);

    try {;
      // In a real application, you would send the data to your backend;"
      console && console.log("Submitting form data:", formData);

      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({;"
        title: "Quote Request Submitted",;'"
        description: "We've received your request and will get back to you soon."}),;

      // Redirect to confirmation page or homepage;"
      navigate("/");
    } catch (error) {;
      toast({;"
        title: "Submission Failed",;"
        description: "There was an error submitting your request. Please try again.",;"
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "service":;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
=======
  }        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case "details":;
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;"
      case "timeline":;
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;"
      case "budget":;
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;"
      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
=======
  return ("
    <div className="container mx-auto px-4 py-12">"
      <div className="max-w-3xl mx-auto">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-center mb-8">
          <GradientHeading>Request a Quote</GradientHeading>"
          <p className="text-zion-slate-light mt-4">'
            Tell us about your project and we'll create a customized quote for you;
          </p>"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />"
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
        </div>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">"
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={currentStep} />"
            <div className="mt-8">
              {renderStepContent()}
<<<<<<< HEAD
            </div>
            <div className="flex justify-between mt-8">
              {currentStep !== "service" && (                <Button
=======
            </div>"
            <div className="flex justify-between mt-8">"
              {currentStep !== "service" && (



                <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  variant="outline"
                  onClick={handleBack}"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                >
                  Back;
                </Button>
              )}"
              {currentStep !== "summary" ? (
                <Button;
                  onClick={handleNext}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  Continue;
                </Button>
              ) : (
                <Button;
                  onClick={handleSubmit}
                  disabled={isSubmitting}
<<<<<<< HEAD
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { GradientHeading } from "@/components/GradientHeading",;
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress",;
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep",;
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep",;
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep",;
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep",;
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep",;
import { QuoteFormData } from "@/types/quotes",;
import { Sparkles } from "lucide-react",;
=======


"
import { useState } from "react",;"
import { useToast } from "@/hooks/use-toast",;"
import { useNavigate } from "react-router-dom",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent } from "@/components/ui/card",;"
import { GradientHeading } from "@/components/GradientHeading",;"
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress",;"
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep",;"
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep",;"
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep",;"
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep",;"
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep",;"
import { QuoteFormData } from "@/types/quotes",;"
import { Sparkles } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary",;
export function QuoteRequestForm() { return null; }
  const { toast } = useToast(),;"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [formData, setFormData] = useState<QuoteFormData>({;"
    serviceType: "",;"
    serviceCategory: "",;
    specificItem: null,;"
    projectName: "",;"
    projectDescription: "",;
    startDate: undefined,;
    endDate: undefined,;"
    timeline: "flexible",;
    budget: {;
      amount: 0,;"
      type: "fixed";
    },;
    contactInfo: {;"
      name: "",;"
      email: "",;"
      phone: "",;"
      company: "";
    }
  }),;
  const updateFormData = (data: Partial<QuoteFormData>) => {;
    setFormData(prev => ({;
      ...prev,;
      ...data;
    }));
  },;
  const handleNext = () => {;
    switch (currentStep) {;"
      case "service": setCurrentStep("details"),;
        break,;"
      case "details":;"
        setCurrentStep("timeline"),;
        break,;"
      case "timeline":;"
        setCurrentStep("budget"),;
        break,;"
      case "budget":;"
        setCurrentStep("summary"),;
        break,;
      default:;
        break;
    }
  },;
  const handleBack = () => {;
    switch (currentStep) {;"
      case "details": setCurrentStep("service"),;
        break,;"
      case "timeline":;"
        setCurrentStep("details"),;
        break,;"
      case "budget":;"
        setCurrentStep("timeline"),;
        break,;"
      case "summary":;"
        setCurrentStep("budget"),;
        break,;
      default:;
        break;"
      case "timeline":"
        setCurrentStep("budget");
        break;"
      case "budget":"
        setCurrentStep("summary");
        break;
      default:
        break;
    }
  },;
  const handleSubmit = async () => {;
    setIsSubmitting(true),;
    try {;
      // In a real application, you would send the data to your backend;"
      // // // console.log("Submitting form data:", formData),;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500)),;
      toast({;"
        title: "Quote Request Submitted",;'"
        description: "We've received your request and will get back to you soon."}),;
      // Redirect to confirmation page or homepage;"
      navigate("/");
    } catch (error) {;
      toast({;"
        title: "Submission Failed",;"
        description: "There was an error submitting your request. Please try again.",;"
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  },;
  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "service":;
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />,;"
      case "details":;
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />,;"
      case "timeline":;
        return <TimelineStep formData={formData} updateFormData={updateFormData} />,;"
      case "budget":;
        return <BudgetStep formData={formData} updateFormData={updateFormData} />,;
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;"
      case "details":;
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;"
      case "timeline":;
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;"
      case "budget":;
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;"
      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }

  };

  return (

<<<<<<< HEAD
import { useState } from "react",;
import { useToast } from "@/hooks/use-toast",;
import { useNavigate } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent } from "@/components/ui/card",;
import { GradientHeading } from "@/components/GradientHeading",;
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress",;
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep",;
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep",;
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep",;
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep",;
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep",;
import { QuoteFormData } from "@/types/quotes",;
import { Sparkles } from "lucide-react",;
;
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary",;
;
export function QuoteRequestForm() {;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  ;
  const [formData, setFormData] = useState<QuoteFormData>({;
    serviceType:"",;
    serviceCategory:"",;
    specificItem:null,;
    projectName:"",;
    projectDescription:"",;
    startDate:undefined,;
    endDate:undefined,;
    timeline:"flexible",;
    budget:{;
      amount:0,;
      type:"fixed";
    },;
    contactInfo:{;
      name:"",;
      email:"",;
      phone:"",;
      company:"";
    }
  }),;
  ;
  const updateFormData = (data:Partial<QuoteFormData>) => {;
    setFormData(prev => ({;
      ...prev,;
      ...data;
    })),;
  },;
  ;
  const handleNext = () => {;
    switch (currentStep) {;
      case "service":setCurrentStep("details"),;
        break,;
      case "details":;
        setCurrentStep("timeline"),;
        break,;
      case "timeline":;
        setCurrentStep("budget"),;
        break,;
      case "budget":;
        setCurrentStep("summary"),;
        break,;
      default:;
        break;
    }
  },;
  ;
  const handleBack = () => {;
    switch (currentStep) {;
      case "details":setCurrentStep("service"),;
        break,;
      case "timeline":;
        setCurrentStep("details"),;
        break,;
      case "budget":;
        setCurrentStep("timeline"),;
        break,;
      case "summary":;
        setCurrentStep("budget"),;
        break,;
      default:;
        break;
    }
  },;
  ;
  const handleSubmit = async () => {;
    setIsSubmitting(true),;
    ;
    try {;
      // In a real application, you would send the data to your backend;
      // // // console.log("Submitting form data:", formData),;
      ;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500)),;
      ;
      toast({;
        title:"Quote Request Submitted",;
        description:"We've received your request and will get back to you soon."}),;
      ;
      // Redirect to confirmation page or homepage;
      navigate("/"),;
    } catch (error) {;
      toast({;
        title:"Submission Failed",;
        description:"There was an error submitting your request. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "service":;
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />,;
      case "details":;
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />,;
      case "timeline":;
        return <TimelineStep formData={formData} updateFormData={updateFormData} />,;
      case "budget":;
        return <BudgetStep formData={formData} updateFormData={updateFormData} />,;
      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />,;
      default:return null;
    }
  },;
  ;
  return (;
  };
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className="container mx-auto px-4 py-12">;
      <div className="max-w-3xl mx-auto">;
=======

"
    <div className="container mx-auto px-4 py-12">;"
      <div className="max-w-3xl mx-auto">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="text-center mb-8">;
          <GradientHeading>Request a Quote</GradientHeading>;"
          <p className="text-zion-slate-light mt-4">;'
            Tell us about your project and we'll create a customized quote for you;
          </p>;"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">;"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />;"
            <span className="text-sm text-white">AI-powered matching</span>;
          </div>;
        </div>;
<<<<<<< HEAD
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;
=======



"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <CardContent className="px-6 py-8">;
            <StepProgress currentStep={currentStep} />;
"
            <div className="mt-8">;
              {renderStepContent()}
            </div>;
"
            <div className="flex justify-between mt-8">;"
              {currentStep !== "service" && (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <Button
=======

                <Button"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  variant="outline"
                  onClick={handleBack}"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
                  Back;
                </Button>;
              )}
"
              {currentStep !== "summary" ? (;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <Button
                  onClick={handleNext}
=======
                <Button;
                  onClick={handleNext}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                  Continue;
                </Button>;
              ) : (;
<<<<<<< HEAD
                <Button
=======



                <Button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  onClick={handleSubmit}
                  disabled={isSubmitting}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
<<<<<<< HEAD
              )}            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
;
    </div>);
}}
=======
              )}

;
  const renderStepContent = () =>: any {}
    switch (current_step) {"
      case "service":;
        return <ServiceTypeStep form_data={form_data} updateFormData={updateFormData} />;"
      case "details":;
        return <ProjectDetailsStep form_data={form_data} updateFormData={updateFormData} />;"
      case "timeline":;
        return <TimelineStep form_data={form_data} updateFormData={updateFormData} />;"
      case "budget":;
        return <BudgetStep form_data={form_data} updateFormData={updateFormData} />;"
      case "summary":;
        return <SummaryStep form_data={form_data} updateFormData={updateFormData} />;
      default: return null;
    }
  }
;
  return ("
    <div className="container mx - auto px - 4 py - 12">;"
      <div className="max - w-3xl mx - auto">;"
        <div className="text - center mb - 8">;
          <GradientHeading > Request a Quote</GradientHeading>;"
          <p className="text - zion - slate - light mt - 4">;'
            Tell us about your project and we'll create a customized quote for you;
          </p>;"
          <div className="inline - flex items - center bg - zion - blue - dark py - 1 px - 3 rounded - full mt - 3 border border - zion - purple / 20">;"
            <Sparkles className="h - 4 w - 4 text - zion - cyan mr - 1" />;"
            <span className="text - sm text - white">AI - powered matching</span>;
          </div>;
        </div>;"
        <Card className="bg - zion - blue - dark border border - zion - blue - light mb - 8">;"
          <CardContent className="px - 6 py - 8">;
            <StepProgress current_step={current_step} />;"
            <div className="mt - 8">;
              {renderStepContent ()}
            </div>;"
            <div className="flex justify - between mt - 8">;"
              {current_step !== "service" && (
                <Button;"
                  variant="outline";
                  on_click={handle_back}"
                  className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
                >;
                  Back;
                </Button>)}"
              {current_step !== "summary" ? (
                <Button;
                  on_click={handle_next}"
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                >;
                  Continue;
                </Button>) : (
                <Button;
                  on_click={handle_submit}
                  disabled={is_submitting}"
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                >;"
                  {is_submitting ? "Submitting..." : "Submit Request"}
                </Button>)}



            </div>;
          </CardContent>;
        </Card>;
      </div>;






}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </div>);
    </div>;
  ),; export function QuoteRequestForm () {};
  const navigate = useNavigate ();
const {}
  toast;
}= useToast ();"
const [currentStep, setCurrentStep] = useState<QuoteRequestSteps> ("service");
const [isSubmitting, setIsSubmitting] = useState (false);
break;"
case "timeline": setCurrentStep ("budget");
break;"
case "budget": setCurrentStep ("summary");
break;
break;"
case "budget": setCurrentStep ("timeline");
break;"
case "summary": setCurrentStep ("budget");
break;
toast ({}
}finally {}
  setIsSubmitting (false) 
}
};
const renderStepContent = () => {}
  switch (currentStep) {}
  default: return null;
}
};'"
return (<div className="container mx-auto px-4 py-12" > <div className="max-w-3xl mx-auto" > <div className="text-center mb-8" > <GradientHeading>Request a Quote</GradientHeading> <p className="text-zion-slate-light mt-4" > Tell us about your project and we'll create a customized quote for you </p> <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20" > <Sparkles className="h-4 w-4 text-zion-cyan mr-1" /> <span className="text-sm text-white" >AI-powered matching</span> </div> </div> <Button variant="outline" onClick= {}
  handleBack "
}className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > Back </Button>) 
}<Button onClick= {}
  handleNext "
}className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Continue </Button>) : (<Button </Button>) 
}</div> </CardContent> </Card> </div> </div>) 
}
    </div>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
    </div>);
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
