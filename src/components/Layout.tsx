import React, { useState } from 'react';
import { SEO } from './SEO';
import SimpleNavigation from './SimpleNavigation';
import { SiteFooter } from './SiteFooter';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  showSidebar = false
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
        type={type}
      />
      
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <SimpleNavigation />
        
        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          {showSidebar && (
            <Sidebar 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
          )}
          
          {/* Page Content */}
          <main className={`flex-1 ${showSidebar ? 'lg:ml-80' : ''}`}>
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <SiteFooter />
      </div>
    </>
  );
};

export default Layout;