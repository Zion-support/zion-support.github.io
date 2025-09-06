







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


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


  return (

    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">

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
      </main>;
      {!hideFooter && <Footer />}

    </div>;
  );

}






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


