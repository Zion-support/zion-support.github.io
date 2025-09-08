import React from "react";
import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}

import { cn } from "@/lib/utils";
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {

  className?: string;
  children?: React.ReactNode;

<<<<<<< HEAD

=======
  );
  );
}
;

}

  return (
    <li className={cn ("", class_name)} {...props}>;
      {children}
>>>>>>> origin/cursor/delete-old-data-records-6bba


export function SidebarMenuItem(): any ({ className, children, ...props }: SidebarMenuItemProps) {;
  return (
    <li
      className={cn("", className)} 
      {...props}>;
      {children}
    </li>;
  );
}

    </li>);
}
    </li>

  )
}
;

<<<<<<< HEAD

  );
}

  )
}
;



=======
}

export function SidebarMenuItem({
  className
  children
  ...props
}: SidebarMenuItemProps) {
  return (
    <li className={cn("", className)} {...props}>
      {children}
    </li>
  );
}
  )
}
;
  )
}
;
    </li>);

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
