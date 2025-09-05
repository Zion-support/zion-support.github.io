<<<<<<< HEAD
import * as React from 'react';
=======
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

<<<<<<< HEAD
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
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
    </div>
  );
}