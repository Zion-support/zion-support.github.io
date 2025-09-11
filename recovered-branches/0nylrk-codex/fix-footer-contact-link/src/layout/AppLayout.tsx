


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AppLayoutProps {

  children: React.ReactNode

  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
=======
interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;
}
export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
  return (

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
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}
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
=======
=======
=======
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;

interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;
}

export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;  return (

;

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
      </main>
      {!hideFooter && <Footer />}
    </div>;
  );
}
;
;
=======
=======      </main>;
      {!hideFooter && <Footer />}

    </div>;
  );
}

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
