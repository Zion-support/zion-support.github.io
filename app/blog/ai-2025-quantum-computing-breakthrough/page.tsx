import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../../components/SEO';

export const metadata: Metadata = {
  title: 'AI 2025: The Quantum Computing Breakthrough That\'s Reshaping Enterprise',
  description: 'Discover how quantum computing breakthroughs in 2025 are revolutionizing AI capabilities and creating unprecedented opportunities for enterprise transformation.',
  keywords: ['quantum computing', 'AI', 'enterprise', 'breakthrough', '2025'],
};

export default function AI2025QuantumComputingPage() {
  return (
    <>
      <SEO
        title="AI 2025: The Quantum Computing Breakthrough That's Reshaping Enterprise"
        description="Discover how quantum computing breakthroughs in 2025 are revolutionizing AI capabilities and creating unprecedented opportunities for enterprise transformation."
        keywords="quantum computing, AI, enterprise, breakthrough, 2025"
        url="/blog/ai-2025-quantum-computing-breakthrough"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">⚡ QUANTUM COMPUTING BREAKTHROUGH</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI 2025: The Quantum Computing Breakthrough
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how quantum computing breakthroughs in 2025 are revolutionizing AI capabilities and creating unprecedented opportunities for enterprise transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Consultation
                </Link>
                <Link
                  href="/resources/ai-implementation-guide-2025"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Download Implementation Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}