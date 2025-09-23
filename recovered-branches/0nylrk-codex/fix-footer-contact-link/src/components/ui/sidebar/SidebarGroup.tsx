
import { cn } from "@/lib/utils";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
=======
export function SidebarGroup({ classNamechildren...props }: SidebarGroupProps) {
  return (
    <div className={cn("mb-4"className)} {...props}>
      {children}
    </div>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
