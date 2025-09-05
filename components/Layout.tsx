import React, { ReactNode } from 'react';
interface LayoutProps {_children: ReactNode;}

const Layout: React.FC<LayoutProps> = (_{_children}) => {_return <main className="min-h-screen">{children}</main>;
};

export default Layout;
import React, { ReactNode } from "react";
<<<<<<< HEAD
;
interface LayoutProps {;
  childre:n:ReactNode;
}
;
const:Layout:React.FC<LayoutProps> = ({ children }) => {;
  return (;
    <main className="min-h-screen">;
      {children}
    </main>;
  );
};
;
export default Layout;
=======

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="min-h-screen">{children}</main>;
};

export default Layout;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
