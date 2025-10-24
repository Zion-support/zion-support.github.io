<<<<<<< HEAD
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT solutions for modern businesses',
  keywords: 'AI solutions, IT services, cloud computing, cybersecurity, data analytics, software development',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Advanced AI and IT solutions for modern businesses',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Advanced AI and IT solutions for modern businesses',
  },
}

=======
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords: ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'ZionTechGroup' }],
  creator: 'ZionTechGroup',
  publisher: 'ZionTechGroup',
  metadataBase: new URL('https://ziontechgroup.com'),
  openGraph: {
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    siteName: 'ZionTechGroup',
    images: [
      {
        url: '/og-image.jpg',
        alt: 'ZionTechGroup - AI Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}
>>>>>>> origin/main
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
=======
        <body className={inter.className}>
        {children}
>>>>>>> origin/main
      </body>
    </html>
  )
}