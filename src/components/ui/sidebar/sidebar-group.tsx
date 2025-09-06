import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean;

const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(

        {...props}
      >
        {title && (
          <button

          >
            <div className='flex items-center gap-2'>
              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown

              />
            )}
          </button>
        )}
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>
      </div>
    );
  }
);

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };