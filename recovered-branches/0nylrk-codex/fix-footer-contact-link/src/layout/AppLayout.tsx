<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
interface AppLayoutProps {
  children: React.ReactNode,
  hideFooter?: boolean
}

  children: React.ReactNode

  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from "react";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface AppLayoutProps {

import React from "react",
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";
import { AppHeader } from "./AppHeader",
import { Footer } from "@/components/Footer",interface AppLayoutProps {

<<<<<<< HEAD
  children: React.ReactNode;
=======
<<<<<<< HEAD
  children: React.ReactNode;
  hideFooter?: boolean;

=======
  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
<<<<<<< HEAD
=======

import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="flex flex-col min-h-screen bg-background">

      <main className="flex-grow">

<<<<<<< HEAD
}
=======
<<<<<<< HEAD
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;

interface AppLayoutProps {;
  children: React && React.ReactNode,;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  hideFooter?: boolean;

    <div className="flex flex-col min-h-screen bg-background">

      <main className="flex-grow">

}
<<<<<<< HEAD

import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;

interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;

}
  return (

      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>;
  );

}
<<<<<<< HEAD
import React from "react";"
import { Footer } from "@/components/Footer",;"
=======

import React from "react",;
import { AppHeader } from "./AppHeader",;

import { Footer } from "@/components/Footer",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
  return (

import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
interface AppLayoutProps {;
  children:React.ReactNode,;
  hideFooter?:boolean;
}
;
<<<<<<< HEAD
export function AppLayout() { return null; }
=======
export function AppLayout({ children, hideFooter = false } AppLayoutProps) {;
  return (;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
<<<<<<< HEAD
}"
import React from "react",;"
import { AppHeader } from "./AppHeader",;"
<<<<<<< HEAD
=======
import { Footer } from "@/components/Footer",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
}
<<<<<<< HEAD
}
;
=======
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface AppLayoutProps {;
  children: React.ReactNode;
  hideFooter?: boolean;
}
;
<<<<<<< HEAD

=======
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {;
  return (;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;

interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;

}
  return (
<<<<<<< HEAD

      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>;
  );

}
<<<<<<< HEAD
import React from "react";"
import { Footer } from "@/components/Footer",;"
=======

import React from "react",;
import { AppHeader } from "./AppHeader",;

import { Footer } from "@/components/Footer",;
>>>>>>> origin/chore/fix-lint-and-merge
;
interface AppLayoutProps {;
  children:React.ReactNode,;
  hideFooter?:boolean;
}
;
export function AppLayout() { return null; }
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}"
import React from "react",;"
import { AppHeader } from "./AppHeader",;"
<<<<<<< HEAD
=======
import { Footer } from "@/components/Footer",;
>>>>>>> origin/chore/fix-lint-and-merge
interface AppLayoutProps {;
  children: React.ReactNode;
  hideFooter?: boolean;
}
;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;

        {children}
<<<<<<< HEAD

;
    </div>;
}

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    </div>;
}


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;

import React from './react';
import { AppHeader } from './AppHeader';
<<<<<<< HEAD

import { Footer } from '@/components / Footer';
interface AppLayoutProps {}
=======
import { Footer } from '@/components / Footer';
interface AppLayoutProps {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  children: React.ReactNode,
  hide_footer?: boolean;
}
export /**;
 * AppLayout - Function description;
 */
<<<<<<< HEAD

=======
function AppLayout() {
  return (
    <div className="flex flex - col min - h-screen bg - background">;
      <AppHeader />;
      <main className="flex - grow">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {children}
      </main>;
      {!hide_footer && <Footer />}
    </div>);
<<<<<<< HEAD
}
=======
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
      </main>;
      {!hideFooter && <Footer />}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

;
    </div>;
}

;

<<<<<<< HEAD
import React from './react';
import { AppHeader } from './AppHeader';

import { Footer } from '@/components / Footer';
interface AppLayoutProps {}
  children: React.ReactNode,
  hide_footer?: boolean;
}
export /**;
 * AppLayout - Function description;
 */

        {children}
      </main>;
      {!hide_footer && <Footer />}
    </div>);
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
