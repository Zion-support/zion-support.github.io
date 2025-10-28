import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Test Page - Zion Tech Group',
  description: 'Test page for Zion Tech Group.',
  keywords: 'test, testing, development, quality assurance',
  openGraph: {
    title: 'Test Page - Zion Tech Group',
    description: 'Test page for Zion Tech Group.',
    type: 'website',
  },
};

function Page() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Test Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;