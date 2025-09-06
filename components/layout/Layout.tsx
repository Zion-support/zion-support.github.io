import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}