
<<<<<<< HEAD

import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';

interface ActionButtonsProps {
  flag_id: string;
  status: string;
interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {

  return (

    <div className="flex space-x-2">

  return (
=======
import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
  return (

    <div className="flex space-x-2">  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    <div className="flex space-x-2">

import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
interface ActionButtonsProps {
  flag_id: string;
  status: string;
<<<<<<< HEAD
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
  return (

    <div className="flex space-x-2">
      <Button
        variant="ghost"
        size="icon"
        title="View Details"

=======

    <div className="flex space-x-2">
        variant="ghost"
        size="icon"
        title="View Details"
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
<<<<<<< HEAD
      </Button>;
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"


        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}


        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
      >
        <Info className="h-4 w-4" />
      </Button>
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"


        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}


        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      >
=======
      </Button>;      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
=======      >
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <AlertTriangle className="h-4 w-4" />
      </Button>
        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h-4 w-4" />;
<<<<<<< HEAD
      </Button>;
onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"

        disabled={status === "actioned" || status === "ignored"}

        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}

      >
=======
      </Button>;      >
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <Ban className="h-4 w-4" />
      </Button>
      {status === 'pending' && (
        <Button
          variant="ghost"
          size="sm"

    </div>;
);

<<<<<<< HEAD
          onClick={() => onAction(flagId, "ignore")}
        >
          Ignore
        </Button>
      )}
    </div>;
);
import React from "react",;
=======
=======import React from "react",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="flex space - x-2">;
=======
    <div className="flex space-x-2">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      <Button;
        variant="ghost";
        size="icon";
        title="View Details";
        on_click={() => alert ("View details (would open a detailed view)")}
      >;
<<<<<<< HEAD
        <Eye className="h - 4 w - 4" />;
=======
        <Eye className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Send Warning";
        on_click={() => on_action (flag_id, "warning")}
        disabled={status === "actioned" || status === "ignored"}
      >;
<<<<<<< HEAD
        <Info className="h - 4 w - 4" />;
=======
        <Info className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
        on_click={() => on_action (flag_id, "suspension")}
        disabled={status === "actioned" || status === "ignored"}
      >;
<<<<<<< HEAD
        <AlertTriangle className="h - 4 w - 4" />;
=======
        <AlertTriangle className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Ban User";
        on_click={() => on_action (flag_id, "ban")}
        disabled={status === "actioned" || status === "ignored"}
      >;
<<<<<<< HEAD
        <Ban className="h - 4 w - 4" />;
=======
        <Ban className="h - 4 w-4" />;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
;

};
    </div>
  );
=======

};
  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD
  );
};
=======
  )
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
