import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Supply Chain Intelligence: AI-Powered Optimization Platform | Zion Tech Group',
  description: 'Optimize your supply chain with AI-powered demand forecasting, inventory optimization, and logistics automation. Achieve 25% cost reduction and 95% efficiency gains.',
  keywords: 'supply chain AI, demand forecasting, inventory optimization, logistics automation, supply chain intelligence',
};

export default function SupplyChainIntelligence() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 border border-white/30 mb-8">
              <span className="text-blue-200 font-bold text-lg tracking-wide uppercase">
                📦 Supply Chain Intelligence
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              AI-Powered Supply Chain Optimization
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered demand forecasting, inventory optimization, 
              and logistics automation. Achieve 25% cost reduction and 95% efficiency gains.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-blue-200 mb-1">25%</div>
                <div className="text-sm text-blue-100">Cost Reduction</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-indigo-200 mb-1">95%</div>
                <div className="text-sm text-blue-100">Efficiency Gains</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-purple-200 mb-1">98%</div>
                <div className="text-sm text-blue-100">Forecast Accuracy</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-blue-200 mb-1">60%</div>
                <div className="text-sm text-blue-100">Inventory Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Supply Chain AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI platform covering demand forecasting, inventory optimization, 
              logistics automation, and supplier management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Demand Forecasting</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Machine learning demand models
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Real-time market analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Seasonal pattern recognition
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  External factor integration
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inventory Optimization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Dynamic safety stock calculation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Multi-echelon optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  ABC analysis automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Automated reorder points
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🚚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Logistics Automation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Route optimization algorithms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Carrier selection automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Real-time tracking integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Cost optimization algorithms
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🏭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supplier Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Supplier performance analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Risk assessment and monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Automated supplier selection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Contract optimization
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Insights</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Real-time dashboards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Predictive analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Cost optimization insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Performance benchmarking
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🔗</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration & APIs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  ERP system integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  WMS and TMS connectivity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Third-party data sources
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Custom API development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our supply chain intelligence platform delivers measurable improvements across all key operational metrics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">$200M</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Cost Savings</div>
              <div className="text-sm text-gray-600">Annual savings achieved</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-green-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Efficiency Gains</div>
              <div className="text-sm text-gray-600">Process optimization</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-purple-600 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Forecast Accuracy</div>
              <div className="text-sm text-gray-600">From 30% to 98%</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Inventory Reduction</div>
              <div className="text-sm text-gray-600">Working capital optimization</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Improvements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Supply Chain Efficiency</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Inventory Turnover</span>
                    <span className="font-semibold text-green-600">2.1x → 5.2x</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Stockout Rate</span>
                    <span className="font-semibold text-green-600">15% → 0.5%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Planning Time</span>
                    <span className="font-semibold text-green-600">2 weeks → 2 hours</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Order Fulfillment</span>
                    <span className="font-semibold text-green-600">+40% faster</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Cost Optimization</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Transportation Costs</span>
                    <span className="font-semibold text-green-600">-35%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Warehousing Costs</span>
                    <span className="font-semibold text-green-600">-45%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Procurement Costs</span>
                    <span className="font-semibold text-green-600">-25%</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Working Capital</span>
                    <span className="font-semibold text-green-600">-60%</span>
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
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technologies and platforms powering the supply chain transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI & Analytics</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">ML</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Machine Learning</h4>
                    <p className="text-gray-600 text-sm">Advanced algorithms for demand forecasting and optimization</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictive Analytics</h4>
                    <p className="text-gray-600 text-sm">Real-time insights and trend analysis</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Optimization Engines</h4>
                    <p className="text-gray-600 text-sm">Mathematical optimization for inventory and logistics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Integration & Platform</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ERP Integration</h4>
                    <p className="text-gray-600 text-sm">Seamless integration with existing enterprise systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">☁️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cloud Platform</h4>
                    <p className="text-gray-600 text-sm">Scalable cloud infrastructure for global operations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Dashboards</h4>
                    <p className="text-gray-600 text-sm">Interactive dashboards for supply chain visibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Story: Fortune 500 Global Corporation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how a leading company achieved $200M in cost savings with our supply chain intelligence platform.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenge</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>$50M tied up in excess inventory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>30% forecast accuracy causing overproduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Complex multi-tier supply chain with 500+ suppliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Manual planning requiring 2 weeks</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solution</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>AI-powered demand forecasting system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Intelligent inventory optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Automated logistics and routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Real-time supply chain visibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-blue-600 mb-2">$200M</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-green-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Efficiency Gains</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Forecast Accuracy</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-orange-600 mb-2">8 Months</div>
              <div className="text-sm text-gray-600">Implementation</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "The AI supply chain transformation has been revolutionary. We've achieved $200M in cost savings 
              with 95% efficiency gains and 98% forecast accuracy. This is the most successful digital transformation 
              in our company's history."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SM</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Martinez</div>
                <div className="text-gray-600">Chief Supply Chain Officer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain needs. All plans include comprehensive support and training.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">$1,999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Up to 100 SKUs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Basic demand forecasting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Inventory optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">24/7 support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors block"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">$4,999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Up to 1,000 SKUs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Advanced demand forecasting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Logistics optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Supplier management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Custom integrations</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors block"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">Custom<span className="text-lg text-gray-600"> pricing</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Unlimited SKUs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Full AI platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Custom AI models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Multi-region deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">White-glove service</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading companies who are achieving unprecedented cost savings and efficiency gains 
            with AI-powered supply chain optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Supply Chain Transformation
            </Link>
            <Link
              href="/case-studies/ai-supply-chain-optimization-mega-success-2025"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}