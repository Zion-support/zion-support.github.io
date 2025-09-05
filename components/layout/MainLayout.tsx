import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
  canonical?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;