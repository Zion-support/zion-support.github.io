
<<<<<<< HEAD
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
import { Job } from "@/types/jobs",
import { toast } from "sonner",
=======
import { useState } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
import { useResume } from &quot;@/hooks/useResume&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from &quot;@/components/ui/select&quot;;
import { Alert, AlertDescription } from &quot;@/components/ui/alert&quot;;
import { AlertCircle, FileText, Loader2 } from &quot;lucide-react&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Job } from &quot;@/types/jobs&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ApplyToJobFormProps {
  job: Job,
  onSuccess?: () => void
}

export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {
  const { user } = useAuth(),
  const { applyToJob } = useJobApplications(),
  const { resumes, isLoading: isResumesLoading } = useResume(),
  const navigate = useNavigate(),
  
<<<<<<< HEAD
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),
  const [selectedResumeId, setSelectedResumeId] = useState<string>(""),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [error, setError] = useState<string | null>(null),
=======
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the &quot;${job.title}&quot; position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState<string>("&quot;);
=======

interface ApplyToJobFormProps {_job: Job;
  onSuccess?: () => void;}

export function ApplyToJobForm(_{_job, _onSuccess}: ApplyToJobFormProps) {_const { user} = useAuth();
  const {_applyToJob} = useJobApplications();
  const {_resumes, _isLoading: isResumesLoading} = useResume();
  const _navigate = useNavigate();
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${_job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
    if (!user) {
<<<<<<< HEAD
      toast.error("You must be logged in to apply"),
      navigate("/login", { state: { returnTo: `/jobs/${job.id}` } }),
      return
    }
    
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter"),
      return
=======
      toast.error(&quot;You must be logged in to apply&quot;);
      navigate(&quot;/login&quot;, { state: { returnTo: `/jobs/${job.id}` } });
      return;
    }
    
    if (!coverLetter.trim()) {
      setError(&quot;Please provide a cover letter&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
=======
  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    
    if (!user) {
      toast.error("You must be logged in to apply");
      navigate("/login", _{ state: { returnTo: `/jobs/${job.id}` } });
      return;
    }
    
    if (!coverLetter.trim()) {_setError("Please provide a cover letter");
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsSubmitting(true),
    setError(null),
    
<<<<<<< HEAD
    try {
      const success = await applyToJob(job.id, coverLetter, selectedResumeId || undefined),
=======
    try {_const _success = await applyToJob(job.id, _coverLetter, _selectedResumeId || undefined);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (success) {
<<<<<<< HEAD
        toast.success("Your application has been submitted!"),
=======
        toast.success(&quot;Your application has been submitted!&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        if (onSuccess) {
<<<<<<< HEAD
          onSuccess()
        }
      }
    } catch (err: any) {
<<<<<<< HEAD
      setError(err.message || "Failed to submit application"),
      toast.error("Failed to submit application")
=======
      setError(err.message || &quot;Failed to submit application&quot;);
      toast.error(&quot;Failed to submit application");
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSubmitting(false)
    }
  },
=======
          onSuccess();}
      }
    } catch (err: unknown) {_setError(err.message || "Failed to submit application");
      toast.error("Failed to submit application");} finally {_setIsSubmitting(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <form onSubmit={_handleSubmit} className="space-y-6">
      <div>
<<<<<<< HEAD
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4&quot;>
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>
      </div>
      
      {error && (
        <Alert variant=&quot;destructive">
=======
        <h3 className="text-lg font-medium mb-1">Apply to: {_job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Posted {_formatDistanceToNow(new Date(job.created_at), _{ addSuffix: true})}
        </p>
      </div>
      
      {_error && (
        <Alert variant="destructive">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4&quot;>
        <div>
          <Label htmlFor=&quot;coverLetter&quot;>Cover Letter</Label>
          <Textarea
<<<<<<< HEAD
            id=&quot;coverLetter&quot;
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
            placeholder=&quot;Introduce yourself and explain why you are a good fit for this job..."
=======
            id="coverLetter"
            value={_coverLetter}
            onChange={_(_e) => setCoverLetter(e.target.value)}
            rows={_6}
            placeholder="Introduce yourself and explain why you are a good fit for this job..."
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            className="mt-1"
          />
          <p className="text-xs text-muted-foreground mt-1&quot;>
            Provide a brief introduction and highlight your relevant skills and experience.
          </p>
        </div>
        
        <div>
<<<<<<< HEAD
          <Label htmlFor=&quot;resume">Select Resume (Optional)</Label>
          {isResumesLoading ? (
=======
          <Label htmlFor="resume">Select Resume (Optional)</Label>
          {_isResumesLoading ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div className="flex items-center gap-2 mt-2">
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
<<<<<<< HEAD
                <SelectItem value="&quot;>No resume</SelectItem>
                {resumes.map((resume) => (
                  <SelectItem key={resume.id} value={resume.id}>
                    {resume.basic_info.title || &quot;Untitled Resume&quot;}
=======
                <SelectItem value="">No resume</SelectItem>
                {_resumes.map((resume) => (
                  <SelectItem key={resume.id} value={_resume.id}>
                    {_resume.basic_info.title || "Untitled Resume"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
<<<<<<< HEAD
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
                onClick={() => navigate(&quot;/dashboard/talent/portfolio&quot;)}
=======
          ) : (_<div className="flex items-center justify-between mt-2 p-3 border rounded-md">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>No resumes found</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                type="button"
                onClick={_() => navigate("/dashboard/talent/portfolio")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Create Resume
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className=&quot;flex justify-end gap-2&quot;>
        <Button
<<<<<<< HEAD
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
          {isSubmitting ? (
=======
          type="button"
          variant="outline"
          disabled={_isSubmitting}
          onClick={_() => {
            if (onSuccess) onSuccess();}}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={_isSubmitting}>
          {_isSubmitting ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <>
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
}
