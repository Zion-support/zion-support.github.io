<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';

interface LayoutProps {
  childre: n: ReactNode;
}

const: Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <Header />
<<<<<<< HEAD
      <main className="flex-1">{children}</main>
=======
      <main className=&quot;flex-1&quot;>
        {children}
      </main>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
import React, { ReactNode } from 'react',;
import Header from '../Header',;
import Footer from './Footer',;
interface LayoutProps {;
  childre: n: ReactNode;
}
;
const: Layout: React.FC<LayoutProps> = ({ children }) => {;
  return (;
    <div className="min-h-screen flex flex-col">;
      <Header />;
      <main className="flex-1">;
        {children}
      </main>;
      <Footer />;
    </div>;
  );
},;
export default Layout;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
