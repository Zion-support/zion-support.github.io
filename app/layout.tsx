<<<<<<< HEAD
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
  title: 'Zion Tech Group - AI, Micro SaaS & Enterprise IT Solutions',
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services.'
};

export default function RootLayout({
  children
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>

  )

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
}