
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
=======


export interface JobPostingProps {_jobId?: string;
  onSuccess?: () => void;}

export const _useJobForm = (_{_jobId, _onSuccess}: JobPostingProps) => {_const { user} = useAuth();
  const _navigate = useNavigate();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [isRemote, setIsRemote] = useState(false),
  const [isLoading, setIsLoading] = useState(false),
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),

<<<<<<< HEAD
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
    }
=======
  const _form = useForm<JobSchemaType>({_resolver: zodResolver(jobSchema), _defaultValues: {
      title: '', _company: '', _location: '', _job_type: '', _salary_range: '', _description: '', _responsibilities: '', _qualifications: '', _benefits: '', _application_instructions: '', _contact_email: '', _published_date: '', _expiry_date: '', _is_remote: false, _category: '', _status: '', _external_apply_link: ''},
    mode: "onChange"});

  // Function to create/update jobs that will be implemented by parent component
  const _submitJob = async (_values: JobSchemaType) => {_if (!user) {
      toast.error("You must be logged in to post a job");
      navigate("/login");
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setIsLoading(true),

<<<<<<< HEAD
    try {
      const publishedDate = startDate ? startDate.toString() : '',
      const expiryDate = endDate ? endDate.toString() : '',

      const jobData = {
        ...values,
        published_date: publishedDate,
        expiry_date: expiryDate,
        is_remote: isRemote,
        user_id: user.id},

      if (onSuccess) {
        onSuccess()
      }
      
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
    }
  },

  return {
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate, 
    setEndDate,
    isRemote,
    setIsRemote,
    initialValues,
    setInitialValues,
    submitJob
  }
},
=======
    try {_const _publishedDate = startDate ? startDate.toString() : '';
      const _expiryDate = endDate ? endDate.toString() : '';

      const _jobData = {
        ...values, _published_date: publishedDate, _expiry_date: expiryDate, _is_remote: isRemote, _user_id: user.id};

      if (onSuccess) {_onSuccess();}
      
      return jobData;
    } catch (error: unknown) {_toast.error(error.message || "Failed to process form");
      throw error;} finally {_setIsLoading(false);}
  };

  return {_form, _isLoading, _startDate, _setStartDate, _endDate, _setEndDate, _isRemote, _setIsRemote, _initialValues, _setInitialValues, _submitJob};
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
