<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx


import { useState } from "react",
import { useRouter } from 'next/router',

import { useJobApplications } from "@/hooks/useJobApplications",
=======
import { useState } from "react";
import { useRouter  } from 'next/router';
import { useState } from "react",
import { useRouter } from 'next/router',
>>>>>>> import { useJobApplications } from "@/hooks/useJobApplications",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { useState } from "react";
import { useRouter  } from 'next/router';
=======
    import { useRouter } from 'next/router'
import { useJobApplications } from "@/hooks/useJobApplications"
import { useResume } from "@/hooks/useResume"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, FileText, Loader2 } from 'lucide-react'import { formatDistanceToNow } from "date-fns"
import { Job } from "@/types/jobs"
import { toast } from "sonner"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useState } from "react",
import { useRouter } from 'next/router',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { useJobApplications } from "@/hooks/useJobApplications",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useResume } from "@/hooks/useResume",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { AlertCircle, FileText, Loader2 } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Job } from "@/types/jobs";
import { toast } from "sonner";
>>>>>>> interface ApplyToJobFormProps {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ApplyToJobFormProps {
>>>>>>> 
=======
import { Job } from "@/types/jobs";
import { toast } from "sonner";
=======
import { Job } from "@/types/jobs",
import { toast } from "sonner",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ApplyToJobFormProps {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  job: Job

  onSuccess?: () => void
}
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { user } = useAuth()
  const { applyToJob } = useJobApplications()
  const { resumes, isLoading: isResumesLoading } = useResume()
  const router = useRouter()
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`)
  const [selectedResumeId, setSelectedResumeId] = useState<string>("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      toast.error("You must be logged in to apply")
      router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job.id}`)}`)
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return
    }
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter")
      return
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      return;
    }
    
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter")
      return;
    }
    
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setIsSubmitting(true)
    setError(null)
    try {
      const success = await applyToJob(
        job.id
        coverLetter
<<<<<<< HEAD
<<<<<<< HEAD

      )
      if (success) {
        toast.success("Your application has been submitted!")

=======
        selectedResumeId |undefined
        resumeFile |undefined
      )
      if (success) {
        toast.success("Your application has been submitted!")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        selectedResumeId |undefined
        resumeFile |undefined
=======
        selectedResumeId || undefined
        resumeFile || undefined
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )
      if (success) {
        toast.success("Your application has been submitted!")
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const { user } = useAuth(),
  const { applyToJob } = useJobApplications(),
  const { resumes, isLoading: isResumesLoading } = useResume(),
  const router = useRouter(),
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [resumeFile, setResumeFile] = useState<File | null>(null),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
    if (!user) {
      toast.error("You must be logged in to apply"),
      router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job.id}`)}`),
      return
    }
    
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter"),
      return
    }
    
    setIsSubmitting(true),
    setError(null),
    
    try {
      const success = await applyToJob(
        job.id,
        coverLetter,
        selectedResumeId || undefined,
        resumeFile || undefined
      ),
      
      if (success) {
        toast.success("Your application has been submitted!"),
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         if (onSuccess) {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        if (onSuccess) {
>>>>>>>           onSuccess()
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        if (onSuccess) {
          onSuccess()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      }
    } catch (err: any) {
      setError(err.message |"Failed to submit application")
      toast.error("Failed to submit application")
<<<<<<< HEAD
    import { use_router } from 'next / router';
========
import { use_router } from 'next / router';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
import { useJobApplications  } from '@/hooks / useJobApplications';
import { use_resume  } from '@/hooks / use_resume';
import { use_auth  } from '@/hooks / use_auth';
import { Button  } from '@/components / ui / button';
import { Textarea  } from '@/components / ui / textarea';
import { Label  } from '@/components / ui / label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components / ui / select';
import { Alert, AlertDescription  } from '@/components / ui / alert';
import { AlertCircle, FileText, Loader2 } from 'lucide-react'import { formatDistanceToNow  } from './date - fns';
import { Job  } from '@/types / jobs';
import { toast  } from './sonner';
interface ApplyToJobFormProps {
  job: Job,
  on_success?: () => void;
}
export /**
 * ApplyToJobForm - Function description
 */
function ApplyToJobForm() {
  const { user } = use_auth ();
  const { applyToJob } = useJobApplications ();
  const { resumes, is_loading: isResumesLoading } = use_resume (),
  const router = use_router ();
  const [cover_letter, setCoverLetter] = useState (`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState < string>("");
  const [resume_file, setResumeFile] = useState < File | null>(null);
  const [is_submitting, setIsSubmitting] = useState (false);
  const [error, set_error] = useState < string | null>(null);
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to apply"),
      router.push (`/login?return_to=${encodeURIComponent (`/jobs/${job.id}`)}`);
      return;
    }
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx

  },
