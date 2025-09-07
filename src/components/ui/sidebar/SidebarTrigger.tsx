<<<<<<< HEAD

import React from "react";
import { Button } from "@/components/ui/button";
=======
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
>>>>>>> merged-prs-20250907-203621
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
<<<<<<< HEAD
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import { Button } from '@/components/ui/button';

    </Button>;
  );
};
};


export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar()
      >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>

    </Button>
  )
}
}
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
};
};

}
<<<<<<< HEAD
;



export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),
>>>>>>> merged-prs-20250907-203621

  return (
    <Button
      variant="ghost"
      size="icon"
<<<<<<< HEAD
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
=======
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Menu, X } from 'lucide-react';
import { useSidebar } from "./sidebar-context",;
import { cn } from "@/lib/utils",;
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {;
  className?: string;
}
;
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {;
  const { open, toggleSidebar } = useSidebar();
  return (;
    <Button;
      variant="ghost";
      size="icon";
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >;
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>;
    </Button>;
  );
}
;

;
=======


;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
