
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useHireRequest } from "@/hooks/useHireRequest";
import { TalentProfile } from "@/types/talent";
interface UseHireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
    name?: string,
    email?: string,
    id?: string
  }
}

export interface FormValues {
  requesterName: string,
  requesterEmail: string,
  projectOverview: string,
  timeline: string,
  budgetMin: number,
  budgetMax: number}

export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { submitHireRequest } = useHireRequest($2);
  // Define the form schema with validation rules
  const formSchema = z.object({
    requesterName: z.string().min($2);
    requesterEmail: z.string().email($2);
    projectOverview: z.string().min($2);
    timeline: z.string().min($2);
    budgetMin: z.number().min($2);
    budgetMax: z.number().min(1, "Budget maximum is required")
  }).refine($2);
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver($2);
    defaultValues: {
      requesterName: userDetails ?.name || "",
      requesterEmail: userDetails ?.email || "",
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",
      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  }),

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting($2);
    try {
      const requestData = $2;
          full_name: talent.full_name,
          professional_title: talent.professional_title},
        requester: {
          name: values.requesterName,
          email: values.requesterEmail,
          id: userDetails ?.id
        },
        project: {
          overview: values.projectOverview,
          timeline: values.timeline,
          budgetMin: values.budgetMin,
          budgetMax: values.budgetMax
        }
      },

      const result = await submitHireRequest($2);
      if (result.success) {
        onClose()
      }
    } catch (error) {
      console.error("Error submitting hire request:", error)
    } finally {
      setIsSubmitting(false)
    }
  },

  return {
    form,
    isSubmitting,
    onSubmit
  }
}
