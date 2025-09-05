
import React from "react";

export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {_onRemove?: () => void;
  variant?: "default" | "secondary" | "destructive" | "outline";}

export function ClickableBadge(_{_children, _className, _variant = "default", _onRemove, _...props}: ClickableBadgeProps) {_return (
    <div
      className={cn(
        badgeVariants({ variant}),
        "group flex items-center gap-1",
        onRemove && "pl-2.5 pr-1.5 py-1",
        className
      )}
      {_...props}
    >
      <span>{_children}</span>
      {_onRemove && (_<button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();}}
          className="ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
