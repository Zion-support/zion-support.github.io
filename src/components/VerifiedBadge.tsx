<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
import { CheckCircle } from 'lucide-react'
<<<<<<< HEAD
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
=======
import React from 'react';
import { CheckCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,;
} from '@/components/ui/tooltip';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface VerifiedBadgeProps {
  verified: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** Optional tooltip label to display */
<<<<<<< HEAD
  label?: string
}

export function VerifiedBadge({ verified, size;
=======
<<<<<<< HEAD

import React from 'react';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import React from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  label?: string;
}

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

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

export function VerifiedBadge({ verified, size = 'sm', label = 'Verified talent' }: VerifiedBadgeProps) {
  if (!verified) return null,
  
  const sizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
<<<<<<< HEAD
          <span className='inline-flex text-blue-500'>            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />          <span className="inline-flex text-blue-500">
=======
<<<<<<< HEAD
          <span className='inline-flex text-blue-500'>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
          <span className="inline-flex text-blue-500">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
<<<<<<< HEAD
      </Tooltip>;
    </TooltipProvider>;
  );
};
}
}
=======
      </Tooltip>
    </TooltipProvider>
<<<<<<< HEAD
  )
<<<<<<< HEAD
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
