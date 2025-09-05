
import React from "react";

interface ActionButtonsProps {_flagId: string;
  status: string;
  onAction: (_flagId: string, _action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;}

export const ActionButtons: React.FC<ActionButtonsProps> = (_{_flagId, _status, _onAction}) => {_return (_<div className="flex space-x-2">
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
        onClick={_() => onAction(flagId, _'warning')}
        disabled={_status === 'actioned' || status === 'ignored'}
      >
        <Info className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Suspend User"
        aria-label="Suspend user"
        onClick={_() => onAction(flagId, _'suspension')}
        disabled={_status === 'actioned' || status === 'ignored'}
      >
        <AlertTriangle className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        title="Ban User"
        aria-label="Ban user"
        onClick={_() => onAction(flagId, _'ban')}
        disabled={_status === 'actioned' || status === 'ignored'}
      >
        <Ban className="h-4 w-4" />
      </Button>
      {_status === 'pending' && (_<Button
          variant="ghost"
          size="sm"
          onClick={() => onAction(flagId, _'ignore')}
        >
          Ignore
        </Button>
      )}
    </div>
  );
};
