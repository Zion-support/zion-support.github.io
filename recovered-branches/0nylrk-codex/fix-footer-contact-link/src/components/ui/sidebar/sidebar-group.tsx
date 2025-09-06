




import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";






const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    return (
      <div;
        ref={ref as SafeRef < HTMLDivElement>}
        className={cn ("px - 3 py - 2", class_name)}






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean


}

const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  (
    {
      title
      icon
      defaultExpanded = true
      showChevron = true
      className
      children
      ...props
    }
    ref
  ) => {
    const [expanded, setExpanded] = React.useState(defaultExpanded);
    return (
      <div
import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title?: string,;
  icon?: React.ReactNode,;
  defaultExpanded?: boolean,;
  showChevron?: boolean;
}
;
const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React.useState(defaultExpanded),;
    return (;
      <div;






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
        {...props}
      >;

                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />;

            )}
          </button>;
        )}

        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>

    );
  }

SidebarGroup.displayName = "SidebarGroup";
SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },

        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }




);

SidebarGroup && SidebarGroup.displayName = "SidebarGroup";


    )
  }
),





export { SidebarGroup };

