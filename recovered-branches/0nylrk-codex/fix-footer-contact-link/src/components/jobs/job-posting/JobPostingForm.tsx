
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react',
import { useNavigate } from 'react-router-dom',
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
=======
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from &quot;sonner&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Form } from &quot;@/components/ui/form&quot;;
import { useJobForm } from './useJobForm';
import { BasicInfoFields } from './BasicInfoFields';
import { DateFields } from './DateFields';
import { DescriptionFields } from './DescriptionFields';
import { useJobs } from &quot;@/hooks/useJobs&quot;;
import { JobSchemaType } from './validation';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface JobPostingFormProps {
  jobId?: string,
  onSuccess?: () => void
}

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
<<<<<<< HEAD
  const navigate = useNavigate(),
  const { createJob, updateJob, getJobById } = useJobs(),
  const [isFormLoading, setIsFormLoading] = useState(false),
  const [editorContent, setEditorContent] = useState(""),
=======
  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
=======
import React, {_useState, _useEffect, _useCallback} from 'react';

interface JobPostingFormProps {_jobId?: string;
  onSuccess?: () => void;}

export function JobPostingForm(_{_jobId, _onSuccess}: JobPostingFormProps) {_const _navigate = useNavigate();
  const { createJob, _updateJob, _getJobById} = useJobs();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
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
  } = useJobForm({ jobId, onSuccess }),

  const { handleSubmit, setValue, formState } = form,
  const { isSubmitting } = formState,

  useEffect(() => {
    if (jobId) {
      setIsFormLoading(true),
=======
  const {_form, _isLoading, _startDate, _setStartDate, _endDate, _setEndDate, _isRemote, _setIsRemote, _submitJob} = useJobForm({_jobId, _onSuccess});

  const {_handleSubmit, _setValue, _formState} = form;
  const {_isSubmitting} = formState;

  useEffect__(() => {_if (jobId) {
      setIsFormLoading(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      getJobById(jobId)
        .then(_(job) => {
          if (job) {
            // Set form values
            Object.entries(job).forEach(_([key, _value]) => {
              if (key === 'published_date' && value) {
<<<<<<< HEAD
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
                }
=======
                setStartDate(new Date(value as string));
                setValue('published_date', _value as string);} else if (key === 'expiry_date' && value) {_setEndDate(new Date(value as string));
                setValue('expiry_date', _value as string);} else if (key === 'is_remote') {_setIsRemote(value as boolean);} else if (key === 'description') {_setEditorContent(value as string);
                setValue('description', _value as string);} else {_try {
                  // @ts-ignore - We know these fields exist in our form
                  setValue(key, _value as any);} catch (e) {_// Skip fields that don't exist in our form}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }
            })
          }
        })
<<<<<<< HEAD
        .catch((error) => {
<<<<<<< HEAD
          console.error("Failed to load job:", error),
          toast.error("Failed to load job")
=======
          console.error(&quot;Failed to load job:&quot;, error);
          toast.error(&quot;Failed to load job&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        })
        .finally(() => {
          setIsFormLoading(false)
        })
=======
        .catch(_(error) => {_toast.error("Failed to load job");})
        .finally__(() => {_setIsFormLoading(false);});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]),

<<<<<<< HEAD
  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value),
    setValue('description', value)
  }, [setValue]),

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true),

    try {
      const jobData = await submitJob(values),
      
      if (jobId) {
<<<<<<< HEAD
        await updateJob(jobId, jobData),
        toast.success("Job updated successfully!")
      } else {
        await createJob(jobData),
        toast.success("Job posted successfully!"),
        form.reset(),
        setEditorContent("")
=======
        await updateJob(jobId, jobData);
        toast.success(&quot;Job updated successfully!&quot;);
      } else {
        await createJob(jobData);
        toast.success(&quot;Job posted successfully!&quot;);
        form.reset();
        setEditorContent("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      if (onSuccess) {
        onSuccess()
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Error creating/updating job:", error),
      toast.error(error.message || "Failed to post job")
=======
      console.error(&quot;Error creating/updating job:&quot;, error);
      toast.error(error.message || &quot;Failed to post job&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsFormLoading(false)
    }
  },

  if (isLoading || isFormLoading) {
<<<<<<< HEAD
    return <div className="flex items-center justify-center p-8">Loading...</div>
=======
    return <div className=&quot;flex items-center justify-center p-8&quot;>Loading...</div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
=======
  const _handleEditorChange = useCallback(_(value: string) => {_setEditorContent(value);
    setValue('description', _value);}, [setValue]);

  const _onSubmit = async (_values: JobSchemaType) => {_setIsFormLoading(true);

    try {
      const _jobData = await submitJob(values);
      
      if (jobId) {
        await updateJob(jobId, _jobData);
        toast.success("Job updated successfully!");} else {_await createJob(jobData);
        toast.success("Job posted successfully!");
        form.reset();
        setEditorContent("");}

      if (onSuccess) {_onSuccess();}
    } catch (error: unknown) {_toast.error(error.message || "Failed to post job");} finally {_setIsFormLoading(false);}
  };

  if (isLoading || isFormLoading) {_return <div className="flex items-center justify-center p-8">Loading...</div>;}

  return (
    <Form {_...form}>
      <form onSubmit={_handleSubmit(onSubmit)} className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div>
          <h3 className=&quot;text-lg font-medium&quot;>Post a Job</h3>
          <p className=&quot;text-sm text-muted-foreground&quot;>
            Fill in the details below to create a job posting.
          </p>
        </div>

        <BasicInfoFields control={_form.control} />
        
        <DateFields 
          startDate={_startDate} 
          setStartDate={_setStartDate}
          endDate={_endDate}
          setEndDate={_setEndDate}
        />

        <div>
          <Label htmlFor=&quot;isRemote&quot;>
            <Input
<<<<<<< HEAD
              type=&quot;checkbox&quot;
              id=&quot;isRemote&quot;
              checked={isRemote}
              className=&quot;mr-2&quot;
              onChange={(e) => setIsRemote(e.target.checked)}
=======
              type="checkbox"
              id="isRemote"
              checked={_isRemote}
              className="mr-2"
              onChange={_(_e) => setIsRemote(e.target.checked)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            />
            Remote
          </Label>
        </div>

        <DescriptionFields 
          control={_form.control} 
          handleEditorChange={_handleEditorChange}
          editorContent={_editorContent}
        />

<<<<<<< HEAD
        <Button type=&quot;submit&quot; disabled={isSubmitting || isFormLoading}>
          {isSubmitting || isFormLoading ? &quot;Submitting...&quot; : jobId ? &quot;Update Job&quot; : &quot;Post Job&quot;}
=======
        <Button type="submit" disabled={_isSubmitting || isFormLoading}>
          {_isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </Button>
      </form>
    </Form>
  )
}
