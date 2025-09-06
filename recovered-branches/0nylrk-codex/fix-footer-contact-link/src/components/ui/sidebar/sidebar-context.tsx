
<<<<<<< HEAD
import * as React from "react"
import type { CSSProperties } from "react"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


import { TooltipProvider } from "@/components/ui/tooltip""
import { useIsMobile } from "@/hooks/use-mobile""
import { cn } from "@/lib/utils""
=======

import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"





<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const SIDEBAR_COOKIE_NAME = "sidebar:state"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const SIDEBAR_COOKIE_NAME = "sidebar:state"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
=======
"
const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const SIDEBAR_KEYBOARD_SHORTCUT = "b"
const SidebarContext = React.createContext<SidebarContextType | null>(null)
export function useSidebar(): SidebarContextType {}
  const context = React.useContext(SidebarContext)
  if (!context) {"
    throw new Error("useSidebar must be used within a SidebarProvider.")
<<<<<<< HEAD
  }
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as React from './react';
import type { CSSProperties } from './react';
import { TooltipProvider } from '@/components / ui / tooltip';
import { useIsMobile } from '@/hooks / use - mobile';
import { cn } from '@/lib / utils';
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;
=======
  };
";
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;"
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
<<<<<<< HEAD
const SidebarContext = React.create_context < SidebarContextType | null>(null);
export function use_sidebar (): SidebarContextType {
  const context = React.useContext (SidebarContext);
  // Check condition
if ( {) {
  $2
}
    throw new Error ("use_sidebar must be used within a SidebarProvider.");
  }
  return context as SidebarContextType;

}


  return context as SidebarContextType
=======



  return context as SidebarContextType;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface SidebarProviderProps extends React.ComponentProps<"div"> {
=======

"
export interface SidebarProviderProps extends React.ComponentProps<"div"> {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  default_open?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export const SidebarProvider = React.forwardRef<;
  HTMLDivElement;
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
<<<<<<< HEAD
<<<<<<< HEAD
=======

";
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;"
=======

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React && React.createContext<SidebarContextType | null>(null);
export function useSidebar(): any (): SidebarContextType {;
  const context = React && React.useContext(SidebarContext);
<<<<<<< HEAD
  if (!context) {;"
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context as SidebarContextType;
}"
=======
  if (!context) {;
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context as SidebarContextType;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface SidebarProviderProps extends React && React.ComponentProps<"div"> {;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

<<<<<<< HEAD

  HTMLDivElement;

=======
export const SidebarProvider = React && React.forwardRef<;

  HTMLDivElement;
  HTMLDivElement;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  SidebarProviderProps;
>(;
  (;
    {;
<<<<<<< HEAD


  return context as SidebarContextType;
}
"
export interface SidebarProviderProps extends React.ComponentProps<"div"> {};
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}



      defaultOpen = true;

<<<<<<< HEAD
=======
      defaultOpen = true;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

<<<<<<< HEAD
<<<<<<< HEAD

=======
export const SidebarProvider = React.forwardRef<;
  HTMLDivElement;
export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      defaultOpen = true;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  SidebarProviderProps
>(
  (
    {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      defaultOpen = true;
      open: openProp
      onOpenChange: setOpenProp
      className;
      style;
      children;
      ...props
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  SidebarProviderProps;
>(
  (
    {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
<<<<<<< HEAD
      ...props
<<<<<<< HEAD
    },
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    ref
  ) => {
=======
      ...props;
    ref;
  ) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open;
    const setOpen = React.useCallback(

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





<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
=======



      (value: boolean | ((value: boolean) => boolean)) => {"
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          setOpenProp(openState)
        } else {}
          _setOpen(openState)
        }

<<<<<<< HEAD
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


<<<<<<< HEAD

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}, path=/, max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      }
      [setOpenProp, open]
    )
    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {}
      return isMobile;
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])
    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {}
      const handleKeyDown = (event: KeyboardEvent) => {}
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey |event.ctrlKey)
        ) {}
          event.preventDefault()
          toggleSidebar()
<<<<<<< HEAD
<<<<<<< HEAD
        }
      }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
=======
        }
      }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
  SidebarProviderProps
>(
  (
    {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  SidebarProviderProps
>(
  (
    {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      defaultOpen = true;
  SidebarProviderProps
>(
  (
    {

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





      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }




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



;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        // This sets the cookie to keep the sidebar state.;
=======
;
        // This sets the cookie to keep the sidebar state.;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        }
      }

        }
      }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        }
      }

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      window.addEventListener("keydown", handleKeyDown)
=======


        }
      }



        }
      }

"
      window.addEventListener("keydown", handleKeyDown)"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])"
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes."
    const state = open ? "expanded" : "collapsed" as SidebarState;
    const contextValue = React.useMemo(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      (): SidebarContextType => ({
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        // This sets the cookie to keep the sidebar state.;
=======



        // This sets the cookie to keep the sidebar state.;`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
      (): SidebarContextType => ({}
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
<<<<<<< HEAD
=======

      defaultOpen = true,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      defaultOpen = true,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      (value:boolean | ((value:boolean) => boolean)) => {;"
        const openState = typeof value === "function" ? value(open) :value;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        if (setOpenProp) {;
          setOpenProp(openState);
        } else {;
          _setOpen(openState);
        }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        state;
        open;
        set_open;
        is_mobile;
        open_mobile;
        setOpenMobile;
<<<<<<< HEAD

      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar];
    );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


    return (
      <SidebarContext && SidebarContext.Provider value={contextValue}>;
        <TooltipProvider delayDuration={0}>;
<<<<<<< HEAD
          <div;
              style={}
              {"
                "--sidebar-width": "16rem""
                "--sidebar-width-icon": "3rem"
                ...style} as CSSProperties;
=======
          <div
              style={
              {
                "--sidebar-width": "16rem"
                "--sidebar-width-icon": "3rem"
                ...style} as CSSProperties
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              }
            className={cn(


<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className
=======
              className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",

              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar"
              className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
)
SidebarProvider.displayName = "SidebarProvider"
=======
export { SidebarContext }

export { SidebarContext };
;
export { SidebarContext }
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



=======

);
SidebarProvider && SidebarProvider.displayName = "SidebarProvider";

export { SidebarContext }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        toggle_sidebar});
      [state, open, set_open, is_mobile, open_mobile, setOpenMobile, toggle_sidebar]);
    return (
      <SidebarContext.Provider value={context_value}>;
        <TooltipProvider delay_duration={0}>;
          <div;
<<<<<<< HEAD
              style={}
              {"
                "--sidebar - width": "16rem";"
                "--sidebar - width - icon": "3rem";
                ...style} as CSSProperties;
              }
            className={cn ("
=======
              style={
              {
                "--sidebar - width": "16rem";
                "--sidebar - width - icon": "3rem";
                ...style} as CSSProperties;
              }
            className={cn (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
);"
SidebarProvider.display_name = "SidebarProvider";
export { SidebarContext }

"
=======
);
SidebarProvider.display_name = "SidebarProvider";
export { SidebarContext }



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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",;
              className;
            )}
            ref={ref}
            {...props}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export { SidebarContext };
;
export { SidebarContext }
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
