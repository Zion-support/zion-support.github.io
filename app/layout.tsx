'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Helmet>
          <title>Zion Tech Group - Advanced AI & IT Solutions</title>
          <meta name="description" content="Leading provider of AI services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology." />
          <meta name="keywords" content="AI services, IT solutions, micro SAAS, artificial intelligence, cloud computing, cybersecurity, data analytics" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
          <meta property="og:description" content="Leading provider of AI services, IT solutions, and micro SAAS platforms." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
          <meta name="twitter:description" content="Leading provider of AI services, IT solutions, and micro SAAS platforms." />
        </Helmet>
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}