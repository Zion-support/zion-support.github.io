
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {

  flagId: string
  status: string
  onAction: (
    flagId: string
    action: 'warning' | 'suspension' | 'ban' | 'ignore'
  ) => void
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId
  status
  onAction
=======
interface ActionButtonsProps {;
  flagId: string;
  status: string;
  onAction: (;
    flagId: string,;
    action: 'warning' | 'suspension' | 'ban' | 'ignore';
  ) => void;

export const ActionButtons: React.FC<ActionButtonsProps> = ({;
  flagId,;
  status,;
  onAction,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}) => {  return (
    <div className='flex space-x-2'>;
      <Button
        variant='ghost'
        size='icon'
        title='View Details'
        aria-label='View details'
        onClick={() => alert('View details (would open a detailed view)')}        variant="ghost";
        size="icon";
        title="View Details";
        aria-label="View details";
        onClick = {(,) => alert("View details (would open a detailed view)"),}
      >;
        <Eye className='h-4 w-4' />;
      </Button>;
      <Button
        variant='ghost'
        size='icon'
        title='Send Warning'
        aria-label='Send warning'
        onClick={() => onAction(flagId, 'warning')}
<<<<<<< HEAD
        disabled={status === 'actioned' |status === 'ignored'}      >
        <Info className='h-4 w-4' />
      </Button>
=======
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <Info className='h-4 w-4' />;
      </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <Button
        variant='ghost'
        size='icon'
        title='Suspend User'
        aria-label='Suspend user'
        onClick={() => onAction(flagId, 'suspension')}
<<<<<<< HEAD
        disabled={status === 'actioned' |status === 'ignored'}      >
        <AlertTriangle className='h-4 w-4' />
      </Button>
=======
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <AlertTriangle className='h-4 w-4' />;
      </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      <Button
        variant='ghost'
        size='icon'
        title='Ban User'
        aria-label='Ban user'
        onClick={() => onAction(flagId, 'ban')}
<<<<<<< HEAD
        disabled={status === 'actioned' |status === 'ignored'}      >
        <Ban className='h-4 w-4' />
      </Button>
      {status === 'pending' && (
=======
        disabled={status === 'actioned' || status === 'ignored'}      >;
        <Ban className='h-4 w-4' />;
      </Button>;
      {status === 'pending' && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Button
          variant='ghost'
          size='sm'          onClick={() => onAction(flagId, 'ignore')}          variant="ghost";
          size="sm";
          onClick={() => onAction(flagId, 'ignore')}
          onClick = {(,) => onAction(flagId, 'ignore'),}
        >;
          Ignore;
        </Button>;
      )}
<<<<<<< HEAD
    </div>
  )
}
'"}
  )
}

=======
    </div>;
  );
};
'"},;
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'

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
        aria-label="View details"
        onClick={() => alert("View details (would open a detailed view)")}
      >
        <Eye className="h-4 w-4" />
      </Button>
      <Button
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
          onClick={() => onAction(flagId, 'ignore')}
        >
          Ignore
        </Button>
      )}
    </div>
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
