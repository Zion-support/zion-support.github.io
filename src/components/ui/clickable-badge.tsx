<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
<<<<<<< HEAD:src/components/ui/clickable-badge.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { badgeVariants } from "@/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function ClickableBadge({
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
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

<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/clickable-badge.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
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
<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
  variant;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

            onRemove()
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
pr-12325
export function ClickableBadge({
        >
          <X className="h-3 w-3" />"

import React from "react",
import { X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { badgeVariants } from "@/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function ClickableBadge({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
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
<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
export function ClickableBadge({


        >
          <X className="h-3 w-3" />
        </button>


<<<<<<< HEAD:src/components/ui/clickable-badge.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/clickable-badge.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
import React from "react",;
import { X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { badgeVariants } from "@/components/ui/badge-variants",;
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {;
  onRemove?: () => void,;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
<<<<<<< HEAD:src/components/ui/clickable-badge.tsx
=======
;
export function ClickableBadge({;
  children,;
  className,;
  variant = "default",;
  onRemove,;
<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/clickable-badge.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      )}
<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
<<<<<<< HEAD
      {...props}
    >;
      <span>{children}</span>;
      {onRemove && (;
        <button;
          type="button";
          onClick={(e) => {;
            e.stopPropagation();
            onRemove();
=======

    </div>
  )
<<<<<<< HEAD:src/components/ui/clickable-badge.tsx
<<<<<<< HEAD
=======
    </div>
  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
  )
}
            e.stopPropagation()
            onRemove()
<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          }}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className="ml-1 rounded-full p-0.5 hover:bg-background/20";
<<<<<<< HEAD
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

          className="ml-1 rounded-full p-0.5 hover:bg-background/20";


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/clickable-badge.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
          aria-label="Remove";
        >;
          <X className="h-3 w-3" />;
        </button>;
      )}
<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
<<<<<<< HEAD:src/components/ui/clickable-badge.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/clickable-badge.tsx


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
<<<<<<< HEAD:src_backup/components/ui/clickable-badge.tsx
<<<<<<< HEAD:src/components/ui/clickable-badge.tsx
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/clickable-badge.tsx
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ui/clickable-badge.tsx
