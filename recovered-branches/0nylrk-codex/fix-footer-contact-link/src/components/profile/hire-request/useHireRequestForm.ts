
<<<<<<< HEAD
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
  },;
=======
import { useState } from "react",
import { useForm } from "react-hook-form",
import { zodResolver } from "@hookform/resolvers/zod",
import { z } from "zod",
import { useHireRequest } from "@/hooks/useHireRequest",
import { TalentProfile } from "@/types/talent",interface UseHireRequestFormProps {
  talent: TalentProfile,
  onClose: () => void,
  initialJobTitle?: string,
  userDetails?: {
    name?: string,
    email?: string,
    id?: string
  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface FormValues {;
  requesterName:string,;
  requesterEmail:string,;
  projectOverview:string,;
  timeline:string,;
  budgetMin:number,;
  budgetMax:number;
}
<<<<<<< HEAD
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
  },;
=======

export function useHireRequestForm({ talent, onClose, initialJobTitle, userDetails }: UseHireRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false),
  const { submitHireRequest } = useHireRequest(),

  // Define the form schema with validation rules
  const formSchema = z.object({
    requesterName: z.string().min(2, &quot;Name is required&quot;),
    requesterEmail: z.string().email(&quot;Valid email is required&quot;),
    projectOverview: z.string().min(10, &quot;Please provide more details about your project&quot;),
    timeline: z.string().min(5, &quot;Please specify your timeline&quot;),
    budgetMin: z.number().min(1, &quot;Budget minimum is required&quot;),
    budgetMax: z.number().min(1, &quot;Budget maximum is required&quot;)
  }).refine(data => data.budgetMax >= data.budgetMin, {
    message: "Maximum budget must be greater than or equal to minimum budget",
    path: ["budgetMax"]
  }),
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requesterName: userDetails?.name || "&quot;,
      requesterEmail: userDetails?.email || "&quot;,
      projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "&quot;,
      timeline: "&quot;,

interface UseHireRequestFormProps {_talent: TalentProfile;
  onClose: () => void;
  initialJobTitle?: string;
  userDetails?: {
    name?: string;
    email?: string;
    id?: string;};
}

export interface FormValues {_requesterName: string;
  requesterEmail: string;
  projectOverview: string;
  timeline: string;
  budgetMin: number;
  budgetMax: number;}

export function useHireRequestForm(_{_talent, _onClose, _initialJobTitle, _userDetails}: UseHireRequestFormProps) {_const [isSubmitting, _setIsSubmitting] = useState(false);
  const { submitHireRequest} = useHireRequest();

  // Define the form schema with validation rules
  const _formSchema = z.object({_requesterName: z.string().min(2, _"Name is required"), _requesterEmail: z.string().email("Valid email is required"), _projectOverview: z.string().min(10, _"Please provide more details about your project"), _timeline: z.string().min(5, _"Please specify your timeline"), _budgetMin: z.number().min(1, _"Budget minimum is required"), _budgetMax: z.number().min(1, _"Budget maximum is required")}).refine(data => data.budgetMax >= data.budgetMin, {_message: "Maximum budget must be greater than or equal to minimum budget", _path: ["budgetMax"]});

  // Initialize the form
  const _form = useForm<FormValues>({_resolver: zodResolver(formSchema), _defaultValues: {
      requesterName: userDetails?.name || "", _requesterEmail: userDetails?.email || "", _projectOverview: initialJobTitle ? `Job: ${initialJobTitle}` : "",
      timeline: "",
      budgetMin: talent.hourly_rate || 25,
      budgetMax: talent.hourly_rate ? talent.hourly_rate * 1.5 : 50
    }
  }),

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true),    try {
      const _requestData = {
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
      },

      const result = await submitHireRequest(requestData),
      if (result.success) {
        onClose()
      }
    } catch (error) {
      console.error("Error submitting hire request:", error)    } finally {
      setIsSubmitting(false)
    }
  },

  return {
    form,
    isSubmitting,
    onSubmit
  }
          id: talent.id || "", _full_name: talent.full_name, _professional_title: talent.professional_title},
        requester: {_name: values.requesterName, _email: values.requesterEmail, _id: userDetails?.id},
        project: {_overview: values.projectOverview, _timeline: values.timeline, _budgetMin: values.budgetMin, _budgetMax: values.budgetMax}
      };

      const _result = await submitHireRequest(requestData);
      if (result.success) {_onClose();}
    } catch (error) {} finally {_setIsSubmitting(false);}
  };

  return {_form, _isSubmitting, _onSubmit};
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
