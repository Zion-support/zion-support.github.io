import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Transformation in Manufacturing: 85% Defect Reduction Case Study',
  description: 'How a Fortune 500 manufacturing company achieved 85% defect reduction and 40% cost savings through comprehensive AI transformation.',
  keywords: 'AI manufacturing, industrial AI, quality control, predictive maintenance, manufacturing automation, AI case study',
};

export default function AITransformationManufacturing2025() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Case Studies
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">Manufacturing</span>
          </div>
          
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🏭 MANUFACTURING SUCCESS</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Transformation in Manufacturing: 85% Defect Reduction
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            How a Fortune 500 manufacturing company achieved unprecedented quality improvements 
            and cost savings through comprehensive AI transformation across their production lines.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">ZT</span>
              </div>
              <span>Zion Tech Group</span>
            </div>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>January 2025</span>
            <span>•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Success Story</span>
          </div>
        </header>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-700 mb-6">
            A leading automotive parts manufacturer partnered with Zion Tech Group to implement 
            AI-powered quality control and predictive maintenance systems across 15 production 
            facilities. The transformation resulted in dramatic improvements in quality, efficiency, 
            and cost savings.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Defect Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Faster Production</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$12M</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              The client, a Fortune 500 automotive parts manufacturer with 15 production facilities 
              worldwide, was facing significant quality control challenges that were impacting 
              profitability and customer satisfaction.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Key Challenges</h3>
              <ul className="text-red-800 space-y-1">
                <li>• 15% defect rate across production lines</li>
                <li>• $2.3M annual cost of quality issues</li>
                <li>• 25% of products required rework</li>
                <li>• Manual inspection processes were slow and inconsistent</li>
                <li>• Unplanned downtime averaging 8 hours per week</li>
                <li>• Customer complaints increasing by 30% year-over-year</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Impact</h3>
            <p className="text-lg text-gray-700 mb-6">
              The quality issues were not only costing the company millions in direct costs but 
              also damaging their reputation with major automotive OEMs. The manual inspection 
              processes were unable to keep up with production volumes, leading to bottlenecks 
              and delayed deliveries.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Zion Tech Group developed a comprehensive AI transformation strategy that addressed 
              quality control, predictive maintenance, and process optimization across all 
              production facilities.
            </p>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔍 AI-Powered Quality Control</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Computer vision systems for real-time inspection</li>
                      <li>• Machine learning models for defect classification</li>
                      <li>• Automated quality scoring and reporting</li>
                      <li>• Integration with existing production systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technology Stack</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• NVIDIA Jetson edge computing</li>
                      <li>• TensorFlow for ML models</li>
                      <li>• OpenCV for image processing</li>
                      <li>• Custom quality control algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚙️ Predictive Maintenance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• IoT sensors on critical machinery</li>
                      <li>• Real-time data collection and analysis</li>
                      <li>• Predictive failure models</li>
                      <li>• Automated maintenance scheduling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technology Stack</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Industrial IoT sensors</li>
                      <li>• Time series analysis algorithms</li>
                      <li>• Cloud-based ML platform</li>
                      <li>• Integration with CMMS systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Process Optimization</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time production monitoring</li>
                      <li>• AI-driven process parameter optimization</li>
                      <li>• Automated quality feedback loops</li>
                      <li>• Performance analytics and reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technology Stack</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time data streaming</li>
                      <li>• Advanced analytics platform</li>
                      <li>• Custom optimization algorithms</li>
                      <li>• Interactive dashboards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 1: Pilot Program (Months 1-3)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Deployed AI quality control on 2 production lines</li>
                  <li>• Installed IoT sensors on critical equipment</li>
                  <li>• Trained production staff on new systems</li>
                  <li>• Established baseline metrics and KPIs</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 2: Scale Up (Months 4-8)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Expanded to 8 additional production lines</li>
                  <li>• Implemented predictive maintenance across all facilities</li>
                  <li>• Deployed process optimization algorithms</li>
                  <li>• Integrated all systems with existing infrastructure</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 3: Full Deployment (Months 9-12)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Rolled out to all 15 production facilities</li>
                  <li>• Optimized AI models based on real-world data</li>
                  <li>• Implemented advanced analytics and reporting</li>
                  <li>• Established continuous improvement processes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              The AI transformation delivered exceptional results across all key performance 
              indicators, exceeding initial expectations and providing a strong ROI.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Quality Improvements</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex justify-between">
                    <span>Defect Rate Reduction:</span>
                    <span className="font-semibold">85%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rework Reduction:</span>
                    <span className="font-semibold">90%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Customer Complaints:</span>
                    <span className="font-semibold">-75%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Quality Score:</span>
                    <span className="font-semibold">98.5%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Operational Efficiency</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex justify-between">
                    <span>Production Speed:</span>
                    <span className="font-semibold">+60%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Unplanned Downtime:</span>
                    <span className="font-semibold">-80%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Inspection Time:</span>
                    <span className="font-semibold">-95%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Overall Equipment Effectiveness:</span>
                    <span className="font-semibold">+45%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$12M</div>
                  <div className="text-sm text-gray-600">Annual Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                  <div className="text-sm text-gray-600">ROI in First Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8 Months</div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Success Factors</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Strategic Approach</h3>
                <p className="text-gray-700 mb-4">
                  The success was driven by a comprehensive strategy that addressed people, 
                  processes, and technology in an integrated manner.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Executive sponsorship and clear vision</li>
                  <li>• Phased implementation with measurable milestones</li>
                  <li>• Strong change management and training programs</li>
                  <li>• Continuous monitoring and optimization</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🤝 Team Collaboration</h3>
                <p className="text-gray-700 mb-4">
                  Close collaboration between Zion Tech Group's AI experts and the client's 
                  manufacturing team was crucial for success.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Joint development teams with domain expertise</li>
                  <li>• Regular feedback sessions and iterations</li>
                  <li>• Knowledge transfer and training programs</li>
                  <li>• Ongoing support and maintenance</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🔧 Technology Excellence</h3>
                <p className="text-gray-700 mb-4">
                  The technical implementation leveraged cutting-edge AI technologies 
                  tailored to manufacturing requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom AI models trained on manufacturing data</li>
                  <li>• Edge computing for real-time processing</li>
                  <li>• Robust integration with existing systems</li>
                  <li>• Scalable and maintainable architecture</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">✅ What Worked Well</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Starting with pilot programs to prove value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Investing heavily in change management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Focusing on measurable business outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Building strong partnerships with vendors</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-orange-800 mb-4">⚠️ Challenges Overcome</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Data quality and integration issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Resistance to change from production staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Balancing accuracy with processing speed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 font-bold">•</span>
                    <span>Managing expectations during implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Transform Your Manufacturing with AI</h3>
            <p className="text-lg mb-6 opacity-90">
              Learn how AI can revolutionize your manufacturing operations. Get a free 
              assessment and discover your potential for improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}