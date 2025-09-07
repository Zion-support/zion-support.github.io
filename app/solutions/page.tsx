import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Explore our comprehensive solutions including AI automation, micro SaaS development, and IT services.',
};

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-4">
              Advanced AI and machine learning solutions to automate and optimize your business processes.
            </p>
            <Link href="/services/ai-services" className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS</h3>
            <p className="text-gray-600 mb-4">
              Custom micro SaaS applications tailored to your specific business needs and requirements.
            </p>
            <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h3>
            <p className="text-gray-600 mb-4">
              Complete IT infrastructure and support services for enterprise environments.
            </p>
            <Link href="/services/it-services" className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud infrastructure and migration services for modern businesses.
            </p>
            <Link href="/services/cloud-services" className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Blockchain</h3>
            <p className="text-gray-600 mb-4">
              Secure blockchain solutions and smart contract development for decentralized applications.
            </p>
            <Link href="/services/blockchain" className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive cybersecurity solutions to protect your business from threats.
            </p>
            <Link href="/services/cybersecurity" className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}