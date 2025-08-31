import React from 'react';
import ModernHeader from './ModernHeader';
import ModernFooter from './ModernFooter';
import ModernSidebar from './ModernSidebar';

interface ModernLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ModernHeader />
      
      <div className="flex pt-20">
        {showSidebar && <ModernSidebar />}
        
        <main className={`flex-1 transition-all duration-300 ${showSidebar ? 'lg:ml-80' : ''}`}>
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
      
      <ModernFooter />
    </div>
  );
};

export default ModernLayout;