


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode



  className?: string;
  children?: React && React.ReactNode;




}


export function SidebarGroupContent(): any ({ className, children, ...props }: SidebarGroupContentProps) {;

  return (

    <div className={cn("space-y-1", className)} {...props}>






import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {;
  return (;

    <div className={cn("space-y-1", className)} {...props}>;
      {children}

    </div>;
  );
}



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

