import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { generateStructuredData } from '../components/SEOEnhancer';
// Performance monitoring will be added via script

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  keywords: 'AI solutions, micro SaaS, IT services, technology consulting, automation',
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
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  });

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', () => {
                  if ('performance' in window) {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Performance metrics:', {
                      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                      loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
                      totalTime: perfData.loadEventEnd - perfData.fetchStart,
                    });
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}