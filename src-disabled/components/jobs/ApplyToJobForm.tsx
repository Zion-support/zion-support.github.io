

:src_backup/components/jobs/ApplyToJobForm.tsx
import { Job } from "@/types/jobs",
import { toast } from "sonner",
import { Job } from "@/types/jobs",
import { toast } from "sonner",
import { Job } from "@/types/jobs,
import { toast } from sonner",

:src/components/jobs/ApplyToJobForm.tsx
import { useState } from "react";
import { useRouter  } from 'next/router';


:src_backup/components/jobs/ApplyToJobForm.tsx


:src/components/jobs/ApplyToJobForm.tsx
import { Job } from "@/types/jobs";
import { toast } from "sonner";
interface ApplyToJobFormProps {
  job: Job;
interface ApplyToJobFormProps {


:src/components/jobs/ApplyToJobForm.tsx
      return
    }
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter")
      return
    }

        toast.success("Your application has been submitted!")
        toast.success("Your application has been submitted!)
:src/components/jobs/ApplyToJobForm.tsx
:src_backup/components/jobs/ApplyToJobForm.tsx

:src_backup/components/jobs/ApplyToJobForm.tsx


:src/components/jobs/ApplyToJobForm.tsx
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
    import { use_router } from 'next/router';
import { useJobApplications  } from '@/hooks/ useJobApplications';
import { use_resume  } from '@/hooks/ use_resume';
import { use_auth  } from '@/hooks/ use_auth';
import { Button  } from '@/components/ui/ button';
import { Textarea  } from '@/components/ui/ textarea';
import { Label  } from '@/components/ui/ label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/ select';
import { Alert, AlertDescription  } from '@/components/ui/ alert';
import { AlertCircle, FileText, Loader2 } from 'lucide-react'import { formatDistanceToNow  } from './date - fns';
:src_backup/components/jobs/ApplyToJobForm.tsx
import { Job  } from '@/types/ jobs';
import { Job  } from '@/types / jobs';
:src_backup/components/jobs/ApplyToJobForm.tsx
  },
  

:src_backup/components/jobs/ApplyToJobForm.tsx
  },
  


        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />

:src/components/jobs/ApplyToJobForm.tsx
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

