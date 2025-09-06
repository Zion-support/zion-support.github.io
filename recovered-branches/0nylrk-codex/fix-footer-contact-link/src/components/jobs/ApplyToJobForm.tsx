<<<<<<< HEAD
<<<<<<< HEAD

=======

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
import { Job } from "@/types/jobs",
import { toast } from "sonner",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void
}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
<<<<<<< HEAD
interface ApplyToJobFormProps {;
=======
}interface ApplyToJobFormProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}interface ApplyToJobFormProps {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface ApplyToJobFormProps {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  job: Job,;
  onSuccess?: () => void;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
interface ApplyToJobFormProps {}
  job: Job;
  onSuccess?: () => void;
import {useState} from "react";"
import {useNavigate} from "react-router-dom";"
import {useJobApplications} from "@/hooks/useJobApplications";"
import {useResume} from "@/hooks/useResume";"
import {useAuth} from "@/hooks/useAuth";"
import {Button} from "@/components/ui/button";"
import {Textarea} from "@/components/ui/textarea";"
import {Label} from "@/components/ui/label";"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
import {Alert, AlertDescription} from "@/components/ui/alert";"
import {AlertCircle, FileText, Loader2} from "lucide-react";"
import {formatDistanceToNow} from "date-fns";"
import {Job} from "@/types/jobs";"
import {toast} from "sonner";
"
import { useState } from "react","
import { useNavigate } from "react-router-dom","
import { useJobApplications } from "@/hooks/useJobApplications","
import { useResume } from "@/hooks/useResume","
import { useAuth } from "@/hooks/useAuth","
import { Button } from "@/components/ui/button","
import { Textarea } from "@/components/ui/textarea","
import { Label } from "@/components/ui/label","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Alert, AlertDescription } from "@/components/ui/alert","
import { AlertCircle, FileText, Loader2 } from "lucide-react","
import { formatDistanceToNow } from "date-fns",
interface ApplyToJobFormProps {};
  job: Job;
  onSuccess?: () => void;
}"
import { useState } from "react","
import { useNavigate } from "react-router-dom","
import { useJobApplications } from "@/hooks/useJobApplications","
import { useResume } from "@/hooks/useResume","
import { useAuth } from "@/hooks/useAuth","
import { Button } from "@/components/ui/button","
import { Textarea } from "@/components/ui/textarea","
import { Label } from "@/components/ui/label","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select","
import { Alert, AlertDescription } from "@/components/ui/alert","
import { AlertCircle, FileText, Loader2 } from "lucide-react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { formatDistanceToNow } from "date-fns",
interface ApplyToJobFormProps {};
  job: Job;
  onSuccess?: () => void;
}
interface ApplyToJobFormProps {;
  job: Job,;
  onSuccess?: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {

  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),

=======
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {;
=======
export function ApplyToJobForm() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const navigate = useNavigate();
"
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job && job.title}" position and would like to apply. My skills and experience align well with this role.`);"
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault();
  const { user } = useAuth(),
  const { applyToJob } = useJobApplications(),
  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),
<<<<<<< HEAD
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),

  const handleSubmit = async (e: React.FormEvent) => {
=======
  '"`
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),"
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const handleSubmit = async (e: React.FormEvent) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    e.preventDefault(),
<<<<<<< HEAD

=======
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (!user) {
      toast.error("You must be logged in to apply")
=======

    if (!user) {"
      toast.error("You must be logged in to apply")"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } })
      return;
<<<<<<< HEAD
    }

<<<<<<< HEAD
=======

=======
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter"),
      return
    }
=======
      setError("Please provide a cover letter");
      return;
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsSubmitting(true);
    setError(null);
    try {}
      const success = await applyToJob(job.id, coverLetter, selectedResumeId |undefined);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    
    setIsSubmitting(true),