<<<<<<< HEAD

  return (
=======
  
>>>>>>> >>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
  }
<<<<<<< HEAD

=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
  },
  
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       {error && (
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (


      


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {error && (
>>>>>>>         <Alert variant="destructive">
=======
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {error && (
        <Alert variant="destructive">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="space-y-4">
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
>>>>>>> import React from 'react';
========
    if () {) {
  $2
}
      set_error ("Please provide a cover letter");
      return;
    }
    setIsSubmitting (true);
    set_error (null);
    try {
      const success = await applyToJob (
        job.id;
        cover_letter;
        selectedResumeId || undefined;
        resume_file || undefined);
      // Check condition
if ( {) {
  $2
}
        toast.success ("Your application has been submitted!");
        // Check condition
if ( {) {
  $2
}
          on_success ();
        }
      }
    } catch (err: any) {
      set_error (err.message || "Failed to submit application"),
      toast.error ("Failed to submit application");
    } finally {
      setIsSubmitting (false);
    }
  }
  return (
import React from 'react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
    import { useRouter } from 'next/router';
import { useJobApplications } from "@/hooks/useJobApplications";
import { useResume } from "@/hooks/useResume";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, FileText, Loader2 } from 'lucide-react'import { formatDistanceToNow } from "date-fns";
import { Job } from "@/types/jobs";
import { toast } from "sonner";
interface ApplyToJobFormProps {;
  job: Job,;
  onSuccess?: () => void;
}
export function ApplyToJobForm(): any ({ job, onSuccess }: ApplyToJobFormProps) {;
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();
  const { resumes, isLoading: isResumesLoading } = useResume(),;
  const router = useRouter();
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job && job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();    ;
    if (!user) {;
      toast && toast.error("You must be logged in to apply"),;
      router && router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job && job.id}`)}`);
      return;
    }
    if (!coverLetter && coverLetter.trim()) {;
      setError("Please provide a cover letter");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {;
      const success = await applyToJob(;
        job && job.id;
        coverLetter;
        selectedResumeId || undefined;
        resumeFile || undefined;
      );
      if (success) {;
        toast && toast.success("Your application has been submitted!");
        if (onSuccess) {;
          onSuccess();
        }
      }
    } catch (err: any) {;
      setError(err && err.message || "Failed to submit application"),;
      toast && toast.error("Failed to submit application");
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h3 className="text-lg font-medium mb-1">Apply to: {job && job.title}</h3>;
        <p className="text-sm text-muted-foreground mb-4">;
          Posted {formatDistanceToNow(new Date(job && job.created_at), { addSuffix: true })}
        </p>;
      </div>;
=======
import { useState } from "react",;
import { useRouter } from 'next/router',;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useResume } from "@/hooks/useResume",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { AlertCircle, FileText, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from "date-fns",;
import { Job } from "@/types/jobs",;
import { toast } from "sonner",;
;
interface ApplyToJobFormProps {;
  job:Job,;
  onSuccess?:() => void;
}
;
export function ApplyToJobForm({ job, onSuccess } ApplyToJobFormProps) {;
  const { user } = useAuth(),;
  const { applyToJob } = useJobApplications(),;
  const { resumes, isLoading:isResumesLoading } = useResume(),;
  const router = useRouter(),;
  ;
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),;
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),;
  const [resumeFile, setResumeFile] = useState<File | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    if (!user) {;
      toast.error("You must be logged in to apply"),;
      router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job.id}`)}`),;
      return,;
    }
    ;
    if (!coverLetter.trim()) {;
      setError("Please provide a cover letter"),;
      return,;
    }
    ;
    setIsSubmitting(true),;
    setError(null),;
    ;
    try {;
      const success = await applyToJob(;
        job.id,;
        coverLetter,;
        selectedResumeId || undefined,;
        resumeFile || undefined;
      ),;
      ;
      if (success) {;
        toast.success("Your application has been submitted!"),;
        if (onSuccess) {;
          onSuccess(),;
        }
      }
    } catch (err:any) {;
      setError(err.message || "Failed to submit application"),;
      toast.error("Failed to submit application");
    } finally {;
      setIsSubmitting(false),;
    }
  },;
  ;
  return (;
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h3 className="text-lg font-medium mb-1">Apply to:{job.title}</h3>;
        <p className="text-sm text-muted-foreground mb-4">;
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix:true })}
        </p>;
      </div>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {error && (;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}
<<<<<<< HEAD
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea
            id="coverLetter"
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx
=======
=======
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      <div className="space-y-4">
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
            placeholder="Introduce yourself and explain why you are a good fit for this job..."
            className="mt-1"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Provide a brief introduction and highlight your relevant skills and experience.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div>
>>>>>>>           <Label htmlFor="resume">Select Resume (Optional)</Label>
=======
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div>
          <Label htmlFor="resume">Select Resume (Optional)</Label>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {isResumesLoading ? (
            <div className="flex items-center gap-2 mt-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading your resumes...</span>
            </div>
          ) : resumes && resumes.length > 0 ? (
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Select
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a resume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No resume</SelectItem>
                {resumes.map((resume) => {
                  if (resume.id) {
                    return (
                      <SelectItem key={resume.id} value={resume.id}>
                        {resume.basic_info.title |"Untitled Resume"}
                      </SelectItem>
                    )
<<<<<<< HEAD
<<<<<<< HEAD

                  }
=======
>>>>>>>                   }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  return null
ursor/fix-website-loading-errors-and-merge-6662
                  }
                  return null;
>>>>>>>                 })}

========
            value = {coverLetter,}
            onChange = {(e,) => setCoverLetter(e && e.target.value),}
            rows = {6,}
=======
      ;
=======
=======
import { useState } from "react",;
import { useRouter } from 'next/router',;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useResume } from "@/hooks/useResume",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { AlertCircle, FileText, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from "date-fns",;
import { Job } from "@/types/jobs",;
import { toast } from "sonner",;
interface ApplyToJobFormProps {;
  job: Job,;
  onSuccess?: () => void;
}
;
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {;
  const { user } = useAuth(),;
  const { applyToJob } = useJobApplications(),;
  const { resumes, isLoading: isResumesLoading } = useResume(),;
  const router = useRouter(),;
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),;
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),;
  const [resumeFile, setResumeFile] = useState<File | null>(null),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!user) {;
      toast.error("You must be logged in to apply"),;
      router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job.id}`)}`),;
      return;
    }
