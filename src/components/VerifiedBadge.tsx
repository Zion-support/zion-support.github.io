
import React from 'react';
import { CheckCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */
  label?: string
}

export function VerifiedBadge({ verified, size;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className='inline-flex text-blue-500'>            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />          <span className="inline-flex text-blue-500">
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
;