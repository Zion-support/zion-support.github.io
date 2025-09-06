<<<<<<< HEAD
import * as React from 'react';
import { PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from './sidebar-context';

export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>((props, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar='trigger'
      variant='ghost'
      size='icon'
      className={cn('h-7 w-7', props.className)}
      onClick={event => {
        props.onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = 'SidebarTrigger';
=======
 export const SidebarTrigger = React.forwardRef< React.ElementRef<typeof Button>;
React.ComponentProps<typeof Button> > ( (props, ref) => {;
  const {;
  toggleSidebar ;
}= useSidebar () return (<Button props.onClick?. (event) toggleSidebar () ;
}
}{;
  ...props ;
}> <PanelLeft /> <span className="sr-only" >Toggle Sidebar</span> </Button>) ";
}) SidebarTrigger.displayName = "SidebarTrigger" "
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
