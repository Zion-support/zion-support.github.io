
import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
<<<<<<< HEAD
<<<<<<< HEAD
=======
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  title?: string;
  icon?: React && React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean;
}
<<<<<<< HEAD
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);
=======


const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { forward_ref } from './react';
import { ChevronDown  } from './lucide-react';
import { cn  } from '@/lib / utils';
import { SafeRef  } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  default_expanded?: boolean;
  show_chevron?: boolean;
}
const SidebarGroup = forward_ref < HTMLDivElement, SidebarGroupProps>(
  (
    {
      title,
      icon,
      default_expanded = true,
      show_chevron = true,
      class_name,
      children,
      ...props;
    },
    ref,
  ) => {
    const [expanded, set_expanded] = React.useState (default_expanded);
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div;
        ref={ref as SafeRef < HTMLDivElement>}
        className={cn ("px - 3 py - 2", class_name)}
<<<<<<< HEAD


<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />;
            )}

import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title?:string,;
  icon?:React.ReactNode,;
  defaultExpanded?:boolean,;
  showChevron?:boolean,;
}
;
const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React.useState(defaultExpanded),;
;
    return (;
      <div;
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
        {...props}
      >;
        {title && (;
          <button;
            type="button";
            className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30";
            onClick={() => setExpanded(!expanded)}
          >;
            <div className="flex items-center gap-2">;
              {icon}
              <span>{title}</span>;
            </div>;
            {showChevron && (;
              <ChevronDown;
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" :"-rotate-90")}
              />;            )}
          </button>;
        )}
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
);
SidebarGroup && SidebarGroup.displayName = "SidebarGroup";

        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
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
                className={cn(
                  "h-4 w-4 transition-transform"
                  expanded ? "rotate-0" : "-rotate-90"
                )}
              />
            )}
          </button>
        )}
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";
export { SidebarGroup }

    )
  }
),

    ),;
  }
),;
;
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup },; interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
icon?: React.ReactNode;
defaultExpanded?: boolean;
showChevron?: boolean 
}const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps> ( ({
  title, icon, defaultExpanded = true, showChevron = true, className, children, ...props 
}, ref) => {
  const [expanded, setExpanded] = React.useState (defaultExpanded);
ref as SafeRef<HTMLDivElement> 
}</div> {
  showChevron && (<ChevronDown />) 
}</button>) 
}</div>) 
});
SidebarGroup.displayName = "SidebarGroup";
SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {...props}
      >;

                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />;

            )}
          </button>;
        )}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    );
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
),;
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
);

SidebarGroup && SidebarGroup.displayName = "SidebarGroup";
=======

    )
  }
),



export { SidebarGroup };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        {title && (
          <button;
            type="button";
            className="flex w - full items - center justify - between rounded - md px - 2 py - 1 text - sm font - medium text - muted - foreground hover:bg - secondary / 30";
            on_click={() => set_expanded (!expanded)}
          >;
            <div className="flex items - center gap - 2">;
              {icon}
              <span>{title}</span>;
            </div>;
            {show_chevron && (
              <ChevronDown;
                className={cn (
                  "h - 4 w - 4 transition - transform",
                  expanded ? "rotate - 0" : "-rotate - 90",
                )}
              />)}
          </button>)}
        <div className={cn ("mt - 1", !expanded && "hidden")}>{children}</div>;
      </div>);
  },
);
;
SidebarGroup.display_name = "SidebarGroup";
export { SidebarGroup }
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
