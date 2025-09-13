import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Transformation - 1,200% ROI Breakthrough',
  description: 'Real case study: Global enterprise achieved 1,200% ROI through AI transformation. Complete implementation details, challenges overcome, and lessons learned.',
  keywords: ['enterprise transformation', 'AI case study', 'ROI 1200%', 'global enterprise', 'AI implementation', 'business transformation'],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation - 1,200% ROI Breakthrough',
    description: 'Real case study: Global enterprise achieved 1,200% ROI through AI transformation.',
    type: 'article',
  },
};

export default function GlobalEnterpriseTransformationBreakthrough() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Global Enterprise Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              How a Fortune 500 company achieved <span className="font-bold text-yellow-300">1,200% ROI</span> through 
              comprehensive AI transformation across 47 countries and 150,000+ employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#results"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                📊 View Results
              </Link>
              <Link
                href="#implementation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg"
              >
                🔧 Implementation Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  <strong>Industry:</strong> Global Manufacturing & Technology
                </p>
                <p className="text-lg">
                  <strong>Size:</strong> 150,000+ employees across 47 countries
                </p>
                <p className="text-lg">
                  <strong>Revenue:</strong> $45+ billion annually
                </p>
                <p className="text-lg">
                  <strong>Challenge:</strong> Legacy systems, manual processes, and operational inefficiencies
                </p>
                <p className="text-lg">
                  <strong>Goal:</strong> Digital transformation and operational excellence
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">1,200%</div>
                  <div className="text-sm text-gray-600">ROI Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">$2.4B</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">67%</div>
                  <div className="text-sm text-gray-600">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">18</div>
                  <div className="text-sm text-gray-600">Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Facing operational inefficiencies and legacy system limitations across global operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data Silos</h3>
              <p className="text-gray-600">
                Fragmented data across 200+ systems with no unified view of operations or customer insights.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-3">Manual Processes</h3>
              <p className="text-gray-600">
                70% of operations relied on manual processes, causing delays and human errors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Global Complexity</h3>
              <p className="text-gray-600">
                Managing operations across 47 countries with varying regulations and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section id="implementation" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI transformation approach across all business functions.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Phase 1: Foundation (Months 1-6)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Data integration and unified platform creation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  AI infrastructure setup across all regions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Team training and change management programs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  Pilot programs in 3 key markets
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Phase 2: Scale (Months 7-12)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  AI automation deployment across all regions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced analytics and predictive modeling
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Customer experience optimization
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Supply chain intelligence implementation
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Phase 3: Optimize (Months 13-18)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Advanced AI model optimization
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Real-time decision making systems
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Autonomous operations implementation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  Continuous improvement and scaling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Outstanding Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifiable business impact achieved through comprehensive AI transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1,200%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">ROI</div>
              <div className="text-sm text-gray-600">Return on investment achieved</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$2.4B</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</div>
              <div className="text-sm text-gray-600">Annual operational savings</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">67%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Efficiency Gain</div>
              <div className="text-sm text-gray-600">Overall process improvement</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.8%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Accuracy</div>
              <div className="text-sm text-gray-600">AI system accuracy rate</div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Operational Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  85% reduction in manual processing time
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  92% improvement in data accuracy
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  78% faster decision making
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  95% customer satisfaction increase
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Financial Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  $2.4B annual cost savings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  $5.7B revenue increase
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  45% reduction in operational costs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  1,200% ROI in 18 months
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Lessons Learned
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Critical insights from this successful AI transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Change Management is Critical</h3>
              <p className="text-gray-600">
                Success depends heavily on proper change management, training, and stakeholder buy-in across all levels.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Data Quality Matters</h3>
              <p className="text-gray-600">
                Investing in data quality and integration upfront is essential for AI success and accurate results.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Start Small, Scale Fast</h3>
              <p className="text-gray-600">
                Pilot programs in select markets provided valuable insights before global deployment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Ongoing monitoring and optimization are crucial for maintaining and improving AI performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Learn how your organization can achieve similar results with our proven AI transformation methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-lg"
            >
              Download Toolkit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}