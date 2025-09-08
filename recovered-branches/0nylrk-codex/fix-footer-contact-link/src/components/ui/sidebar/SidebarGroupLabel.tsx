import React from "react";
import { cn } from "@/lib/utils";
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarGroupLabel({
  className,
  children,
  ...props
}: SidebarGroupLabelProps) {
  return (
    <div
      className={cn(
        "px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
        className,
      )}
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
      {...props}
    >
      {children}
    </div>
  );
}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import React from "react",;
import { cn } from "@/lib/utils",;
;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export function SidebarGroupLabel({ className, children, ...props } SidebarGroupLabelProps) {;
  return (;
    <div ;
    <div 
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
  )
import React from "react",;
import { cn } from "@/lib/utils",;
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;
  className?: string;
  children?: React && React.ReactNode;

<<<<<<< HEAD

=======
  );

  className?: string;
  children?: React && React.ReactNode;

  );

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

      )}
      {...props}
    >;
      {children}
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function SidebarGroupLabel(): any ({ className, children, ...props }: SidebarGroupLabelProps) {;
  return (
    <div
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} 
      {...props}>;
      {children}
    </div>;

<<<<<<< HEAD
  );

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  );

  );

}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    </div>);
interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {;

    <div ;
    <div;"
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)}"
  )"
import React from "react",;""
import { cn } from "@/lib/utils",;"
      className={cn("px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", className)} ;"
    >;
      {children}
    </div>;
<<<<<<< HEAD

  );
}





=======
  );
}

}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
