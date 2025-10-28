import React from 'react';
import ErrorBoundary from "../components/ErrorBoundary";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: '5g Edge Computing | Zion Tech Group',
  description: 'Professional 5g Edge Computing services and solutions',
  keywords: '5g edge computing, technology, services, AI, IT solutions',
  openGraph: {
    title: '5g Edge Computing | Zion Tech Group',
    description: 'Professional 5g Edge Computing services and solutions',
    type: 'website',
  },
};

function Page5gEdgeComputingPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5g Edge Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional 5g Edge Computing services and solutions
            </p>
            <div className="mt-12">
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                Professional 5g edge computing services by Zion Tech Group. 
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
      <Page5gEdgeComputingPage {...props} />
    </ErrorBoundary>
  );
}