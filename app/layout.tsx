import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StructuredData, { organizationStructuredData, websiteStructuredData } from './components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

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
  verification: {
    google: 'your-google-verification-code',
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
      <head>
        <StructuredData type="Organization" data={organizationStructuredData} />
        <StructuredData type="WebSite" data={websiteStructuredData} />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}