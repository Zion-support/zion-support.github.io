import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ITServicesPage() {
  return (
    <div>
      <Head>
        <title>IT Services & Solutions - Zion Tech Group | Cloud, Security, DevOps</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network management, DevOps, and IT consulting. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network management, DevOps, IT consulting, infrastructure, managed services" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your technology infrastructure with our comprehensive IT services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Our IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
                  <p className="text-gray-600 mb-4">
                    Seamlessly migrate your infrastructure to the cloud with our expert guidance and support.
                  </p>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
                  <p className="text-gray-600 mb-4">
                    Protect your business with comprehensive cybersecurity solutions and monitoring.
                  </p>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps</h3>
                  <p className="text-gray-600 mb-4">
                    Streamline your development and deployment processes with DevOps automation.
                  </p>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our experts help you modernize your technology stack and improve your business operations.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}