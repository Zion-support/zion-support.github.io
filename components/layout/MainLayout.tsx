<<<<<<< HEAD
import React, { useState } from 'react';
=======
import * as React from 'react';
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
import Head from 'next/head';
<<<<<<< HEAD
=======
import Header from '../Header';
import Footer from '../Footer';
<<<<<<< HEAD
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
=======
<<<<<<< HEAD
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation"
}: LayoutProps) {
=======
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  canonical?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
<<<<<<< HEAD
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.",
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development",
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* SEO Meta Tags */}
        <meta name="robots" content={noindex ? "noindex" : nofollow ? "nofollow" : "index, follow"} />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title || 'Zion Tech Group'} />
        <meta property="og:description" content={description || 'Leading technology solutions provider'} />
        <meta property="og:site_name" content="Zion Tech Group" />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || 'Zion Tech Group'} />
        <meta name="twitter:description" content={description || 'Leading technology solutions provider'} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
=======
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}) => {
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
=======
        {canonical && <link rel="canonical" href={canonical} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
      </Head>
      {children}
    </>
  );
}
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
