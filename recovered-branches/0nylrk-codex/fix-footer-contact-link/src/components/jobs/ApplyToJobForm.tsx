<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx


<<<<<<< HEAD
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useResume } from "@/hooks/useResume",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { AlertCircle, FileText, Loader2 } from "lucide-react",
import { formatDistanceToNow } from "date-fns",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void
<<<<<<< HEAD
}

export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {

  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useJobApplications} from "@/hooks/useJobApplications";
import {useResume} from "@/hooks/useResume";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {AlertCircle, FileText, Loader2} from "lucide-react";
import {formatDistanceToNow} from "date-fns";
import {Job} from "@/types/jobs";
import {toast} from "sonner";
<<<<<<< HEAD
interface ApplyToJobFormProps {;
  job: Job,;
  onSuccess?: () => void;
}
export function ApplyToJobForm(): any ({ job, onSuccess }: ApplyToJobFormProps) {;
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();
  const { resumes, isLoading: isResumesLoading } = useResume(),;
  const navigate = useNavigate();
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job && job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!user) {;
      toast && toast.error("You must be logged in to apply"),;
      navigate("/login", { state: { returnTo: `/jobs/${job && job.id}` } }),;
      return;
=======
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useJobApplications } from "@/hooks/useJobApplications",
import { useResume } from "@/hooks/useResume",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Label } from "@/components/ui/label",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Alert, AlertDescription } from "@/components/ui/alert",
import { AlertCircle, FileText, Loader2 } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
<<<<<<< HEAD
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

  job: Job

  onSuccess?: () => void
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {;
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {
<<<<<<< HEAD
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();

  const { resumes, isLoading: isResumesLoading } = useResume()
  const navigate = useNavigate();
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
=======
  const { user } = useAuth(),
  const { applyToJob } = useJobApplications(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (!user) {
      toast.error("You must be logged in to apply")
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } })
      return
<<<<<<< HEAD

    }
    if (!coverLetter && coverLetter.trim()) {;
      setError("Please provide a cover letter");
      return;
    }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

<<<<<<< HEAD
=======

=======
    }
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter"),
      return
    }
