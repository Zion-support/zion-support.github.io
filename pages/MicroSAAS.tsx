import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function MicroSAAS() {
  return (
    <Layout 
      title="Micro SaaS - Zion Tech Group" 
      description="Comprehensive Micro SaaS solutions for businesses of all sizes."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive Micro SaaS solutions for businesses of all sizes.
            </p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-300 mb-8">
              We're working on bringing you comprehensive Micro SaaS solutions. 
              Check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Contact Us
              </Link>
              <Link 
                href="/micro-saas" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View Micro SaaS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}