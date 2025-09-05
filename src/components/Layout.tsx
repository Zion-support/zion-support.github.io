<<<<<<< HEAD
import _React from 'react'; import Head from 'next/head'; import { AppHeader } from '../layout/AppHeader'; import { FuturisticFooter } from './FuturisticFooter'; interface LayoutProps { children: _React.ReactNode} const Layout: _React.FC<LayoutProps> = ({ children }) => { return ( <> <Head> <meta name="viewport" content="width=device-width,initial-scale=1" /> <meta name="theme-color" content="#0ea5e9" /> <link rel="icon" href="/favicon.ico" /> </Head> <div className="min-h-screen bg-slate-50"> <AppHeader /> <main className="flex-1"> {children}; </main> <FuturisticFooter /> </div> </> )}; export default Layout;'; </LayoutProps>;';';
=======
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation"
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
>>>>>>> main
