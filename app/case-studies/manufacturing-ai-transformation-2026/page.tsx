import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing AI Transformation: $18M ROI Success Story | Zion Tech Group',
  description: 'Discover how a Fortune 500 manufacturer achieved $18M ROI, 85% downtime reduction, and 92% fewer defects with AI transformation.',
  keywords: 'manufacturing AI, AI transformation, Fortune 500, ROI, downtime reduction, quality improvement',
};

export default function ManufacturingAITransformation2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 border border-white/30 mb-8">
              <span className="text-green-200 font-bold text-lg tracking-wide uppercase">
                🏭 Manufacturing Success Story
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Manufacturing AI Transformation: $18M ROI Achievement
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              How a Fortune 500 manufacturer revolutionized operations with AI-powered predictive maintenance, 
              quality control, and supply chain optimization, achieving unprecedented results.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-green-200 mb-1">$18M</div>
                <div className="text-sm text-green-100">Total ROI</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-emerald-200 mb-1">85%</div>
                <div className="text-sm text-green-100">Downtime Reduction</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-teal-200 mb-1">92%</div>
                <div className="text-sm text-green-100">Fewer Defects</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-green-200 mb-1">6 Months</div>
                <div className="text-sm text-green-100">Payback Period</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Manufacturing Challenge
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">High Equipment Downtime</h3>
                    <p className="text-gray-600">Unplanned equipment failures causing 40% production downtime and $2M monthly losses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Control Issues</h3>
                    <p className="text-gray-600">Manual inspection processes missing 15% of defects, leading to customer complaints and recalls.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Supply Chain Inefficiencies</h3>
                    <p className="text-gray-600">Inventory management issues causing stockouts and excess inventory worth $5M annually.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Manual Processes</h3>
                    <p className="text-gray-600">Time-consuming manual data collection and analysis limiting operational insights and decision-making.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact Before AI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Monthly Downtime</span>
                  <span className="text-red-600 font-bold">40%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Defect Rate</span>
                  <span className="text-red-600 font-bold">15%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Inventory Waste</span>
                  <span className="text-red-600 font-bold">$5M/year</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-700">Manual Hours</span>
                  <span className="text-red-600 font-bold">2,000/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Manufacturing Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI implementation across predictive maintenance, quality control, 
              and supply chain optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Maintenance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  IoT sensor integration across 500+ machines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Real-time equipment health monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  ML models predicting failures 7 days in advance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Automated maintenance scheduling
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Control AI</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Computer vision defect detection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Real-time quality monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Automated quality scoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Predictive quality analytics
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Optimization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Demand forecasting algorithms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Inventory optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Supplier performance analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Automated reorder systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transformational Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI implementation delivered exceptional results across all key manufacturing metrics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-green-600 mb-2">$18M</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Total ROI</div>
              <div className="text-sm text-gray-600">6-month payback period</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">85%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Downtime Reduction</div>
              <div className="text-sm text-gray-600">From 40% to 6%</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-purple-600 mb-2">92%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Fewer Defects</div>
              <div className="text-sm text-gray-600">From 15% to 1.2%</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">75%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-600">Inventory optimization</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Improvements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Operational Efficiency</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Equipment Uptime</span>
                    <span className="font-semibold text-green-600">94% → 99.2%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Maintenance Costs</span>
                    <span className="font-semibold text-green-600">-60%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Production Output</span>
                    <span className="font-semibold text-green-600">+35%</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Energy Efficiency</span>
                    <span className="font-semibold text-green-600">+25%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quality & Supply Chain</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">First Pass Yield</span>
                    <span className="font-semibold text-green-600">78% → 95%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Customer Complaints</span>
                    <span className="font-semibold text-green-600">-90%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Inventory Turnover</span>
                    <span className="font-semibold text-green-600">+40%</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Supply Chain Visibility</span>
                    <span className="font-semibold text-green-600">+100%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology Implementation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI technologies and platforms powering the manufacturing transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI & Machine Learning</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">ML</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictive Analytics</h4>
                    <p className="text-gray-600 text-sm">Time series forecasting for equipment maintenance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">CV</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Computer Vision</h4>
                    <p className="text-gray-600 text-sm">Real-time defect detection and quality control</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">NLP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Natural Language Processing</h4>
                    <p className="text-gray-600 text-sm">Automated report generation and analysis</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure & Integration</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">IoT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">IoT Sensors</h4>
                    <p className="text-gray-600 text-sm">500+ sensors across manufacturing equipment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">☁️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cloud Platform</h4>
                    <p className="text-gray-600 text-sm">Scalable cloud infrastructure for AI workloads</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">API</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">API Integration</h4>
                    <p className="text-gray-600 text-sm">Seamless integration with existing ERP systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🏭</span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-200 mb-8 leading-relaxed">
              "The AI transformation exceeded our expectations. We've achieved $18M ROI in just 6 months, 
              with 85% reduction in downtime and 92% fewer defects. This is the future of manufacturing."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">John Davis</div>
                <div className="text-gray-400">Chief Operations Officer</div>
                <div className="text-gray-500 text-sm">Fortune 500 Manufacturing Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join leading manufacturers who are achieving unprecedented results with AI-powered 
            predictive maintenance, quality control, and supply chain optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your AI Transformation
            </Link>
            <Link
              href="/services/manufacturing-ai-platform"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Learn More About Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}