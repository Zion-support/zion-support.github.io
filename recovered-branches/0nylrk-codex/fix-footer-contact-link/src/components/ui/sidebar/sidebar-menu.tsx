



import { cn } from "@/lib/utils",
import { SafeRef } from "@/types/ref-types",
  icon?: React.ReactNode,
  active?: boolean,
  href?: string,
  target?: string,
  badge?: React.ReactNode









          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",

          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent"

          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}>;
      ),;
    }
;
    return (;
      <button;
        ref={ref}
        type="button";
        className={cn(;
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",;
          active && "bg-accent font-medium text-accent-foreground",;
          className;
        )}
        {...props}

      >;
        <div className="flex items-center gap-2">;


          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover: bg-accent";
          active && "bg-accent font-medium text-accent-foreground"
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
          active && "bg-accent font-medium text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}
          <span>{children}</span>
        </div>
        {badge && <span>{badge}</span>}
      </button>
    )
  }







export { SidebarMenuItem, SidebarMenuGroup }
;

},


export { SidebarMenuItem, SidebarMenuGroup };




