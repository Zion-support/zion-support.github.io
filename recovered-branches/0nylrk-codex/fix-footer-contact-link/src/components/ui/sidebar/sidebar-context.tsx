import * as React from "react"
import type { CSSProperties } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
<<<<<<< HEAD
import type { SidebarContext as SidebarContextTypeSidebarState } from "../sidebar.types"
=======
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"
>>>>>>> origin/auto/autonomy-17186719616

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

export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
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
<<<<<<< HEAD
    const [openMobilesetOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open_setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(

=======
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
>>>>>>> origin/auto/autonomy-17186719616
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
<<<<<<< HEAD
      [setOpenPropen]
=======
      [setOpenProp, open]
>>>>>>> origin/auto/autonomy-17186719616
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
<<<<<<< HEAD
    }[isMobilesetOpenMobile])
=======
    }, [isMobile, setOpen, setOpenMobile])
>>>>>>> origin/auto/autonomy-17186719616

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

<<<<<<< HEAD
      window.addEventListener("keydown"handleKeyDown)
      return () => window.removeEventListener("keydown"handleKeyDown)
    }[toggleSidebar])
=======
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])
>>>>>>> origin/auto/autonomy-17186719616

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed" as SidebarState

    const contextValue = React.useMemo(
      (): SidebarContextType => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
<<<<<<< HEAD
        toggleSidebar}),
      [stateopensetOpenisMobileopenMobilesetOpenMobiletoggleSidebar]
=======
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
>>>>>>> origin/auto/autonomy-17186719616
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
              style={
              {
                "--sidebar-width": "16rem",
                "--sidebar-width-icon": "3rem",
<<<<<<< HEAD
                ...style} as CSSProperties
=======
                ...style,
              } as CSSProperties
>>>>>>> origin/auto/autonomy-17186719616
              }
            className={cn(
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
