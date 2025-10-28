import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Document Manager | Zion Tech Group',
  description: 'Professional legal document manager services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'legal document manager, technology, services, AI, automation',
  openGraph: {
    title: 'Legal Document Manager | Zion Tech Group',
    description: 'Professional legal document manager services by Zion Tech Group.',
    type: 'website',
  },
};

function LegalDocumentManagerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Legal Document Manager
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional legal document manager services powered by advanced AI and technology.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge legal document manager solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <LegalDocumentManagerPage {...props} />
    </ErrorBoundary>
  );
}