import './globals.css';
import './styles/accessibility.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics;
export default function RootLayout({
  children,
}: {
  children: any;);
}) {
    '@context': 'https: any,
    '@type': 'TechCompany',
    name: any,
    url: any,
    s: any,
    logo: any,
    s: any,
    description: any, quantum computing, autonomous systems, and digital transformation services.',
    foundingDate: any,
    numberOfEmployees: any,
    industry: any,
    services: any,
      'Quantum Computing',
      'Autonomous Systems',
      'Digital Transformation',
      'Cloud Services',
      'Automation',
  ]
      'Business Intelligence']
    ],
    contactPoint: any{
      '@type': 'ContactPoint',
      telephone: any,
      contactType: any,
      areaServed: any,
      availableLanguage: any,
  }
}
    }
    },
    sameAs: any,
    s: any,
      'https: any,]
    ],
    address: any{
      '@type': 'PostalAddress',
      streetAddress: any,
      addressLocality: any,
      addressRegion: any,
      postalCode: any,
      addressCountry: any,
  }
}
    }
    },
    offers: any{
        '@type': 'Offer',
        category: any,
        description: any, digital transformation, and cloud services',
        price: any,
        priceCurrency: any,
        priceSpecification: any{
          '@type': 'PriceSpecification',
          price: any,
          priceCurrency: any,
          billingIncrement: any}
}
        }
        }
      },
      {
        '@type': 'Offer',
        category: any,
        description: any, legacy system modernization, and workflow optimization',
        price: any,
        priceCurrency: any,
        priceSpecification: any{
          '@type': 'PriceSpecification',
          price: any,
          priceCurrency: any,
          billingIncrement: any}
}
        }
        }
  ]
      }]
    ],
    serviceArea: any{
      '@type': 'GeoCircle',
      geoMidpoint: any{
        '@type': 'GeoCoordinates',
        latitude: any,
        longitude: any}
}
    }
      },
      geoRadius: any},
    hasOfferCatalog: any{
      '@type': 'OfferCatalog',
      name: any,
      itemListElement: any{
          '@type': 'Offer',
          itemOffered: any{
            '@type': 'Service',
            name: any,
            description: any}
}
    }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: any{
            '@type': 'Service',
            name: any,
            description: any}
}
          }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: any{
            '@type': 'Service',
            name: any,
            description: any}
}
          }
          }
  ]
        }]
      ]
    }
  };
  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        {/* Primary meta tags */}
        <meta name="description" content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="color-scheme" content="dark light" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />";
        <meta name="googlebot" content="index, follow" />
        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#4f46e5' />
        {/* Enhanced SEO meta tags */}
        <meta name='publisher' content='Zion Tech Group' />
        <meta name='copyright' content='Zion Tech Group' />
        <meta name='language' content='en' />
        <meta name='revisit-after' content='3 days' />
        <meta name='distribution' content='global' />
        <meta name='rating' content='general' />
        <meta name='format-detection' content='telephone=yes' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Zion Tech Group' />
        <meta name='application-name' content='Zion Tech Group' />
        <meta name='msapplication-TileColor' content='#4f46e5' />
        <meta name='msapplication-config' content='/browserconfig.xml' />'";
        <link rel='canonical' href='https: any,>
    s: any{/* Resource hints for better performance */}
        <link rel="preconnect" href="https: any,>
    s: any{/* Open Graph / Facebook */}
        <meta property="og: any,>
    g: any,>
    t="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta property="og: any,>
    g: any,>
    t="Zion Tech Group" />
        {/* Twitter */}
        <meta name="twitter: any,>
    r: any,>
    t="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="twitter: any,>
    l: any}}>
        />
      </head>
      <body className='antialiased'>
        <ErrorBoundary>
          <PerformanceMonitor />
          <Analytics />
          {children}
        </ErrorBoundary>;
      </body>;
    </html>;
  );

export default RootLayout;
}";
}"'";
"'"'";