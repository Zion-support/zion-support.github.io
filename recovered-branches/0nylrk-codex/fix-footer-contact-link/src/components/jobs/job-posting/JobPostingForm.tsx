<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f



import React, { useState, useEffect, useCallback } from 'react';
=======

<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useNavigate  } from 'react-router-dom';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======





>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
import { Form } from "@/components/ui/form";
import { useJobForm  } from './useJobForm';
import { BasicInfoFields  } from './BasicInfoFields';
import { DateFields  } from './DateFields';
import { DescriptionFields  } from './DescriptionFields';
import { useJobs } from "@/hooks/useJobs";
import { JobSchemaType } from './validation';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Form } from "@/components/ui/form",
import { useJobForm } from './useJobForm',
import { BasicInfoFields } from './BasicInfoFields',
import { DateFields } from './DateFields',
import { DescriptionFields } from './DescriptionFields',
import { useJobs } from "@/hooks/useJobs",
import { JobSchemaType } from './validation',
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface JobPostingFormProps {
=======
<<<<<<< HEAD
=======
'
import React, { useState, useEffect, useCallback } from 'react';'
import {useNavigate} from 'react-router-dom';
import {toast} from "sonner";"
import {Input} from "@/components/ui/input";"
import {Label} from "@/components/ui/label";"
import {Button} from "@/components/ui/button";"
import {Form} from "@/components/ui/form";'
import {useJobForm} from './useJobForm';'
import {BasicInfoFields} from './BasicInfoFields';'
import {DateFields} from './DateFields';'
import {DescriptionFields} from './DescriptionFields';"
import {useJobs} from "@/hooks/useJobs";'
import {JobSchemaType} from './validation';'
import React, { useState, useEffect, useCallback } from 'react','
import { useNavigate } from 'react-router-dom',
"
import { toast } from "sonner","
import { Input } from "@/components/ui/input","
import { Label } from "@/components/ui/label","
import { Button } from "@/components/ui/button",
"
import { Form } from "@/components/ui/form",'
import { useJobForm } from './useJobForm','
import { BasicInfoFields } from './BasicInfoFields','
import { DateFields } from './DateFields','
import { DescriptionFields } from './DescriptionFields',"
import { useJobs } from "@/hooks/useJobs",'
import { JobSchemaType } from './validation',
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


interface JobPostingFormProps {};
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm && JobPostingForm.tsx;

<<<<<<< HEAD
:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / jobs / job - posting / JobPostingForm.tsx;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / jobs / job - posting / JobPostingForm.tsx;'
import React, { useState, useEffect, useCallback } from 'react';'
import {use_navigate} from 'react-router-dom';'
import { toast } from './sonner';'
import { Input } from '@/components / ui / input';'
import { Label } from '@/components / ui / label';'
import { Button } from '@/components / ui / button';'
import { Form } from '@/components / ui / form';'
import {useJobForm} from './useJobForm';'
import {BasicInfoFields} from './BasicInfoFields';'
import {DateFields} from './DateFields';'
import {DescriptionFields} from './DescriptionFields';'
import { use_jobs } from '@/hooks / use_jobs';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {JobSchemaType} from './validation';



  const navigate = useNavigate();
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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






import { toast } from "sonner",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
<<<<<<< HEAD
import { Button } from "@/components/ui/button",  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React, { useState, useEffect, useCallback } from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from "sonner";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
=======
import { Button } from "@/components/ui/button",


import { Form } from "@/components/ui/form",
import { useJobForm } from './useJobForm',
import { BasicInfoFields } from './BasicInfoFields',
import { DateFields } from './DateFields',
import { DescriptionFields } from './DescriptionFields',
import { useJobs } from "@/hooks/useJobs",
import { JobSchemaType } from './validation',


interface JobPostingFormProps {
interface JobPostingFormProps {
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm && JobPostingForm.tsx;

:recovered - branches / 0nylrk - codex / fix - footer - contact - link / src / components / jobs / job - posting / JobPostingForm.tsx;
import React, { useState, useEffect, useCallback } from 'react';
import {use_navigate} from 'react-router-dom';
import { toast } from './sonner';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Button } from '@/components / ui / button';
import { Form } from '@/components / ui / form';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {useJobForm} from './useJobForm';
import {BasicInfoFields} from './BasicInfoFields';
import {DateFields} from './DateFields';
import {DescriptionFields} from './DescriptionFields';
<<<<<<< HEAD
import {useJobs} from "@/hooks/useJobs";
import {JobSchemaType} from './validation';
import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",  const navigate = useNavigate();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { use_jobs } from '@/hooks / use_jobs';
import {JobSchemaType} from './validation';


export function JobPostingForm(): any ({ jobId, onSuccess }: JobPostingFormProps) {;

  const navigate = useNavigate();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);"
  const [editorContent, setEditorContent] = useState("");
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface JobPostingFormProps {
  job_id?: string;
  on_success?: () => void;
}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
export /**
 * JobPostingForm - Function description
=======



interface JobPostingFormProps {}
  job_id?: string;
  on_success?: () => void;
}
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {}
export /**;
 * JobPostingForm - Function description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
 */
function JobPostingForm() {}
  const navigate = use_navigate ();
  const { create_job, update_job, getJobById } = use_jobs ();
  const [isFormLoading, setIsFormLoading] = useState (false);"
  const [editor_content, setEditorContent] = useState ("");
;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const {
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  const {}
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





<<<<<<< HEAD

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {

  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  const navigate = useNavigate(),
  const { createJob, updateJob, getJobById } = useJobs(),
  const [isFormLoading, setIsFormLoading] = useState(false),
  const [editorContent, setEditorContent] = useState(""),
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const {
=======
  const {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isRemote,
    setIsRemote,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    submitJob
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    submitJob;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    submitJob

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  } = useJobForm({ jobId, onSuccess }),

  const { handleSubmit, setValue, formState } = form,
  const { isSubmitting } = formState,
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  useEffect(() => {
=======
    submitJob  useEffect(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    submitJob  useEffect(() => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  useEffect(() => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (jobId) {
=======


  useEffect(() => {}
    if (jobId) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
                } catch (e) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  // Skip fields that don't exist in our form
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  // Skip fields that don't exist in our form

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
                } catch (e) {'
                  // Skip fields that don't exist in our form;
'
import React, { useState, useEffect, useCallback } from 'react',;'
import { useNavigate } from 'react-router-dom',;"
import { toast } from "sonner",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { Button } from "@/components/ui/button",;"
import { Form } from "@/components/ui/form",;'
import { useJobForm } from './useJobForm',;'
import { BasicInfoFields } from './BasicInfoFields',;'
import { DateFields } from './DateFields',;'
import { DescriptionFields } from './DescriptionFields',;"
import { useJobs } from "@/hooks/useJobs",;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { JobSchemaType } from './validation',;
interface JobPostingFormProps {;
  jobId?: string,;
  onSuccess?: () => void;
}
;
<<<<<<< HEAD
export function JobPostingForm() { return null; }
  const { createJob, updateJob, getJobById } = useJobs(),;
  const [isFormLoading, setIsFormLoading] = useState(false),;"
=======
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {;
  const navigate = useNavigate(),;
  const { createJob, updateJob, getJobById } = useJobs(),;
  const [isFormLoading, setIsFormLoading] = useState(false),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

      setIsFormLoading(true);
'
import React, { useState, useEffect, useCallback } from 'react',;'
import { useNavigate } from 'react-router-dom',;"
import { toast } from "sonner",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { Button } from "@/components/ui/button",;"
import { Form } from "@/components/ui/form",;'
import { useJobForm } from './useJobForm',;'
import { BasicInfoFields } from './BasicInfoFields',;'
import { DateFields } from './DateFields',;'
import { DescriptionFields } from './DescriptionFields',;"
import { useJobs } from "@/hooks/useJobs",;'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { JobSchemaType } from './validation',;
;
interface JobPostingFormProps {;
  jobId?:string,;
  onSuccess?:() => void,;
}
;
<<<<<<< HEAD
export function JobPostingForm() { return null; }
  const { createJob, updateJob, getJobById } = useJobs(),;
  const [isFormLoading, setIsFormLoading] = useState(false),;"
=======
export function JobPostingForm({ jobId, onSuccess } JobPostingFormProps) {;
  const navigate = useNavigate(),;
  const { createJob, updateJob, getJobById } = useJobs(),;
  const [isFormLoading, setIsFormLoading] = useState(false),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      setIsFormLoading(true),;
  useEffect(() => {;
    if (jobId) {;
      setIsFormLoading(true),;
      setIsFormLoading(true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      getJobById(jobId);
        .then((job) => {;
          if (job) {;
            // Set form values;
<<<<<<< HEAD

            Object.entries(job).forEach(([key, value]) => {;'
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string)),;'
                setValue('published_date', value as string);'
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string)),;
'
                setValue('expiry_date', value as string);'
              } else if (key === 'is_remote') {;
<<<<<<< HEAD
=======
                  // Skip fields that don't exist in our form      setIsFormLoading(true);              } else if (key === 'is_remote') {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  // Skip fields that don't exist in our form      setIsFormLoading(true);              } else if (key === 'is_remote') {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                setIsRemote(value as boolean);
              } else if (key === 'description') {;
                setEditorContent(value as string),;                setEditorContent(value as string),;
=======
                setIsRemote(value as boolean);'
              } else if (key === 'description') {;


                setEditorContent(value as string),;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            Object && Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string));
            Object.entries(job).forEach(([key, value]) => {;
              if (key === 'published_date' && value) {;
                setStartDate(new Date(value as string)),;
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {;
                setEndDate(new Date(value as string)),;
                setValue('expiry_date', value as string);
              } else if (key === 'is_remote') {;
                setIsRemote(value as boolean);
              } else if (key === 'description') {;
                setEditorContent(value as string);
                setEditorContent(value as string),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                setValue('description', value as string);
              } else {;
                try {;
                  // @ts-ignore - We know these fields exist in our form;
                  setValue(key, value as any);
                } catch (e) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                } catch (e) {
<<<<<<< HEAD
=======
                } catch (e) {

                  // Skip fields that don't exist in our form;
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

  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),


  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)

  }, [setValue]),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                  // Skip fields that don't exist in our form;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
                } catch (e) {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  // Skip fields that don't exist in our form;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                }
              }
            });
          }

        })
        .catch((error) => {"
          console.error("Failed to load job:", error),"
          toast.error("Failed to load job")
        })
        .finally(() => {}
          setIsFormLoading(false)
        })
    }
<<<<<<< HEAD
=======

  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),


  const handleEditorChange = useCallback((value: string) => {}
    setEditorContent(value)'
    setValue('description', value)

<<<<<<< HEAD
<<<<<<< HEAD
=======
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)
<<<<<<< HEAD
=======
  }, [setValue]);
  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }, [setValue]),
=======
                } catch (e) {  }, [setValue]),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                } catch (e) {  }, [setValue]),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const onSubmit = async (values: JobSchemaType) => {}
    setIsFormLoading(true),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    try {}
      const jobData = await submitJob(values)
      if (jobId) {}
        await updateJob(jobId, jobData),"
        toast.success("Job updated successfully!")
