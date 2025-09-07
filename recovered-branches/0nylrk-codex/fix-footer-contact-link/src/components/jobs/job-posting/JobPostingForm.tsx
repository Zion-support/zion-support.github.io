<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
=======



<<<<<<< HEAD



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
=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Form } from "@/components/ui/form";
import { useJobForm  } from './useJobForm';
import { BasicInfoFields  } from './BasicInfoFields';
import { DateFields  } from './DateFields';
import { DescriptionFields  } from './DescriptionFields';
import { useJobs } from "@/hooks/useJobs";
import { JobSchemaType } from './validation';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Form } from "@/components/ui/form",
import { useJobForm } from './useJobForm',
import { BasicInfoFields } from './BasicInfoFields',
import { DateFields } from './DateFields',
import { DescriptionFields } from './DescriptionFields',
import { useJobs } from "@/hooks/useJobs",
import { JobSchemaType } from './validation',
<<<<<<< HEAD
=======

interface JobPostingFormProps {
<<<<<<< HEAD

import {useNavigate} from 'react-router-dom';
import {toast} from "sonner";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm && JobPostingForm.tsx;
:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / jobs / job - posting / JobPostingForm.tsx;
import React, { useState, useEffect, useCallback } from 'react';
import {use_navigate} from 'react-router-dom';
import { toast } from './sonner';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Button } from '@/components / ui / button';
import { Form } from '@/components / ui / form';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {useJobForm} from './useJobForm';
import {BasicInfoFields} from './BasicInfoFields';
import {DateFields} from './DateFields';
import {DescriptionFields} from './DescriptionFields';
import {useJobs} from "@/hooks/useJobs";
import {JobSchemaType} from './validation';
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Button } from "@/components/ui/button",  const navigate = useNavigate();
=======

import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",

import {useJobForm} from './useJobForm';
import {BasicInfoFields} from './BasicInfoFields';
import {DateFields} from './DateFields';
import {DescriptionFields} from './DescriptionFields';

