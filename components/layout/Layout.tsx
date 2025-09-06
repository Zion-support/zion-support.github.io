<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Header from '../Header';

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

=======
import React from 'react';

interface LayoutProps {
  children: React.ReactNode,
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({
  children
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
