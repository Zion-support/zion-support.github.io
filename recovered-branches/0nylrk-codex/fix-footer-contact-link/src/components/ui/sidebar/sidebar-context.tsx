import * as React from "react"
import type { CSSProperties } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import type { SidebarContext as SidebarContextType, SidebarState } from "../sidebar.types"

const SIDEBAR_COOKIE_NAME = null;
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
