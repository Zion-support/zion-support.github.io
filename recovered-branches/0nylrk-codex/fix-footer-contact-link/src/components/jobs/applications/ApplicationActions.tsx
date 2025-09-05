
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

interface ApplicationActionsProps {_application: JobApplication;
  processingId: string | null;
  onViewApplication: (_applicationId: string) => Promise<void>;
  onStatusChange: (_applicationId: string, _newStatus: ApplicationStatus) => Promise<void>;}

export function ApplicationActions(_{_application, _processingId, _onViewApplication, _onStatusChange}: ApplicationActionsProps) {_return (_<div className="flex items-center justify-end gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onViewApplication(application.id)}
        disabled={_!!application.viewed_at}
      >
        <Eye className="h-4 w-4" />
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            disabled={_processingId === application.id}
          >
            {_processingId === application.id ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>Status <ChevronDown className="h-4 w-4 ml-1" /></>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={_() => onStatusChange(application.id, _"shortlisted")}
          >
            Shortlist
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={_() => onStatusChange(application.id, _"interview")}
          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={_() => onStatusChange(application.id, _"hired")}
          >
            Hire
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={_() => onStatusChange(application.id, _"rejected")}
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
        <Link to={_`/messages?talentId=${application.talent_id}`}>
          Contact
        </Link>
      </Button>
    </div>
  );
}
