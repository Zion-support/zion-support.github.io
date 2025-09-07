<<<<<<< HEAD
const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: ""

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

    contactInfo: {
      name: ""
      email: ""
      phone: ""

      company: ""
    }

  }),

=======
<<<<<<< HEAD

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientHeading } from "@/components/GradientHeading";
import { StepProgress } from "@/components/QuoteRequestForm/StepProgress";
import { ServiceTypeStep } from "@/components/QuoteRequestForm/ServiceTypeStep";
import { ProjectDetailsStep } from "@/components/QuoteRequestForm/ProjectDetailsStep";
import { TimelineStep } from "@/components/QuoteRequestForm/TimelineStep";
import { BudgetStep } from "@/components/QuoteRequestForm/BudgetStep";
import { SummaryStep } from "@/components/QuoteRequestForm/SummaryStep";
import { QuoteFormData } from "@/types/quotes";
import { Sparkles } from "lucide-react";
export type QuoteRequestSteps = $2;
=======
<<<<<<< HEAD
const navigate = useNavigate();
=======





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


export function QuoteRequestForm() {;



<<<<<<< HEAD
export function QuoteRequestForm() {;
>>>>>>> merged-prs-20250907-203621
export function QuoteRequestForm() {

export function QuoteRequestForm() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


  
  
  
=======



  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: ""
<<<<<<< HEAD
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
    }
    contactInfo: {
      name: ""
      email: ""
      phone: ""
      company: ""
    }
  }),
  
  const updateFormData = $2;
      ...data
    }))
  },
  
  const handleNext = () => {
    switch (currentStep) {
      case "service": setCurrentStep($2);
        break,
      case "details":
        setCurrentStep($2);
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
      console.log($2);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
      
      toast($2);
=======

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
=======
<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    contactInfo: {
      name: ""
      email: ""
      phone: ""

      company: ""
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }),

<<<<<<< HEAD
  });
  }),
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({
      ...prev
      ...data
    }))
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
  }
  },
  
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
  }
  },
  
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        break,
      default:
        break
    }
<<<<<<< HEAD

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

  },

  },

    serviceCategory: "",;
    specificItem: null,;"
    projectName: "",;"
    projectDescription: "",;
    startDate: undefined,;
    endDate: undefined,;"
    timeline: "flexible",;
    budget: {;

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

  },

    switch (currentStep) {  };

  const handleBack = () => {;
    switch (currentStep) {;

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

  }

  const handleSubmit = async () => {

=======
=======

<<<<<<< HEAD
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

  },

  },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },
  


  const handleNext = () => {
    switch (currentStep) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    serviceCategory: "",;
    specificItem: null,;"
    projectName: "",;"
    projectDescription: "",;
    startDate: undefined,;
    endDate: undefined,;"
    timeline: "flexible",;
    budget: {;

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  },

    switch (currentStep) {  };

  const handleBack = () => {;
    switch (currentStep) {;

=======
  };
  const handleBack = () => {;
    switch (currentStep) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  }
  const handleSubmit = async () => {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setIsSubmitting(true);
<<<<<<< HEAD
    try {
      // In a real application, you would send the data to your backend
      console.log("Submitting form data:", formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
=======

  }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSubmit = async () => {

    setIsSubmitting(true);
<<<<<<< HEAD
    try {
      // In a real application, you would send the data to your backend
}
console.log("Submitting form "data":", formData);"
      // Simulate API call  },
  
    }
=======
    try {}
      // In a real application, you would send the data to your backend"
      console.log("Submitting form data:", formData);

  const handleSubmit = async () => {
>>>>>>> origin/chore/fix-lint-and-merge
    setIsSubmitting(true),
    
    try {
      // In a real application, you would send the data to your backend
      // // // console.log("Submitting form data:", formData),
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
<<<<<<< HEAD

      toast({
        title: "Quote Request Submitted"

        description: "We've received your request and will get back to you soon."})
      // Redirect to confirmation page or homepage"
      navigate("/")

      company: "";
    }
  });
;

      ...prev,
      ...data;
    }));
  }
