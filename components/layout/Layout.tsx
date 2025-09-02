<<<<<<< HEAD
import React from 'react';\nimport Header from './Header';\nimport Footer from './Footer';''type LayoutProps = {children: React.ReactNode;
=======
React from
  'react';
import Header from
  './Header';'import Footer from
  './Footer';''type LayoutProps = {children: React.ReactNode;
>>>>>>> origin/main
};

export default function Layout({ children }: LayoutProps) {
  return (
<div className="min-h-screen flex flex-col">"      <Header />"      <main className="flex-1 pt-16">"        {children}"      </main><Footer />
    </div>
  );
}