import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Zion Tech Group',
  description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  keywords: 'about, company, mission, AI solutions, micro SaaS, IT services, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'About | Zion Tech Group',
    description: 'Learn about Zion Tech Group\'s mission to deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
    type: 'website',
    url: 'https://ziontechgroup.com/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Zion Tech Group'
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of enterprise technology with innovative AI solutions, 
              micro SaaS platforms, and cutting-edge IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower businesses with transformative technology solutions that drive 
              innovation, efficiency, and growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our innovative solutions can help transform your business 
            and drive your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}