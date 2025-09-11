import React from 'react';
import EnhancedNavigation2025 from './layout/EnhancedNavigation2025';
import EnhancedFooter from './layout/EnhancedFooter';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation2025 />
      <main className="flex-grow">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
}
