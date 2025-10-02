import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing AI Platform: Predictive Maintenance & Quality Control | Zion Tech Group',
  description: 'Transform manufacturing with AI-powered predictive maintenance, quality control, and supply chain optimization. Achieve 99.9% uptime and 95% fewer defects.',
  keywords: 'manufacturing AI, predictive maintenance, quality control, supply chain optimization, industrial AI',
};

export default function ManufacturingAIPlatform() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 border border-white/30 mb-8">
              <span className="text-green-200 font-bold text-lg tracking-wide uppercase">
                🏭 Manufacturing AI Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              AI-Powered Manufacturing Revolution
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Transform your manufacturing operations with AI-powered predictive maintenance, 
              quality control, and supply chain optimization. Achieve 99.9% uptime and 95% fewer defects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-green-200 mb-1">99.9%</div>
                <div className="text-sm text-green-100">Uptime</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-emerald-200 mb-1">95%</div>
                <div className="text-sm text-green-100">Fewer Defects</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-teal-200 mb-1">85%</div>
                <div className="text-sm text-green-100">Downtime Reduction</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-3xl font-extrabold text-green-200 mb-1">$18M</div>
                <div className="text-sm text-green-100">Average ROI</div>
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
              Comprehensive Manufacturing AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI platform covering predictive maintenance, quality control, 
              supply chain optimization, and operational excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Maintenance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  IoT sensor integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Real-time equipment monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Failure prediction (7 days ahead)
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
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Analytics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Real-time production monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Performance optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Energy efficiency tracking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  Capacity planning
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety & Compliance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Safety monitoring systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Compliance automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Risk assessment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Incident prevention
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Workflow automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Intelligent scheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Resource optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  Autonomous decision making
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
              Our manufacturing AI platform delivers measurable improvements across all key operational metrics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-green-600 mb-2">$18M</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Average ROI</div>
              <div className="text-sm text-gray-600">6-month payback period</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">99.9%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Equipment Uptime</div>
              <div className="text-sm text-gray-600">From 95% to 99.9%</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-purple-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Fewer Defects</div>
              <div className="text-sm text-gray-600">Quality improvement</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">85%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Downtime Reduction</div>
              <div className="text-sm text-gray-600">Predictive maintenance</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Improvements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Operational Efficiency</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Production Output</span>
                    <span className="font-semibold text-green-600">+35%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Energy Efficiency</span>
                    <span className="font-semibold text-green-600">+25%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Maintenance Costs</span>
                    <span className="font-semibold text-green-600">-60%</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">First Pass Yield</span>
                    <span className="font-semibold text-green-600">78% → 95%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quality & Safety</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Customer Complaints</span>
                    <span className="font-semibold text-green-600">-90%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Safety Incidents</span>
                    <span className="font-semibold text-green-600">-75%</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Compliance Score</span>
                    <span className="font-semibold text-green-600">+40%</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Waste Reduction</span>
                    <span className="font-semibold text-green-600">-50%</span>
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
              Cutting-edge AI technologies and industrial IoT platforms powering the manufacturing transformation.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industrial IoT & Integration</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">IoT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industrial IoT</h4>
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
                    <h4 className="font-semibold text-gray-900">ERP Integration</h4>
                    <p className="text-gray-600 text-sm">Seamless integration with existing enterprise systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Story: Fortune 500 Manufacturer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how a leading manufacturer achieved $18M ROI with our AI platform.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenge</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>40% production downtime from equipment failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>15% defect rate with manual quality control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>$5M annual inventory waste</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>2,000 manual hours per month</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solution</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>AI-powered predictive maintenance system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Computer vision quality control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Supply chain optimization algorithms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Automated workflow management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-green-600 mb-2">$18M</div>
              <div className="text-sm text-gray-600">Total ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-purple-600 mb-2">92%</div>
              <div className="text-sm text-gray-600">Fewer Defects</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-extrabold text-orange-600 mb-2">6 Months</div>
              <div className="text-sm text-gray-600">Payback Period</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "The AI transformation exceeded our expectations. We've achieved $18M ROI in just 6 months, 
              with 85% reduction in downtime and 92% fewer defects. This is the future of manufacturing."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JD</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">John Davis</div>
                <div className="text-gray-600">Chief Operations Officer</div>
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
              Choose the plan that fits your manufacturing needs. All plans include comprehensive support and training.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">$2,499<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Up to 50 machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Basic predictive maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Quality control AI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
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
            
            <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">$4,999<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Up to 200 machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Advanced predictive maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Supply chain optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Dedicated support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors block"
              >
                Get Started
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-extrabold text-gray-900 mb-6">Custom<span className="text-lg text-gray-600"> pricing</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Unlimited machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Full AI platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">Custom AI models</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-600">On-premise deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
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
              href="/case-studies/manufacturing-ai-transformation-2026"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}