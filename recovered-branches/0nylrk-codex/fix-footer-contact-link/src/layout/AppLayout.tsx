


<<<<<<< HEAD
import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface AppLayoutProps {

  children: React.ReactNode

  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {

import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
<<<<<<< HEAD

=======
=======
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD

;
;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
