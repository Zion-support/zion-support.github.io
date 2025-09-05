
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

interface JobPostingFormProps {
  jobId?: string;
  onSuccess?: () => void;
}

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("&quot;);
  
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

  useEffect(() => {
    if (jobId) {
      setIsFormLoading(true);
      getJobById(jobId)
        .then((job) => {
          if (job) {
            // Set form values
            Object.entries(job).forEach(([key, value]) => {
              if (key === 'published_date' && value) {
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {
                setEndDate(new Date(value as string));
                setValue('expiry_date', value as string);
              } else if (key === 'is_remote') {
                setIsRemote(value as boolean);
              } else if (key === 'description') {
                setEditorContent(value as string);
                setValue('description', value as string);
              } else {
                try {
                  // @ts-ignore - We know these fields exist in our form
                  setValue(key, value as any);
                } catch (e) {
                  // Skip fields that don't exist in our form
                }
              }
            });
          }
        })
        .catch((error) => {
          console.error(&quot;Failed to load job:&quot;, error);
          toast.error(&quot;Failed to load job&quot;);
        })
        .finally(() => {
          setIsFormLoading(false);
        });
    }
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value);
    setValue('description', value);
  }, [setValue]);

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);

    try {
      const jobData = await submitJob(values);
      
      if (jobId) {
        await updateJob(jobId, jobData);
        toast.success(&quot;Job updated successfully!&quot;);
      } else {
        await createJob(jobData);
        toast.success(&quot;Job posted successfully!&quot;);
        form.reset();
        setEditorContent("&quot;);
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      console.error(&quot;Error creating/updating job:&quot;, error);
      toast.error(error.message || &quot;Failed to post job&quot;);
    } finally {
      setIsFormLoading(false);
    }
  };

  if (isLoading || isFormLoading) {
    return <div className=&quot;flex items-center justify-center p-8&quot;>Loading...</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className=&quot;space-y-6&quot;>
        <div>
          <h3 className=&quot;text-lg font-medium&quot;>Post a Job</h3>
          <p className=&quot;text-sm text-muted-foreground&quot;>
            Fill in the details below to create a job posting.
          </p>
        </div>

        <BasicInfoFields control={form.control} />
        
        <DateFields 
          startDate={startDate} 
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <div>
          <Label htmlFor=&quot;isRemote&quot;>
            <Input
              type=&quot;checkbox&quot;
              id=&quot;isRemote&quot;
              checked={isRemote}
              className=&quot;mr-2&quot;
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

        <Button type=&quot;submit&quot; disabled={isSubmitting || isFormLoading}>
          {isSubmitting || isFormLoading ? &quot;Submitting...&quot; : jobId ? &quot;Update Job&quot; : &quot;Post Job&quot;}
        </Button>
      </form>
    </Form>
  );
}
