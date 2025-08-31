import React from 'react';
import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedFooter from './layout/EnhancedFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation />
      <main className="flex-grow">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
};

export default Layout;
