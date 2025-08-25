<<<<<<< HEAD
import React from 'react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components/Footer';
=======

<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
=======
import React, { useState } from 'react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideSidebar?: boolean;
}

export function AppLayout({ children, hideFooter = false, hideSidebar = false }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <AppHeader onSidebarToggle={toggleSidebar} />
      
      <div className="flex">
        {/* Sidebar */}
        {!hideSidebar && (
          <Sidebar 
            isOpen={sidebarOpen} 
            onToggle={toggleSidebar} 
          />
        )}
        
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${!hideSidebar ? 'lg:ml-64' : ''}`}>
          {children}
          {!hideFooter && <Footer />}
        </main>
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
    </div>
  );
}