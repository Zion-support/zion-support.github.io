<<<<<<< HEAD
import React, { ReactNode } from "react";
;
interface LayoutProps {;
  children: ReactNode;
;
;
const Layout: React.FC<LayoutProps> = ({ children }) => {;
  return (;
    <main className="min-h-screen">;
      {children};
    </main>;
  );
};
;
export default Layout;
;
=======
import React, { ReactNode } from "react",
,
interface LayoutProps {,
  children: ReactNode,
};
,
const Layout: React.FC<LayoutProps> = ({ children }) => {,
  return (,
    <main className="min-h-screen">,
      {children};
    </main>,
  ),
};
,
export default Layout,
,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