>>>>>>> origin/chore/fix-lint-and-merge
=======
export function JobPostingForm(): any ({ jobId, onSuccess }: JobPostingFormProps) {;
interface JobPostingFormProps {
  jobId?: string,
  onSuccess?: () => void
}

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {;
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);"
  const [editorContent, setEditorContent] = useState("");
interface JobPostingFormProps {
  job_id?: string;
  on_success?: () => void;
}

 */
function JobPostingForm() {}
  const navigate = use_navigate ();
  const { create_job, update_job, getJobById } = use_jobs ();
  const [isFormLoading, setIsFormLoading] = useState (false);"
  const [editor_content, setEditorContent] = useState ("");
;
  const {
<<<<<<< HEAD

  const {}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const {;
    form;
    is_loading;
    start_date;
    setStartDate;
    end_date;
    setEndDate;
    is_remote;
    setIsRemote;

<<<<<<< HEAD
<<<<<<< HEAD
import { Form } from "@/components/ui/form";
import { useJobForm  } from './useJobForm';
import { BasicInfoFields  } from './BasicInfoFields';
import { DateFields  } from './DateFields';
import { DescriptionFields  } from './DescriptionFields';
import { useJobs } from "@/hooks/useJobs";
import { JobSchemaType } from './validation';
interface JobPostingFormProps {
  jobId?: string,
  onSuccess?: () => void
}
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
  const navigate = useNavigate($2);
  const { createJob, updateJob, getJobById } = useJobs($2);
  const [isFormLoading, setIsFormLoading] = useState($2);
  const [editorContent, setEditorContent] = useState($2);
=======
=======


export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {

<<<<<<< HEAD
  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const navigate = useNavigate(),
  const { createJob, updateJob, getJobById } = useJobs(),
  const [isFormLoading, setIsFormLoading] = useState(false),
  const [editorContent, setEditorContent] = useState(""),
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const {

>>>>>>> origin/chore/fix-lint-and-merge
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isRemote,
    setIsRemote,

<<<<<<< HEAD
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } = useJobForm({ jobId, onSuccess }),

  const { handleSubmit, setValue, formState } = form,
  const { isSubmitting } = formState,

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  useEffect(() => {

    if (jobId) {

      setIsFormLoading(true),
      getJobById(jobId)
        .then((job) => {}
          if (job) {}
            // Set form values;
            Object.entries(job).forEach(([key, value]) => {'
              if (key === 'published_date' && value) {}
                setStartDate(new Date(value as string)),'
                setValue('published_date', value as string)'
              } else if (key === 'expiry_date' && value) {}
                setEndDate(new Date(value as string)),'
                setValue('expiry_date', value as string)'
              } else if (key === 'is_remote') {}
                setIsRemote(value as boolean)'
              } else if (key === 'description') {}
                setEditorContent(value as string),'
                setValue('description', value as string)
              } else {}
                try {}
                  // @ts-ignore - We know these fields exist in our form;
                  setValue(key, value as any)
<<<<<<< HEAD
=======
                } catch (e) {
                  // Skip fields that don't exist in our form
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  useEffect(() => {;
    if (jobId) {;
      setIsFormLoading(true);

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
  useEffect(() => {;
    if (jobId) {;
      setIsFormLoading(true),;
=======

  useEffect(() => {;
    if (jobId) {;
<<<<<<< HEAD

import { JobSchemaType } from './validation',;
;
interface JobPostingFormProps {;
  jobId?:string,;
  onSuccess?:() => void,;
}
;

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

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setIsFormLoading(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      getJobById(jobId);
        .then((job) => {;
          if (job) {;
            // Set form values;
<<<<<<< HEAD

                setIsRemote(value as boolean);
              } else if (key === 'description') {;
                setEditorContent(value as string),;                setEditorContent(value as string),;

=======
<<<<<<< HEAD
            Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string)),;
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string)),;
=======
            Object && Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string));
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                setValue('expiry_date', value as string);
              } else if (key === 'is_remote') {;
                setIsRemote(value as boolean);
              } else if (key === 'description') {;
<<<<<<< HEAD
                setEditorContent(value as string),;
=======
                setEditorContent(value as string);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                setValue('description', value as string);
              } else {;
                try {;
                  // @ts-ignore - We know these fields exist in our form;
                  setValue(key, value as any);
                } catch (e) {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    submit_job;
  } = useJobForm ({ job_id, on_success });
;
  const { handle_submit, set_value, form_state } = form;
  const { is_submitting } = form_state;
;
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      setIsFormLoading (true);
      getJobById (job_id);
        .then ((job) => {}
          // Check condition;
if ( {) {}
  $2;
}
            // Set form values;
            Object.entries (job).for_each (([key, value]) => {}
              // Check condition;
if ( {) {}
  $2;
}
                setStartDate (new Date (value as string));'
                set_value ('published_date', value as string);
              } else // Check condition;
if ( {) {}
  $2;
}
                setEndDate (new Date (value as string));'
                set_value ('expiry_date', value as string);
              } else // Check condition;
if ( {) {}
  $2;
}
                setIsRemote (value as boolean);
              } else // Check condition;
if ( {) {}
  $2;
}
                setEditorContent (value as string);'
                set_value ('description', value as string);
              } else {}
                try {}
                  // @ts - ignore - We know these fields exist in our form;
                  set_value (key, value as any);
<<<<<<< HEAD

                  // Skip fields that don't exist in our form;

=======
                } catch (e) {
                  // Skip fields that don't exist in our form;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  // Skip fields that don't exist in our form;

                }
              }
            });
          }
<<<<<<< HEAD
                  // Skip fields that don't exist in our form;
                }
              }
            })
          }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        })
        .catch((error) => {"
          console.error("Failed to load job:", error),"
          toast.error("Failed to load job")
        })
        .finally(() => {}
          setIsFormLoading(false)
        })
    }

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)

<<<<<<< HEAD
  const onSubmit = async (values: JobSchemaType) => {}
    setIsFormLoading(true),

    try {}
=======
<<<<<<< HEAD
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)
  }, [setValue]);
  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [setValue]),

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true),

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const jobData = await submitJob(values)
      if (jobId) {}
        await updateJob(jobId, jobData),"
        toast.success("Job updated successfully!")
<<<<<<< HEAD
=======
      } else {
<<<<<<< HEAD
        await createJob(jobData);
        toast.success("Job posted successfully!");
        form.reset();
        setEditorContent("")
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        await createJob(jobData),

        toast.success("Job posted successfully!"),
        form.reset(),"
        setEditorContent("")
<<<<<<< HEAD
        });
=======

<<<<<<< HEAD
=======
        });


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleEditorChange = useCallback((value: string) => {;
    setEditorContent(value),;'
    setValue('description', value);
  }, [setValue]);