=======
      toast.error("You must be logged in to apply")
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } })
      return    setIsSubmitting(true),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      toast.error("You must be logged in to apply")
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } })
      return    setIsSubmitting(true),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    if (!user) {
      toast.error("You must be logged in to apply")
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } })
      return

    }

    if (!coverLetter && coverLetter.trim()) {;
      setError("Please provide a cover letter");
      return;
    }


    if (!coverLetter.trim()) {
      setError("Please provide a cover letter"),
      return
    }
      setError("Please provide a cover letter");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId |undefined);
    
    setIsSubmitting(true),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setError(null),
    
    try {}
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


      if (success) {
        toast.success("Your application has been submitted!");
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (success) {
        toast.success("Your application has been submitted!"),
        if (onSuccess) {
=======


      if (success) {"
        toast.success("Your application has been submitted!"),

        if (onSuccess) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          onSuccess()
        }
      }
    } catch (err: any) {"
      setError(err.message |"Failed to submit application")"
      toast.error("Failed to submit application")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
'
import { useState } from './react';'
import { use_navigate } from './react-router-dom';'
import { useJobApplications } from '@/hooks / useJobApplications';'
import { use_resume } from '@/hooks / use_resume';'
import { use_auth } from '@/hooks / use_auth';'
import { Button } from '@/components / ui / button';'
import { Textarea } from '@/components / ui / textarea';'
import { Label } from '@/components / ui / label';'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';'
import { Alert, AlertDescription } from '@/components / ui / alert';'
import { AlertCircle, FileText, Loader2 } from './lucide-react';'
import { formatDistanceToNow } from './date - fns';'
import { Job } from '@/types / jobs';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from './sonner';
interface ApplyToJobFormProps {}
  job: Job,
  on_success?: () => void;
}
export /**;
 * ApplyToJobForm - Function description;
 */
function ApplyToJobForm() {}
=======
import { toast } from './sonner';
interface ApplyToJobFormProps {
  job: Job,
  on_success?: () => void;
}
export /**
 * ApplyToJobForm - Function description
 */
function ApplyToJobForm() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { user } = use_auth ();
  const { applyToJob } = useJobApplications ();
  const { resumes, is_loading: isResumesLoading } = use_resume (),
  const navigate = use_navigate ();
<<<<<<< HEAD
;'"`
  const [cover_letter, setCoverLetter] = useState (`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`);"
=======
;
  const [cover_letter, setCoverLetter] = useState (`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [selectedResumeId, setSelectedResumeId] = useState < string>("");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;
<<<<<<< HEAD
  const handle_submit = async (e: React.FormEvent) => {}
    e.prevent_default ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      toast.error ("You must be logged in to apply"),"`
      navigate ("/login", { state: { return_to: `/jobs/${job.id}` } }),
      return;
    }
    if () {) {}
  $2;
}"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      set_error ("Please provide a cover letter");
      return;
    }
    setIsSubmitting (true);
    set_error (null);
;
<<<<<<< HEAD
    try {}
      const success = await applyToJob (job.id, cover_letter, selectedResumeId || undefined);
;
      // Check condition;
if ( {) {}
  $2;
}"
        toast.success ("Your application has been submitted!");
        // Check condition;
if ( {) {}
  $2;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
          on_success ();
        }
      }
<<<<<<< HEAD
    } catch (err: any) {"
      set_error (err.message || "Failed to submit application"),"
      toast.error ("Failed to submit application");



    } finally {}
=======
    } catch (err: any) {
      set_error (err.message || "Failed to submit application"),
      toast.error ("Failed to submit application");

    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsSubmitting (false);
    }
  }

