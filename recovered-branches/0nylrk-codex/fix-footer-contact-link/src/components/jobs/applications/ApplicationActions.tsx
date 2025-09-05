
import { useState } from "react",
import { Link } from "react-router-dom",import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu",
import { Button } from "@/components/ui/button",
import { Eye, ChevronDown, Loader2 } from "lucide-react",
import { JobApplication, ApplicationStatus } from "@/types/jobs",
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
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface ApplicationActionsProps {_application: JobApplication;
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: ApplicationStatus) => Promise<void>;}

export function ApplicationActions(_{_application, _processingId, _onViewApplication, _onStatusChange}: ApplicationActionsProps) {_return (_<div className="flex items-center justify-end gap-2">
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
            variant=&quot;outline&quot; 
            size=&quot;sm&quot;
            disabled={processingId === application.id}
          >
            {processingId === application.id ? (
              <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />            ) : (
              <>Status <ChevronDown className=&quot;h-4 w-4 ml-1&quot; /></>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align=&quot;end&quot;>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, &quot;shortlisted&quot;)}          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, &quot;interview&quot;)}          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, &quot;hired&quot;)}          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onStatusChange(application.id, &quot;rejected&quot;)}
            className=&quot;text-red-600&quot;          >
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button 
        variant=&quot;default&quot; 
        size=&quot;sm&quot;
        asChild
      >
        <Link to={_`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  )
}
