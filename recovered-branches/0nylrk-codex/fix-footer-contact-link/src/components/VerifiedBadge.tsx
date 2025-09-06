
<<<<<<< HEAD
import React from 'react';
import { CheckCircle  } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
interface VerifiedBadgeProps {
<<<<<<< HEAD
<<<<<<< HEAD
  verified: boolean;
<<<<<<< HEAD
=======
=======
  verified: boolean,
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  size?: 'sm' | 'md' | 'lg'
=======
  size?: 'sm' | 'md' | 'lg';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}

export function VerifiedBadge({ verified, size = 'sm' }: VerifiedBadgeProps) {;
  if (!verified) return null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import { CheckCircle } from 'lucide-react',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
interface VerifiedBadgeProps {;
  verified: boolean,;
  size?: 'sm' | 'md' | 'lg';
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  verified: boolean
  size?: 'sm' | 'md' | 'lg'
}
export function VerifiedBadge({ verified, size = 'sm' }: VerifiedBadgeProps) {
<<<<<<< HEAD
  if (!verified) return null;
=======
  if (!verified) return null,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const sizeClasses = {
    sm: 'h-3.5 w-3.5'
    md: 'h-4 w-4'
    lg: 'h-5 w-5'
<<<<<<< HEAD
  }

=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
  )
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
