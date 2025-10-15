import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
const ServiceWorkerRegistration: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Service Worker - Zion Tech Group</title>
        <meta name="description" content="Service worker registration for offline functionality" />
        <meta name="keywords" content="service worker, PWA, offline" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Service Worker</h1>
            <p className="text-xl text-gray-300 mb-8">
              Service worker registration for offline functionality
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Offline Support
                </h3>
                <p className="text-blue-700">
                  Cache resources for offline functionality.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Performance
                </h3>
                <p className="text-green-700">
                  Improved loading times and caching.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  PWA Ready
                </h3>
                <p className="text-purple-700">
                  Progressive Web App capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceWorkerRegistration;