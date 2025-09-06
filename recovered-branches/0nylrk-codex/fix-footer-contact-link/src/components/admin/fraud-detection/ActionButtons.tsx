interface ActionButtonsProps {
  flag_id: string;
  status: string;
<<<<<<< HEAD

  onAction: (
    flagId: string
    action: "warning" | "suspension" | "ban" | "ignore"
  ) => void;

}
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId
  status
  onAction
}) => {
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (

    <div className="flex space-x-2">
=======

interface ActionButtonsProps {;
  flagId: string;
  status: string;
  onAction: (;
    flagId: string,;
    action: "warning" | "suspension" | "ban" | "ignore",;
  ) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({;
  flagId,;
  status,;
  onAction,;
}) => {;
  return (
    <div className="flex space-x-2">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
        onClick={() => onAction(flagId, "warning")}
<<<<<<< HEAD
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
=======
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        onClick={() => onAction(flagId, "suspension")}
<<<<<<< HEAD
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
=======
        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
        onClick={() => onAction(flagId, "ban")}
<<<<<<< HEAD
        disabled={status === "actioned" |status === "ignored"}
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
    </div>
  );
}

    </div>;
);
=======

    </div>;
);

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

  on_action: (
    flag_id: string,
    action: "warning" | "suspension" | "ban" | "ignore",
  ) => void;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}

      <Button;
        variant="ghost";
        size="icon";
        title="View Details";
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Send Warning";
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Ban User";
<<<<<<< HEAD
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

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
