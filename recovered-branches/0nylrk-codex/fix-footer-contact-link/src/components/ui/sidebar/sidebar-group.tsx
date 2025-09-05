
import React, {_forwardRef} from "react";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {_title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean;}

const _SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(_({_title, _icon, _defaultExpanded = true, _showChevron = true, _className, _children, _...props}, _ref) => {_const [expanded, _setExpanded] = React.useState(defaultExpanded);

    return (
      <div
        ref={ref as SafeRef<HTMLDivElement>}
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
            </div>
            {_showChevron && (
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", _expanded ? "rotate-0" : "-rotate-90")}
              />
            )}
          </button>
        )}
        <div className={_cn("mt-1", _!expanded && "hidden")}>{_children}</div>
      </div>
    );
  }
);

SidebarGroup.displayName = "SidebarGroup";
export {_SidebarGroup};
