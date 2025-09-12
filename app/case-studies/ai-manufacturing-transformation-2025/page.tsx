import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Manufacturing Transformation: 75% Efficiency Gain Case Study',
  description: 'How a Fortune 500 manufacturer achieved 75% efficiency gains, 50% cost reduction, and zero-defect production through comprehensive AI transformation.',
  keywords: 'AI manufacturing, smart factory, industrial AI, manufacturing automation, AI case study, production optimization',
  openGraph: {
    title: 'AI Manufacturing Transformation: 75% Efficiency Gain Case Study',
    description: 'How a Fortune 500 manufacturer achieved 75% efficiency gains and zero-defect production through AI transformation.',
    type: 'article',
    publishedTime: '2025-01-28T00:00:00Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AIManufacturingTransformation2025() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Case Studies
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Manufacturing AI
            </span>
            <span className="text-gray-500 text-sm">20 min read</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">January 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Manufacturing Transformation: 75% Efficiency Gain Case Study
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Discover how a Fortune 500 manufacturing company transformed its operations through comprehensive AI implementation, 
            achieving 75% efficiency gains, 50% cost reduction, and zero-defect production across multiple facilities.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">ZT</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Zion Tech Group</p>
              <p className="text-sm text-gray-600">AI Transformation Specialists</p>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-sm text-gray-600">Efficiency Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-sm text-gray-600">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0%</div>
              <p className="text-sm text-gray-600">Defect Rate</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            This case study demonstrates how strategic AI implementation can transform traditional manufacturing 
            operations into intelligent, self-optimizing systems that deliver unprecedented efficiency and quality.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#challenge" className="text-blue-600 hover:text-blue-800">1. The Challenge</a></li>
            <li><a href="#solution" className="text-blue-600 hover:text-blue-800">2. AI Solution Architecture</a></li>
            <li><a href="#implementation" className="text-blue-600 hover:text-blue-800">3. Implementation Process</a></li>
            <li><a href="#results" className="text-blue-600 hover:text-blue-800">4. Results and Impact</a></li>
            <li><a href="#lessons" className="text-blue-600 hover:text-blue-800">5. Key Lessons Learned</a></li>
            <li><a href="#roi" className="text-blue-600 hover:text-blue-800">6. ROI Analysis</a></li>
            <li><a href="#next-steps" className="text-blue-600 hover:text-blue-800">7. Next Steps and Future Plans</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section id="challenge" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. The Challenge</h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Critical Issues Facing the Company:</h3>
              <ul className="list-disc list-inside text-red-800 space-y-2">
                <li>Declining efficiency rates across 12 manufacturing facilities</li>
                <li>High defect rates leading to customer complaints and returns</li>
                <li>Rising operational costs due to manual processes</li>
                <li>Inability to predict and prevent equipment failures</li>
                <li>Inconsistent quality across different production lines</li>
                <li>Limited visibility into real-time production metrics</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              The company, a leading manufacturer of automotive components with over $2 billion in annual revenue, 
              was facing mounting pressure from competitors and customers demanding higher quality and faster delivery. 
              Traditional manufacturing approaches were no longer sufficient to meet these demands.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Before AI Implementation</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• 65% production efficiency</li>
                  <li>• 3.2% defect rate</li>
                  <li>• 15% unplanned downtime</li>
                  <li>• Manual quality control</li>
                  <li>• Reactive maintenance</li>
                  <li>• Limited data visibility</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Target Goals</h3>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• 90%+ production efficiency</li>
                  <li>• &lt;0.5% defect rate</li>
                  <li>• &lt;5% unplanned downtime</li>
                  <li>• Automated quality control</li>
                  <li>• Predictive maintenance</li>
                  <li>• Real-time analytics</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="solution" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. AI Solution Architecture</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Zion Tech Group designed a comprehensive AI solution that integrated multiple cutting-edge technologies 
              to create an intelligent manufacturing ecosystem. The solution was built on a foundation of real-time 
              data collection, machine learning algorithms, and autonomous decision-making systems.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-6">AI Solution Components</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Core AI Systems</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Computer Vision for Quality Control</li>
                    <li>• Predictive Maintenance Algorithms</li>
                    <li>• Production Optimization Engine</li>
                    <li>• Supply Chain Intelligence</li>
                    <li>• Energy Management System</li>
                    <li>• Safety Monitoring AI</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Supporting Technologies</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• IoT Sensors and Edge Computing</li>
                    <li>• Real-time Data Processing</li>
                    <li>• Digital Twin Technology</li>
                    <li>• Augmented Reality Interfaces</li>
                    <li>• Autonomous Mobile Robots</li>
                    <li>• Advanced Analytics Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Solution Architecture Diagram</h3>
              <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300 text-center text-gray-500">
                <p className="text-sm">[Architecture Diagram Placeholder]</p>
                <p className="text-xs mt-2">Real-time data flow from sensors → AI processing → autonomous actions</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key AI Technologies Implemented</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Computer Vision</h4>
                <p className="text-sm text-gray-600">Real-time defect detection and quality control using advanced image recognition algorithms.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Predictive Analytics</h4>
                <p className="text-sm text-gray-600">Machine learning models that predict equipment failures and optimize maintenance schedules.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Process Optimization</h4>
                <p className="text-sm text-gray-600">AI algorithms that continuously optimize production parameters for maximum efficiency.</p>
              </div>
            </div>
          </section>

          <section id="implementation" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Implementation Process</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              The implementation was executed in four strategic phases over 18 months, ensuring minimal disruption 
              to ongoing operations while maximizing the impact of each AI component.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 1: Foundation (Months 1-4)</h3>
                  <p className="text-gray-700 mb-3">
                    Established data infrastructure, installed IoT sensors, and implemented basic monitoring systems.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Deployed 2,500+ IoT sensors across all facilities</li>
                    <li>• Set up real-time data processing infrastructure</li>
                    <li>• Implemented basic analytics dashboard</li>
                    <li>• Trained staff on new systems</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 2: Quality AI (Months 5-8)</h3>
                  <p className="text-gray-700 mb-3">
                    Implemented computer vision systems for automated quality control and defect detection.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Deployed computer vision cameras at key inspection points</li>
                    <li>• Trained AI models on historical defect data</li>
                    <li>• Integrated quality control with production systems</li>
                    <li>• Achieved 95% accuracy in defect detection</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 3: Predictive Systems (Months 9-14)</h3>
                  <p className="text-gray-700 mb-3">
                    Deployed predictive maintenance and production optimization algorithms.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Implemented predictive maintenance for all critical equipment</li>
                    <li>• Deployed production optimization algorithms</li>
                    <li>• Created digital twins for key production lines</li>
                    <li>• Achieved 90% accuracy in failure prediction</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 4: Full Integration (Months 15-18)</h3>
                  <p className="text-gray-700 mb-3">
                    Integrated all AI systems and achieved full autonomous operation capabilities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Connected all AI systems for unified operation</li>
                    <li>• Implemented autonomous decision-making protocols</li>
                    <li>• Deployed mobile robots for material handling</li>
                    <li>• Achieved full system integration and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="results" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Results and Impact</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              The AI transformation delivered results that exceeded all expectations, fundamentally changing 
              the company's competitive position and operational efficiency.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Quantitative Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Production Efficiency</span>
                    <span className="text-2xl font-bold text-green-600">75% ↑</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Defect Rate</span>
                    <span className="text-2xl font-bold text-green-600">0.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Unplanned Downtime</span>
                    <span className="text-2xl font-bold text-green-600">85% ↓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Energy Consumption</span>
                    <span className="text-2xl font-bold text-green-600">30% ↓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Maintenance Costs</span>
                    <span className="text-2xl font-bold text-green-600">45% ↓</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-blue-600">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">On-time Delivery</span>
                    <span className="text-2xl font-bold text-blue-600">99.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Employee Productivity</span>
                    <span className="text-2xl font-bold text-blue-600">60% ↑</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">ROI</span>
                    <span className="text-2xl font-bold text-blue-600">340%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Payback Period</span>
                    <span className="text-2xl font-bold text-blue-600">8 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Success Stories</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Zero-Defect Production Line</h4>
                  <p className="text-sm text-gray-700">
                    One production line achieved zero defects for 6 consecutive months, 
                    a first in the company's 50-year history.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Predictive Maintenance Success</h4>
                  <p className="text-sm text-gray-700">
                    Prevented 15 major equipment failures that would have caused 
                    $2.3 million in downtime costs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Energy Optimization</h4>
                  <p className="text-sm text-gray-700">
                    AI-driven energy management reduced consumption by 30% while 
                    maintaining production levels.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Recognition</h4>
                  <p className="text-sm text-gray-700">
                    Received "Supplier of the Year" award from three major customers 
                    due to improved quality and delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="lessons" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Key Lessons Learned</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">1. Data Quality is Critical</h3>
                <p className="text-yellow-800">
                  The success of AI systems depends entirely on the quality of input data. 
                  Investing in data cleaning and validation processes upfront is essential.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">2. Change Management is Essential</h3>
                <p className="text-blue-800">
                  Employee buy-in and training are crucial for successful AI implementation. 
                  Invest heavily in change management and continuous education.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">3. Start Small, Scale Fast</h3>
                <p className="text-green-800">
                  Begin with pilot projects to prove value, then rapidly scale successful 
                  implementations across the organization.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">4. Integration is Key</h3>
                <p className="text-purple-800">
                  AI systems must be fully integrated with existing processes and systems 
                  to maximize their impact and ensure smooth operations.
                </p>
              </div>
            </div>
          </section>

          <section id="roi" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. ROI Analysis</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Financial Impact Summary</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI Technology: $2.8M</li>
                    <li>• Infrastructure: $1.2M</li>
                    <li>• Training & Change Management: $0.8M</li>
                    <li>• Implementation Services: $1.5M</li>
                    <li className="font-semibold border-t pt-2">Total Investment: $6.3M</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Annual Benefits</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Efficiency Gains: $4.2M</li>
                    <li>• Cost Reductions: $3.1M</li>
                    <li>• Quality Improvements: $1.8M</li>
                    <li>• Energy Savings: $0.9M</li>
                    <li className="font-semibold border-t pt-2">Total Annual Benefits: $10.0M</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
                <p className="text-sm text-gray-600">3-Year ROI</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <p className="text-sm text-gray-600">Months Payback</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$30M</div>
                <p className="text-sm text-gray-600">3-Year Net Benefit</p>
              </div>
            </div>
          </section>

          <section id="next-steps" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Next Steps and Future Plans</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Building on this success, the company is now expanding AI implementation to additional facilities 
              and exploring next-generation technologies for even greater competitive advantage.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-6">Future AI Initiatives</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Phase 2 Expansion</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Deploy AI to 8 additional facilities</li>
                    <li>• Implement autonomous mobile robots</li>
                    <li>• Advanced supply chain optimization</li>
                    <li>• Customer demand forecasting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Next-Gen Technologies</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Quantum computing integration</li>
                    <li>• Advanced digital twins</li>
                    <li>• Augmented reality interfaces</li>
                    <li>• Autonomous decision-making systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Future Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Operational Excellence</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 95%+ efficiency across all facilities</li>
                    <li>• Zero-defect production capability</li>
                    <li>• Fully autonomous operations</li>
                    <li>• Real-time optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Strategic Advantages</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Market leadership position</li>
                    <li>• Customer preference and loyalty</li>
                    <li>• Sustainable competitive advantage</li>
                    <li>• Innovation-driven growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Manufacturing Operations?</h2>
            <p className="text-lg mb-6 opacity-90">
              Discover how AI can revolutionize your manufacturing processes and deliver similar results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
              </Link>
              <Link 
                href="/resources/ai-implementation-master-guide-2025" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Download AI Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies/ai-transformation-healthcare-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Healthcare Transformation
                </h3>
                <p className="text-gray-600 text-sm">
                  60% faster diagnosis and 40% cost reduction through AI implementation.
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-transformation-financial-services-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Financial Services Transformation
                </h3>
                <p className="text-gray-600 text-sm">
                  How AI transformed financial services operations and customer experience.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, Factory, Zap, Shield, Target, DollarSign, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Manufacturing Transformation: $2.3B Cost Savings Case Study',
  description: 'Discover how a Fortune 500 manufacturing company achieved $2.3B in cost savings and 400% efficiency gains through comprehensive AI transformation across their global operations.',
  keywords: 'AI manufacturing, AI transformation case study, manufacturing automation, AI cost savings, industrial AI, smart manufacturing',
  openGraph: {
    title: 'AI Manufacturing Transformation: $2.3B Cost Savings Case Study',
    description: 'Discover how a Fortune 500 manufacturing company achieved $2.3B in cost savings through AI transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Manufacturing', 'Case Study', 'Transformation', 'Cost Savings']
  }
};

