import React from 'react';
import { Helmet } from 'react-helmet-async';

const AnalyticsDashboardPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced analytics dashboard with real-time data visualization, AI-powered insights, and comprehensive reporting capabilities." />
        <meta name="keywords" content="analytics dashboard, data visualization, business intelligence, reporting, insights, metrics" />
        <link rel="canonical" href="https://ziontechgroup.com/analytics-dashboard" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Analytics Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced analytics dashboard featuring real-time visualization and AI-powered intelligence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Analytics</h3>
              <p className="text-gray-300 mb-6">Live data streaming with instant updates and real-time performance monitoring.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Live data streaming</li>
                <li>• Instant updates</li>
                <li>• Performance monitoring</li>
                <li>• Alert system</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Insights</h3>
              <p className="text-gray-300 mb-6">Machine learning algorithms provide predictive analytics and intelligent recommendations.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Predictive analytics</li>
                <li>• Smart recommendations</li>
                <li>• Anomaly detection</li>
                <li>• Trend analysis</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Custom Dashboards</h3>
              <p className="text-gray-300 mb-6">Create personalized dashboards with drag-and-drop widgets and customizable layouts.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Drag-and-drop interface</li>
                <li>• Custom widgets</li>
                <li>• Flexible layouts</li>
                <li>• Role-based views</li>
              </ul>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Dashboard Preview</h2>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Revenue Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Revenue</span>
                      <span className="text-2xl font-bold text-green-400">$124,567</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Growth Rate</span>
                      <span className="text-lg font-semibold text-cyan-400">+12.5%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">User Engagement</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Active Users</span>
                      <span className="text-2xl font-bold text-blue-400">8,432</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Session Duration</span>
                      <span className="text-lg font-semibold text-purple-400">4m 32s</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Conversion Rate</span>
                      <span className="text-2xl font-bold text-purple-400">3.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bounce Rate</span>
                      <span className="text-lg font-semibold text-orange-400">24.1%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Real-Time Data Flow</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">1,247</div>
                    <div className="text-sm text-gray-400">Page Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">342</div>
                    <div className="text-sm text-gray-400">New Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">89</div>
                    <div className="text-sm text-gray-400">Conversions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$2,847</div>
                    <div className="text-sm text-gray-400">Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Interactive Visualizations</h3>
                    <p className="text-gray-300">Create stunning charts, graphs, and interactive visualizations with our powerful charting library.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Real-Time Updates</h3>
                    <p className="text-gray-300">Get instant updates as data changes with our real-time streaming technology.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Advanced Filtering</h3>
                    <p className="text-gray-300">Filter and segment your data with powerful query tools and custom date ranges.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Automated Reports</h3>
                    <p className="text-gray-300">Schedule and automate report generation with customizable templates and delivery options.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Export</h3>
                    <p className="text-gray-300">Export your data in multiple formats including CSV, PDF, and Excel for further analysis.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Secure Access</h3>
                    <p className="text-gray-300">Role-based access control and enterprise-grade security to protect your sensitive data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start making data-driven decisions with our powerful analytics dashboard. Get insights that matter to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboardPage;