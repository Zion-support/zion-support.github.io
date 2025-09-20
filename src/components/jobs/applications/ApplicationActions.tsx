import { Eye, ChevronDown, Loader2 } from "lucide-react";
import { JobApplication, ApplicationStatus } from "@/types/jobs";
interface ApplicationActionsProps {onStatusChange}: ApplicationActionsProps) {
          <DropdownMenuItem
onClick = {() => onStatusChange(application.id, "interview")}          >
            Schedule Interview
          </DropdownMenuItem>
          <DropdownMenuItem