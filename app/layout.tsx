import type { Metadata } from 'next';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import AnalyticsProvider from './components/AnalyticsProvider';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description:
    'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  keywords: [
    'AI solutions',
    'enterprise AI',
    'digital transformation',
    'automation',
    'cloud services',
  ],
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
    title: 'Zion Tech Group - AI & IT Solutions',
    description:
      'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI & IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & IT Solutions',
    description:
      'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    images: ['https://ziontechgroup.com/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#4f46e5' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className='antialiased'>
        <AnalyticsProvider>
          <ErrorBoundary>
            <AccessibilityEnhancer>
              <PerformanceMonitor />
              {children}
            </AccessibilityEnhancer>
          </ErrorBoundary>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
