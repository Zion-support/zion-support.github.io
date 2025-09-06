<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import { Button } from '@/components/ui/button';

    </Button>;
  );
};
};


<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Button } from "@/components/ui/button",
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context",
import { cn } from "@/lib/utils",
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),

  return (
    <Button
      variant="ghost"
      size="icon"
import React from "react",;
import { Button } from "@/components/ui/button",;
=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar()
      >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>

    </Button>
  )
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
};
};

}
<<<<<<< HEAD

=======
;



export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar(),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

;
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
