
import React from 'react';
CheckCircle
import { TooltipContentTooltipProviderTooltipTrigger } from '@/components/ui/tooltip';

interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function VerifiedBadge({ verifiedsize = 'sm' }: VerifiedBadgeProps) {
  if (!verified) return null;
  
  const sizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex text-blue-500">
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Verified talent</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
