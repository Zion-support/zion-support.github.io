:src_backup/components/ui/clickable-badge.tsx

import React from "react",
import { X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { badgeVariants } from "@/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function ClickableBadge({
export function ClickableBadge({
      >
      <span>{children}</span>
      {onRemove && (
        <button
          type='button'
          onClick={e => {
import React from "react"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge-variants"

:src_backup/components/ui/clickable-badge.tsx
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants";
origin/cursor/automate-test-improve-and-merge-code-2533
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
export function ClickableBadge({
  children;
  className;
:src_backup/components/ui/clickable-badge.tsx
  variant;
  children,
  className,
  variant = "default",
  onRemove,
  ...props
}: ClickableBadgeProps) {
  return (
    <div
      className={cn(
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
        >
          <X className="h-3 w-3" />
        </button>
:src_backup/components/ui/clickable-badge.tsx
export function ClickableBadge({

        >
          <X className="h-3 w-3" />
        </button>


import React from "react",;
import { X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { badgeVariants } from "@/components/ui/badge-variants",;
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {;
  onRemove?: () => void,;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
:src/components/ui/clickable-badge.tsx

  ...props;
}:,  ClickableBadgeProps) {;
}: ClickableBadgeProps) {;
  return (;
    <div;
      className={cn(;
        badgeVariants({ variant }),;
        "group flex items-center gap-1",;
        onRemove && "pl-2.5 pr-1.5 py-1";
        className;
      )}
:src_backup/components/ui/clickable-badge.tsx
{...props}
    >;
      <span>{children}</span>;
      {onRemove && (;
        <button;
          type="button";
          onClick={(e) => {;
            e.stopPropagation();
            onRemove();
  )
}
            e.stopPropagation()
            onRemove()
:src_backup/components/ui/clickable-badge.tsx
          }}

          className="ml-1 rounded-full p-0.5 hover:bg-background/20";

          className="ml-1 rounded-full p-0.5 hover:bg-background/20";

          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20";",
      {...props}
    >;
      <span>{children}</span>;
      {onRemove && (;
        <button;
          type="button";
          onClick={(e) => {;
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20";
          aria-label="Remove";
        >;
          <X className="h-3 w-3" />;
        </button>;
      )}
:src_backup/components/ui/clickable-badge.tsx
    </div>;
  );

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib / utils';
import { badge_variants } from '@/components / ui / badge - variants';
export interface ClickableBadgeProps;
  extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
export /**
 * ClickableBadge - Function description
          <X className="h-3 w-3" />"

        </button>
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {;

    <div;
      className={cn(;)
        badgeVariants({ variant }),;"
        "group flex items-center gap-1",;""
        onRemove && "pl-2.5 pr-1.5 py-1";"
        className;
      )}

    </div>"
          <X className="h-3 w-3" />;"

        </button>;
  extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;"
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
export /**
 * ClickableBadge - Function description;
pr-12325
 */
function ClickableBadge() {
      >;
      <span>{children}</span>;
      {on_remove && (
        <button;
          type='button';
          on_click={e => {
import React from './react';
import { cn  } from '@/lib / utils';
import { badge_variants  } from '@/components / ui / badge - variants';
export interface ClickableBadgeProps extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
export /**
 * ClickableBadge - Function description
 */
function ClickableBadge() {
  return (
    <div;
      className={cn (
        badge_variants ({ variant });
        "group flex items - center gap - 1";
        on_remove && "pl - 2.5 pr - 1.5 py - 1";
        class_name)}
      {...props}
      <span>{children}</span>;
      {on_remove && (
        <button;
          type='button';
          on_click={e => {
            e.stop_propagation ();
            on_remove () }}
          className='ml - 1 rounded - full p - 0.5 hover:bg - background / 20';',
          aria - label='Remove';
        >;
          <X className='h - 3 w - 3' />;
        </button>)}
    </div>));
}
            e.stop_propagation ();
            on_remove ();
          }}
          className="ml - 1 rounded - full p - 0.5 hover:bg - background / 20";",
          aria - label="Remove";
        >;
          <X className="h - 3 w - 3" />;
        </button>)}
    </div>);
}
;
:src_backup/components/ui/clickable-badge.tsx

}
origin/cursor/automate-test-improve-and-merge-code-2533
    </div>;
  );
}
;
}
origin/cursor/automate-test-improve-and-merge-code-2533
        <button;
          type='button';
          on_click={e => {
export interface ClickableBadgeProps extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";"
}
  return (
      className={cn ()
        badge_variants ({ variant });"
        "group flex items - center gap - 1";""
        on_remove && "pl - 2.5 pr - 1.5 py - 1";"
        class_name)}
      {...props}
</div>
        <button;"
          <X className='h - 3 w - 3' />;

        </button>)}
    </div>));
          <X className="h - 3 w - 3" />;"

    </div>);"
pr-12325
