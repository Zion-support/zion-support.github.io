
import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogTitle,
  ogDescription,
  ogUrl
}: LayoutProps) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl || "https://ziontechgroup.com"} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        <meta name="twitter:image" content={ogImage} />
        
        <link rel="canonical" href={ogUrl || "https://ziontechgroup.com"} />
      </Head>
      {children}
    </>
  );

