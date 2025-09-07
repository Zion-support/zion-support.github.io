import type { Metadata } from 'next';
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Zion Tech Group - AI-Powered Solutions',
  description: 'Leading provider of AI-powered business solutions and automation services',
}
=======
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions. Transform your business with cutting-edge technology.',
  keywords: ['AI', 'artificial intelligence', 'technology', 'innovation', 'quantum computing', 'autonomous systems', 'business solutions', 'zion tech'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI and technology solutions from Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Transform your business with cutting-edge AI and technology solutions.',
    images: ['/og-image.jpg']
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000'
};
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
=======
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
}