<<<<<<< HEAD
import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",
=======
import React from "react";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface AppLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}
<<<<<<< HEAD
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
<<<<<<< HEAD
      <main className="flex-grow">
}

=======
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
  return (
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      </main>;
      {!hideFooter && <Footer />}

    </div>;
  );
}

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </div>;
}


;

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
