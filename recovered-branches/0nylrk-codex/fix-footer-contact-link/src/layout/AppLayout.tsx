
<<<<<<< HEAD
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;
;
interface AppLayoutProps {;
  children:React.ReactNode,;
  hideFooter?:boolean;
}
;
export function AppLayout({ children, hideFooter = false } AppLayoutProps) {;
  return (;
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
      </main>;
      {!hideFooter && <Footer />}
    </div>;
  ),;
=======
import React from "react",
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",interface AppLayoutProps {
  children: React.ReactNode,
  hideFooter?: boolean
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className=&quot;flex flex-col min-h-screen bg-background&quot;>
import React from "react";

interface AppLayoutProps {_children: React.ReactNode;
  hideFooter?: boolean;}

export function AppLayout(_{_children, _hideFooter = false}: AppLayoutProps) {_return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className=&quot;flex-grow&quot;>
        {children}
      </main>
      {_!hideFooter && <Footer />}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
