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
  setSelectedResumeId "
}> <SelectTrigger className="mt-1" > <SelectValue placeholder="Select a resume" /> </SelectTrigger> <SelectContent> </SelectItem>)
}return null
})