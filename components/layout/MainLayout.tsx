import React, { useState } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({  children, 
  title = "Zion Tech Group", 
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: MainLayoutProps) {
=======
export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation"
}: LayoutProps) {
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}