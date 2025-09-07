<<<<<<< HEAD
=======
import React, { forwardRef } from "react";
<<<<<<< HEAD
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";

=======
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
<<<<<<< HEAD
=======
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  title?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  icon?: React && React.ReactNode;

  defaultExpanded?: boolean;
  showChevron?: boolean;
}
<<<<<<< HEAD

import React, { forward_ref } from './react';'
import { ChevronDown  } from './lucide-react';'
import { cn  } from '@/lib / utils';'
=======
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);
import React, { forward_ref } from './react';
import { ChevronDown  } from './lucide-react';
import { cn  } from '@/lib / utils';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { SafeRef  } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {}

  title?: string;
  icon?: React.ReactNode;
  default_expanded?: boolean;
  show_chevron?: boolean;
}
const SidebarGroup = forward_ref < HTMLDivElement, SidebarGroupProps>(
  (

      title,
      icon,
      default_expanded = true,
      show_chevron = true,
      class_name,
      children,
      ...props;
    },
    ref,

    const [expanded, set_expanded] = React.useState (default_expanded);
;
    return (
      <div;

        className={cn ("px - 3 py - 2", class_name)}

<<<<<<< HEAD
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);

=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
<<<<<<< HEAD

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
}

<<<<<<< HEAD
}

<<<<<<< HEAD
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
<<<<<<< HEAD
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {
    const [expanded, setExpanded] = React.useState($2);
    return (
      <div
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
=======
  (
    {
      }
      title,
icon
      defaultExpanded = true,
showChevron = true,
className
=======
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  (
    {
      title
      icon
      defaultExpanded = true
      showChevron = true
      className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      children
      ...props
    }
    ref
  ) => {
<<<<<<< HEAD
    }
    const [expanded, setExpanded] = React.useState(defaultExpanded);
return (;
      <div
}
import { ChevronDown } from "lucide-react";"
import { cn } from "@/lib/utils",;"
import { SafeRef } from "@/types/ref-types",;"
=======
=======
    const [expanded, setExpanded] = React.useState(defaultExpanded);
    return (
      <div
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;

import { SafeRef } from "@/types/ref-types",;
>>>>>>> origin/chore/fix-lint-and-merge
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
=======
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
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    )
  }
),

SidebarGroup.displayName = $2;
export { SidebarGroup },
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
<<<<<<< HEAD
  });
=======
  }
<<<<<<< HEAD
),;
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup };
=======
);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        className={cn("px-3 py-2", className)}
        {...props}
      >;
            )}
          </button>;
        )}

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

SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },";
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  });
"
SidebarGroup && SidebarGroup.displayName = "SidebarGroup";

    )
  }
<<<<<<< HEAD
),
=======
),



export { SidebarGroup };
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
