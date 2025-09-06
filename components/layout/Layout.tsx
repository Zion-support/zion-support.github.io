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

<<<<<<< HEAD
export default Layout;

=======
export default Layout;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
