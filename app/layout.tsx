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
  metadataBase: new URL('https://zion.app'),
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
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className="font-sans">{children}</body>
=======
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
>>>>>>> ecc7d9f9794e0ded6a8fec40c9673b04874eb1ff
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
