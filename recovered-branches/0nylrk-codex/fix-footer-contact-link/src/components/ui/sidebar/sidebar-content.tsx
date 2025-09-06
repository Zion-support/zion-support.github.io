<<<<<<< HEAD
=======
import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { SafeRef } from '../sidebar.types';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
>((props, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar=&quot;input&quot;
      className={cn(
        &quot;h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring&quot;
        props.className
      )}
      {...props}
    />
<<<<<<< HEAD
  )
})
SidebarInput.displayName = &quot;SidebarInput&quot;
=======
  );
});
SidebarInput.displayName = 'SidebarInput';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const SidebarHeader = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar=&quot;header&quot;
      className={cn(&quot;flex flex-col gap-2 p-2&quot;, props.className)}
      {...props}
    />
<<<<<<< HEAD
  )
})
SidebarHeader.displayName = &quot;SidebarHeader&quot;
=======
  );
});
SidebarHeader.displayName = 'SidebarHeader';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const SidebarFooter = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar=&quot;footer&quot;
      className={cn(&quot;flex flex-col gap-2 p-2&quot;, props.className)}
      {...props}
    />
<<<<<<< HEAD
  )
})
SidebarFooter.displayName = &quot;SidebarFooter&quot;
=======
  );
});
SidebarFooter.displayName = 'SidebarFooter';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
>((props, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar=&quot;separator&quot;
      className={cn(&quot;mx-2 w-auto bg-sidebar-border&quot;, props.className)}
      {...props}
    />
<<<<<<< HEAD
  )
})
SidebarSeparator.displayName = &quot;SidebarSeparator&quot;
=======
  );
});
SidebarSeparator.displayName = 'SidebarSeparator';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const SidebarContent = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar=&quot;content&quot;
      className={cn(
        &quot;flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden&quot;
        props.className
      )}
      {...props}
    />
<<<<<<< HEAD
  )
})
SidebarContent.displayName = &quot;SidebarContent&quot;
=======
  );
});
SidebarContent.displayName = 'SidebarContent';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const SidebarGroup = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar=&quot;group&quot;
      className={cn(&quot;relative flex w-full min-w-0 flex-col p-2&quot;, props.className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = &quot;SidebarGroup&quot;