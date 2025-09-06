
<<<<<<< HEAD
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
interface AppLayoutProps {

  children: React.ReactNode

  hideFooter?: boolean
}
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
<<<<<<< HEAD
=======

import React from "react";
import {AppHeader} from "./AppHeader";
import {Footer} from "@/components/Footer";
=======
>>>>>>> main
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
<<<<<<< HEAD
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


>>>>>>> main
=======
import React from "react",;
import { AppHeader } from "./AppHeader",;
import { Footer } from "@/components/Footer",;
<<<<<<< HEAD
interface AppLayoutProps {;
  children: React.ReactNode;
  hideFooter?: boolean;
}
;
export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {;
  return (;
=======

interface AppLayoutProps {;
  children: React && React.ReactNode,;
  hideFooter?: boolean;
}

export function AppLayout(): any ({ children, hideFooter = false }: AppLayoutProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
>>>>>>> main
    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;
        {children}
<<<<<<< HEAD
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
=======
      </main>;
      {!hideFooter && <Footer />}

    </div>;
  );
}

=======

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
