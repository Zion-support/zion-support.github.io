import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import EnhancedErrorBoundary from '../../components/EnhancedErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import PerformanceMonitor from '../../components/PerformanceMonitor';
import AccessibilityEnhancer from '../../components/AccessibilityEnhancer';
import SuccessStoriesShowcase2025 from '../../components/SuccessStoriesShowcase2025';
import ComprehensiveContentDiscovery2025 from '../../components/ComprehensiveContentDiscovery2025';

const SuccessStoriesPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <SEO 
              title="Success Stories - Zion Tech Group"
              description="Discover real success stories from companies achieving 2,500%+ ROI with our AI solutions. See how organizations across industries are transforming with AI."
              keywords="AI success stories, case studies, ROI stories, AI implementation success, business transformation, AI results"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              {/* Hero Section */}
              <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      Success Stories That Inspire
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                      Real results from real companies. See how organizations are achieving unprecedented success with our AI solutions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Success Stories Showcase */}
              <SuccessStoriesShowcase2025 />

              {/* Comprehensive Content Discovery */}
              <ComprehensiveContentDiscovery2025 />
            </div>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </EnhancedErrorBoundary>
    </ErrorBoundary>
  );
};

export default SuccessStoriesPage;