<<<<<<< HEAD
import * as React from &quot;react&quot;
import type { CSSProperties } from &quot;react&quot;
import { TooltipProvider } from &quot;@/components/ui/tooltip&quot;
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SidebarContext as SidebarContextType, SidebarState } from &quot;../sidebar.types&quot;

const SIDEBAR_COOKIE_NAME = &quot;sidebar:state&quot;
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_KEYBOARD_SHORTCUT = &quot;b&quot;
=======
import * as React from "react"
import type {_CSSProperties} from "react"
import type {_SidebarContext as SidebarContextType, _SidebarState} from "../sidebar.types"

const _SIDEBAR_COOKIE_NAME = "sidebar:state"
const _SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const _SIDEBAR_KEYBOARD_SHORTCUT = "b"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _SidebarContext = React.createContext<SidebarContextType | null>(null)

export function useSidebar(): SidebarContextType {_const _context = React.useContext(SidebarContext)
  if (!context) {
<<<<<<< HEAD
    throw new Error(&quot;useSidebar must be used within a SidebarProvider.&quot;)
  }
=======
    throw new Error("useSidebar must be used within a SidebarProvider.")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return context as SidebarContextType
}

<<<<<<< HEAD
export interface SidebarProviderProps extends React.ComponentProps<&quot;div&quot;> {
  defaultOpen?: boolean
=======
export interface SidebarProviderProps extends React.ComponentProps<"div"> {_defaultOpen?: boolean
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === &quot;function&quot; ? value(open) : value
=======
    const _open = openProp ?? _open
    const _setOpen = React.useCallback(_(value: boolean | ((value: boolean) => boolean)) => {
        const _openState = typeof value === "function" ? value(open) : value
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        if (setOpenProp) {
          setOpenProp(openState)} else {_setOpen(openState)}

        // This sets the cookie to keep the sidebar state.
<<<<<<< HEAD
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}, path=/, max-age=${SIDEBAR_COOKIE_MAX_AGE}`
=======
        document.cookie = `${_SIDEBAR_COOKIE_NAME}=${_openState}; path=/; max-age=${_SIDEBAR_COOKIE_MAX_AGE}`
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

      window.addEventListener(&quot;keydown&quot;, handleKeyDown)
      return () => window.removeEventListener(&quot;keydown&quot;, handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state=&quot;expanded&quot; or &quot;collapsed&quot;.
    // This makes it easier to style the sidebar with Tailwind classes.
<<<<<<< HEAD
    const state = open ? &quot;expanded&quot; : &quot;collapsed&quot; as SidebarState
=======
    const _state = open ? "expanded" : "collapsed" as SidebarState
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _contextValue = React.useMemo(
      (): SidebarContextType => ({_state, _open, _setOpen, _isMobile, _openMobile, _setOpenMobile, _toggleSidebar}),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={_contextValue}>
        <TooltipProvider delayDuration={_0}>
          <div
<<<<<<< HEAD
              style={
              {
                &quot;--sidebar-width&quot;: &quot;16rem&quot;,
                &quot;--sidebar-width-icon&quot;: &quot;3rem&quot;,
                ...style} as CSSProperties
              }
            className={cn(
              &quot;group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar&quot;,
              className
=======
              style={_{
                "--sidebar-width": "16rem", _"--sidebar-width-icon": "3rem", _...style} as CSSProperties
              }
            className={_cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
SidebarProvider.displayName = &quot;SidebarProvider&quot;

export {_SidebarContext}
