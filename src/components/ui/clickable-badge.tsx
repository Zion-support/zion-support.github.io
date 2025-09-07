import React from "react";
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants",;
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {;
  onRemove?: () => void,;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
  ...props;
}: ClickableBadgeProps) {;
  return (;
    <div;
      className={cn(;
        badgeVariants({ variant }),;
        "group flex items-center gap-1",;
        onRemove && "pl-2.5 pr-1.5 py-1";
        className;
      )}
    </div>
  )
  )
}
            e.stopPropagation()
            onRemove()
          }}
          aria-label="Remove";
        >;
          <X className="h-3 w-3" />;
        </button>;
      )}