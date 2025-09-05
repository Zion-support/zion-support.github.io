import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  children: React.ReactNode;
}

export default function Layout({ 
  title, 
  description, 
  keywords, 
  canonical, 
  children 
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}