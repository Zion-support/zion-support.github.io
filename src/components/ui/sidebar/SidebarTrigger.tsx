<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();

  
    >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======

import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
}


export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar(),


  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
