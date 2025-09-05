<<<<<<< HEAD
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="min-h-screen">{children}</main>;
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
  );
};

export default Layout;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
