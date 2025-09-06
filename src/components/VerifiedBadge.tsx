interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */
  label?: string;

<<<<<<< HEAD
import React from 'react',;
import { CheckCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
interface VerifiedBadgeProps {;
  verified: boolean,;
  size?: 'sm' | 'md' | 'lg',;
  /** Optional tooltip label to display */;
  label?: string;
}

export function VerifiedBadge({ verified, size = 'sm', label = 'Verified talent' }: VerifiedBadgeProps) {
  if (!verified) return null,
  
  const sizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  },
  
=======
export function VerifiedBadge({
  verified,
  size = 'sm',
  label = 'Verified talent',
}: VerifiedBadgeProps) {
  if (!verified) return null;

  const sizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

>>>>>>> main
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
<<<<<<< HEAD
          <span className="inline-flex text-blue-500">
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
=======
          <span className='inline-flex text-blue-500'>            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />

            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />

>>>>>>> main
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
<<<<<<< HEAD
  )
}
;
=======
  );
}
>>>>>>> main