<<<<<<< HEAD
  },
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    } finally {
      setIsSubmitting(false)
    }

  },
  


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
=======





  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>"
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>"
        <p className="text-sm text-muted-foreground mb-4">
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>
      </div>
      {error && ("
        <Alert variant="destructive">"
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}"
      <div className="space-y-4">
        <div>"
          <Label htmlFor="coverLetter">Cover Letter</Label>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    setIsSubmitting(true);
    setError(null);
      if (success) {;"
        toast && toast.success("Your application has been submitted!");
        if (onSuccess) {;
          onSuccess();
        }
      }
    } catch (err: any) {;"
      setError(err && err.message || "Failed to submit application"),;"
      toast && toast.error("Failed to submit application");
    } finally {;
      setIsSubmitting(false);
    }
  };
  return ("
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;"
        <h3 className="text-lg font-medium mb-1">Apply to: {job && job.title}</h3>;"
        <p className="text-sm text-muted-foreground mb-4">;
          Posted {formatDistanceToNow(new Date(job && job.created_at), { addSuffix: true })}
        </p>;
      </div>;

<<<<<<< HEAD
      {error && (;
        <Alert variant="destructive">;
=======



      {error && (;"
        <Alert variant="destructive">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}

<<<<<<< HEAD
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Textarea
=======
          <Textarea"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <Textarea
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e && e.target.value)}
            rows={6}

<<<<<<< HEAD

<<<<<<< HEAD
=======
      ;
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;
            id="coverLetter";
            value={coverLetter}
            onChange={(e) => setCoverLetter(e && e.target.value)}
            rows={6}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {isResumesLoading ? (
            <div className="flex items - center gap - 2 mt-2">;
              <Loader2 className="h - 4 w - 4 animate-spin" />;
=======

          {isResumesLoading ? ("
            <div className="flex items - center gap - 2 mt - 2">;"
              <Loader2 className="h - 4 w - 4 animate - spin" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

          {isResumesLoading ? (
            <div className="flex items - center gap - 2 mt - 2">;
              <Loader2 className="h - 4 w - 4 animate - spin" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <span > Loading your resumes...</span>;
            </div>) : resumes && resumes.length > 0 ? (
            <Select;
              value={selectedResumeId}
<<<<<<< HEAD
<<<<<<< HEAD
              onValueChange={setSelectedResumeId}                type="button"
=======
              onValueChange={setSelectedResumeId}


"
                type="button""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              onValueChange={setSelectedResumeId}

                type="button"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                onClick={() => navigate("/dashboard/talent/portfolio")}
              >
                Create Resume;
              </Button>
            </div>
          )}
        </div>
      </div>"
      <div className="flex justify-end gap-2">
        <Button"
          type="button""
          variant="outline"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
"
import { useState } from "react",;"
import { useNavigate } from "react-router-dom",;"
import { useJobApplications } from "@/hooks/useJobApplications",;"
import { useResume } from "@/hooks/useResume",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Button } from "@/components/ui/button",;"
import { Textarea } from "@/components/ui/textarea",;"
import { Label } from "@/components/ui/label",;"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;"
import { Alert, AlertDescription } from "@/components/ui/alert",;"
import { AlertCircle, FileText, Loader2 } from "lucide-react",;"
import { formatDistanceToNow } from "date-fns",;"
import { Job } from "@/types/jobs",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from "sonner",;
interface ApplyToJobFormProps {;
  job: Job,;
  onSuccess?: () => void;
}
;
<<<<<<< HEAD
export function ApplyToJobForm() { return null; }
  const { user } = useAuth(),;
  const { applyToJob } = useJobApplications(),;
  const { resumes, isLoading: isResumesLoading } = useResume(),;
  const navigate = useNavigate(),;'"`
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),;"
=======
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {;
  const { user } = useAuth(),;
  const { applyToJob } = useJobApplications(),;
  const { resumes, isLoading: isResumesLoading } = useResume(),;
  const navigate = useNavigate(),;
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
<<<<<<< HEAD
    if (!user) {;"
      toast.error("You must be logged in to apply"),;"`
=======
    if (!user) {;
      toast.error("You must be logged in to apply"),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } }),;
      return;
    }
;
<<<<<<< HEAD
    if (!coverLetter.trim()) {;"
=======
    if (!coverLetter.trim()) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setError("Please provide a cover letter"),;
      return;
    }
;
    setIsSubmitting(true),;
    setError(null),;
    try {;
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),;
<<<<<<< HEAD
      if (success) {;"
=======
      if (success) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        toast.success("Your application has been submitted!"),;
        if (onSuccess) {;
          onSuccess();
        }
      }
<<<<<<< HEAD
    } catch (err: any) {;"
      setError(err.message || "Failed to submit application");"
=======
    } catch (err: any) {;
      setError(err.message || "Failed to submit application");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      toast.error("Failed to submit application");
    } finally {;
      setIsSubmitting(false);
    }
  };
<<<<<<< HEAD
  return (;"
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;"
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>;"
=======
  return (;
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <p className="text-sm text-muted-foreground mb-4">;
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>;
      </div>;
<<<<<<< HEAD
      {error && (;"
        <Alert variant="destructive">;"
=======
      {error && (;
        <Alert variant="destructive">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}
<<<<<<< HEAD
;"
      <div className="space-y-4">;
        <div>;"
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;"
=======
;
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            id="coverLetter";
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
=======
"
            placeholder="Introduce yourself and explain why you are a good fit for this job...";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="mt-1";
          />;"
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;

        <div>;"
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (;"
            <div className="flex items-center gap-2 mt-2">;"
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) : resumes && resumes.length > 0 ? (;
<<<<<<< HEAD
            <Select
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <SelectTrigger className="mt-1">;
<<<<<<< HEAD
=======
=======
            >;
              <SelectTrigger className="mt - 1">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
=======
              <SelectTrigger className="mt-1">;            placeholder="Introduce yourself and explain why you are a good fit for this job...";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <SelectTrigger className="mt-1">;            placeholder="Introduce yourself and explain why you are a good fit for this job...";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
            placeholder="Introduce yourself and explain why you are a good fit for this job...";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <SelectTrigger className="mt-1">;
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            className="mt-1";
          />;"
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
        ;
        <div>;"
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (;"
            <div className="flex items-center gap-2 mt-2">;"
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) :resumes && resumes.length > 0 ? (;
            <Select;
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >;"
              <SelectTrigger className="mt-1">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;"
                <SelectItem value="">No resume</SelectItem>;

<<<<<<< HEAD
=======
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">No resume</SelectItem>;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        </div>;
      </div>;

      <div className="flex justify-end gap-2">;
<<<<<<< HEAD
<<<<<<< HEAD
        <Button;
          type="button";
          variant="outline";
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess();
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
          ) : (;
            "Submit Application";
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        </Button>;
      </div>;
    </form>;
  );
}

<<<<<<< HEAD
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                type="button"
                onClick={() => navigate("/dashboard/talent/portfolio")}
              >;
                Create Resume;
              </Button>;
            </div>;
          )}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <Button
          type="button"
=======
        <Button"
          type="button""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <Button
          type="button"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant="outline"
          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess();
<<<<<<< HEAD

                {resumes.map ((resume) => (
                  <SelectItem key={resume.id} value={resume.id}>;"
                    {resume.basic_info.title || "Untitled Resume"}
                  </SelectItem>))}
              </SelectContent>;
            </Select>) : ("
            <div className="flex items - center justify - between mt - 2 p - 3 border rounded - md">;"
              <div className="flex items - center gap - 2">;"
                <FileText className="h - 5 w - 5 text - muted - foreground" />;
                <span > No resumes found</span>;
              </div>;
              <Button;"
                variant="outline";"
                size="sm";"
                type="button";
"
=======
                {resumes.map((resume) => (;
                  <SelectItem key={resume.id} value={resume.id}>;
                    {resume.basic_info.title || "Untitled Resume"}
                  </SelectItem>;
                ))}
              </SelectContent>;
            </Select>;
          ) :(;
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
            <div className="flex items-center justify-between mt-2 p-3 border rounded-md">;
              <div className="flex items-center gap-2">;
                <FileText className="h-5 w-5 text-muted-foreground" />;
                <span>No resumes found</span>;
              </div>;
          ) :(;
            "Submit Application";
          )}
        </Button>;
      </div>;
    </form>;
          }}
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
              <Button;
                variant="outline";
                size="sm";
                type="button";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                on_click={() => navigate ("/dashboard / talent / portfolio")}
              >;
                Create Resume;
              </Button>;
            </div>)}
        </div>;
