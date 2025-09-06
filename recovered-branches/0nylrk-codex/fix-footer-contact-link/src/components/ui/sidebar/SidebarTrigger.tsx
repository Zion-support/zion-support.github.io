<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSidebar } from './sidebar-context';
import { cn } from '@/lib/utils';

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Button
      variant='ghost'
      size='icon'
      className={cn('', className)}
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
  );
}
=======
 interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string 
}export function SidebarTrigger ({
  className, ...props 
}: SidebarTriggerProps) {
  const {
  open, toggleSidebar 
}= useSidebar ();
return (<Button variant="ghost" size="icon" className= {
  cn ("", className) 
}onClick= {
  toggleSidebar 
}{
  ...props 
}open ? <X className="h-4 w-4"/> : <Menu className="h-4 w-4"/> 
}<span className="sr-only">Toggle Sidebar</span> </Button>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
