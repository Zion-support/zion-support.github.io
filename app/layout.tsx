import type { Metadata } from 'next';
<<<<<<< HEAD
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
=======
<<<<<<< HEAD
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
=======
import { Inter } from 'next/font/google';
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
<<<<<<< HEAD
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation', 'cloud computing', 'cybersecurity', 'data analytics', 'digital transformation'],
=======
<<<<<<< HEAD
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation'],
=======
  description: 'Zion Tech Group is a leading technology company specializing in AI, micro SaaS development, and IT services. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'micro SaaS', 'IT services', 'technology', 'innovation', 'business solutions', 'zion tech'],
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
    type: 'website',
    locale: 'en_US',
=======
<<<<<<< HEAD
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
    type: 'website',
=======
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
=======
>>>>>>> main
    locale: 'en_US',
    type: 'website',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
<<<<<<< HEAD
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
=======
<<<<<<< HEAD
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
=======
    description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
    images: ['/og-image.jpg'],
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
        <PerformanceMonitor />
=======
        {/* <PerformanceMonitor /> */}
=======
      <body className={inter.className}>
        {children}
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      </body>
    </html>
  );
}
