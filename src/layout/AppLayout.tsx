<<<<<<< HEAD
import React from 'react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components/Footer';
=======

import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
<<<<<<< HEAD

interface AppLayoutProps {
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {children ?? <Outlet />}
      </main>
      {!hideFooter && <Footer />}
=======
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
}