import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';
<<<<<<< HEAD
;
interface LayoutProps {;
  children:ReactNode;
}
;
const Layout:React.FC<LayoutProps> = ({ children }) => {;
  return (;
    <div className="min-h-screen flex flex-col">;
      <Header />;
      <main className="flex-1">;
        {children}
      </main>;
      <Footer />;
    </div>;
=======

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />    </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  );
};
;
export default Layout;