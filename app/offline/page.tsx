import React from 'react';
<<<<<<< HEAD
export default function OfflinePage() {;
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20>;<div className="container" mx-auto px-4>;<h1 className="text-4xl" font-bold mb-8>Offline</h1><p className="text-gray-300" text-lg">This page is under development.</p></div></div>
  );
}';
';
=======
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Offline - Zion Tech Group</title>
        <meta name="description" content="Professional Offline solutions and services" />
        <meta name="keywords" content="offline" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Offline</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Offline solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LazyPage: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() => import('./page'));
export default LazyPage;

>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
