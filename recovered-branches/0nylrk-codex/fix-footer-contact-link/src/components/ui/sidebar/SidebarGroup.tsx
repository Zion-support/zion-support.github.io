


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  children?: React.ReactNode



  className?: string;
  children?: React && React.ReactNode;




}


export function SidebarGroup(): any ({ className, children, ...props }: SidebarGroupProps) {;

  return (

    <div className={cn("mb-4", className)} {...props}>






import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React.ReactNode;
}
;
export function SidebarGroup({ className, children, ...props }: SidebarGroupProps) {;
  return (;

    <div className={cn("mb-4", className)} {...props}>;
      {children}

    </div>;
  );
}



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

