
import React from 'react';
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

interface MainLayoutProps {
  title: string,
  description: string;
  children: React.ReactNode;
  keywords?: string;
  canonical?: string;
}

export default function MainLayout({ 
  title, 
  description, 
  children, 
  keywords = "AI solutions, IT services, micro SaaS, technology consulting",
  canonical 
}: MainLayoutProps) {

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