;
    if (!coverLetter.trim()) {;
      setError("Please provide a cover letter"),;
      return;
    }
;
    setIsSubmitting(true),;
    setError(null),;
    try {;
      const success = await applyToJob(;
        job.id,;
        coverLetter,;
        selectedResumeId || undefined,;
        resumeFile || undefined;
      ),;
      if (success) {;
        toast.success("Your application has been submitted!"),;
        if (onSuccess) {;
          onSuccess();
        }
      }
    } catch (err: any) {;
      setError(err.message || "Failed to submit application");
      toast.error("Failed to submit application");
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>;
        <p className="text-sm text-muted-foreground mb-4">;
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>;
      </div>;
      {error && (;
        <Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;
            id="coverLetter";
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt-1";
          />;
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div>;
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (;
            <div className="flex items-center gap-2 mt-2">;
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          ) : resumes && resumes.length > 0 ? (;
            <Select
              value = {selectedResumeId,}
              onValueChange = {setSelectedResumeId,}>;
              <SelectTrigger className="mt-1">;
    <form on_submit={handle_submit} className="space - y-6">;
      <div>;
        <h3 className="text - lg font - medium mb - 1">Apply to: {job.title}</h3>;
        <p className="text - sm text - muted - foreground mb - 4">;
          Posted {formatDistanceToNow (new Date (job.created_at), { add_suffix: true })}
        </p>;
      </div>;
      {error && (
        <Alert variant="destructive">;
          <AlertCircle className="h - 4 w - 4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>)}
      <div className="space - y-4">;
        <div>;
          <Label html_for="cover_letter">Cover Letter</Label>;
          <Textarea;
            id="cover_letter";
            value = {cover_letter, }
            on_change = {(e, ) => setCoverLetter (e.target.value), }
            rows = {6, }
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt - 1";
          />;
          <p className="text - xs text - muted - foreground mt - 1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
        <div>;
          <Label html_for="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (
            <div className="flex items - center gap - 2 mt - 2">;
              <Loader2 className="h - 4 w - 4 animate - spin" />;
              <span > Loading your resumes...</span>;
            </div>) : resumes && resumes.length > 0 ? (
            <Select;
              value = {selectedResumeId, }
              onValueChange = {setSelectedResumeId, }
            >;
              <SelectTrigger className="mt - 1">;
=======
          ) :resumes && resumes.length > 0 ? (;
=======
          ) : resumes && resumes.length > 0 ? (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Select;
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >;
              <SelectTrigger className="mt-1">;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">No resume</SelectItem>;
<<<<<<< HEAD
<<<<<<< HEAD
                      <SelectItem key={resume && resume.id} value={resume && resume.id}>;
                        {resume && resume.basic_info.title || "Untitled Resume"}
                      </SelectItem>;
                    );
                  }
                  return null;
                })}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
              </SelectContent>;
            </Select>;
          ) : (;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {resumes.map((resume) => {;
                  if (resume.id) {;
                    return (;
                      <SelectItem key={resume.id} value={resume.id}>;
                        {resume.basic_info.title || "Untitled Resume"}
                      </SelectItem>;
<<<<<<< HEAD
                    ),;
                  }
                  return null,;
                })}
              </SelectContent>;
            </Select>;
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="flex items-center justify-between mt-2 p-3 border rounded-md">;
              <div className="flex items-center gap-2">;
                <FileText className="h-5 w-5 text-muted-foreground" />;
                <span>No resumes found</span>;
              </div>;
<<<<<<< HEAD
              <Button
                variant="outline" 
                size="sm" 
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
                type="button"
                onClick = {(,) => router && router.push("/dashboard/talent/portfolio"),}
=======
              <Button ;
                variant="outline" ;
                size="sm" ;
                type="button";
                onClick={() => router.push("/dashboard/talent/portfolio")}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >;
                Create Resume;
              </Button>;
            </div>;
          )}
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
        </div>;
