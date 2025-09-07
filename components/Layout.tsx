<<<<<<< HEAD
import React, { ReactNode } from 'react';
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e405
import Head from 'next/head';
import { ReactNode } from 'react';

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

<<<<<<< HEAD
<<<<<<< HEAD
export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading provider of AI-powered solutions and digital transformation services.'} />
=======
export default function Layout({ 
=======
const Layout = ({ 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e405
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
>>>>>>> f9d0b57ad6193b4163a8aad07a352af6ffdf5ac9
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
<<<<<<< HEAD
=======

>>>>>>> f9d0b57ad6193b4163a8aad07a352af6ffdf5ac9
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
}