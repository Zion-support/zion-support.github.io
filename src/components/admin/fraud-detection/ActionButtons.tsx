<<<<<<< HEAD
<<<<<<< HEAD
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {
export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        aria-label="View details"
        onClick={() => alert("View details (would open a detailed view)")}
      >
        <Eye className="h-4 w-4" />
      </Button>
      <Button
=======
>
        <Eye className="h-4 w-4" />
      </Button>
      <Button


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
};
'"},;
  );
};


        variant="ghost"
        size="icon"
        title="Send Warning"
        aria-label="Send warning"
        onClick={() => onAction(flagId, 'warning')}
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';

import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {
          size='sm'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          onClick={() => onAction(flagId, 'ignore')}
        >
          Ignore
        </Button>
      )}
<<<<<<< HEAD
=======

    </div>
<<<<<<< HEAD
  )


  );
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d



import React from 'react';
import { Button } from '@/components / ui / button';
<<<<<<< HEAD
import React from "react",;
import { Button } from "@/components/ui/button",;
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
};
=======
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';
interface ActionButtonsProps {
  flag_id: string;
  status: string;
  on_action: (
    flag_id: string,
    action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
export const ActionButtons: React.FC < ActionButtonsProps> = ({
  flag_id,
  status,
  on_action,
}) => {  return (
    <div className='flex space - x-2'>;
      <Button;
        variant='ghost';
        size='icon';
        title='View Details';
        aria - label='View details';
        on_click={() => alert ('View details (would open a detailed view)')}        variant="ghost";
        size="icon";
        title="View Details";
        aria - label="View details";
        on_click = {(, ) => alert ("View details (would open a detailed view)"), }
      >;
        <Eye className='h - 4 w - 4' />;
      </Button>;
      <Button;
        variant='ghost';
        size='icon';
        title='Send Warning';
        aria - label='Send warning';
        on_click={() => on_action (flag_id, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <Info className='h - 4 w - 4' />;
      </Button>;
      <Button;
        variant='ghost';
        size='icon';
        title='Suspend User';
        aria - label='Suspend user';
        on_click={() => on_action (flag_id, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <AlertTriangle className='h - 4 w - 4' />;
      </Button>;
      <Button;
        variant='ghost';
        size='icon';
        title='Ban User';
        aria - label='Ban user';
        on_click={() => on_action (flag_id, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <Ban className='h - 4 w - 4' />;
      </Button>;
      {status === 'pending' && (
        <Button;
          variant='ghost';
          size='sm'          on_click={() => on_action (flag_id, 'ignore')}          variant="ghost";
          size="sm";
          on_click={() => on_action (flag_id, 'ignore')}
          on_click = {(, ) => on_action (flag_id, 'ignore'), }
        >;
          Ignore;
        </Button>)}
    </div>);
}
'"},
  );
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
);
};
'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
