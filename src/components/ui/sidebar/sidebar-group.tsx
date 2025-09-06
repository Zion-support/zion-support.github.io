<<<<<<< HEAD


=======
<<<<<<< HEAD
import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
=======
import { cn } from '@/lib/utils'
import { SafeRef } from '@/types/ref-types'
=======

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  title?: string;
  icon?: React && React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean
<<<<<<< HEAD


const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  (;
    {;
      title,;
      icon,;
      defaultExpanded = true,;
      showChevron = true,;
      className,;
      children,;
      ...props;
    },;
    ref;
  ) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);



=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  (
    {
      title
      icon
      defaultExpanded = true
      showChevron = true
      className
      children
      ...props
    }
    ref
  ) => {
    const [expanded, setExpanded] = React.useState(defaultExpanded)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn('px-3 py-2', className)}        {...props}
      >;
        {title && (;
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
            onClick={() => setExpanded(!expanded)}          >;
            <div className='flex items-center gap-2'>;
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { forwardRef } from "react",;
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title?: string,;
  icon?: React.ReactNode,;
  defaultExpanded?: boolean,;
  showChevron?: boolean;
}
;
const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React.useState(defaultExpanded),;
    return (;
      <div;
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
        {...props}
      >
        {title && (
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex items-center gap-2">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
              {icon}
              <span>{title}</span>;
            </div>;
            {showChevron && (;
              <ChevronDown


                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
            )}
          </button>;
        )}

        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>;
      </div>;
    );

  }
)
<<<<<<< HEAD
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }


SidebarGroup && SidebarGroup.displayName = 'SidebarGroup';
=======
<<<<<<< HEAD
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

=======
import React, { forward_ref } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib / utils';
import { SafeRef } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  default_expanded?: boolean;
  show_chevron?: boolean;
const SidebarGroup = forward_ref < HTMLDivElement, SidebarGroupProps>(
  (
    {
      title,
      icon,
      default_expanded = true,
      show_chevron = true,
      class_name,
      children,
      ...props;
    },
    ref) => {
    const [expanded, set_expanded] = React.useState (default_expanded);
        ref={ref as SafeRef < HTMLDivElement>}
        className={cn ('px - 3 py - 2', class_name)}        {...props}
      >;
        {title && (
          <button;
            type='button';
            className='flex w - full items - center justify - between rounded - md px - 2 py - 1 text - sm font - medium text - muted - foreground hover:bg - secondary / 30';
            on_click={() => set_expanded (!expanded)}          >;
            <div className='flex items - center gap - 2'>;
              {icon}
              <span>{title}</span>;
            </div>;
            {show_chevron && (
              <ChevronDown;
                className={cn (
                  'h - 4 w - 4 transition - transform',
                  expanded ? 'rotate - 0' : '-rotate - 90')}              />)}
          </button>)}
        <div className={cn ('mt - 1', !expanded && 'hidden')}>{children}</div>;
      </div>);
  }
);
SidebarGroup.display_name = 'SidebarGroup';
export { SidebarGroup }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    )
  }
),

SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
),;
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup };
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
