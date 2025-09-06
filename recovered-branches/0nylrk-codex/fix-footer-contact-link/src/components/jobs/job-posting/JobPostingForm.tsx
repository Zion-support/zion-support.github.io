


=======



import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Form } from "@/components/ui/form";
import { useJobForm  } from './useJobForm';
import { BasicInfoFields  } from './BasicInfoFields';
import { DateFields  } from './DateFields';
import { DescriptionFields  } from './DescriptionFields';
import { useJobs } from "@/hooks/useJobs";
import { JobSchemaType } from './validation';
import { Form } from "@/components/ui/form",
import { useJobForm } from './useJobForm',
import { BasicInfoFields } from './BasicInfoFields',
import { DateFields } from './DateFields',
import { DescriptionFields } from './DescriptionFields',
import { useJobs } from "@/hooks/useJobs",
import { JobSchemaType } from './validation',


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface JobPostingFormProps {
=======
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm && JobPostingForm.tsx;

=======
:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / jobs / job - posting / JobPostingForm.tsx;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
import React, { useState, useEffect, useCallback } from 'react';
import {use_navigate} from 'react-router-dom';
import { toast } from './sonner';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Button } from '@/components / ui / button';
import { Form } from '@/components / ui / form';
import {useJobForm} from './useJobForm';
import {BasicInfoFields} from './BasicInfoFields';
import {DateFields} from './DateFields';
import {DescriptionFields} from './DescriptionFields';
import { use_jobs } from '@/hooks / use_jobs';
import {JobSchemaType} from './validation';


