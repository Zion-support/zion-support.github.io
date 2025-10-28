<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

export const metadata = {
  title: "Layout | Zion Tech Group",
  description: "Professional layout services by Zion Tech Group",
  keywords: "layout, technology, services",
  openGraph: {
    title: "Layout | Zion Tech Group",
    description: "Professional layout services by Zion Tech Group",
    type: "website",
  },
};

export default function layoutPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Layout
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional layout services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Layout Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive layout solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your layout needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored layout solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your layout services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
=======
import React, { ReactNode } from 'react';




import Navigation from './components/Navigation';


import Footer from './components/Footer';


import SkipLink from './components/SkipLink';


import ClientComponents from './components/ClientComponents';


import Analytics from './components/Analytics';


import ConsolidatedPerformance from './components/consolidated/ConsolidatedPerformance';


import ConsolidatedAccessibility from './components/consolidated/ConsolidatedAccessibility';


import ConsolidatedSEO from './components/consolidated/ConsolidatedSEO';


import PerformanceMonitoring from './components/PerformanceMonitoring';


import SEOOptimization from './components/SEOOptimization';


import SecurityEnhancement from './components/SecurityEnhancement';


import PerformanceMonitor from './components/PerformanceMonitor';


import AccessibilityEnhancer from './components/AccessibilityEnhancer';


import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';





export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
      </head>
      <body className="font-sans">
        <Analytics />
        <ConsolidatedPerformance />
        <ConsolidatedAccessibility />
        <ConsolidatedSEO />
        <ClientComponents>
            <div className="min-h-screen bg-slate-900">
              <SkipLink />
              <Navigation />
              <main className="relative z-10" id="main-content" role="main" tabIndex={-1}>
                {children}
              </main>
              <Footer />
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              <ServiceWorkerRegistration />
              <PerformanceMonitoring />
              <SEOOptimization />
              <SecurityEnhancement />
            </div>
          </ClientComponents>
      </body>
    </html>
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
  );
}
