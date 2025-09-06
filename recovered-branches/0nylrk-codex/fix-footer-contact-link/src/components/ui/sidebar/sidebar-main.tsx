import * as React from 'react';
import type { CSSProperties } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useSidebar } from './sidebar-context';
import type { SafeRef } from '../sidebar.types';

export interface SidebarProps extends React.ComponentProps<'div'> {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (props, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (props.collapsible === 'none') {
      
        >
          {props.children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar='sidebar'
            data-mobile='true'
            className='w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden'
            style={
              {
                '--sidebar-width': '18rem',
              } as CSSProperties
            }
            side={props.side}
          >
            <div className='flex h-full w-full flex-col'>{props.children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
            'group-data-[collapsible=offcanvas]:w-0',
            'group-data-[side=right]:rotate-180',
            props.variant === 'floating' || props.variant === 'inset'
              ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)))]'
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
          )}
        />
        <div
          className={cn(
            'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
            props.side === 'left'
              ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
              : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
            // Adjust the padding for floating and inset variants.
            props.variant === 'floating' || props.variant === 'inset'
              ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
            props.className
          )}
          {...props}
        >
          <div
            data-sidebar='sidebar'
            className='flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow'
          >
            {props.children}
          </div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = 'Sidebar';
}

export const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>((props, ref) => {
  const { toggleSidebar } = useSidebar();

  
    />
  );
});
SidebarRail.displayName = 'SidebarRail';
}

export const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'main'>
>((props, ref) => {
  
      ref={ref as SafeRef<HTMLDivElement>}
      className={cn(
        'relative flex min-h-svh flex-1 flex-col bg-background',
        'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
        props.className
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = 'SidebarInset';
