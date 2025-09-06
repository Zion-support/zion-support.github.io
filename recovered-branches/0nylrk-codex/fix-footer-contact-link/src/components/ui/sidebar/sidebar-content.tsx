import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { SafeRef } from '../sidebar.types';
}

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>((props, ref) => {
  
    />
  );
});
SidebarInput.displayName = 'SidebarInput';
}

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>((props, ref) => {
  
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar='header'
      className={cn('flex flex-col gap-2 p-2', props.className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = 'SidebarHeader';
}

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>((props, ref) => {
  
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar='footer'
      className={cn('flex flex-col gap-2 p-2', props.className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = 'SidebarFooter';
}

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
>((props, ref) => {
  
    />
  );
});
SidebarSeparator.displayName = 'SidebarSeparator';
}

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>((props, ref) => {
  
    />
  );
});
SidebarContent.displayName = 'SidebarContent';
}

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>((props, ref) => {
  
    />
  );
});
SidebarGroup.displayName = 'SidebarGroup';
