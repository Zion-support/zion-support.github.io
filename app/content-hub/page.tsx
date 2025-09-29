import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Content Hub 2026 - Latest Articles, Case Studies & Success Stories',
  description: 'Explore our comprehensive AI content hub featuring the latest articles, case studies, and success stories covering neural interfaces, space AI, synthetic data, and more.',
  keywords: 'AI content hub, AI articles, AI case studies, AI success stories, neural interfaces, space AI, synthetic data, cognitive computing',
};

export default function ContentHub() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI Content Hub
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {' '}2026
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Discover the latest AI innovations, success stories, and cutting-edge technologies that are transforming industries worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
          >
            📚 All Articles
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            💼 All Case Studies
          </Link>
        </div>
      </div>

      {/* Featured Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Latest Articles */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Latest AI Articles</h2>
          <div className="space-y-6">
            <Link href="/blog/ai-neural-interfaces-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Neural Interfaces 2026: Next-Generation Brain-Computer Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI neural interfaces are transforming human-computer interaction with 99% accuracy, 5ms response time, and 300% productivity gains.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">99%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">5ms</div>
                      <div className="text-xs text-gray-500">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">300%</div>
                      <div className="text-xs text-gray-500">Productivity</div>
                    </div>
                  </div>
                  <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-space-tech-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Space Technology 2026: Autonomous Space Operations & Interplanetary AI
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how AI is revolutionizing space technology with autonomous operations, 99.9% mission success, and 85% cost reduction.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">99.9%</div>
                      <div className="text-xs text-gray-500">Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">85%</div>
                      <div className="text-xs text-gray-500">Cost Cut</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">10x</div>
                      <div className="text-xs text-gray-500">Faster</div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-synthetic-data-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Synthetic Data 2026: Privacy-Preserving AI Training & Data Generation
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI synthetic data is revolutionizing machine learning with 100% privacy protection and 90% faster development.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">100%</div>
                      <div className="text-xs text-gray-500">Privacy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">99%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">10x</div>
                      <div className="text-xs text-gray-500">Faster</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-cognitive-computing-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  AI Cognitive Computing 2026: Human-Like Reasoning & Decision Making
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how AI cognitive computing is revolutionizing decision-making with 95% accuracy and human-like reasoning capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-indigo-600">95%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">80%</div>
                      <div className="text-xs text-gray-500">Faster</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">300%</div>
                      <div className="text-xs text-gray-500">Problem Solving</div>
                    </div>
                  </div>
                  <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-federated-learning-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-cyan-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  AI Federated Learning 2026: Collaborative AI Training & Privacy Protection
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how AI federated learning enables collaborative AI training with 100% privacy protection and 95% model accuracy.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-600">95%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">100%</div>
                      <div className="text-xs text-gray-500">Privacy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">5x</div>
                      <div className="text-xs text-gray-500">Faster</div>
                    </div>
                  </div>
                  <div className="text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Case Studies */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💼 Latest Case Studies</h2>
          <div className="space-y-6">
            <Link href="/case-studies/ai-neural-interface-success-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW CASE STUDY
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FORTUNE 500
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  AI Neural Interface Success 2026: $15M ROI Case Study
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a Fortune 500 manufacturing company achieved $15M ROI with 99% accuracy and 300% productivity gains.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-600">$15M</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">99%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">300%</div>
                      <div className="text-xs text-gray-500">Productivity</div>
                    </div>
                  </div>
                  <div className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-space-tech-success-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW CASE STUDY
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SPACE TECH
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Space Technology Success 2026: $50M ROI Case Study
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a space technology company achieved $50M ROI with 99.9% mission success and 85% cost reduction.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">$50M</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">99.9%</div>
                      <div className="text-xs text-gray-500">Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">85%</div>
                      <div className="text-xs text-gray-500">Cost Cut</div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-synthetic-data-success-2026" className="group block">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW CASE STUDY
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    HEALTHCARE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Synthetic Data Success 2026: $25M ROI Case Study
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a healthcare company achieved $25M ROI with 90% faster development and 100% privacy protection.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">$25M</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">90%</div>
                      <div className="text-xs text-gray-500">Faster</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">100%</div>
                      <div className="text-xs text-gray-500">Privacy</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    View Case Study →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Discover how our cutting-edge AI solutions can revolutionize your operations and drive unprecedented growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}