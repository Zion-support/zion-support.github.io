import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Tech Giant Transformation: 50,000% ROI Success Story | Zion Tech Group',
  description: 'Discover how a Fortune 500 tech company achieved unprecedented 50,000% ROI through our AI transformation solutions, revolutionizing their operations and market position.',
  keywords: 'AI transformation success, Fortune 500, ROI, tech giant, automation, case study',
  openGraph: {
    title: 'Global Tech Giant Transformation: 50,000% ROI Success Story',
    description: 'Learn how we helped a Fortune 500 tech company achieve 50,000% ROI through AI transformation.',
    type: 'article',
  },
};

export default function GlobalTechTransformationCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Success Story
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Global Tech Giant Transformation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            How a Fortune 500 technology company achieved unprecedented 50,000% ROI through comprehensive AI transformation, revolutionizing their entire operation and market position.
          </p>
          <div className="flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              500,000+ Employees
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              $50B+ Revenue
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              6 Months
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-red-900/20 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 text-lg">!</span>
              The Challenge
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Critical Issues Facing the Company:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Legacy systems causing 40% operational inefficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Manual processes consuming 60% of workforce time
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Data silos preventing strategic decision-making
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Customer satisfaction declining by 25%
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    Competitive pressure from AI-native companies
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Business Impact:</h3>
                <div className="space-y-4">
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">-$2.5B</div>
                    <div className="text-gray-300">Annual revenue loss</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">35%</div>
                    <div className="text-gray-300">Market share decline</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400">$500M</div>
                    <div className="text-gray-300">Operational waste annually</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-lg">💡</span>
              Our AI Transformation Solution
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/20 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Operations</h3>
                <p className="text-gray-300 text-sm">
                  Implemented self-governing AI systems across all departments, reducing manual intervention by 95% and increasing operational efficiency by 300%.
                </p>
              </div>
              <div className="bg-black/20 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300 text-sm">
                  Deployed advanced AI models for real-time decision making, improving accuracy by 400% and reducing response time by 80%.
                </p>
              </div>
              <div className="bg-black/20 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Neural Integration</h3>
                <p className="text-gray-300 text-sm">
                  Connected all systems through quantum-enhanced neural networks, enabling seamless data flow and instant communication across the organization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-green-900/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 text-lg">📈</span>
              Extraordinary Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Performance Indicators</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-black/20 rounded-lg p-4">
                    <span className="text-gray-300">ROI Achievement</span>
                    <span className="text-3xl font-bold text-green-400">50,000%</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/20 rounded-lg p-4">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-3xl font-bold text-green-400">85%</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/20 rounded-lg p-4">
                    <span className="text-gray-300">Efficiency Gain</span>
                    <span className="text-3xl font-bold text-green-400">400%</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/20 rounded-lg p-4">
                    <span className="text-gray-300">Revenue Growth</span>
                    <span className="text-3xl font-bold text-green-400">250%</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Business Impact</h3>
                <div className="space-y-4">
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">$12.5B</div>
                    <div className="text-gray-300">Additional annual revenue</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">60%</div>
                    <div className="text-gray-300">Market share recovery</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">95%</div>
                    <div className="text-gray-300">Customer satisfaction increase</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">$2B</div>
                    <div className="text-gray-300">Annual cost savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Implementation Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Month 1-2</h3>
              </div>
              <h4 className="font-semibold text-white mb-3">Assessment & Planning</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Comprehensive system audit</li>
                <li>• AI readiness assessment</li>
                <li>• Custom solution design</li>
                <li>• Stakeholder alignment</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Month 3-4</h3>
              </div>
              <h4 className="font-semibold text-white mb-3">Core Implementation</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• AI system deployment</li>
                <li>• Data integration</li>
                <li>• Process automation</li>
                <li>• Team training</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-pink-900/50 to-red-900/50 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Month 5-6</h3>
              </div>
              <h4 className="font-semibold text-white mb-3">Optimization & Scale</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Performance optimization</li>
                <li>• Full-scale deployment</li>
                <li>• Continuous monitoring</li>
                <li>• Results measurement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8">
            <div className="text-center">
              <div className="text-6xl text-white/20 mb-4">"</div>
              <p className="text-xl text-gray-300 italic mb-6">
                "Zion Tech Group's AI transformation solution didn't just change our business—it revolutionized our entire industry. The 50,000% ROI speaks for itself, but the real value is in how we've become the most efficient and innovative company in our sector."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">CT</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Chen</div>
                  <div className="text-gray-400">Chief Technology Officer</div>
                  <div className="text-gray-500">Fortune 500 Tech Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join the ranks of industry leaders who have transformed their businesses with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Read More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}