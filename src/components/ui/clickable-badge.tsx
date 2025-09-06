
import { cn } from '@/lib/utils'
import { badgeVariants } from '@/components/ui/badge-variants'
export interface ClickableBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'

=======

import React from "react",
import { X } from 'lucide-react'
import { cn } from "@/lib/utils",
import { badgeVariants } from "@/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default" | "secondary" | "destructive" | "outline"
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ClickableBadge({


        >
          <X className="h-3 w-3" />
        </button>


=======
import React from "react",;
import { X } from 'lucide-react';
import { cn } from "@/lib/utils",;
import { badgeVariants } from "@/components/ui/badge-variants",;
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {;
  onRemove?: () => void,;
  variant?: "default" | "secondary" | "destructive" | "outline";
}
;
export function ClickableBadge({;
  children,;
  className,;
  variant = "default",;
  onRemove,;
  ...props;
}: ClickableBadgeProps) {;
  return (;
    <div;
      className={cn(;
        badgeVariants({ variant }),;
        "group flex items-center gap-1",;
        onRemove && "pl-2.5 pr-1.5 py-1";
        className;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      )}
    </div>
  )
  )
}
            e.stopPropagation()
            onRemove()
          }}

          className="ml-1 rounded-full p-0.5 hover:bg-background/20";
          aria-label="Remove";
        >;
          <X className="h-3 w-3" />;
        </button>;
      )}
    </div>;
  );
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
