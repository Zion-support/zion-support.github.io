
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ApplyToJobFormProps {

  job: Job

  onSuccess?: () => void

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


=======
=======import { useState } from "react",
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
  job: Job

  onSuccess?: () => void
}
export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {;
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();
  const { resumes, isLoading: isResumesLoading } = useResume()
  const navigate = useNavigate();
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`);
=======
  const { resumes, isLoading: isResumesLoading } = useResume(),;
  const navigate = useNavigate();

  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job && job.title}" position and would like to apply. My skills and experience align well with this role.`);  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
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


=======    if (!user) {
      toast.error("You must be logged in to apply")
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } })
      return

    }
    if (!coverLetter && coverLetter.trim()) {;      setError("Please provide a cover letter");
      return;
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    setIsSubmitting(true);
    setError(null);
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId |undefined);    
    setIsSubmitting(true),
    setError(null),
    
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),
      

      if (success) {
        toast.success("Your application has been submitted!");=======
      if (success) {
        toast.success("Your application has been submitted!");
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (onSuccess) {
          onSuccess()
        }
      }
    } catch (err: any) {
      setError(err.message |"Failed to submit application")
      toast.error("Failed to submit application")
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } finally {
      setIsSubmitting (false);
    }
  }

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import { useState } from "react",;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt-1";
          />;
          <p className="text-xs text-muted-foreground mt-1">;
            Provide a brief introduction and highlight your relevant skills and experience.;
          </p>;
        </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <div>;
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (;
            <div className="flex items-center gap-2 mt-2">;
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) : resumes && resumes.length > 0 ? (;
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
=======
        </div>;
      </div>;

      <div className="flex justify-end gap-2">;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
}

=======
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
