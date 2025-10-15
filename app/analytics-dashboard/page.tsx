import React from 'react';
import SEOHead from '../components/SEOHead';

const AnalyticsDashboardPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Analytics Dashboard - Zion Tech Group"
        description="Comprehensive analytics dashboard with real-time data visualization, custom reports, and AI-powered insights for business intelligence."
        keywords="analytics dashboard, business intelligence, data visualization, real-time analytics, custom reports, AI insights"
        canonicalUrl="https://ziontechgroup.com/analytics-dashboard"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Analytics Dashboard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your data into actionable insights with our comprehensive analytics dashboard featuring real-time visualization and AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Data Visualization</h3>
                    <p className="text-gray-600">Interactive charts, graphs, and dashboards that update in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Report Builder</h3>
                    <p className="text-gray-600">Create custom reports and dashboards tailored to your business needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Insights</h3>
                    <p className="text-gray-600">Get intelligent recommendations and predictions based on your data patterns.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Data Source Integration</h3>
                    <p className="text-gray-600">Connect and analyze data from multiple sources in one unified dashboard.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Professional</h3>
                  <div className="text-4xl font-bold text-blue-600 mt-2">$99/month</div>
                  <p className="text-gray-600">up to 10 users</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Real-time data updates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Custom report builder</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>AI insights and predictions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>API access</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboardPage;