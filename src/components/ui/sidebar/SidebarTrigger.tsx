

<<<<<<< HEAD
=======
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


;
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
