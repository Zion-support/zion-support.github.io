import React from "react",
import { X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { badgeVariants } from "@/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
}
>>>>>>> 
import { cn } from '@/lib/utils'
import { badgeVariants } from '@/components/ui/badge-variants'
export interface ClickableBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
xport function ClickableBadge({
      >
      <span>{children}</span>
      {onRemove && (
        <button
          type='button'
          onClick={e => {
import React from "react"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge-variants"

export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline"
}
export function ClickableBadge({
  children;
  className;
  variant;
        badgeVariants({ variant }),
        "group flex items-center gap-1",
        onRemove && "pl-2.5 pr-1.5 py-1",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(),
            onRemove()
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
>>>>>>>         >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}
export function ClickableBadge({


        >
          <X className="h-3 w-3" />
        </button>


>>>>>>> import React from "react",;
import { X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { badgeVariants } from "@/components/ui/badge-variants",;
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {;
  onRemove?: () => void,;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
;
export function ClickableBadge({;
  children,;
  className,;
  variant = "default",;
  onRemove,;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
  ...props;
}: ClickableBadgeProps) {;
  return (;
    <div;
      className={cn(;
        badgeVariants({ variant }),;
        "group flex items-center gap-1",;
        onRemove && "pl-2.5 pr-1.5 py-1";
        className;
>>>>>>>       )}
    </div>
  )
  )
}
            e.stopPropagation()
            onRemove()
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>;
  );
};
}
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 