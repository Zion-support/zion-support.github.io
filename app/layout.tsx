<<<<<<< HEAD
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
=======
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading Technology Solutions Provider',
  description: 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services from Zion Tech Group.',
  keywords: 'AI solutions, cloud architecture, web development, mobile apps, data analytics, cybersecurity',
<<<<<<< HEAD
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
=======
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
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group - Leading Technology Solutions Provider',
    description: 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading Technology Solutions Provider',
    description: 'Transform your business with cutting-edge AI, cloud architecture, and innovative development services.',
    creator: '@ziontechgroup',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children}: {
  children: React.ReactNode
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886
}
