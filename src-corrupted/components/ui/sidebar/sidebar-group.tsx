import React, { forwardRef } from 'react',
import { ChevronDown } from 'lucide-react',
import { cn } from '@/lib/utils',
import { SafeRef } from '@/types/ref-types',
import React, { forward_ref } from 'react',
import { cn } from '@/lib / utils',
import { SafeRef } from '@/types / ref - types',
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {,
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {,
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean,
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn('px-3 py-2', className)}        {...props}
      >,
        {title && (,
          <button,
            type='button',
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover: bg-secondary/30',
            onClick={() => setExpanded(!expanded)}          >,
            <div className='flex items-center gap-2'>,
              {icon}
              <span>{title}</span>,
            </div>,
            {showChevron && (,
              <ChevronDown,
                className={cn(,
                  'h-4 w-4 transition-transform',
                  expanded ? 'rotate-0' : '-rotate-90')}              />,
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />,
            )}
          </button>,
        )}
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>,
      </div>,
    )
  }
),
SidebarGroup.displayName = 'SidebarGroup',
export { SidebarGroup }
,
SidebarGroup && SidebarGroup.displayName = 'SidebarGroup',
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {,
  title?: string,
  icon?: React.ReactNode,
  default_expanded?: boolean,
  show_chevron?: boolean,
const SidebarGroup = forward_ref < HTMLDivElement, SidebarGroupProps>(,
  (,
    {,
      title,
      icon,
      default_expanded = true,
      show_chevron = true,
      class_name,
      children,
      ...props,
    },
    ref) => {,
    const [expanded, set_expanded] = React.useState (default_expanded),
        ref={ref as SafeRef < HTMLDivElement>}
        className={cn ('px - 3 py - 2', class_name)}        {...props}
      >,
        {title && (,
          <button,
            type='button',
            className='flex w - full items - center justify - between rounded - md px - 2 py - 1 text - sm font - medium text - muted - foreground hover: bg - secondary / 30',
            on_click={() => set_expanded (!expanded)}          >,
            <div className='flex items - center gap - 2'>,
              {icon}
              <span>{title}</span>,
            </div>,
            {show_chevron && (,
              <ChevronDown,
                className={cn (,
                  'h - 4 w - 4 transition - transform',
                  expanded ? 'rotate - 0' : '-rotate - 90')}              />)}
          </button>)}
        <div className={cn ('mt - 1', !expanded && 'hidden')}>{children}</div>,
      </div>),
  }
),
SidebarGroup.display_name = 'SidebarGroup',
export { SidebarGroup }
,
SidebarGroup.displayName = 'SidebarGroup',
export { SidebarGroup },
}

}