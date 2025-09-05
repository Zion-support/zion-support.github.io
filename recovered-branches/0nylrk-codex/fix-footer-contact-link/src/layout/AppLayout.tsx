
<<<<<<< HEAD
import React from "react",
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",
=======
import React from &quot;react&quot;;
import { AppHeader } from &quot;./AppHeader&quot;;
import { Footer } from &quot;@/components/Footer&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface AppLayoutProps {
  children: React.ReactNode,
  hideFooter?: boolean
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className=&quot;flex flex-col min-h-screen bg-background&quot;>
      <AppHeader />
      <main className=&quot;flex-grow&quot;>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}
