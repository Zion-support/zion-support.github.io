import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Manufacturing Automation Services - Zion Tech Group',
  description: 'Transform your manufacturing operations with AI-powered automation. Achieve 85% efficiency gains and $15M+ annual savings with our proven solutions.',
  keywords: 'AI manufacturing automation, industrial AI, predictive maintenance, quality control, supply chain optimization, manufacturing efficiency',
};

export default function AIManufacturingAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Manufacturing Automation
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">
            Transform your manufacturing operations with AI-powered automation that delivers 85% efficiency gains and $15M+ annual savings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies/ai-manufacturing-transformation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Story
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Manufacturing Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven AI solutions have helped manufacturers achieve unprecedented efficiency and cost savings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">85% Efficiency Gain</h3>
              <p className="text-gray-600">Dramatically improve production efficiency with AI-powered optimization</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$15M+ Annual Savings</h3>
              <p className="text-gray-600">Achieve significant cost reductions through intelligent automation</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">99.5% Quality Accuracy</h3>
              <p className="text-gray-600">Ensure consistent quality with AI-powered defect detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our AI Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to transform every aspect of your manufacturing operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Maintenance</h3>
              <p className="text-gray-600 mb-6">Prevent equipment failures with AI-powered predictive analytics that reduce downtime by 90%</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Real-time sensor data analysis</li>
                <li>• 30-day failure prediction accuracy</li>
                <li>• Automated maintenance scheduling</li>
                <li>• Integration with existing systems</li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-2">$2,999/month</div>
              <div className="text-sm text-gray-500">Per production line</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Quality Control</h3>
              <p className="text-gray-600 mb-6">Achieve 99.5% defect detection accuracy with computer vision and machine learning</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Real-time defect detection</li>
                <li>• Computer vision integration</li>
                <li>• Automated quality reporting</li>
                <li>• Custom model training</li>
              </ul>
              <div className="text-2xl font-bold text-green-600 mb-2">$1,999/month</div>
              <div className="text-sm text-gray-500">Per inspection station</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-6">Optimize inventory and demand forecasting with AI-powered supply chain management</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Demand forecasting</li>
                <li>• Inventory optimization</li>
                <li>• Supplier performance analysis</li>
                <li>• Risk assessment</li>
              </ul>
              <div className="text-2xl font-bold text-purple-600 mb-2">$3,999/month</div>
              <div className="text-sm text-gray-500">Per facility</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Production Optimization</h3>
              <p className="text-gray-600 mb-6">Maximize throughput and minimize waste with AI-driven production scheduling</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Intelligent scheduling</li>
                <li>• Resource allocation</li>
                <li>• Waste reduction</li>
                <li>• Performance monitoring</li>
              </ul>
              <div className="text-2xl font-bold text-orange-600 mb-2">$2,499/month</div>
              <div className="text-sm text-gray-500">Per production line</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Energy Optimization</h3>
              <p className="text-gray-600 mb-6">Reduce energy consumption by 30% with AI-powered energy management systems</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Energy consumption monitoring</li>
                <li>• Predictive energy optimization</li>
                <li>• Carbon footprint reduction</li>
                <li>• Sustainability reporting</li>
              </ul>
              <div className="text-2xl font-bold text-teal-600 mb-2">$1,499/month</div>
              <div className="text-sm text-gray-500">Per facility</div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive AI Platform</h3>
              <p className="text-gray-600 mb-6">Complete AI transformation with all services integrated into one platform</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• All services included</li>
                <li>• Unified dashboard</li>
                <li>• 24/7 support</li>
                <li>• Custom integrations</li>
              </ul>
              <div className="text-2xl font-bold text-indigo-600 mb-2">$9,999/month</div>
              <div className="text-sm text-gray-500">Per facility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI manufacturing solutions have delivered measurable results across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-lg text-gray-600 mb-2">Efficiency Improvement</div>
              <div className="text-sm text-gray-500">Average across all clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">$15M</div>
              <div className="text-lg text-gray-600 mb-2">Annual Savings</div>
              <div className="text-sm text-gray-500">Average cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">90%</div>
              <div className="text-lg text-gray-600 mb-2">Downtime Reduction</div>
              <div className="text-sm text-gray-500">Through predictive maintenance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">99.5%</div>
              <div className="text-lg text-gray-600 mb-2">Quality Accuracy</div>
              <div className="text-sm text-gray-500">Defect detection rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600">Comprehensive analysis of your current operations and AI readiness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pilot</h3>
              <p className="text-gray-600">Deploy AI solutions in a controlled environment to validate results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scale</h3>
              <p className="text-gray-600">Roll out AI solutions across all production lines and facilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimize</h3>
              <p className="text-gray-600">Continuously improve and optimize AI models for maximum performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join leading manufacturers who have achieved 85% efficiency gains and $15M+ annual savings with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies/ai-manufacturing-transformation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Success Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}