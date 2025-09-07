<<<<<<< HEAD
=======
<<<<<<< HEAD
import './globals.css';
=======
>>>>>>> origin/chore/fix-lint-and-merge
import type { Metadata } from 'next';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
<<<<<<< HEAD

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
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    type: 'website',
    locale: 'en_US',
=======

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, micro SaaS development, and IT services. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'micro SaaS', 'IT services', 'technology', 'innovation', 'business solutions', 'zion tech'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
>>>>>>> origin/chore/fix-lint-and-merge
    url: 'https://ziontechgroup.com',
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
    locale: 'en_US',
    type: 'website',
>>>>>>> origin/chore/fix-lint-and-merge
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
  },
<<<<<<< HEAD
=======
  verification: {
    google: 'your-google-verification-code',
  },
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
>>>>>>> origin/chore/fix-lint-and-merge
};
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>{children}</body>
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
<<<<<<< HEAD
=======
        <Header />
        <main>{children}</main>
        <Footer />
>>>>>>> origin/chore/fix-lint-and-merge
      </body>
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
