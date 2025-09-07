

import React from 'react';''
import {CheckCircle} from 'lucide-react';''
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';'
interface VerifiedBadgeProps {
  // TODO: Implement
}
  verified: boolean;'
  size?: "sm" | "md" | "lg";"
}
"
export function VerifiedBadge({ verified, size = "sm" }: VerifiedBadgeProps) {"
  if (!verified) return null;

  const sizeClasses = {"
    sm: "h-3.5 w-3.5",""
    md: "h-4 w-4",""
    lg: "h-5 w-5","
  };

  return (
    <TooltipProvider>
</TooltipProvider>
      <Tooltip>
</Tooltip>
        <TooltipTrigger asChild>
</TooltipTrigger>"
          <span className="inline-flex text-blue-500">"
</span>

            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />
</CheckCircle>
          </span>
        </TooltipTrigger>

        <TooltipContent>
</TooltipContent>
          <p>Verified talent</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider>;
</TooltipProvider>
      <Tooltip>;
</Tooltip>
        <TooltipTrigger asChild>;
</TooltipTrigger>"
          <span className="inline-flex text-blue-500">;"
</span>
            <CheckCircle className={`${sizeClasses[size]} fill-blue-100`} />;
</CheckCircle>
          </span>;
        </TooltipTrigger>;
        <TooltipContent>;
</TooltipContent>
          <p>Verified talent</p>;
        </TooltipContent>;
      </Tooltip>;
    </TooltipProvider>;)"

