<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {children}
=======
import React, { useState } from 'react';
      {/* Top Contact Bar */}
      <TopContactBar />
      
      {/* Navigation */}
      <EnhancedNavigation2025 />
      
      {/* Sidebar */}
      <EnhancedSidebar2025 />
      
      {/* Main Content */}
      <main className="relative z-10 pt-32 lg:pt-36 lg:ml-80">
        <div className="min-h-screen">
          {children}
        </div>
>>>>>>> origin/automation/changelog
      </main>
      <Footer />

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group", 
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
=======
<<<<<<< HEAD
import React from 'react;
import Header from './Header;
import Footer from './Footer;
type LayoutProps = {children: React.ReactNode;
};
  children: React.ReactNode}

export: default function Layout() {;

  return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
  "./Footer"import Footer  from "react./Footer,
export default function Layout({ children }: LayoutProps) {;
  return (;
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
>>>>>>> origin/automation-fixes
=======
import EnhancedNavigation2025 from './EnhancedNavigation2025';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      {/* Futuristic Background */}
      {/* Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>

      {/* Enhanced Futuristic Background */}
      <UltraFuturisticBackground2038 intensity="medium" theme="quantum-neon" />

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 text-lg font-semibold">Loading Zion Tech Group</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraAdvancedNavigation2035 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            aria-hidden={!sidebarOpen}
            aria-label="Main navigation menu"
          />
          
          <main 
            id="main" 
            role="main" 
            className="flex-1 pt-24 lg:pt-28 min-h-screen"
            aria-label="Main content"
          >
            {/* Announcement for screen readers when sidebar opens/closes */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="sr-only"
            >
              {sidebarOpen ? 'Sidebar opened' : 'Sidebar closed'}
            </div>
            
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraAdvancedFooter2035 />
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
=======
      <UltraFuturisticBackground2035>
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Top Contact Bar */}
          <TopContactBar />
          
          {/* Navigation */}
          <UltraFuturisticNavigation2035 />
          
          {/* Sidebar and Main Content */}
          <div className="flex">
            <EnhancedSidebar2025 
              isOpen={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            
            <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
              {children}
            </main>
          </div>
          
          {/* Footer */}
          <UltraFuturisticFooter2035 />
        </div>
      </UltraFuturisticBackground2035>
    </div>
  );
}
>>>>>>> origin/automation/changelog
