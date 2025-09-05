
import React from "react";

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {_className?: string;
  title?: string;
  children?: React.ReactNode;}

export function SidebarSection(_{_className, _title, _children, _...props}: SidebarSectionProps) {_return (
    <div className={cn("py-2", _className)} {_...props}>
      {_title && (
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-1">{_children}</div>
    </div>
  );
}
