<<<<<<< HEAD
{children}; </div>)};
=======
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
