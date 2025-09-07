import * as React from "react"
import type { CSSProperties } from "react"
<<<<<<< HEAD

import { TooltipProvider } from "@/components/ui/tooltip""
import { useIsMobile } from "@/hooks/use-mobile""
import { cn } from "@/lib/utils""

import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"

const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

const SIDEBAR_KEYBOARD_SHORTCUT = "b"
const SidebarContext = React.createContext<SidebarContextType | null>(null)
export function useSidebar(): SidebarContextType {}
  const context = React.useContext(SidebarContext)
  if (!context) {"
    throw new Error("useSidebar must be used within a SidebarProvider.")

import * as React from './react';
import type { CSSProperties } from './react';
import { TooltipProvider } from '@/components / ui / tooltip';
import { useIsMobile } from '@/hooks / use - mobile';
import { cn } from '@/lib / utils';
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;"
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {

  default_open?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const SidebarProvider = React.forwardRef<;
  HTMLDivElement;
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,

const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React && React.createContext<SidebarContextType | null>(null);
export function useSidebar(): any (): SidebarContextType {;
  const context = React && React.useContext(SidebarContext);

export interface SidebarProviderProps extends React && React.ComponentProps<"div"> {;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

  SidebarProviderProps;
>(;
  (;
    {;

  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

=======
<<<<<<< HEAD
import {TooltipProvider} from "@/components/ui/tooltip"
import {useIsMobile} from "@/hooks/use-mobile"
import {cn} from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"
=======
<<<<<<< HEAD
import {TooltipProvider} from "@/components/ui/tooltip"
import {useIsMobile} from "@/hooks/use-mobile"
import {cn} from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;
=======

<<<<<<< HEAD
import { TooltipProvider } from "@/components/ui/tooltip""
import { useIsMobile } from "@/hooks/use-mobile""
import { cn } from "@/lib/utils""

import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"

<<<<<<< HEAD
;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const SIDEBAR_COOKIE_NAME = "sidebar:state"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

const SIDEBAR_KEYBOARD_SHORTCUT = "b"
const SidebarContext = React.createContext<SidebarContextType | null>(null)
export function useSidebar(): SidebarContextType {}
  const context = React.useContext(SidebarContext)
  if (!context) {"
    throw new Error("useSidebar must be used within a SidebarProvider.")

<<<<<<< HEAD
import * as React from "react";
import type { CSSProperties } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
=======
import * as React from './react';
import type { CSSProperties } from './react';
import { TooltipProvider } from '@/components / ui / tooltip';
import { useIsMobile } from '@/hooks / use - mobile';
import { cn } from '@/lib / utils';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;"
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
<<<<<<< HEAD

}

=======
}


  return context as SidebarContextType
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface SidebarProviderProps extends React.ComponentProps<"div"> {

  default_open?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
<<<<<<< HEAD

export const SidebarProvider = React.forwardRef<;
  HTMLDivElement;
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,

=======
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React && React.createContext<SidebarContextType | null>(null);
export function useSidebar(): any (): SidebarContextType {;
  const context = React && React.useContext(SidebarContext);
<<<<<<< HEAD

=======
  if (!context) {;
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context as SidebarContextType;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface SidebarProviderProps extends React && React.ComponentProps<"div"> {;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
<<<<<<< HEAD

=======
export const SidebarProvider = React && React.forwardRef<;
  HTMLDivElement;
;
const SidebarContext = React.createContext<SidebarContextType | null>(null);
;
export function useSidebar():SidebarContextType {;
  const context = React.useContext(SidebarContext);
  if (!context) {;
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
;
  return context as SidebarContextType;
}
;
export interface SidebarProviderProps extends React.ComponentProps<"div"> {;
  defaultOpen?:boolean;
  open?:boolean;
  onOpenChange?:(open:boolean) => void;
}
;
export const SidebarProvider = React.forwardRef<;
  HTMLDivElement,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  SidebarProviderProps;
>(;
  (;
    {;
<<<<<<< HEAD

  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
=======
  return context as SidebarContextType
}
>>>>>>> merged-prs-20250907-203621

  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

<<<<<<< HEAD
export const SidebarProvider = React.forwardRef<;
  HTMLDivElement;
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  SidebarProviderProps
>(
  (
    {
<<<<<<< HEAD

=======
<<<<<<< HEAD
      defaultOpen = true;
      open: openProp
      onOpenChange: setOpenProp
      className;
      style;
      children;
      ...props
    }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
      ...props
    },
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ref
  ) => {

    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
<<<<<<< HEAD

      (value: boolean | ((value: boolean) => boolean)) => {"
        const open_state = typeof value === "function" ? value (open) : value;
        // Check condition;
if ( {) {}
  $2;
}
          setOpenProp (open_state);
        } else {}
          _setOpen (open_state);
        }

=======
<<<<<<< HEAD

      (value: boolean | ((value: boolean) => boolean)) => {"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {

          setOpenProp(openState)
        } else {}
          _setOpen(openState)
        }
<<<<<<< HEAD

;

=======


=======
=======
export const SidebarProvider = React.forward_ref<;
  HTMLDivElement;
  SidebarProviderProps;
>(
  (
    {
      default_open = true;
      open: open_prop,
      onOpenChange: setOpenProp,
      class_name;
      style;
      children;
      ...props;
    }
    ref) => {
    const is_mobile = useIsMobile ();
    const [open_mobile, setOpenMobile] = React.useState (false);
    // This is the internal state of the sidebar.;
    // We use open_prop and setOpenProp for control from outside the component.;
    const [_open, _setOpen] = React.useState (default_open);
    const open = open_prop ?? _open;
    const set_open = React.useCallback (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      (value: boolean | ((value: boolean) => boolean)) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        const open_state = typeof value === "function" ? value (open) : value;
        // Check condition;
if ( {) {}
  $2;
}
          setOpenProp (open_state);
        } else {}
          _setOpen (open_state);
        }

      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {

          setOpenProp(openState)
        } else {}
          _setOpen(openState)
        }

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


<<<<<<< HEAD
        }
      }
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

        }
      }

=======

<<<<<<< HEAD
        }
      }
=======

<<<<<<< HEAD
        }
      }

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        }
      }

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        }
      }

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      window.addEventListener("keydown", handleKeyDown)

      return () => window.removeEventListener("keydown", handleKeyDown)
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }, [toggleSidebar])
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }, [toggleSidebar])"
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes."
    const state = open ? "expanded" : "collapsed" as SidebarState;
    const contextValue = React.useMemo(
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        // This sets the cookie to keep the sidebar state.;

        document.cookie = `${SIDEBAR_COOKIE_NAME}=${open_state}, path=/, max - age=${SIDEBAR_COOKIE_MAX_AGE}`;
      }
      [setOpenProp, open]);
    // Helper to toggle the sidebar.;
    const toggle_sidebar = React.useCallback (() => {}
      return is_mobile;
        ? setOpenMobile ((open) => !open);
        : set_open ((open) => !open);
    }, [is_mobile, set_open, setOpenMobile]);
    // Adds a keyboard shortcut to toggle the sidebar.;
    React.useEffect (() => {}
      const handleKeyDown = (event: KeyboardEvent) =>: any {}
        // Check condition;
if (
        ) {) {}
  $2;
}
          event.prevent_default ();
          toggle_sidebar ();
        }
      }"
      window.addEventListener ("keydown", handleKeyDown);"
      return () => window.removeEventListener ("keydown", handleKeyDown);
    }, [toggle_sidebar]);"
    // We add a state so that we can do data - state="expanded" or "collapsed".;
    // This makes it easier to style the sidebar with Tailwind classes.;"
    const state = open ? "expanded" : "collapsed" as SidebarState;
    const context_value = React.useMemo (
<<<<<<< HEAD
      (): SidebarContextType => ({}
=======
<<<<<<< HEAD
      (): SidebarContextType => ({}
=======
      (): SidebarContextType => ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
      (value: boolean | ((value: boolean) => boolean)) => {;"
        const openState = typeof value === "function" ? value(open) : value;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      defaultOpen = true,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      open:openProp,;
      onOpenChange:setOpenProp,;
      className,;
      style,;
      children,;
      ...props;
    },;
    ref;
  ) => {;
<<<<<<< HEAD
=======
    const isMobile = useIsMobile();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const [openMobile, setOpenMobile] = React.useState(false);
;
    // This is the internal state of the sidebar.;
    // We use openProp and setOpenProp for control from outside the component.;
    const [_open, _setOpen] = React.useState(defaultOpen);
<<<<<<< HEAD
    const setOpen = React.useCallback(;
      (value:boolean | ((value:boolean) => boolean)) => {;"
        const openState = typeof value === "function" ? value(open) :value;

=======
    const open = openProp ?? _open;
    const setOpen = React.useCallback(;
      (value:boolean | ((value:boolean) => boolean)) => {;"
        const openState = typeof value === "function" ? value(open) :value;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        if (setOpenProp) {;
          setOpenProp(openState);
        } else {;
          _setOpen(openState);
        }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

        state;
        open;
        set_open;
        is_mobile;
        open_mobile;
        setOpenMobile;

<<<<<<< HEAD
    return (
      <SidebarContext && SidebarContext.Provider value={contextValue}>;
        <TooltipProvider delayDuration={0}>;
=======
=======
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar];
    );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return (
      <SidebarContext && SidebarContext.Provider value={contextValue}>;
        <TooltipProvider delayDuration={0}>;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              }
            className={cn(

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
);
SidebarProvider && SidebarProvider.displayName = "SidebarProvider";
export { SidebarContext }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        toggle_sidebar});
      [state, open, set_open, is_mobile, open_mobile, setOpenMobile, toggle_sidebar]);
    return (
      <SidebarContext.Provider value={context_value}>;
        <TooltipProvider delay_duration={0}>;
          <div;

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

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",;
              className;
            )}
            ref={ref}
            {...props}

          >;            {children}
          </div>;
        </TooltipProvider>;
      </SidebarContext.Provider>;
    );
  });
