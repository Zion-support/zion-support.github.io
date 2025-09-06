<<<<<<< HEAD
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate  } from 'react-router-dom';
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
interface JobPostingFormProps {
=======
:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/job-posting/JobPostingForm && JobPostingForm.tsx;

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
interface JobPostingFormProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  jobId?: string;
  onSuccess?: () => void;
}
<<<<<<< HEAD
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {

=======

export function JobPostingForm(): any ({ jobId, onSuccess }: JobPostingFormProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
<<<<<<< HEAD
  const {
=======

  const {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    form;
    isLoading;
    startDate;
    setStartDate;
    endDate;
    setEndDate;
    isRemote;
    setIsRemote;
    submitJob;
  } = useJobForm({ jobId, onSuccess });
  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;
<<<<<<< HEAD
  useEffect(() => {
    if (jobId) {
=======

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
                  // Skip fields that don't exist in our form;
                }
              }
            });
          }
        });
        .catch((error) => {;
          console && console.error("Failed to load job:", error);
          toast && toast.error("Failed to load job");
        });
        .finally(() => {;
          setIsFormLoading(false);
        });
    }
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);
<<<<<<< HEAD
  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value)
    setValue('description', value)
  }, [setValue]);
  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);
    try {
      const jobData = await submitJob(values)
      if (jobId) {
=======

  const handleEditorChange = useCallback((value: string) => {;
    setEditorContent(value),;
    setValue('description', value);
  }, [setValue]);

  const onSubmit = async (values: JobSchemaType) => {;
    setIsFormLoading(true);

    try {;
      const jobData = await submitJob(values),;

      if (jobId) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        await updateJob(jobId, jobData);
        toast && toast.success("Job updated successfully!");
      } else {;
        await createJob(jobData);
        toast && toast.success("Job posted successfully!");
        form && form.reset();
        setEditorContent("");
      }
<<<<<<< HEAD
      if (onSuccess) {
        onSuccess()
      }
    } catch (error: any) {
      console.error("Error creating/updating job:", error);
      toast.error(error.message |"Failed to post job")
    } finally {
      setIsFormLoading(false)
=======

      if (onSuccess) {;
        onSuccess();
      }
    } catch (error: any) {;
      console && console.error("Error creating/updating job:", error);
      toast && toast.error(error && error.message || "Failed to post job");
    } finally {;
      setIsFormLoading(false);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  }
  if (isLoading |isFormLoading) {

<<<<<<< HEAD
    return <div className="flex items-center justify-center p-8">Loading...</div>
=======
  if (isLoading || isFormLoading) {;
    return <div className="flex items-center justify-center p-8">Loading...</div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return (
<<<<<<< HEAD
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
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <div>
          <Label htmlFor="isRemote">
=======
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
              className="mr-2"
<<<<<<< HEAD
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
        </Button>
      </form>
    </Form>
  )
=======
              onChange={(e) => setIsRemote(e && e.target.checked)}
            />;
            Remote;
          </Label>;
        </div>;

        <DescriptionFields
          control={form && form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />;

        <Button type="submit" disabled={isSubmitting || isFormLoading}>;
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
        </Button>;
      </form>;
    </Form>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}