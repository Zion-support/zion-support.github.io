
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  verified: boolean,
  size?: 'sm' | 'md' | 'lg'
}

export function VerifiedBadge({ verified, size = 'sm' }: VerifiedBadgeProps) {;
  if (!verified) return null;
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from 'react',;
import { CheckCircle } from 'lucide-react',;
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip',;
interface VerifiedBadgeProps {;
  verified: boolean,;
  size?: 'sm' | 'md' | 'lg';
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  verified: boolean
  size?: 'sm' | 'md' | 'lg'
}
export function VerifiedBadge({ verified, size = 'sm' }: VerifiedBadgeProps) {

  if (!verified) return null,
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