SidebarProvider.displayName = "SidebarProvider";
;
export { SidebarContext } const SidebarContext = React.createContext<SidebarContextType | null> (null) export function useSidebar () : SidebarContextType {
  const context = React.useContext (SidebarContext) if (!context) {
  return context as SidebarContextType 
}open?: boolean onOpenChange?: (open: boolean) => void 
}export const SidebarProvider = React.forwardRef< HTMLDivElement;
SidebarProviderProps > ( ({
  defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props 
}, ref) => {
  const isMobile = useIsMobile () const [openMobile, setOpenMobile] = React.useState (false) //This is the internal state of the sidebar. //We use openProp and setOpenProp for control from outside the component. const [ open, setOpen] = React.useState (defaultOpen) if (setOpenProp) {
  setOpenProp (openState) 
}else {
  setOpen (openState) 
}//This sets the cookie to keep the sidebar state. 
};
[setOpenProp, open]) //Helper to toggle the sidebar. const toggleSidebar = React.useCallback ( () => {
  return isMobile ? setOpenMobile ( (open) => !open) : setOpen ( (open) => !open) 
}, [isMobile, setOpen, setOpenMobile]) //Adds a keyboard shortcut to toggle the sidebar.React.useEffect ( () => {
  const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === SIDEBAR KEYBOARD SHORTCUT && (event.metaKey || event.ctrlKey) ) {
  event.preventDefault () toggleSidebar () 
}
}window.addEventListener ("keydown", handleKeyDown) return () => window.removeEventListener ("keydown", handleKeyDown) 
}, [toggleSidebar]) //We add a state so that we can do data-state="expanded" or "collapsed" . //This makes it easier to style the sidebar with Tailwind classes. const contextValue = React.useMemo ( () : SidebarContextType => ({
  state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar 
});
[state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]) return (<SidebarContext.Provider value= {
  contextValue 
}> <TooltipProvider delayDuration= {
  0 
}> <div) 
}ref= {
  ref 
}{
  ...props 
}> {
  children 
}</div> </TooltipProvider> </SidebarContext.Provider>) 
}) SidebarProvider.displayName = "SidebarProvider" export {
  SidebarContext 
}
      (): SidebarContextType => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar}),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <SidebarContext.Provider value = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
              style={
              {
                "--sidebar-width": "16rem",
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                "--sidebar-width-icon": "3rem",
                ...style} as CSSProperties
              }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar";

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",

