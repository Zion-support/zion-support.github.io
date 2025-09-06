



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface AppLayoutProps {

  children: React.ReactNode

  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {

import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
=======
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">


=======
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;

interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;
}

export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
      </main>;
      {!hideFooter && <Footer />}

    </div>;
  );
}

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
