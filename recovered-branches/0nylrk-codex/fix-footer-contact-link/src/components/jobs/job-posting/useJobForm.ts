import { useState, useEffect  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { format  } from 'date-fns';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { jobSchema, JobSchemaType } from './validation';
import { useAuth } from "@/hooks/useAuth";
export interface JobPostingProps {
  jobId?: string,
  onSuccess?: () => void
}

export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {
  const { user } = useAuth($2);
  const navigate = useNavigate($2);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined),
  const [endDate, setEndDate] = useState<Date | undefined>(undefined),
  const [isRemote, setIsRemote] = useState($2);
  const [isLoading, setIsLoading] = useState($2);
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null),

  const form = useForm<JobSchemaType>({
    resolver: zodResolver($2);
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
    mode: "onChange"}),

  // Function to create/update jobs that will be implemented by parent component
  const submitJob = async (values: JobSchemaType) => {
    if (!user) {
      toast.error($2);
      navigate($2);
      return
    }

    setIsLoading($2);
    try {
      const publishedDate = $2;
      const expiryDate = $2;
      const jobData = $2;
        published_date: publishedDate,
        expiry_date: expiryDate,
        is_remote: isRemote,
        user_id: user.id},

      if (onSuccess) {
        onSuccess()
      }
      
      return jobData
    } catch (error: any) {
      console.error($2);
      toast.error($2);
      throw error
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
