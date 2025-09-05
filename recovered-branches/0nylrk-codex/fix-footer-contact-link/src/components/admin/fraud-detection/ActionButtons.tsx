
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Eye, Info, AlertTriangle, Ban } from &quot;lucide-react&quot;;

interface ActionButtonsProps {
  flagId: string;
  status: string;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ flagId, status, onAction }) => {
  return (
    <div className=&quot;flex space-x-2&quot;>
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;View Details&quot;
        onClick={() => alert(&quot;View details (would open a detailed view)&quot;)}
      >
        <Eye className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Send Warning&quot;
        onClick={() => onAction(flagId, 'warning')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Info className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Suspend User&quot;
        onClick={() => onAction(flagId, 'suspension')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className=&quot;h-4 w-4&quot; />
      </Button>
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        title=&quot;Ban User&quot;
        onClick={() => onAction(flagId, 'ban')}
        disabled={status === 'actioned' || status === 'ignored'}
      >
        <Ban className=&quot;h-4 w-4&quot; />
      </Button>
      {status === 'pending' && (
        <Button
          variant=&quot;ghost&quot;
          size=&quot;sm&quot;
          onClick={() => onAction(flagId, 'ignore')}
        >
          Ignore
        </Button>
      )}
    </div>
  );
};
