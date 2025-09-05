import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AccessibilityEnhancer from './AccessibilityEnhancer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AccessibilityEnhancer />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;