
'use client';
import React, { useEffect } from 'react';
export default ServiceWorker;
'use client';
const ServiceWorker: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in, navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {;
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);
  return null;
};

export default function ComponentsPage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Service Worker - Zion Tech Group</title>
        <meta name = "description" content="Professional service worker by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Service Worker</h1>
          <p className="text-lg text-gray-300 mb-8">Professional service worker coming soon.</p>
          <Link >
}
}