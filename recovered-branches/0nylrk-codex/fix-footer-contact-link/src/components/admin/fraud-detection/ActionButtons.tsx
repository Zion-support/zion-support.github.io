<<<<<<< HEAD
=======

import React from "react",
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";
interface ActionButtonsProps {
  flagId: string;
  status: string;

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

import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';

interface ActionButtonsProps {
  flag_id: string;
  status: string;

import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";

interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <div className="flex space-x-2">
=======

=======
  return (

    <div className="flex space-x-2">

import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
interface ActionButtonsProps {
  flag_id: string;
  status: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  return (

    <div className="flex space-x-2">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
<<<<<<< HEAD
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",;
;
interface ActionButtonsProps {;
  flagId:string,;
  status:string,;
  onAction:(flagId:string, action:'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
;
export const ActionButtons:React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {;
  return (;
    <div className="flex space-x-2">;
      <Button;
        variant="ghost";
        size="icon";
        title="View Details";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
=======
        onClick={() => alert("View details (would open a detailed view)")}
      >
        <Eye className="h-4 w-4" />
      </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}


        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
<<<<<<< HEAD
=======
=======
        onClick={() => onAction(flagId, "warning")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <Info className="h-4 w-4" />
      </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}


        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
<<<<<<< HEAD
=======
=======
        onClick={() => onAction(flagId, "suspension")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
<<<<<<< HEAD

        disabled={status === "actioned" || status === "ignored"}
=======
=======
        disabled={status === "actioned" || status === "ignored"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}

<<<<<<< HEAD
=======
onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD

    </div>;
);

=======
=======
<<<<<<< HEAD
          onClick={() => onAction(flagId, "ignore")}
        >
          Ignore
        </Button>
      )}
<<<<<<< HEAD
    </div>;
);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" || status === "ignored"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      >;
        <Ban className="h-4 w-4" />;
      </Button>;
      {status === "pending" && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, "ignore")}
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        >;
          Ignore;
        </Button>;
      )}
    </div>;
  );
<<<<<<< HEAD

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

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
    </div>
  );
>>>>>>> main
};
  ),;
},; interface ActionButtonsProps {
  flagId: string;
status: string;
onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void 
}export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId, status, onAction 
}) => {
  return (<div className="flex space-x-2" > ghost"size=" icon"title=" View Details"onClick= {
  () => alert (" View details (would open a detailed view) ") 
}> <Eye className=" h-4 w-4"/> </Button> <Button > <Info className=" h-4 w-4"/> </Button> <Button > <AlertTriangle className=" h-4 w-4"/> </Button> <Button > <Ban className=" h-4 w-4" /> </Button> > Ignore </Button>) 
}</div>) 
};
onClick={() => onAction(flagId, "ignore")}
        >
          Ignore
        </Button>
      )}
</div>
  );

}

};

  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
