<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
<<<<<<< HEAD
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",  title?: string;
=======
import React, { forwardRef } from "react";"
import { ChevronDown } from "lucide-react";"
import { cn } from "@/lib/utils";"
import { SafeRef } from "@/types/ref-types";
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
  title?: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  icon?: React && React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean;
}
<<<<<<< HEAD

const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  (
    {
      title,
      icon,
      defaultExpanded = true,
      showChevron = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [expanded, setExpanded] = React.useState(defaultExpanded);

const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



import React, { forward_ref } from './react';'
import { ChevronDown  } from './lucide-react';'
import { cn  } from '@/lib / utils';'
import { SafeRef  } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {}
=======


import React, { forward_ref } from './react';
import { ChevronDown  } from './lucide-react';
import { cn  } from '@/lib / utils';
import { SafeRef  } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title?: string;
  icon?: React.ReactNode;
  default_expanded?: boolean;
  show_chevron?: boolean;
}
const SidebarGroup = forward_ref < HTMLDivElement, SidebarGroupProps>(
  (
<<<<<<< HEAD
    {}
=======
    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      title,
      icon,
      default_expanded = true,
      show_chevron = true,
      class_name,
      children,
      ...props;
    },
    ref,
<<<<<<< HEAD
  ) => {}
=======
  ) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const [expanded, set_expanded] = React.useState (default_expanded);
;
    return (
      <div;
<<<<<<< HEAD
        ref={ref as SafeRef < HTMLDivElement>}"
=======
        ref={ref as SafeRef < HTMLDivElement>}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        className={cn ("px - 3 py - 2", class_name)}

const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
=======



interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean;
}

"
import React, { forwardRef } from "react",;"
import { ChevronDown } from "lucide-react",;"
import { cn } from "@/lib/utils",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
                  "h-4 w-4 transition-transform",
                  expanded ? "rotate-0" : "-rotate-90",
                )}
              />
            )}
          </button>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>

SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
<<<<<<< HEAD
),;
SidebarGroup.displayName = "SidebarGroup",;
=======
=======
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    );
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
);

<<<<<<< HEAD
SidebarGroup && SidebarGroup.displayName = "SidebarGroup";        ref={ref as SafeRef<HTMLDivElement>}
=======
        ref={ref as SafeRef<HTMLDivElement>}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
SidebarGroup && SidebarGroup.displayName = "SidebarGroup";

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        className={cn("px-3 py-2", className)}
        {...props}
      >;
            )}
          </button>;
        )}
<<<<<<< HEAD
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



export { SidebarGroup };
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ),;
  }
),;
;"
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup },; interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
  title?: string;
icon?: React.ReactNode;
defaultExpanded?: boolean;
showChevron?: boolean;
}const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps> ( ({}
  title, icon, defaultExpanded = true, showChevron = true, className, children, ...props;
}, ref) => {}
  const [expanded, setExpanded] = React.useState (defaultExpanded);
ref as SafeRef<HTMLDivElement> 
}</div> {}
  showChevron && (<ChevronDown />) 
}</button>) 
}</div>) 
});
<<<<<<< HEAD
SidebarGroup.displayName = "SidebarGroup";
=======

"
SidebarGroup.displayName = "SidebarGroup";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },";
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
);
"
SidebarGroup && SidebarGroup.displayName = "SidebarGroup";

    )
  }
),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export { SidebarGroup };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export { SidebarGroup };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export { SidebarGroup };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


export { SidebarGroup };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
