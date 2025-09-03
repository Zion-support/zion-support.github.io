import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Zion Tech Group provides cutting-edge AI services, cloud infrastructure, cybersecurity, and digital transformation solutions for modern businesses.',
  keywords = 'AI services, cloud computing, cybersecurity, digital transformation, IT consulting, technology solutions'
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a1a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navigation */}
        <Navigation />
        
        {/* Sidebar Toggle Button (Mobile) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-20 right-4 z-40 md:hidden bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;