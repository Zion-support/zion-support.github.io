import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard(): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Advanced Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive analytics dashboard with advanced performance monitoring, security analysis, SEO optimization, and accessibility insights" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech
                </Link>
                <div className="hidden md:flex space-x-8">
                  <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
                  <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Dashboard</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Dashboard</h1>
            <p className="text-gray-600">Monitor your system performance, security, and analytics</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'performance', 'security', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1.2s</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">1,234</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">0</div>
                    <div className="text-sm text-gray-600">Issues</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performance' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
                <p className="text-gray-600">Performance monitoring data will be displayed here.</p>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Security Status</h2>
                <p className="text-gray-600">Security monitoring data will be displayed here.</p>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Analytics</h2>
                <p className="text-gray-600">Analytics data will be displayed here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}