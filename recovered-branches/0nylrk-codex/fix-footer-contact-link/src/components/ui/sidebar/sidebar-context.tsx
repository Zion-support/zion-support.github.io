<<<<<<< HEAD

import * as React from "react"
import type { CSSProperties } from "react"
import {TooltipProvider} from "@/components/ui/tooltip"
import {useIsMobile} from "@/hooks/use-mobile"
import {cn} from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;
import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"

<<<<<<< HEAD
;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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


  return context as SidebarContextType
}

=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  default_open?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export const SidebarProvider = React.forwardRef<;
  HTMLDivElement;
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
=======

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const SidebarContext = React && React.createContext<SidebarContextType | null>(null);

export function useSidebar(): any (): SidebarContextType {;
  const context = React && React.useContext(SidebarContext);
  if (!context) {;
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context as SidebarContextType;
}

export interface SidebarProviderProps extends React && React.ComponentProps<"div"> {;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const SidebarProvider = React && React.forwardRef<;

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  HTMLDivElement;
  SidebarProviderProps;
>(;
  (;
    {;
      defaultOpen = true;
<<<<<<< HEAD




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  SidebarProviderProps
>(
  (
    {
      defaultOpen = true;
      open: openProp
      onOpenChange: setOpenProp
      className;
      style;
      children;
      ...props
    }
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }
<<<<<<< HEAD

<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
        }
      }
=======



=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed" as SidebarState
    const contextValue = React.useMemo(
=======
        // This sets the cookie to keep the sidebar state.;
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${open_state}, path=/, max - age=${SIDEBAR_COOKIE_MAX_AGE}`;
      }
      [setOpenProp, open]);
    // Helper to toggle the sidebar.;
    const toggle_sidebar = React.useCallback (() => {
      return is_mobile;
        ? setOpenMobile ((open) => !open);
        : set_open ((open) => !open);
    }, [is_mobile, set_open, setOpenMobile]);
    // Adds a keyboard shortcut to toggle the sidebar.;
    React.useEffect (() => {
      const handleKeyDown = (event: KeyboardEvent) =>: any {
        // Check condition
if (
        ) {) {
  $2
}
          event.prevent_default ();
          toggle_sidebar ();
        }
      }
      window.addEventListener ("keydown", handleKeyDown);
      return () => window.removeEventListener ("keydown", handleKeyDown);
    }, [toggle_sidebar]);
    // We add a state so that we can do data - state="expanded" or "collapsed".;
    // This makes it easier to style the sidebar with Tailwind classes.;
    const state = open ? "expanded" : "collapsed" as SidebarState;
    const context_value = React.useMemo (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      (): SidebarContextType => ({
=======
      open: openProp,;
      onOpenChange: setOpenProp,;
      className;
      style;
      children;
      ...props;
    };
    ref;
  ) => {;
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React && React.useState(false);

    // This is the internal state of the sidebar.;
    // We use openProp and setOpenProp for control from outside the component.;
    const [_open, _setOpen] = React && React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React && React.useCallback(;
      (value: boolean | ((value: boolean) => boolean)) => {;
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {;
          setOpenProp(openState);
        } else {;
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.;
        document && document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}, path=/, max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      };
      [setOpenProp, open];
    );

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
      (): SidebarContextType => ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        state;
        open;
        set_open;
        is_mobile;
        open_mobile;
        setOpenMobile;
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
<<<<<<< HEAD
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar";

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              className
            )}
            ref={ref}
            {...props}>;
            {children}
          </div>;
        </TooltipProvider>;
      </SidebarContext && SidebarContext.Provider>;
    );
  }
<<<<<<< HEAD
)
SidebarProvider.displayName = "SidebarProvider"
export { SidebarContext }

<<<<<<< HEAD
export { SidebarContext };
;
export { SidebarContext }
;
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======
        toggle_sidebar});
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
