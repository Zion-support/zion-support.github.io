import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Analytics Platform - Zion Tech Group',
  description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform. Real-time dashboards, predictive analytics, and intelligent reporting.',
  keywords: 'AI analytics, data analytics, business intelligence, predictive analytics, data visualization, machine learning',
  openGraph: {
    title: 'AI-Powered Analytics Platform',
    description: 'Unlock the power of your data with advanced AI-driven analytics and insights.',
    type: 'website',
  },
};

export default function AIPoweredAnalyticsPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
            Advanced Analytics • AI-Powered
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Analytics Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our cutting-edge AI-powered analytics platform. 
            Get real-time dashboards, predictive analytics, and intelligent reporting that drives business growth.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Dashboards</h3>
            <p className="text-gray-600">
              Monitor your business metrics in real-time with interactive, customizable dashboards 
              that update automatically.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔮</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">
              Leverage machine learning to predict trends, identify opportunities, and make 
              data-driven decisions with confidence.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Insights</h3>
            <p className="text-gray-600">
              Get intelligent recommendations and automated insights that help you understand 
              your data and optimize performance.
            </p>
          </div>
        </div>

        {/* Platform Capabilities */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">📈 Advanced Analytics Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Source Data Integration</h4>
                    <p className="text-gray-600 text-sm">Connect to any data source - databases, APIs, files, cloud services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automated Data Processing</h4>
                    <p className="text-gray-600 text-sm">AI-powered data cleaning, transformation, and enrichment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Visualization</h4>
                    <p className="text-gray-600 text-sm">Interactive charts, graphs, and custom visualizations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Natural Language Queries</h4>
                    <p className="text-gray-600 text-sm">Ask questions in plain English and get instant answers</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">🧠 AI-Powered Intelligence</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Anomaly Detection</h4>
                    <p className="text-gray-600 text-sm">Automatically identify unusual patterns and outliers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">6</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trend Forecasting</h4>
                    <p className="text-gray-600 text-sm">Predict future trends and business outcomes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">7</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automated Reporting</h4>
                    <p className="text-gray-600 text-sm">Generate intelligent reports with key insights</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">8</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Alerts</h4>
                    <p className="text-gray-600 text-sm">Get notified of important changes and opportunities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Industry Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">🏪 Retail & E-commerce</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>• Customer behavior analysis</li>
                <li>• Inventory optimization</li>
                <li>• Price optimization</li>
                <li>• Sales forecasting</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">🏥 Healthcare</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>• Patient outcome prediction</li>
                <li>• Resource utilization</li>
                <li>• Treatment effectiveness</li>
                <li>• Operational efficiency</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">🏦 Financial Services</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>• Risk assessment</li>
                <li>• Fraud detection</li>
                <li>• Market analysis</li>
                <li>• Customer segmentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 Technical Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Cloud-native architecture with auto-scaling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Real-time data processing and streaming
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Advanced security and compliance (SOC 2, GDPR)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  RESTful APIs and webhook integrations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Mobile-responsive design
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Data Sources Supported</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  SQL databases (MySQL, PostgreSQL, SQL Server)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  NoSQL databases (MongoDB, Cassandra)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Cloud platforms (AWS, Azure, GCP)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  APIs and web services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  File formats (CSV, JSON, XML, Excel)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$299<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>✓ Up to 5 data sources</li>
                <li>✓ 10GB data storage</li>
                <li>✓ Basic dashboards</li>
                <li>✓ Email support</li>
              </ul>
              <a href="/contact" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-indigo-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$799<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>✓ Up to 25 data sources</li>
                <li>✓ 100GB data storage</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Predictive models</li>
                <li>✓ Priority support</li>
              </ul>
              <a href="/contact" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-indigo-700 transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li>✓ Unlimited data sources</li>
                <li>✓ Unlimited storage</li>
                <li>✓ Custom AI models</li>
                <li>✓ White-label solution</li>
                <li>✓ Dedicated support</li>
              </ul>
              <a href="/contact" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-indigo-700 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start your journey with AI-powered analytics today. Get a free consultation and see how 
            our platform can revolutionize your business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}