<<<<<<< HEAD
        <div>;
          <Label htmlFor="cvUpload">Or Upload CV (PDF)</Label>;
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
=======
                    );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  }
                  return null
                })}
              </SelectContent>
            </Select>
          ) : (
            <div className="flex items-center justify-between mt-2 p-3 border rounded-md">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>No resumes found</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={() => router.push("/dashboard/talent/portfolio")}
              >
                Create Resume
              </Button>
            </div>
          )}
        </div>
        <div>
          <Label htmlFor="cvUpload">Or Upload CV (PDF)</Label>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <input
            id="cvUpload"
            type="file"
            accept=".pdf"
            className="mt-1"
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx
<<<<<<< HEAD

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"

          }}
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onChange = {(e,) => setResumeFile(e.target.files?.[0] |null),}
          />
        </div>
      </div>
<<<<<<< HEAD
>>>>>>>       <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          disabled = {isSubmitting,}
          onClick={() => {
            if (onSuccess) onSuccess()
>>>>>>>           }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          />
        </div>
      </div>
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
<<<<<<< HEAD
          disabled = {isSubmitting,}
          onClick={() => {
            if (onSuccess) onSuccess()
=======
          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess();
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
}</div> <div> <Label htmlFor="cvUpload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application")
}</Button> </div> </form>)
}"}
ursor/fix-website-loading-errors-and-merge-6662
      <div className="flex justify-end gap-2">
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
            onChange = {(e,) => setResumeFile(e && e.target.files?.[0] || null),}
          />;
        </div>;
      </div>;
      <div className="flex justify-end gap-2">;
        <Button
          type="button"
          variant="outline"
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx

          onClick={() => {;
            if (onSuccess) onSuccess();

          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess();

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
          disabled = {isSubmitting,}
          onClick={() => {;
            if (onSuccess) onSuccess();
=======
;
        <div>;
          <Label htmlFor="cvUpload">Or Upload CV (PDF)</Label>;
          <input;
            id="cvUpload";
            type="file";
            accept=".pdf";
            className="mt-1";
            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          />;
        </div>;
      </div>;
      ;
      <div className="flex justify-end gap-2">;
        <Button;
          type="button";
          variant="outline";
          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess(),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
          }}
        >;
          Cancel;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </Button>;
        <Button type="submit" disabled={isSubmitting}>;
          {isSubmitting ? (;
            <>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
<<<<<<< HEAD
          ) : (;
=======
          ) :(;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            "Submit Application";
          )}
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx


}</div> <div> <Label htmlFor="cvUpload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application") ;
}</Button> </div> </form>) ;
}"};


