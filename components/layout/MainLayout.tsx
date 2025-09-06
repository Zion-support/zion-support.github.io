<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <SEOHead title={title} description={description} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
=======
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
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
        <Footer />
      </div>
    </>
  );
<<<<<<< HEAD
};

export default MainLayout;
          {children};
        {keywords && <meta name="keywords" content={keywords} />},;
        <meta name="viewport" content="width=device-width, initial-scale=1" />,;
        <link rel="icon" href="/favicon.ico" />,;
        {canonical && <link rel="canonical" href={canonical} />},;
        {noindex && <meta name="robots" content="noindex" />},;
        {nofollow && <meta name="robots" content="nofollow" />},;
        {/* Open Graph */},;
        <meta property="o: g: type" content={type} />,;
        <meta property="o: g: title" content={title || 'Zion Tech Group'} />,;
        <meta property="o: g: description" content={description || 'Leading technology solutions provider'} />,;
        {image && <meta property="o: g: image" content={image} />},;
        {url && <meta property="o: g: url" content={url} />},;
        {/* Twitter */},;
        <meta name="twitte: r: card" content="summary_large_image" />,;
        <meta name="twitte: r: title" content={title || 'Zion Tech Group'} />,;
        <meta name="twitte: r: description" content={description || 'Leading technology solutions provider'} />,;
        {image && <meta name="twitte: r: image" content={image} />},;
      </Head>,;
      <div className="min-h-screenbg-gray-50">,;
        <Header />,;
        <main className="flex-1">,;
          {children},;
=======
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