<<<<<<< HEAD
      } else {
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        await createJob(jobData);
        toast.success("Job posted successfully!");
        form.reset();
        setEditorContent("")
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    try {
      const jobData = await submitJob(values)
      if (jobId) {
        await updateJob(jobId, jobData),
        toast.success("Job updated successfully!")
      } else {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        await createJob(jobData),
=======
      } else {}
        await createJob(jobData),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        toast.success("Job posted successfully!"),
        form.reset(),"
        setEditorContent("")

<<<<<<< HEAD
        });

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

        await updateJob(jobId, jobData);
<<<<<<< HEAD
        toast && toast.success("Job updated successfully!");        await updateJob(jobId, jobData);
=======
        await updateJob(jobId, jobData);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        toast && toast.success("Job updated successfully!");
        await updateJob(jobId, jobData);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        toast && toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData);"
        toast && toast.success("Job posted successfully!");
        form && form.reset();"
        setEditorContent("");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
      if (onSuccess) {;
        onSuccess();
      }
    } catch (error: any) {;
      console && console.error("Error creating/updating job:", error);
      toast && toast.error(error && error.message || "Failed to post job");
    } finally {;
      setIsFormLoading(false);
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      }
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      if (onSuccess) {;
        onSuccess();



      }
<<<<<<< HEAD
    } catch (error: any) {

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
<<<<<<< HEAD
=======
=======
    } catch (error: any) {"
      console.error("Error creating/updating job:", error);"
      toast.error(error.message |"Failed to post job")
    } finally {}
      setIsFormLoading(false)
    }
  }
  if (isLoading |isFormLoading) {"
      console.error("Error creating/updating job:", error),"
      toast.error(error.message || "Failed to post job")
    } finally {}
      setIsFormLoading(false)
    }
  },

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
        <DateFields
          startDate={startDate}
        <DateFields 
          startDate={startDate} 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  if (isLoading || isFormLoading) {;"
    return <div className="flex items-center justify-center p-8">Loading...</div>;

  }
  return (


        <DateFields;
          startDate={startDate} 


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>"
          <Label htmlFor="isRemote">
            <Input"
              type="checkbox""
              id="isRemote"
              checked={isRemote}"
              className="mr-2"
<<<<<<< HEAD
<<<<<<< HEAD
=======
    } catch (error: any) {;
      console.error("Error creating/updating job:", error);
      toast.error(error.message || "Failed to post job");
    } finally {;
      setIsFormLoading(false);
<<<<<<< HEAD
=======
      }              type="checkbox"
              id="isRemote"
              checked={isRemote}              className="mr-2"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }              type="checkbox"
              id="isRemote"
              checked={isRemote}              className="mr-2"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======

    }
  };
  if (isLoading || isFormLoading) {;"
=======
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


        <DateFields
          startDate={startDate}
        <DateFields 
          startDate={startDate} 
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>
          <Label htmlFor="isRemote">
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
  }
  if (isLoading |isFormLoading) {


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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return <div className="flex items-center justify-center p-8">Loading...</div>;
  }
