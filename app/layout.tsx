import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
  description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations. Experience 2000x processing speed and 99.9% automation rates.',
  keywords: 'AI, Enterprise AI, Quantum Computing, Autonomous Operations, Meta-Cognitive AI, Zion Tech Group',
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
    title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
    description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Revolutionary AI Solutions for Enterprise',
    description: 'Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0f172a',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Critical CSS */}
        <link rel="stylesheet" href="/critical.css" />
        
<<<<<<< HEAD
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-4">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Comprehensive Service Categories</div>
                <Link href="/services/ai-services-comprehensive" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500">
                  <div className="font-semibold">🧠 Comprehensive AI Services</div>
                  <div className="text-xs text-gray-500">ML, NLP, Computer Vision, Autonomous Systems</div>
                </Link>
                <Link href="/services/advanced-micro-saas-solutions" className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 border-l-4 border-transparent hover:border-green-500">
                  <div className="font-semibold">🚀 Advanced Micro SaaS Solutions</div>
                  <div className="text-xs text-gray-500">Content Creation, Inventory, Customer Support</div>
                </Link>
                <Link href="/services/it-services-comprehensive" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 border-l-4 border-transparent hover:border-purple-500">
                  <div className="font-semibold">💻 Complete IT Services</div>
                  <div className="text-xs text-gray-500">Cloud Migration, DevOps, Cybersecurity</div>
                </Link>
                <div className="border-t border-gray-100 my-3"></div>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Individual Services</div>
                <Link href="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services & Solutions
                </Link>
                <Link href="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Micro SaaS Solutions
                </Link>
                <Link href="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  IT Services & Solutions
                </Link>
=======
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Service worker registration */}
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
      <body className={`${inter.className} antialiased`}>
        {/* Skip link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        {/* Main content */}
        <div id="main-content">
          {children}
        </div>
        
        {/* Performance and accessibility scripts */}
        <script src="/performance-optimizer.js" defer />
        <script src="/accessibility-enhancer.js" defer />
        <script src="/seo-optimizer.js" defer />
        
        {/* Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Report performance metrics
                  setTimeout(function() {
                    if (window.performance && window.performance.timing) {
                      const timing = window.performance.timing;
                      const loadTime = timing.loadEventEnd - timing.navigationStart;
                      console.log('Page load time:', loadTime + 'ms');
                    }
                  }, 0);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
>>>>>>> 521215710f1b2caf83b9cc94fe97e9aada05ff37
