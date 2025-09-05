import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export default function Layout({ 
  title, 
  description, 
  children, 
  keywords, 
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  canonical = "https://ziontechgroup.com"
}: LayoutProps) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords || "AI services, IT solutions, micro SaaS, technology consulting, digital transformation, Zion Tech Group"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}