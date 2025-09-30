import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Business Automation Platform - Zion Tech Group',
  description: 'Transform your business with our comprehensive AI automation platform. Streamline operations, reduce costs, and boost productivity with intelligent automation solutions.',
  keywords: 'AI business automation, intelligent automation, workflow automation, business process automation, AI platform',
};

export default function AIBusinessAutomationPlatform() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Business Automation Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Revolutionize your business operations with intelligent automation that adapts, learns, and optimizes in real-time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </a>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Automation Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform delivers intelligent automation across all business functions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Workflow Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate complex business processes with AI that learns from patterns and optimizes workflows in real-time.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Process mining and optimization</li>
                <li>• Dynamic workflow adaptation</li>
                <li>• Exception handling and resolution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Document Processing</h3>
              <p className="text-gray-600 mb-4">
                Extract, analyze, and process documents with 99%+ accuracy using advanced OCR and NLP technologies.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Invoice and contract processing</li>
                <li>• Data extraction and validation</li>
                <li>• Automated compliance checking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Deploy intelligent chatbots and virtual assistants that provide 24/7 customer support with human-like interactions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Natural language understanding</li>
                <li>• Multi-channel support</li>
                <li>• Escalation to human agents</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Leverage machine learning to predict trends, identify opportunities, and make data-driven business decisions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Demand forecasting</li>
                <li>• Risk assessment</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate financial processes including invoicing, expense management, and financial reporting with AI precision.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automated invoicing</li>
                <li>• Expense categorization</li>
                <li>• Financial reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize your supply chain with AI-driven demand forecasting, inventory management, and logistics automation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Inventory optimization</li>
                <li>• Demand forecasting</li>
                <li>• Logistics automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Business Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of companies achieving remarkable results with our AI automation platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">85%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Cost Reduction</div>
              <div className="text-gray-600">Average operational cost savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">300%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Productivity Increase</div>
              <div className="text-gray-600">Team productivity improvement</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">99.5%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Accuracy Rate</div>
              <div className="text-gray-600">Process automation accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-4">24/7</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Always On</div>
              <div className="text-gray-600">Continuous automation</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Platform?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Enterprise-Grade Security</h4>
                <p className="text-gray-700 mb-4">
                  Bank-level encryption, compliance with industry standards, and comprehensive audit trails ensure your data is always secure.
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Scalable Architecture</h4>
                <p className="text-gray-700">
                  Our platform scales seamlessly from small businesses to enterprise organizations, growing with your needs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Easy Integration</h4>
                <p className="text-gray-700 mb-4">
                  Connect with your existing systems through our comprehensive API and pre-built integrations with popular business tools.
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Continuous Learning</h4>
                <p className="text-gray-700">
                  Our AI continuously learns and improves from your business data, delivering better results over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with AI automation in just 4 weeks with our proven implementation methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Discovery & Analysis</h3>
              <p className="text-gray-600">
                We analyze your current processes, identify automation opportunities, and design a customized solution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Setup</h3>
              <p className="text-gray-600">
                Our team configures the AI platform, integrates with your systems, and sets up the automation workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Testing & Training</h3>
              <p className="text-gray-600">
                We conduct thorough testing, train your team, and ensure everything works perfectly before going live.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Launch & Support</h3>
              <p className="text-gray-600">
                We launch your automation platform and provide ongoing support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $2,999<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 5 automation workflows
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic AI features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Standard integrations
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">
                $7,999<span className="text-lg text-blue-200">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 20 automation workflows
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced AI features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Analytics dashboard
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                Custom<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited automation workflows
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full AI capabilities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 dedicated support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  On-premise deployment
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already transforming their operations with our AI automation platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Free Trial
            </a>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}