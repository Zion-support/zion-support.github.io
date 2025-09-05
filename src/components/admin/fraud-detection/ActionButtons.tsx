
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react'

interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className=&quot;flex space-x-2&quot;>
=======
import React from "react";

interface ActionButtonsProps {_flagId: string;
  status: string;
  onAction: (_flagId: string, _action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;}

export const ActionButtons: React.FC<ActionButtonsProps> = (_{_flagId, _status, _onAction}) => {_return (_<div className="flex space-x-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Send Warning&quot;
        aria-label=&quot;Send warning&quot;
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        variant="ghost"
        size="icon"
        title="Send Warning"
        aria-label="Send warning"
        onClick={_() => onAction(flagId, _'warning')}
        disabled={_status === 'actioned' || status === 'ignored'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <Info className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
<<<<<<< HEAD
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Suspend User&quot;
        aria-label=&quot;Suspend user&quot;
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        variant="ghost"
        size="icon"
        title="Suspend User"
        aria-label="Suspend user"
        onClick={_() => onAction(flagId, _'suspension')}
        disabled={_status === 'actioned' || status === 'ignored'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <AlertTriangle className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
<<<<<<< HEAD
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Ban User&quot;
        aria-label=&quot;Ban user&quot;
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
=======
        variant="ghost"
        size="icon"
        title="Ban User"
        aria-label="Ban user"
        onClick={_() => onAction(flagId, _'ban')}
        disabled={_status === 'actioned' || status === 'ignored'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <Ban className=&quot;h-4 w-4&quot; />
      </Button>
<<<<<<< HEAD
      {status === 'pending' && (
        <Button
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={() => onAction(flagId, 'ignore')}
=======
      {_status === 'pending' && (_<Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, _'ignore')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Ignore
        </Button>
      )}
    </div>
  )
},
