<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useHireRequest} from "@/hooks/useHireRequest";
import {TalentProfile} from "@/types/talent";

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
import { useHireRequest } from "@/hooks/useHireRequest";
import { TalentProfile } from "@/types/talent";
interface UseHireRequestFormProps {
=======

import { useHireRequest } from "@/hooks/useHireRequest";
import { TalentProfile } from "@/types/talent";
import { useHireRequest } from "@/hooks/useHireRequest",
import { TalentProfile } from "@/types/talent",

<<<<<<< HEAD
import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useHireRequest} from "@/hooks/useHireRequest";
import {TalentProfile} from "@/types/talent";
import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from './react';
import { use_form } from './react - hook - form';
import { zod_resolver } from '@hookform / resolvers / zod';
import { z } from './zod';
import { useHireRequest } from '@/hooks / useHireRequest';
import { TalentProfile } from '@/types / talent';
interface UseHireRequestFormProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  talent: TalentProfile;
  on_close: () => void;
  initialJobTitle?: string;

    name?: string;
<<<<<<< HEAD

interface UseHireRequestFormProps {
=======
<<<<<<< HEAD
import { useHireRequest } from "@/hooks/useHireRequest";
import { TalentProfile } from "@/types/talent";
import { useHireRequest } from "@/hooks/useHireRequest",
import { TalentProfile } from "@/types/talent",
=======

<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface UseHireRequestFormProps {
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
<<<<<<< HEAD

  }

}

export interface FormValues {;

=======
<<<<<<< HEAD
    name?: string,
    email?: string,
    id?: string
  }
}

    email?: string

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

  budgetMin: number

  budgetMax: number
}
export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState($2);
  const { submitHireRequest } = useHireRequest($2);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    name?: string;

    email?: string

    id?: string
  }
}
export interface FormValues {
  }
}

export interface FormValues {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  requesterName: string;
  requesterEmail: string;
  projectOverview: string;
  timeline: string;
<<<<<<< HEAD

=======
    name?: string,
    email?: string,
    id?: string
  budgetMin: number,
  budgetMax: number
}

export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitHireRequest } = useHireRequest();
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { useHireRequest } from "@/hooks/useHireRequest",;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { TalentProfile } from "@/types/talent",;
interface UseHireRequestFormProps {;
  talent: TalentProfile,;
  onClose: () => void,;
<<<<<<< HEAD
=======
  initialJobTitle?: string,;
  userDetails?: {;
    name?: string,;
    email?: string,;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }

}

export interface FormValues {;

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  initialJobTitle?: string,;
  userDetails?: {;
    name?: string,;
    email?: string,;

    email?: string,
    id?: string;
<<<<<<< HEAD
  }
<<<<<<< HEAD

=======
}
    id?: string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
}
;
export interface FormValues {;
<<<<<<< HEAD

=======
  requesterName: string,;
  requesterEmail: string,;
  projectOverview: string,;
  timeline: string,;
  budgetMin: number,;
  budgetMax: number;
}
=======

  }

  }
}
<<<<<<< HEAD
;
export interface FormValues {;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    email?: string,

;
pr-12325
  requesterName: string,;
  requesterEmail: string,;
  projectOverview: string,;
  timeline: string,;

  budgetMin: number,;
  budgetMax: number;

export interface FormValues {};

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface FormValues {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  requester_name: string;
  requester_email: string;
  project_overview: string;
  timeline: string;

<<<<<<< HEAD
  budgetMin: number;
  budgetMax: number;
}

=======
<<<<<<< HEAD
  budgetMin: number;
  budgetMax: number;
}
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  budgetMin: number

  budgetMax: number
}
export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {

  const [isSubmitting, setIsSubmitting] = useState(false),
  const { submitHireRequest } = useHireRequest(),

<<<<<<< HEAD
  // Define the form schema with validation rules

  const formSchema = z && z.object({
    requesterName: z && z.string().min(2, "Name is required");
    requesterEmail: z && z.string().email("Valid email is required"),
    projectOverview: z && z.string().min(10, "Please provide more details about your project");
    timeline: z && z.string().min(5, "Please specify your timeline");
    budgetMin: z && z.number().min(1, "Budget minimum is required");
    budgetMax: z && z.number().min(1, "Budget maximum is required")
  }).refine(data => data && data.budgetMax >= data && data.budgetMin, {
    message: "Maximum budget must be greater than or equal to minimum budget",

    path: ["budgetMax"]
  });

    requesterName: z.string().min(2, "Name is required"),

=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Define the form schema with validation rules

  const formSchema = z && z.object({
    requesterName: z && z.string().min(2, "Name is required");
    requesterEmail: z && z.string().email("Valid email is required"),
    projectOverview: z && z.string().min(10, "Please provide more details about your project");
    timeline: z && z.string().min(5, "Please specify your timeline");
    budgetMin: z && z.number().min(1, "Budget minimum is required");
    budgetMax: z && z.number().min(1, "Budget maximum is required")
  }).refine(data => data && data.budgetMax >= data && data.budgetMin, {
    message: "Maximum budget must be greater than or equal to minimum budget",
    path: ["budgetMax"]
  });

<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitHireRequest } = useHireRequest();
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { submitHireRequest } = useHireRequest(),

