import * as React from "react"
import type {_CSSProperties} from "react"
import type {_SidebarContext as SidebarContextType, _SidebarState} from "../sidebar.types"

const _SIDEBAR_COOKIE_NAME = "sidebar:state"
const _SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const _SIDEBAR_KEYBOARD_SHORTCUT = "b"

const _SidebarContext = React.createContext<SidebarContextType | null>(null)

export function useSidebar(): SidebarContextType {_const _context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")}

  return context as SidebarContextType
}

export interface SidebarProviderProps extends React.ComponentProps<"div"> {_defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (_open: boolean) => void}

export const _SidebarProvider = React.forwardRef<
  HTMLDivElement,
  SidebarProviderProps
>(_(
    {_defaultOpen = true, _open: openProp, _onOpenChange: setOpenProp, _className, _style, _children, _...props}, _ref) => {_const _isMobile = useIsMobile()
    const [openMobile, _setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const _open = openProp ?? _open
    const _setOpen = React.useCallback(_(value: boolean | ((value: boolean) => boolean)) => {
        const _openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)} else {_setOpen(openState)}

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${_SIDEBAR_COOKIE_NAME}=${_openState}; path=/; max-age=${_SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const _toggleSidebar = React.useCallback__(() => {_return isMobile
        ? setOpenMobile(_(open) => !open)
        : setOpen(_(open) => !open)}, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect__(() => {_const _handleKeyDown = (_event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()}
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const _state = open ? "expanded" : "collapsed" as SidebarState

    const _contextValue = React.useMemo(
      (): SidebarContextType => ({_state, _open, _setOpen, _isMobile, _openMobile, _setOpenMobile, _toggleSidebar}),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={_contextValue}>
        <TooltipProvider delayDuration={_0}>
          <div
              style={_{
                "--sidebar-width": "16rem", _"--sidebar-width-icon": "3rem", _...style} as CSSProperties
              }
            className={_cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", _className
            )}
            ref={_ref}
            {_...props}
          >
            {_children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

export {_SidebarContext}
