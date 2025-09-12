import React from 'react';
import Link from 'next/link';
import './globals.css';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
import NewContentBanner from '../components/NewContentBanner';
import EnhancedNavigation from '../components/EnhancedNavigation';

export const metadata = {
	title: 'Zion Tech Group',
	description: 'AI & Technology Solutions',
	metadataBase: new URL('https://zion.tech'),
	applicationName: 'Zion Tech Group',
	generator: 'Next.js',
	authors: [{ name: 'Zion Tech Group' }],
	keywords: [
		'AI',
		'Artificial Intelligence',
		'Edge Computing',
		'Autonomous Systems',
		'Consulting',
		'Case Studies',
		'Implementation Guide',
	],
	openGraph: {
		title: 'Zion Tech Group — AI & Technology Solutions',
		description: 'Strategy, implementation, and measurable ROI from modern AI systems.',
		url: 'https://zion.tech',
		siteName: 'Zion Tech Group',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Zion Tech Group',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@ZionTech',
		title: 'Zion Tech Group — AI & Technology Solutions',
		description: 'Strategy, implementation, and measurable ROI from modern AI systems.',
		images: ['/og-image.png'],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0b1020' },
	],
	alternates: {
		canonical: 'https://zion.tech',
	},
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <ErrorBoundary>
          <NewContentBanner />
          <EnhancedNavigation />
          <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen" role="main">
            {children}
          </main>
          
          {/* Development Tools */}
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </ErrorBoundary>
      </body>
    </html>
  );
}