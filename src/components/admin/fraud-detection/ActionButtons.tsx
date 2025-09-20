import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Info, AlertTriangle, Ban } from 'lucide-react';

interface ActionButtonsProps {
  onView?: () => void;
  onInfo?: () => void;
  onFlag?: () => void;
  onBan?: () => void;
  disabled?: boolean;
}

export function ActionButtons({ onView, onInfo, onFlag, onBan, disabled = false }: ActionButtonsProps) {
  return (
    <div className="flex space-x-2">
      {onView && (
        <Button
          
          size="sm"
          onClick={onView}
          disabled={disabled}
          className="flex items-center space-x-1"
        >
          <Eye className="h-4 w-4" />
          <span>View</span>
        </Button>
      )}
      {onInfo && (
        <Button
          
          size="sm"
          onClick={onInfo}
          disabled={disabled}
          className="flex items-center space-x-1"
        >
          <Info className="h-4 w-4" />
          <span>Info</span>
        </Button>
      )}
      {onFlag && (
        <Button
          
          size="sm"
          onClick={onFlag}
          disabled={disabled}
          className="flex items-center space-x-1 text-orange-600 hover:text-orange-700"
        >
          <AlertTriangle className="h-4 w-4" />
          <span>Flag</span>
        </Button>
      )}
      {onBan && (
        <Button
          
          size="sm"
          onClick={onBan}
          disabled={disabled}
          className="flex items-center space-x-1 text-red-600 hover:text-red-700"
        >
          <Ban className="h-4 w-4" />
          <span>Ban</span>
        </Button>
      )}
    </div>
  );
}