;

        setCurrentStep ("summary");
        break;
      default:;
        break;
    }
  }
;

        setCurrentStep ("budget");
        break;
      default:;
        break;
    }
  }
;

      console.log ("Submitting form data:", form_data);
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1500));
;

      setIsSubmitting(false)
    }
  }
  },

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
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Quote Request Submitted"
<<<<<<< HEAD

        description: "We've received your request and will get back to you soon."})
      // Redirect to confirmation page or homepage"
      navigate("/")

=======
        description: "We've received your request and will get back to you soon."})
>>>>>>> merged-prs-20250907-203621
      // Redirect to confirmation page or homepage
      navigate("/")
    } catch (error) {
      toast({
<<<<<<< HEAD
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"})
    } finally {
      setIsSubmitting(false)
    }
  },
<<<<<<< HEAD

  };

  const handleSubmit = async () => {;
    setIsSubmitting(true);

    try {;
      // In a real application, you would send the data to your backend;"
      console && console.log("Submitting form data:", formData);

      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({;"
        title: "Quote Request Submitted",'"
        description: "We've received your request and will get back to you soon."}),;

      // Redirect to confirmation page or homepage;"
      navigate("/");
    } catch (error) {;
      toast({;"
        title: "Submission Failed","
        description: "There was an error submitting your request. Please try again.",;"
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "service":;

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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <GradientHeading>Request a Quote</GradientHeading>"
          <p className="text-zion-slate-light mt-4">'
            Tell us about your project and we'll create a customized quote for you;
          </p>"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />"
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
=======
  
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
=======
        title: "Submission Failed"
        description: "There was an error submitting your request. Please try again."
        variant: "destructive"})
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      company: "";
    }
  });
;

      ...prev,
      ...data;
    }));
  }
;

        setCurrentStep ("summary");
        break;
      default:;
        break;
    }
  }
;

        setCurrentStep ("budget");
        break;
      default:;
        break;
    }
  }
;

      console.log ("Submitting form data:", form_data);
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1500));
;
<<<<<<< HEAD

=======
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
    } finally {
      setIsSubmitting (false);
    }
  }
    } finally {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsSubmitting(false)
    }
  }
  },
<<<<<<< HEAD

=======
  
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
  }

  },
  
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

  },

  };

  const handleSubmit = async () => {;
    setIsSubmitting(true);

    try {;
      // In a real application, you would send the data to your backend;"
      console && console.log("Submitting form data:", formData);

      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({;"
        title: "Quote Request Submitted",'"
        description: "We've received your request and will get back to you soon."}),;

      // Redirect to confirmation page or homepage;"
      navigate("/");
    } catch (error) {;
      toast({;"
        title: "Submission Failed","
        description: "There was an error submitting your request. Please try again.",;"
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "service":;

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <GradientHeading>Request a Quote</GradientHeading>"
          <p className="text-zion-slate-light mt-4">'
            Tell us about your project and we'll create a customized quote for you;
          </p>"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />"
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </div>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">"
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={currentStep} />"
<<<<<<< HEAD
            <div className="mt-8">
              {renderStepContent()}

=======
>>>>>>> merged-prs-20250907-203621
            <div className="mt-8">
              {renderStepContent()}

            </div>
<<<<<<< HEAD
            <div className="flex justify-between mt-8">
              {currentStep !== "service" && (
=======
<<<<<<< HEAD
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

=======
            <div className="flex justify-between mt-8">
              {currentStep !== "service" && (
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
<<<<<<< HEAD

=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

        setCurrentStep("summary"),;
        break,;
      default:;
        break;
    }
  },;
  const handleBack = () => {;

    }
  },;
  const handleSubmit = async () => {;
    setIsSubmitting(true),;
    try {;

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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }
<<<<<<< HEAD
  };
  return (

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
=======

  };

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="container mx-auto px-4 py-12">;
      <div className="max-w-3xl mx-auto">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;
          <CardContent className="px-6 py-8">;
            <StepProgress currentStep={currentStep} />;
            <div className="mt-8">;
              {renderStepContent()}
            </div>;
            <div className="flex justify-between mt-8">;
              {currentStep !== "service" && (;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;

          <CardContent className="px-6 py-8">;
            <StepProgress currentStep={currentStep} />;
"
            <div className="mt-8">;
              {renderStepContent()}
            </div>;
"
            <div className="flex justify-between mt-8">;"
              {currentStep !== "service" && (;

                <Button

                  variant="outline"
                  onClick={handleBack}"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
                  Back;
                </Button>;
              )}
"
              {currentStep !== "summary" ? (;

                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
                  Back;
                </Button>;
              )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {currentStep !== "summary" ? (;
                <Button
                  onClick={handleNext}

                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                  Continue;
                </Button>;
              ) : (;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Button

                  onClick={handleSubmit}
                  disabled={isSubmitting}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
              )}
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
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </CardContent>;
        </Card>;
      </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
}
    </div>);
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
}
    </div>;
  );
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
    </div>);

          </CardContent>;
        </Card>;
      </div>;

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

  setIsSubmitting (false) 
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

}

}
;

}