import { toast } from "sonner";
interface ApplyToJobFormProps {;
  job: Job,;
import { toast } from "sonner";
interface ApplyToJobFormProps {;
  job: Job,;
  onSuccess?: () => void;
}
:src_backup/components/jobs/ApplyToJobForm.tsx
export function ApplyToJobForm() {const { user } = useAuth()const { applyToJob } = useJobApplications()const { resumes, isLoading: isResumesLoading } = useResume()const router = useRouter()const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`)const [selectedResumeId, setSelectedResumeId] = useState<string>("")const [resumeFile, setResumeFile] = useState<File | null>(null)const [isSubmitting, setIsSubmitting] = useState(false)const [error, setError] = useState<string | null>(null)const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()if (!user) {toast.error("You must be logged in to apply")router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job.id}`)}`)return;
    }if (!coverLetter.trim()) {setError("Please provide a cover letter")return;
:src_backup/components/jobs/ApplyToJobForm.tsx
          <Textarea
            id="coverLetter"
export function ApplyToJobForm(): any ({ job, onSuccess }:,  ApplyToJobFormProps) {;
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();


:src_backup/components/jobs/ApplyToJobForm.tsx

:src_backup/components/jobs/ApplyToJobForm.tsx

        



        <div>
          <Label htmlFor="resume">Select Resume (Optional)</Label>


:src_backup/components/jobs/ApplyToJobForm.tsx
          <Textarea;
            id="coverLetter";
            value = {coverLetter}
            onChange = {(e,) => setCoverLetter(e && e.target.value)}
            rows = {6}<div>;
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (<div className="flex items-center gap-2 mt-2">;
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) : resumes && resumes.length > 0 ? (<Select;
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >;
              <SelectTrigger className="mt-1">;
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">No resume</SelectItem>;
                {resumes.map((resume) => {if (resume.id) {return (<SelectItem key={resume.id} value={resume.id}>;
                        {resume.basic_info.title |"Untitled Resume"}
                      </SelectItem>;
                    )import { useState } from "react",import { useRouter } from 'next/router',interface ApplyToJobFormProps  {job: Job,onSuccess?: () => void;
}export function ApplyToJobForm() {const { user } = useAuth(),const { applyToJob } = useJobApplications(),const { resumes, isLoading: isResumesLoading } = useResume(),const router = useRouter(),const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`),const [selectedResumeId, setSelectedResumeId] = useState<string>(""),const [resumeFile, setResumeFile] = useState<File | null>(null),const [isSubmitting, setIsSubmitting] = useState(false),const [error, setError] = useState<string | null>(null),const handleSubmit = async (e: React.FormEvent) => {e.preventDefault(),if (!user) {toast.error("You must be logged in to apply"),router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job.id}`)}`),return;
    }if (!coverLetter.trim()) {setError("Please provide a cover letter"),return;
    }setIsSubmitting(true),setError(null),try {const success = await applyToJob(job.id,coverLetter,selectedResumeId || undefined,resumeFile || undefined;
      ),if (success) {toast.success("Your application has been submitted!"),if (onSuccess) {onSuccess()}
      }
    } catch (err: any) {setError(err.message || "Failed to submit application")toast.error("Failed to submit application")} finally {setIsSubmitting(false)}
  }return (<form onSubmit={handleSubmit} className="space-y-6">;
      <div>;
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>;


:src_backup/components/jobs/ApplyToJobForm.tsx
      {error && (<Alert variant="destructive">;
          <AlertCircle className="h-4 w-4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>;
      )}<div className="space-y-4">;
        <div>;
      {error && (;"
        <Alert variant="destructive">;"
          <AlertCircle className="h-4 w-4" />;


:src_backup/components/jobs/ApplyToJobForm.tsx
            rows={6}placeholder="Introduce yourself and explain why you are a good fit for this job...";
            rows={6}placeholder="Introduce yourself and explain why you are a good fit for this job...";
            rows={6}placeholder="Introduce yourself and explain why you are a good fit for this job...;


:src_backup/components/jobs/ApplyToJobForm.tsx
        </div>;<div>;
          <Label htmlFor="resume">Select Resume (Optional)</Label>;
          {isResumesLoading ? (<div className="flex items-center gap-2 mt-2">;
              <Loader2 className="h-4 w-4 animate-spin" />;
              <span>Loading your resumes...</span>;
            </div>;
          ) : resumes && resumes.length > 0 ? (<Select;
              value = {selectedResumeId}
              onValueChange = {setSelectedResumeId}>;
              <SelectTrigger className="mt-1">;
    <form on_submit={handle_submit} className="space - y-6">;
      <div>;
        <h3 className="text - lg font - medium mb - 1">Apply to: {job.title}</h3>;
        <p className="text - sm text - muted - foreground mb - 4">;
          Posted {formatDistanceToNow (new Date (job.created_at), { add_suffix: true })}
        </p>;
      </div>;
      {error && (<Alert variant="destructive">;
          <AlertCircle className="h - 4 w - 4" />;
          <AlertDescription>{error}</AlertDescription>;
        </Alert>)}
      <div className="space - y-4">;
        <div>;


:src_backup/components/jobs/ApplyToJobForm.tsx
            value = {cover_letter }
            on_change = {(e, ) => setCoverLetter (e.target.value) }
            rows = {6 }
            placeholder="Introduce yourself and explain why you are a good fit for this job...";
            className="mt - 1";
          />;
          <p className="text - xs text - muted - foreground mt - 1">;
            value = {cover_letter, }
            on_change = {(e, ) => setCoverLetter (e.target.value), }


:src_backup/components/jobs/ApplyToJobForm.tsx
          {isResumesLoading ? (<div className="flex items - center gap - 2 mt - 2">;
              <Loader2 className="h - 4 w - 4 animate - spin" />;
              <span > Loading your resumes...</span>;
            </div>) : resumes && resumes.length > 0 ? (<Select;
              value = {selectedResumeId }
              onValueChange = {setSelectedResumeId }
            >;
              <SelectTrigger className="mt - 1">;
                <SelectValue placeholder="Select a resume" />;
              </SelectTrigger>;
              <SelectContent>;
                <SelectItem value="">No resume</SelectItem>;<SelectItem key={resume && resume.id} value={resume && resume.id}>;
                        {resume && resume.basic_info.title || "Untitled Resume"}


:src_backup/components/jobs/ApplyToJobForm.tsx
          ) : (<div className="flex items-center justify-between mt-2 p-3 border rounded-md">;
              <div className="flex items-center gap-2">;
                <FileText className="h-5 w-5 text-muted-foreground" />;
                <span>No resumes found</span>;
              </div>;
              <Button;
                variant="outline";
                size="sm";
                type="button";
                onClick = {(,) => router && router.push("/dashboard/talent/portfolio")}
          ) : (<div className="flex items-center justify-between mt-2 p-3 border rounded-md">;
              <div className="flex items-center gap-2">;
                <FileText className="h-5 w-5 text-muted-foreground" />;
          ) : (<div className=flex items-center justify-between mt-2 p-3 border rounded-md">;
              <div className="flex items-center gap-2>;
                <FileText className=h-5 w-5 text-muted-foreground" />;
                <span>No resumes found</span>;
              </div>;
              <Button;
                variant="outline;
                size=sm";
                type="button;
                onClick = {(,) => router && router.push(/dashboard/talent/portfolio")}


:src_backup/components/jobs/ApplyToJobForm.tsx
          )}</div>;<div>;
          <Label htmlFor="cvUpload">Or Upload CV (PDF)</Label>;<input;
            id="cvUpload";
            type="file";
            accept=".pdf";
            className="mt-1";


:src/components/jobs/ApplyToJobForm.tsx
            onChange = {(e,) => setResumeFile(e.target.files?.[0] |null),}
          />
        </div>

            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
:src_backup/components/jobs/ApplyToJobForm.tsx


:src_backup/components/jobs/ApplyToJobForm.tsx
            onChange = {(e,) => setResumeFile(e && e.target.files?.[0] || null),}
            onChange = {(e,) => setResumeFile(e && e.target.files?.[0] || null),}
            onChange = {(e,) => setResumeFile(e && e.target.files?.[0] || null)}
          />;
        </div>;
      <div className="flex justify-end gap-2">;
:src_backup/components/jobs/ApplyToJobForm.tsx
:src_backup/components/jobs/ApplyToJobForm.tsx
          type="button"
          onClick={() => {;

:src_backup/components/jobs/ApplyToJobForm.tsx

          }}
            onChange = {(e,) => setResumeFile(e && e.target.files?.[0] || null)}
          />;
        </div>;
      </div>;<div className="flex justify-end gap-2">;<Button;
          type="button";
          variant="outline";
          onClick={() => {if (onSuccess) onSuccess()disabled={isSubmitting}
          onClick={() => {if (onSuccess) onSuccess()}}
:src_backup/components/jobs/ApplyToJobForm.tsx
          {isSubmitting ? (<>;
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
              Submitting...;
            </>;
:src_backup/components/jobs/ApplyToJobForm.tsx
:src_backup/components/jobs/ApplyToJobForm.tsx
:src_backup/components/jobs/ApplyToJobForm.tsx
}<div className="space - y-4" > <div> <Label html_for="cover_letter" >Cover Letter</Label> <Textarea className="mt - 1" /> <p className="text - xs text - muted - foreground mt - 1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items - center gap - 2 mt - 2"> <Loader2 className="h - 4 w - 4 animate - spin" /> <span > Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Select value= {


:src/components/jobs/ApplyToJobForm.tsx
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
}</div> <div> <Label htmlFor="cvUpload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application")
}</Button> </div> </form>)
}"}
:src_backup/components/jobs/ApplyToJobForm.tsx

}"
:src_backup/components/jobs/ApplyToJobForm.tsx
}"
}</div> <div> <Label htmlFor="cvUpload" >Or Upload CV (PDF) </Label> <input /> </div> </div> <div className="flex justify-end gap-2" > <Button <> <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Submitting... </>) : ("Submit Application")}</Button> </div> </form>)}";

