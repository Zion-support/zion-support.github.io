
import React from "react";
import { Button } from "@/components/ui/button";
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
return (
    <div className='flex space-x-2'>
      <Button

import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {

>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'
interface ActionButtonsProps {

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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant="ghost"
        size="icon"
        title="View Details"
        aria-label="View details"
        onClick={() => alert("View details (would open a detailed view)")}
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      >
        <Eye className="h-4 w-4" />
      </Button>
      <Button
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
}
'"}
  )
}

>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
