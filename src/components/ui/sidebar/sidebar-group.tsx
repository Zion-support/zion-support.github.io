
<<<<<<< HEAD
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
import React, { forwardRef } from &quot;react&quot;;
import { ChevronDown } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { SafeRef } from &quot;@/types/ref-types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
=======
import React, { forwardRef } from "react",;
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {;
  title?: string,;
  icon?: React.ReactNode,;
  defaultExpanded?: boolean,;
  showChevron?: boolean;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React.useState(defaultExpanded),;
    return (;
      <div;
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn(&quot;px-3 py-2&quot;, className)}
        {...props}
<<<<<<< HEAD
      >
        {title && (
          <button
            type=&quot;button&quot;
            className=&quot;flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30&quot;
            onClick={() => setExpanded(!expanded)}
          >
            <div className=&quot;flex items-center gap-2&quot;>
              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown
                className={cn(&quot;h-4 w-4 transition-transform&quot;, expanded ? &quot;rotate-0&quot; : &quot;-rotate-90&quot;)}
              />
=======
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
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          </button>;
        )}
<<<<<<< HEAD
        <div className={cn(&quot;mt-1&quot;, !expanded && &quot;hidden&quot;)}>{children}</div>
      </div>
    )
  }
),

<<<<<<< HEAD
SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
=======
SidebarGroup.displayName = &quot;SidebarGroup&quot;;
export { SidebarGroup };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
),;
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup };
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
