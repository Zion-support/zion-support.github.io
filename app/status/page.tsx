import React from 'react';
import { Helmet } from 'react-helmet-async';

const StatusPage = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time status of Zion Tech Group services and infrastructure. Monitor uptime and performance." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time monitoring of our services and infrastructure. We're committed to providing reliable, high-performance solutions.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Overall Status</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 font-semibold">All Systems Operational</span>
                </div>
              </div>
              <p className="text-gray-300">
                All services are running normally. No incidents reported in the last 30 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">API Services</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Core API endpoints and authentication services
                </p>
                <div className="text-sm text-gray-400">
                  <div>Uptime: 99.9%</div>
                  <div>Response Time: 45ms</div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">AI Services</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Machine learning models and AI processing
                </p>
                <div className="text-sm text-gray-400">
                  <div>Uptime: 99.8%</div>
                  <div>Response Time: 120ms</div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Cloud Infrastructure</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Cloud hosting and data storage services
                </p>
                <div className="text-sm text-gray-400">
                  <div>Uptime: 99.95%</div>
                  <div>Response Time: 25ms</div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Database</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Primary and replica database instances
                </p>
                <div className="text-sm text-gray-400">
                  <div>Uptime: 99.9%</div>
                  <div>Response Time: 15ms</div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">CDN</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Content delivery network and edge services
                </p>
                <div className="text-sm text-gray-400">
                  <div>Uptime: 99.99%</div>
                  <div>Response Time: 8ms</div>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Monitoring</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  System monitoring and alerting services
                </p>
                <div className="text-sm text-gray-400">
                  <div>Uptime: 100%</div>
                  <div>Response Time: 5ms</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">No Recent Incidents</h3>
                  <span className="text-sm text-gray-400">Last 30 days</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                  All systems have been running smoothly with no reported issues.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Average Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">45ms</div>
                <div className="text-gray-300">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you're experiencing issues or have questions about our services, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="/contact"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Report Issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusPage;