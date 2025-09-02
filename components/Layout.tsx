import React from 'react';
import EnhancedHeader from './EnhancedHeader';
import EnhancedFooter from './EnhancedFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <EnhancedHeader />
      <main className='flex-1'>
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
};

export default Layout;