<<<<<<< HEAD
      </div>;"
      <div className="flex justify - end gap - 2">;
        <Button;"
          type="button";"
          variant="outline";
          disabled={is_submitting}
          on_click={() => {}
            if (on_success ()) {}
  $2;
=======
      </div>;
      <div className="flex justify - end gap - 2">;
        <Button;
          type="button";
          variant="outline";
          disabled={is_submitting}
          on_click={() => {
            if (on_success ()) {
  $2
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
          }}
        >;
          Cancel;
<<<<<<< HEAD
        </Button>;"
        <Button type="submit" disabled={is_submitting}>;
          {is_submitting ? (
            <>;"
              <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;
              Submitting...;
            </>) : ("
=======
        </Button>;
        <Button type="submit" disabled={is_submitting}>;
          {is_submitting ? (
            <>;
              <Loader2 className="h - 4 w - 4 mr - 2 animate - spin" />;
              Submitting...;
            </>) : (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            "Submit Application")}
        </Button>;
      </div>;
    </form>);
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  ),; interface ApplyToJobFormProps {}
  job: Job;
onSuccess?: () => void;
}export function ApplyToJobForm ({};
  job, onSuccess;
}: ApplyToJobFormProps) {}
  const {}
  user;
}= useAuth ();
const {}
  applyToJob;
}= useJobApplications ();
const {}
  resumes, isLoading: isResumesLoading;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}= useResume ();
