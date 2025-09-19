
import React from "react";
import { cn } from "@/lib/utils";
interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {,
  className?: string;
  title?: string;
  children?: React.ReactNode;
}
,
      {title && (,
        <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">,
          {title}
        </h3>,
      )}
      <div className="space-y-1">{children}</div>,
    </div>,
  );
}
,