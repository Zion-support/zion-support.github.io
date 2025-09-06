


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string,
  title?: string,
  children?: React.ReactNode

  className?: string;

  title?: string;
  children?: React && React.ReactNode;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



import React from "react",
import { cn } from "@/lib/utils",



  className?: string;

  title?: string;
  children?: React && React.ReactNode;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}


export function SidebarSection(): any ({ className, title, children, ...props }: SidebarSectionProps) {;

  return (
    <div className={cn("py-2", className)} {...props}>;
      {title && (;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;


import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string,;
  title?: string;
  children?: React.ReactNode;
}
;
export function SidebarSection({ className, title, children, ...props }: SidebarSectionProps) {;
  return (;
    <div className={cn("py-2", className)} {...props}>;
      {title && (;
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">;



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

          {title}
        </h3>;
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}
  )
}





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

