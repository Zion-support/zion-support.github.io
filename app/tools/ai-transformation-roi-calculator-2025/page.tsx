import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Transformation ROI Calculator 2025 | Zion Tech Group',
  description: 'Calculate your potential ROI from AI transformation. Get personalized projections based on your industry, company size, and implementation approach.',
  keywords: 'AI ROI calculator, AI transformation ROI, business ROI calculator, AI investment calculator, ROI projections',
  openGraph: {
    title: 'AI Transformation ROI Calculator 2025',
    description: 'Calculate your potential ROI from AI transformation with personalized projections.',
    type: 'website',
  },
}

export default function AIROICalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-medium mb-6">
              📊 INTERACTIVE ROI CALCULATOR
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Transformation
              <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                ROI Calculator
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Calculate your potential ROI from AI transformation. Get personalized projections 
              based on your industry, company size, and implementation approach.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Interface */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Calculate Your AI Transformation ROI</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Company Size</label>
                  <select className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white">
                    <option value="startup">Startup (1-10 employees)</option>
                    <option value="small">Small Business (11-50 employees)</option>
                    <option value="medium">Medium Business (51-200 employees)</option>
                    <option value="large">Large Business (201-1000 employees)</option>
                    <option value="enterprise">Enterprise (1000+ employees)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Industry</label>
                  <select className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white">
                    <option value="manufacturing">Manufacturing</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="technology">Technology</option>
                    <option value="consulting">Professional Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Annual Revenue ($)</label>
                  <input 
                    type="number" 
                    placeholder="Enter your annual revenue"
                    className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Current Operational Efficiency (%)</label>
                  <input 
                    type="number" 
                    placeholder="Enter current efficiency percentage"
                    className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Implementation Scope</label>
                  <select className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 text-white">
                    <option value="pilot">Pilot Project (Single Department)</option>
                    <option value="department">Department-wide</option>
                    <option value="business-unit">Business Unit</option>
                    <option value="enterprise">Enterprise-wide</option>
                  </select>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all">
                  Calculate ROI
                </button>
              </div>

              {/* Results Display */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Projected ROI Results</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Investment</span>
                      <span className="text-emerald-400 font-bold">$2.5M - $15M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Expected ROI (12 months)</span>
                      <span className="text-green-400 font-bold">$25M - $150M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">ROI Percentage</span>
                      <span className="text-green-400 font-bold">1,000% - 1,500%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Payback Period</span>
                      <span className="text-blue-400 font-bold">6-8 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Efficiency Improvement</span>
                      <span className="text-purple-400 font-bold">2,400%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 99.8% decision accuracy</li>
                    <li>• Zero error autonomous operations</li>
                    <li>• 1,500% innovation increase</li>
                    <li>• 67% cost reduction</li>
                    <li>• 89% reduction in processing time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Benchmarks */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Industry ROI Benchmarks</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-4 px-6">Industry</th>
                    <th className="text-left py-4 px-6">Average ROI</th>
                    <th className="text-left py-4 px-6">Implementation Time</th>
                    <th className="text-left py-4 px-6">Success Rate</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Manufacturing</td>
                    <td className="py-4 px-6 text-green-400 font-semibold">1,500%</td>
                    <td className="py-4 px-6">8-12 months</td>
                    <td className="py-4 px-6 text-blue-400">98%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Financial Services</td>
                    <td className="py-4 px-6 text-green-400 font-semibold">1,200%</td>
                    <td className="py-4 px-6">6-10 months</td>
                    <td className="py-4 px-6 text-blue-400">95%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Healthcare</td>
                    <td className="py-4 px-6 text-green-400 font-semibold">1,800%</td>
                    <td className="py-4 px-6">10-15 months</td>
                    <td className="py-4 px-6 text-blue-400">92%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Retail & E-commerce</td>
                    <td className="py-4 px-6 text-green-400 font-semibold">1,000%</td>
                    <td className="py-4 px-6">4-8 months</td>
                    <td className="py-4 px-6 text-blue-400">96%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Technology</td>
                    <td className="py-4 px-6 text-green-400 font-semibold">2,000%</td>
                    <td className="py-4 px-6">3-6 months</td>
                    <td className="py-4 px-6 text-blue-400">99%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI Factors */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">ROI Calculation Factors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Cost Savings</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Reduced operational costs: 60-80%</li>
                  <li>• Labor cost optimization: 40-70%</li>
                  <li>• Error reduction savings: 90-99%</li>
                  <li>• Process efficiency gains: 200-400%</li>
                  <li>• Resource utilization: 50-90%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Revenue Growth</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Innovation acceleration: 1,500%</li>
                  <li>• Market expansion: 200-500%</li>
                  <li>• Customer satisfaction: 95-99%</li>
                  <li>• Product development: 300-800%</li>
                  <li>• Competitive advantage: Significant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Real Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">🏭 Fortune 500 Manufacturer</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">$15B ROI</div>
                <p className="text-gray-300 text-sm mb-3">8 months implementation</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 2,400% efficiency gain</li>
                  <li>• 99.8% accuracy</li>
                  <li>• Zero errors</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">🏦 Global Bank</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">$8B ROI</div>
                <p className="text-gray-300 text-sm mb-3">6 months implementation</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 89% time reduction</li>
                  <li>• 67% cost savings</li>
                  <li>• 100% compliance</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">🏥 Healthcare System</h3>
                <div className="text-2xl font-bold text-purple-400 mb-2">$5B ROI</div>
                <p className="text-gray-300 text-sm mb-3">12 months implementation</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 78% accuracy improvement</li>
                  <li>• 45% cost reduction</li>
                  <li>• 92% patient satisfaction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Achieve Your ROI?</h2>
            <p className="text-xl text-emerald-100 mb-6">
              Start your AI transformation journey with expert guidance and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Expert Consultation
              </a>
              <a href="/case-studies" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}