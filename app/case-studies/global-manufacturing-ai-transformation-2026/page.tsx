import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Manufacturing AI Transformation: $8.5M ROI in 12 Months',
  description: 'See how a global manufacturing leader achieved $8.5M ROI with comprehensive AI transformation, reducing costs by 45% and improving efficiency by 85%.',
  keywords: 'manufacturing AI, AI transformation, ROI case study, manufacturing automation, AI success story',
};

export default function GlobalManufacturingAITransformation2026() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Success Story • Manufacturing
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Global Manufacturing AI Transformation:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              {' '}$8.5M ROI in 12 Months
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how a Fortune 500 manufacturing leader achieved unprecedented results with AI transformation, 
            reducing operational costs by 45% and improving efficiency by 85% across 50+ facilities worldwide.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
            <span>📅 January 25, 2026</span>
            <span>⏱️ 15 min read</span>
            <span>👁️ 3.2K views</span>
          </div>
        </div>

        {/* Client Overview */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏭 Client Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Industry:</strong> Global Manufacturing</li>
                <li><strong>Size:</strong> Fortune 500 Company</li>
                <li><strong>Facilities:</strong> 50+ locations worldwide</li>
                <li><strong>Employees:</strong> 25,000+ globally</li>
                <li><strong>Revenue:</strong> $2.8B annually</li>
                <li><strong>Products:</strong> Industrial equipment & components</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge Summary</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Inefficient production processes</li>
                <li>• High maintenance costs</li>
                <li>• Quality control issues</li>
                <li>• Supply chain bottlenecks</li>
                <li>• Energy consumption optimization</li>
                <li>• Predictive maintenance needs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">📊 Transformation Results</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$8.5M</div>
              <div className="text-sm text-gray-600 font-semibold">Total ROI</div>
              <div className="text-xs text-gray-500 mt-1">12 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-sm text-gray-600 font-semibold">Cost Reduction</div>
              <div className="text-xs text-gray-500 mt-1">Operational expenses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-sm text-gray-600 font-semibold">Efficiency Gain</div>
              <div className="text-xs text-gray-500 mt-1">Production processes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-sm text-gray-600 font-semibold">Quality Improvement</div>
              <div className="text-xs text-gray-500 mt-1">Defect reduction</div>
            </div>
          </div>
        </div>

        {/* Detailed Case Study */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🔍 The Challenge</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our client, a global manufacturing leader with operations spanning 50+ facilities across 15 countries, 
            faced significant operational challenges that were impacting their competitive position and profitability:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Critical Issues</h3>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• $2.3M annual maintenance costs</li>
                <li>• 15% equipment downtime</li>
                <li>• 8% product defect rate</li>
                <li>• 25% energy waste</li>
                <li>• Manual quality control processes</li>
                <li>• Supply chain inefficiencies</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Business Impact</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Declining profit margins</li>
                <li>• Customer satisfaction issues</li>
                <li>• Competitive pressure</li>
                <li>• Regulatory compliance costs</li>
                <li>• Talent retention challenges</li>
                <li>• Sustainability goals unmet</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">💡 Our AI Solution</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We designed and implemented a comprehensive AI transformation strategy that addressed every aspect 
            of their manufacturing operations:
          </p>

          <div className="space-y-8">
            {/* Solution 1 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">🔮</div>
                <h3 className="text-xl font-semibold text-gray-900">Predictive Maintenance System</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Deployed IoT sensors and AI models to predict equipment failures before they occur, 
                reducing unplanned downtime by 90%.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-green-800">90%</div>
                  <div className="text-xs text-green-600">Downtime Reduction</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-blue-800">$1.8M</div>
                  <div className="text-xs text-blue-600">Annual Savings</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-purple-800">95%</div>
                  <div className="text-xs text-purple-600">Prediction Accuracy</div>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900">AI-Powered Quality Control</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Implemented computer vision systems for real-time quality inspection, 
                reducing defect rates from 8% to 0.8%.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-green-800">90%</div>
                  <div className="text-xs text-green-600">Defect Reduction</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-blue-800">$2.1M</div>
                  <div className="text-xs text-blue-600">Quality Cost Savings</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-purple-800">99.2%</div>
                  <div className="text-xs text-purple-600">Quality Rate</div>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900">Energy Optimization AI</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Deployed AI algorithms to optimize energy consumption across all facilities, 
                achieving 35% reduction in energy costs.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-green-800">35%</div>
                  <div className="text-xs text-green-600">Energy Reduction</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-blue-800">$1.2M</div>
                  <div className="text-xs text-blue-600">Annual Savings</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-purple-800">40%</div>
                  <div className="text-xs text-purple-600">Carbon Footprint</div>
                </div>
              </div>
            </div>

            {/* Solution 4 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">📊</div>
                <h3 className="text-xl font-semibold text-gray-900">Supply Chain Intelligence</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Implemented AI-driven supply chain optimization, reducing inventory costs by 30% 
                and improving delivery times by 50%.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-green-800">30%</div>
                  <div className="text-xs text-green-600">Inventory Reduction</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-blue-800">$1.5M</div>
                  <div className="text-xs text-blue-600">Cost Savings</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-purple-800">50%</div>
                  <div className="text-xs text-purple-600">Faster Delivery</div>
                </div>
              </div>
            </div>

            {/* Solution 5 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">🏭</div>
                <h3 className="text-xl font-semibold text-gray-900">Production Optimization</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Deployed AI algorithms to optimize production schedules and resource allocation, 
                increasing overall equipment effectiveness by 85%.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-green-800">85%</div>
                  <div className="text-xs text-green-600">OEE Improvement</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-blue-800">$1.9M</div>
                  <div className="text-xs text-blue-600">Productivity Gains</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="font-semibold text-purple-800">60%</div>
                  <div className="text-xs text-purple-600">Faster Production</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">📈 Implementation Timeline</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The transformation was executed in phases over 12 months, ensuring minimal disruption to operations:
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Months 1-2: Assessment & Planning</h3>
                <p className="text-gray-700">Comprehensive analysis of current operations, data infrastructure, and AI readiness assessment across all facilities.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Months 3-4: Pilot Implementation</h3>
                <p className="text-gray-700">Deployed predictive maintenance and quality control systems at 3 pilot facilities to validate approach.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Months 5-8: Full Deployment</h3>
                <p className="text-gray-700">Rolled out AI solutions across all 50+ facilities, including energy optimization and supply chain intelligence.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Months 9-12: Optimization & Scaling</h3>
                <p className="text-gray-700">Fine-tuned AI models, optimized performance, and scaled successful solutions across the entire organization.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Financial Impact</h2>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ROI Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">💸 Cost Savings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Predictive Maintenance</span>
                    <span className="font-semibold text-green-600">$1.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Quality Control</span>
                    <span className="font-semibold text-green-600">$2.1M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Energy Optimization</span>
                    <span className="font-semibold text-green-600">$1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Supply Chain</span>
                    <span className="font-semibold text-green-600">$1.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Production Optimization</span>
                    <span className="font-semibold text-green-600">$1.9M</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total Annual Savings</span>
                      <span className="font-bold text-green-600 text-xl">$8.5M</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">📊 Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Equipment Downtime</span>
                    <span className="font-semibold text-blue-600">-90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Product Defects</span>
                    <span className="font-semibold text-blue-600">-90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Energy Consumption</span>
                    <span className="font-semibold text-blue-600">-35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Inventory Levels</span>
                    <span className="font-semibold text-blue-600">-30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Production Efficiency</span>
                    <span className="font-semibold text-blue-600">+85%</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Overall ROI</span>
                      <span className="font-bold text-purple-600 text-xl">420%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Key Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">✅ What Made It Successful</h3>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Executive Sponsorship:</strong> Strong C-level commitment and budget allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Phased Approach:</strong> Gradual rollout minimized risk and ensured adoption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Data Quality:</strong> Invested heavily in data infrastructure and governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Change Management:</strong> Comprehensive training and support programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>Continuous Monitoring:</strong> Real-time performance tracking and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">🚀 Long-term Benefits</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Competitive Advantage:</strong> 85% efficiency gains vs industry average</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Customer Satisfaction:</strong> 95% on-time delivery rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Sustainability:</strong> 40% reduction in carbon footprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Innovation Culture:</strong> AI-first mindset across organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Future Readiness:</strong> Scalable platform for continued growth</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">🏭 Ready to Transform Your Manufacturing Operations?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join the manufacturing leaders who are achieving unprecedented results with AI transformation. 
              Let us help you implement similar solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get Manufacturing AI Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Related Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-finance-automation" className="group">
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  FinTech AI Automation
                </h3>
                <p className="text-sm text-gray-600">$3M savings with 95% automation</p>
              </div>
            </Link>
            
            <Link href="/case-studies/retail-ai-transformation" className="group">
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">🛒</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Retail AI Transformation
                </h3>
                <p className="text-sm text-gray-600">150% revenue growth with AI</p>
              </div>
            </Link>
            
            <Link href="/case-studies/healthcare-ai-transformation" className="group">
              <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-3">🏥</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Healthcare AI Success
                </h3>
                <p className="text-sm text-gray-600">40% better patient outcomes</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}