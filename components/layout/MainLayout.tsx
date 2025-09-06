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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <SEOHead title={title} description={description} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
