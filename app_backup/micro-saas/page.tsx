import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions - Zion Tech Group',
  description: 'Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.',
  keywords: ['micro saas', 'custom software', 'business solutions', 'scalable applications'],
  openGraph: {
    title: 'Micro SaaS Solutions - Zion Tech Group',
    description: 'Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.',
    type: 'website',
    url: '/micro-saas',
  },
};

export default function MicroSaaS() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions."
        keywords="micro saas, custom software, business solutions, scalable applications"
        url="/micro-saas"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">💼 MICRO SAAS SOLUTIONS</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Custom micro SaaS applications that solve specific business challenges with modern, scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/consultation"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Custom Micro SaaS Applications
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We build specialized software solutions that address specific business needs with modern, scalable architecture.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Development</h3>
                  <p className="text-gray-600 mb-4">
                    Tailored micro SaaS applications built specifically for your business requirements.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>
                  <p className="text-gray-600 mb-4">
                    Modern, cloud-native solutions that grow with your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}