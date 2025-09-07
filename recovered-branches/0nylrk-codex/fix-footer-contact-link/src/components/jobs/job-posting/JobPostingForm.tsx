import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
<<<<<<< HEAD
=======
import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
=======
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
=======



<<<<<<< HEAD



:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
import React, { useState, useEffect, useCallback } from 'react';

import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",

import { Form } from "@/components/ui/form",
import { useJobForm } from './useJobForm',
import { BasicInfoFields } from './BasicInfoFields',
import { DateFields } from './DateFields',
import { DescriptionFields } from './DescriptionFields',
import { useJobs } from "@/hooks/useJobs",
import { JobSchemaType } from './validation',

interface JobPostingFormProps {

>>>>>>> origin/resolved-merge-conflicts

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
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
=======
<<<<<<< HEAD
=======
=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
=======

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
>>>>>>> origin/resolved-merge-conflicts
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
>>>>>>> origin/resolved-merge-conflicts
import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",  const navigate = useNavigate();
<<<<<<< HEAD
=======
=======

import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",

import {useJobForm} from './useJobForm';
import {BasicInfoFields} from './BasicInfoFields';
import {DateFields} from './DateFields';
import {DescriptionFields} from './DescriptionFields';

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
export function JobPostingForm(): any ({ jobId, onSuccess }: JobPostingFormProps) {;
interface JobPostingFormProps {
  jobId?: string,
  onSuccess?: () => void
}

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {;
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");

interface JobPostingFormProps {
  job_id?: string;
  on_success?: () => void;
}
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
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

<<<<<<< HEAD
=======
  const {}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const {
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isRemote,
    setIsRemote,
<<<<<<< HEAD
    submitJob  useEffect(() => {
    if (jobId) {
      setIsFormLoading(true),
    submitJob
  } = useJobForm($2);
=======
<<<<<<< HEAD

  } = useJobForm({ jobId, onSuccess }),

=======
<<<<<<< HEAD
    submitJob
  } = useJobForm($2);
=======

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

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const { handleSubmit, setValue, formState } = form,
  const { isSubmitting } = formState,

  useEffect(() => {
    if (jobId) {
      setIsFormLoading($2);
      getJobById(jobId)
        .then((job) => {
          if (job) {
            // Set form values
            Object.entries(job).forEach(([key, value]) => {
              if (key = $2;
                setValue('published_date', value as string)
              } else if (key = $2;
                setValue('expiry_date', value as string)
              } else if (key === 'is_remote') {
                setIsRemote(value as boolean)
              } else if (key === 'description') {
                setEditorContent($2);
                setValue('description', value as string)
              } else {
                try {
                  // @ts-ignore - We know these fields exist in our form
                  setValue(key, value as any)
<<<<<<< HEAD
                } catch (e) {
                  // Skip fields that don't exist in our form      setIsFormLoading(true);              } else if (key === 'is_remote') {;
                setIsRemote(value as boolean);
              } else if (key === 'description') {;
                setEditorContent(value as string),;                setEditorContent(value as string),;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
                } catch (e) {
                  // Skip fields that don't exist in our form
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setIsFormLoading(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      getJobById(jobId);
        .then((job) => {;
          if (job) {;
            // Set form values;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

                setIsRemote(value as boolean);
              } else if (key === 'description') {;
                setEditorContent(value as string),;                setEditorContent(value as string),;

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                setValue('description', value as string);
              } else {;
                try {;
                  // @ts-ignore - We know these fields exist in our form;
                  setValue(key, value as any);
                } catch (e) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
                  // Skip fields that don't exist in our form
=======
<<<<<<< HEAD

                  // Skip fields that don't exist in our form;

                  // Skip fields that don't exist in our form;

=======
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                }
              }
            });
          }
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        })
        .catch((error) => {
          console.error($2);
          toast.error("Failed to load job")
        })
        .finally(() => {
          setIsFormLoading(false)
        })
    }
<<<<<<< HEAD
                } catch (e) {  }, [setValue]),
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),
=======
>>>>>>> origin/resolved-merge-conflicts

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true),

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
        toast && toast.success("Job updated successfully!");        await updateJob(jobId, jobData);
        toast && toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData);
        toast && toast.success("Job posted successfully!");
        form && form.reset();
        setEditorContent("");
      }
      if (onSuccess) {;
        onSuccess();
      }
        await createJob(jobData),;
        toast.success("Job posted successfully!"),;
        form.reset(),;
        setEditorContent("");
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent($2);
    setValue('description', value)
  }, [setValue]),
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
  const onSubmit = async (values: JobSchemaType) => {
=======
  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)

  const onSubmit = async (values: JobSchemaType) => {}
    setIsFormLoading(true),

<<<<<<< HEAD
    try {}
      const jobData = await submitJob(values)
      if (jobId) {}
        await updateJob(jobId, jobData),"
        toast.success("Job updated successfully!")

        await createJob(jobData),

        toast.success("Job posted successfully!"),
        form.reset(),"
        setEditorContent("")

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        toast && toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData);"
        toast && toast.success("Job posted successfully!");
        form && form.reset();"
        setEditorContent("");

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

      if (onSuccess) {;
        onSuccess();

=======
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
>>>>>>> merged-prs-20250907-203621

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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
      }
<<<<<<< HEAD
      if (onSuccess) {
        onSuccess()
      }
    } catch (error: any) {
      console.error($2);
=======

=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
      }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      console.error("Error creating/updating job:", error),
>>>>>>> origin/resolved-merge-conflicts
      toast.error(error.message || "Failed to post job")
    } finally {
      setIsFormLoading(false)
    }
  },

  if (isLoading || isFormLoading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }
  if (isLoading |isFormLoading) {

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
        <DateFields
          startDate={startDate}
<<<<<<< HEAD
=======
        <DateFields 
          startDate={startDate} 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>
          <Label htmlFor="isRemote">
<<<<<<< HEAD
=======
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
>>>>>>> origin/resolved-merge-conflicts
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}
              className="mr-2"
      }              type="checkbox"
              id="isRemote"
              checked={isRemote}              className="mr-2"

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <Form {...form}>;
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;
          <h3 className="text-lg font-medium">Post a Job</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <p className="text-sm text-muted-foreground">;
            Fill in the details below to create a job posting.;
          </p>;
        </div>;
<<<<<<< HEAD

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />;
<<<<<<< HEAD

=======
<<<<<<< HEAD
        <div>;
          <Label htmlFor="isRemote">;
            <Input;
              type="checkbox";
              id="isRemote";
              checked={isRemote}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

              className="mr-2"

=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <DescriptionFields 

        <DescriptionFields 

>>>>>>> origin/resolved-merge-conflicts
          control={form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />
        <Button type="submit" disabled={isSubmitting || isFormLoading}>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        </Button>
      </form>
    </Form>
  )
<<<<<<< HEAD
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}            />;
            Remote;
          </Label>;
        </div>;
}
}

}
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
        <div>;
          <Label html_for="is_remote">;
            <Input;
              type="checkbox";
              id="is_remote";
              checked={is_remote}
              className="mr - 2";
              on_change={(e) => setIsRemote (e.target.checked)}

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
}
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
