<<<<<<< HEAD
import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
=======
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
=======
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


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn('px-3 py-2', className)}        {...props}
      >;
        {title && (;
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
            onClick={() => setExpanded(!expanded)}          >;
            <div className='flex items-center gap-2'>;
              {icon}
              <span>{title}</span>;
            </div>;
            {showChevron && (;
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform'
                  expanded ? 'rotate-0' : '-rotate-90'
                )}              />;
            )}
          </button>;
        )}
<<<<<<< HEAD
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>
      </div>
    )
=======
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>;
      </div>;
    );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
)
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }

<<<<<<< HEAD
=======
SidebarGroup && SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
