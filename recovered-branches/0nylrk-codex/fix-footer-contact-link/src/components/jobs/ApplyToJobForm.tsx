<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
<<<<<<< HEAD
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

=======
import { Job } from "@/types/jobs";
import { toast } from "sonner";
<<<<<<< HEAD
interface ApplyToJobFormProps {
  job: Job,
  onSuccess?: () => void
}
=======
import { Job } from "@/types/jobs",
import { toast } from "sonner",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplyToJobFormProps {
>>>>>>> merged-prs-20250907-203621

  job: Job

  onSuccess?: () => void
}
<<<<<<< HEAD
=======
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

interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void

=======

export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {;
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {
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
  const { user } = useAuth(),
  const { applyToJob } = useJobApplications(),
  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
=======
interface ApplyToJobFormProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      return;import { useState } from "react",
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void
}
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void
=======
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

import { formatDistanceToNow } from "date-fns",
interface ApplyToJobFormProps {};
  job: Job;
  onSuccess?: () => void;
>>>>>>> origin/chore/fix-lint-and-merge
}
interface ApplyToJobFormProps {;

  job: Job,;
  onSuccess?: () => void;
}

<<<<<<< HEAD
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {;
  const { applyToJob } = useJobApplications();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  const { user } = useAuth(),
  const { applyToJob } = useJobApplications(),
  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),
  
=======
  const { user } = useAuth();

>>>>>>> origin/chore/fix-lint-and-merge
    e.preventDefault(),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!user) {
      toast.error("You must be logged in to apply")

      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } })
<<<<<<< HEAD
=======
      return

    }
<<<<<<< HEAD
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter"),
      return
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId |undefined);
=======

    if (!coverLetter && coverLetter.trim()) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setError("Please provide a cover letter");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      return;

    setIsSubmitting(true);
    setError(null);
    try {}
      const success = await applyToJob(job.id, coverLetter, selectedResumeId |undefined);

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    setIsSubmitting(true),

    setError(null),
    
    try {}
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),
<<<<<<< HEAD

      if (success) {
        toast.success("Your application has been submitted!");

      if (success) {
        toast.success("Your application has been submitted!"),
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {
  const { user } = useAuth($2);
  const { applyToJob } = useJobApplications($2);
  const { resumes, isLoading: isResumesLoading} = useResume($2);
  const navigate = useNavigate($2);
  const [coverLetter, setCoverLetter] = useState($2);
  const [isSubmitting, setIsSubmitting] = useState($2);
  
    e.preventDefault($2);
    if (!user) {
      toast.error($2);
      navigate($2);
      return
    }
    if (!coverLetter.trim()) {
      setError($2);
      return
    }
    
    setIsSubmitting($2);
    setError($2);
    try {
      const success = await applyToJob($2);
      if (success) {
        toast.success($2);
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
      
<<<<<<< HEAD
      if (success) {
        toast.success("Your application has been submitted!"),
=======


      if (success) {
        toast.success("Your application has been submitted!");
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        if (onSuccess) {

          onSuccess()
        }
      }
    } catch (err: any) {"
      setError(err.message |"Failed to submit application")"
      toast.error("Failed to submit application")
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
interface ApplyToJobFormProps {}
  job: Job,
  on_success?: () => void;
}
export /**;
 * ApplyToJobForm - Function description;
 */
function ApplyToJobForm() {}

  const { user } = use_auth ();
  const { applyToJob } = useJobApplications ();
  const { resumes, is_loading: isResumesLoading } = use_resume (),
  const navigate = use_navigate ();

  const [selectedResumeId, setSelectedResumeId] = useState < string>("");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [error, set_error] = useState < string | null>(null);
;

      set_error ("Please provide a cover letter");
      return;
    }
    setIsSubmitting (true);
    set_error (null);
;

}
          on_success ();
        }
      }
<<<<<<< HEAD

      setIsSubmitting (false);
    }
  }

=======
    } catch (err: any) {
      set_error (err.message || "Failed to submit application"),
      toast.error ("Failed to submit application");
    } finally {
      setIsSubmitting (false);
    }
  }
  },
  


