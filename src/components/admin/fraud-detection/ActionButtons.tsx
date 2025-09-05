
import React from "react",
import { Button } from "@/components/ui/button",import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'

interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className=&quot;flex space-x-2&quot;>
import React from "react";

interface ActionButtonsProps {_flagId: string;
  status: string;
  onAction: (_flagId: string, _action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;}

export const ActionButtons: React.FC<ActionButtonsProps> = (_{_flagId, _status, _onAction}) => {_return (_<div className="flex space-x-2">
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;View Details&quot;
        aria-label=&quot;View details&quot;
        onClick={() => alert(&quot;View details (would open a detailed view)&quot;)}
      >
        <Eye className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Send Warning&quot;
        aria-label=&quot;Send warning&quot;
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}      >
        <Info className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Suspend User&quot;
        aria-label=&quot;Suspend user&quot;
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}      >
        <AlertTriangle className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Ban User&quot;
        aria-label=&quot;Ban user&quot;
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}      >
        <Ban className=&quot;h-4 w-4&quot; />
      </Button>
      {status === 'pending' && (
        <Button
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={() => onAction(flagId, 'ignore')}        >
          Ignore
        </Button>
      )}
    </div>
  )
},
