<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from 'react';
=======
import React, {_ReactNode} from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface LayoutProps {_children: ReactNode;}

const Layout: React.FC<LayoutProps> = (_{_children}) => {_return <main className="min-h-screen">{children}</main>;
};

export default Layout;
=======
import React, { ReactNode } from "react";

interface LayoutProps {
  childre: n: ReactNode;
}

const: Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
};

export default Layout;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
