<<<<<<< HEAD
import React, { ReactNode } from "react";
;
interface LayoutProps {; children: ReactNode};
;
const Layout: React.FC<LayoutProps> = ({ children }) = > {; return (; <main className = "min-h-screen">; {children}; </main>; )};
;
export default Layout;
;
=======
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
};

export default Layout;
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
