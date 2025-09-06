<<<<<<< HEAD
import React from 'react'
import { X } from 'lucide-react'
<<<<<<< HEAD
=======
import { cn } from '@/lib/utils'
import { badgeVariants } from '@/components/ui/badge-variants'
export interface ClickableBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import React from "react",
import { X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { badgeVariants } from "@/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
import { cn } from '@/lib/utils'
import { badgeVariants } from '@/components/ui/badge-variants'
export interface ClickableBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ClickableBadge({
<<<<<<< HEAD
  children
  className
  variant = 'default'
  onRemove
  ...props
}: ClickableBadgeProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
  children,
  className,
  variant = "default",
  onRemove,
  ...props
}: ClickableBadgeProps) {
  return (
    <div
      className={cn(
<<<<<<< HEAD
=======
        badgeVariants({ variant })
        "group flex items-center gap-1"
        onRemove && "pl-2.5 pr-1.5 py-1"
        className
      )}
      {...props}
      <span>{children}</span>
      {onRemove && (
        <button
          type='button'
          onClick={e => {
            e.stopPropagation()
            onRemove() }}
          className='ml-1 rounded-full p-0.5 hover:bg-background/20'
          aria-label='Remove'
=======
  return (
    <div
      className={cn(
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            onRemove()
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        >
          <X className="h-3 w-3" />
        </button>
<<<<<<< HEAD
<<<<<<< HEAD
      )}
    </div>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",;
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
  ...props;
}: ClickableBadgeProps) {;
  return (;
    <div;
      className={cn(;
        badgeVariants({ variant }),;
        "group flex items-center gap-1",;
        onRemove && "pl-2.5 pr-1.5 py-1";
        className;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      )}
    </div>
  )
  )
}
            e.stopPropagation()
            onRemove()
          }}
<<<<<<< HEAD
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
=======
          className="ml-1 rounded-full p-0.5 hover:bg-background/20";
          aria-label="Remove";
        >;
          <X className="h-3 w-3" />;
        </button>;
      )}
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