const navigate = useNavigate ();
const [isSubmitting, setIsSubmitting] = useState (false);
const [error, setError] = useState<string | null> (null);
}setError (null);
<<<<<<< HEAD
if (success) {}
  if (onSuccess) {}
}finally {}
=======
if (success) {
  if (onSuccess) {
  
}finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  setIsSubmitting (false) 
}
;

};
<<<<<<< HEAD
handleSubmit "
}className="space-y-6"> <div> <AlertCircle className="h-4 w-4" /> <AlertDescription> {}
  error;
}</AlertDescription> </Alert>) "
}<div className="space-y-4" > <div> <Label htmlFor="coverLetter" >Cover Letter</Label> <Textarea className="mt-1" /> <p className="text-xs text-muted-foreground mt-1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items-center gap-2 mt-2"> <Loader2 className="h-4 w-4 animate-spin" /> <span>Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Select value= {}
  selectedResumeId;
}onValueChange= {}
  setSelectedResumeId "
}> <SelectTrigger className="mt-1" > <SelectValue placeholder="Select a resume" /> </SelectTrigger> <SelectContent> </SelectItem>) ) 
}</SelectContent> </Select> > Create Resume </Button> </div>) "
}</div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application") 
}</Button> </div> </form>) 
}"
                onClick={() => navigate("/dashboard/talent/portfolio")}
              >
                Create Resume;
=======
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
}
                onClick={() => navigate("/dashboard/talent/portfolio")}
              >
                Create Resume
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </Button>
            </div>
          )}
        </div>;
<<<<<<< HEAD
      </div>;"
      <div className="flex justify-end gap-2">;
        <Button;"
          type="button";"
          variant="outline";
          disabled={isSubmitting}
          onClick={() => {}
            if (onSuccess) onSuccess()
          }}
        >
          Cancel;
        </Button>"
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>"
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : ("
=======
      </div>;
      <div className="flex justify-end gap-2">;
        <Button;
          type="button";
          variant="outline";
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            "Submit Application"
          )}
        </Button>
      </div>
    </form>
  )
}
        </Button>;
      </div>;
    </form>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
