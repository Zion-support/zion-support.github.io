import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
  description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations. Experience 2000x processing speed and 99.9% automation rates.',
  keywords: 'AI, Enterprise AI, Quantum Computing, Autonomous Operations, Meta-Cognitive AI, Zion Tech Group',
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
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
    description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
    description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0f172a',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Critical CSS */}
        <link rel="stylesheet" href="/critical.css" />
        
