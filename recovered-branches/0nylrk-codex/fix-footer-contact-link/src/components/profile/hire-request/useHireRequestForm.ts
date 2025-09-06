


import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { useHireRequest } from "@/hooks/useHireRequest";
import { TalentProfile } from "@/types/talent";
import { useHireRequest } from "@/hooks/useHireRequest",
import { TalentProfile } from "@/types/talent",

import { useState } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { useHireRequest } from '@/hooks / useHireRequest';
import { TalentProfile } from '@/types / talent';

interface UseHireRequestFormProps {
  talent: TalentProfile;
  on_close: () => void;
  initialJobTitle?: string;
  user_details?: {
    name?: string;







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface UseHireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
    name?: string;





    id?: string
  }
}
export interface FormValues {

  requesterName: string;
  requesterEmail: string;
  projectOverview: string;
  timeline: string;


import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { useHireRequest } from "@/hooks/useHireRequest",;
import { TalentProfile } from "@/types/talent",;
interface UseHireRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
  initialJobTitle?: string,;
  userDetails?: {;
    name?: string,;
    email?: string,;
    id?: string;
  }
}
;
export interface FormValues {;
  requesterName: string,;
  requesterEmail: string,;
  projectOverview: string,;
  timeline: string,;
  budgetMin: number,;
  budgetMax: number;
}


  budgetMin: number

  budgetMax: number
}
export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitHireRequest } = useHireRequest();
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { submitHireRequest } = useHireRequest(),

  // Define the form schema with validation rules

  const formSchema = z.object({
    requesterName: z.string().min(2, "Name is required");
    requesterEmail: z.string().email("Valid email is required")
    projectOverview: z.string().min(10, "Please provide more details about your project");
    timeline: z.string().min(5, "Please specify your timeline");
    budgetMin: z.number().min(1, "Budget minimum is required");
    requesterName: z.string().min(2, "Name is required"),
    requesterEmail: z.string().email("Valid email is required"),
    projectOverview: z.string().min(10, "Please provide more details about your project"),
    timeline: z.string().min(5, "Please specify your timeline"),
    budgetMin: z.number().min(1, "Budget minimum is required"),
    budgetMax: z.number().min(1, "Budget maximum is required")
  }).refine(data => data.budgetMax >= data.budgetMin, {
    message: "Maximum budget must be greater than or equal to minimum budget"
    path: ["budgetMax"]
  });
  }),

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema);
    defaultValues: {
      requesterName: userDetails?.name |"";
      requesterEmail: userDetails?.email |""
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "";
      timeline: "";
      budgetMin: talent.hourly_rate |25
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  });
      requesterName: userDetails?.name || "",
      requesterEmail: userDetails?.email || "",
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",
      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  }),

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const request_data = {
        talent: {
          id: talent.id |"";
          full_name: talent.full_name
          professional_title: talent.professional_title}
        requester: {
          name: values && values.requesterName;
          email: values && values.requesterEmail,

          id: userDetails?.id
        }
        project: {

          overview: values && values.projectOverview;
          timeline: values && values.timeline;
          budgetMin: values && values.budgetMin,
          budgetMax: values && values.budgetMax

        }
      }
      const result = await submitHireRequest(requestData);
      if (result && result.success) {
        onClose()
          id: talent.id || "",
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


;
export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { submitHireRequest } = useHireRequest(),;
  // Define the form schema with validation rules;
  const formSchema = z.object({;
    requesterName: z.string().min(2, "Name is required"),;
    requesterEmail: z.string().email("Valid email is required"),;
    projectOverview: z.string().min(10, "Please provide more details about your project"),;
    timeline: z.string().min(5, "Please specify your timeline"),;
    budgetMin: z.number().min(1, "Budget minimum is required"),;
    budgetMax: z.number().min(1, "Budget maximum is required");
  }).refine(data => data.budgetMax >= data.budgetMin, {;
    message: "Maximum budget must be greater than or equal to minimum budget",;
    path: ["budgetMax"];
  }),;
  // Initialize the form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;
    defaultValues: {;
      requesterName: userDetails?.name || "",;
      requesterEmail: userDetails?.email || "",;
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",;
      timeline: "",;
      budgetMin: talent.hourly_rate || 25,;
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50;
    }
  }),;
  // Handle form submission;
  const onSubmit = async (values: FormValues) => {;
    setIsSubmitting(true),;
    try {;
      const requestData = {;
        talent: {;
          id: talent.id || "",;
          full_name: talent.full_name,;
          professional_title: talent.professional_title},;
        requester: {;
          name: values.requesterName,;
          email: values.requesterEmail,;
          id: userDetails?.id;
        },;
        project: {;
          overview: values.projectOverview,;
          timeline: values.timeline,;
          budgetMin: values.budgetMin,;
          budgetMax: values.budgetMax;
        }
      },;
      const result = await submitHireRequest(requestData),;
      if (result.success) {;
        onClose();



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
      }
    } catch (error) {
      console.error("Error submitting hire request:", error)
    } finally {
      setIsSubmitting(false)
    }
  }
  return {
    form;
    isSubmitting;

    onSubmit

  }
}

      }
    } catch (error) {
      console && console.error("Error submitting hire request:", error)


    } finally {


    } catch (error) {;
      console.error("Error submitting hire request:", error);
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    form;
    isSubmitting;
    onSubmit;



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
