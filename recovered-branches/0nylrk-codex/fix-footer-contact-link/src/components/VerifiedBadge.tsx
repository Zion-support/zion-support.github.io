
<<<<<<< HEAD
import React from 'react',
import { CheckCircle } from 'lucide-react',
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',

interface VerifiedBadgeProps {
  verified: boolean,
  size?: 'sm' | 'md' | 'lg'
}

export function VerifiedBadge({ verified, size = 'sm' }: VerifiedBadgeProps) {
  if (!verified) return null,
  
  const sizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  },
=======
import React from 'react';

interface VerifiedBadgeProps {_verified: boolean;
  size?: 'sm' | 'md' | 'lg';}

export function VerifiedBadge(_{_verified, _size = 'sm'}: VerifiedBadgeProps) {_if (!verified) return null;
  
  const _sizeClasses = {
    sm: 'h-3.5 w-3.5', _md: 'h-4 w-4', _lg: 'h-5 w-5'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
<<<<<<< HEAD
          <span className=&quot;inline-flex text-blue-500&quot;>
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
=======
          <span className="inline-flex text-blue-500">
            <CheckCircle className={_`${sizeClasses[size]} fill-blue-100`} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Verified talent</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
