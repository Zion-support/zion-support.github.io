import React from 'react';
import { Link } from 'react-router-dom';

export default function NewServicesShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-emerald-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            New Services Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Services for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest AI-powered services designed to transform your business operations, 
            reduce costs, and accelerate growth with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">🤖</span>
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  New Service
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              AI Autonomous Operations
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Self-healing infrastructure that automatically detects, diagnoses, and resolves issues 
              without human intervention. Achieve 99.99% uptime.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-blue-600">$2,499/month</div>
              <div className="text-sm text-gray-500">Starting at</div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>90% downtime reduction</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>15-second resolution time</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>24/7 autonomous monitoring</span>
              </div>
            </div>
            <Link
              to="/services/ai-autonomous-operations"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">📊</span>
              </div>
              <div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Popular
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Supply Chain AI Optimization
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              AI-powered supply chain optimization that reduces costs by 60% and improves efficiency by 95% 
              through intelligent demand forecasting and inventory management.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-green-600">$1,999/month</div>
              <div className="text-sm text-gray-500">Starting at</div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>60% cost reduction</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>95% efficiency improvement</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Real-time optimization</span>
              </div>
            </div>
            <Link
              to="/services/supply-chain-ai-optimization"
              className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">🏢</span>
              </div>
              <div>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Enterprise
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              AI Enterprise Transformation
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Complete AI transformation service that delivers 300% ROI and 85% efficiency improvement 
              through comprehensive strategy, implementation, and optimization.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-bold text-purple-600">Custom</div>
              <div className="text-sm text-gray-500">Pricing</div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>300% average ROI</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>85% efficiency gain</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>End-to-end transformation</span>
              </div>
            </div>
            <Link
              to="/services/ai-enterprise-transformation"
              className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of companies already using our AI services to achieve unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
          <div className="mt-6 text-sm opacity-75">
            <p>📞 Call +1 302 464 0950 | 📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}