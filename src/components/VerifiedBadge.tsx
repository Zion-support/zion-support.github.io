<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React from 'react';
import React from 'react'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { CheckCircle } from 'lucide-react'

import {
  Tooltip
  TooltipContent
  TooltipProvider
  TooltipTrigger
} from '@/components/ui/tooltip'
interface VerifiedBadgeProps {
  verified: boolean
  size?: 'sm' | 'md' | 'lg'
  /** Optional tooltip label to display */
  label?: string
export function VerifiedBadge({
  verified
  size = 'sm'
  label = 'Verified talent'
}: VerifiedBadgeProps) {
  if (!verified) return null
  const sizeClasses = {
    sm: 'h-3.5 w-3.5'
    md: 'h-4 w-4'
    lg: 'h-5 w-5'
  }
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
interface VerifiedBadgeProps {
  verified: boolean
  size?: 'sm' | 'md' | 'lg'
  /** Optional tooltip label to display */
  label?: string
}
export function VerifiedBadge({ verified, size = 'sm', label = 'Verified talent' }: VerifiedBadgeProps) {
  if (!verified) return null
  const sizeClasses = {
    sm: 'h-3.5 w-3.5'
    md: 'h-4 w-4'
    lg: 'h-5 w-5'
  }

<<<<<<< HEAD
interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */;
  label?: string;
export /**
 * VerifiedBadge - Function description
 */
function VerifiedBadge() {
  // Check condition
if (return null) {
  $2
}
  const size_classes = {
    sm: 'h - 3.5 w - 3.5',
    md: 'h - 4 w - 4',
    lg: 'h - 5 w - 5',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components / ui / tooltip';
interface VerifiedBadgeProps {

  verified: boolean,
  }


interface VerifiedBadgeProps {
  verified: boolean;

  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */;
  label?: string;
}
export /**
 * VerifiedBadge - Function description
 */
function VerifiedBadge() {
  // Check condition
if (return null) {
  $2
}
  const size_classes = {
    sm: 'h - 3.5 w - 3.5',
    md: 'h - 4 w - 4',
    lg: 'h - 5 w - 5';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }



=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */
  label?: string;

import React from 'react',;
import { CheckCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
interface VerifiedBadgeProps {;
  verified: boolean,;
  size?: 'sm' | 'md' | 'lg',;
  /** Optional tooltip label to display */;
  label?: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export function VerifiedBadge({ verified, size = 'sm', label = 'Verified talent' }: VerifiedBadgeProps) {
  if (!verified) return null,
  
  const sizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  },
<<<<<<< HEAD
<<<<<<< HEAD

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>

=======
  
>>>>>>>   return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className='inline-flex text-blue-500'>            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />          <span className="inline-flex text-blue-500">
>>>>>>>             <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  return (



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
>>>>>>>           </span>
=======
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className='inline-flex text-blue-500'>            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />          <span className="inline-flex text-blue-500">
          <span className="inline-flex text-blue-500">
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
          </span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </Tooltip>;
    </TooltipProvider>;
  );
};
}
}
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </Tooltip>
    </TooltipProvider>
  )
}
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