import {useState} from "react";""
import {useToast} from "@/hooks/use-toast";""
import {useNavigate} from "react-router-dom";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent} from "@/components/ui/card";""
import {GradientHeading} from "@/components/GradientHeading";""
import {StepProgress} from "@/components/QuoteRequestForm/StepProgress";""
import {ServiceTypeStep} from "@/components/QuoteRequestForm/ServiceTypeStep";""
import {ProjectDetailsStep} from "@/components/QuoteRequestForm/ProjectDetailsStep";""
import {TimelineStep} from "@/components/QuoteRequestForm/TimelineStep";""
import {BudgetStep} from "@/components/QuoteRequestForm/BudgetStep";""
import {SummaryStep} from "@/components/QuoteRequestForm/SummaryStep";""
import {QuoteFormData} from "@/types/quotes";""
import {Sparkles} from "lucide-react";""
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";"
export function QuoteRequestForm() {;

  const navigate = useNavigate();
  const { toast } = useToast();"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");"
"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),"

  const [formData, setFormData] = useState<QuoteFormData>({
)
  const updateFormData = (data: Partial<QuoteFormData>) => {

  const [formData, setFormData] = useState<QuoteFormData>({;
  const updateFormData = (data: Partial<QuoteFormData>) => {;
  const [current_step, setCurrentStep] = useState < QuoteRequestSteps>("service");"
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const [form_data, setFormData] = useState < QuoteFormData>({"
    service_type: "",""
    service_category: "","
    specific_item: null,"
    project_name: "",""
    project_description: "","
    start_date: undefined,
    end_date: undefined,"
    timeline: "flexible","
    budget: {,
  amount: 0,"
      type: "fixed";"
    }
    contact_info: {,"
  name: "",""
      email: "",""
      phone: "",""
      company: "";"
    })
  });
  const updateFormData = (data: Partial < QuoteFormData>) =>: any {
  // TODO: Implement
    setFormData (prev => ({
      ...prev,
      ...data;)
    }));
  const handle_next = () =>: any {
  // TODO: Implement
    switch (current_step) {"
      case "service": setCurrentStep ("details");"
        break;"
      case "details":;""
        setCurrentStep ("timeline");"
      case "timeline":;""
        setCurrentStep ("budget");"
      case "budget":;""
        setCurrentStep ("summary");"
        break;
      default:;
  const handle_back = () =>: any {
  // TODO: Implement
      case "details": setCurrentStep ("service");"
        setCurrentStep ("details");"
      case "summary":;""
  const handle_submit = async () => {
    setIsSubmitting (true);
    try {
  // TODO: Implement
      // In a real application, you would send the data to your backend;"
      console.log ("Submitting form data:", form_data);"
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1500));
      toast ({"
        title: "Quote Request Submitted",")"
        description: "We've received your request and will get back to you soon."}),"
      // Redirect to confirmation page or homepage;"
      navigate ("/");"
    } catch (error) {
        title: "Submission Failed",""
        description: "There was an error submitting your request. Please try again.",")"
        variant: "destructive"});"
    } finally {
  // TODO: Implement
      setIsSubmitting (false);

  // TODO: Implement
      setIsSubmitting(false)
  },
  const renderStepContent = () => {
    switch (currentStep) {"
      case "service":"
  };

  const handleSubmit = async () => {;
    setIsSubmitting(true);

    try {;
      // In a real application, you would send the data to your backend;"
      console && console.log("Submitting form data:", formData);"
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({;"
        title: "Quote Request Submitted",")"
        description: "We've received your request and will get back to you soon."}),;"
      // Redirect to confirmation page or homepage;"
      navigate("/");"
    } catch (error) {;
        title: "Submission Failed",""
        description: "There was an error submitting your request. Please try again.",;")"
    } finally {;
      setIsSubmitting(false);

  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "service":;"
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;

        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;

        return <TimelineStep formData={formData} updateFormData={updateFormData} />;

        return <BudgetStep formData={formData} updateFormData={updateFormData} />;

        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
    <div className="container mx-auto px-4 py-12">"
</div>"
      <div className="max-w-3xl mx-auto">"
        <div className="text-center mb-8">"
</div>
          <GradientHeading>Request a Quote"
          <p className="text-zion-slate-light mt-4">"
</p>
          </p>"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />"
            <span className="text-sm text-white">AI-powered matching</span>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">"
          <CardContent className="px-6 py-8">"

            <StepProgress currentStep={currentStep} />
            <div className="mt-8">"
            <div className="flex justify-between mt-8">"
                <Button;"
                  variant="outline""
                  onClick={handleBack}"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10""
                >

                <Button;
                  onClick={handleNext}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""

                  onClick={handleSubmit}
                  disabled={isSubmitting}"

  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),;"

        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />,;

        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />,;

        return <TimelineStep formData={formData} updateFormData={updateFormData} />,;

        return <BudgetStep formData={formData} updateFormData={updateFormData} />,;

    <div className="container mx-auto px-4 py-12">;"
      <div className="max-w-3xl mx-auto">;"
        <div className="text-center mb-8">;"
          <GradientHeading>Request a Quote;"
          <p className="text-zion-slate-light mt-4">;"
          </p>;"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">;"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />;"
            <span className="text-sm text-white">AI-powered matching</span>;"
          </div>;
        </div>;"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;"
          <CardContent className="px-6 py-8">;"

            <StepProgress currentStep={currentStep} />;

            <div className="mt-8">;"
            <div className="flex justify-between mt-8">;"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;"

                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"

        return <ServiceTypeStep form_data={form_data} updateFormData={updateFormData} />;

        return <ProjectDetailsStep form_data={form_data} updateFormData={updateFormData} />;

        return <TimelineStep form_data={form_data} updateFormData={updateFormData} />;

        return <BudgetStep form_data={form_data} updateFormData={updateFormData} />;

        return <SummaryStep form_data={form_data} updateFormData={updateFormData} />;
    <div className="container mx - auto px - 4 py - 12">;"
      <div className="max - w-3xl mx - auto">;"
        <div className="text - center mb - 8">;"
          <GradientHeading > Request a Quote;"
          <p className="text - zion - slate - light mt - 4">;"
          <div className="inline - flex items - center bg - zion - blue - dark py - 1 px - 3 rounded - full mt - 3 border border - zion - purple / 20">;"
            <Sparkles className="h - 4 w - 4 text - zion - cyan mr - 1" />;"
            <span className="text - sm text - white">AI - powered matching</span>;"
        <Card className="bg - zion - blue - dark border border - zion - blue - light mb - 8">;"
          <CardContent className="px - 6 py - 8">;"

            <StepProgress current_step={current_step} />;
            <div className="mt - 8">;"
            <div className="flex justify - between mt - 8">;"
                  variant="outline";"
                  on_click={handle_back}"
                  className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";"
                >;

                )}
                  on_click={handle_next}"
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";"

                ) : (
                  on_click={handle_submit}
                  disabled={is_submitting}"
    </div>);
<<<<<<< HEAD
}
=======
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
