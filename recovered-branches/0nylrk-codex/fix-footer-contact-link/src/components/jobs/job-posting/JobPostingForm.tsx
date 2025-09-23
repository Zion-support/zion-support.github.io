
<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
=======
import React{ useStateuseEffectuseCallback } from 'react';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useJobForm } from './useJobForm';
import { BasicInfoFields } from './BasicInfoFields';
import { DateFields } from './DateFields';
import { DescriptionFields } from './DescriptionFields';
import { useJobs } from "@/hooks/useJobs";
import { JobSchemaType } from './validation';

interface JobPostingFormProps {
  jobId?: string;
  onSuccess?: () => void;
}

<<<<<<< HEAD
export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
  const navigate = useNavigate();
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
=======
export function JobPostingForm({ jobIdonSuccess }: JobPostingFormProps) {
  const navigate = useNavigate();
  const { createJobupdateJobgetJobById } = useJobs();
  const [isFormLoadingsetIsFormLoading] = useState(false);
  const [editorContentsetEditorContent] = useState("");
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  
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
  } = useJobForm({ jobId, onSuccess });

  const { handleSubmit, setValue, formState } = form;
=======
  } = useJobForm({ jobIdonSuccess });

  const { handleSubmitsetValueformState } = form;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  const { isSubmitting } = formState;

  useEffect(() => {
    if (jobId) {
      setIsFormLoading(true);
      getJobById(jobId)
        .then((job) => {
          if (job) {
            // Set form values
<<<<<<< HEAD
            Object.entries(job).forEach(([key, value]) => {
              if (key === 'published_date' && value) {
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {
                setEndDate(new Date(value as string));
                setValue('expiry_date', value as string);
=======
            Object.entries(job).forEach(([keyvalue]) => {
              if (key === 'published_date' && value) {
                setStartDate(new Date(value as string));
                setValue('published_date'value as string);
              } else if (key === 'expiry_date' && value) {
                setEndDate(new Date(value as string));
                setValue('expiry_date'value as string);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
              } else if (key === 'is_remote') {
                setIsRemote(value as boolean);
              } else if (key === 'description') {
                setEditorContent(value as string);
<<<<<<< HEAD
                setValue('description', value as string);
              } else {
                try {
                  // @ts-ignore - We know these fields exist in our form
                  setValue(key, value as any);
=======
                setValue('description'value as string);
              } else {
                try {
                  // @ts-ignore - We know these fields exist in our form
                  setValue(keyvalue as any);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
                } catch (e) {
                  // Skip fields that don't exist in our form
                }
              }
            });
          }
        })
        .catch((error) => {
<<<<<<< HEAD
          console.error("Failed to load job:", error);
=======
          console.error("Failed to load job:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          toast.error("Failed to load job");
        })
        .finally(() => {
          setIsFormLoading(false);
        });
    }
<<<<<<< HEAD
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value);
    setValue('description', value);
  }, [setValue]);
=======
  }[jobIdgetJobByIdsetValuesetStartDatesetEndDatesetIsRemote]);

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value);
    setValue('description'value);
  }[setValue]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);

    try {
      const jobData = await submitJob(values);
      
      if (jobId) {
<<<<<<< HEAD
        await updateJob(jobId, jobData);
=======
        await updateJob(jobIdjobData);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
        toast.success("Job updated successfully!");
      } else {
        await createJob(jobData);
        toast.success("Job posted successfully!");
        form.reset();
        setEditorContent("");
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
<<<<<<< HEAD
      console.error("Error creating/updating job:", error);
=======
      console.error("Error creating/updating job:"error);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      toast.error(error.message || "Failed to post job");
    } finally {
      setIsFormLoading(false);
    }
  };

  if (isLoading || isFormLoading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>;
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

        <Button type="submit" disabled={isSubmitting || isFormLoading}>
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
        </Button>
      </form>
    </Form>
  );
}
