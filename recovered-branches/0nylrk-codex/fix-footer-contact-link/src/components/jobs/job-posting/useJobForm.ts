
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react',
import { useForm } from 'react-hook-form',
import { zodResolver } from "@hookform/resolvers/zod",
import { format } from 'date-fns',
import { toast } from "sonner",
import { useNavigate } from 'react-router-dom',
import { jobSchema, JobSchemaType } from './validation',
import { useAuth } from "@/hooks/useAuth",
=======
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from &quot;@hookform/resolvers/zod&quot;;
import { format } from 'date-fns';
import { toast } from &quot;sonner&quot;;
import { useNavigate } from 'react-router-dom';

import { jobSchema, JobSchemaType } from './validation';
import { useAuth } from &quot;@/hooks/useAuth&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface JobPostingProps {
  jobId?: string,
  onSuccess?: () => void
}

export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {
  const { user } = useAuth(),
  const navigate = useNavigate(),
  
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [isRemote, setIsRemote] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),

  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: '',
      company: '',
      location: '',
      job_type: '',
      salary_range: '',
      description: '',
      responsibilities: '',
      qualifications: '',
      benefits: '',
      application_instructions: '',
      contact_email: '',
      published_date: '',
      expiry_date: '',
      is_remote: false,
      category: '',
      status: '',
      external_apply_link: ''},
<<<<<<< HEAD
    mode: "onChange"}),
=======
    mode: &quot;onChange&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  // Function to create/update jobs that will be implemented by parent component
  const submitJob = async (values: JobSchemaType) => {
    if (!user) {
<<<<<<< HEAD
      toast.error("You must be logged in to post a job"),
      navigate("/login"),
      return
=======
      toast.error(&quot;You must be logged in to post a job&quot;);
      navigate(&quot;/login&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import { useState, useEffect } from 'react',;
import { useForm } from 'react-hook-form',;
import { zodResolver } from "@hookform/resolvers/zod",;
import { format } from 'date-fns',;
import { toast } from "sonner",;
import { useNavigate } from 'react-router-dom',;
import { jobSchema, JobSchemaType } from './validation',;
import { useAuth } from "@/hooks/useAuth",;
export interface JobPostingProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {;
  const { user } = useAuth(),;
  const navigate = useNavigate(),;
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),;
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),;
  const [isRemote, setIsRemote] = useState(false),;
  const [isLoading, setIsLoading] = useState(false),;
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),;
  const form = useForm<JobSchemaType>({;
    resolver: zodResolver(jobSchema),;
    defaultValues: {;
      title: '',;
      company: '',;
      location: '',;
      job_type: '',;
      salary_range: '',;
      description: '',;
      responsibilities: '',;
      qualifications: '',;
      benefits: '',;
      application_instructions: '',;
      contact_email: '',;
      published_date: '',;
      expiry_date: '',;
      is_remote: false,;
      category: '',;
      status: '',;
      external_apply_link: ''},;
    mode: "onChange"}),;
  // Function to create/update jobs that will be implemented by parent component;
  const submitJob = async (values: JobSchemaType) => {;
    if (!user) {;
      toast.error("You must be logged in to post a job"),;
      navigate("/login"),;
      return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
;
    setIsLoading(true),;
    try {;
      const publishedDate = startDate ? startDate.toString() : '',;
      const expiryDate = endDate ? endDate.toString() : '',;
      const jobData = {;
        ...values,;
        published_date: publishedDate,;
        expiry_date: expiryDate,;
        is_remote: isRemote,;
        user_id: user.id},;
      if (onSuccess) {;
        onSuccess();
      }
<<<<<<< HEAD
      
      return jobData
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Error in job form submission:", error),
      toast.error(error.message || "Failed to process form"),
      throw error
=======
      console.error(&quot;Error in job form submission:&quot;, error);
      toast.error(error.message || &quot;Failed to process form&quot;);
      throw error;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
=======
;
      return jobData;
    } catch (error: any) {;
      console.error("Error in job form submission:", error),;
      toast.error(error.message || "Failed to process form"),;
      throw error;
    } finally {;
      setIsLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  return {;
    form,;
    isLoading,;
    startDate,;
    setStartDate,;
    endDate,;
    setEndDate,;
    isRemote,;
    setIsRemote,;
    initialValues,;
    setInitialValues;
    submitJob;
  }
};