>>>>>>> merged-prs-20250907-203621
  // Define the form schema with validation rules

  const formSchema = z.object({
    requesterName: z.string().min(2, "Name is required");
    requesterEmail: z.string().email("Valid email is required")
    projectOverview: z.string().min(10, "Please provide more details about your project");
    timeline: z.string().min(5, "Please specify your timeline");
    budgetMin: z.number().min(1, "Budget minimum is required");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    requesterName: z.string().min(2, "Name is required"),
<<<<<<< HEAD
=======
    requesterEmail: z.string().email("Valid email is required"),
    projectOverview: z.string().min(10, "Please provide more details about your project"),
    timeline: z.string().min(5, "Please specify your timeline"),
    budgetMin: z.number().min(1, "Budget minimum is required"),
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    budgetMax: z.number().min(1, "Budget maximum is required")
  }).refine(data => data.budgetMax >= data.budgetMin, {"
    message: "Maximum budget must be greater than or equal to minimum budget""
    path: ["budgetMax"]

  }),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema);
    defaultValues: {

      budgetMin: talent && talent.hourly_rate || 25,
      budgetMax: talent && talent.hourly_rate ? talent && talent.hourly_rate * 1 && 1.5 : 50

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  });
  }),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
      requesterName: userDetails?.name |"";
      requesterEmail: userDetails?.email |""
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "";
      timeline: "";

      budgetMin: talent.hourly_rate |25
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  });
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      requesterName: userDetails?.name || "",
      requesterEmail: userDetails?.email || "",
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",

      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50;

    }
  }),

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // Handle form submission
  const onSubmit = async (values: FormValues) => {

    setIsSubmitting(true);
  budget_min: number,
  budget_max: number;
}

  const [is_submitting, setIsSubmitting] = useState (false);
  const { submitHireRequest } = useHireRequest ();
;
  // Define the form schema with validation rules;

    path: ["budget_max"];
  });
;
  // Initialize the form;

      timeline: "";
      budget_min: talent.hourly_rate || 25,
      budget_max: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50;
>>>>>>> origin/chore/fix-lint-and-merge
    }
  });
;
  // Handle form submission;

        requester: {

          name: values && values.requesterName;
          email: values && values.requesterEmail,

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

      }

=======
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
          overview: values.projectOverview;
          timeline: values.timeline;
          budgetMin: values.budgetMin
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
    form;
    isSubmitting;

    onSubmit
  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true),
    try {
      const requestData = {
        talent: {
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Handle form submission
  const onSubmit = async (values: FormValues) => {

    setIsSubmitting(true);
  budget_min: number,
  budget_max: number;
}

  const [is_submitting, setIsSubmitting] = useState (false);
  const { submitHireRequest } = useHireRequest ();
;
  // Define the form schema with validation rules;

    path: ["budget_max"];
  });
;
  // Initialize the form;

      timeline: "";
      budget_min: talent.hourly_rate || 25,
      budget_max: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50;
>>>>>>> origin/chore/fix-lint-and-merge
    }
  });
;
  // Handle form submission;

        requester: {

          name: values && values.requesterName;
          email: values && values.requesterEmail,

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

      }

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          id: talent.id || "",
          full_name: talent.full_name,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          professional_title: talent.professional_title},
        requester: {}
          name: values.requesterName,
          email: values.requesterEmail,
          id: userDetails?.id;
        },
        project: {}
          overview: values.projectOverview,
          timeline: values.timeline,
          budgetMin: values.budgetMin,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        }
      };

      const result = await submitHireRequest(requestData);
      if (result.success) {
        onClose()

;
export function useHireRequestForm() { return null; }
  const { submitHireRequest } = useHireRequest(),;
  // Define the form schema with validation rules;
  const formSchema = z.object({;"
    requesterName: z.string().min(2, "Name is required"),;"
    requesterEmail: z.string().email("Valid email is required"),;"
    projectOverview: z.string().min(10, "Please provide more details about your project"),;"
    timeline: z.string().min(5, "Please specify your timeline"),;"
    budgetMin: z.number().min(1, "Budget minimum is required"),;"
    budgetMax: z.number().min(1, "Budget maximum is required");
  }).refine(data => data.budgetMax >= data.budgetMin, {;"
    message: "Maximum budget must be greater than or equal to minimum budget",;"

    path: ["budgetMax"];
  }),;
  // Initialize the form;
  const form = useForm<FormValues>({;
    resolver: zodResolver(formSchema),;

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
=======
=======
          budgetMax: values.budgetMax
<<<<<<< HEAD
        }
      };

      const result = await submitHireRequest(requestData);
      if (result.success) {
        onClose()
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
      }
    } catch (error) {
      console.error("Error submitting hire request:", error)
    } finally {
      setIsSubmitting(false)

          id: talent && talent.id || "";
          full_name: talent && talent.full_name,
          professional_title: talent && talent.professional_title};
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      }

      console.error("Error submitting hire request:", error)
    } finally {}
      setIsSubmitting(false)

      }
          budgetMax: values.budgetMax      }
    } catch (error) {
      console && console.error("Error submitting hire request:", error)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    } catch (error) {
      console && console.error("Error submitting hire request:", error)

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          id: talent.id || "";
          full_name: talent.full_name,
          professional_title: talent.professional_title}
        requester: {}
          name: values.requester_name;
          email: values.requester_email,
          id: user_details?.id;
        }
        project: {}
          overview: values.project_overview;
          timeline: values.timeline;
          budget_min: values.budget_min,
          budget_max: values.budget_max;
        }
      }
