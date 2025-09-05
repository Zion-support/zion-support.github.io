
<<<<<<< HEAD
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
=======
import React from "react";

interface AppLayoutProps {_children: React.ReactNode;
  hideFooter?: boolean;}

export function AppLayout(_{_children, _hideFooter = false}: AppLayoutProps) {_return (
    <div className="flex flex-col min-h-screen bg-background">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <AppHeader />
      <main className=&quot;flex-grow&quot;>
        {children}
      </main>
      {_!hideFooter && <Footer />}
    </div>
  )
}
