import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import EnhancedErrorBoundary from '../../components/EnhancedErrorBoundary';
import LoadingSpinner from '../../components/LoadingSpinner';
import PerformanceMonitor from '../../components/PerformanceMonitor';
import AccessibilityEnhancer from '../../components/AccessibilityEnhancer';
import AIInsightsTrends2025 from '../../components/AIInsightsTrends2025';
import ComprehensiveContentDiscovery2025 from '../../components/ComprehensiveContentDiscovery2025';

const AIInsightsPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <SEO 
              title="AI Insights & Trends 2025 - Zion Tech Group"
              description="Discover the latest AI insights, market trends, breakthrough discoveries, and emerging technologies shaping the future of artificial intelligence in 2025."
              keywords="AI insights, AI trends 2025, artificial intelligence trends, machine learning insights, AI market analysis, technology trends"
            />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              {/* Hero Section */}
              <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      AI Insights & Trends 2025
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                      Stay ahead of the curve with the latest AI insights, market analysis, and breakthrough discoveries
                    </p>
                  </div>
                </div>
              </section>

              {/* AI Insights & Trends Component */}
              <AIInsightsTrends2025 />

              {/* Comprehensive Content Discovery */}
              <ComprehensiveContentDiscovery2025 />
            </div>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </EnhancedErrorBoundary>
    </ErrorBoundary>
  );
};

export default AIInsightsPage;