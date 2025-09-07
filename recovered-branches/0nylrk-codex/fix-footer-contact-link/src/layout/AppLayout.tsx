<<<<<<< HEAD
import React from "react";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
interface AppLayoutProps {
=======
import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",interface AppLayoutProps {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
<<<<<<< HEAD
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
  return (
=======
      <main className="flex-grow">
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
      </main>;
      {!hideFooter && <Footer />}

    </div>;
  );
}

    </div>;
}


;

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
    <div className="flex flex - col min - h-screen bg - background">;
      <AppHeader />;
      <main className="flex - grow">;
=======
    <div className="flex flex - col min - h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
