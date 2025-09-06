import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";
<<<<<<< HEAD
=======

import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
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
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD
          onClick={() => onAction(flagId, "ignore")}
        >
          Ignore
        </Button>
      )}
<<<<<<< HEAD
    </div>;
);
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
    </div>
  );
>>>>>>> main
};
