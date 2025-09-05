
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
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">No resume</SelectItem>;
                {resumes.map((resume) => (;
                  <SelectItem key={resume.id} value={resume.id}>;
                    {resume.basic_info.title || "Untitled Resume"}
                  </SelectItem>;
                ))}
              </SelectContent>;
            </Select>;
          ) :(;
            <div className="flex items-center justify-between mt-2 p-3 border rounded-md">;
              <div className="flex items-center gap-2">;
                <FileText className="h-5 w-5 text-muted-foreground" />;
                <span>No resumes found</span>;
              </div>;
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
          ) :(;
            "Submit Application";
          )}
        </Button>;
      </div>;
    </form>;
  ),;
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
import { Job } from "@/types/jobs",
import { toast } from "sonner",interface ApplyToJobFormProps {
  job: Job,
  onSuccess?: () => void
}

export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {
  const { user } = useAuth(),
  const { applyToJob } = useJobApplications(),
  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
    if (!user) {
      toast.error("You must be logged in to apply"),
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } }),
      return
    }
    
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter"),
      return    }
  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    
    if (!user) {
      toast.error("You must be logged in to apply");
      navigate("/login", _{ state: { returnTo: `/jobs/${job.id}` } });
      return;
    }
    
    if (!coverLetter.trim()) {_setError("Please provide a cover letter");
      return;}
    
    setIsSubmitting(true),
    setError(null),
    
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),      
      if (success) {
        toast.success("Your application has been submitted!"),        if (onSuccess) {
          onSuccess()
        }
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit application"),
      toast.error("Failed to submit application")    } finally {
      setIsSubmitting(false)
    }
  },
          onSuccess();}
      }
    } catch (err: unknown) {_setError(err.message || "Failed to submit application");
      toast.error("Failed to submit application");} finally {_setIsSubmitting(false);}
  };
  
  return (
    <form onSubmit={_handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4&quot;>
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>
      </div>
      
      {error && (
        <Alert variant=&quot;destructive">          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4&quot;>
        <div>
          <Label htmlFor=&quot;coverLetter&quot;>Cover Letter</Label>
          <Textarea
            id=&quot;coverLetter&quot;
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
            placeholder=&quot;Introduce yourself and explain why you are a good fit for this job..."            className="mt-1"
          />
          <p className="text-xs text-muted-foreground mt-1&quot;>
            Provide a brief introduction and highlight your relevant skills and experience.
          </p>
        </div>
        
        <div>
          <Label htmlFor=&quot;resume">Select Resume (Optional)</Label>
          {isResumesLoading ? (            <div className="flex items-center gap-2 mt-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading your resumes...</span>
            </div>
          ) : resumes && resumes.length > 0 ? (_<Select
              value={selectedResumeId}
              onValueChange={_setSelectedResumeId}
            >
              <SelectTrigger className="mt-1&quot;>
                <SelectValue placeholder=&quot;Select a resume&quot; />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="&quot;>No resume</SelectItem>
                {resumes.map((resume) => (
                  <SelectItem key={resume.id} value={resume.id}>
                    {resume.basic_info.title || &quot;Untitled Resume&quot;}                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <div className=&quot;flex items-center justify-between mt-2 p-3 border rounded-md&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                <FileText className=&quot;h-5 w-5 text-muted-foreground&quot; />
                <span>No resumes found</span>
              </div>
              <Button 
                variant=&quot;outline&quot; 
                size=&quot;sm&quot; 
                type=&quot;button&quot;
                onClick={() => navigate(&quot;/dashboard/talent/portfolio&quot;)}              >
                Create Resume
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className=&quot;flex justify-end gap-2&quot;>
        <Button
          type=&quot;button&quot;
          variant=&quot;outline&quot;
          disabled={isSubmitting}
          onClick={() => {
            if (onSuccess) onSuccess()
          }}
        >
          Cancel
        </Button>
        <Button type=&quot;submit&quot; disabled={isSubmitting}>
          {isSubmitting ? (            <>
              <Loader2 className=&quot;h-4 w-4 mr-2 animate-spin&quot; />
              Submitting...
            </>
          ) : (
            &quot;Submit Application&quot;
          )}
        </Button>
      </div>
    </form>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
