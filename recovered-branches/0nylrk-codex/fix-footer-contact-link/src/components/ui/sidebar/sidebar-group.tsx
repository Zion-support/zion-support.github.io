<<<<<<< HEAD
<<<<<<< HEAD
import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",  title?: string;
=======
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  icon?: React && React.ReactNode;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  defaultExpanded?: boolean;
  showChevron?: boolean;
}
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { forward_ref } from './react';'
import { ChevronDown  } from './lucide-react';'
import { cn  } from '@/lib / utils';'
import { SafeRef  } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {}
  title?: string;
  icon?: React.ReactNode;
  default_expanded?: boolean;
  show_chevron?: boolean;
}
const SidebarGroup = forward_ref < HTMLDivElement, SidebarGroupProps>(
  (
{}
      title,
      icon,
      default_expanded = true,
      show_chevron = true,
      class_name,
      children,
      ...props;
    },
    ref,
) => {}
    const [expanded, set_expanded] = React.useState (default_expanded);
;
    return (
      <div;
ref={ref as SafeRef < HTMLDivElement>}"
        className={cn ("px - 3 py - 2", class_name)}

const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}

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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>

SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
),;
SidebarGroup.displayName = "SidebarGroup",;
);

SidebarGroup && SidebarGroup.displayName = "SidebarGroup";        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
        {...props}
      >;
            )}
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

export { SidebarGroup };

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
SidebarGroup.displayName = "SidebarGroup";
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export { SidebarGroup };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