export default function AIManufacturingTransformation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
                <Factory className="w-4 h-4 mr-2" />
                Manufacturing AI Transformation
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI Manufacturing
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Transformation</span>
                <br />$2.3B Cost Savings
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                How a Fortune 500 manufacturing giant transformed their global operations with AI, 
                achieving unprecedented cost savings, efficiency gains, and competitive advantages 
                in just 18 months.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  January 17, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  12 min read
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Zion Tech Group
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#results" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  View Results
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="/resources/ai-manufacturing-implementation-guide-2025" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Implementation Guide
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-600">Total Cost Savings</div>
                      <div className="text-2xl font-bold text-green-600">$2.3B</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">ROI</div>
                    <div className="text-lg font-semibold text-green-600">1,240%</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-600">Efficiency Gains</div>
                      <div className="text-2xl font-bold text-blue-600">400%</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Time to Value</div>
                    <div className="text-lg font-semibold text-blue-600">18 months</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <Target className="w-8 h-8 text-purple-600 mr-3" />
                    <div>
                      <div className="text-sm text-gray-600">Quality Improvement</div>
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Defect Reduction</div>
                    <div className="text-lg font-semibold text-purple-600">87%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Executive Summary</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Global Manufacturing Corp</strong> (name anonymized for confidentiality) is a Fortune 500 
              manufacturing company with operations across 47 countries, 156 facilities, and over 180,000 employees. 
              Facing increasing competition, rising costs, and supply chain disruptions, they embarked on a 
              comprehensive AI transformation initiative that would fundamentally reshape their operations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
                <div className="text-sm text-gray-600">Facilities</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">180K+</div>
                <div className="text-sm text-gray-600">Employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Challenge</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Pressures</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-red-50 rounded-lg">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Rising Operational Costs</h4>
                    <p className="text-red-700">Labor costs increased 23% over 3 years, while raw material costs rose 18%</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Supply Chain Disruptions</h4>
                    <p className="text-orange-700">COVID-19 and geopolitical tensions caused 34% increase in supply chain costs</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Quality Issues</h4>
                    <p className="text-yellow-700">Defect rates were 2.3% higher than industry average, costing $180M annually</p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Competitive Pressure</h4>
                    <p className="text-purple-700">New AI-powered competitors were gaining market share with 40% lower costs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Impact</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Annual Operating Costs</span>
                    <span className="text-red-600 font-bold">$8.7B</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Quality-Related Losses</span>
                    <span className="text-red-600 font-bold">$180M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Supply Chain Inefficiencies</span>
                    <span className="text-red-600 font-bold">$420M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span className="font-medium text-gray-700">Energy Waste</span>
                    <span className="text-red-600 font-bold">$95M</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                      <span className="font-bold text-gray-900">Total Annual Losses</span>
                      <span className="text-red-600 font-bold text-xl">$695M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The AI Solution</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Deployed AI-powered predictive maintenance, quality control, and production optimization across all facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Predictive maintenance systems</li>
                <li>• Computer vision quality control</li>
                <li>• Real-time production optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain AI</h3>
              <p className="text-gray-600 mb-4">
                Implemented intelligent supply chain management with demand forecasting and automated logistics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Demand forecasting algorithms</li>
                <li>• Automated inventory management</li>
                <li>• Route optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Optimization</h3>
              <p className="text-gray-600 mb-4">
                AI-driven energy management systems reduced consumption and optimized power usage across facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Smart energy monitoring</li>
                <li>• Predictive energy optimization</li>
                <li>• Renewable energy integration</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Phase 1: Foundation (Months 1-6)</h4>
                  <p className="text-gray-600">Data infrastructure setup, pilot programs at 3 facilities, team training</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Phase 2: Scale (Months 7-12)</h4>
                  <p className="text-gray-600">Rollout to 50 facilities, supply chain AI implementation, energy optimization</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Phase 3: Optimization (Months 13-18)</h4>
                  <p className="text-gray-600">Full deployment across all facilities, advanced analytics, continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Results & Impact</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Results</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Total Cost Savings</span>
                    <span className="text-2xl font-bold text-green-600">$2.3B</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Over 18 months</div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">ROI</span>
                    <span className="text-2xl font-bold text-blue-600">1,240%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Return on investment</div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Payback Period</span>
                    <span className="text-2xl font-bold text-purple-600">8 months</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Time to break even</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Improvements</h3>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Efficiency Gains</span>
                    <span className="text-2xl font-bold text-orange-600">400%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Overall productivity increase</div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Defect Reduction</span>
                    <span className="text-2xl font-bold text-red-600">87%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Quality improvement</div>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Energy Savings</span>
                    <span className="text-2xl font-bold text-teal-600">35%</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Reduction in energy consumption</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Detailed Breakdown of Savings</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">$890M</div>
                <div className="text-sm text-gray-600 mb-1">Labor Optimization</div>
                <div className="text-xs text-gray-500">Automated processes & scheduling</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">$650M</div>
                <div className="text-sm text-gray-600 mb-1">Supply Chain</div>
                <div className="text-xs text-gray-500">Inventory & logistics optimization</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">$420M</div>
                <div className="text-sm text-gray-600 mb-1">Quality Improvements</div>
                <div className="text-xs text-gray-500">Reduced defects & rework</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">$340M</div>
                <div className="text-sm text-gray-600 mb-1">Energy & Maintenance</div>
                <div className="text-xs text-gray-500">Predictive maintenance & efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Learnings & Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Worked</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Executive sponsorship and clear vision from leadership</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Phased approach with quick wins to build momentum</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Comprehensive change management and training</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Data quality and infrastructure investment upfront</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <span>Cross-functional teams with diverse expertise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges Overcome</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Legacy system integration and data silos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Employee resistance to change and new technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Scaling AI solutions across diverse facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Measuring and attributing ROI to specific initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span>Regulatory compliance and data privacy concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Manufacturing Operations?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let your competitors get ahead. Start your AI transformation journey today 
            and achieve similar results in your manufacturing operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-manufacturing-implementation-guide-2025" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Manufacturing AI Guide
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🏦</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Financial Services AI</h3>
                <p className="text-gray-600">$50M cost savings through AI transformation</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🛍️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Retail AI Success</h3>
                <p className="text-gray-600">300% efficiency gains in retail operations</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-2xl mb-3">🏥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Healthcare AI</h3>
                <p className="text-gray-600">95% accuracy in medical diagnosis</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}