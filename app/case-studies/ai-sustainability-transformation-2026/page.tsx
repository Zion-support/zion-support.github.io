import React from 'react';
import Link from 'next/link';
import { CheckCircle, TrendingUp, Users, Zap, DollarSign, Clock, Target, Leaf } from 'lucide-react';

export const metadata = {
  title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
  description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation and green technology.',
  keywords: 'AI sustainability, green technology, carbon neutrality, environmental AI, sustainable business, green transformation',
  openGraph: {
    title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
    description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation and green technology.',
    type: 'article',
    publishedTime: '2026-01-20T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AISustainabilityTransformation2026() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🌱 SUSTAINABILITY
          </span>
          <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            NEW 2026
          </span>
          <span className="text-sm text-gray-500">15 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Sustainability Transformation 2026: $10M ROI Case Study
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Discover how a Fortune 500 manufacturing company achieved carbon neutrality and $10M ROI in just 18 months 
          through comprehensive AI sustainability transformation, green technology integration, and intelligent resource optimization.
        </p>
      </div>

      {/* Key Results */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sustainability Transformation Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">$10M</div>
            <div className="text-sm text-gray-600">Total ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Carbon Neutral</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
            <div className="text-sm text-gray-600">Energy Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">18</div>
            <div className="text-sm text-gray-600">Months to ROI</div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
        
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>High carbon footprint with 50,000 tons CO2 annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Energy costs consuming 15% of total revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Regulatory pressure for carbon neutrality by 2030</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Inefficient resource utilization across operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Customer demand for sustainable products</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Profile</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span className="font-semibold">Industry:</span>
                  <span>Manufacturing & Technology</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Revenue:</span>
                  <span>$3.2B+ annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Employees:</span>
                  <span>25,000+ globally</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Facilities:</span>
                  <span>50+ worldwide</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Carbon Footprint:</span>
                  <span>50,000 tons CO2/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Implementation */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Sustainability Solution</h2>
        
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Energy Optimization (Months 1-6)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">AI-Powered Energy Management</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Smart grid integration and load balancing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Predictive energy consumption modeling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Renewable energy optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Real-time energy monitoring and control
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Phase 1 Results</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Energy Reduction:</span>
                    <span className="font-semibold text-green-600">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings:</span>
                    <span className="font-semibold text-green-600">$3M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbon Reduction:</span>
                    <span className="font-semibold text-green-600">20,000 tons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Process Optimization (Months 7-12)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Sustainable Manufacturing AI</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Waste reduction through predictive analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Resource efficiency optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Circular economy implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Supply chain sustainability tracking
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Phase 2 Results</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Waste Reduction:</span>
                    <span className="font-semibold text-green-600">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional Savings:</span>
                    <span className="font-semibold text-green-600">$4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbon Reduction:</span>
                    <span className="font-semibold text-green-600">15,000 tons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Carbon Neutrality (Months 13-18)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Complete Carbon Neutrality</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Carbon capture and storage integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Renewable energy portfolio optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Carbon offset program implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Sustainability reporting automation
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Final Results</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbon Neutrality:</span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total ROI:</span>
                    <span className="font-semibold text-green-600">$10M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Energy Reduction:</span>
                    <span className="font-semibold text-green-600">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Green Technology Stack</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Energy Management</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Smart grid AI optimization</li>
              <li>• Renewable energy forecasting</li>
              <li>• Load balancing algorithms</li>
              <li>• Energy storage optimization</li>
              <li>• Carbon footprint tracking</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Process Optimization</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Waste reduction algorithms</li>
              <li>• Resource efficiency modeling</li>
              <li>• Circular economy tracking</li>
              <li>• Supply chain optimization</li>
              <li>• Sustainability metrics</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Carbon Management</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Carbon capture integration</li>
              <li>• Offset program management</li>
              <li>• Emissions monitoring</li>
              <li>• Sustainability reporting</li>
              <li>• Compliance tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROI Breakdown */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Breakdown</h2>
        
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Financial Impact</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Investment</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Annual Savings</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Energy Optimization</td>
                  <td className="border border-gray-300 px-4 py-2">$2M</td>
                  <td className="border border-gray-300 px-4 py-2">$6M</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">200%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Process Optimization</td>
                  <td className="border border-gray-300 px-4 py-2">$1.5M</td>
                  <td className="border border-gray-300 px-4 py-2">$4.5M</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">200%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Carbon Management</td>
                  <td className="border border-gray-300 px-4 py-2">$1M</td>
                  <td className="border border-gray-300 px-4 py-2">$3M</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">200%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Training & Support</td>
                  <td className="border border-gray-300 px-4 py-2">$500K</td>
                  <td className="border border-gray-300 px-4 py-2">$1.5M</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">200%</td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="border border-gray-300 px-4 py-2">Total</td>
                  <td className="border border-gray-300 px-4 py-2">$5M</td>
                  <td className="border border-gray-300 px-4 py-2">$15M</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">200%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Savings</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Energy Cost Reduction:</span>
                <span className="font-semibold text-green-600">$6M/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Waste Reduction:</span>
                <span className="font-semibold text-green-600">$4M/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Regulatory Compliance:</span>
                <span className="font-semibold text-green-600">$3M/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Operational Efficiency:</span>
                <span className="font-semibold text-green-600">$2M/year</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Carbon Neutrality:</span>
                <span className="font-semibold text-teal-600">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Energy Reduction:</span>
                <span className="font-semibold text-teal-600">80%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Waste Reduction:</span>
                <span className="font-semibold text-teal-600">60%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Renewable Energy:</span>
                <span className="font-semibold text-teal-600">95%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings & Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Success Factors</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Strong commitment to sustainability goals from leadership</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Phased approach with measurable environmental impact</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Integration of AI with existing sustainability initiatives</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Continuous monitoring and optimization of green metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Employee engagement and sustainability culture</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges Overcome</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Complex energy infrastructure integration</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Regulatory compliance and reporting requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Supply chain sustainability tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Technology integration with legacy systems</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Measuring and validating environmental impact</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Sustainability Initiatives</h2>
        
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Next Phase Goals</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Net Positive Impact</h4>
              <p className="text-gray-600 text-sm mb-4">
                Achieve net positive environmental impact by removing more carbon than produced.
              </p>
              <div className="text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Target:</span>
                  <span className="font-semibold text-green-600">2027</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Circular Economy</h4>
              <p className="text-gray-600 text-sm mb-4">
                Implement complete circular economy principles across all operations and supply chains.
              </p>
              <div className="text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Target:</span>
                  <span className="font-semibold text-green-600">2028</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Supply Chain Sustainability</h4>
              <p className="text-gray-600 text-sm mb-4">
                Extend sustainability practices to all suppliers and partners in the value chain.
              </p>
              <div className="text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Target:</span>
                  <span className="font-semibold text-green-600">2029</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Achieve Carbon Neutrality?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how your organization can achieve carbon neutrality and $10M+ ROI with our proven 
            AI sustainability framework. Get a free consultation and customized green transformation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Sustainability Content</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                AI Sustainability & Green Tech 2026
              </h4>
              <p className="text-gray-600 text-sm">
                Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
              </p>
            </div>
          </Link>
          
          <Link href="/blog/ai-innovation-2026-revolution" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                AI Innovation Revolution Guide
              </h4>
              <p className="text-gray-600 text-sm">
                Learn the complete framework for achieving 300% ROI with AI innovation and sustainable practices.
              </p>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-innovation-enterprise-success-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                $50M Innovation Success Story
              </h4>
              <p className="text-gray-600 text-sm">
                See how a Fortune 500 company achieved $50M ROI with comprehensive AI innovation transformation.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}