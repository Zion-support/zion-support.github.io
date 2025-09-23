
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
=======
export function Sidebar({ classNamechildren...props }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
