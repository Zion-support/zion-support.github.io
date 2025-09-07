import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services including AI development, micro SaaS solutions, and more.',
  keywords: 'AI services, micro SaaS, technology solutions, software development',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology services to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">Advanced AI and machine learning solutions.</p>
            <Link href="/services/ai-services" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Micro SaaS</h3>
            <p className="text-gray-300 mb-4">Scalable micro SaaS solutions.</p>
            <Link href="/services/micro-saas" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-300 mb-4">Professional web development services.</p>
            <Link href="/services/web-development" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our services can transform your business.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
