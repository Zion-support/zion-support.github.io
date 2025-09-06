<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ActionButtonsProps {
  flagId: string;
  status: string;
  onAction: (
    flagId: string,
    action: 'warning' | 'suspension' | 'ban' | 'ignore'
  ) => void;

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  flagId,
  status,
  onAction,
}) => {
=======

import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';
interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore',) => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction },) => {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
  return (
    <div className='flex space-x-2'>
      <Button
<<<<<<< HEAD
        variant='ghost'
        size='icon'
        title='View Details'
        aria-label='View details'
        onClick={() => alert('View details (would open a detailed view)')}
=======
        variant="ghost"
        size="icon"
        title="View Details"
        aria-label="View details"
        onClick = {(,) => alert("View details (would open a detailed view)"),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <Eye className='h-4 w-4' />
      </Button>
      <Button
<<<<<<< HEAD
        variant='ghost'
        size='icon'
        title='Send Warning'
        aria-label='Send warning'
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        variant="ghost"
        size="icon"
        title="Send Warning"
        aria-label="Send warning"
        onClick = {() => onAction(flagId, 'warning'),}
        disabled = {status === 'actioned' || status === 'ignored',}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <Info className='h-4 w-4' />
      </Button>
      <Button
<<<<<<< HEAD
        variant='ghost'
        size='icon'
        title='Suspend User'
        aria-label='Suspend user'
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        variant="ghost"
        size="icon"
        title="Suspend User"
        aria-label="Suspend user"
        onClick = {() => onAction(flagId, 'suspension'),}
        disabled = {status === 'actioned' || status === 'ignored',}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <AlertTriangle className='h-4 w-4' />
      </Button>
      <Button
<<<<<<< HEAD
        variant='ghost'
        size='icon'
        title='Ban User'
        aria-label='Ban user'
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        variant="ghost"
        size="icon"
        title="Ban User"
        aria-label="Ban user"
        onClick = {() => onAction(flagId, 'ban'),}
        disabled = {status === 'actioned' || status === 'ignored',}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
      >
        <Ban className='h-4 w-4' />
      </Button>
      {status === 'pending' && (
        <Button
          variant='ghost'
          size='sm'          onClick={() => onAction(flagId, 'ignore')}
=======
          variant="ghost"
          size="sm"
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          onClick={() => onAction(flagId, 'ignore')}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
          onClick = {(,) => onAction(flagId, 'ignore'),}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          Ignore
        </Button>
      )}
    </div>
  );
<<<<<<< HEAD
};
'"
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
},;
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
