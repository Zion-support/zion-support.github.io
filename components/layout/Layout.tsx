<<<<<<< HEAD
import React from 'react';'import Header from './Header';'import Footer from './Footer';''type LayoutProps = {
=======
import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col">"      <Header />"      <main className="flex-1 pt-16">"        {children}"      </main>
=======
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      <Footer />
    </div>
  );
}