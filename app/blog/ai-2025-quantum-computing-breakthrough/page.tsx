import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import SEO from '../../components/SEO';

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
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI 2025: The Quantum Computing Breakthrough That's Reshaping Enterprise
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Discover how quantum computing breakthroughs in 2025 are revolutionizing AI capabilities and creating unprecedented opportunities for enterprise transformation.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Quantum Revolution is Here
              </h2>
              
              <p className="text-gray-700 mb-6">
                In 2025, we're witnessing the convergence of artificial intelligence and quantum computing, 
                creating unprecedented opportunities for enterprise transformation. This breakthrough represents 
                a fundamental shift in how we approach complex computational challenges.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Key Breakthrough Areas
              </h3>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Quantum-enhanced machine learning algorithms</li>
                <li>Exponential speedup in optimization problems</li>
                <li>Revolutionary cryptography and security</li>
                <li>Advanced simulation capabilities</li>
                <li>Breakthrough in drug discovery and materials science</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise Applications
              </h3>
              
              <p className="text-gray-700 mb-6">
                Enterprises are already leveraging quantum computing to solve previously intractable problems, 
                from logistics optimization to financial modeling and cybersecurity enhancement.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Ready to Transform Your Business?
                </h4>
                <p className="text-blue-800 mb-4">
                  Discover how quantum computing can revolutionize your enterprise operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}