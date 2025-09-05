import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud migration, cybersecurity, and infrastructure management."
      keywords="IT services, cloud migration, cybersecurity, infrastructure, technology consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete technology solutions to keep your business running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our IT Service Portfolio
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Professional IT services designed to optimize your technology infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Migration</h3>
                <p className="text-gray-600 mb-6">Seamless migration to cloud infrastructure with zero downtime.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$2,999/project</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
                <p className="text-gray-600 mb-6">Comprehensive security solutions to protect your business.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$499/month</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Support</h3>
                <p className="text-gray-600 mb-6">24/7 technical support and maintenance services.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$299/month</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}