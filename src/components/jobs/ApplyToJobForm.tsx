import { useState } from "react";
import { useRouter } from "next/router";
import { useJobApplications } from "@/hooks/useJobApplications";,
import { useResume } from "@/hooks/useResume";,
import { useAuth } from "@/hooks/useAuth";,
import { Button } from "@/components/ui/button";,
import { Textarea } from "@/components/ui/textarea";,
import { Label } from "@/components/ui/label";,
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";,
import { Alert, AlertDescription } from "@/components/ui/alert";,
import { AlertCircle, FileText, Loader2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";,
import { Job } from "@/types/jobs";
import { toast } from "sonner";
interface ApplyToJobFormProps {onSuccess?: () => void}
            onChange = {(e) => setCoverLetter(e.target.value)}
          ) : resumes && resumes.length > 0 ? (<Select
                  return null
})}
                onClick = {() => router.push("/dashboard/talent/portfolio")}
            onChange = {(e) => setResumeFile(e.target.files?.[0] |null)}
handleSubmit
}className="space-y-6"> <div> <AlertCircle className="h-4 w-4" /> <AlertDescription> {error}</AlertDescription> </Alert>) "
}<div className="space-y-4" > <div> <Label htmlFor="coverLetter" >Cover Letter</Label> <Textarea className="mt-1" /> <p className="text-xs text-muted-foreground mt-1" > Provide a brief introduction and highlight your relevant skills and experience. </p> </div> <div> <div className="flex items-center gap-2 mt-2"> <Loader2 className="h-4 w-4 animate-spin" /> <span>Loading your resumes...</span> </div>) : resumes && resumes.length > 0 ? (<Select value= {selectedResumeId}onValueChange= {
  setSelectedResumeId "
}> <SelectTrigger className="mt-1" > <SelectValue placeholder="Select a resume" /> </SelectTrigger> <SelectContent> </SelectItem>)
}return null
})