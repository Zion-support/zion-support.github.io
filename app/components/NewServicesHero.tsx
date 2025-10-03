import React from 'react';
import { Link } from 'react-router-dom';

export default function NewServicesHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 New AI-Powered Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest innovative services designed to transform your business operations with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Content Optimization Suite</h3>
            <p className="text-gray-600 text-sm mb-4">Generate, optimize, and analyze content with AI-powered tools.</p>
            <div className="text-blue-600 font-semibold text-sm mb-3">Starting from $199/month</div>
            <Link to="/services/ai-content-optimization-suite" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Workflow Automation Platform</h3>
            <p className="text-gray-600 text-sm mb-4">Automate complex business processes with intelligent workflows.</p>
            <div className="text-green-600 font-semibold text-sm mb-3">Starting from $299/month</div>
            <Link to="/services/ai-workflow-automation-platform" className="text-green-600 hover:text-green-800 font-medium text-sm">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Customer Insights Platform</h3>
            <p className="text-gray-600 text-sm mb-4">Transform customer data into actionable business insights.</p>
            <div className="text-purple-600 font-semibold text-sm mb-3">Starting from $399/month</div>
            <Link to="/services/ai-customer-insights-platform" className="text-purple-600 hover:text-purple-800 font-medium text-sm">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Financial Analysis Platform</h3>
            <p className="text-gray-600 text-sm mb-4">Advanced financial analysis and forecasting with AI.</p>
            <div className="text-orange-600 font-semibold text-sm mb-3">Starting from $599/month</div>
            <Link to="/services/ai-financial-analysis-platform" className="text-orange-600 hover:text-orange-800 font-medium text-sm">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Rapid Implementation</h4>
                <p className="text-gray-600 text-sm">Get up and running in days, not months, with our pre-built AI solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 text-sm">Our clients see average ROI improvements of 300% within the first quarter.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                <p className="text-gray-600 text-sm">Bank-level security with SOC 2 compliance and end-to-end encryption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}