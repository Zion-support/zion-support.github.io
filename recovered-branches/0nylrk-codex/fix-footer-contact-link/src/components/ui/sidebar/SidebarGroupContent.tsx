
import { cn } from "@/lib/utils";

interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
=======
export function SidebarGroupContent({ classNamechildren...props }: SidebarGroupContentProps) {
  return (
    <div className={cn("space-y-1"className)} {...props}>
      {children}
    </div>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
