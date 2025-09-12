import React from 'react';
import SEO from '../../../components/SEO';

export default function AIROICalculator2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI ROI Calculator 2025: Calculate Your AI Investment Return"
        description="Use our comprehensive AI ROI calculator to estimate the return on investment for your AI initiatives. Get detailed projections and business case templates."
        keywords="AI ROI calculator, AI investment return, AI business case, AI cost benefit analysis, AI ROI calculation"
        url="/resources/ai-roi-calculator-2025"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Interactive Tool
            </span>
            <span className="text-gray-500 text-sm">10 min to complete</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">Jan 30, 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI ROI Calculator 2025: Calculate Your AI Investment Return
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Make data-driven decisions about your AI investments with our comprehensive ROI calculator. 
            Get detailed projections, business case templates, and industry benchmarks to justify 
            your AI initiatives to stakeholders.
          </p>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">💰 What You'll Get</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Detailed ROI projections for 1-5 years</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Industry-specific benchmarks</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Cost breakdown analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Risk assessment framework</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Executive summary template</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Implementation timeline</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Success metrics dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Stakeholder presentation deck</span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Calculator Interface */}
        <section className="mb-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">AI ROI Calculator</h2>
            
            <div className="max-w-2xl mx-auto">
              <form className="space-y-8">
                {/* Company Information */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select company size</option>
                        <option value="startup">Startup (1-50 employees)</option>
                        <option value="small">Small (51-200 employees)</option>
                        <option value="medium">Medium (201-1000 employees)</option>
                        <option value="large">Large (1001-5000 employees)</option>
                        <option value="enterprise">Enterprise (5000+ employees)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select industry</option>
                        <option value="technology">Technology</option>
                        <option value="finance">Financial Services</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* AI Use Cases */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Use Cases</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700">Customer Service Automation</span>
                      </div>
                      <div className="text-sm text-gray-500">Expected ROI: 200-400%</div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700">Predictive Analytics</span>
                      </div>
                      <div className="text-sm text-gray-500">Expected ROI: 150-300%</div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700">Process Automation</span>
                      </div>
                      <div className="text-sm text-gray-500">Expected ROI: 100-250%</div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                        <span className="text-gray-700">Personalization</span>
                      </div>
                      <div className="text-sm text-gray-500">Expected ROI: 180-350%</div>
                    </div>
                  </div>
                </div>

                {/* Investment Details */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Initial Investment ($)</label>
                      <input 
                        type="number" 
                        placeholder="100000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Annual Operating Cost ($)</label>
                      <input 
                        type="number" 
                        placeholder="50000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expected Timeline (months)</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="18">18 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="low">Low (Conservative)</option>
                        <option value="medium">Medium (Balanced)</option>
                        <option value="high">High (Aggressive)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="text-center">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                    Calculate AI ROI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Sample Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample ROI Analysis</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Typical AI ROI Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">340%</div>
                <div className="text-gray-700">Average ROI (3 years)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">18</div>
                <div className="text-gray-700">Months to Break Even</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$2.3M</div>
                <div className="text-gray-700">Average 3-Year Value</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Breakdown by Use Case</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Use Case</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">ROI Range</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Payback Period</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Success Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Customer Service Automation</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">200-400%</td>
                      <td className="py-3 px-4 text-gray-700">12-18 months</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">85%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Predictive Analytics</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">150-300%</td>
                      <td className="py-3 px-4 text-gray-700">18-24 months</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">78%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Process Automation</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">100-250%</td>
                      <td className="py-3 px-4 text-gray-700">6-12 months</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">92%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Personalization</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">180-350%</td>
                      <td className="py-3 px-4 text-gray-700">12-24 months</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">73%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Benchmarks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Benchmarks</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Technology Companies</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex justify-between">
                  <span>Average ROI:</span>
                  <span className="font-semibold">380%</span>
                </li>
                <li className="flex justify-between">
                  <span>Payback Period:</span>
                  <span className="font-semibold">14 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-semibold">88%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Financial Services</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex justify-between">
                  <span>Average ROI:</span>
                  <span className="font-semibold">320%</span>
                </li>
                <li className="flex justify-between">
                  <span>Payback Period:</span>
                  <span className="font-semibold">16 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-semibold">82%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Healthcare</h3>
              <ul className="space-y-3 text-purple-800">
                <li className="flex justify-between">
                  <span>Average ROI:</span>
                  <span className="font-semibold">280%</span>
                </li>
                <li className="flex justify-between">
                  <span>Payback Period:</span>
                  <span className="font-semibold">20 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-semibold">75%</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Manufacturing</h3>
              <ul className="space-y-3 text-orange-800">
                <li className="flex justify-between">
                  <span>Average ROI:</span>
                  <span className="font-semibold">250%</span>
                </li>
                <li className="flex justify-between">
                  <span>Payback Period:</span>
                  <span className="font-semibold">18 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-semibold">85%</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Complete ROI Analysis</h2>
            <p className="text-xl opacity-90 mb-8">
              Download detailed ROI projections, business case templates, and executive 
              presentation materials for your AI initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                📊 Download Full Report
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg">
                📋 Get Excel Template
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your AI Strategy?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our AI experts can help you develop a comprehensive AI strategy and 
            calculate precise ROI projections for your specific use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Expert Consultation
            </a>
            <a
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View All Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}