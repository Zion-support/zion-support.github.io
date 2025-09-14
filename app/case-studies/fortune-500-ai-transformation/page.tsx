import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fortune 500 AI Transformation: 340% ROI in 12 Months | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. Learn about the implementation strategy and key success factors.',
  keywords: ['Fortune 500', 'AI transformation', 'ROI', 'case study', 'enterprise AI', 'success story'],
};

export default function Fortune500AITransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fortune 500 AI Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              How a Fortune 500 manufacturing company achieved <span className="font-bold text-yellow-300">340% ROI</span> in just 12 months 
              through comprehensive AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Similar Results
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Our AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Results Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600 font-semibold">ROI Achieved</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$195M</div>
              <div className="text-gray-600 font-semibold">Annual Savings</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600 font-semibold">Months</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">AI Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Company Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry & Scale</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <strong>Sector:</strong> Global Manufacturing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <strong>Revenue:</strong> $15+ billion annually
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <strong>Employees:</strong> 50,000+ worldwide
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <strong>Operations:</strong> 200+ facilities across 40 countries
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Initial Challenges</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  Operational inefficiency with manual processes
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  Complex global supply chain management
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  Inconsistent product quality across facilities
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  Rising operational costs and competitive pressure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Implemented */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Solutions Implemented</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Maintenance</h3>
              <p className="text-gray-600 mb-4">
                AI-powered equipment failure prediction with 95% accuracy, resulting in 40% reduction in unplanned downtime.
              </p>
              <div className="text-green-600 font-semibold">$50M Annual Savings</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Optimization</h3>
              <p className="text-gray-600 mb-4">
                Intelligent demand forecasting and inventory management with 25% improvement in inventory turnover.
              </p>
              <div className="text-green-600 font-semibold">$75M Annual Savings</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Control</h3>
              <p className="text-gray-600 mb-4">
                Automated defect detection with 60% reduction in defect rates and 95% accuracy in detection.
              </p>
              <div className="text-green-600 font-semibold">$40M Annual Savings</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Robotic process automation for routine tasks with 50% reduction in manual processing time.
              </p>
              <div className="text-green-600 font-semibold">$30M Annual Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 1-2: Assessment & Planning</h3>
                <p className="text-gray-600">Comprehensive analysis of current state, data assessment, and strategic planning for AI implementation.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 3-4: Foundation Building</h3>
                <p className="text-gray-600">Infrastructure development, cloud migration, data integration, and team training.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 5-6: Pilot Implementation</h3>
                <p className="text-gray-600">Selected use case testing with predictive maintenance, supply chain optimization, and quality control.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Months 7-12: Full Deployment</h3>
                <p className="text-gray-600">Enterprise-wide rollout, advanced applications, and continuous optimization across all facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Success Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Commitment</h3>
              <p className="text-gray-600">Strong executive sponsorship and adequate resource allocation were crucial for success.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-600">Right technology choices, scalable architecture, and comprehensive data strategy.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organizational Readiness</h3>
              <p className="text-gray-600">AI-first culture, comprehensive training, and effective change management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact Zion Tech Group to learn how our proven AI transformation strategies can deliver 
            exceptional ROI for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}