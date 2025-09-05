import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

<<<<<<< HEAD
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
=======
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
    </div>
  );
}