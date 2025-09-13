import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

const AI2025EnterpriseTransformationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <SEO
        title="AI 2025 Enterprise Transformation - Transform Your Business with AI"
        description="Discover how AI can transform your enterprise in 2025. Comprehensive strategies, implementation guides, and success frameworks for digital transformation."
        keywords="enterprise AI, digital transformation, business transformation, AI strategy, enterprise solutions, 2025"
      />
      
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-600 text-white animate-pulse">
                  🏢 ENTERPRISE TRANSFORMATION
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                AI 2025 Enterprise Transformation
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Transform your enterprise with cutting-edge AI technologies. Comprehensive strategies, 
                proven frameworks, and expert guidance for successful digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#transformation-framework"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Transformation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Framework Section */}
        <section id="transformation-framework" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Transformation Framework
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive 5-phase framework has helped 500+ enterprises successfully 
                transform their operations with AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Phase 1 */}
              <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-6 border border-purple-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive analysis of current state, opportunities, and readiness for AI transformation.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-br from-pink-800 to-pink-900 rounded-2xl p-6 border border-pink-700 hover:border-pink-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Strategy</h3>
                <p className="text-gray-300 text-sm">
                  Develop comprehensive AI strategy aligned with business objectives and market opportunities.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 border border-red-700 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300 text-sm">
                  Execute AI solutions with agile methodology, ensuring minimal disruption to operations.
                </p>
              </div>

              {/* Phase 4 */}
              <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-2xl p-6 border border-orange-700 hover:border-orange-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Optimization</h3>
                <p className="text-gray-300 text-sm">
                  Continuously optimize AI systems for maximum performance and business value.
                </p>
              </div>

              {/* Phase 5 */}
              <div className="bg-gradient-to-br from-yellow-800 to-yellow-900 rounded-2xl p-6 border border-yellow-700 hover:border-yellow-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">5</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Scale</h3>
                <p className="text-gray-300 text-sm">
                  Scale successful AI initiatives across the entire organization for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformation Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements across all aspects of your enterprise operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">85%</h3>
                <p className="text-gray-300">Average Efficiency Increase</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">$2.5M</h3>
                <p className="text-gray-300">Average Annual Savings</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">60%</h3>
                <p className="text-gray-300">Faster Decision Making</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
                <p className="text-gray-300">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored AI transformation strategies for different industries and business models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Financial Services</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered risk assessment, fraud detection, and automated trading systems 
                  for financial institutions.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Risk Management AI</li>
                  <li>• Fraud Detection</li>
                  <li>• Algorithmic Trading</li>
                  <li>• Customer Analytics</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-pink-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Healthcare</h3>
                <p className="text-gray-300 mb-6">
                  AI-driven diagnostics, treatment optimization, and patient care management 
                  for healthcare providers.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Diagnostic AI</li>
                  <li>• Treatment Planning</li>
                  <li>• Patient Monitoring</li>
                  <li>• Drug Discovery</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Manufacturing</h3>
                <p className="text-gray-300 mb-6">
                  Smart manufacturing with predictive maintenance, quality control, 
                  and supply chain optimization.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Predictive Maintenance</li>
                  <li>• Quality Control</li>
                  <li>• Supply Chain AI</li>
                  <li>• Process Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ successful enterprises that have transformed their operations 
              with our proven AI transformation framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/ai-2025-advanced-automation-mastery"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AI2025EnterpriseTransformationPage;