<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
=======



=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';


import React, { useState, useEffect, useCallback } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from "sonner";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import {useJobForm} from './useJobForm';
import {BasicInfoFields} from './BasicInfoFields';
import {DateFields} from './DateFields';
import {DescriptionFields} from './DescriptionFields';
import {useJobs} from "@/hooks/useJobs";
import {JobSchemaType} from './validation';
import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Form } from "@/components/ui/form";
import { useJobForm  } from './useJobForm';
import { BasicInfoFields  } from './BasicInfoFields';
import { DateFields  } from './DateFields';
import { DescriptionFields  } from './DescriptionFields';
import { useJobs } from "@/hooks/useJobs";
import { JobSchemaType } from './validation';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Form } from "@/components/ui/form",
import { useJobForm } from './useJobForm',
import { BasicInfoFields } from './BasicInfoFields',
import { DateFields } from './DateFields',
import { DescriptionFields } from './DescriptionFields',
import { useJobs } from "@/hooks/useJobs",
import { JobSchemaType } from './validation',
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface JobPostingFormProps {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm && JobPostingForm.tsx;
:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / jobs / job - posting / JobPostingForm.tsx;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx


export function JobPostingForm(): any ({ jobId, onSuccess }: JobPostingFormProps) {;

========
export function JobPostingForm(): any ({ jobId, onSuccess }: JobPostingFormProps) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface JobPostingFormProps {
  jobId?: string,
  onSuccess?: () => void
}

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
interface JobPostingFormProps {
  job_id?: string;
  on_success?: () => void;
}
<<<<<<< HEAD

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {

=======
export /**
 * JobPostingForm - Function description
 */
function JobPostingForm() {
  const navigate = use_navigate ();
  const { create_job, update_job, getJobById } = use_jobs ();
  const [isFormLoading, setIsFormLoading] = useState (false);
  const [editor_content, setEditorContent] = useState ("");
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
  const {
  const {;
    form;
    is_loading;
    start_date;
    setStartDate;
    end_date;
    setEndDate;
    is_remote;
    setIsRemote;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx


=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {

  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const navigate = useNavigate(),
  const { createJob, updateJob, getJobById } = useJobs(),
  const [isFormLoading, setIsFormLoading] = useState(false),
  const [editorContent, setEditorContent] = useState(""),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  } = useJobForm({ jobId, onSuccess }),

  const { handleSubmit, setValue, formState } = form,
  const { isSubmitting } = formState,

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
  useEffect(() => {;
    if (jobId) {;
      setIsFormLoading(true);
=======

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
;
interface JobPostingFormProps {;
  jobId?:string,;
  onSuccess?:() => void,;
}
;
export function JobPostingForm({ jobId, onSuccess } JobPostingFormProps) {;
  const navigate = useNavigate(),;
  const { createJob, updateJob, getJobById } = useJobs(),;
  const [isFormLoading, setIsFormLoading] = useState(false),;
  const [editorContent, setEditorContent] = useState(""),;
  ;
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
;
  const { handleSubmit, setValue, formState } = form,;
  const { isSubmitting } = formState,;
;
  useEffect(() => {;
    if (jobId) {;
      setIsFormLoading(true),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  useEffect(() => {;
    if (jobId) {;
      setIsFormLoading(true),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      getJobById(jobId);
        .then((job) => {;
          if (job) {;
            // Set form values;
<<<<<<< HEAD
<<<<<<< HEAD
            Object && Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string));
=======
            Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string)),;
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string)),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                setValue('expiry_date', value as string);
              } else if (key === 'is_remote') {;
                setIsRemote(value as boolean);
              } else if (key === 'description') {;
<<<<<<< HEAD
                setEditorContent(value as string);
=======
                setEditorContent(value as string),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                setValue('description', value as string);
              } else {;
                try {;
                  // @ts-ignore - We know these fields exist in our form;
                  setValue(key, value as any);
                } catch (e) {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
                  // Skip fields that don't exist in our form;
=======
                  // Skip fields that don't exist in our form;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                }
              }
            });
          }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

=======
                  // Skip fields that don't exist in our form;
                }
              }
            })
          }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        })
        .catch((error) => {
          console.error("Failed to load job:", error),
          toast.error("Failed to load job")
        })
        .finally(() => {
          setIsFormLoading(false)
        })
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)

=======

  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),


  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)
  }, [setValue]);
  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }, [setValue]),

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true),

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      const jobData = await submitJob(values)
      if (jobId) {
        await updateJob(jobId, jobData),
        toast.success("Job updated successfully!")
      } else {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        await createJob(jobData);
        toast.success("Job posted successfully!");
        form.reset();
        setEditorContent("")
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        await createJob(jobData),
        toast.success("Job posted successfully!"),
        form.reset(),
        setEditorContent("")
<<<<<<< HEAD

        });


