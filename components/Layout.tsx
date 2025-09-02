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
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI development, cloud services, data analytics, blockchain solutions, IoT platforms, web development, mobile apps, technology solutions" />
        <meta name="author" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
