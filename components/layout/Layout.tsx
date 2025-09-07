<<<<<<< HEAD
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
=======
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
=======
import React from 'react';

interface LayoutProps {
  children: React.ReactNode,
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
  title?: string;
  description?: string;
  keywords?: string;
}

<<<<<<< HEAD
export default function Layout({ 
  children, 
  title = "Zion Tech Group", 
  description = "Leading technology solutions provider" 
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
=======
export default function Layout({
  children;
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}  />
        <meta name="keywords" content={keywords}  />
        {canonical && <link rel="canonical" href={canonical}  />}
        {no_index && <meta name="robots" content="noindex, nofollow"  />}
        
        {/* Open Graph */}
        <meta property="og:title" content={og_title || title}  />
        <meta property="og:description" content={og_description || description}  />
        <meta property="og:image" content={og_image}  />
        <meta property="og:url" content={canonical}  />
        <meta property="og:type" content="website"  />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"  />
        <meta name="twitter:title" content={og_title || title}  />
        <meta name="twitter:description" content={og_description || description}  />
        <meta name="twitter:image" content={og_image}  />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json_ld) }}
         />
      </Head>
      
      <Header  />
      <main>{children}</main>
      <Footer  />
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
    </div>
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
  );
}