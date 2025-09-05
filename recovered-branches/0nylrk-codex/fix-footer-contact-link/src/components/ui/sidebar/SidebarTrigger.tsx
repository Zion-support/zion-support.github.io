
import React from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Menu, X } from &quot;lucide-react&quot;;
import { useSidebar } from &quot;./sidebar-context&quot;;
import { cn } from &quot;@/lib/utils&quot;;

interface SidebarTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function SidebarTrigger({ className, ...props }: SidebarTriggerProps) {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Button
      variant=&quot;ghost&quot;
      size=&quot;icon&quot;
      className={cn("", className)}
      onClick={toggleSidebar}
      {...props}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
