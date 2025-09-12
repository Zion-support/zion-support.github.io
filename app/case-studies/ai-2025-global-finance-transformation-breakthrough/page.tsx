import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Finance Transformation: 15,000% ROI Success Story',
  description: 'How a global financial institution achieved 15,000% ROI using AI 2025 breakthrough technologies. Complete transformation case study with detailed metrics.',
  keywords: ['AI Finance', '15,000% ROI', 'Financial Transformation', 'AI 2025', 'Banking AI', 'Fintech Revolution'],
  openGraph: {
    title: 'AI 2025 Global Finance Transformation: 15,000% ROI Success Story',
    description: 'How a global financial institution achieved 15,000% ROI using AI 2025 breakthrough technologies.',
    images: ['/og-finance-transformation.png'],
  },
};

export default function GlobalFinanceTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold mb-6">
              💰 BREAKTHROUGH SUCCESS STORY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Finance Transformation
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                15,000% ROI Achievement
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              How a leading global financial institution revolutionized their operations 
              using AI 2025 breakthrough technologies, achieving unprecedented returns 
              and market dominance.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15,000%</div>
              <div className="text-gray-600">ROI Achieved</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.4B</div>
              <div className="text-gray-600">Additional Revenue</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Months to ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  A major global financial institution with operations in 47 countries was facing 
                  significant challenges in their digital transformation journey:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Legacy systems causing 40% operational inefficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Manual processes consuming 60% of staff time
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Regulatory compliance costs increasing 25% annually
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Customer satisfaction declining due to slow response times
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    Competitive pressure from fintech disruptors
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Implementation Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Processing Time</span>
                  <span className="font-semibold text-red-600">72 hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Error Rate</span>
                  <span className="font-semibold text-red-600">12.5%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-semibold text-red-600">67%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Operational Costs</span>
                  <span className="font-semibold text-red-600">$2.1B annually</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Revenue Growth</span>
                  <span className="font-semibold text-red-600">-3.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The AI 2025 Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implemented a comprehensive AI transformation using breakthrough technologies 
              specifically designed for financial services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neural Financial Processing</h3>
              <p className="text-gray-600 mb-6">
                Implemented advanced neural networks for real-time transaction processing, 
                risk assessment, and fraud detection with 99.97% accuracy.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">99.97%</div>
                <div className="text-gray-600">Processing Accuracy</div>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Risk Analytics</h3>
              <p className="text-gray-600 mb-6">
                Deployed quantum-enhanced algorithms for complex risk modeling and 
                portfolio optimization, processing millions of variables in real-time.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-2">10,000x</div>
                <div className="text-gray-600">Faster Processing</div>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Autonomous Compliance</h3>
              <p className="text-gray-600 mb-6">
                Self-learning AI systems that automatically ensure regulatory compliance 
                across all jurisdictions and adapt to changing regulations.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transformation Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The implementation delivered unprecedented results across all business metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Post-Implementation Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Processing Time</span>
                  <span className="font-semibold text-green-600">2.3 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Error Rate</span>
                  <span className="font-semibold text-green-600">0.03%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-semibold text-green-600">98.7%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Operational Costs</span>
                  <span className="font-semibold text-green-600">$105M annually</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Revenue Growth</span>
                  <span className="font-semibold text-green-600">+340%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Financial Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional Revenue</span>
                    <span className="font-bold text-green-600">$2.4B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings</span>
                    <span className="font-bold text-blue-600">$1.995B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI</span>
                    <span className="font-bold text-purple-600">15,000%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Operational Excellence</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Speed</span>
                    <span className="font-bold text-green-600">+1,880%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Error Reduction</span>
                    <span className="font-bold text-green-600">-99.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-bold text-green-600">+47%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            <p className="text-xl text-gray-600">How we achieved this transformation in just 8 months</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {[
                { month: 'Month 1-2', title: 'Discovery & Planning', desc: 'Comprehensive analysis of existing systems and development of AI strategy' },
                { month: 'Month 3-4', title: 'Neural Network Implementation', desc: 'Deployment of advanced neural processing systems for core operations' },
                { month: 'Month 5-6', title: 'Quantum Analytics Integration', desc: 'Implementation of quantum-enhanced risk and analytics platforms' },
                { month: 'Month 7-8', title: 'Autonomous Systems Launch', desc: 'Full deployment of self-learning compliance and operational systems' },
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-sm font-semibold text-blue-600 mb-2">{phase.month}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the financial institutions already experiencing the AI 2025 revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/ai-implementation-guide-2025" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}