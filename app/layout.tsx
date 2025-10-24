import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FuturisticBackground from './components/FuturisticBackground';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords: ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'ZionTechGroup' }],
  creator: 'ZionTechGroup',
  publisher: 'ZionTechGroup',
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
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    siteName: 'ZionTechGroup',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
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
=======
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions for businesses worldwide.',
  keywords: 'AI solutions, IT services, cloud computing, cybersecurity, 5G solutions',
  authors: [{ name: 'Zion Tech Group' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI and IT solutions for businesses worldwide.',
    type: 'website',
    locale: 'en_US',
>>>>>>> origin/main
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< HEAD
        {children}
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <FuturisticBackground />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </div>
>>>>>>> origin/main
      </body>
    </html>
  );
}