import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Database, Zap, Target, TrendingUp } from 'lucide-react';

// Neural Interfaces Banner
export function NeuralInterfacesBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                REVOLUTIONARY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Neural Interfaces 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Brain-Computer Integration
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Experience the future of human-computer interaction with direct brain-to-computer communication. 
              95% accuracy, real-time processing, and 300% productivity gains.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">95%</div>
                <div className="text-sm opacity-80">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300 mb-1">300%</div>
                <div className="text-sm opacity-80">Productivity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">$5M+</div>
                <div className="text-sm opacity-80">ROI</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Brain className="w-5 h-5 mr-2" />
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-neural-interface-success-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                View Case Study
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Neural Interface Demo</h3>
                <p className="text-white/80">Experience the future of computing</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Real-time thought-to-code translation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Hands-free computer control</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Multi-tasking optimization</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Context-aware assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Space Technology Banner
export function SpaceTechBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Space Technology 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300">
                Revolutionizing Space Exploration
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover how AI is transforming space exploration with autonomous spacecraft, 
              intelligent satellites, and real-time mission control. 1000x faster processing and $100B+ market opportunity.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">1000x</div>
                <div className="text-sm opacity-80">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-1">$100B+</div>
                <div className="text-sm opacity-80">Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-1">99.9%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-space-tech-2026"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Space AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-space-mission-success-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                View Mission Success
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Space AI Mission</h3>
                <p className="text-white/80">Autonomous space exploration</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Autonomous spacecraft navigation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Real-time satellite data processing</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Intelligent mission planning</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Predictive maintenance systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Synthetic Data Banner
export function SyntheticDataBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                PRIVACY-FIRST
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Synthetic Data 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
                Privacy-Preserving AI Development
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Accelerate AI development with high-quality synthetic data that maintains complete privacy 
              and regulatory compliance. 90% faster training, 100% privacy-safe, and $2B+ market opportunity.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">90%</div>
                <div className="text-sm opacity-80">Faster Training</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">100%</div>
                <div className="text-sm opacity-80">Privacy Safe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">$2B+</div>
                <div className="text-sm opacity-80">Market Size</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-synthetic-data-2026"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Database className="w-5 h-5 mr-2" />
                Learn About Synthetic Data
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-synthetic-data-success-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center"
              >
                View Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Synthetic Data Platform</h3>
                <p className="text-white/80">Privacy-preserving AI development</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Complete data anonymization</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Statistical accuracy preservation</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Regulatory compliance guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Unlimited data generation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Combined New Content Showcase
export function NewContent2026Showcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            Latest 2026 Innovations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI innovations that are transforming industries and creating 
            unprecedented opportunities for growth and efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Neural Interfaces Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Neural Interfaces</h3>
                  <p className="text-purple-100">Brain-Computer Integration</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                <span className="text-gray-500 text-sm">28 min read</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Neural Interfaces 2026: Brain-Computer Integration Revolution
              </h4>
              <p className="text-gray-600 mb-6">
                Experience the future of human-computer interaction with direct brain-to-computer communication. 
                95% accuracy, real-time processing, and 300% productivity gains.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">300%</div>
                    <div className="text-xs text-gray-500">Productivity</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-neural-interfaces-2026"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Space Technology Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Space AI</h3>
                  <p className="text-blue-100">Space Exploration</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                <span className="text-gray-500 text-sm">32 min read</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Space Technology 2026: Revolutionizing Space Exploration
              </h4>
              <p className="text-gray-600 mb-6">
                Discover how AI is transforming space exploration with autonomous spacecraft, 
                intelligent satellites, and real-time mission control.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1000x</div>
                    <div className="text-xs text-gray-500">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">$100B+</div>
                    <div className="text-xs text-gray-500">Market</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-space-tech-2026"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Synthetic Data Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Synthetic Data</h3>
                  <p className="text-green-100">Privacy-Preserving AI</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Article</span>
                <span className="text-gray-500 text-sm">26 min read</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Synthetic Data 2026: Privacy-Preserving AI Development
              </h4>
              <p className="text-gray-600 mb-6">
                Accelerate AI development with high-quality synthetic data that maintains complete privacy 
                and regulatory compliance.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">90%</div>
                    <div className="text-xs text-gray-500">Faster</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-xs text-gray-500">Privacy Safe</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-synthetic-data-2026"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Innovations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Interactive Content Recommendation Banner
export function InteractiveContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            AI-Powered Recommendations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover content tailored to your interests and industry. Our AI analyzes your preferences 
            to suggest the most relevant articles and case studies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                RECOMMENDED FOR YOU
              </span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-purple-600 font-medium">📝 Article</span>
              <span className="text-sm text-gray-500">Neural Technology</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              AI Neural Interfaces 2026: Brain-Computer Integration
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Based on your interest in AI and productivity tools, this article explores revolutionary 
              brain-computer interfaces with 95% accuracy and 300% productivity gains.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <span>28 min read</span>
              </div>
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors"
              >
                Read Now →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                TRENDING NOW
              </span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-blue-600 font-medium">📊 Case Study</span>
              <span className="text-sm text-gray-500">Space Technology</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              AI Space Mission Success 2026: 95% Success Rate
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Trending case study showing how AI transformed Mars exploration with autonomous spacecraft 
              and real-time mission control achieving 95% success rate.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <span>18 min read</span>
              </div>
              <Link
                href="/case-studies/ai-space-mission-success-2026"
                className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
              >
                Read Now →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-green-600 font-medium">📝 Article</span>
              <span className="text-sm text-gray-500">Data Science</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              AI Synthetic Data 2026: Privacy-Preserving Development
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Popular article on how synthetic data is accelerating AI development while maintaining 
              complete privacy and regulatory compliance.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <span>26 min read</span>
              </div>
              <Link
                href="/blog/ai-synthetic-data-2026"
                className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors"
              >
                Read Now →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">✨</span>
            Discover More Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}