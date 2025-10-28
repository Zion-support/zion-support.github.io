<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
=======

>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100

export const metadata = {
  title: "Page | Zion Tech Group",
  description: "Professional page services by Zion Tech Group",
  keywords: "page, technology, services",
  openGraph: {
<<<<<<< HEAD
    title: "Page | Zion Tech Group",
    description: "Professional page services by Zion Tech Group",
    type: "website",
  },
};

export default function pagePage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional page services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Page Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-blue-700">
                    Professional guidance and strategic planning for your page needs.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Custom Solutions
                  </h3>
                  <p className="text-green-700">
                    Tailored page solutions designed specifically for your business.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-purple-700">
                    Round-the-clock support and maintenance for all your page services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
=======
    title: 'Offline | Zion Tech Group',
    description: 'You are currently offline',
    type: 'website',
  }};
function OfflinePage() {
  return (
    <>
      <Head>
        <title>Offline | Zion Tech Group</title>
        <meta name="description" content="You are currently offline" />
        <meta name="keywords" content="offline, no internet" />
        <meta property="og:title" content="Offline | Zion Tech Group" />
        <meta property="og:description" content="You are currently offline" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            You&apos;re offline
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Please check your internet connection and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
}
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
