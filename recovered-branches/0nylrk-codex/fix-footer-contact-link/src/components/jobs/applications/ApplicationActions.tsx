
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Eye, ChevronDown, Loader2 } from "lucide-react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
=======
import { EyeChevronDownLoader2 } from "lucide-react";
import { JobApplicationStatus } from "@/types/jobs";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

interface ApplicationActionsProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
<<<<<<< HEAD
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
=======
  onStatusChange: (applicationId: stringnewStatus: ApplicationStatus) => Promise<void>;
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
  onStatusChange
}: ApplicationActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onViewApplication(application.id)}
        disabled={!!application.viewed_at}
      >
        <Eye className="h-4 w-4" />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            disabled={processingId === application.id}
          >
            {processingId === application.id ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "shortlisted")}
=======
            onClick={() => onStatusChange(application.id"shortlisted")}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "interview")}
=======
            onClick={() => onStatusChange(application.id"interview")}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "hired")}
=======
            onClick={() => onStatusChange(application.id"hired")}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, "rejected")}
=======
            onClick={() => onStatusChange(application.id"rejected")}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
            className="text-red-600"
          >
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button 
        variant="default" 
        size="sm"
        asChild
      >
        <Link to={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  );
}
