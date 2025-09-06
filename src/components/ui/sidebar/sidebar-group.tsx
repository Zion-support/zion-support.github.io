<<<<<<< HEAD
import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
=======
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean
<<<<<<< HEAD
}

const SidebarGroup = null;
=======
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
<<<<<<< HEAD
    const [expanded, setExpanded] = React.useState(defaultExpanded)
=======
    const [expanded, setExpanded] = React.useState(defaultExpanded);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn('px-3 py-2', className)}        {...props}
      >
        {title && (
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
            onClick={() => setExpanded(!expanded)}          >
            <div className='flex items-center gap-2'>
              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform'
                  expanded ? 'rotate-0' : '-rotate-90'
                )}              />
            )}
          </button>
        )}
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>
      </div>
    )
  }
<<<<<<< HEAD
)
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
);

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
