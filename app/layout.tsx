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
      'https://twitter.com/ziontechgroup',
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
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#4f46e5' />
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name='googlebot' content='index, follow' />
        <meta name='bingbot' content='index, follow' />
        <meta name='author' content='Zion Tech Group' />
        <meta name='publisher' content='Zion Tech Group' />
        <meta name='copyright' content='Zion Tech Group' />
        <meta name='language' content='en' />
        <meta name='revisit-after' content='7 days' />
        <meta name='distribution' content='global' />
        <meta name='rating' content='general' />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />
        <meta name='application-name' content='Zion Tech Group' />
        <meta name='msapplication-TileColor' content='#4f46e5' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <link rel='canonical' href='https://ziontechgroup.com' />
        <link rel='alternate' hrefLang='en' href='https://ziontechgroup.com' />
        
        {/* PWA Meta Tags */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-starturl' content='/' />
        <meta name='msapplication-tap-highlight' content='no' />
        
        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link rel='preconnect' href='https://www.googletagmanager.com' />
        
        {/* DNS Prefetch for performance */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//www.googletagmanager.com' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
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
