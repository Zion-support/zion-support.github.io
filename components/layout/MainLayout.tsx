import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
=======
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
>>>>>>> origin/main

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Transform your business with our AI services, micro SaaS solutions, and IT infrastructure.',
  keywords = 'AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
=======
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation />
      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>
      <EnhancedFooter />
    </div>
>>>>>>> origin/main
  );
};

export default MainLayout;