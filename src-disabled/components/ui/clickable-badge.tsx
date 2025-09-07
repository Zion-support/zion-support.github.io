<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants";
origin/cursor/automate-test-improve-and-merge-code-2533
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
<<<<<<< HEAD

;
=======
<<<<<<< HEAD
  variant?: "default" | "secondary" | "destructive" | "outline";
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ClickableBadge({>;
      <span>{children}</span>;
      {onRemove && (<button;
          type='button';
          onClick={e => {import React from 'react';
import { cn  } from '@/lib/utils';
import { badgeVariants  } from '@/components/ui/badge-variants';
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement>  {onRemove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
export function ClickableBadge() {return (<div;
      className={cn(badgeVariants({ variant }),"group flex items-center gap-1",onRemove && "pl-2.5 pr-1.5 py-1",className;
=======
export function ClickableBadge() {return (<div;
      className={cn(badgeVariants({ variant }),group flex items-center gap-1",onRemove && "pl-2.5 pr-1.5 py-1,className;
=======
  variant?: "default" | "secondary" | "destructive" | "outline";
}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ClickableBadge({
  children;
  className;

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
<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export function ClickableBadge({


        >
          <X className="h-3 w-3" />
        </button>


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

import React from "react",;
import { X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { badgeVariants } from "@/components/ui/badge-variants",;
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {;
  onRemove?: () => void,;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
;
export function ClickableBadge({;
  children,;
  className,;
  variant = "default",;
  onRemove,;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
export function ClickableBadge({
  children,
  className,
  variant = "default,
  onRemove,
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
    </div>
  )
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>
  )
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  )
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
            e.stopPropagation()
            onRemove()

<<<<<<< HEAD
          className="ml-1 rounded-full p-0.5 hover:bg-background/20";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className=ml-1 rounded-full p-0.5 hover:bg-background/20";
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


    >;
      <span>{children}</span>;
      {onRemove && (<button;
          type="button";
          onClick={(e) => {e.stopPropagation(),onRemove()}}
<<<<<<< HEAD
          className="ml-1 rounded-full p-0.5 hover:bg-background/20";
          aria-label="Remove";
=======
          className=ml-1 rounded-full p-0.5 hover:bg-background/20";
          aria-label="Remove;
=======
>>>>>>> merged-prs-20250907-203621
          aria-label="Remove";
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        >;
          <X className="h-3 w-3" />;
        </button>;
<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
      )}

:src_backup/components/ui/clickable-badge.tsx
=======
      )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib / utils';
import { badge_variants } from '@/components/ui/ badge - variants';
export function ClickableBadge({>;
          <X className="h-3 w-3" />;
        </button>;
import React from "react",import { X  } from 'lucide-react';
import { cn } from "@/lib/utils",import { badgeVariants } from "@/components/ui/badge-variants",export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement>  {onRemove?: () => void,variant?: "default" | "secondary" | "destructive" | "outline";
}export function ClickableBadge() {return (<div;
      className={cn(badgeVariants({ variant }),"group flex items-center gap-1",onRemove && "pl-2.5 pr-1.5 py-1";
        className;
      )}</div>;
  ))}
            e.stopPropagation()onRemove()}}className="ml-1 rounded-full p-0.5 hover:bg-background/20";aria-label="Remove";
        >;
          <X className="h-3 w-3" />;
        </button>;
<<<<<<< HEAD
      )}import { cn  } from '@/lib / utils';
=======
      )}import { cn  } from @/lib / utils';
import { badge_variants } from @/components / ui / badge - variants';
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib / utils';
import { badge_variants } from '@/components / ui / badge - variants';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
import React from './react';
import { cn  } from '@/lib / utils';
import { badge_variants  } from '@/components / ui / badge - variants';
=======
<<<<<<< HEAD
import React from './react';
import { cn  } from '@/lib / utils';
import { badge_variants  } from '@/components / ui / badge - variants';
export interface ClickableBadgeProps extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
=======
<<<<<<< HEAD
import React from ./react';
import { cn  } from '@/lib / utils;
import { badge_variants  } from @/components / ui / badge - variants';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface ClickableBadgeProps;
  extends React.HTMLAttributes < HTMLDivElement>  {on_remove?: () => void;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
export /**;
 * ClickableBadge - Function description;
 */;
function ClickableBadge() {>;
      <span>{children}</span>;
      {on_remove && (<button;
          type='button';
          on_click={e => {import React from './react';
import { cn   } from '@/lib / utils';
import { badge_variants   } from '@/components / ui / badge - variants';
export interface ClickableBadgeProps extends React.HTMLAttributes < HTMLDivElement>  {on_remove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
export /**;
 * ClickableBadge - Function description;
 */;
<<<<<<< HEAD
function ClickableBadge() {return (<div;
      className={cn (badge_variants ({ variant })"group flex items - center gap - 1";
        on_remove && "pl - 2.5 pr - 1.5 py - 1";
        class_name)}
      {...props}
      <span>{children}</span>;
      {on_remove && (<button;
          type='button';
:src_backup/components/ui/clickable-badge.tsx
          on_click={e => {e.stop_propagation ()on_remove () }}
          className='ml - 1 rounded - full p - 0.5 hover:bg - background / 20';
=======
      className={cn (badge_variants ({ variant })group flex items - center gap - 1";
        on_remove && "pl - 2.5 pr - 1.5 py - 1;
=======
import React from './react';
import { cn  } from '@/lib / utils';
import { badge_variants  } from '@/components / ui / badge - variants';
export interface ClickableBadgeProps extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> origin/chore/fix-lint-and-merge
        class_name)}
      {...props}
      <span>{children}</span>;
      {on_remove && (
        <button;
          type='button';
<<<<<<< HEAD
=======
<<<<<<< HEAD
          on_click={e => {e.stop_propagation ()on_remove () }}
          className=ml - 1 rounded - full p - 0.5 hover:bg - background / 20';
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          on_click={e => {
            e.stop_propagation ();
            on_remove () }}
          className='ml - 1 rounded - full p - 0.5 hover:bg - background / 20';',
          aria - label='Remove';
        >;
          <X className='h - 3 w - 3' />;
        </button>)}
<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
    </div>))}
            e.stop_propagation ()on_remove ()}}
          className="ml - 1 rounded - full p - 0.5 hover:bg - background / 20";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>))}
            e.stop_propagation ()on_remove ()}}
          className=ml - 1 rounded - full p - 0.5 hover:bg - background / 20";
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
:src_backup/components/ui/clickable-badge.tsx
    </div>);

}
:src_backup/components/ui/clickable-badge.tsx
=======
    </div>);

}
<<<<<<< HEAD
;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

}
origin/cursor/automate-test-improve-and-merge-code-2533
    </div>)}}
<<<<<<< HEAD
;
=======
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
