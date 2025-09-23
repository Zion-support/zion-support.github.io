
import React from 'react';
<<<<<<< HEAD
CheckCircle
import { TooltipContentTooltipProviderTooltipTrigger } from '@/components/ui/tooltip';
=======
import { CheckCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
>>>>>>> origin/auto/autonomy-17186719616

interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
}

<<<<<<< HEAD
export function VerifiedBadge({ verifiedsize = 'sm' }: VerifiedBadgeProps) {
=======
export function VerifiedBadge({ verified, size = 'sm' }: VerifiedBadgeProps) {
>>>>>>> origin/auto/autonomy-17186719616
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
