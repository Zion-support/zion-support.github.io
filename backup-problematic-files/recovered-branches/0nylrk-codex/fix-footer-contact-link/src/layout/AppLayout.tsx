<<<<<<< HEAD
import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;
}
export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
      </main>;
      {!hideFooter && <Footer />}
    </div>;
<<<<<<< HEAD
  );
}
import React from './react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components / Footer';
interface AppLayoutProps {
  children: React.ReactNode,
  hide_footer?: boolean;
}
export /**
 * AppLayout - Function description
 */
function AppLayout() {
  return (
    <div className="flex flex - col min - h-screen bg - background">;
      <AppHeader />;
      <main className="flex - grow">;
        {children}
      </main>;
      {!hide_footer && <Footer />}
    </div>);
}
=======
  ),;}
 interface AppLayoutProps {
  children: React.ReactNode;
hideFooter?: boolean 
}export function AppLayout ({
  children, hideFooter = false 
}: AppLayoutProps) {
  return (<div className="flex flex-col min-h-screen bg-background" > flex-grow" > {
  children 
}</main> {
  !hideFooter && <Footer /> 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
