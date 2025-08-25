<<<<<<< HEAD
import React from 'react';
import { AppHeader } from './AppHeader';
import { Footer } from '@/components/Footer';
=======

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
    </div>
  );
}