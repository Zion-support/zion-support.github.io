import React from 'react';
import { Suspense } from 'react';
import AdvancedPerformanceOptimizer from '../../components/AdvancedPerformanceOptimizer';
import AIContentGenerator from '../../components/AIContentGenerator';
import AdvancedAnalyticsDashboard from '../../components/AdvancedAnalyticsDashboard';
import EnhancedSEO from '../../components/EnhancedSEO';
import PerformanceMonitor from '../../components/PerformanceMonitor';
import EnhancedLoadingSpinner from '../../components/EnhancedLoadingSpinner';
import EnhancedErrorBoundary from '../../components/EnhancedErrorBoundary';
import InteractiveAICalculator from '../../components/InteractiveAICalculator';

export default function EnhancedDemoPage() {
  return (
    <EnhancedErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <EnhancedSEO 
          title="Enhanced Demo - Advanced Features"
          description="Demonstration of all advanced components and features"
          keywords={['demo', 'enhanced', 'advanced', 'features', 'components']}
        />
        
        <Suspense fallback={<EnhancedLoadingSpinner variant="fullscreen" />}>
          <div className="container mx-auto px-4 py-8 space-y-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Enhanced Features Demo
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Experience all the advanced components and features in action. 
                This page demonstrates performance optimization, AI content generation, 
                analytics, and interactive tools.
              </p>
            </div>

            <PerformanceMonitor />
            
            <AdvancedPerformanceOptimizer />
            
            <AIContentGenerator />
            
            <AdvancedAnalyticsDashboard />
            
            <InteractiveAICalculator />
          </div>
        </Suspense>
      </div>
    </EnhancedErrorBoundary>
  );
}