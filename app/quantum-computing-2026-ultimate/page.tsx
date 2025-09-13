import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';
import EnhancedErrorBoundary from '../../../components/EnhancedErrorBoundary';
import LoadingSpinner from '../../../components/LoadingSpinner';
import PerformanceMonitor from '../../../components/PerformanceMonitor';
import AccessibilityEnhancer from '../../../components/AccessibilityEnhancer';
import QuantumComputing2026UltimateShowcase from '../../../components/QuantumComputing2026UltimateShowcase';
import QuantumComputing2026UltimatePromotionBanner from '../../../components/QuantumComputing2026UltimatePromotionBanner';

const QuantumComputing2026UltimatePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <SEO 
              title="Quantum Computing 2026 Ultimate Revolution - Zion Tech Group"
              description="Experience the next generation of quantum computing technology with error-corrected systems, quantum machine learning, and unhackable quantum internet infrastructure. 10,000x quantum advantage."
              keywords="quantum computing 2026, error-corrected quantum, quantum machine learning, quantum internet, quantum-AI fusion, quantum supremacy, quantum advantage"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
              {/* Hero Section */}
              <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      Quantum Computing 2026
                      <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Ultimate Revolution
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                      Experience the most advanced quantum computing solutions with error-corrected systems, 
                      quantum machine learning, and unhackable quantum internet infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        to="/contact" 
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Schedule Quantum Demo
                      </Link>
                      <Link 
                        to="/case-studies" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                      >
                        View Quantum Case Studies
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quantum Computing 2026 Ultimate Showcase */}
              <QuantumComputing2026UltimateShowcase />

              {/* Call to Action Section */}
              <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready for Quantum Revolution?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join the quantum computing revolution and gain a competitive advantage 
                    with the most advanced quantum technologies available.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      Get Quantum Consultation
                    </Link>
                    <Link
                      to="/resources"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                    >
                      Download Quantum Guide
                    </Link>
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

export default QuantumComputing2026UltimatePage;