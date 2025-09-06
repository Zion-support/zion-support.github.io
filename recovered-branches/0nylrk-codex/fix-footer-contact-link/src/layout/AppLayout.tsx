
<<<<<<< HEAD
import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
=======
import React from "react",
<<<<<<< HEAD
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
=======
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface AppLayoutProps {

  children: React.ReactNode

  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
<<<<<<< HEAD
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
=======
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;
interface AppLayoutProps {;
  children: React.ReactNode;
  hideFooter?: boolean;
}
;
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {;
  return (;
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;