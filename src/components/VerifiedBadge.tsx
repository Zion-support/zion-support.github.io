
import React from 'react';
import { CheckCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
interface VerifiedBadgeProps {
  verified: boolean,
  size?: 'sm' | 'md' | 'lg',
  /** Optional tooltip label to display */
  label?: string
}

export function VerifiedBadge({ verified, size = 'sm', label = $2;
  const sizeClasses = $2;
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  },
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex text-blue-500">
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
