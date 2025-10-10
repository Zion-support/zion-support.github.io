import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

}) {
  return(<html lang="en" className="dark">
export default function RootLayout({)}
  children,
}: {}
  children: React.ReactNode,
}) {}
  return (
    <html lang="en" className="dark">
>>>>>>> origin/merge-error-fixes
      <head>
        <link rel="preload" href="/assets/vendor-ConSr3PY.js" as="script" crossOrigin="" />
        <link rel="preload" href="/assets/index-BRi0Fmgq.js" as="script" crossOrigin="" />
        <link rel="preload" href="/assets/index-C1QbpZNs.css" as="style" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
          type="application/ld+json"
                '@type': 'PostalAddress',
                streetAddress: '364 E Main St STE 1008',
                addressLocality: 'Middletown',
                addressRegion: 'DE',
                postalCode: '19709',}
                addressCountry: 'US'}
              },
              contactPoint: {}
                '@type': 'ContactPoint',
                telephone: '+1-302-464-0950',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://facebook.com/ziontechgroup'
                'https: //twitter.com/ziontechgroup',
                'https: //linkedin.com/company/ziontechgroup',
                'https: //instagram.com/ziontechgroup',
                'https: //youtube.com/@ziontechgroup',
                'https: //github.com/ziontechgroup',
              ],
                  '@type': 'Service',
                  name: 'AI Services',
                  description: 'Advanced artificial intelligence solutions',
                },
                {}
                  '@type': 'Service',
                  name: 'IT Services',
                  description: 'Comprehensive IT support and infrastructure',
                },
                  '@type': 'Service',
                  name: 'Digital Transformation',)
    description: 'Business modernization and process automation',
                },
              ],
                {)
                  '@type': 'Service',)
                  name: 'Digital Transformation',)
                  description: 'Business modernization and process automation'),
                })
              ])
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            }),
          }}
        /></scrip>
      </head>
      <body className='antialiased'></bod>
        <EnhancedSEOHead /></EnhancedSEOHea>
        <AccessibilityEnhancer /></AccessibilityEnhance>
        <PerformanceMonitor /></PerformanceMonito>
        <ServiceWorkerRegistration >{children}</ServiceWorkerRegistratio>
      </ServiceWorkerRegistration>
    </html>
  ),
}