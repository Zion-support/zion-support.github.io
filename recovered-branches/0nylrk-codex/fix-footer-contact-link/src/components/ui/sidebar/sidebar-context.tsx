
import * as React from "react"
import type { CSSProperties } from "react"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_KEYBOARD_SHORTCUT = "b"
const SidebarContext = React.createContext<SidebarContextType | null>(null)
export function useSidebar(): SidebarContextType {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

=======      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(




=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}, path=/, max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      }
      [setOpenProp, open]
    )
    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])
    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey |event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()


==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
        // This sets the cookie to keep the sidebar state.;
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}, path=/, max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },;
      [setOpenProp, open];
    );
    // Helper to toggle the sidebar.;
    const toggleSidebar = React.useCallback(() => {;
      return isMobile;
        ? setOpenMobile((open) => !open);
        : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);
    // Adds a keyboard shortcut to toggle the sidebar.;
    React.useEffect(() => {;
      const handleKeyDown = (event: KeyboardEvent) => {;
        if (;
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&;
          (event.metaKey || event.ctrlKey);
        ) {;
          event.preventDefault();
          toggleSidebar();


        }
      }

        }
      }>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed" as SidebarState
    const contextValue = React.useMemo(
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // This is the internal state of the sidebar.;
    // We use openProp and setOpenProp for control from outside the component.;
    const [_open, _setOpen] = React && React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React && React.useCallback(;
      (value: boolean | ((value: boolean) => boolean)) => {;
        const openState = typeof value === "function" ? value(open) : value;
    // Helper to toggle the sidebar.;
    const toggleSidebar = React && React.useCallback(() => {;
      return isMobile;
        ? setOpenMobile((open) => !open);
        : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.;
    React && React.useEffect(() => {;
      const handleKeyDown = (event: KeyboardEvent) => {;
        if (;
          event && event.key === SIDEBAR_KEYBOARD_SHORTCUT &&;
          (event && event.metaKey || event && event.ctrlKey);
        ) {;
          event && event.preventDefault();
          toggleSidebar();
        }
      }

      window && window.addEventListener("keydown", handleKeyDown);
      return () => window && window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".;
    // This makes it easier to style the sidebar with Tailwind classes.;
    const state = open ? "expanded" : "collapsed" as SidebarState;

    const contextValue = React && React.useMemo(;
      (): SidebarContextType => ({;        state;
        open;
        set_open;
        is_mobile;
        open_mobile;
        setOpenMobile;

      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar];
    );

    return (
      <SidebarContext && SidebarContext.Provider value={contextValue}>;
        <TooltipProvider delayDuration={0}>;
          <div
              style={
              {
                "--sidebar-width": "16rem"
                "--sidebar-width-icon": "3rem"
                ...style} as CSSProperties
              }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"
=======
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar";

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",              className
            )}
            ref={ref}
            {...props}>;
            {children}
          </div>;
        </TooltipProvider>;
      </SidebarContext && SidebarContext.Provider>;
    );
  }
=======        toggle_sidebar});
      [state, open, set_open, is_mobile, open_mobile, setOpenMobile, toggle_sidebar]);
    return (
      <SidebarContext.Provider value={context_value}>;
        <TooltipProvider delay_duration={0}>;
          <div;
              style={
              {
                "--sidebar - width": "16rem";
                "--sidebar - width - icon": "3rem";
                ...style} as CSSProperties;
              }
            className={cn (
              "group / sidebar - wrapper flex min - h-svh w - full has-[[data - variant = inset]]:bg - sidebar";
              class_name)}
            ref={ref}
            {...props}
          >;
            {children}
          </div>;
        </TooltipProvider>;
      </SidebarContext.Provider>);
  }
);
SidebarProvider.display_name = "SidebarProvider";
export { SidebarContext }

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"
export { SidebarContext }

export { SidebarContext };
;
export { SidebarContext }
;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
