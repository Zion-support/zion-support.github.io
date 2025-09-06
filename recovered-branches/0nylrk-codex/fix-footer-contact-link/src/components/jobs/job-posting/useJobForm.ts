
import { useState, useEffect  } from 'react';
import { useForm  } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { format  } from 'date-fns';
import { toast } from "sonner";
import { useNavigate  } from 'react-router-dom';
import { jobSchema, JobSchemaType  } from './validation';
import { useAuth } from "@/hooks/useAuth";
export interface JobPostingProps {
  jobId?: string;
  onSuccess?: () => void
}

export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isRemote, setIsRemote] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null);
  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema);
    defaultValues: {
      title: '';
      company: '';
      location: '';
      job_type: '';
      salary_range: '';
      description: '';
      responsibilities: '';
      qualifications: '';
      benefits: '';
      application_instructions: '';
      contact_email: '';
      published_date: '';
      expiry_date: '';
      is_remote: false;
      category: '';
      status: ''
      external_apply_link: ''}
    mode: "onChange"});
  // Function to create/update jobs that will be implemented by parent component
  const submitJob = async (values: JobSchemaType) => {
    if (!user) {
<<<<<<< HEAD
      toast.error("You must be logged in to post a job");
      navigate("/login")
=======
      toast && toast.error("You must be logged in to post a job");
      navigate("/login"),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return
    }
    setIsLoading(true);
    try {
<<<<<<< HEAD
      const publishedDate = startDate ? startDate.toString() : '';
      const expiryDate = endDate ? endDate.toString() : '';
=======
      const publishedDate = startDate ? startDate && startDate.toString() : '';
      const expiryDate = endDate ? endDate && endDate.toString() : '';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const jobData = {
        ...values;
        published_date: publishedDate;
        expiry_date: expiryDate;
<<<<<<< HEAD
        is_remote: isRemote
        user_id: user.id}
=======
        is_remote: isRemote,
        user_id: user && user.id};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (onSuccess) {
        onSuccess()
      }
      return jobData
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Error in job form submission:", error);
      toast.error(error.message |"Failed to process form");
=======
      console && console.error("Error in job form submission:", error);
      toast && toast.error(error && error.message || "Failed to process form");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  return {
    form;
    isLoading;
    startDate;
    setStartDate;
    endDate
    setEndDate;
    isRemote;
    setIsRemote;
    initialValues;
    setInitialValues;
    submitJob
  }
}

