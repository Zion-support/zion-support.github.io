
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/
import { Button } from "@/components/ui/
import { Form } from "@/components/ui/
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/
import { useToast } from "@/hooks/
import { TalentProfile } from "@/types/
import { GeneratedMilestone } from "@/hooks/
import { generateContract } from "../utils/
import { ProjectDetailsFields } from "./
import { PaymentTermsFields } from "./
import { AdditionalClausesFields } from "./
      paymentAmount:talent.hourly_rate ? `$${talent.hourly_rate}/
  isGenerating ? (<> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Contract... 
</Button> </form> 