<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
<<<<<<< HEAD

import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",

>>>>>>> origin/cursor/delete-old-data-records-6bba


interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
<<<<<<< HEAD
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


import React, { forwardRef } from "react",;

import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;

import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {;
    if (href) {;

import { SafeRef } from '@/types / ref - types';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {}

interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {

  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            className
          )}

        >
          <div className="flex items-center gap-2">

            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={cn(;"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;"

            active && "bg-accent font-medium text-accent-foreground",;
            className;
          )}
        >;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba



          <div className="flex items-center gap-2">;

            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          className={cn (
            "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
            active && "bg - accent font - medium text - accent - foreground",
            class_name)}
        >;

            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>);


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    return (
      <button;
        ref={ref}

<<<<<<< HEAD

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"

          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}>;
      ),;
    }
;
    return (;
      <button;
        ref={ref}
        type="button";
        className={cn(;
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
          active && "bg-accent font-medium text-accent-foreground",;
          className;
        )}
        {...props}

      >;
        <div className="flex items-center gap-2">;
=======

"
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent","
          active && "bg-accent font-medium text-accent-foreground",

    }

    return (
      <button;
        ref={ref}
          className;

        )}
>>>>>>> origin/cursor/delete-old-data-records-6bba

          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>;

<<<<<<< HEAD


          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
          active && "bg-accent font-medium text-accent-foreground"
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>
    )
  }



=======

    );
  }
"
SidebarMenuItem.displayName = "SidebarMenuItem",

),
),


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode

}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {}
  return ("
    <div className="space-y-1" {...props}>"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>"
      <div className="pl-2">{children}</div>
    </div>
  )
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export { SidebarMenuItem, SidebarMenuGroup },
),;
SidebarMenuItem.displayName = "SidebarMenuItem",;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;

SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

  title: string,;
  children: React && React.ReactNode;
}
<<<<<<< HEAD

=======
interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

  title: string,;
  children: React && React.ReactNode;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        className={cn (
          "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
          active && "bg - accent font - medium text - accent - foreground",
          class_name)}
        {...props}
      >;

          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>);
  });
;"
SidebarMenuItem.display_name = "SidebarMenuItem";
;
interface SidebarMenuGroupProps extends React.HTMLAttributes < HTMLDivElement> {}
  title: string,
  children: React.ReactNode;
}

    </div>);
}
;
<<<<<<< HEAD

export { SidebarMenuItem, SidebarMenuGroup }
;

},


export { SidebarMenuItem, SidebarMenuGroup };




=======

export { SidebarMenuItem, SidebarMenuGroup };
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
