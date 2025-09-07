import React, { forwardRef } from "react";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {SafeRef} from "@/types/ref-types";
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React && React.ReactNode;interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNodeimport React, { forwardRef } from "react",;
import { ChevronDown } from "lucide-react",;
import { cn } from "@/lib/utils",;
import { SafeRef } from "@/types/ref-types",;
interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;
  icon?: React.ReactNode,;
  active?: boolean,;
  href?: string,;
  target?: string,;
  badge?: React.ReactNode;          )}
        >
          <div className="flex items-center gap-2">
            {icon && <span className="text-muted-foreground">{icon}</span>}
import React, { forwardRef } from "react";""
import {ChevronDown} from "lucide-react";""
import {cn} from "@/lib/utils";""
import {SafeRef} from "@/types/ref-types";"
interface SidebarMenuItemProps extends React && React.HTMLAttributes<HTMLButtonElement> {;

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {;

const SidebarMenuItem = forwardRef<HTMLButtonElement, SidebarMenuItemProps>(;

interface SidebarMenuItemProps extends React.HTMLAttributes < HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  badge?: React.ReactNode;
}
const SidebarMenuItem = forward_ref < HTMLButtonElement, SidebarMenuItemProps>()
  ({ icon, active, children, href, target, badge, class_name, ...props }, ref) => {
    // Check condition;
if ( {) {
  $2;
      return (
        <a;
          href={href}
          target={target}"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}""
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"""
            active && "bg-accent font-medium text-accent-foreground","
            className;)
          )}>;
</a>"
          <div className="flex items-center gap-2">"
</div>"
            {icon && <span className="text-muted-foreground">{icon}</span>}"
pr-12325
            <span>{children}</span>
          </div>
          {badge && <span>{badge}</span>}
        </a>
      )

          <div className="flex items-center gap-2">;
            {icon && <span className="text-muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>;
      );
          className={cn (
            "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
            active && "bg - accent font - medium text - accent - foreground",
            class_name)}
        >;
          <div className="flex items - center gap-2">;
            {icon && <span className="text - muted-foreground">{icon}</span>}
            <span>{children}</span>;
          </div>;
          {badge && <span>{badge}</span>}
        </a>);
          className
        )}
        {...props}>;    }
    return (
      <button;
        ref={ref}
          className
        )}
        {...props}
      >;
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>;
    );
  }

SidebarMenuItem.displayName = "SidebarMenuItem",
),
),

SidebarMenuItem.displayName = "SidebarMenuItem",

  }

SidebarMenuItem.displayName = "SidebarMenuItem",

interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space-y-1" {...props}>
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>
      <div className="pl-2">{children}</div>
    </div>
  )
interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;
  title: string,;
  children: React && React.ReactNode;
}
const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
  return (        type="button";
        className={cn (
          "flex w - full items - center justify - between rounded - md px - 3 py - 2 text - sm hover: bg - accent";
          active && "bg - accent font - medium text - accent - foreground",
          class_name)}
        {...props}
      >;
        <div className="flex items - center gap-2">;
          {icon && <span className="text - muted-foreground">{icon}</span>}
          <span>{children}</span>;
        </div>;
        {badge && <span>{badge}</span>}
      </button>);
  }
);
;
SidebarMenuItem.display_name = "SidebarMenuItem";
;
interface SidebarMenuGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  title: string,
  children: React.ReactNode;
}
const SidebarMenuGroup: React.FC < SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return (
    <div className="space-y-1" {...props}>;
      <div className="rounded - md px - 3 py - 2 text - sm font-medium">{title}</div>;
      <div className="pl-2">{children}</div>;
    </div>);
}
;
export { SidebarMenuItem, SidebarMenuGroup }
;

},

export { SidebarMenuItem, SidebarMenuGroup };
export { SidebarMenuItem, SidebarMenuGroup };
  ),;
},;
;
export { SidebarMenuItem, SidebarMenuGroup },; interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
active?: boolean;
href?: string;
target?: string;
badge?: React.ReactNode 
}const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps> ( ({
  icon, active, children, href, target, badge, className, ...props 
}, ref) => {
  if (href) {
  return (<a href= {
  href 
}target= {
  target 
}rel= {
  target === "blank" ? "noopener noreferrer" : undefined 
}className= {
  cn ("flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent";
active && "bg-accent font-medium text-accent-foreground";
className) 
}> <div className="flex items-center gap-2" > {
  icon && <span className="text-muted-foreground" > {
  icon 
}</span> 
}<span> {
  children 
}</span> </div> {
  badge && <span> {
  badge 
}</span> 
}</a>) 
}return (<button) 
}{
  ...props 
}> </div> {
  badge && <span> {
  badge 
}</span> 
}</button>) 
});
</div>) 
};
  );
},;
export { SidebarMenuItem, SidebarMenuGroup };

const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps>(;

          rel={target === "_blank" ? "noopener noreferrer" :undefined}"
          className={cn(;"
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;""
            active && "bg-accent font-medium text-accent-foreground",;"
          )}
        >;
          <div className="flex items-center gap-2">;            {icon && <span className="text-muted-foreground">{icon}</span>}"
          <div className="flex items-center gap-2">;"
            <span>{children}</span>;
          </div>;
        </a>;"
          <div className="flex items - center gap - 2">;"
            {icon && <span className="text - muted - foreground">{icon}</span>}"
        </a>);
      <button;
        ref={ref}
"
          active && "bg-accent font-medium text-accent-foreground",""
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",""
          className;
        {...props}>;
</button>
        {...props}
</button>"
      </button>;
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {
    <div className="space-y-1" {...props}>"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>""
      <div className="pl-2">{children}</div>"
interface SidebarMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {;

interface SidebarMenuGroupProps extends React && React.HTMLAttributes<HTMLDivElement> {;

const SidebarMenuGroup: React.FC<SidebarMenuGroupProps> = ({ title, children, ...props }) => {;
    <div className="space-y-1" {...props}>;"
      <div className="rounded-md px-3 py-2 text-sm font-medium">{title}</div>;""
      <div className="pl-2">{children}</div>;"
    </div>;"
      </button>);
interface SidebarMenuGroupProps extends React.HTMLAttributes < HTMLDivElement> {
  title: string,
  children: React.ReactNode;
const SidebarMenuGroup: React.FC < SidebarMenuGroupProps> = ({ title, children, ...props }) => {
  return ("
    <div className="space - y-1" {...props}>;"
      <div className="rounded - md px - 3 py - 2 text - sm font - medium">{title}</div>;""
      <div className="pl - 2">{children}</div>;")
    </div>);
export { SidebarMenuItem, SidebarMenuGroup },; interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {

}const SidebarMenuItem = forwardRef<HTMLButtonElement SidebarMenuItemProps> ( ({

  return (<a href= {
  href;
}target= {
  target;
}rel= {"
  target === "blank" ? "noopener noreferrer" : undefined;"
}className= {"
  cn ("flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent";""
active && "bg-accent font-medium text-accent-foreground";")
className) "
}> <div className="flex items-center gap-2" > {"
  icon && <span className="text-muted-foreground" > {"
</span>
}</span> 
}<span> {
}</span> </div> {
  badge && <span> {
}</a>) 
}return (<button) 
}{
  ...props;
}> </div> {
}</button>) 
</div>) "
pr-12325
