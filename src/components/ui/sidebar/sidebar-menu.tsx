<<<<<<< HEAD

<<<<<<< HEAD
import React, { forwardRef } from "react";
import { ChevronDown } from 'lucide-react'import { cn } from "@/lib/utils";
=======
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils";
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import { SafeRef } from "@/types/ref-types";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React && React.ReactNode;
}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;
  ({ icon, active, children, href, target, badge, className, ...props }, ref,) => {;
    if (href) {;
=======
import React, { forward_ref } from './react';
import { ChevronDown } from 'lucide-react'import { cn  } from '@/lib / utils';
import { SafeRef  } from '@/types / ref - types';
interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}
const SidebarMenuItem = forward_ref < HTMLButtonElement, SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, class_name, ...props }, ref, ) => {
    // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      return (<a;
          href={href}
    return (<button;
        ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
SidebarMenuItem.displayName = "SidebarMenuItem"
=======
SidebarMenuItem.display_name = "SidebarMenuItem";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export { SidebarMenuItem, SidebarMenuGroup }
export { SidebarMenuItem, SidebarMenuGroup }
}
export { SidebarMenuItem, SidebarMenuGroup }
<<<<<<< HEAD

=======
SidebarMenuItem && SidebarMenuItem.displayName = "SidebarMenuItem";

export { SidebarMenuItem, SidebarMenuGroup };
export { SidebarMenuItem, SidebarMenuGroup };
};

export { SidebarMenuItem, SidebarMenuGroup };
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