<<<<<<< HEAD
=======
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
)"
SidebarProvider.displayName = "SidebarProvider"
export { SidebarContext }

<<<<<<< HEAD
export { SidebarContext };
;
export { SidebarContext }
;
=======


<<<<<<< HEAD
;
        // This sets the cookie to keep the sidebar state.;
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}, path=/, max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },;
      [setOpenProp, open];
    );
;
    // Helper to toggle the sidebar.;
    const toggleSidebar = React.useCallback(() => {;
      return isMobile;
        ? setOpenMobile((open) => !open);
        :setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);
;
    // Adds a keyboard shortcut to toggle the sidebar.;
    React.useEffect(() => {;
      const handleKeyDown = (event:KeyboardEvent) => {;
        if (;
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&;
          (event.metaKey || event.ctrlKey);
        ) {;
          event.preventDefault();
          toggleSidebar();
        }
      }
;
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
;
    // We add a state so that we can do data-state="expanded" or "collapsed".;
    // This makes it easier to style the sidebar with Tailwind classes.;
    const state = open ? "expanded" :"collapsed" as SidebarState;
;
    const contextValue = React.useMemo(;
      ():SidebarContextType => ({;
        state,;
        open,;
        setOpen,;
        isMobile,;
        openMobile,;
        setOpenMobile,;
        toggleSidebar}),;
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar];
    );
;
    return (;
      <SidebarContext.Provider value={contextValue}>;
        <TooltipProvider delayDuration={0}>;
          <div;
              style={;
              {;
                "--sidebar-width":"16rem",;
                "--sidebar-width-icon":"3rem",;
                ...style} as CSSProperties;
              }
            className={cn(;
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",;
              className;
            )}
            ref={ref}
            {...props}
          >;            {children}
          </div>;
        </TooltipProvider>;
      </SidebarContext.Provider>;
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";
;
export { SidebarContext } const SidebarContext = React.createContext<SidebarContextType | null> (null) export function useSidebar () : SidebarContextType {
  const context = React.useContext (SidebarContext) if (!context) {
  return context as SidebarContextType 
}open?: boolean onOpenChange?: (open: boolean) => void 
}export const SidebarProvider = React.forwardRef< HTMLDivElement;
SidebarProviderProps > ( ({
  defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props 
}, ref) => {
  const isMobile = useIsMobile () const [openMobile, setOpenMobile] = React.useState (false) //This is the internal state of the sidebar. //We use openProp and setOpenProp for control from outside the component. const [ open, setOpen] = React.useState (defaultOpen) if (setOpenProp) {
  setOpenProp (openState) 
}else {
  setOpen (openState) 
}//This sets the cookie to keep the sidebar state. 
};
[setOpenProp, open]) //Helper to toggle the sidebar. const toggleSidebar = React.useCallback ( () => {
  return isMobile ? setOpenMobile ( (open) => !open) : setOpen ( (open) => !open) 
}, [isMobile, setOpen, setOpenMobile]) //Adds a keyboard shortcut to toggle the sidebar.React.useEffect ( () => {
  const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === SIDEBAR KEYBOARD SHORTCUT && (event.metaKey || event.ctrlKey) ) {
  event.preventDefault () toggleSidebar () 
}
}window.addEventListener ("keydown", handleKeyDown) return () => window.removeEventListener ("keydown", handleKeyDown) 
}, [toggleSidebar]) //We add a state so that we can do data-state="expanded" or "collapsed" . //This makes it easier to style the sidebar with Tailwind classes. const contextValue = React.useMemo ( () : SidebarContextType => ({
  state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar 
});
[state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]) return (<SidebarContext.Provider value= {
  contextValue 
}> <TooltipProvider delayDuration= {
  0 
}> <div) 
}ref= {
  ref 
}{
  ...props 
}> {
  children 
}</div> </TooltipProvider> </SidebarContext.Provider>) 
}) SidebarProvider.displayName = "SidebarProvider" export {
  SidebarContext 
}
      (): SidebarContextType => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar}),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )
    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
              style={
              {
                "--sidebar-width": "16rem",
                "--sidebar-width-icon": "3rem",
                ...style} as CSSProperties
              }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar";

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
)"
SidebarProvider.displayName = "SidebarProvider"
<<<<<<< HEAD
export { SidebarContext }
<<<<<<< HEAD
=======
=======
export { SidebarContext }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export { SidebarContext };
;
export { SidebarContext }
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
