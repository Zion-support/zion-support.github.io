
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

  serviceType: z.string().min(1),
  specificItem: z.object({ id: z.string() })}),

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

    },

    contactInfo: {
      name: ""
      email: ""
      phone: ""
      company: ""
    }
  })
  const updateFormData = (data: Partial<QuoteFormData>,) => {
    setFormData(prev => ({
      ...prev;
};
  );

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

