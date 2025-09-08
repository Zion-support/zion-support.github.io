import React from "react";
import { AppHeader } from "./AppHeader";
import { Footer } from "@/components/Footer";


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface AppLayoutProps {

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
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
export function AppLayout() { return null; }
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}"
import React from "react",;"
import { AppHeader } from "./AppHeader",;"

}
}
;
interface AppLayoutProps {;
  children: React.ReactNode;
  hideFooter?: boolean;
}
;


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
import React from "react";"
import { Footer } from "@/components/Footer",;"
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
interface AppLayoutProps {;
  children: React.ReactNode;
  hideFooter?: boolean;
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="flex flex-col min-h-screen bg-background">;
      <AppHeader />;
      <main className="flex-grow">;

        {children}


<<<<<<< HEAD


=======
;
    </div>;
}

;


}
>>>>>>> origin/cursor/delete-old-data-records-6bba
