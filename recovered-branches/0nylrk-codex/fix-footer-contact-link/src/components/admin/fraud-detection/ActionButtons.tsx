import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";

<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",

interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
=======
interface ActionButtonsProps {
  flagId: string;
  status: string;
  onAction: (
    flagId: string,
    action: "warning" | "suspension" | "ban" | "ignore",
  ) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId,
  status,
  onAction,
}) => {
>>>>>>> main
  return (
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
<<<<<<< HEAD
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" || status === "ignored"}
>>>>>>> main
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
<<<<<<< HEAD
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" || status === "ignored"}
>>>>>>> main
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
<<<<<<< HEAD
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",;
interface ActionButtonsProps {;
  flagId: string,;
  status: string,;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
;
export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {;
  return (;
    <div className="flex space-x-2">;
      <Button;
        variant="ghost";
        size="icon";
        title="View Details";
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Send Warning";
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Ban User";
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <Ban className="h-4 w-4" />;
      </Button>;
      {status === 'pending' && (;
        <Button;
          variant="ghost";
          size="sm";
          onClick={() => onAction(flagId, 'ignore')}
        >;
          Ignore;
        </Button>;
      )}
    </div>;
  );
};
=======
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" || status === "ignored"}
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
};
>>>>>>> main
