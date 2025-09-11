<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";
interface ActionButtonsProps {
  flagId: string;
=======


import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';

interface ActionButtonsProps {
  flag_id: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';

interface ActionButtonsProps {
  flag_id: string;
  status: string;

import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

    <div className="flex space-x-2">
=======

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <div className="flex space-x-2">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
interface ActionButtonsProps {
  flag_id: string;
  status: string;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ActionButtonsProps {;
  flagId: string;
  status: string;
  onAction: (;
    flagId: string,;
    action: "warning" | "suspension" | "ban" | "ignore",;
  ) => void;
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const ActionButtons: React.FC<ActionButtonsProps> = ({;
  flagId,;
  status,;
  onAction,;
}) => {;
  return (
    <div className="flex space-x-2">;
<<<<<<< HEAD
<<<<<<< HEAD
  return (

    <div className="flex space-x-2">
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
        onClick={() => alert("View details (would open a detailed view)")}
      >
        <Eye className="h-4 w-4" />
      </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
<<<<<<< HEAD
        onClick={() => onAction(flagId, "warning")}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <Info className="h-4 w-4" />
      </Button>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
<<<<<<< HEAD
        onClick={() => onAction(flagId, "suspension")}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        disabled={status === "actioned" || status === "ignored"}

        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}

<<<<<<< HEAD
onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
);

          onClick={() => onAction(flagId, "ignore")}
        >
          Ignore
        </Button>
      )}
    </div>
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>;
);
=======

    </div>;
);

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" || status === "ignored"}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      >;
        <Ban className="h-4 w-4" />;
      </Button>;
      {status === "pending" && (;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, "ignore")}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >;
          Ignore;
        </Button>;
      )}
    </div>;
<<<<<<< HEAD
}
=======
  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD

};
<<<<<<< HEAD
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
