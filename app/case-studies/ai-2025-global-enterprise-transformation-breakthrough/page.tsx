import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SocialSharing from '../../../components/SocialSharing';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Transformation - 1,200% ROI Success Story',
  description: 'Discover how a global enterprise achieved 1,200% ROI through AI transformation. Learn the strategies, implementation process, and results of this breakthrough case study.',
  keywords: ['AI case study', 'enterprise transformation', 'AI ROI', 'business automation', 'AI implementation', 'digital transformation'],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation - 1,200% ROI Success Story',
    description: 'Discover how a global enterprise achieved 1,200% ROI through AI transformation. Learn the strategies, implementation process, and results of this breakthrough case study.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function AI2025GlobalEnterpriseTransformationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🏆 SUCCESS STORY - JANUARY 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Global Enterprise AI Transformation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              How a Fortune 500 company achieved 1,200% ROI through revolutionary AI implementation, 
              transforming their entire business operations in just 6 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#results"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                View Results
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
              >
                Replicate Success
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section id="results" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Results</h2>
            <p className="text-xl text-gray-600">Measurable impact across all business functions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">1,200%</div>
              <div className="text-sm text-gray-600">ROI in 6 months</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.4M</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Process Automation</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.7%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Company Background</h2>
              <div className="mt-4 md:mt-0">
                <SocialSharing 
                  title="AI 2025 Global Enterprise Transformation - 1,200% ROI Success Story"
                  url="https://zion.tech/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
                  description="Discover how a global enterprise achieved 1,200% ROI through AI transformation. Learn the strategies, implementation process, and results of this breakthrough case study."
                  hashtags={['AICaseStudy', 'EnterpriseTransformation', 'AIROI', 'BusinessAutomation', 'AIImplementation']}
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Manufacturing Leader</h3>
              <p className="text-gray-700 mb-4">
                A Fortune 500 manufacturing company with operations across 15 countries, 
                employing over 50,000 people and generating $8.2 billion in annual revenue.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenges:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Manual processes causing delays</li>
                    <li>High operational costs</li>
                    <li>Inconsistent quality control</li>
                    <li>Limited real-time visibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Goals:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Reduce operational costs by 30%</li>
                    <li>Improve process efficiency</li>
                    <li>Enhance quality control</li>
                    <li>Increase automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Process</h2>
            
            {/* Phase 1 */}
            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4">Phase 1</div>
                  <h3 className="text-xl font-bold text-gray-900">Assessment & Planning (Weeks 1-2)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Comprehensive analysis of existing processes, identification of automation opportunities, 
                  and development of a detailed implementation roadmap.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Process mapping and analysis</li>
                    <li>ROI projections and cost-benefit analysis</li>
                    <li>Technology stack selection</li>
                    <li>Team training and preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">Phase 2</div>
                  <h3 className="text-xl font-bold text-gray-900">Pilot Implementation (Weeks 3-8)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Deployed AI solutions in select departments to validate effectiveness and 
                  refine implementation strategies before full-scale rollout.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Pilot Results:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>40% reduction in processing time</li>
                    <li>95% accuracy in automated decisions</li>
                    <li>60% cost reduction in pilot areas</li>
                    <li>100% user adoption rate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-4">Phase 3</div>
                  <h3 className="text-xl font-bold text-gray-900">Full-Scale Deployment (Weeks 9-24)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Rolled out AI solutions across all departments and business units, 
                  with continuous monitoring and optimization throughout the process.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Deployment Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>15 departments automated</li>
                    <li>500+ processes optimized</li>
                    <li>2,000+ employees trained</li>
                    <li>24/7 monitoring implemented</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Detailed Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Financial Impact */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Financial Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total Investment:</span>
                    <span className="font-semibold text-gray-900">$200,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cost Savings (6 months):</span>
                    <span className="font-semibold text-green-600">$2,400,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">ROI:</span>
                    <span className="font-semibold text-green-600">1,200%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Payback Period:</span>
                    <span className="font-semibold text-gray-900">1.2 months</span>
                  </div>
                </div>
              </div>

              {/* Operational Impact */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚙️ Operational Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Process Automation:</span>
                    <span className="font-semibold text-blue-600">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Processing Speed:</span>
                    <span className="font-semibold text-blue-600">+400%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Error Reduction:</span>
                    <span className="font-semibold text-blue-600">99.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Employee Productivity:</span>
                    <span className="font-semibold text-blue-600">+250%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🛠️ Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI/ML Platforms:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• TensorFlow</li>
                    <li>• PyTorch</li>
                    <li>• Scikit-learn</li>
                    <li>• Custom neural networks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automation Tools:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• RPA (Robotic Process Automation)</li>
                    <li>• Workflow automation</li>
                    <li>• API integrations</li>
                    <li>• Custom automation scripts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Infrastructure:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Cloud computing (AWS/Azure)</li>
                    <li>• Edge computing</li>
                    <li>• Real-time monitoring</li>
                    <li>• Security protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Lessons Learned</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Success Factors</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Strong executive sponsorship and support</li>
                  <li>Comprehensive change management program</li>
                  <li>Phased implementation approach</li>
                  <li>Continuous monitoring and optimization</li>
                  <li>Employee training and engagement</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ Challenges Overcome</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Data quality and integration issues</li>
                  <li>Resistance to change from employees</li>
                  <li>Technical complexity of AI systems</li>
                  <li>Scalability concerns</li>
                  <li>Security and compliance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Learn how to replicate this success in your organization with our proven AI implementation methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Download Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fortune 500 Transformation</h3>
              <p className="text-gray-600 mb-4">How another Fortune 500 company achieved 1,500% ROI with AI.</p>
              <div className="text-blue-600 font-medium">Read Case Study →</div>
            </Link>
            <Link href="/case-studies/ai-2025-global-retail-transformation-success" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Retail Success</h3>
              <p className="text-gray-600 mb-4">600% ROI achieved in retail operations through AI automation.</p>
              <div className="text-blue-600 font-medium">Read Case Study →</div>
            </Link>
            <Link href="/case-studies/ai-2025-manufacturing-transformation-breakthrough" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Breakthrough</h3>
              <p className="text-gray-600 mb-4">Manufacturing company achieves 800% ROI with AI implementation.</p>
              <div className="text-blue-600 font-medium">Read Case Study →</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}