;
      const result = await submitHireRequest (request_data);
      // Check condition;
if ( {) {}
  $2;
}
        on_close ();
      }
    } catch (error) {"
      console.error ("Error submitting hire request:", error);
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
    } finally {

      setIsSubmitting(false)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


<<<<<<< HEAD
    }
  }
  return {
    form;
    isSubmitting;

    onSubmit
  }
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    } catch (error) {;

      console.error("Error submitting hire request:", error);
    } finally {;
      setIsSubmitting(false);
    }
  },;
  return {;
    form;
    isSubmitting;
<<<<<<< HEAD
    onSubmit;
=======
<<<<<<< HEAD
    onSubmit;
=======
    onSubmit;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  }
}
  }
;
  return {
    form;
    is_submitting;
    on_submit;
  }

import { useState } from "react",;
import { useForm } from "react-hook-form",;
import { zodResolver } from "@hookform/resolvers/zod",;
import { z } from "zod",;
import { useHireRequest } from "@/hooks/useHireRequest",;
import { TalentProfile } from "@/types/talent",;
;
interface UseHireRequestFormProps {;
  talent:TalentProfile,;
  onClose:() => void,;
  initialJobTitle?:string,;
  userDetails?:{;
    name?:string,;
    email?:string,;
    id?:string;
  },;}
;
export interface FormValues {;
  requesterName:string,;
  requesterEmail:string,;
  projectOverview:string,;
  timeline:string,;
  budgetMin:number,;
  budgetMax:number;
}
;
export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails } UseHireRequestFormProps) {;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const { submitHireRequest } = useHireRequest(),;
;
  // Define the form schema with validation rules;
  const formSchema = z.object({;
    requesterName:z.string().min(2, "Name is required"),;
    requesterEmail:z.string().email("Valid email is required"),;
    projectOverview:z.string().min(10, "Please provide more details about your project"),;
    timeline:z.string().min(5, "Please specify your timeline"),;
    budgetMin:z.number().min(1, "Budget minimum is required"),;
    budgetMax:z.number().min(1, "Budget maximum is required");
  }).refine(data => data.budgetMax >= data.budgetMin, {;
    message:"Maximum budget must be greater than or equal to minimum budget",;
    path:["budgetMax"];
  }),;
;
  // Initialize the form;
  const form = useForm<FormValues>({;
    resolver:zodResolver(formSchema),;
    defaultValues:{;
      requesterName:userDetails?.name || "",;
      requesterEmail:userDetails?.email || "",;
      projectOverview:initialJobTitle ? `Job:${initialJobTitle}` :"",;
      timeline:"",;
      budgetMin:talent.hourly_rate || 25,;
      budgetMax:talent.hourly_rate ? talent.hourly_rate * 1.5 :50;
    }
  }),;
;
  // Handle form submission;
  const onSubmit = async (values:FormValues) => {;
    setIsSubmitting(true),;
    try {;
      const requestData = {;
        talent:{;
          id:talent.id || "",;
          full_name:talent.full_name,;
          professional_title:talent.professional_title},;
        requester:{;
          name:values.requesterName,;
          email:values.requesterEmail,;
          id:userDetails?.id;
        },;
        project:{;
          overview:values.projectOverview,;
          timeline:values.timeline,;
          budgetMin:values.budgetMin,;
          budgetMax:values.budgetMax;
        }
      },;
;
      const result = await submitHireRequest(requestData),;
      if (result.success) {;
        onClose(),;
      }
    } catch (error) {;
      console.error("Error submitting hire request:", error),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return {;
    form,;
    isSubmitting,;
    onSubmit;
  },; interface UseHireRequestFormProps {
  talent: TalentProfile;
onClose: () => void;
initialJobTitle?: string;
userDetails?: {
  name?: string;
email?: string;
id?: string 
>>>>>>> merged-prs-20250907-203621
}
}export interface FormValues {
  requesterName: string;
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
});
// Handle form submission try {
  const requestData = {
  talent: {
  
}finally {
  setIsSubmitting (false) 
}
};
return {
  form;
isSubmitting;
onSubmit 
}
}
  }
<<<<<<< HEAD
}
;
  }
}
<<<<<<< HEAD
;
=======
;
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
