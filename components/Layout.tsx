import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedFooter from './layout/EnhancedFooter';
>>>>>>> origin/main

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
<<<<<<< HEAD
  description = 'Transform your business with our AI services, micro SaaS solutions, and IT infrastructure.',
  keywords = 'AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation'
=======
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
>>>>>>> origin/main
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
<<<<<<< HEAD
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
=======
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <EnhancedNavigation />
        <main className="flex-grow">
          {children}
        </main>
        <EnhancedFooter />
>>>>>>> origin/main
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> origin/main
