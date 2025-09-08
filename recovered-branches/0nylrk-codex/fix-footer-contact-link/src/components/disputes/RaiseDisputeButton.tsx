import { 

  Dialog;
  DialogContent;
  DialogHeader;
  DialogTitle;
  DialogDescription;
  DialogOverlay
} from "@/components/ui/dialog",
import { DisputeForm } from "./DisputeForm",
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
interface RaiseDisputeButtonProps {

  milestoneId?: string;

  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";

  className?: string;
}
