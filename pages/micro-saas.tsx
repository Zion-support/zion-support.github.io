import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function MicroSAAS() {
  return (
    <Layout
      title="Micro SaaS - Zion Tech Group"
      description="Scalable micro SaaS solutions including AI invoice generator, project management, and productivity tools."
      keywords="micro SaaS, software as a service, productivity tools, project management, AI tools"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, focused software solutions that solve specific business problems efficiently.
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
                Our Micro SaaS Portfolio
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                Specialized software solutions designed to streamline specific business processes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Invoice Generator</h3>
                <p className="text-gray-600 mb-6">Intelligent invoice creation and payment tracking with AI-powered templates.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$29/month</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Management</h3>
                <p className="text-gray-600 mb-6">Streamlined project tracking and team collaboration tools.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$49/month</div>
                <Link href="/contact" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-6">Real-time business analytics and reporting dashboard.</p>
                <div className="text-3xl font-bold text-blue-600 mb-4">$39/month</div>
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