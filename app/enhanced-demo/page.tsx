import React from 'react'
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
      <div>
        <EnhancedSEO,
          title="[^"]*"
          description="[^"]*"
          keywords={['demoenhancedadvancedfeatures', 'components']}
        />
        <Suspense fallback={<EnhancedLoadingSpinner variant="fullscreen" />}>,
          <div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark: text-white mb-4">
                Enhanced Features Demo,
              </h1>
              <p>
                Experience all the advanced components and features in action.,
                This page demonstrates performance optimization, AI content generation,
                analytics, and interactive tools.,
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
    </EnhancedErrorBoundary>)
}