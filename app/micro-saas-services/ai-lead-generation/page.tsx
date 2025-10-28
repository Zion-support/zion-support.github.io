import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Ai Lead Generation | Zion Tech Group',
  description: 'Professional Ai Lead Generation micro SaaS services and solutions',
  keywords: 'ai lead generation, micro saas, technology, services, AI, IT solutions',
  openGraph: {
    title: 'Ai Lead Generation | Zion Tech Group',
    description: 'Professional Ai Lead Generation micro SaaS services and solutions',
    type: 'website',
  },
};

function AiLeadGenerationPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Lead Generation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Ai Lead Generation micro SaaS services and solutions
            </p>
            <div className="mt-12">
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                Professional ai lead generation micro SaaS services by Zion Tech Group. 
                We provide cutting-edge solutions to help your business grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <AiLeadGenerationPage {...props} />
    </ErrorBoundary>
  );
}