import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AppConfig } from '../types/app';

interface AppLayoutProps {
  children?: React.ReactNode;
  config?: AppConfig;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};