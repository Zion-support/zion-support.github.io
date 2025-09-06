
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useHireRequest} from "@/hooks/useHireRequest";
import {TalentProfile} from "@/types/talent";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
<<<<<<< HEAD
import { useHireRequest } from "@/hooks/useHireRequest";
import { TalentProfile } from "@/types/talent";
=======
import { useHireRequest } from "@/hooks/useHireRequest",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface UseHireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
<<<<<<< HEAD
    name?: string;

    email?: string

    id?: string
<<<<<<< HEAD
  }
}
export interface FormValues {
=======
<<<<<<< HEAD
  }
}

export interface FormValues {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  requesterName: string;
<<<<<<< HEAD
  requesterEmail: string;
  projectOverview: string;
  timeline: string;
<<<<<<< HEAD
=======
    name?: string,
    email?: string,
    id?: string
=======
  budgetMin: number,
  budgetMax: number
}

export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitHireRequest } = useHireRequest();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  budgetMin: number

  budgetMax: number
}
export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {
<<<<<<< HEAD
=======
requesterEmail: string;
projectOverview: string;
timeline: string;
budgetMin: number;
budgetMax: number 
}export function useHireRequestForm ({
  talent, onClose, initialJobTitle, userDetails 
}: UseHireRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState (false);
const {
  submitHireRequest 
}= useHireRequest ();
//Define the form schema with validation rules const formSchema = z.object ({
  requesterName: z.string () .min (2, "Name is required");
requesterEmail: z.string () .email ("Valid email is required");
projectOverview: z.string () .min (10, "Please provide more details about your project");
timeline: z.string () .min (5, "Please specify your timeline");
budgetMin: z.number () .min (1, "Budget minimum is required");
budgetMax: z.number () .min (1, "Budget maximum is required") 
}) .refine (data => data.budgetMax >= data.budgetMin, {
  //Initialize the form const form = useForm<FormValues> ({
  resolver: zodResolver (formSchema);
defaultValues: {
  requesterName: userDetails?.name || "";
requesterEmail: userDetails?.email || "";
projectOverview: initialJobTitle ? `Job: $ {
  initialJobTitle 
}` : "";
timeline: "";
budgetMax: talent.hourly rate ? talent.hourly rate * 1.5 : 50
}

export function useHireRequestForm({
  talent,
  onClose,
  initialJobTitle,
  userDetails,
}: UseHireRequestFormProps) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitHireRequest } = useHireRequest();
=======
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { submitHireRequest } = useHireRequest(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Define the form schema with validation rules

  const formSchema = z.object({
<<<<<<< HEAD
    requesterName: z.string().min(2, "Name is required");
    requesterEmail: z.string().email("Valid email is required")
    projectOverview: z.string().min(10, "Please provide more details about your project");
    timeline: z.string().min(5, "Please specify your timeline");
    budgetMin: z.number().min(1, "Budget minimum is required");
=======
    requesterName: z.string().min(2, "Name is required"),
    requesterEmail: z.string().email("Valid email is required"),
    projectOverview: z.string().min(10, "Please provide more details about your project"),
    timeline: z.string().min(5, "Please specify your timeline"),
    budgetMin: z.number().min(1, "Budget minimum is required"),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    budgetMax: z.number().min(1, "Budget maximum is required")
  }).refine(data => data.budgetMax >= data.budgetMin, {
    message: "Maximum budget must be greater than or equal to minimum budget"
    path: ["budgetMax"]
<<<<<<< HEAD
  });
=======
  }),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
<<<<<<< HEAD
      requesterName: userDetails?.name |"";
      requesterEmail: userDetails?.email |""
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "";
      timeline: "";
      budgetMin: talent.hourly_rate |25
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  });
=======
      requesterName: userDetails?.name || "",
      requesterEmail: userDetails?.email || "",
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",
      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  }),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true),
    try {
      const requestData = {
        talent: {
<<<<<<< HEAD
          id: talent.id |"";
          full_name: talent.full_name
          professional_title: talent.professional_title}
        requester: {
          name: values.requesterName;
          email: values.requesterEmail
          id: userDetails?.id
        }
        project: {
          overview: values.projectOverview;
          timeline: values.timeline;
          budgetMin: values.budgetMin
          budgetMax: values.budgetMax
        }
      }
      const result = await submitHireRequest(requestData);
      if (result.success) {
        onClose()
=======
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
        }
      };

      const result = await submitHireRequest(requestData);
      if (result.success) {
        onClose()
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch (error) {
      console.error("Error submitting hire request:", error)
    } finally {
      setIsSubmitting(false)
<<<<<<< HEAD
    }
  }
  return {
<<<<<<< HEAD
    form;
    isSubmitting;

    onSubmit
<<<<<<< HEAD
  }
}
=======
<<<<<<< HEAD
    form,
    isSubmitting,
    onSubmit,
  };

};

  form;
isSubmitting;
onSubmit 
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
