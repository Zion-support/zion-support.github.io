
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
  children: React && React.ReactNode,;
  hideFooter?: boolean;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
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
;
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
