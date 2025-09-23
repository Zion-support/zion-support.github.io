
import { cn } from "@/lib/utils";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
=======
export function SidebarMenuItem({ classNamechildren...props }: SidebarMenuItemProps) {
  return (
    <li 
      className={cn(""className)} 
      {...props}
    >
      {children}
    </li>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
