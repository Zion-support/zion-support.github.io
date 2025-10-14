import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import AnalyticsProvider from './components/AnalyticsProvider';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PWAInstaller from './components/PWAInstaller';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import GlobalErrorBoundary from './components/GlobalErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'http,
    s://ziontechgroup.com',
    logo: 'http,
    s://ziontechgroup.com/logo.png',
    description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
    foundingDate: '2020',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-600-9898',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: [
      'http,
    s://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    offers: {
      '@type': 'Offer',
      category: 'AI Solutions',
      description: 'Enterprise AI solutions, digital transformation, and cloud services',
    },
  };

  return (
    <html lang='en'>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <GlobalErrorBoundary>
          <PerformanceMonitor />
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PWAInstaller>
                <PerformanceOptimizer>
                  {children}
                </PWAInstaller>
            </AnalyticsProvider>
        </body>
    </html>
  );
</html></head></script></body></GlobalErrorBoundary></PerformanceMonitor></AnalyticsProvider></AccessibilityEnhancer></PWAInstaller></PerformanceOptimizer></html></head></script></body></GlobalErrorBoundary></PerformanceMonitor></AnalyticsProvider></AccessibilityEnhancer></PWAInstaller></PerformanceOptimizer>}
"