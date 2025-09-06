
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";


<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from "lucide-react",
import { cn } from "@/lib/utils";
import { SafeRef } from "@/types/ref-types";
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

=======
const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(;
  ({ title, icon, defaultExpanded = true, showChevron = true, className, children, ...props }, ref) => {;
    const [expanded, setExpanded] = React && React.useState(defaultExpanded);


=======
import React, { forward_ref } from './react';
import { ChevronDown  } from './lucide-react';
import { cn  } from '@/lib / utils';
import { SafeRef  } from '@/types / ref - types';
interface SidebarGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  default_expanded?: boolean;
  show_chevron?: boolean;
}
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
    ref,
  ) => {
    const [expanded, set_expanded] = React.useState (default_expanded);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    return (
      <div;
        ref={ref as SafeRef < HTMLDivElement>}
        className={cn ("px - 3 py - 2", class_name)}


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string,
  icon?: React.ReactNode,
  defaultExpanded?: boolean,
  showChevron?: boolean
}

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
    const [expanded, setExpanded] = React.useState(defaultExpanded);
    return (
      <div
import React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
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

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
        ref={ref as SafeRef<HTMLDivElement>}
        className={cn("px-3 py-2", className)}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {...props}
      >;

                className={cn("h-4 w-4 transition-transform", expanded ? "rotate-0" : "-rotate-90")}
              />;

            )}
          </button>;
        )}
<<<<<<< HEAD
        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>
      </div>
    );
  }

);
SidebarGroup.displayName = "SidebarGroup";
export { SidebarGroup }


SidebarGroup.displayName = "SidebarGroup",
export { SidebarGroup },
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

        <div className={cn("mt-1", !expanded && "hidden")}>{children}</div>;
      </div>;
    );
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
);

SidebarGroup && SidebarGroup.displayName = "SidebarGroup";

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
    )
  }
),



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export { SidebarGroup };
