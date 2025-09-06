<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
import React from "react";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from "react";
import { Button } from "@/components/ui/button";
import React from 'react'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
return (
    <div className='flex space-x-2'>
      <Button

import React from "react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {

=======
<<<<<<< HEAD
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {

import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {
>>>>>>>   flagId: string
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {
  flagId: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  status: string
  onAction: (
    flagId: string
    action: 'warning' | 'suspension' | 'ban' | 'ignore'
  ) => void
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId
  status
  onAction
}) => {  return (
    <div className='flex space-x-2'>
      <Button
        variant='ghost'
        size='icon'
        title='View Details'
        aria-label='View details'
        onClick={() => alert('View details (would open a detailed view)')}        variant="ghost"
        size="icon"
        title="View Details"
        aria-label="View details"
        onClick = {(,) => alert("View details (would open a detailed view)"),}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        aria-label="View details"
        onClick={() => alert("View details (would open a detailed view)")}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      >
=======
>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <Eye className="h-4 w-4" />
      </Button>
      <Button
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>>       >
        <Eye className="h-4 w-4" />
      </Button>
      <Button
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        variant='ghost'
        size='icon'
        title='Send Warning'
        aria-label='Send warning'
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' |status === 'ignored'}      >
        <Info className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        title='Suspend User'
        aria-label='Suspend user'
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' |status === 'ignored'}      >
        <AlertTriangle className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        title='Ban User'
        aria-label='Ban user'
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' |status === 'ignored'}      >
        <Ban className='h-4 w-4' />
      </Button>
      {status === 'pending' && (
        <Button
          variant='ghost'
          size='sm'          onClick={() => onAction(flagId, 'ignore')}          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, 'ignore')}
          onClick = {(,) => onAction(flagId, 'ignore'),}
        >
          Ignore
        </Button>
      )}
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
'"}
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

};
'"},;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        variant="ghost"
        size="icon"
        title="Send Warning"
        aria-label="Send warning"
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        aria-label="Suspend user"
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
        aria-label="Ban user"
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
<<<<<<< HEAD
>>>>>>>           onClick={() => onAction(flagId, 'ignore')}
=======
          onClick={() => onAction(flagId, 'ignore')}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        >
          Ignore
        </Button>
      )}

    </div>
  )


  );
};
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
=======
import React from 'react';
import { Button } from '@/components / ui / button';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';
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
        aria-label="View details";
        onClick={() => alert("View details (would open a detailed view)")}
      >;
        <Eye className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Send Warning";
        aria-label="Send warning";
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <Info className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Suspend User";
        aria-label="Suspend user";
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >;
        <AlertTriangle className="h-4 w-4" />;
      </Button>;
      <Button;
        variant="ghost";
        size="icon";
        title="Ban User";
        aria-label="Ban user";
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
<<<<<<< HEAD
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
