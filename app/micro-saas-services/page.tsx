<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "Page | Zion Tech Group",
  description: "Professional page services by Zion Tech Group",
  keywords: "page, technology, services",
  openGraph: {
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
import Navigation from '../components/Navigation';


export const metadata = {
  title: 'Micro SaaS Services | Zion Tech Group',
  description: 'Comprehensive micro SaaS solutions for modern businesses',
  keywords: 'micro SaaS, software, automation, business solutions',
  openGraph: {
    title: 'Micro SaaS Services | Zion Tech Group',
    description: 'Comprehensive micro SaaS solutions for modern businesses',
    type: 'website',
  }};
function MicrosaasservicesPage() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Comprehensive micro SaaS solutions for modern businesses
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
>>>>>>> c271e7ba1e2d2951f565c25080f0cec45834b100
