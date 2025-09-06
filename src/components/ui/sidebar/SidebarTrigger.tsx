import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();

  
    >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
