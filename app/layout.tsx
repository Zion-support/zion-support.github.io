import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import AnalyticsProvider from './components/AnalyticsProvider';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PWAInstaller from './components/PWAInstaller';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Specializing in machine learning, cloud computing, and business intelligence.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-600-9898',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    services: [
      'Artificial Intelligence Solutions',
      'Digital Transformation',
      'Cloud Services',
      'Machine Learning',
      'Business Intelligence',
      'Enterprise Automation'
    ],
  };

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <meta name='theme-color' content='#4f46e5' />
        <meta name='description' content='Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Specializing in machine learning, cloud computing, and business intelligence.' />
        <meta name='keywords' content='AI solutions, digital transformation, cloud services, machine learning, business intelligence, enterprise automation, artificial intelligence' />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        
        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ziontechgroup.com/' />
        <meta property='og:title' content='Zion Tech Group - Advanced AI and IT Solutions' />
        <meta property='og:description' content='Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.' />
        <meta property='og:image' content='https://ziontechgroup.com/og-image.jpg' />
        <meta property='og:site_name' content='Zion Tech Group' />
        
        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ziontechgroup.com/' />
        <meta property='twitter:title' content='Zion Tech Group - Advanced AI and IT Solutions' />
        <meta property='twitter:description' content='Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.' />
        <meta property='twitter:image' content='https://ziontechgroup.com/og-image.jpg' />
        
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        
        {/* Preconnect to external domains */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        
        {/* DNS prefetch for performance */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//fonts.gstatic.com' />
        
        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Performance hints */}
        <link rel='preload' href='/fonts/inter-var.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
      </head>
      <body className='antialiased'>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PerformanceMonitor />
              <PWAInstaller />
              {children}
            </AccessibilityEnhancer>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
