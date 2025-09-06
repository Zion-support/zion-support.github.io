<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SafeRef } from '@/types/ref-types';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
<<<<<<< HEAD
<<<<<<< HEAD
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
<<<<<<< HEAD
import React, { forwardRef } from "react",;
import { ChevronDown } from 'lucide-react';
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
=======
<<<<<<< HEAD
=======
import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
=======
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
import React, { forwardRef } from 'react';'
import { ChevronDown } from 'lucide-react';'
import { cn } from '@/lib/utils';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { SafeRef } from '@/types/ref-types';
interface SidebarGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  title?: string;
  icon?: React.ReactNode;
  defaultExpanded?: boolean;
<<<<<<< HEAD
  showChevron?: boolean
<<<<<<< HEAD
<<<<<<< HEAD
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  (
    {
      title
      icon
      defaultExpanded = true
      showChevron = true
      className
      children
      ...props
    }
    ref
  ) => {
    const [expanded, setExpanded] = React.useState(defaultExpanded)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


=======
  showChevron?: boolean;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  (;
    {;
      title,;
      icon,;
      defaultExpanded = true,;
      showChevron = true,;
      className,;
      children,;
      ...props;
    },;
    ref;
  ) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
        {...props}
      >
        {title && (
          <button
<<<<<<< HEAD
            type="button"
            className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex items-center gap-2">
=======
            type='button'
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
=======
        ref={ref as SafeRef<HTMLDivElement>}'
        className={cn('px-3 py-2', className)}        {...props}
      >
        {title && (
          <button'
            type='button''
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
            onClick={() => setExpanded(!expanded)}          >;'
            <div className='flex items-center gap-2'>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
<<<<<<< HEAD
              <ChevronDown
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
            )}
          </button>
        )}
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>
      </div>
    )
  }
)
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }


SidebarGroup && SidebarGroup.displayName = 'SidebarGroup';

import React, { forward_ref } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib / utils';
import { SafeRef } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  default_expanded?: boolean;
  show_chevron?: boolean;
const SidebarGroup = forward_ref < HTMLDivElement, SidebarGroupProps>(
  (
    {
      title,
      icon,
      default_expanded = true,
      show_chevron = true,
      class_name,
      children,
      ...props;
    },
    ref) => {
    const [expanded, set_expanded] = React.useState (default_expanded);
        ref={ref as SafeRef < HTMLDivElement>}
        className={cn ('px - 3 py - 2', class_name)}        {...props}
      >;
        {title && (
          <button;
            type='button';
            className='flex w - full items - center justify - between rounded - md px - 2 py - 1 text - sm font - medium text - muted - foreground hover:bg - secondary / 30';
            on_click={() => set_expanded (!expanded)}          >;
            <div className='flex items - center gap - 2'>;
              {icon}
              <span>{title}</span>;
            </div>;
            {showChevron && (;
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />
            )}
          </button>;
        )}
export { SidebarGroup }

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
}
            )}
          </button>;
        )}
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />
            )}
          </button>;
        )}
<<<<<<< HEAD
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    )
  }
),
=======

=======
              <ChevronDown;
                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />


            )}
          </button>
        )}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className={cn('mt-1', !expanded && 'hidden')}>{children}</div>;
      </div>;
    );

  }
)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
SidebarGroup.displayName = 'SidebarGroup'
export { SidebarGroup }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
),;
SidebarGroup.displayName = "SidebarGroup",;
export { SidebarGroup };
<<<<<<< HEAD
=======
}

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
);

SidebarGroup.displayName = 'SidebarGroup';
export { SidebarGroup };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
