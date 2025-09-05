
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
        </a>
      );
    }

    return (
      <button
        ref={_ref}
        type="button"
        className={_cn(
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent", _active && "bg-accent font-medium text-accent-foreground", _className
        )}
        {_...props}
      >
        <div className="flex items-center gap-2">
          {_icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{_children}</span>
        </div>
        {_badge && <span>{badge}</span>}
      </button>
    );
  }
);

SidebarMenuItem.displayName = "SidebarMenuItem";

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {_title: string;
  children: React.ReactNode;}

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = (_{_title, _children, _...props}) => {_return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{_title}</div>
      <div className="pl-2">{_children}</div>
    </div>
  );
};

export {_SidebarMenuItem, _SidebarMenuGroup};
