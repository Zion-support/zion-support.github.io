import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showSidebar = true 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="pt-20">
        {showSidebar ? (
          <div className="flex">
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            <div className="flex-1 ml-80">
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;