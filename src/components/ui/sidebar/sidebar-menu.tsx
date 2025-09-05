
import React, { forwardRef } from "react",
import { ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
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
        <a,
href={href}
          target={target}
          rel={target === &quot;blank&quot; ? &quot;noopener noreferrer&quot; : undefined}
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
import React, {forwardRef} from "react";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode}

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(_({icon, active, children, href, target, badge, className, _...props}, ref) => {if (href) {
      return (
        <a,
href={href}
          target={target}
          rel={target === "blank" ? "noopener noreferrer" : undefined}
          className={cn(
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent", active && "bg-accent font-medium text-accent-foreground", className
          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )    }

    return (
      <button,
ref={ref}
        type=&quot;button&quot;
        className={cn(
          &quot;flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent&quot;,
          active && &quot;bg-accent font-medium text-accent-foreground&quot;,
          className        )}
        {_...props}
      >
        <div className=&quot;flex items-center gap-2&quot;>
          {icon && <span className=&quot;text-muted-foreground&quot;>{icon}</span>}
          <span>{children}</span>        </div>
        {badge && <span>{badge}</span>}
      </button>
    )
  }
),

SidebarMenuItem.displayName = "SidebarMenuItem",
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string,
  children: React.ReactNode
}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className=&quot;space-y-1&quot; {...props}>
      <div className=&quot;rounded-md px-3 py-2 text-sm font-medium&quot;>{title}</div>
      <div className=&quot;pl-2&quot;>{children}</div>    </div>
  )
},

export { SidebarMenuItem, SidebarMenuGroup },