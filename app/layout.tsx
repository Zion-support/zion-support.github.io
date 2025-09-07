<<<<<<< HEAD
import type { Metadata } from 'next';
<<<<<<< HEAD
import './globals.css';

export const metadata: Metadata = {
=======
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services. Transform your business with cutting-edge technology and expert consulting.',
  keywords: 'AI solutions, micro SaaS, enterprise IT, cloud migration, DevOps, cybersecurity, business automation, digital transformation',
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
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services. Transform your business with cutting-edge technology.',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
    images: ['/og-image.jpg'],
    creator: '@ziontechgroup',
  },
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Business Technology Services',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: '#000000',
<<<<<<< HEAD
  title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.'
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
};

export default function RootLayout({
  children
<<<<<<< HEAD
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  );
=======

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions',
  description: 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services. Enterprise-grade AI, micro SaaS, and IT solutions.',
  keywords: 'AI solutions, micro SaaS, IT services, blockchain, cybersecurity, cloud services, business automation, digital transformation, software development, tech consulting',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',

    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of AI-powered business solutions, automation tools, and digital transformation services.',
  },
}


export default function RootLayout({
  children,
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
=======
      <body>
        <div className="min-h-screen bg-white">
          {children}
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
        </div>
      </body>
    </html>

  )

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
}