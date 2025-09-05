
<<<<<<< HEAD
<<<<<<< HEAD
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
=======
import React, { forwardRef } from &quot;react&quot;;
import { ChevronDown } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;;
import { SafeRef } from &quot;@/types/ref-types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode
}

const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps>(
  ({ icon, active, children, href, target, badge, className, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === &quot;_blank&quot; ? &quot;noopener noreferrer&quot; : undefined}
          className={cn(
            &quot;flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent&quot;,
            active && &quot;bg-accent font-medium text-accent-foreground&quot;,
            className
          )}
        >
          <div className=&quot;flex items-center gap-2&quot;>
            {icon && <span className=&quot;text-muted-foreground&quot;>{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
<<<<<<< HEAD
=======
import React, {_forwardRef} from "react";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {_icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;}

const _SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(_({_icon, _active, _children, _href, _target, _badge, _className, _...props}, _ref) => {_if (href) {
      return (
        <a
          href={href}
          target={_target}
          rel={_target === "_blank" ? "noopener noreferrer" : undefined}
          className={_cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent", _active && "bg-accent font-medium text-accent-foreground", _className
          )}
        >
          <div className="flex items-center gap-2">
            {_icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{_children}</span>
          </div>
          {_badge && <span>{badge}</span>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </a>
      )
=======
        </Link>
      );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    return (
      <button
<<<<<<< HEAD
        ref={ref}
        type=&quot;button&quot;
        className={cn(
          &quot;flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent&quot;,
          active && &quot;bg-accent font-medium text-accent-foreground&quot;,
          className
=======
        ref={_ref}
        type="button"
        className={_cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent", _active && "bg-accent font-medium text-accent-foreground", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
        {_...props}
      >
<<<<<<< HEAD
        <div className=&quot;flex items-center gap-2&quot;>
          {icon && <span className=&quot;text-muted-foreground&quot;>{icon}</span>}
          <span>{children}</span>
=======
        <div className="flex items-center gap-2">
          {_icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{_children}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        {_badge && <span>{badge}</span>}
      </button>
    )
  }
),

<<<<<<< HEAD
SidebarMenuItem.displayName = "SidebarMenuItem",
=======
SidebarMenuItem.displayName = &quot;SidebarMenuItem&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  children: React.ReactNode
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className=&quot;space-y-1&quot; {...props}>
      <div className=&quot;rounded-md px-3 py-2 text-sm font-medium&quot;>{title}</div>
      <div className=&quot;pl-2&quot;>{children}</div>
=======
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {_title: string;
  children: React.ReactNode;}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = (_{_title, _children, _...props}) => {_return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{_title}</div>
      <div className="pl-2">{_children}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
},

<<<<<<< HEAD
export { SidebarMenuItem, SidebarMenuGroup },
=======
export {_SidebarMenuItem, _SidebarMenuGroup};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
