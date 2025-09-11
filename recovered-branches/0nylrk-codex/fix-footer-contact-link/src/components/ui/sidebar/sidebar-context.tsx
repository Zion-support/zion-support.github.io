
import * as React from "react"
import type { CSSProperties } from "react"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {TooltipProvider} from "@/components/ui/tooltip"
import {useIsMobile} from "@/hooks/use-mobile"
import {cn} from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"

<<<<<<< HEAD
<<<<<<< HEAD
;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

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
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
=======
  return context as SidebarContextType
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}


  return context as SidebarContextType
}

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  default_open?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
<<<<<<< HEAD
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
  SidebarProviderProps;
>(;
  (;
    {;
  return context as SidebarContextType
}

  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const SidebarProvider = React.forwardRef<;
  HTMLDivElement;
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  HTMLDivElement;
  SidebarProviderProps;
>(;
  (;
    {;
      defaultOpen = true;




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  SidebarProviderProps
>(
  (
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      defaultOpen = true;
      open: openProp
      onOpenChange: setOpenProp
      className;
      style;
      children;
      ...props
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }


<<<<<<< HEAD
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
        const open_state = typeof value === "function" ? value (open) : value;
        // Check condition
if ( {) {
  $2
}
          setOpenProp (open_state);
        } else {
          _setOpen (open_state);
        }





>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
<<<<<<< HEAD
        }
      }
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

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


<<<<<<< HEAD
<<<<<<< HEAD
        }
      }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        }
      }

<<<<<<< HEAD
=======

        }
      }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed" as SidebarState
    const contextValue = React.useMemo(
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      (): SidebarContextType => ({
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      (): SidebarContextType => ({
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // This is the internal state of the sidebar.;
    // We use openProp and setOpenProp for control from outside the component.;
    const [_open, _setOpen] = React && React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React && React.useCallback(;
      (value: boolean | ((value: boolean) => boolean)) => {;
        const openState = typeof value === "function" ? value(open) : value;
<<<<<<< HEAD
      defaultOpen = true,;
      open:openProp,;
      onOpenChange:setOpenProp,;
      className,;
      style,;
      children,;
      ...props;
    },;
    ref;
  ) => {;
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);
;
    // This is the internal state of the sidebar.;
    // We use openProp and setOpenProp for control from outside the component.;
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(;
      (value:boolean | ((value:boolean) => boolean)) => {;
        const openState = typeof value === "function" ? value(open) :value;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (setOpenProp) {;
          setOpenProp(openState);
        } else {;
          _setOpen(openState);
        }
<<<<<<< HEAD
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar];
    );
=======

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

      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar];
    );


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"
=======
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar";

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

);
SidebarProvider && SidebarProvider.displayName = "SidebarProvider";
export { SidebarContext }
=======
)
SidebarProvider.displayName = "SidebarProvider"
export { SidebarContext }

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD



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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
