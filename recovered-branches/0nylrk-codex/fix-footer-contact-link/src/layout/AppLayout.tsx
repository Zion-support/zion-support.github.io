<<<<<<< HEAD

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;

interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;
}

export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return (
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
      </main>;
      {!hideFooter && <Footer />}
<<<<<<< HEAD

    </div>;
  );
}
<<<<<<< HEAD
;
;
=======

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
