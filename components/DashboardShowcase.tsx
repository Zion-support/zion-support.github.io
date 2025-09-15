import React from 'react';
import Link from 'next/link';
import EnhancedPerformanceMonitor from './EnhancedPerformanceMonitor';
import AdvancedSecurityDashboard from './AdvancedSecurityDashboard';
import InteractiveAnalyticsWidget from './InteractiveAnalyticsWidget';

const DashboardShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Advanced Dashboard
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Real-time monitoringanalyticsand security insights for optimal system performance
          </p>
          <Link 
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Dashboard
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <EnhancedPerformanceMonitor />
          </div>
          <div className="lg:col-span-1">
            <AdvancedSecurityDashboard />
          </div>
          <div className="lg:col-span-1">
            <InteractiveAnalyticsWidget />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-2xl p-8 border border-blue-500/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Monitor Your Systems?</h3>
            <p className="text-gray-300 mb-6 text-lg max-w-3xl mx-auto">
              Get comprehensive insights into your application performancesecurity statusand user analytics with our advanced monitoring dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dashboard" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                View Full Dashboard
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-bold text-lg rounded-full transition-all duration-300"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;