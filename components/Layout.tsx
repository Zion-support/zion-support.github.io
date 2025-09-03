import React from 'react';
import Head from 'next/head';
import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedFooter from './layout/EnhancedFooter';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group - AI-Powered Solutions', 
  description = 'Leading provider of AI-powered business solutions, automation services, and digital transformation consulting.' 
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <EnhancedNavigation />
        <main className="flex-grow">
          {children}
        </main>
        <EnhancedFooter />
      </div>
    </>
  );
};

export default Layout;