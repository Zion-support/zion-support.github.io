import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SaaS Development
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build and launch your next micro SaaS product with our full-stack development expertise 
              and rapid deployment capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you build, launch, and scale micro SaaS products that generate revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MVP Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rapid MVP development to validate your idea and get to market quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Rapid prototyping
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  User feedback integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Iterative development
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Tools</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build AI-powered micro SaaS tools that solve specific business problems.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Custom AI models
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  API integrations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Real-time processing
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build analytics and business intelligence tools for data-driven decisions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Data visualization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Custom dashboards
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Automated reporting
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation Tools</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create automation tools that streamline business processes and workflows.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Workflow automation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Integration services
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Custom triggers
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">💳</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seamless payment processing and subscription management for your SaaS.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Stripe integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Subscription management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Billing automation
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ongoing maintenance and support to keep your micro SaaS running smoothly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  24/7 monitoring
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Regular updates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Performance optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Micro SaaS?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your micro SaaS idea and help you bring it to market.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}