import type { Metadata } from 'next';
<<<<<<< HEAD
=======
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';

<<<<<<< HEAD
=======
// eslint-disable-next-line react-refresh/only-export-components
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation', 'cloud computing', 'cybersecurity', 'data analytics', 'digital transformation'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Enterprise AI & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className="font-sans">{children}</body>
=======
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <PerformanceMonitor />
      </body>
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
    </html>
  );
}
