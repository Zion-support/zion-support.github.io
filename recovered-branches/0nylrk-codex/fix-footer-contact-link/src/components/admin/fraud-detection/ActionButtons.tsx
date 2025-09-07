<<<<<<< HEAD

import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from "lucide-react";
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
          onClick={() => onAction(flagId, 'ignore')}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from './react';'
import { Button  } from '@/components / ui / button';'
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React from './react';
import { Button  } from '@/components / ui / button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';

interface ActionButtonsProps {
  flag_id: string;
  status: string;

interface ActionButtonsProps {

  flagId: string,
  status: string,'
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

<<<<<<< HEAD
  return (

    <div className="flex space-x-2">

  return (

    <div className="flex space-x-2">

import React from './react';
import { Button  } from '@/components / ui / button';

import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
interface ActionButtonsProps {}
  flag_id: string;
  status: string;

      <Button

import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
  return (

    <div className="flex space-x-2">  return (

    <div className="flex space-x-2">
pr-12325

=======
export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
<<<<<<< HEAD
  return (

    <div className="flex space-x-2">
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <div className="flex space-x-2">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';
import { Button  } from '@/components / ui / button';
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';
interface ActionButtonsProps {
  flag_id: string;
  status: string;
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
return (

    <div className="flex space-x-2">
=======
<<<<<<< HEAD
  return (

    <div className="flex space-x-2">
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <Button

        variant="ghost"
        size="icon"
        title="View Details"

<<<<<<< HEAD
    <div className="flex space-x-2">
        variant="ghost"
        size="icon"
        title="View Details"
import React from "react",;
import { Button } from "@/components/ui/button",;

import { Eye, Info, AlertTriangle, Ban } from "lucide-react",;
;
interface ActionButtonsProps {;
  flagId:string,;
  status:string,;'
  onAction:(flagId:string, action:'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
;
export const ActionButtons:React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {;
  return (;"
    <div className="flex space-x-2">;
      <Button;"
        variant="ghost";"
        size="icon";"
        title="View Details";
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
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
        onClick={() => alert("View details (would open a detailed view)")}
      >
        <Eye className="h-4 w-4" />
      </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Button
        variant="ghost"
        size="icon"
        title="Send Warning"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        onClick={() => alert("View details (would open a detailed view)")}
      >;"
        <Eye className="h-4 w-4" />;

<<<<<<< HEAD
=======

        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
        onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" || status === "ignored"}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
onClick={() => onAction(flagId, "warning")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <Info className="h-4 w-4" />
      </Button>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant="ghost"
        size="icon"
        title="Suspend User"
<<<<<<< HEAD
=======

<<<<<<< HEAD
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
<<<<<<< HEAD
onClick={() => onAction(flagId, "suspension")}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      </Button>;      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
      >
        <AlertTriangle className=\"h-4 w-4\" />
      </Button>
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>

      </Button>

      >"
        <Info className="h-4 w-4" />
      </Button>
"
        disabled={status === "actioned" || status === "ignored"}
      >;"
        <Info className="h-4 w-4" />;
      </Button>;

      <Button"
        variant="ghost""
        size="icon""
        title="Suspend User"

'
        onClick={() => onAction(flagId, 'suspension')}'
        disabled={status === 'actioned' || status === 'ignored'}

"
        onClick={() => onAction(flagId, "suspension")}"
        disabled={status === "actioned" |status === "ignored"}'
        onClick={() => onAction(flagId, 'suspension')}'
        disabled={status === 'actioned' || status === 'ignored'}
      >"
        <AlertTriangle className="h-4 w-4" />
=======
        onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" || status === "ignored"}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
<<<<<<< HEAD
onClick={() => onAction(flagId, "suspension")}
        disabled={status === "actioned" |status === "ignored"}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        disabled={status === "actioned" || status === "ignored"}

        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}

<<<<<<< HEAD
onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" |status === "ignored"}
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      >
        <Ban className="h-4 w-4" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </Button>

      >"
        <AlertTriangle className="h-4 w-4" />
      </Button>
"

        disabled={status === "actioned" || status === "ignored"}
      >;"
        <AlertTriangle className="h-4 w-4" />;

        <Ban className="h-4 w-4" />
      </Button>'
      {status === 'pending' && (
        <Button"
          variant="ghost""
          size="sm"
<<<<<<< HEAD
    </div>;
);

          onClick={() => onAction(flagId, "ignore")}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        >
          Ignore
        </Button>
      )}
<<<<<<< HEAD

=======
    </div>
  );
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>;
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;

import { Button } from "@/components/ui/button",;

import { Eye, Info, AlertTriangle, Ban } from "lucide-react",;
        <Button;
variant=\"ghost\"
          size=\"sm\"
    </div />;
);}
import { Button } from \"@/components/ui/button\",;
import { Eye, Info, AlertTriangle, Ban } from \"lucide-react\",;
interface ActionButtonsProps {;
  flagId: string,;

      </Button>;
      <Button;"
        variant="ghost";"
        size="icon";"
        title="Suspend User";'
        onClick={() => onAction(flagId, 'suspension')}'
        disabled={status === 'actioned' || status === 'ignored'}
      >;"
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
      <Button;"
        variant="ghost";"
        size="icon";"
        title="Ban User";'
        onClick={() => onAction(flagId, 'ban')}'
        disabled={status === 'actioned' || status === 'ignored'}

        onClick={() => onAction(flagId, "ban")}
        disabled={status === "actioned" || status === "ignored"}
      >;

        <Ban className="h-4 w-4" />;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

=======
      </Button>;
      {status === "pending" && (;
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, "ignore")}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        >;
          Ignore;
        </Button>;
      )}
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );

=======
}
  on_action: (
    flag_id: string,
    action: "warning" | "suspension" | "ban" | "ignore",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ) => void;
}
export const "ActionButtons": React.FC < ActionButtonsProps> = ({
  }
  flag_id,
  status,
  on_action}) => {

        >;
          Ignore;
        </Button>)}
    </div>);
}

<<<<<<< HEAD
}
  )