<<<<<<< HEAD
    setIsSubmitting(true);
    setError(null);
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId |undefined);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    
    setIsSubmitting(true),
    setError(null),
    
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (success) {
        toast.success("Your application has been submitted!");
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (success) {
        toast.success("Your application has been submitted!"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (onSuccess) {
          onSuccess()
        }
      }
    } catch (err: any) {
      setError(err.message |"Failed to submit application")
      toast.error("Failed to submit application")
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
import { useState } from './react';
import { use_navigate } from './react-router-dom';
import { useJobApplications } from '@/hooks / useJobApplications';
import { use_resume } from '@/hooks / use_resume';
import { use_auth } from '@/hooks / use_auth';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { Label } from '@/components / ui / label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { Alert, AlertDescription } from '@/components / ui / alert';
import { AlertCircle, FileText, Loader2 } from './lucide-react';
import { formatDistanceToNow } from './date - fns';
import { Job } from '@/types / jobs';
import { toast } from './sonner';
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
  const navigate = use_navigate ();
;
  const [cover_letter, setCoverLetter] = useState (`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState < string>("");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
;
    // Check condition
if ( {) {
  $2
}
      toast.error ("You must be logged in to apply"),
      navigate ("/login", { state: { return_to: `/jobs/${job.id}` } }),
      return;
    }
    if () {) {
  $2
}
      set_error ("Please provide a cover letter");
      return;
    }
    setIsSubmitting (true);
    set_error (null);
;
    try {
      const success = await applyToJob (job.id, cover_letter, selectedResumeId || undefined);
;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
    } finally {
      setIsSubmitting (false);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

    } finally {
      setIsSubmitting(false)
    }

<<<<<<< HEAD
=======
  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD
  }

=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="space-y-4">
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
    setIsSubmitting(true);
    setError(null);
    try {;
      const success = await applyToJob(job && job.id, coverLetter, selectedResumeId || undefined);
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
import { useNavigate } from "react-router-dom",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useResume } from "@/hooks/useResume",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { AlertCircle, FileText, Loader2 } from "lucide-react",;
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
  const navigate = useNavigate(),;
  ;
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),;
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  ;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    ;
    if (!user) {;
      toast.error("You must be logged in to apply"),;
      navigate("/login", { state:{ returnTo:`/jobs/${job.id}` } }),;
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
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),;
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
=======
      ;
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;
            id="coverLetter";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            value={coverLetter}
            onChange={(e) => setCoverLetter(e && e.target.value)}
            rows={6}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
;
  return (
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
            value={cover_letter}
            on_change={(e) => setCoverLetter (e.target.value)}
            rows={6}
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt - 1";
          />;
          <p className="text - xs text - muted - foreground mt - 1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
        <div>;
          <Label html_for="resume">Select Resume (Optional)</Label>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
          {isResumesLoading ? (
            <div className="flex items - center gap - 2 mt - 2">;
              <Loader2 className="h - 4 w - 4 animate - spin" />;
              <span > Loading your resumes...</span>;
            </div>) : resumes && resumes.length > 0 ? (
            <Select;
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

=======
=======
          <Textarea
            id="coverLetter"
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
        <div>
          <Label htmlFor="resume">Select Resume (Optional)</Label>
          {isResumesLoading ? (
            <div className="flex items-center gap-2 mt-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading your resumes...</span>
            </div>
          ) : resumes && resumes.length > 0 ? (
            <Select
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a resume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No resume</SelectItem>
                {resumes.map((resume) => (
                  <SelectItem key={resume.id} value={resume.id}>
                    {resume.basic_info.title |"Untitled Resume"}
                  </SelectItem>
                ))}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                type="button"
                onClick={() => navigate("/dashboard/talent/portfolio")}
              >
                Create Resume
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
import { useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { useResume } from "@/hooks/useResume",;
import { useAuth } from "@/hooks/useAuth",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Label } from "@/components/ui/label",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { Alert, AlertDescription } from "@/components/ui/alert",;
import { AlertCircle, FileText, Loader2 } from "lucide-react",;
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
  const navigate = useNavigate(),;
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),;
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (!user) {;
      toast.error("You must be logged in to apply"),;
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } }),;
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
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),;
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
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;
            id="coverLetter";
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt-1";
          />;
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
        <div>;
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (;
            <div className="flex items-center gap-2 mt-2">;
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) : resumes && resumes.length > 0 ? (;
<<<<<<< HEAD
            <Select
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}>;
              <SelectTrigger className="mt-1">;
            >;
              <SelectTrigger className="mt - 1">;
=======
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt-1";
          />;
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
        ;
        <div>;
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (;
            <div className="flex items-center gap-2 mt-2">;
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) :resumes && resumes.length > 0 ? (;
            <Select;
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >;
              <SelectTrigger className="mt-1">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">No resume</SelectItem>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
        </div>;
      </div>;
      <div className="flex justify-end gap-2">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        <Button
          type="button"
          variant="outline"
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess();
=======
                {resumes.map((resume) => (;
                  <SelectItem key={resume.id} value={resume.id}>;
                    {resume.basic_info.title || "Untitled Resume"}
                  </SelectItem>;
                ))}
              </SelectContent>;
            </Select>;
          ) :(;
=======
            <Select;
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a resume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No resume</SelectItem>
                {resumes.map((resume) => (
                  <SelectItem key={resume.id} value={resume.id}>
                    {resume.basic_info.title || "Untitled Resume"}
                  </SelectItem>
                ))}
              </SelectContent>;
            </Select>;
          ) : (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="flex items-center justify-between mt-2 p-3 border rounded-md">;
              <div className="flex items-center gap-2">;
                <FileText className="h-5 w-5 text-muted-foreground" />;
                <span>No resumes found</span>;
              </div>;
<<<<<<< HEAD
              <Button ;
                variant="outline" ;
                size="sm" ;
                type="button";
                onClick={() => navigate("/dashboard/talent/portfolio")}
              >;
                Create Resume;
              </Button>;
            </div>;
          )}
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
          }}
        >;
          Cancel;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
        </Button>;
      </div>;
    </form>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
                {resumes.map ((resume) => (
                  <SelectItem key={resume.id} value={resume.id}>;
                    {resume.basic_info.title || "Untitled Resume"}
                  </SelectItem>))}
              </SelectContent>;
            </Select>) : (
            <div className="flex items - center justify - between mt - 2 p - 3 border rounded - md">;
              <div className="flex items - center gap - 2">;
                <FileText className="h - 5 w - 5 text - muted - foreground" />;
                <span > No resumes found</span>;
              </div>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button;
                variant="outline";
                size="sm";
                type="button";
<<<<<<< HEAD
                on_click={() => navigate ("/dashboard / talent / portfolio")}
              >;
                Create Resume;
              </Button>;
            </div>)}
        </div>;
      </div>;
      <div className="flex justify - end gap - 2">;
        <Button;
          type="button";
          variant="outline";
          disabled={is_submitting}
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
=======
  ),; interface ApplyToJobFormProps {
  job: Job;
onSuccess?: () => void 
}export function ApplyToJobForm ({
  job, onSuccess 
}: ApplyToJobFormProps) {
  const {
  user 
}= useAuth ();
const {
  applyToJob 
}= useJobApplications ();
const {
  resumes, isLoading: isResumesLoading 
}= useResume ();
const navigate = useNavigate ();
const [isSubmitting, setIsSubmitting] = useState (false);
const [error, setError] = useState<string | null> (null);
}setError (null);
if (success) {
  if (onSuccess) {
  
}finally {
  setIsSubmitting (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
handleSubmit 
}className="space-y-6"> <div> <AlertCircle className="h-4 w-4" /> <AlertDescription> {
  error 
}</AlertDescription> </Alert>) 
}<div className="space-y-4" > <div> <Label htmlFor="coverLetter" >Cover Letter</Label> <Textarea className="mt-1" /> <p className="text-xs text-muted-foreground mt-1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items-center gap-2 mt-2"> <Loader2 className="h-4 w-4 animate-spin" /> <span>Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Select value= {
  selectedResumeId 
}onValueChange= {
  setSelectedResumeId 
}> <SelectTrigger className="mt-1" > <SelectValue placeholder="Select a resume" /> </SelectTrigger> <SelectContent> </SelectItem>) ) 
}</SelectContent> </Select> > Create Resume </Button> </div>) 
}</div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application") 
}</Button> </div> </form>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/ApplyToJobForm.tsx
=======
                onClick={() => navigate("/dashboard/talent/portfolio")}
              >
                Create Resume
              </Button>
            </div>
          )}
        </div>;
      </div>;
      <div className="flex justify-end gap-2">;
        <Button;
          type="button";
          variant="outline";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          disabled={isSubmitting}
          onClick={() => {
            if (onSuccess) onSuccess()
          }}
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
        </Button>
      </div>
    </form>
  )
}
=======
        </Button>;
      </div>;
    </form>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
