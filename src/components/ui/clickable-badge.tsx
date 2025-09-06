import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { badgeVariants } from '@/components/ui/badge-variants';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
export interface ClickableBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
=======
import React from "react";
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants";
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function ClickableBadge({
  children,
  className,
  variant = 'default',
  onRemove,
  ...props
}: ClickableBadgeProps) {
      >
      <span>{children}</span>
      {onRemove && (
        <button
          type='button'
          onClick={e => {
  return (
    <div
      className={cn(
        badgeVariants({ variant });
        "group flex items-center gap-1";
        onRemove && "pl-2.5 pr-1.5 py-1";
        className
      )}
      {...props}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    >
      <span>{children}</span>
      {onRemove && (
        <button
<<<<<<< HEAD
<<<<<<< HEAD
          type='button'
          onClick={e => {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            e.stopPropagation();
            onRemove();
=======
          type="button"
          onClick={(e,) => {
            e.stopPropagation(),
            onRemove()
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          }}
          className='ml-1 rounded-full p-0.5 hover:bg-background/20'
          aria-label='Remove'
        >
          <X className='h-3 w-3' />
        </button>
      )}
    </div>
  );
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
