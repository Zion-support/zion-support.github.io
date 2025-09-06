
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {useState} from "react"
import {logDebug, logErrorToProduction} from '@/utils/productionLogger'
import {useToast} from "@/hooks/use-toast"
import {useRouter} from 'next/router'
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {GradientHeading} from "@/components/GradientHeading"
import {StepProgress} from "@/components/QuoteRequestForm/StepProgress"
import {ServiceTypeStep} from "@/components/QuoteRequestForm/ServiceTypeStep"
import {ProjectDetailsStep} from "@/components/QuoteRequestForm/ProjectDetailsStep"
import {TimelineStep} from "@/components/QuoteRequestForm/TimelineStep"
import {BudgetStep} from "@/components/QuoteRequestForm/BudgetStep"
import {SummaryStep} from "@/components/QuoteRequestForm/SummaryStep"
import {AutoFillModal} from "@/components/QuoteRequestForm/AutoFillModal"
import {QuoteFormData} from "@/types/quotes"
import {Sparkles, Loader2} from 'lucide-react'
import {z} from "zod"
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary"
const serviceStepSchema = z.object({
<<<<<<< HEAD

=======
  serviceType: z.string().min(1)
  specificItem: z.object({ id: z.string() })})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export function QuoteRequestForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [autoFillLoading, setAutoFillLoading] = useState(false)
  const [autoFillOpen, setAutoFillOpen] = useState(false)
<<<<<<< HEAD
=======
  serviceType: z.string().min(1),
  specificItem: z.object({ id: z.string() })}),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export function QuoteRequestForm() {
  const router = useRouter(),
  const { toast } = useToast(),
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [autoFillLoading, setAutoFillLoading] = useState(false),
  const [autoFillOpen, setAutoFillOpen] = useState(false),
<<<<<<< HEAD

  const [formData, setFormData] = useState<QuoteFormData>({
=======
  
>>>>>>>   const [formData, setFormData] = useState<QuoteFormData>({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
    }
>>>>>>>     contactInfo: {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    contactInfo: {
>>>>>>>       name: ""
      email: ""
      phone: ""
      company: ""
    }

<<<<<<< HEAD
=======
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }),
  
  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }))
  },
  
  const handleNext = () => {
    switch (currentStep) {
      case "service": {
        const result = serviceStepSchema.safeParse({
          serviceType: formData.serviceType,
          specificItem: formData.specificItem}),
        if (!result.success) {
          toast({
            title: "Service Required",
            description: "Please select a service before continuing.",
            variant: "destructive"}),
          return
        }
        setCurrentStep("details"),;
        break;
      }
      case "details": setCurrentStep("timeline"),
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
        break,
      default:
        break
    }
  },
  
  const handleSubmit = async () => {
    setIsSubmitting(true),
    
    try {
      // In a real application, you would send the data to your backend
      logDebug("Submitting form data:", { data: formData }),
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500)),
      
      toast({
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you soon."}),
      
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


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
import { useState } from './react';
import {log_debug, logErrorToProduction} from '@/utils / production_logger';
import { use_toast } from '@/hooks / use - toast';
import {use_router} from 'next / router';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { GradientHeading } from '@/components / GradientHeading';
import { StepProgress } from '@/components / QuoteRequestForm / StepProgress';
import { ServiceTypeStep } from '@/components / QuoteRequestForm / ServiceTypeStep';
import { ProjectDetailsStep } from '@/components / QuoteRequestForm / ProjectDetailsStep';
import { TimelineStep } from '@/components / QuoteRequestForm / TimelineStep';
import { BudgetStep } from '@/components / QuoteRequestForm / BudgetStep';
import { SummaryStep } from '@/components / QuoteRequestForm / SummaryStep';
import { AutoFillModal } from '@/components / QuoteRequestForm / AutoFillModal';
import { QuoteFormData } from '@/types / quotes';
import {Sparkles, Loader2} from 'lucide-react';
import { z } from './zod';
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";
const serviceStepSchema = z.object ({
  service_type: z.string ().min (1),
  specific_item: z.object ({ id: z.string () })}),
export /**
 * QuoteRequestForm - Function description
 */
function QuoteRequestForm() {
  const router = use_router ();
  const { toast } = use_toast ();
  const [current_step, setCurrentStep] = useState < QuoteRequestSteps>("service");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [autoFillLoading, setAutoFillLoading] = useState (false);
  const [autoFillOpen, setAutoFillOpen] = useState (false);
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
  const updateFormData = (data: Partial < QuoteFormData>, ) =>: any {
    setFormData (prev => ({
      ...prev;
}
  );
}

;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
