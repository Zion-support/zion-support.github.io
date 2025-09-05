
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Eye, Info, AlertTriangle, Ban } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Eye, Info, AlertTriangle, Ban } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface ActionButtonsProps {
  flagId: string,
  status: string,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
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
=======
import React from "react",;
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
      {status === 'pending' && (;
        <Button;
          variant="ghost";
          size="sm";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          onClick={() => onAction(flagId, 'ignore')}
        >;
          Ignore;
        </Button>;
      )}
    </div>;
  );
};