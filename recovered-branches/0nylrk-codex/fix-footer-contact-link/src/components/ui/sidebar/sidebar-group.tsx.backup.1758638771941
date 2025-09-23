
<<<<<<< HEAD
import React{ forwardRef } from "react";
=======
import React, { forwardRef } from "react";
>>>>>>> origin/auto/autonomy-17186719616
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean;
}

<<<<<<< HEAD
const SidebarGroup = forwardRef<HTMLDivElementSidebarGroupProps>(
  ({ titleicondefaultExpanded = trueshowChevron = trueclassNamechildren...props }ref) => {
    const [expandedsetExpanded] = React.useState(defaultExpanded);
=======
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {
    const [expanded, setExpanded] = React.useState(defaultExpanded);
>>>>>>> origin/auto/autonomy-17186719616

    return (
      <div
        ref={ref as SafeRef<HTMLDivElement>}
<<<<<<< HEAD
        className={cn("px-3 py-2"className)}
=======
        className={cn("px-3 py-2", className)}
>>>>>>> origin/auto/autonomy-17186719616
        {...props}
      >
        {title && (
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex items-center gap-2">
              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown
<<<<<<< HEAD
                className={cn("h-4 w-4 transition-transform"expanded ? "rotate-0" : "-rotate-90")}
=======
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
>>>>>>> origin/auto/autonomy-17186719616
              />
            )}
          </button>
        )}
<<<<<<< HEAD
        <div className={cn("mt-1"!expanded && "hidden")}>{children}</div>
=======
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
>>>>>>> origin/auto/autonomy-17186719616
      </div>
    );
  }
);

SidebarGroup.displayName = "SidebarGroup";
export { SidebarGroup };
