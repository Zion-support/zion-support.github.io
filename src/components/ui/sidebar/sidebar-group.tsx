<<<<<<< HEAD
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
=======
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  title?: string;
  icon?: React && React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean
<<<<<<< HEAD

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
import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from '@/lib/utils'
import { SafeRef } from '@/types/ref-types'

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn('px-3 py-2', className)}        {...props}
      >;
        {title && (;
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
<<<<<<< HEAD
<<<<<<< HEAD
=======

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            onClick={() => setExpanded(!expanded)}          >;
            <div className='flex items-center gap-2'>;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {icon}
<<<<<<< HEAD
              <span>{title}</span>;
            </div>;
            {showChevron && (;
              <ChevronDown
<<<<<<< HEAD


                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


=======
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform'
                  expanded ? 'rotate-0' : '-rotate-90'
                )}              />
          </button>
        )}
<<<<<<< HEAD
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }

ursor/fix-website-loading-errors-and-merge-6662
              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform'
                  expanded ? 'rotate-0' : '-rotate-90'
                )}              />
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            )}
          </button>;
        )}
<<<<<<< HEAD

        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>;
      </div>;
    );

=======
            )}
          </button>
        )}
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>
      </div>
    )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>
      </div>
    )
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
)
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }

<<<<<<< HEAD

SidebarGroup && SidebarGroup.displayName = 'SidebarGroup';

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
<<<<<<< HEAD
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
=======
SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}

=======
            {showChevron && (;
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />
            )}
          </button>;
        )}
export { SidebarGroup }

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}
            )}
          </button>
        )}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
export { SidebarGroup };
=======
export { SidebarGroup };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export { SidebarGroup };
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
