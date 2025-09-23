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

  serviceType: z.string().min(1)
  specificItem: z.object({ id: z.string() })})
  serviceType: z.string().min(1),
  specificItem: z.object({ id: z.string() })}),
export function QuoteRequestForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [autoFillLoading, setAutoFillLoading] = useState(false)
  const [autoFillOpen, setAutoFillOpen] = useState(false)
  serviceType: z.string().min(1),
  specificItem: z.object({ id: z.string() })}),

export function QuoteRequestForm() {
  const router = useRouter(),
  const { toast } = useToast(),
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [autoFillLoading, setAutoFillLoading] = useState(false),
  const [autoFillOpen, setAutoFillOpen] = useState(false),
  

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
    }
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
};
}
