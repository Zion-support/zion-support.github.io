
<<<<<<< HEAD
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
import React, { forwardRef } from &quot;react&quot;;
import { ChevronDown } from &quot;lucide-react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { SafeRef } from &quot;@/types/ref-types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
}

const SidebarGroup = forwardRef<HTMLDivElement SidebarGroupProps>(
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {
    const [expanded, setExpanded] = React.useState(defaultExpanded),
=======
import React, {_forwardRef} from "react";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {_title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean;}

const _SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(_({_title, _icon, _defaultExpanded = true, _showChevron = true, _className, _children, _...props}, _ref) => {_const [expanded, _setExpanded] = React.useState(defaultExpanded);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return (
      <div
        ref={ref as SafeRef<HTMLDivElement>}
<<<<<<< HEAD
        className={cn(&quot;px-3 py-2&quot;, className)}
        {...props}
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
=======
        className={_cn("px-3 py-2", _className)}
        {_...props}
      >
        {_title && (_<button
            type="button"
            className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex items-center gap-2">
              {_icon}
              <span>{_title}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            {_showChevron && (
              <ChevronDown
<<<<<<< HEAD
                className={cn(&quot;h-4 w-4 transition-transform&quot;, expanded ? &quot;rotate-0&quot; : &quot;-rotate-90&quot;)}
=======
                className={cn("h-4 w-4 transition-transform", _expanded ? "rotate-0" : "-rotate-90")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            )}
          </button>
        )}
<<<<<<< HEAD
        <div className={cn(&quot;mt-1&quot;, !expanded && &quot;hidden&quot;)}>{children}</div>
=======
        <div className={_cn("mt-1", _!expanded && "hidden")}>{_children}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    )
  }
),

<<<<<<< HEAD
<<<<<<< HEAD
SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
=======
SidebarGroup.displayName = &quot;SidebarGroup&quot;;
export { SidebarGroup };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
SidebarGroup.displayName = "SidebarGroup";
export {_SidebarGroup};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
