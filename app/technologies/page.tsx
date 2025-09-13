import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import EnhancedErrorBoundary from '../../components/EnhancedErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import PerformanceMonitor from '../../components/PerformanceMonitor';
import AccessibilityEnhancer from '../../components/AccessibilityEnhancer';
import TechnologyShowcase2025 from '../../components/TechnologyShowcase2025';
import ComprehensiveContentDiscovery2025 from '../../components/ComprehensiveContentDiscovery2025';

const TechnologiesPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <SEO 
              title="Revolutionary Technology Stack - Zion Tech Group"
              description="Explore our cutting-edge technology stack including AI systems, quantum computing, edge processing, and advanced security solutions."
              keywords="AI technology, quantum computing, edge AI, AI security, cloud infrastructure, data analytics, technology stack"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
              {/* Hero Section */}
              <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      Revolutionary Technology Stack
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                      Discover the cutting-edge technologies powering the future of artificial intelligence and digital transformation
                    </p>
                  </div>
                </div>
              </section>

              {/* Technology Showcase */}
              <TechnologyShowcase2025 />

              {/* Comprehensive Content Discovery */}
              <ComprehensiveContentDiscovery2025 />
            </div>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </EnhancedErrorBoundary>
    </ErrorBoundary>
  );
};

export default TechnologiesPage;