========
        });
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
  const handleEditorChange = useCallback((value: string) => {;
    setEditorContent(value),;
    setValue('description', value);
  }, [setValue]);
  const onSubmit = async (values: JobSchemaType) => {;
    setIsFormLoading(true);
    try {;
      const jobData = await submitJob(values),;
      if (jobId) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
        await updateJob(jobId, jobData);
        toast && toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData);
        toast && toast.success("Job posted successfully!");
        form && form.reset();
        setEditorContent("");



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
      if (onSuccess) {;
        onSuccess();
      }
<<<<<<< HEAD
    } catch (error: any) {
=======
    } catch (error: any) {;
      console && console.error("Error creating/updating job:", error);
      toast && toast.error(error && error.message || "Failed to post job");
    } finally {;
      setIsFormLoading(false);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

=======
        });
        .catch((error) => {;
          console.error("Failed to load job:", error),;
          toast.error("Failed to load job");
        });
        .finally(() => {;
          setIsFormLoading(false);
        });
    }
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),;
  const handleEditorChange = useCallback((value: string) => {;
    setEditorContent(value),;
    setValue('description', value);
  }, [setValue]),;
  const onSubmit = async (values: JobSchemaType) => {;
    setIsFormLoading(true),;
    try {;
      const jobData = await submitJob(values),;
      if (jobId) {;
        await updateJob(jobId, jobData),;
        toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData),;
        toast.success("Job posted successfully!"),;
        form.reset(),;
        setEditorContent("");
      }
      if (onSuccess) {
        onSuccess()
      }
    } catch (error: any) {
      console.error("Error creating/updating job:", error);
      toast.error(error.message |"Failed to post job")
    } finally {
      setIsFormLoading(false)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  if (isLoading |isFormLoading) {
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      console.error("Error creating/updating job:", error),
      toast.error(error.message || "Failed to post job")
    } finally {
      setIsFormLoading(false)
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;

  }
  return (
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    return <div className="flex items-center justify-center p-8">Loading...</div>
  }
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Post a Job</h3>
          <p className="text-sm text-muted-foreground">
            Fill in the details below to create a job posting.
          </p>
        </div>
        <BasicInfoFields control={form.control} />
<<<<<<< HEAD
<<<<<<< HEAD
=======


        <DateFields 
          startDate={startDate} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <DateFields
          startDate={startDate}
        <DateFields 
          startDate={startDate} 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>
          <Label htmlFor="isRemote">
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
              className="mr-2"
              onChange={(e) => setIsRemote(e.target.checked)}
            />
            Remote
          </Label>
        </div>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
=======
            Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string)),;
                setValue('published_date', value as string),;
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string)),;
                setValue('expiry_date', value as string),;
              } else if (key === 'is_remote') {;
                setIsRemote(value as boolean),;
              } else if (key === 'description') {;
                setEditorContent(value as string),;
                setValue('description', value as string),;
              } else {;
                try {;
                  // @ts-ignore - We know these fields exist in our form;
                  setValue(key, value as any),;
                } catch (e) {;
                  // Skip fields that don't exist in our form;
                }
              }
            }),;
          }
        });
        .catch((error) => {;
          console.error("Failed to load job:", error),;
          toast.error("Failed to load job"),;
        });
        .finally(() => {;
          setIsFormLoading(false),;
        }),;
    }
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),;
;
  const handleEditorChange = useCallback((value:string) => {;
    setEditorContent(value),;
    setValue('description', value),;
  }, [setValue]),;
;
  const onSubmit = async (values:JobSchemaType) => {;
    setIsFormLoading(true),;
;
    try {;
      const jobData = await submitJob(values),;
      ;
      if (jobId) {;
        await updateJob(jobId, jobData),;
        toast.success("Job updated successfully!"),;
      } else {;
        await createJob(jobData),;
        toast.success("Job posted successfully!"),;
        form.reset(),;
        setEditorContent(""),;
      }
;
      if (onSuccess) {;
        onSuccess(),;
      }
    } catch (error:any) {;
      console.error("Error creating/updating job:", error),;
      toast.error(error.message || "Failed to post job"),;
    } finally {;
      setIsFormLoading(false),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
  },;
;
  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>,;
  }
