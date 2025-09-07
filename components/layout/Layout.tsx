<<<<<<< HEAD
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
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
  );
}