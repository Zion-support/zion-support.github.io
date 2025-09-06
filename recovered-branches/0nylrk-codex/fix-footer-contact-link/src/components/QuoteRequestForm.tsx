
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


export function QuoteRequestForm() {;



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export function QuoteRequestForm() {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function QuoteRequestForm() {

export function QuoteRequestForm() {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: ""
    serviceCategory: ""
    specificItem: null
    projectName: ""
    projectDescription: ""
    startDate: undefined
    endDate: undefined
    timeline: "flexible"
    budget: {
      amount: 0
      type: "fixed"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

    },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    contactInfo: {
      name: ""
      email: ""
      phone: ""
      company: ""
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

  }),
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  });
  }),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======

  },
  


  const handleNext = () => {
    switch (currentStep) {
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
  const [formData, setFormData] = useState<QuoteFormData>({;
    serviceType: "",;
    serviceCategory: "",;
    specificItem: null,;
    projectName: "",;
    projectDescription: "",;
    startDate: undefined,;
    endDate: undefined,;
    timeline: "flexible",;
    budget: {;
      amount: 0,;
      type: "fixed";
    };
    contactInfo: {;
      name: "",;
      email: "",;
      phone: "",;
      company: "";
    }
  });
  const updateFormData = (data: Partial<QuoteFormData>) => {;
    setFormData(prev => ({;
      ...prev,;
      ...data;
    }));
  };
  const handleNext = () => {;
    switch (currentStep) {;
      case "service": setCurrentStep("details");
        break;
      case "details":;
        setCurrentStep("timeline");
        break;
      case "timeline":;
        setCurrentStep("budget");
        break;
      case "budget":;
        setCurrentStep("summary");
        break;
      default:;
        break;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx


  },
  


  const handleBack = () => {
    switch (currentStep) {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
  };
  const handleBack = () => {;
    switch (currentStep) {;
      case "details": setCurrentStep("service");
        break;
      case "timeline":;
        setCurrentStep("details");
        break;
      case "budget":;
        setCurrentStep("timeline");
        break;
      case "summary":;
        setCurrentStep("budget");
        break;
      default:;
        break;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // In a real application, you would send the data to your backend
      console.log("Submitting form data:", formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },
  
  const handleSubmit = async () => {
    setIsSubmitting(true),
    
    try {
      // In a real application, you would send the data to your backend
      // // // console.log("Submitting form data:", formData),
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
      
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Quote Request Submitted"
        description: "We've received your request and will get back to you soon."})
      // Redirect to confirmation page or homepage
      navigate("/")
    } catch (error) {
      toast({
        title: "Submission Failed"
        description: "There was an error submitting your request. Please try again."
        variant: "destructive"})
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
import { useState } from './react';
import { use_toast } from '@/hooks / use - toast';
import { use_navigate } from './react-router-dom';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { GradientHeading } from '@/components / GradientHeading';
import { StepProgress } from '@/components / QuoteRequestForm / StepProgress';
import { ServiceTypeStep } from '@/components / QuoteRequestForm / ServiceTypeStep';
import { ProjectDetailsStep } from '@/components / QuoteRequestForm / ProjectDetailsStep';
import { TimelineStep } from '@/components / QuoteRequestForm / TimelineStep';
import { BudgetStep } from '@/components / QuoteRequestForm / BudgetStep';
import { SummaryStep } from '@/components / QuoteRequestForm / SummaryStep';
import { QuoteFormData } from '@/types / quotes';
import { Sparkles } from './lucide-react';
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";
;
export /**
 * QuoteRequestForm - Function description
 */
function QuoteRequestForm() {
  const navigate = use_navigate ();
  const { toast } = use_toast ();
  const [current_step, setCurrentStep] = useState < QuoteRequestSteps>("service");
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const [form_data, setFormData] = useState < QuoteFormData>({
    service_type: "",
    service_category: "",
    specific_item: null,
    project_name: "",
    project_description: "",
    start_date: undefined,
    end_date: undefined,
    timeline: "flexible",
    budget: {
      amount: 0,
      type: "fixed";
    }
    contact_info: {
      name: "",
      email: "",
      phone: "",
      company: "";
    }
  });
;
  const updateFormData = (data: Partial < QuoteFormData>) =>: any {
    setFormData (prev => ({
      ...prev,
      ...data;
    }));
  }
;
  const handle_next = () =>: any {
    switch (current_step) {
      case "service": setCurrentStep ("details");
        break;
      case "details":;
        setCurrentStep ("timeline");
        break;
      case "timeline":;
        setCurrentStep ("budget");
        break;
      case "budget":;
        setCurrentStep ("summary");
        break;
      default:;
        break;
    }
  }
;
  const handle_back = () =>: any {
    switch (current_step) {
      case "details": setCurrentStep ("service");
        break;
      case "timeline":;
        setCurrentStep ("details");
        break;
      case "budget":;
        setCurrentStep ("timeline");
        break;
      case "summary":;
        setCurrentStep ("budget");
        break;
      default:;
        break;
    }
  }
;
  const handle_submit = async () => {
    setIsSubmitting (true);
;
    try {
      // In a real application, you would send the data to your backend;
      console.log ("Submitting form data:", form_data);
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1500));
;
      toast ({
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you soon."}),
      // Redirect to confirmation page or homepage;
      navigate ("/");
    } catch (error) {
      toast ({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"});
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx

    } finally {
      setIsSubmitting(false)
    }

<<<<<<< HEAD
=======
    } finally {
      setIsSubmitting(false)
    }
  }
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const renderStepContent = () => {
    switch (currentStep) {
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
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  },
  
<<<<<<< HEAD
<<<<<<< HEAD


  const renderStepContent = () => {
    switch (currentStep) {
      case "service":
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
  };
  const handleSubmit = async () => {;
    setIsSubmitting(true);
    try {;
      // In a real application, you would send the data to your backend;
      console && console.log("Submitting form data:", formData);
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({;
        title: "Quote Request Submitted",;
        description: "We've received your request and will get back to you soon."}),;
      // Redirect to confirmation page or homepage;
      navigate("/");
    } catch (error) {;
      toast({;
        title: "Submission Failed",;
        description: "There was an error submitting your request. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "service":;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx


  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <GradientHeading>Request a Quote</GradientHeading>
          <p className="text-zion-slate-light mt-4">
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
        </div>
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={currentStep} />
            <div className="mt-8">
              {renderStepContent()}
            </div>
            <div className="flex justify-between mt-8">
              {currentStep !== "service" && (
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary",;
export function QuoteRequestForm() {;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [formData, setFormData] = useState<QuoteFormData>({;
    serviceType: "",;
    serviceCategory: "",;
    specificItem: null,;
    projectName: "",;
    projectDescription: "",;
    startDate: undefined,;
    endDate: undefined,;
    timeline: "flexible",;
    budget: {;
      amount: 0,;
      type: "fixed";
    },;
    contactInfo: {;
      name: "",;
      email: "",;
      phone: "",;
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
    switch (currentStep) {;
      case "service": setCurrentStep("details"),;
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
  const handleBack = () => {;
    switch (currentStep) {;
      case "details": setCurrentStep("service"),;
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
      case "timeline":
        setCurrentStep("budget");
        break;
      case "budget":
        setCurrentStep("summary");
        break;
      default:
        break
    }
  },;
  const handleSubmit = async () => {;
    setIsSubmitting(true),;
    try {;
      // In a real application, you would send the data to your backend;
      // // // console.log("Submitting form data:", formData),;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500)),;
      toast({;
        title: "Quote Request Submitted",;
        description: "We've received your request and will get back to you soon."}),;
      // Redirect to confirmation page or homepage;
      navigate("/");
    } catch (error) {;
      toast({;
        title: "Submission Failed",;
        description: "There was an error submitting your request. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  },;
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
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
  };
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="container mx-auto px-4 py-12">;
      <div className="max-w-3xl mx-auto">;
        <div className="text-center mb-8">;
          <GradientHeading>Request a Quote</GradientHeading>;
          <p className="text-zion-slate-light mt-4">;
            Tell us about your project and we'll create a customized quote for you;
          </p>;
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">;
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />;
            <span className="text-sm text-white">AI-powered matching</span>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;
          <CardContent className="px-6 py-8">;
            <StepProgress currentStep={currentStep} />;
            <div className="mt-8">;
              {renderStepContent()}
            </div>;
            <div className="flex justify-between mt-8">;
              {currentStep !== "service" && (;
<<<<<<< HEAD
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
                  Back;
                </Button>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
              {currentStep !== "summary" ? (;
                <Button
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                  Continue;
                </Button>;
              ) : (;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
              )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
;
  const renderStepContent = () =>: any {
    switch (current_step) {
      case "service":;
        return <ServiceTypeStep form_data={form_data} updateFormData={updateFormData} />;
      case "details":;
        return <ProjectDetailsStep form_data={form_data} updateFormData={updateFormData} />;
      case "timeline":;
        return <TimelineStep form_data={form_data} updateFormData={updateFormData} />;
      case "budget":;
        return <BudgetStep form_data={form_data} updateFormData={updateFormData} />;
      case "summary":;
        return <SummaryStep form_data={form_data} updateFormData={updateFormData} />;
      default: return null;
    }
  }
;
  return (
    <div className="container mx - auto px - 4 py - 12">;
      <div className="max - w-3xl mx - auto">;
        <div className="text - center mb - 8">;
          <GradientHeading > Request a Quote</GradientHeading>;
          <p className="text - zion - slate - light mt - 4">;
            Tell us about your project and we'll create a customized quote for you;
          </p>;
          <div className="inline - flex items - center bg - zion - blue - dark py - 1 px - 3 rounded - full mt - 3 border border - zion - purple / 20">;
            <Sparkles className="h - 4 w - 4 text - zion - cyan mr - 1" />;
            <span className="text - sm text - white">AI - powered matching</span>;
          </div>;
        </div>;
        <Card className="bg - zion - blue - dark border border - zion - blue - light mb - 8">;
          <CardContent className="px - 6 py - 8">;
            <StepProgress current_step={current_step} />;
            <div className="mt - 8">;
              {renderStepContent ()}
            </div>;
            <div className="flex justify - between mt - 8">;
              {current_step !== "service" && (
                <Button;
                  variant="outline";
                  on_click={handle_back}
                  className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
                >;
                  Back;
                </Button>)}
              {current_step !== "summary" ? (
                <Button;
                  on_click={handle_next}
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                >;
                  Continue;
                </Button>) : (
                <Button;
                  on_click={handle_submit}
                  disabled={is_submitting}
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                >;
                  {is_submitting ? "Submitting..." : "Submit Request"}
                </Button>)}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx

========
=======
        ;
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;
          <CardContent className="px-6 py-8">;
            <StepProgress currentStep={currentStep} />;
            ;
            <div className="mt-8">;
              {renderStepContent()}
            </div>;
            ;
            <div className="flex justify-between mt-8">;
              {currentStep !== "service" && (;
                <Button;
                  variant="outline";
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
                >;
                  Back;
                </Button>;
              )}
              ;
              {currentStep !== "summary" ? (;
                <Button ;
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                >;
                  Continue;
                </Button>;
              ) :(;
                <Button ;
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                >;
                  {isSubmitting ? "Submitting..." :"Submit Request"}
                </Button>;
              )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
=======
                <Button;
                  variant="outline";
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                >
                  Back
                </Button>
              )}
;
              {currentStep !== "summary" ? (;
                <Button;
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                >;
                  Continue;
                </Button>;
              ) : (;
                <Button;
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
                >;
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
              )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
          </CardContent>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
    </div>;
  );

}
;

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
    </div>);
=======
    </div>;
  ),; export function QuoteRequestForm () {
  const navigate = useNavigate ();
const {
  toast 
}= useToast ();
const [currentStep, setCurrentStep] = useState<QuoteRequestSteps> ("service");
const [isSubmitting, setIsSubmitting] = useState (false);
break;
case "timeline": setCurrentStep ("budget");
break;
case "budget": setCurrentStep ("summary");
break;
break;
case "budget": setCurrentStep ("timeline");
break;
case "summary": setCurrentStep ("budget");
break;
toast ({
  
}finally {
  setIsSubmitting (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
const renderStepContent = () => {
  switch (currentStep) {
  default: return null;
}
};
return (<div className="container mx-auto px-4 py-12" > <div className="max-w-3xl mx-auto" > <div className="text-center mb-8" > <GradientHeading>Request a Quote</GradientHeading> <p className="text-zion-slate-light mt-4" > Tell us about your project and we'll create a customized quote for you </p> <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20" > <Sparkles className="h-4 w-4 text-zion-cyan mr-1" /> <span className="text-sm text-white" >AI-powered matching</span> </div> </div> <Button variant="outline" onClick= {
  handleBack 
}className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > Back </Button>) 
}<Button onClick= {
  handleNext 
}className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Continue </Button>) : (<Button </Button>) 
}</div> </CardContent> </Card> </div> </div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/QuoteRequestForm.tsx
=======
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
