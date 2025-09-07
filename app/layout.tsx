import type { Metadata } from 'next';
<<<<<<< HEAD
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StructuredData, { organizationStructuredData, websiteStructuredData } from './components/StructuredData';

export const "metadata": Metadata = {
}
import React from 'react';'
import './globals.css';'
import type { Metadata } from 'next''
import { Inter } from 'next/font/google''
import './globals.css''
=======
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export const metadata: Metadata = {
<<<<<<< HEAD
  metadataBase: new URL('https://zion.app'),
=======
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation', 'cloud computing', 'cybersecurity', 'data analytics', 'digital transformation'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
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
  "twitter": {
    }
    "card": 'summary_large_image','
    "title": 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions','
    "description": 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.','
    "images": ['/og-image.jpg'],'
    "creator": '@ziontechgroup','
  },
  category: 'technology',
  classification: 'Business Technology Services',
  referrer: 'origin-when-cross-origin',
  title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
<<<<<<< HEAD
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="Organization" data={organizationStructuredData} />
        <StructuredData type="WebSite" data={websiteStructuredData} />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">"
          <main className="container mx-auto px-4 py-8">"
            {children}
          </main>
        </div>
      </body>
    </html>
  );

import type { Metadata } from 'next''
import { Inter } from 'next/font/google''

const inter = Inter({ "subsets": ['latin'] });'


export const "metadata": Metadata = {
  }
  "title": 'Zion Tech Group - Enterprise AI & IT Solutions','
  "description": 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services. Enterprise-grade AI, micro SaaS, and IT solutions.','
  "keywords": 'AI solutions, micro SaaS, IT services, blockchain, cybersecurity, cloud services, business automation, digital transformation, software development, tech consulting','
  "authors": [{ "name": 'Zion Tech Group' }],'
  "openGraph": {
    }
    "title": 'Zion Tech Group - Enterprise AI & IT Solutions','
    "description": 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services.','
    "type": 'website','
    "locale": 'en_US','
  },
  "twitter": {
    }
    "card": 'summary_large_image','

    "title": 'Zion Tech Group - Enterprise AI & IT Solutions','
    "description": 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services.','
  }
}
<<<<<<< HEAD


export default function RootLayout() {
}
return (;
    <html lang="en">"
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">"
          <main className="container mx-auto px-4 py-8">"
            {children}
          </main>
      <body>
        <div className="min-h-screen bg-white">"
          {children}
        </div>
      </body>
    </html>

  )

      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">"
          <main className="container mx-auto px-4 py-8">"
            {children}
          </main>
      <body>
        <div className="min-h-screen bg-white">"
          {children}
  )
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">"
          <main className="container mx-auto px-4 py-8">"
            {children}
          </main>
      <body>
        <div className="min-h-screen bg-white">"
          {children}
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
