import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 2025 Enterprise Automation Mastery: The Ultimate Guide to Digital Transformation',
  description: 'Master enterprise automation with AI in 2025. Complete guide covering implementation strategies, ROI optimization, and real-world success stories.',
  keywords: ['AI', 'Enterprise Automation', 'Digital Transformation', 'ROI', 'Implementation'],
  openGraph: {
    title: 'AI 2025 Enterprise Automation Mastery: The Ultimate Guide to Digital Transformation',
    description: 'Master enterprise automation with AI in 2025. Complete guide covering implementation strategies, ROI optimization, and real-world success stories.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Enterprise Automation', 'Digital Transformation', 'ROI', 'Implementation'],
  },
};

export default function EnterpriseAutomationGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 AI 2025 GUIDE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI 2025 Enterprise Automation Mastery
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              The Ultimate Guide to Digital Transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Implementation Support
              </Link>
              <Link
                href="/services/ai-automation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              This comprehensive guide covers everything you need to know about implementing AI-driven enterprise automation in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Implementation</h3>
              <p className="text-gray-600 mb-4">
                Learn proven frameworks for planning, implementing, and scaling AI automation across your organization.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Foundation building strategies</li>
                <li>• Pilot implementation best practices</li>
                <li>• Enterprise rollout planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Optimization</h3>
              <p className="text-gray-600 mb-4">
                Discover how to measure, optimize, and maximize ROI from your AI automation investments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Financial impact measurement</li>
                <li>• Cost-benefit analysis frameworks</li>
                <li>• ROI calculation methodologies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Success</h3>
              <p className="text-gray-600 mb-4">
                Study detailed case studies of companies that achieved remarkable results with AI automation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Manufacturing success stories</li>
                <li>• Financial services transformations</li>
                <li>• Healthcare optimizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Impact & Growth</h2>
            <p className="text-xl text-gray-600">
              The enterprise automation market is experiencing unprecedented growth in 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">$19.6B</div>
              <div className="text-gray-600">Market Size by 2025</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-gray-600">AI-Powered Solutions</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Implementation Framework</h2>
            <p className="text-xl text-gray-600">
              Our proven three-phase approach to successful AI automation implementation.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 1: Foundation Building (Months 1-3)</h3>
                  <p className="text-gray-600 mb-4">
                    Establish the groundwork for successful AI automation implementation through comprehensive assessment and strategic planning.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Current state analysis and process mapping</li>
                    <li>• Technology infrastructure evaluation</li>
                    <li>• Resource and skill assessment</li>
                    <li>• Strategic roadmap development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 2: Pilot Implementation (Months 4-9)</h3>
                  <p className="text-gray-600 mb-4">
                    Execute targeted pilot projects to demonstrate value and build organizational confidence in AI automation.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• High-impact, low-risk process selection</li>
                    <li>• Technology deployment and integration</li>
                    <li>• Team development and training</li>
                    <li>• Performance measurement and optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-6">
                <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Phase 3: Scale and Optimize (Months 10-18)</h3>
                  <p className="text-gray-600 mb-4">
                    Expand successful pilots across the organization while continuously optimizing and innovating.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Enterprise-wide rollout and expansion</li>
                    <li>• Advanced capabilities implementation</li>
                    <li>• Continuous improvement and optimization</li>
                    <li>• Innovation and strategic planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack and Tools</h2>
            <p className="text-xl text-gray-600">
              Comprehensive overview of the technologies and platforms powering modern enterprise automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Automation Platforms</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">UiPath</h4>
                  <p className="text-sm text-gray-600">Comprehensive automation suite with AI capabilities</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Automation Anywhere</h4>
                  <p className="text-sm text-gray-600">Cloud-native platform with cognitive automation</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Microsoft Power Automate</h4>
                  <p className="text-sm text-gray-600">Integration with Microsoft ecosystem</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI and Machine Learning</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">TensorFlow</h4>
                  <p className="text-sm text-gray-600">Open-source ML framework for custom models</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Azure Cognitive Services</h4>
                  <p className="text-sm text-gray-600">Pre-built AI capabilities</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">AWS SageMaker</h4>
                  <p className="text-sm text-gray-600">End-to-end ML platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Optimization Strategies</h2>
            <p className="text-xl text-gray-600">
              Learn how to measure, optimize, and maximize return on investment from AI automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Labor Cost Reduction</span>
                  <span className="font-bold text-green-600">40-70%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Error Reduction</span>
                  <span className="font-bold text-blue-600">85-95%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">Processing Speed</span>
                  <span className="font-bold text-purple-600">60-90%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">Compliance Costs</span>
                  <span className="font-bold text-orange-600">50-80%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">6 months</span>
                  <span className="font-bold text-gray-900">15-25% ROI</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">12 months</span>
                  <span className="font-bold text-gray-900">40-80% ROI</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">24 months</span>
                  <span className="font-bold text-gray-900">100-300% ROI</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">36 months</span>
                  <span className="font-bold text-gray-900">200-500% ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance and implementation support for your AI automation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}