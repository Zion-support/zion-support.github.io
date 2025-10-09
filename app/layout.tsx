import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: [
    'AI solutions',
    'quantum computing',
    'autonomous systems',
    'digital transformation',
    'enterprise AI',
    'machine learning',
    'automation',
    'cloud services',
    'IT consulting',
    'cybersecurity'
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
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Advanced AI and IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI and IT Solutions',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
    images: ['/og-image.jpg'],
    creator: '@ziontechgroup',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TechCompany',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com',
              description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
              foundingDate: '2020',
              numberOfEmployees: '50-100',
              industry: 'Technology',
              services: [
                'AI Solutions',
                'Quantum Computing',
                'Autonomous Systems',
                'Digital Transformation',
                'Cloud Services',
                'Automation',
                'Business Intelligence'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-302-464-0950',
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: 'en'
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '364 E Main St STE 1008',
                addressLocality: 'Middletown',
                addressRegion: 'DE',
                postalCode: '19709',
                addressCountry: 'US'
              },
              sameAs: [
                'https://linkedin.com/company/zion-tech-group',
                'https://twitter.com/ziontechgroup',
                'https://facebook.com/ziontechgroup',
                'https://instagram.com/ziontechgroup',
                'https://github.com/ziontechgroup',
                'https://youtube.com/@ziontechgroup'
              ]
            })
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <div id="root">
          {children}
        </div>
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}