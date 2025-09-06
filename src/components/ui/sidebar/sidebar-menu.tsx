import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(
  (
    { icon, active, children, href, target, badge, className, ...props },
    ref
  ) => {
    if (href) {
      
        >
          <div className='flex items-center gap-2'>
            {icon && <span className='text-muted-foreground'>{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      );
    }

    
      >
        <div className='flex items-center gap-2'>
          {icon && <span className='text-muted-foreground'>{icon}</span>}
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>
    );
  }
);

SidebarMenuItem.displayName = 'SidebarMenuItem';

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <div className='space-y-1' {...props}>
      <div className='rounded-md px-3 py-2 text-sm font-medium'>{title}</div>
      <div className='pl-2'>{children}</div>
    </div>
  );
};
"