export function JobPostingForm(): any ({ jobId, onSuccess }: JobPostingFormProps) {;

  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");

interface JobPostingFormProps {
  job_id?: string;
  on_success?: () => void;
}
export /**
 * JobPostingForm - Function description
 */
function JobPostingForm() {
  const navigate = use_navigate ();
  const { create_job, update_job, getJobById } = use_jobs ();
  const [isFormLoading, setIsFormLoading] = useState (false);
  const [editor_content, setEditorContent] = useState ("");
;

  const {
=======

  const {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    form;
    is_loading;
    start_date;
    setStartDate;
    end_date;
    setEndDate;
    is_remote;
    setIsRemote;


=======



  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const navigate = useNavigate(),
  const { createJob, updateJob, getJobById } = useJobs(),
  const [isFormLoading, setIsFormLoading] = useState(false),
  const [editorContent, setEditorContent] = useState(""),
  
  const {
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isRemote,
    setIsRemote,
    submitJob
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
  } = useJobForm({ jobId, onSuccess }),

  const { handleSubmit, setValue, formState } = form,
  const { isSubmitting } = formState,

  useEffect(() => {
    if (jobId) {
      setIsFormLoading(true),
      getJobById(jobId)
        .then((job) => {
          if (job) {
            // Set form values
            Object.entries(job).forEach(([key, value]) => {
              if (key === 'published_date' && value) {
                setStartDate(new Date(value as string)),
                setValue('published_date', value as string)
              } else if (key === 'expiry_date' && value) {
                setEndDate(new Date(value as string)),
                setValue('expiry_date', value as string)
              } else if (key === 'is_remote') {
                setIsRemote(value as boolean)
              } else if (key === 'description') {
                setEditorContent(value as string),
                setValue('description', value as string)
              } else {
                try {
                  // @ts-ignore - We know these fields exist in our form
                  setValue(key, value as any)
                } catch (e) {
                  // Skip fields that don't exist in our form
import React, { useState, useEffect, useCallback } from 'react',;
import { useNavigate } from 'react-router-dom',;
import { toast } from "sonner",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Form } from "@/components/ui/form",;
import { useJobForm } from './useJobForm',;
import { BasicInfoFields } from './BasicInfoFields',;
import { DateFields } from './DateFields',;
import { DescriptionFields } from './DescriptionFields',;
import { useJobs } from "@/hooks/useJobs",;
import { JobSchemaType } from './validation',;
interface JobPostingFormProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {;
  const navigate = useNavigate(),;
  const { createJob, updateJob, getJobById } = useJobs(),;
  const [isFormLoading, setIsFormLoading] = useState(false),;
  const [editorContent, setEditorContent] = useState(""),;
  const {;
    form,;
    isLoading,;
    startDate,;
    setStartDate,;
    endDate,;
    setEndDate,;
    isRemote,;
    setIsRemote,;
    submitJob;
  } = useJobForm({ jobId, onSuccess }),;
  const { handleSubmit, setValue, formState } = form,;
  const { isSubmitting } = formState,;

  useEffect(() => {;
    if (jobId) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setIsFormLoading(true);
      getJobById(jobId);
        .then((job) => {;
          if (job) {;
            // Set form values;
            Object && Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string));
                setValue('expiry_date', value as string);
              } else if (key === 'is_remote') {;
                setIsRemote(value as boolean);
              } else if (key === 'description') {;
                setEditorContent(value as string);
                setValue('description', value as string);
              } else {;
                try {;
                  // @ts-ignore - We know these fields exist in our form;
                  setValue(key, value as any);
                } catch (e) {;

    submit_job;
  } = useJobForm ({ job_id, on_success });
;
  const { handle_submit, set_value, form_state } = form;
  const { is_submitting } = form_state;
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      setIsFormLoading (true);
      getJobById (job_id);
        .then ((job) => {
          // Check condition
if ( {) {
  $2
}
            // Set form values;
            Object.entries (job).for_each (([key, value]) => {
              // Check condition
if ( {) {
  $2
}
                setStartDate (new Date (value as string));
                set_value ('published_date', value as string);
              } else // Check condition
if ( {) {
  $2
}
                setEndDate (new Date (value as string));
                set_value ('expiry_date', value as string);
              } else // Check condition
if ( {) {
  $2
}
                setIsRemote (value as boolean);
              } else // Check condition
if ( {) {
  $2
}
                setEditorContent (value as string);
                set_value ('description', value as string);
              } else {
                try {
                  // @ts - ignore - We know these fields exist in our form;
                  set_value (key, value as any);
                } catch (e) {

                  // Skip fields that don't exist in our form;
=======
                  // Skip fields that don't exist in our form;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                }
              }
            });
          }

        })
        .catch((error) => {
          console.error("Failed to load job:", error),
          toast.error("Failed to load job")
        })
        .finally(() => {
          setIsFormLoading(false)
        })
    }
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)
  }, [setValue]);
  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);
  }, [setValue]),

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true),

    try {
      const jobData = await submitJob(values)
      if (jobId) {
        await updateJob(jobId, jobData),
        toast.success("Job updated successfully!")
      } else {
        await createJob(jobData);
        toast.success("Job posted successfully!");
        form.reset();
        setEditorContent("")
        await createJob(jobData),
        toast.success("Job posted successfully!"),
        form.reset(),
        setEditorContent("")

        });


  const handleEditorChange = useCallback((value: string) => {;
    setEditorContent(value),;
    setValue('description', value);
  }, [setValue]);

  const onSubmit = async (values: JobSchemaType) => {;
    setIsFormLoading(true);

    try {;
      const jobData = await submitJob(values),;

      if (jobId) {;

        await updateJob(jobId, jobData);
        toast && toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData);
        toast && toast.success("Job posted successfully!");
        form && form.reset();
        setEditorContent("");



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }


      if (onSuccess) {;
        onSuccess();
      }
    } catch (error: any) {
      console.error("Error creating/updating job:", error);
      toast.error(error.message |"Failed to post job")
    } finally {
      setIsFormLoading(false)
    }
  }
  if (isLoading |isFormLoading) {
      console.error("Error creating/updating job:", error),
      toast.error(error.message || "Failed to post job")
    } finally {
      setIsFormLoading(false)
    }
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;

  }
  return (


        <DateFields 
          startDate={startDate} 


          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>
          <Label htmlFor="isRemote">

=======
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}
              className="mr-2"
    } catch (error: any) {;
      console.error("Error creating/updating job:", error);
      toast.error(error.message || "Failed to post job");
    } finally {;
      setIsFormLoading(false);
    }
  };
  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;
  }
;
  return (;

    <Form {...form}>;
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;
          <h3 className="text-lg font-medium">Post a Job</h3>;
          <p className="text-sm text-muted-foreground">;
            Fill in the details below to create a job posting.;
          </p>;
        </div>;

        <BasicInfoFields control={form && form.control} />;

        <DateFields
          startDate={startDate} 
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />;

        <div>;
          <Label htmlFor="isRemote">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="mr-2"


        <DescriptionFields 
          control={form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />
        <Button type="submit" disabled={isSubmitting || isFormLoading}>
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}


        </Button>
      </form>
    </Form>
  )
}
}
;
  // Check condition
if ( {) {
  $2
}
    return <div className="flex items - center justify - center p - 8">Loading...</div>;
  }
  return (
    <Form {...form}>;
      <form on_submit={handle_submit (on_submit)} className="space - y-6">;
        <div>;
          <h3 className="text - lg font - medium">Post a Job</h3>;
          <p className="text - sm text - muted - foreground">;
            Fill in the details below to create a job posting.;
          </p>;
        </div>;
        <BasicInfoFields control={form.control} />;
        <DateFields;
          start_date={start_date}
          setStartDate={setStartDate}
          end_date={end_date}
          setEndDate={setEndDate}
        />;
        <div>;
          <Label html_for="is_remote">;
            <Input;
              type="checkbox";
              id="is_remote";
              checked={is_remote}
              className="mr - 2";
              on_change={(e) => setIsRemote (e.target.checked)}

            />;
            Remote;
          </Label>;
        </div>;

        <DescriptionFields;
          control={form.control}
          handleEditorChange={handleEditorChange}
          editor_content={editor_content}
        />;
        <Button type="submit" disabled={is_submitting || isFormLoading}>;
          {is_submitting || isFormLoading ? "Submitting..." : job_id ? "Update Job" : "Post Job"}
        </Button>;
      </form>;
    </Form>);

}
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
