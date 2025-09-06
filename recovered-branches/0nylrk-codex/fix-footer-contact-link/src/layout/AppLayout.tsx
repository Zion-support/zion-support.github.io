
import React from "react",
<<<<<<< HEAD
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
=======
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
}
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
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
