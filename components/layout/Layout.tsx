<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <Header />
      <main className=&quot;flex-1&quot;>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
=======
{children}; </div>)};
>>>>>>> cursor/automate-test-improve-and-merge-code-948c
