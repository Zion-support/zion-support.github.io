import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import { Sidebar } from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT services, micro SaaS",
  canonical,
  ogImage,
  noIndex = false
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}