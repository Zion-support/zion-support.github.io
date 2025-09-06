
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
  active?: boolean
}
export function SidebarItem({ className, children, active, ...props }: SidebarItemProps) {
  return (
    <div
<<<<<<< HEAD
      className;
=======
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md";
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
        className
      )}
      {...props}
=======
  active?: boolean;
}

export function SidebarItem({
  className,
  children,
  active,
  ...props
}: SidebarItemProps) {
  
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    >
      {children}
    </div>
  )
}