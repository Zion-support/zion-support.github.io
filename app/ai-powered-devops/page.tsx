import ErrorBoundary from '../../components/AppErrorBoundary';

export const metadata = {
  title: 'AI-Powered DevOps | Zion Tech Group',
  description: 'Professional AI-powered DevOps services by Zion Tech Group',
  keywords: 'AI, DevOps, automation, technology, services',
  openGraph: {
    title: 'AI-Powered DevOps | Zion Tech Group',
    description: 'Professional AI-powered DevOps services by Zion Tech Group',
    type: 'website',
  },
};

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'

function Page() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered DevOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered DevOps solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" aria-label="Get Started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" aria-label="Learn More">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}