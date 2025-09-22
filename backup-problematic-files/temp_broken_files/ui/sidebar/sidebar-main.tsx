
import * as React from "react";
import type { CSSProperties } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useSidebar } from "./sidebar-context";
import type { SafeRef } from "../sidebar.types";
;
export interface SidebarProps extends React.ComponentProps<"div"> {;
  side?:"left" | "right";
  variant?:"sidebar" | "floating" | "inset";
  collapsible?:"offcanvas" | "icon" | "none";
}
;
export const Sidebar = React.forwardRef<HTMLDivElement SidebarProps>((props, ref) => {;
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
;
  if (props.collapsible === "none") {;
    return (;
      <div;
        className={cn(;
          "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",;
          props.className;
        )}
        ref={ref}
        {...props}
      >;
        {props.children}
      </div>;
    );
  }

        >;
          {props.children}
        </div>;
      </div>;
