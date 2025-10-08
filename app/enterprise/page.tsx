'use client';

import Link from 'next/link';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI and IT solutions designed for enterprise scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Enterprise Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scalable Infrastructure',
                description: 'Built to handle enterprise-level demands with high availability and performance',
              },
              {
                title: 'Security First',
                description: 'Enterprise-grade security with compliance and data protection',
              },
              {
                title: '24/7 Support',
                description: 'Dedicated support team available around the clock',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your enterprise needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}