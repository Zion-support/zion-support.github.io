
import React from 'react';

interface VerifiedBadgeProps {_verified: boolean;
  size?: 'sm' | 'md' | 'lg';}

export function VerifiedBadge(_{_verified, _size = 'sm'}: VerifiedBadgeProps) {_if (!verified) return null;
  
  const _sizeClasses = {
    sm: 'h-3.5 w-3.5', _md: 'h-4 w-4', _lg: 'h-5 w-5'};
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex text-blue-500">
            <CheckCircle className={_`${sizeClasses[size]} fill-blue-100`} />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Verified talent</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