;
  return (;

<<<<<<< HEAD
    <Form {...form}>;"
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;"
          <h3 className="text-lg font-medium">Post a Job</h3>;"
=======
    <Form {...form}>;
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">;
        <div>;
          <h3 className="text-lg font-medium">Post a Job</h3>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <p className="text-sm text-muted-foreground">;
            Fill in the details below to create a job posting.;
          </p>;
        </div>;

<<<<<<< HEAD
=======
        <BasicInfoFields control={form && form.control} />;

        <DateFields
          startDate={startDate} 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />;

<<<<<<< HEAD
            <Input"
              type="checkbox""
              id="isRemote"
              checked={isRemote}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div>;
          <Label htmlFor="isRemote">;
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}



              className="mr-2"


        <div>;
          <Label htmlFor="isRemote">;
            <Input;
              type="checkbox";
              id="isRemote";
              checked={isRemote}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              className="mr-2"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className="mr-2"


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <DescriptionFields 
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



              className="mr-2"


        <DescriptionFields 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          control={form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />
        <Button type="submit" disabled={isSubmitting || isFormLoading}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        <DescriptionFields;
          control={form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />"
        <Button type="submit" disabled={isSubmitting || isFormLoading}>"
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </Button>
      </form>
    </Form>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
}
;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

              onChange={(e) => setIsRemote(e && e.target.checked)}

        .catch ((error) => {"
          console.error ("Failed to load job:", error);"
          toast.error ("Failed to load job");
        });
        .finally (() => {}
=======

              onChange={(e) => setIsRemote(e && e.target.checked)}
        .catch ((error) => {
          console.error ("Failed to load job:", error);
          toast.error ("Failed to load job");
        });
        .finally (() => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          setIsFormLoading (false);
        });
    }
  }, [job_id, getJobById, set_value, setStartDate, setEndDate, setIsRemote]);
