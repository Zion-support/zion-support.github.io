import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useSidebar } from "./sidebar-context";
import { cn } from "@/lib/utils";
interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
<<<<<<< HEAD
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar(),

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}>{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
=======
export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) { const { open, toggleSidebar  } = useSidebar()
      >
      {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      <span className='sr-only'>Toggle Sidebar</span>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    </Button>
  )
}
}