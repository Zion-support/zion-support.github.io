
<<<<<<< HEAD
import Link from "next/link",
=======
import Link from "next/link";
>>>>>>> origin/auto/autonomy-17186719616
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
<<<<<<< HEAD
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button",
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs",

interface ApplicationActionsProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

export function ApplicationActions({
  application;
  processingId;
  onViewApplication;
=======
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from "@/types/jobs";

interface ApplicationActionsProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>;
}

export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
>>>>>>> origin/auto/autonomy-17186719616
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
            onClick={() => onStatusChange(application.id, "shortlisted")}
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "interview")}
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, "hired")}
<<<<<<< HEAD

          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem
=======
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem 
>>>>>>> origin/auto/autonomy-17186719616
            onClick={() => onStatusChange(application.id, "rejected")}
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
        <Link href={`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