=======

  on_action: (
    flag_id: string,
    action: "warning" | "suspension" | "ban" | "ignore",
  ) => void;
      {status === \"pending\" && (;
import React from \"react\";}
import { Button } from \"@/components/ui/button\";
import { Eye, Info, AlertTriangle, Ban } from \"lucide-react\";
interface ActionButtonsProps {
  flagId: string;
  status: string;
  onAction: (
    flagId: string,
    action: \"warning\" | \"suspension\" | \"ban\" | \"ignore\",}
  ) => void;}
}

export const ActionButtons: React.FC<ActionButtonsProps /> = ({
  flagId,
  status,}
  onAction,}
}) => {
  return (
    <div className=\"flex space-x-2\" />
      <Button;
variant=\"ghost\"
        size=\"icon\"}
        title=\"View Details\"}
        onClick={() = /> alert(\"View details (would open a detailed view)\")}
      >
        <Eye className=\"h-4 w-4\" />
      </Button>
      <Button;
variant=\"ghost\"
        size=\"icon\"
        title=\"Send Warning\"
        onClick={() = /> onAction(flagId, \"warning\")}
        disabled={status === \"actioned\" || status === \"ignored\"}
      >
        <Info className=\"h-4 w-4\" />
      </Button>
      <Button;
variant=\"ghost\"
        size=\"icon\"
        title=\"Suspend User\"
        onClick={() = /> onAction(flagId, \"suspension\")}
        disabled={status === \"actioned\" || status === \"ignored\"}
      >
        <AlertTriangle className=\"h-4 w-4\" />
      </Button>
      <Button;
variant=\"ghost\"
        size=\"icon\"
        title=\"Ban User\"
        onClick={() = /> onAction(flagId, \"ban\")}
        disabled={status === \"actioned\" || status === \"ignored\"}
      >
        <Ban className=\"h-4 w-4\" />
      </Button>
      {status === \"pending\" && (

        <Button;
variant=\"ghost\"}
          size=\"sm\"}
          onClick={() = /> onAction(flagId, \"ignore\")}
>>>>>>> origin/chore/fix-lint-and-merge

        >
          Ignore;
        </Button>
      )}

};

}

  )
<<<<<<< HEAD
}
    </div>
=======
};

import React from './react';''
import { Button  } from '@/components / ui / button';''
import { Eye, Info, AlertTriangle, Ban  } from './lucide-react';'
interface ActionButtonsProps {
  // TODO: Implement
}
  flag_id: string;,
  status: string;
  // TODO: Implement
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {

    <div className="flex space-x-2">"
</div>"
</div>
export const ActionButtons: React.FC<ActionButtonsProps> = ({;
"
    <div className="flex space-x-2">;"
      <Button;"
        variant="ghost"""
        size="icon"""
        title="View Details"""
import React from "react",;""
import { Button } from "@/components/ui/button",;""
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",;"
;
interface ActionButtonsProps {;
  flagId:string,;
  status:string,;)"
  onAction:(flagId:string, action:'warning' | 'suspension' | 'ban' | 'ignore') => void;

export const ActionButtons:React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {;

        variant="ghost";""
        size="icon";""
        title="View Details";""
        onClick={() => alert("View details (would open a detailed view)")}"
        <Eye className="h-4 w-4" />;"

      ;"

        title="Send Warning"""
        onClick={() => onAction(flagId, 'warning')}

        <Info className="h-4 w-4" />"

        <Info className="h-4 w-4" />;"

        title="Suspend User"""
        onClick={() => onAction(flagId, 'suspension')}

        <AlertTriangle className="h-4 w-4" />"

        <AlertTriangle className="h-4 w-4" />;"

        title="Ban User"""
        disabled={status === "actioned" || status === "ignored"}""
        onClick={() => onAction(flagId, 'ban')}

        <Ban className="h-4 w-4" />"

          size="sm""
    </div>;

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {;

        title="Send Warning";""

        title="Suspend User";""

        title="Ban User";""

        <Ban className="h-4 w-4" />;"

          size="sm"""
          onClick={() => onAction(flagId, "ignore")}"

export const ActionButtons: React.FC < ActionButtonsProps> = ({
  flag_id,
  status,
  on_action,)
}) => {
  return ("
    <div className="flex space - x-2">;"
        title="View Details";")"
        on_click={() => alert ("View details (would open a detailed view)")}"
        <Eye className="h - 4 w - 4" />;"

        on_click={() => on_action (flag_id, "warning")}"
        <Info className="h - 4 w - 4" />;"

        on_click={() => on_action (flag_id, "suspension")}"
        <AlertTriangle className="h - 4 w - 4" />;"

        on_click={() => on_action (flag_id, "ban")}"
        <Ban className="h - 4 w - 4" />;"

          size="sm";""
          on_click={() => on_action (flag_id, "ignore")}"

        )}
    </div>);
}export const ActionButtons: React.FC<ActionButtonsProps> = ({
  return (<div className="flex space-x-2" > ghost"size=" icon"title=" View Details"onClick= {"
</div>)"
}> <Eye className=" h-4 w-4"/>  <Button > <Info className=" h-4 w-4"/>  <Button > <AlertTriangle className=" h-4 w-4"/>  <Button > <Ban className=" h-4 w-4" />  > Ignore )"

}</div>) 
pr-12325
        </Button>
</div>"

>>>>>>> origin/chore/fix-lint-and-merge
  );
};
=======

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
>>>>>>> merged-prs-20250907-203621
        >
          Ignore
        </Button>
      )}
<<<<<<< HEAD
    </div>
  )
},
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
