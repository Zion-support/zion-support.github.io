
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ApplicationActionsProps {
  application: JobApplication;
  processingId: string | null;
  onViewApplication: (applicationId: string) => Promise<void>;
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
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem 
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
