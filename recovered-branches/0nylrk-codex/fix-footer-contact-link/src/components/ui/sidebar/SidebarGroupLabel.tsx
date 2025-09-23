
import { cn } from "@/lib/utils";

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
=======
export function SidebarGroupLabel({ classNamechildren...props }: SidebarGroupLabelProps) {
  return (
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"className)} 
      {...props}
    >
      {children}
    </div>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
