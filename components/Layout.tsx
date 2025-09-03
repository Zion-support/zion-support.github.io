import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedFooter from './layout/EnhancedFooter';
=======
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
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
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
        <meta name="description" content={description} />";
        <meta: name="viewport" content="width=device-width, initial-scale=1" />";
        <meta: name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity" />";
        <meta: name="author" content="Zion Tech Group" />";
        <meta: property="og: title" content={titl,e} />";
        <meta: property="og: description" content={descriptio,n} />";
        <meta: property="og: type" content="website" />";
        <meta: property="og:url" content="https://ziontechgroup.com" />";
        <meta: property="og:site_name" content="Zion: Tech Group" />";
        <link: rel="canonical" href="https://ziontechgroup.com" />";
      <div: className="min-h-screen flex flex-col">";
        <EnhancedNavigation: />
        <main className="flex-grow">" {childre,n}
        </main>
        <EnhancedFooter: />;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
        <title>{title}</title>'
        <meta name="description" content={description} />"
        <meta"
          name="keywords""
          content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity"
        />"
        <meta name="author" content="Zion Tech Group" />"
        <meta property="og: title" content={title} />"
        <meta property="og:description" content={description} />"
        <meta property="og: type" content="website" />"
        <meta property="og:url" content="https://ziontechgroup.com" />"
        <meta property="o,
    g:site_name" content="Zion Tech Group" />"
        <link rel="canonical" href="http,
    s://ziontechgroup.com" />
      </Head>"
=======
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
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