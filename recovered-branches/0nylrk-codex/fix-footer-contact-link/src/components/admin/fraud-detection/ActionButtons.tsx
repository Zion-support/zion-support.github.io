
import React from "react",
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";
interface ActionButtonsProps {
  flagId: string;
  status: string;
<<<<<<< HEAD
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
=======
  onAction: (
    flagId: string
    action: "warning" | "suspension" | "ban" | "ignore"
  ) => void;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId
  status
  onAction
}) => {
  return (
<<<<<<< HEAD
    <div className;
=======
    <div className="flex space-x-2">
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        onClick={() => alert("View details (would open a detailed view)")}
      >
        <Eye className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === "pending" && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, "ignore")}
        >
          Ignore
        </Button>
      )}
    </div>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