<<<<<<< HEAD
    } finally {
      setIsSubmitting(false)
    }
  }

  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

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
=======
<<<<<<< HEAD

    setIsSubmitting(true);
    setError(null);
      if (success) {;"
=======
<<<<<<< HEAD

    setIsSubmitting(true);
    setError(null);
    try {;
      const success = await applyToJob(job && job.id, coverLetter, selectedResumeId || undefined);
=======
=======

    setIsSubmitting(true);
    setError(null);

    try {;
      const success = await applyToJob(job && job.id, coverLetter, selectedResumeId || undefined);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (success) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  return ("
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div>;"
        <h3 className="text-lg font-medium mb-1">Apply to: {job && job.title}</h3>;"
        <p className="text-sm text-muted-foreground mb-4">;
          Posted {formatDistanceToNow(new Date(job && job.created_at), { addSuffix: true })}
        </p>;
      </div>;

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {error && (;
        <Alert variant="destructive">;

          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}
<<<<<<< HEAD
      ;
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;
            id="coverLetter";
            value={coverLetter}
            onChange={(e) => setCoverLetter(e && e.target.value)}
            rows={6}
=======

          <Textarea

            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e && e.target.value)}
            rows={6}
          {isResumesLoading ? (
            <div className="flex items - center gap - 2 mt-2">;
              <Loader2 className="h - 4 w - 4 animate-spin" />;
  // TODO: Implement
}
  job: Job;
  onSuccess?: () => void;
import {useState} from "react";""
import {useNavigate} from "react-router-dom";""
import {useJobApplications} from "@/hooks/useJobApplications";""
import {useResume} from "@/hooks/useResume";""
import {useAuth} from "@/hooks/useAuth";""
import {Button} from "@/components/ui/button";""
import {Textarea} from "@/components/ui/textarea";""
import {Label} from "@/components/ui/label";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";""
import {Alert, AlertDescription} from "@/components/ui/alert";""
import {AlertCircle, FileText, Loader2} from "lucide-react";""
import {formatDistanceToNow} from "date-fns";""
import {Job} from "@/types/jobs";""
import {toast} from "sonner";"
interface ApplyToJobFormProps {;
  job: Job,;

          {isResumesLoading ? (
            <div className="flex items - center gap - 2 mt-2">;
              <Loader2 className="h - 4 w - 4 animate-spin" />;

;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    // Check condition;
if ( {) {
  $2;
}"
      toast.error ("You must be logged in to apply"),""`;
      navigate ("/login", { state: { return_to: `/jobs/${job.id}` } }),"
      return;
    if () {) {
      set_error ("Please provide a cover letter");"
    setIsSubmitting (true);
    set_error (null);
    try {
  // TODO: Implement
      const success = await applyToJob (job.id, cover_letter, selectedResumeId || undefined);
      // Check condition;
        toast.success ("Your application has been submitted!");"
        // Check condition;
          on_success ();
    } catch (err: any) {"
      set_error (err.message || "Failed to submit application"),""
      toast.error ("Failed to submit application");"
    } finally {
  // TODO: Implement
      setIsSubmitting (false);

  // TODO: Implement
      setIsSubmitting(false)

  },

  return ("
    <form onSubmit={handleSubmit} className="space-y-6">"
</form>
      <div>
</div>"
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>""
        <p className="text-sm text-muted-foreground mb-4">"
</p>
        <Alert variant="destructive">"
          <AlertCircle className="h-4 w-4" />"

          <AlertDescription>{error}
      <div className="space-y-4">"
</div>
          <Label htmlFor="coverLetter">Cover Letter""
    <form onSubmit={handleSubmit} className="space-y-6">;"
      <div>;
        <h3 className="text-lg font-medium mb-1">Apply to: {job && job.title}</h3>;""
        <p className="text-sm text-muted-foreground mb-4">;"
        </p>;
      </div>;"
        <Alert variant="destructive">;"
          <AlertCircle className="h-4 w-4" />;"

          <AlertDescription>{error};
        ;"
      <div className="space-y-4">;"
          <Label htmlFor="coverLetter">Cover Letter;"
          <Textarea;"
            id="coverLetter""
            value={coverLetter})
            onChange={(e) => setCoverLetter(e && e.target.value)}
    <form on_submit={handle_submit} className="space - y-6">;"
        <h3 className="text - lg font - medium mb - 1">Apply to: {job.title}</h3>;""
        <p className="text - sm text - muted - foreground mb - 4">;"
          <AlertCircle className="h - 4 w - 4" />;"

        )}"
      <div className="space - y-4">;"
          <Label html_for="cover_letter">Cover Letter;"
            id="cover_letter";"
            value={cover_letter}
            on_change={(e) => setCoverLetter (e.target.value)}
          <p className="text - xs text - muted - foreground mt - 1">;"
        </div>;
        <div>;
          <Label html_for="resume">Select Resume (Optional)</Label>;

<<<<<<< HEAD
;
      <div className="space-y-4">;
        <div>;
          <Label htmlFor="coverLetter">Cover Letter</Label>;
          <Textarea;
            id="coverLetter";
            value={coverLetter}
            onChange={(e) => setCoverLetter(e && e.target.value)}
            rows={6}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {isResumesLoading ? (
            <div className="flex items - center gap - 2 mt - 2">;
              <Loader2 className="h - 4 w - 4 animate - spin" />;

              <span > Loading your resumes...</span>;
            </div>) : resumes && resumes.length > 0 ? (
            <Select;
              value={selectedResumeId}
<<<<<<< HEAD
=======
              onValueChange={setSelectedResumeId}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [error, setError] = useState<string | null>(null),;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;

      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } }),;
      return;
    }
;

      setError("Please provide a cover letter"),;
      return;
    }
;
    setIsSubmitting(true),;
    setError(null),;
    try {;
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),;

        toast.success("Your application has been submitted!"),;
        if (onSuccess) {;
          onSuccess();
        }
      }

      toast.error("Failed to submit application");
    } finally {;
      setIsSubmitting(false);
    }
  };

        <p className="text-sm text-muted-foreground mb-4">;
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>;
      </div>;

          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}

            id="coverLetter";
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            placeholder="Introduce yourself and explain why you are a good fit for this job...";

            className="mt-1";
          />;"
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
        <div>;"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (;"
            <div className="flex items-center gap-2 mt-2">;"
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) : resumes && resumes.length > 0 ? (;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======
            <Select
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}>;
              <SelectTrigger className="mt-1">;
=======
            >;
              <SelectTrigger className="mt - 1">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;"
                <SelectItem value="">No resume</SelectItem>;
<<<<<<< HEAD
        <Button
          type="button"
          variant="outline"
          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess();
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
;

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
}
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
>>>>>>> merged-prs-20250907-203621
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
        </Button>
      </div>
    </form>
  )
}
=======

        </div>;
      </div>;

      <div className="flex justify-end gap-2">;

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </Button>;
      </div>;
    </form>;
  );
}
<<<<<<< HEAD
;
=======

                type="button"

                onClick={() => navigate("/dashboard/talent/portfolio")}
              >;
                Create Resume;
              </Button>;
            </div>;
          )}

          variant="outline"
          disabled={isSubmitting}
          onClick={() => {;
            if (onSuccess) onSuccess();

                on_click={() => navigate ("/dashboard / talent / portfolio")}
              >;
                Create Resume;
              </Button>;
                variant="outline";""
                size="sm";""
                type="button";")"
                on_click={() => navigate ("/dashboard / talent / portfolio")}"

            </div>)}

}
          }}
        >;
          Cancel;

            "Submit Application")}
        </Button>;
      </div>;
    </form>);
}

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

  setIsSubmitting (false) 
}
;

<<<<<<< HEAD
};

              </Button>
            </div>
          )}
        </div>;

          onClick={() => {

        <Button type="submit" disabled={isSubmitting}>"

            <>"
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />"
            </>
          ) : (

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
