
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

            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}

                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">No resume</SelectItem>;

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

            "Submit Application";
          )}
        </Button>;
      </div>;
    </form>;

}