;
<<<<<<< HEAD
  const handleEditorChange = useCallback ((value: string) => {}
    setEditorContent (value),'
    set_value ('description', value);
  }, [set_value]);
;
  const on_submit = async (values: JobSchemaType) => {}
    setIsFormLoading (true);
;
    try {}
      const job_data = await submit_job (values),
      // Check condition;
if ( {) {}
  $2;
}
        await update_job (job_id, job_data);"
        toast.success ("Job updated successfully!");
      } else {}
        await create_job (job_data);"
        toast.success ("Job posted successfully!");
        form.reset ();"
        setEditorContent ("");
      }
      // Check condition;
if ( {) {}
  $2;
}
        on_success ();
      }
    } catch (error: any) {"
      console.error ("Error creating / updating job:", error);"
      toast.error (error.message || "Failed to post job");
    } finally {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsFormLoading (false);
    }
  }
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}"
    return <div className="flex items - center justify - center p - 8">Loading...</div>;
  }
  return (
    <Form {...form}>;"
      <form on_submit={handle_submit (on_submit)} className="space - y-6">;
        <div>;"
          <h3 className="text - lg font - medium">Post a Job</h3>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
        <div>;"
          <Label html_for="is_remote">;
            <Input;"
              type="checkbox";"
              id="is_remote";
              checked={is_remote}"
              className="mr - 2";
              on_change={(e) => setIsRemote (e.target.checked)}



            />;
=======
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}            />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}            />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            Remote;
          </Label>;
        </div>;
<<<<<<< HEAD
}}
}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
}
<<<<<<< HEAD
=======

}
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
}

;
;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
