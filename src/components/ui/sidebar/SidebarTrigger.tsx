import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
=======
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;


<<<<<<< HEAD
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar(),


  
=======
  return (
    <Button
      variant="ghost"
      size="icon"
      className = {cn("", className),}
      onClick = {toggleSidebar,}
      {...props}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
};
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
