import React from 'react';
import Link from 'next/link';
import { Brain, Rocket, Database, Heart, ArrowRight, Zap } from 'lucide-react';

export default function LatestContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            Latest 2026 Content
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest research, case studies, and breakthrough technologies that are shaping the future of AI and technology.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Neural Interfaces Article */}
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Neural Interfaces</h3>
                    <p className="text-purple-100">Brain-Computer Integration</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                  <span className="text-gray-500 text-sm">28 min read</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Neural Interfaces 2026: Brain-Computer Integration Revolution
                </h4>
                <p className="text-gray-600 mb-4">
                  Direct brain-computer communication with 99.7% accuracy and sub-100ms response times. 
                  Discover how neural interfaces are revolutionizing human-machine interaction.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">99.7%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">&lt;100ms</div>
                      <div className="text-xs text-gray-500">Response Time</div>
                    </div>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Space Technology Article */}
          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Rocket className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Space AI</h3>
                    <p className="text-blue-100">Autonomous Operations</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                  <span className="text-gray-500 text-sm">32 min read</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Space Technology 2026: Autonomous Space Operations Revolution
                </h4>
                <p className="text-gray-600 mb-4">
                  Autonomous space operations with 99.9% mission success rates. Explore how AI is revolutionizing 
                  space exploration and commercial space activities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">99.9%</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">50K+</div>
                      <div className="text-xs text-gray-500">Satellites</div>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Synthetic Data Article */}
          <Link href="/blog/ai-synthetic-data-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-green-600 font-medium">📝 Article</span>
                <span className="text-sm text-gray-500">26 min read</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Synthetic Data 2026: Privacy-Preserving ML Revolution
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Privacy-preserving machine learning with 99.5% data fidelity and zero privacy risks. 
                Enable breakthrough AI applications without compromising data privacy.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">99.5%</div>
                  <div className="text-xs text-gray-500">Fidelity</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">0%</div>
                  <div className="text-xs text-gray-500">Privacy Risk</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Database className="w-4 h-4 mr-1" />
                  Synthetic Data
                </div>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Healthcare Case Study */}
          <Link href="/case-studies/ai-neural-interface-healthcare-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-blue-600 font-medium">📊 Case Study</span>
                <span className="text-sm text-gray-500">18 min read</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Neural Interface Healthcare: $15M ROI Case Study
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                See how a leading healthcare system achieved $15M ROI with neural interfaces, 
                restoring mobility for 500+ patients with 95% success rate.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">$15M</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-500">Patients</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Heart className="w-4 h-4 mr-1" />
                  Healthcare
                </div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Quantum Computing Article */}
          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-600 font-medium">📝 Article</span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Quantum Computing 2026: Next-Generation Intelligence
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization 
                and revolutionary capabilities.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">1000x</div>
                  <div className="text-xs text-gray-500">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">95%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Zap className="w-4 h-4 mr-1" />
                  Quantum Computing
                </div>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}