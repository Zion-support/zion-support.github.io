
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2 } from 'lucide-react'import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { TalentProfile } from "@/types/talent"
import { GeneratedMilestone } from "@/hooks/useMilestoneGenerator"
import { generateContract } from "../utils/contractUtils"
import { ProjectDetailsFields } from "./ProjectDetailsFields"
import { PaymentTermsFields } from "./PaymentTermsFields"
import { AdditionalClausesFields } from "./AdditionalClausesFields"
import {logErrorToProduction} from '@/utils/productionLogger'
const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required")
  scopeSummary: z.string().min(10, "Scope summary should be at least 10 characters")
  startDate: z.date({
    required_error: "Start date is required"}),
  endDate: z.date().optional(),
  paymentTerms: z.enum(["hourly", "fixed", "milestone"])
  paymentAmount: z.string().min(1, "Payment amount is required")
  additionalClauses: z.array(z.string()).optional()}),

export type ContractFormValues = z.infer<typeof formSchema>
        values, 
        talent, 
        clientName, 
  
}
  );
};
;