<<<<<<< HEAD
  if (isLoading |isFormLoading) {
  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;
  }
  return (
=======
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Form {...form}>;
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;
          <h3 className="text-lg font-medium">Post a Job</h3>;
          <p className="text-sm text-muted-foreground">;
            Fill in the details below to create a job posting.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <BasicInfoFields control={form && form.control} />;
        <DateFields
          startDate={startDate} 
=======
;
        <BasicInfoFields control={form.control} />;
        ;
        <DateFields ;
          startDate={startDate} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        <BasicInfoFields control={form.control} />;
        <DateFields;
          startDate={startDate} ;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />;
<<<<<<< HEAD
<<<<<<< HEAD
        <div>;
          <Label htmlFor="isRemote">;
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              className="mr-2"
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx


=======
        <div>;
          <Label htmlFor="isRemote">;
            <Input;
              type="checkbox";
              id="isRemote";
              checked={isRemote}
              className="mr-2"
              onChange={(e) => setIsRemote(e.target.checked)}
            />
            Remote
          </Label>
        </div>
        <DescriptionFields
          control={form.control}
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />
        <Button type="submit" disabled={isSubmitting |isFormLoading}>
          {isSubmitting |isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <DescriptionFields 
          control={form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />
        <Button type="submit" disabled={isSubmitting || isFormLoading}>
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>
      </form>
    </Form>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
              onChange={(e) => setIsRemote(e && e.target.checked)}
        .catch ((error) => {
          console.error ("Failed to load job:", error);
          toast.error ("Failed to load job");
        });
        .finally (() => {
          setIsFormLoading (false);
        });
    }
  }, [job_id, getJobById, set_value, setStartDate, setEndDate, setIsRemote]);
;
  const handleEditorChange = useCallback ((value: string) => {
    setEditorContent (value),
    set_value ('description', value);
  }, [set_value]);
;
  const on_submit = async (values: JobSchemaType) => {
    setIsFormLoading (true);
;
    try {
      const job_data = await submit_job (values),
      // Check condition
if ( {) {
  $2
}
        await update_job (job_id, job_data);
        toast.success ("Job updated successfully!");
      } else {
        await create_job (job_data);
        toast.success ("Job posted successfully!");
        form.reset ();
        setEditorContent ("");
      }
      // Check condition
if ( {) {
  $2
}
        on_success ();
      }
    } catch (error: any) {
      console.error ("Error creating / updating job:", error);
      toast.error (error.message || "Failed to post job");
    } finally {
      setIsFormLoading (false);
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

========
=======
;
        <div>;
          <Label htmlFor="isRemote">;
            <Input;
              type="checkbox";
              id="isRemote";
              checked={isRemote}
              className="mr-2";
              onChange={(e) => setIsRemote(e.target.checked)}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
            />;
            Remote;
          </Label>;
        </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx

}
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
;
        <DescriptionFields ;
          control={form.control} ;
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />;
;
        <Button type="submit" disabled={isSubmitting || isFormLoading}>;
          {isSubmitting || isFormLoading ? "Submitting..." :jobId ? "Update Job" :"Post Job"}
        </Button>;
      </form>;
    </Form>;
  ),; interface JobPostingFormProps {
  jobId?: string;
onSuccess?: () => void 
}export function JobPostingForm ({
  jobId, onSuccess 
}: JobPostingFormProps) {
  const [isFormLoading, setIsFormLoading] = useState (false);
const [editorContent, setEditorContent] = useState ("");
  if (job) {
  //Set form values Object.entries (job) .forEach ( ([key, value]) => {
  if (key === 'published date' && value) {
  
}
}) 
}
}) 
}) .finally ( () => {
  setIsFormLoading (false) 
}) 
}
}, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);
}if (onSuccess) {
  onSuccess () 
}
}catch (error: any) {
  
}finally {
  setIsFormLoading (false) 
}
};
if (isLoading || isFormLoading) {
  
}return (<Form {
  ...form 
}> <form onSubmit= {
  handleSubmit (onSubmit) 
}className=" space-y-6"> text-lg font-medium" >Post a Job</h3> <p className="text-sm text-muted-foreground" > Fill in the details below to create a job posting. </p> </div> <BasicInfoFields control= {
  form.control 
}/> <DateFields startDate= {
  startDate 
}setStartDate= {
  setStartDate 
}endDate= {
  endDate 
}setEndDate= {
  setEndDate 
}/> <div> <Label htmlFor="isRemote" > <Input /> Remote </Label> </div> <DescriptionFields control= {
  form.control 
}handleEditorChange= {
  handleEditorChange 
}editorContent= {
  editorContent 
}/> </Button> </form> </Form>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
;
;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
