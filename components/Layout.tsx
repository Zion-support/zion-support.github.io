<<<<<<< HEAD
import React from 'react';'import Head from 'next/head';'import EnhancedNavigation from './layout/EnhancedNavigation';'import EnhancedFooter from './layout/EnhancedFooter';''interface LayoutProps {children: React.ReactNode;'
=======
<<<<<<< HEAD
import React from 'react';'import Head from 'next/head';'import EnhancedNavigation from './layout/EnhancedNavigation';'import EnhancedFooter from './layout/EnhancedFooter';''interface LayoutProps {children: React.ReactNode;'
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
=======
<<<<<<< HEAD
import: React from 'react';';
import: Head from 'next/head';';
import: EnhancedNavigation from './layout/EnhancedNavigation';';
import: EnhancedFooter from './layout/EnhancedFooter';';
=======
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
>>>>>>> main

interface: LayoutProps {
  children: React.ReactNode;
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
>>>>>>> main
  title?: string;
  description?: string;,
}

<<<<<<< HEAD
const Layout: React.FC<LayoutProps> = ({ 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
children, title = 'Zion Tech Group - Leading Technology Solutions Provider','  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.''}) => {'  return ('
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />"        <meta name="viewport" content="width=device-width, initial-scale=1" />"        <meta name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity" />"        <meta name="author" content="Zion Tech Group" />"        <meta property="og: title" content={title} />"        <meta property="og:description" content={description} />"        <meta property="og:type" content="website" />"        <meta property="og:url" content="https://ziontechgroup.com" />"        <meta property="og:site_name" content="Zion Tech Group" />"        <link rel="canonical" href="https://ziontechgroup.com" />"      </Head>"      <div className="min-h-screen flex flex-col">"        <EnhancedNavigation />"        <main className="flex-grow">"          {children}"        </main>"
<<<<<<< HEAD
=======
=======
  children, 
  title = 'Zion Tech Group',
  description = 'Advanced Technology Solutions'
=======
const: Layout: React.FC<LayoutProps> = ({ 
  childre,n, 
  title: = 'Zion Tech Group - Leading Technology Solutions Provider',';
  description: = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'';
>>>>>>> main
}) => {
  return: (
    <>
      <Head>
        <title>{title}</title>
<<<<<<< HEAD
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
=======
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
      </Head>
      <div: className="min-h-screen flex flex-col">";
        <EnhancedNavigation: />
        <main className="flex-grow">";
          {childre,n}
        </main>
        <EnhancedFooter: />
=======
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>{title}</title>'
        <meta name="description" content={description} />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <div className="min-h-screen flex flex-col">
        <EnhancedNavigation />"
        <main className="flex-grow">{children}</main>
>>>>>>> main
>>>>>>> main
        <EnhancedFooter />
>>>>>>> main
>>>>>>> main
      </div>
    </>
=======
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
>>>>>>> main
  );
};
<<<<<<< HEAD
export default Layout
=======

<<<<<<< HEAD
export default Layout;
=======
<<<<<<< HEAD
export: default Layout;
=======
export default Layout;
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
