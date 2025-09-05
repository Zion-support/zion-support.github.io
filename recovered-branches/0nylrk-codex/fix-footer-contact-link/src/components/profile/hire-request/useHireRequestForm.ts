
import { useState } from &quot;react&quot;;
import { useForm } from &quot;react-hook-form&quot;;
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { z } from &quot;zod&quot;;
import { useHireRequest } from &quot;@/hooks/useHireRequest&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

interface UseHireRequestFormProps {
  talent: TalentProfile;
  onClose: () => void;
  initialJobTitle?: string;
  userDetails?: {
    name?: string;
    email?: string;
    id?: string;
  };
}

export interface FormValues {
  requesterName: string;
  requesterEmail: string;
  projectOverview: string;
  timeline: string;
  budgetMin: number;
  budgetMax: number;
}

export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitHireRequest } = useHireRequest();

  // Define the form schema with validation rules
  const formSchema = z.object({
    requesterName: z.string().min(2, &quot;Name is required&quot;),
    requesterEmail: z.string().email(&quot;Valid email is required&quot;),
    projectOverview: z.string().min(10, &quot;Please provide more details about your project&quot;),
    timeline: z.string().min(5, &quot;Please specify your timeline&quot;),
    budgetMin: z.number().min(1, &quot;Budget minimum is required&quot;),
    budgetMax: z.number().min(1, &quot;Budget maximum is required&quot;)
  }).refine(data => data.budgetMax >= data.budgetMin, {
    message: &quot;Maximum budget must be greater than or equal to minimum budget&quot;,
    path: [&quot;budgetMax&quot;]
  });

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requesterName: userDetails?.name || "&quot;,
      requesterEmail: userDetails?.email || "&quot;,
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "&quot;,
      timeline: "&quot;,
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  });

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const requestData = {
        talent: {
          id: talent.id || "&quot;,
          full_name: talent.full_name,
          professional_title: talent.professional_title},
        requester: {
          name: values.requesterName,
          email: values.requesterEmail,
          id: userDetails?.id
        },
        project: {
          overview: values.projectOverview,
          timeline: values.timeline,
          budgetMin: values.budgetMin,
          budgetMax: values.budgetMax
        }
      };

      const result = await submitHireRequest(requestData);
      if (result.success) {
        onClose();
      }
    } catch (error) {
      console.error(&quot;Error submitting hire request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit
  };
}
