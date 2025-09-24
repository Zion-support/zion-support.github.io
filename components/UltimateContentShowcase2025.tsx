import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 ULTIMATE 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most comprehensive collection of AI insights, implementation guides, 
            and success stories. Everything you need to master AI in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/blog/ai-2025-enterprise-automation-mastery" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-xl font-bold mb-2">Enterprise Automation Mastery</h3>
                <p className="text-sm opacity-90">Complete 2025 implementation guide with proven strategies</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600">Implementation Guide</span>
                  <span className="text-sm text-gray-500">20 min read</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 5-phase implementation framework</li>
                  <li>• Real-world case studies</li>
                  <li>• ROI calculation methods</li>
                  <li>• Technology stack recommendations</li>
                </ul>
                <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:underline">
                  Read Full Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-xl font-bold mb-2">1200% ROI Success Story</h3>
                <p className="text-sm opacity-90">Fortune 500 transformation case study</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-green-600">Case Study</span>
                  <span className="text-sm text-gray-500">15 min read</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• $50M+ in cost savings</li>
                  <li>• 40% operational cost reduction</li>
                  <li>• 300% productivity increase</li>
                  <li>• 18-month implementation timeline</li>
                </ul>
                <div className="mt-4 flex items-center text-green-600 font-semibold group-hover:underline">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="text-xl font-bold mb-2">Ultimate Implementation Toolkit</h3>
                <p className="text-sm opacity-90">200+ pages of templates and frameworks</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-600">Free Resource</span>
                  <span className="text-sm text-gray-500">200+ pages</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 50+ ready-to-use templates</li>
                  <li>• 25+ detailed checklists</li>
                  <li>• ROI calculation frameworks</li>
                  <li>• Video training modules</li>
                </ul>
                <div className="mt-4 flex items-center text-purple-600 font-semibold group-hover:underline">
                  Download Free Toolkit →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Showcase */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2025-multimodal-revolution" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-3">🎭</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Multimodal AI Revolution</h4>
                <p className="text-sm text-gray-600">Beyond text to vision, audio, and beyond</p>
              </div>
            </Link>

            <Link href="/blog/ai-2025-quantum-machine-learning-breakthrough" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-3">⚛️</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Quantum ML Breakthrough</h4>
                <p className="text-sm text-gray-600">Next-generation machine learning</p>
              </div>
            </Link>

            <Link href="/blog/ai-2025-edge-computing-revolution" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Edge Computing Revolution</h4>
                <p className="text-sm text-gray-600">Real-time AI at the edge</p>
              </div>
            </Link>

            <Link href="/case-studies/ai-2026-global-tech-transformation-breakthrough" className="group">
              <div className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Global Tech Breakthrough</h4>
                <p className="text-sm text-gray-600">900% ROI transformation story</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using our content to achieve 
            unprecedented results with AI implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              📥 Get Free Toolkit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}