<<<<<<< HEAD
import * as React from "react";
import type { CSSProperties } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types";
;
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
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
        if (setOpenProp) {;
          setOpenProp(openState);
        } else {;
          _setOpen(openState);
        }
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
          >;
=======
import * as React from &quot;react&quot;
import type { CSSProperties } from &quot;react&quot;
import { TooltipProvider } from &quot;@/components/ui/tooltip&quot;
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SidebarContext as SidebarContextType, SidebarState } from &quot;../sidebar.types&quot;

const SIDEBARCOOKIE_NAME = &quot;sidebar:state&quot;
const SIDEBARCOOKIE_MAX_AGE = 60 * 60 * 24 * 7,
const SIDEBARKEYBOARD_SHORTCUT = &quot;b&quot;
const SidebarContext = React.createContext<SidebarContextType | null>(null)

export function useSidebar(): SidebarContextType {const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error(&quot;useSidebar must be used within a SidebarProvider.&quot;)
  }
  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<&quot;div&quot;> {
  defaultOpen?: boolean  open?: boolean,
onOpenChange?: (open: boolean) => void}

export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  SidebarProviderProps
>(_(
    {defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, _...props}, ref) => {const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [open, setOpen] = React.useState(defaultOpen)
    const open = openProp ?? open,
const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === &quot;function&quot; ? value(open) : value        if (setOpenProp) {
          setOpenProp(openState)} else {setOpen(openState)}

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBARCOOKIE_NAME}=${openState}, path=/, max-age=${SIDEBARCOOKIE_MAX_AGE}`      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback_(() => {return isMobile
        ? setOpenMobile(_(open) => !open)
        : setOpen(_(open) => !open)}, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect_(() => {const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBARKEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()}
      }

      window.addEventListener(&quot;keydown&quot;, handleKeyDown)
      return () => window.removeEventListener(&quot;keydown&quot;, handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state=&quot;expanded&quot; or &quot;collapsed&quot;.
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? &quot;expanded&quot; : &quot;collapsed&quot; as SidebarState,
const contextValue = React.useMemo(
      (): SidebarContextType => ({state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar}),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div,
style={
              {
                &quot;--sidebar-width&quot;: &quot;16rem&quot;,
                &quot;--sidebar-width-icon&quot;: &quot;3rem&quot;,
                ...style} as CSSProperties
              }
            className={cn(
              &quot;group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar&quot;,
              className            )}
            ref={ref}
            {_...props}
          >
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            {children}
          </div>;
        </TooltipProvider>;
      </SidebarContext.Provider>;
    );
  }
<<<<<<< HEAD
);
SidebarProvider.displayName = "SidebarProvider";
;
export { SidebarContext }
=======
)
SidebarProvider.displayName = &quot;SidebarProvider&quot;

export {SidebarContext}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
