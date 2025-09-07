<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import React from 'react';
import { Button  } from '@/components/ui/button';
    </Button>;
<<<<<<< HEAD
  )}}import React from "react",import { Button } from "@/components/ui/button",import { Menu, X  } from 'lucide-react';
import { useSidebar } from "./sidebar-context",import { cn } from "@/lib/utils",interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement>  {className?: string;
}export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar(),export function SidebarTrigger() {const { open, toggleSidebar } = useSidebar(),return (<Button;
      variant="ghost";
      size="icon";import { useSidebar  } from './sidebar-context';
import { cn  } from '@/lib/utils';
interface SidebarTriggerProps extends React && React.HTMLAttributes<HTMLButtonElement>  {className?: string;export function SidebarTrigger(): any ({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  }  = useSidebar(),>;
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>;
    </Button>;
  )}}}className={cn("", className)}
=======
  );
};
};



export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

  return (
    <Button
      variant="ghost"
      size="icon"
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Menu, X } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';
interface SidebarTriggerProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;

export function SidebarTrigger(): any ({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar(),;

      >;
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>;
    </Button>;
  );

      className={cn("", className)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      onClick={toggleSidebar}
      {...props}
    >;
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
<<<<<<< HEAD
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  )}
}
=======
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
