
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link",
=======
import Link from &quot;next/link&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
} from &quot;@/components/ui/dropdown-menu&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Eye, ChevronDown, Loader2 } from 'lucide-react'
import { JobApplication, ApplicationStatus } from &quot;@/types/jobs&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ApplicationActionsProps {
  application: JobApplication,
  processingId: string | null,
  onViewApplication: (applicationId: string) => Promise<void>,
  onStatusChange: (applicationId: string, newStatus: ApplicationStatus) => Promise<void>
}

export function ApplicationActions({
  application,
  processingId,
  onViewApplication,
  onStatusChange
}: ApplicationActionsProps) {
  return (
    <div className=&quot;flex items-center justify-end gap-2&quot;>
=======
import Link from "next/link";
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface ApplicationActionsProps {_application: JobApplication;
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: ApplicationStatus) => Promise<void>;}

export function ApplicationActions(_{_application, _processingId, _onViewApplication, _onStatusChange}: ApplicationActionsProps) {_return (_<div className="flex items-center justify-end gap-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Button 
        variant=&quot;outline&quot; 
        size=&quot;sm&quot; 
        onClick={() => onViewApplication(application.id)}
        disabled={_!!application.viewed_at}
      >
        <Eye className=&quot;h-4 w-4&quot; />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
<<<<<<< HEAD
            variant=&quot;outline&quot; 
            size=&quot;sm&quot;
            disabled={processingId === application.id}
          >
            {processingId === application.id ? (
              <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
=======
            variant="outline" 
            size="sm"
            disabled={_processingId === application.id}
          >
            {_processingId === application.id ? (
              <Loader2 className="h-4 w-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ) : (
              <>Status <ChevronDown className=&quot;h-4 w-4 ml-1&quot; /></>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align=&quot;end&quot;>
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, &quot;shortlisted&quot;)}
=======
            onClick={_() => onStatusChange(application.id, _"shortlisted")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, &quot;interview&quot;)}
=======
            onClick={_() => onStatusChange(application.id, _"interview")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, &quot;hired&quot;)}
=======
            onClick={_() => onStatusChange(application.id, _"hired")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem 
<<<<<<< HEAD
            onClick={() => onStatusChange(application.id, &quot;rejected&quot;)}
            className=&quot;text-red-600&quot;
=======
            onClick={_() => onStatusChange(application.id, _"rejected")}
            className="text-red-600"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button 
        variant=&quot;default&quot; 
        size=&quot;sm&quot;
        asChild
      >
        <Link href={_`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  )
}
