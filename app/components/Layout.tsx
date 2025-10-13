import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationEnhanced from './NavigationEnhanced';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationEnhanced onSidebarToggle={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main id="main-content" className="relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;