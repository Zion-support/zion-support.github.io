import React from 'react';
import { Metadata } from 'next';
import QuantumComputingBreakthroughShowcase2025 from '../../components/QuantumComputingBreakthroughShowcase2025';
import QuantumComputingBreakthroughPromotionBanner2025 from '../../components/QuantumComputingBreakthroughPromotionBanner2025';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import EnhancedErrorBoundary from '../../components/EnhancedErrorBoundary';
import PerformanceMonitor from '../../components/PerformanceMonitor';
import AccessibilityEnhancer from '../../components/AccessibilityEnhancer';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Quantum Computing Breakthroughs 2025 - Revolutionary Quantum Technologies',
  description: 'Discover the latest quantum computing breakthroughs in 2025. Explore fault-tolerant quantum systems, quantum internet, and exponential speedup applications.',
  keywords: [
    'quantum computing 2025',
    'quantum breakthroughs',
    'quantum internet',
    'fault-tolerant quantum',
    'quantum algorithms',
    'quantum cryptography',
    'quantum machine learning',
    'quantum applications',
    'quantum technology',
    'quantum advantage'
  ],
  openGraph: {
    title: 'Quantum Computing Breakthroughs 2025 - Revolutionary Quantum Technologies',
    description: 'Discover the latest quantum computing breakthroughs in 2025. Explore fault-tolerant quantum systems and quantum internet.',
    type: 'website',
    url: 'https://zion.tech/quantum-computing-breakthroughs',
    images: [
      {
        url: '/og-quantum-breakthroughs-2025.png',
        width: 1200,
        height: 630,
        alt: 'Quantum Computing Breakthroughs 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Computing Breakthroughs 2025',
    description: 'Discover the latest quantum computing breakthroughs in 2025. Explore fault-tolerant quantum systems and quantum internet.',
    images: ['/og-quantum-breakthroughs-2025.png'],
  },
  alternates: {
    canonical: 'https://zion.tech/quantum-computing-breakthroughs',
  },
};

const QuantumComputingBreakthroughsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <SEO 
              title="Quantum Computing Breakthroughs 2025 - Revolutionary Quantum Technologies"
              description="Discover the latest quantum computing breakthroughs in 2025. Explore fault-tolerant quantum systems, quantum internet, and exponential speedup applications."
              keywords="quantum computing 2025, quantum breakthroughs, quantum internet, fault-tolerant quantum, quantum algorithms, quantum cryptography, quantum machine learning, quantum applications, quantum technology, quantum advantage"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
              {/* Hero Section */}
              <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      Quantum Computing
                      <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Breakthroughs 2025
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                      Revolutionary quantum technologies achieving practical applications with fault-tolerant computing, 
                      quantum internet, and exponential speedup in real-world scenarios.
                    </p>
                  </div>
                </div>
              </section>

              {/* Promotion Banner */}
              <Suspense fallback={<LoadingSpinner />}>
                <QuantumComputingBreakthroughPromotionBanner2025 />
              </Suspense>

              {/* Main Content Showcase */}
              <Suspense fallback={<LoadingSpinner />}>
                <QuantumComputingBreakthroughShowcase2025 />
              </Suspense>

              {/* Additional Content Sections */}
              <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      The Quantum Revolution is Here
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                      2025 marks the year when quantum computing transitions from experimental to practical, 
                      with real-world applications delivering unprecedented computational advantages.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚛️</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">1000+ Qubits</h3>
                      <p className="text-gray-300 text-sm">
                        Commercial quantum computers with over 1000 qubits achieving quantum advantage.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Quantum Internet</h3>
                      <p className="text-gray-300 text-sm">
                        First quantum communication networks enabling secure quantum key distribution.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Fault-Tolerant</h3>
                      <p className="text-gray-300 text-sm">
                        Quantum error correction enabling reliable quantum computation at scale.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Exponential Speedup</h3>
                      <p className="text-gray-300 text-sm">
                        Quantum algorithms solving problems impossible for classical computers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </EnhancedErrorBoundary>
    </ErrorBoundary>
  );
};

export default QuantumComputingBreakthroughsPage;