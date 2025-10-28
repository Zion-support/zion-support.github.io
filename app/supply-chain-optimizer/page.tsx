import React from 'react';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Supply Chain Optimizer | Zion Tech Group',
  description: 'Professional supply chain optimizer services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'supply chain optimizer, technology, services, AI, automation',
  openGraph: {
    title: 'Supply Chain Optimizer | Zion Tech Group',
    description: 'Professional supply chain optimizer services by Zion Tech Group.',
    type: 'website',
  }
};

function SupplychainoptimizerPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 _sm: px-6 _lg: px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl _md: text-6xl font-bold text-white mb-6">
              Supply Chain Optimizer
            </h1>
            <p className="text-xl _md: text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional supply chain optimizer services powered by advanced AI and technology.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge supply chain optimizer solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col _sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 _hover: bg-purple-700 _focus: outline-none _focus: ring-2 _focus: ring-offset-2 _focus: ring-purple-500 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent _hover: bg-white _hover: text-gray-900 _focus: outline-none _focus: ring-2 _focus: ring-offset-2 _focus: ring-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

