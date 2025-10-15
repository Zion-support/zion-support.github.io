import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIDataAnalyticsPlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Data Analytics Platform - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered analytics. Real-time dashboards, predictive analytics, and automated reporting." />
        <meta name="keywords" content="AI data analytics, business intelligence, predictive analytics, data visualization, automated reporting, data insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Data Analytics Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with AI-powered analytics. 
              Get real-time dashboards, predictive analytics, and automated reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-data-analytics-platform" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">
                Start Free Trial
              </a>
              <Link to="/contact" className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">
                View Demo
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advanced Analytics Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Dashboards</h3>
                <p className="text-gray-600 mb-4">
                  Create interactive dashboards with live data updates and customizable visualizations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Live data streaming</li>
                  <li>• Interactive charts</li>
                  <li>• Custom widgets</li>
                  <li>• Mobile responsive</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered forecasting and trend analysis to predict future outcomes and opportunities.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine learning models</li>
                  <li>• Trend forecasting</li>
                  <li>• Anomaly detection</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Insights</h3>
                <p className="text-gray-600 mb-4">
                  AI automatically discovers patterns, correlations, and insights from your data.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pattern recognition</li>
                  <li>• Auto-generated reports</li>
                  <li>• Insight recommendations</li>
                  <li>• Natural language queries</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Integration</h3>
                <p className="text-gray-600 mb-4">
                  Connect to 100+ data sources including databases, APIs, cloud services, and files.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Database connectors</li>
                  <li>• API integrations</li>
                  <li>• Cloud data sources</li>
                  <li>• File upload support</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Visualizations</h3>
                <p className="text-gray-600 mb-4">
                  Create stunning charts, graphs, and interactive visualizations with drag-and-drop simplicity.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 50+ chart types</li>
                  <li>• Interactive elements</li>
                  <li>• Custom styling</li>
                  <li>• Export capabilities</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Access your analytics anywhere with our mobile app and responsive web interface.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mobile app</li>
                  <li>• Push notifications</li>
                  <li>• Offline access</li>
                  <li>• Touch-optimized UI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Flexible Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-4">$79<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 5 data sources
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic dashboards
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Standard visualizations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-data-analytics-platform/starter" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center block">
                  Start Free Trial
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-indigo-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 25 data sources
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced dashboards
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Predictive analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    API access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-data-analytics-platform/professional" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-4">$599<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited data sources
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom AI models
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced security
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-data-analytics-platform/enterprise" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For Every Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">E-commerce</h3>
                <p className="text-gray-600 text-sm">
                  Track sales performance, customer behavior, and inventory optimization with real-time analytics.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing</h3>
                <p className="text-gray-600 text-sm">
                  Measure campaign effectiveness, track ROI, and optimize marketing spend with detailed insights.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Finance</h3>
                <p className="text-gray-600 text-sm">
                  Monitor financial performance, detect fraud, and predict cash flow with advanced analytics.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Analyze patient data, track outcomes, and improve care quality with healthcare analytics.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing</h3>
                <p className="text-gray-600 text-sm">
                  Optimize production, predict maintenance needs, and improve quality with IoT analytics.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">SaaS</h3>
                <p className="text-gray-600 text-sm">
                  Track user engagement, churn prediction, and feature usage to improve product decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Analytics Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Instant Insights</h3>
                <p className="text-gray-600">
                  Get actionable insights in minutes, not months. Our AI automatically analyzes your data 
                  and presents key findings in easy-to-understand visualizations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Self-Service Analytics</h3>
                <p className="text-gray-600">
                  Empower your team with self-service analytics. No technical skills required - 
                  anyone can create reports and dashboards using our intuitive interface.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔮 Predictive Power</h3>
                <p className="text-gray-600">
                  Stay ahead of trends with AI-powered predictions. Forecast sales, identify risks, 
                  and discover opportunities before your competitors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Cost Effective</h3>
                <p className="text-gray-600">
                  Reduce analytics costs by up to 70% compared to traditional BI solutions. 
                  No expensive consultants or complex implementations required.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Transform Your Data Into Insights</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses using AI to make better decisions with their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-data-analytics-platform" className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </a>
              <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDataAnalyticsPlatformPage;