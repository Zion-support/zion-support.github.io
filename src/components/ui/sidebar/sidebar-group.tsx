<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
=======
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
>>>>>>> interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>>   title?: string;
  icon?: React && React.ReactNode;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  defaultExpanded?: boolean;
  showChevron?: boolean

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn('px-3 py-2', className)}        {...props}
      >
        {title && (
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
            onClick={() => setExpanded(!expanded)}          >
            <div className='flex items-center gap-2'>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

              {icon}
=======
>>>>>>>               {icon}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown
<<<<<<< HEAD

            )}
          </button>
        )}

        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
=======
                className={cn(
                  'h-4 w-4 transition-transform'
                  expanded ? 'rotate-0' : '-rotate-90'
                )}              />
>>>>>>>             )}
          </button>
        )}
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }

ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown
<<<<<<< HEAD
<<<<<<< HEAD


                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                className={cn(
                  'h-4 w-4 transition-transform'
                  expanded ? 'rotate-0' : '-rotate-90'
                )}              />
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
          </button>
        )}
<<<<<<< HEAD

        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>;
      </div>;
    );

=======
<<<<<<< HEAD
=======
            )}
          </button>
        )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>
      </div>
    )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
)
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }

<<<<<<< HEAD
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
>>>>>>> SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}

>>>>>>>         <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </div>
    )
  }
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    )
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
