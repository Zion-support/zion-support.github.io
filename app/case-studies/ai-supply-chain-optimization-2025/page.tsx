import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain - Case Study',
  description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement using AI supply chain optimization, saving $12M annually.',
  keywords: 'AI supply chain, supply chain optimization, AI case study, manufacturing AI, cost reduction, efficiency improvement',
  openGraph: {
    title: 'AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain',
    description: 'See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement using AI supply chain optimization.',
    type: 'article',
    url: 'https://ziontechgroup.com/case-studies/ai-supply-chain-optimization-2025',
    images: [
      {
        url: '/og-supply-chain-ai-case-study.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Supply Chain Optimization Case Study',
      },
    ],
  },
};

export default function AISupplyChainOptimizationCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Success Story
            </span>
            <span className="text-gray-500 text-sm">Manufacturing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover how a global manufacturing leader transformed their supply chain operations using 
            AI optimization, achieving remarkable cost savings and efficiency improvements.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Published January 20, 2026</span>
            <span>•</span>
            <span>Updated January 20, 2026</span>
            <span>•</span>
            <span>By Zion Tech Group</span>
          </div>
        </header>

        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Results</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-700">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-700">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$12M</div>
              <div className="text-gray-700">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-700">Months ROI</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Company Profile</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Industry:</strong> Global Manufacturing</li>
                    <li><strong>Size:</strong> 15,000+ employees</li>
                    <li><strong>Revenue:</strong> $2.5B annually</li>
                    <li><strong>Operations:</strong> 25 countries</li>
                    <li><strong>Products:</strong> Industrial equipment and components</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge Scale</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Suppliers:</strong> 500+ global suppliers</li>
                    <li><strong>SKUs:</strong> 50,000+ product variants</li>
                    <li><strong>Warehouses:</strong> 15 distribution centers</li>
                    <li><strong>Shipments:</strong> 100,000+ monthly</li>
                    <li><strong>Complexity:</strong> Multi-tier supply chain</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="space-y-6">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-4">Critical Pain Points</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Manual demand forecasting leading to 30% inventory waste</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Inefficient supplier selection causing 25% cost overruns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Poor route optimization resulting in 40% higher logistics costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Lack of real-time visibility causing supply disruptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Manual processes consuming 200+ hours weekly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">Business Impact</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Financial Impact</h4>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• $8M annual inventory waste</li>
                      <li>• $5M logistics cost overruns</li>
                      <li>• $3M supplier inefficiency costs</li>
                      <li>• $2M manual process costs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Operational Impact</h4>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• 15% on-time delivery rate</li>
                      <li>• 25% supplier reliability issues</li>
                      <li>• 40% manual process dependency</li>
                      <li>• 60% lack of real-time visibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our AI Solution</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive AI Supply Chain Platform</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Core AI Modules</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Demand Forecasting AI:</strong> Machine learning models for accurate demand prediction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Supplier Optimization AI:</strong> Intelligent supplier selection and performance monitoring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Route Optimization AI:</strong> Dynamic routing for logistics efficiency</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Inventory Management AI:</strong> Real-time inventory optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Real-time Analytics:</strong> Live supply chain monitoring and insights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Predictive Maintenance:</strong> AI-powered equipment maintenance scheduling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Risk Management:</strong> Supply chain risk assessment and mitigation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 font-bold">•</span>
                        <span><strong>Automated Decision Making:</strong> AI-driven supply chain decisions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Weeks 1-2: Assessment & Planning</h4>
                      <p className="text-gray-700">Comprehensive supply chain analysis, data collection, and AI model selection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Weeks 3-6: Pilot Implementation</h4>
                      <p className="text-gray-700">Deploy AI modules in select facilities, validate performance, and optimize models</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Weeks 7-12: Full Deployment</h4>
                      <p className="text-gray-700">Roll out AI platform across all facilities, train teams, and monitor performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Ongoing: Optimization & Support</h4>
                      <p className="text-gray-700">Continuous model improvement, performance monitoring, and 24/7 support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Remarkable Results</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Financial Impact</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center justify-between">
                      <span>Cost Reduction</span>
                      <span className="font-bold">60%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Annual Savings</span>
                      <span className="font-bold">$12M</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Inventory Waste Reduction</span>
                      <span className="font-bold">85%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Logistics Cost Savings</span>
                      <span className="font-bold">$5M</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>ROI Timeline</span>
                      <span className="font-bold">6 months</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Operational Impact</h3>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-center justify-between">
                      <span>Efficiency Gain</span>
                      <span className="font-bold">90%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>On-time Delivery</span>
                      <span className="font-bold">98%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Supplier Reliability</span>
                      <span className="font-bold">95%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Process Automation</span>
                      <span className="font-bold">80%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Real-time Visibility</span>
                      <span className="font-bold">100%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Before vs. After Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Metric</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Before</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">After</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">Demand Forecast Accuracy</td>
                        <td className="py-3 px-4 text-center text-gray-600">65%</td>
                        <td className="py-3 px-4 text-center text-green-600 font-semibold">94%</td>
                        <td className="py-3 px-4 text-center text-green-600 font-bold">+29%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">Inventory Turnover</td>
                        <td className="py-3 px-4 text-center text-gray-600">4.2x</td>
                        <td className="py-3 px-4 text-center text-green-600 font-semibold">8.7x</td>
                        <td className="py-3 px-4 text-center text-green-600 font-bold">+107%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">Supplier Lead Time</td>
                        <td className="py-3 px-4 text-center text-gray-600">21 days</td>
                        <td className="py-3 px-4 text-center text-green-600 font-semibold">8 days</td>
                        <td className="py-3 px-4 text-center text-green-600 font-bold">-62%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">Manual Process Hours</td>
                        <td className="py-3 px-4 text-center text-gray-600">200/week</td>
                        <td className="py-3 px-4 text-center text-green-600 font-semibold">40/week</td>
                        <td className="py-3 px-4 text-center text-green-600 font-bold">-80%</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 text-gray-700">Supply Chain Visibility</td>
                        <td className="py-3 px-4 text-center text-gray-600">40%</td>
                        <td className="py-3 px-4 text-center text-green-600 font-semibold">100%</td>
                        <td className="py-3 px-4 text-center text-green-600 font-bold">+150%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "The AI supply chain optimization platform from Zion Tech Group has been transformative for our operations. 
                We've achieved 60% cost reduction and 90% efficiency gains that we never thought possible. The $12M annual 
                savings alone justifies the investment, but the operational improvements have been even more valuable. 
                Our supply chain is now a competitive advantage."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-xl">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Davidson</div>
                  <div className="text-gray-600">Chief Operations Officer</div>
                  <div className="text-gray-600">Global Manufacturing Corp</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Supply Chain?</h2>
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Supply Chain Assessment</h3>
              <p className="text-lg mb-6 opacity-90">
                Discover how AI can optimize your supply chain operations. Get a free assessment and 
                see your potential savings and efficiency gains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
                >
                  Get Free Assessment
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}