>>>>>>>         </Button>;
========
        </Button>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
      </div>;
    </form>;
<<<<<<< HEAD
  );
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
}setError (null);
if (success) {;
  if (onSuccess) {;
}finally {;
  setIsSubmitting (false) ;
=======
  ),; interface ApplyToJobFormProps {;
  job: Job;
onSuccess?: () => void ;
}export function ApplyToJobForm ({;
  job, onSuccess ;
}: ApplyToJobFormProps) {;
  const {;
  user ;
}= useAuth ();
const {;
  applyToJob ;
}= useJobApplications ();
const {;
  resumes, isLoading: isResumesLoading ;
}= useResume ();
const router = useRouter ();
const [resumeFile, setResumeFile] = useState<File | null> (null);
const [isSubmitting, setIsSubmitting] = useState (false);
const [error, setError] = useState<string | null> (null);
  ;
}setError (null);
if (success) {;
  if (onSuccess) {;
  ;
}finally {;
  setIsSubmitting (false) ;
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
};
handleSubmit ;
}className="space-y-6"> <div> <AlertCircle className="h-4 w-4" /> <AlertDescription> {;
  error ;
}</AlertDescription> </Alert>) ";
<<<<<<< HEAD
}<div className="space-y-4" > <div> <Label htmlFor="coverLetter" >Cover Letter</Label> <Textarea className="mt-1" /> <p className="text-xs text-muted-foreground mt-1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items-center gap-2 mt-2"> <Loader2 className="h-4 w-4 animate-spin" /> <span>Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Selectvalue= {
  selectedResumeId 
}onValueChange= {
  setSelectedResumeId "
=======
}<div className="space-y-4" > <div> <Label htmlFor="coverLetter" >Cover Letter</Label> <Textarea className="mt-1" /> <p className="text-xs text-muted-foreground mt-1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items-center gap-2 mt-2"> <Loader2 className="h-4 w-4 animate-spin" /> <span>Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Select value= {;
  selectedResumeId ;
}onValueChange= {;
  setSelectedResumeId ";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}> <SelectTrigger className="mt-1" > <SelectValue placeholder="Select a resume" /> </SelectTrigger> <SelectContent> </SelectItem>) ;
}return null;
}) ;
}</SelectContent> </Select> > Create Resume </Button> </div>) ";
}</div> <div> <Label htmlFor="cvUpload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application") ;
}</Button> </div> </form>) ;
<<<<<<< HEAD
}"}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
                {resumes.map ((resume, ) => {
                  // Check condition
if ( {) {
  $2
}
                    return (
                      <SelectItem key={resume.id} value={resume.id}>;
                        {resume.basic_info.title || "Untitled Resume"}
                      </SelectItem>);
                  }
                  return null;
                })}
              </SelectContent>;
            </Select>) : (
            <div className="flex items - center justify - between mt - 2 p - 3 border rounded - md">;
              <div className="flex items - center gap - 2">;
                <FileText className="h - 5 w - 5 text - muted - foreground" />;
                <span > No resumes found</span>;
              </div>;
              <Button;
                variant="outline";
                size="sm";
                type="button";
                on_click = {(, ) => router.push ("/dashboard / talent / portfolio"), }
              >;
                Create Resume;
              </Button>;
            </div>)}
        </div>;
        <div>;
          <Label html_for="cv_upload">Or Upload CV (PDF)</Label>;
          <input;
            id="cv_upload";
            type="file";
            accept=".pdf";
            className="mt - 1";
            on_change = {(e, ) => setResumeFile (e.target.files?.[0] || null), }
          />;
        </div>;
      </div>;
      <div className="flex justify - end gap - 2">;
        <Button;
          type="button";
          variant="outline";
          disabled = {is_submitting, }
          on_click={() => {
            if (on_success ()) {
  $2
}
          }}
        >;
          Cancel;
        </Button>;
        <Button type="submit" disabled={is_submitting}>;
          {is_submitting ? (
            <>;
              <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;
              Submitting...;
            </>) : (
            "Submit Application")}
        </Button>;
      </div>;
    </form>);
}set_error (null);
// Check condition
if ( {) {
  $2
}
  // Check condition
if ( {) {
  $2
}
}finally {
  setIsSubmitting (false);
}
handle_submit;
}className="space - y-6"> <div> <AlertCircle className="h - 4 w - 4" /> <AlertDescription> {
  error;
}</AlertDescription> </Alert>) ";
}<div className="space - y-4" > <div> <Label html_for="cover_letter" >Cover Letter</Label> <Textarea className="mt - 1" /> <p className="text - xs text - muted - foreground mt - 1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items - center gap - 2 mt - 2"> <Loader2 className="h - 4 w - 4 animate - spin" /> <span > Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Select value= {
  selectedResumeId;
}onValueChange= {
  setSelectedResumeId ";
}> <SelectTrigger className="mt - 1" > <SelectValue placeholder="Select a resume" /> </SelectTrigger> <SelectContent> </SelectItem>);
}return null;
});
}</SelectContent> </Select> > Create Resume </Button> </div>) ";
}</div> <div> <Label html_for="cv_upload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify - end gap - 2" > <Button <> <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" /> Submitting... </>) : ("Submit Application");
}</Button> </div> </form>);
}"}
<<<<<<<< HEAD:src/components/jobs/ApplyToJobForm.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
}"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/ApplyToJobForm.tsx
=======
        </Button>
      </div>
    </form>
  )
}setError (null)
if (success) {
  if (onSuccess) {
}finally {
  setIsSubmitting (false)
}
handleSubmit
}className="space-y-6"> <div> <AlertCircle className="h-4 w-4" /> <AlertDescription> {
  error
}</AlertDescription> </Alert>) "
}<div className="space-y-4" > <div> <Label htmlFor="coverLetter" >Cover Letter</Label> <Textarea className="mt-1" /> <p className="text-xs text-muted-foreground mt-1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items-center gap-2 mt-2"> <Loader2 className="h-4 w-4 animate-spin" /> <span>Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Select value= {
  selectedResumeId
}onValueChange= {
  setSelectedResumeId "
}> <SelectTrigger className="mt-1" > <SelectValue placeholder="Select a resume" /> </SelectTrigger> <SelectContent> </SelectItem>)
}return null
})
}</SelectContent> </Select> > Create Resume </Button> </div>) "
<<<<<<< HEAD
}</div> <div> <Label htmlFor="cvUpload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application")
}</Button> </div> </form>)
}"}
=======
}</div> <div> <Label htmlFor="cvUpload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application") ;
}</Button> </div> </form>) ;
}"};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        </Button>;
      </div>;
    </form>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
