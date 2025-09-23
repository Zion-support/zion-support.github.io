
<<<<<<< HEAD


import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';

interface ActionButtonsProps {
  flag_id: string;
  status: string;

  onAction: (
    flagId: string
    action: "warning" | "suspension" | "ban" | "ignore"
  ) => void;

import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",

interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId
  status
  onAction
}) => {
=======
>>>>>>> origin/auto/autonomy-17186719616
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";

<<<<<<< HEAD







interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {


  return (

    <div className="flex space-x-2">


=======
interface ActionButtonsProps {
  flagId: string;
  status: string;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className="flex space-x-2">
>>>>>>> origin/auto/autonomy-17186719616
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        onClick={() => alert("View details (would open a detailed view)")}
<<<<<<< HEAD
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
=======
      >
        <Eye className="h-4 w-4" />
      </Button>
>>>>>>> origin/auto/autonomy-17186719616
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
<<<<<<< HEAD

        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}

      >
        <Info className="h-4 w-4" />
      </Button>

        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h-4 w-4" />;
      </Button>;

=======
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
>>>>>>> origin/auto/autonomy-17186719616
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
<<<<<<< HEAD

        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}

      >
        <AlertTriangle className="h-4 w-4" />
      </Button>

        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;

=======
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
>>>>>>> origin/auto/autonomy-17186719616
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
<<<<<<< HEAD

        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}

=======
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
>>>>>>> origin/auto/autonomy-17186719616
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD

          onClick={() => onAction(flagId, "ignore")}
=======
          onClick={() => onAction(flagId, 'ignore')}
>>>>>>> origin/auto/autonomy-17186719616
        >
          Ignore
        </Button>
      )}
    </div>
  );
<<<<<<< HEAD
}

    </div>;
);

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
      {status === "pending" && (;
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, "ignore")}
        >;
          Ignore;
        </Button>;
      )}
    </div>;
  );





  on_action: (
    flag_id: string,
    action: "warning" | "suspension" | "ban" | "ignore",
  ) => void;
}
export const ActionButtons: React.FC < ActionButtonsProps> = ({
  flag_id,
  status,
  on_action,
}) => {
  return (
    <div className="flex space - x-2">;
      <Button;
        variant="ghost";
        size="icon";
        title="View Details";
        on_click={() => alert ("View details (would open a detailed view)")}
      >;
        <Eye className="h - 4 w - 4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Send Warning";
        on_click={() => on_action (flag_id, "warning")}
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h - 4 w - 4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
        on_click={() => on_action (flag_id, "suspension")}
        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h - 4 w - 4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Ban User";
        on_click={() => on_action (flag_id, "ban")}
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Ban className="h - 4 w - 4" />;
      </Button>;
      {status === "pending" && (
        <Button;
          variant="ghost";
          size="sm";
          on_click={() => on_action (flag_id, "ignore")}
        >;
          Ignore;
        </Button>)}
    </div>);
}
;






};

=======
};
>>>>>>> origin/auto/autonomy-17186719616
