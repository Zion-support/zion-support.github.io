<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { badgeVariants } from '@/components/ui/badge-variants';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React from "react";
import { X } from 'lucide-react'
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants";
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function ClickableBadge({
  children;
  className;
  variant = "default";
  onRemove;
  ...props
}: ClickableBadgeProps) {
<<<<<<< HEAD
  
=======

import React from "react";
import { X } from 'lucide-react'
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants";
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function ClickableBadge({
  children;
  className;
  variant = "default",
  onRemove;
  ...props
}: ClickableBadgeProps) {
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  return (
    <div
      className={cn(
        badgeVariants({ variant });
        "group flex items-center gap-1";
        onRemove && "pl-2.5 pr-1.5 py-1";
        className
      )}
      {...props}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    >
      <span>{children}</span>
      {onRemove && (
        <button
<<<<<<< HEAD
<<<<<<< HEAD
          type='button'
          onClick={e => {
=======
          type="button"
          onClick={(e) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            e.stopPropagation();
            onRemove()
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
<<<<<<< HEAD
  );
=======
          type = "button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove()
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
