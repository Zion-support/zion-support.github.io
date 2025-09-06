<<<<<<< HEAD
=======
<<<<<<< HEAD
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface ActionButtonsProps {
  flag_id: string;
  status: string;
interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <div className="flex space-x-2">
=======

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  return (

    <div className="flex space-x-2">

import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
interface ActionButtonsProps {
  flag_id: string;
  status: string;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  return (

    <div className="flex space-x-2">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        onClick={() => alert("View details (would open a detailed view)")}
      >
        <Eye className="h-4 w-4" />
      </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}


        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      >
        <Info className="h-4 w-4" />
      </Button>
<<<<<<< HEAD
=======
=======
        onClick={() => onAction(flagId, "warning")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      >
        <Info className="h-4 w-4" />
      </Button>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <Info className="h-4 w-4" />
      </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}


        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
<<<<<<< HEAD
=======
=======
        onClick={() => onAction(flagId, "suspension")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
<<<<<<< HEAD
    </div>;
);
=======
<<<<<<< HEAD
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
=======
    </div>;
);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

    </div>;
);

<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" || status === "ignored"}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      >;
        <Ban className="h-4 w-4" />;
      </Button>;
      {status === "pending" && (;
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, "ignore")}
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        >;
          Ignore;
        </Button>;
      )}
    </div>;
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </div>
  );
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
