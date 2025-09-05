

interface ApplyToJobFormProps {_job: Job;
  onSuccess?: () => void;}

export function ApplyToJobForm(_{_job, _onSuccess}: ApplyToJobFormProps) {_const { user} = useAuth();
  const {_applyToJob} = useJobApplications();
  const {_resumes, _isLoading: isResumesLoading} = useResume();
  const _navigate = useNavigate();
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${_job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    
    if (!user) {
      toast.error("You must be logged in to apply");
      navigate("/login", _{ state: { returnTo: `/jobs/${job.id}` } });
      return;
    }
    
    if (!coverLetter.trim()) {_setError("Please provide a cover letter");
      return;}
    
    setIsSubmitting(true);
    setError(null);
    
    try {_const _success = await applyToJob(job.id, _coverLetter, _selectedResumeId || undefined);
      
      if (success) {
        toast.success("Your application has been submitted!");
        if (onSuccess) {
          onSuccess();}
      }
    } catch (err: unknown) {_setError(err.message || "Failed to submit application");
      toast.error("Failed to submit application");} finally {_setIsSubmitting(false);}
  };
  
  return (
    <form onSubmit={_handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-1">Apply to: {_job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Posted {_formatDistanceToNow(new Date(job.created_at), _{ addSuffix: true})}
        </p>
      </div>
      
      {_error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            value={_coverLetter}
            onChange={_(_e) => setCoverLetter(e.target.value)}
            rows={_6}
            placeholder="Introduce yourself and explain why you are a good fit for this job..."
            className="mt-1"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Provide a brief introduction and highlight your relevant skills and experience.
          </p>
        </div>
        
        <div>
          <Label htmlFor="resume">Select Resume (Optional)</Label>
          {_isResumesLoading ? (
            <div className="flex items-center gap-2 mt-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading your resumes...</span>
            </div>
          ) : resumes && resumes.length > 0 ? (_<Select
              value={selectedResumeId}
              onValueChange={_setSelectedResumeId}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a resume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No resume</SelectItem>
                {_resumes.map((resume) => (
                  <SelectItem key={resume.id} value={_resume.id}>
                    {_resume.basic_info.title || "Untitled Resume"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
          disabled={_isSubmitting}
          onClick={_() => {
            if (onSuccess) onSuccess();}}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={_isSubmitting}>
          {_isSubmitting ? (
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
  );
}
