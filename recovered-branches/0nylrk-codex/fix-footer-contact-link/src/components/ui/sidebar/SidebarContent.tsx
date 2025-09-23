
import { cn } from "@/lib/utils";

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
=======
export function SidebarContent({ classNamechildren...props }: SidebarContentProps) {
  return (
    <div className={cn("flex-1 px-2 py-4"className)} {...props}>
      {children}
    </div>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
