<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/AppLayout.tsx


<<<<<<< HEAD
import React from "react",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
<<<<<<< HEAD
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
=======
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface AppLayoutProps {

  children: React.ReactNode

  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
<<<<<<< HEAD

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/AppLayout.tsx
import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;

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
=======
<<<<<<< HEAD
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
<<<<<<< HEAD
      </main>;
      {!hideFooter && <Footer />}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/AppLayout.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/AppLayout.tsx
    </div>;
<<<<<<< HEAD
  );
<<<<<<< HEAD

}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/AppLayout.tsx

=======
}

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/layout/AppLayout.tsx
=======
      </main>
      {!hideFooter && <Footer />}
    </div>;
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