<<<<<<< HEAD
  const onSubmit = async (values: JobSchemaType) => {;
    setIsFormLoading(true);
    try {;
      const jobData = await submitJob(values),;
      if (jobId) {;
=======

<<<<<<< HEAD
=======
  const onSubmit = async (values: JobSchemaType) => {;
    setIsFormLoading(true);

    try {;
      const jobData = await submitJob(values),;

      if (jobId) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        await updateJob(jobId, jobData);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        toast && toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData);"
        toast && toast.success("Job posted successfully!");
        form && form.reset();"
        setEditorContent("");

<<<<<<< HEAD
      }
=======


<<<<<<< HEAD
      }
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (onSuccess) {;
        onSuccess();
      }
    } catch (error: any) {;
      console && console.error("Error creating/updating job:", error);
      toast && toast.error(error && error.message || "Failed to post job");
    } finally {;
      setIsFormLoading(false);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        });
        .catch((error) => {;
          console.error("Failed to load job:", error),;
          toast.error("Failed to load job");
        });
        .finally(() => {;
          setIsFormLoading(false);
        });
<<<<<<< HEAD
=======
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
    }
  }
  if (isLoading |isFormLoading) {
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

      if (onSuccess) {;
        onSuccess();

<<<<<<< HEAD
    setIsFormLoading($2);
    try {
      const jobData = await submitJob($2);
      if (jobId) {
        await updateJob($2);
        toast.success("Job updated successfully!")
      } else {
        await createJob($2);
        toast.success($2);
        form.reset($2);
        setEditorContent("")
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
      }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      console.error("Error creating/updating job:", error),
      toast.error(error.message || "Failed to post job")
    } finally {
      setIsFormLoading(false)
    }
  },

<<<<<<< HEAD
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Post a Job</h3>
          <p className="text-sm text-muted-foreground">
            Fill in the details below to create a job posting.
          </p>
        </div>
        <BasicInfoFields control={form.control} />
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;

  }
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        <DateFields 
          startDate={startDate} 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
        <DateFields
          startDate={startDate}
        <DateFields 
          startDate={startDate} 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>"
          <Label htmlFor="isRemote">
<<<<<<< HEAD
            <Input"
              type="checkbox""
              id="isRemote"
              checked={isRemote}"
              className="mr-2"

              id="isRemote"
              checked={isRemote}              className="mr-2"

=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    }
  },;
;
  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>,;
  }
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Form {...form}>;
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;
          <h3 className="text-lg font-medium">Post a Job</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <p className="text-sm text-muted-foreground">;
            Fill in the details below to create a job posting.;
          </p>;
        </div>;
<<<<<<< HEAD
;
        <BasicInfoFields control={form.control} />;
        ;
        <DateFields ;
          startDate={startDate} ;
        <BasicInfoFields control={form.control} />;
        <DateFields;
          startDate={startDate} ;
=======

<<<<<<< HEAD
=======
        <BasicInfoFields control={form && form.control} />;

        <DateFields
          startDate={startDate} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />;
<<<<<<< HEAD
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
=======

              className="mr-2"

              onChange={(e) => setIsRemote(e.target.checked)}
            />
            Remote;
          </Label>
        </div>
        <DescriptionFields;
          control={form.control}
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />"
        <Button type="submit" disabled={isSubmitting |isFormLoading}>"
          {isSubmitting |isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}

              className="mr-2"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <DescriptionFields 

        <DescriptionFields 

          control={form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />
        <Button type="submit" disabled={isSubmitting || isFormLoading}>
<<<<<<< HEAD
=======
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </Button>
      </form>
    </Form>
  )
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onChange={(e) => setIsRemote(e && e.target.checked)}
        .catch ((error) => {
          console.error ("Failed to load job:", error);
          toast.error ("Failed to load job");
        });
        .finally (() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          setIsFormLoading (false);
        });
    }
  }, [job_id, getJobById, set_value, setStartDate, setEndDate, setIsRemote]);
;

      setIsFormLoading (false);
    }
  }
;

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

            Remote;
          </Label>;
        </div>;

}

        <div>;
          <Label html_for="is_remote">;
            <Input;
              type="checkbox";
              id="is_remote";
              checked={is_remote}
              className="mr - 2";
              on_change={(e) => setIsRemote (e.target.checked)}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
        <div>;
          <Label htmlFor="isRemote">;
            <Input;
              type="checkbox";
              id="isRemote";
              checked={isRemote}
              className="mr-2";
              onChange={(e) => setIsRemote(e.target.checked)}
            />;
            Remote;
          </Label>;
        </div>;

}

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
<<<<<<< HEAD

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
}
}
}

;
;
}
=======
}) 
}
<<<<<<< HEAD
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
}
}
}
;
;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
