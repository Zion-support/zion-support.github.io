
import { cn } from '@/lib/utils'
import { SafeRef } from '@/types/ref-types'
=======

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
  showChevron?: boolean


              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown

                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            )}
          </button>
        )}

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}

=======
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    )
  }
),

SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
),;
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup };


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
