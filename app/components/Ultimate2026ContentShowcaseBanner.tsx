import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket } from 'lucide-react';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Ultimate 2026 AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most comprehensive collection of AI innovations, breakthrough technologies, 
            and transformation success stories that are reshaping the future of enterprise.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Revolutionary Breakthroughs */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Revolutionary Breakthroughs</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Explore cutting-edge AI technologies that are pushing the boundaries of what's possible.
            </p>
            <div className="space-y-2 mb-4">
              <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • AI Revolutionary Breakthroughs 2026
              </Link>
              <Link href="/blog/ai-2027-breakthrough-technologies" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • 2027 Breakthrough Technologies
              </Link>
              <Link href="/blog/ai-quantum-computing-breakthrough-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Quantum Computing Breakthrough
              </Link>
            </div>
            <div className="text-sm text-green-400 font-semibold">🔥 HOT CONTENT</div>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold">Autonomous Systems</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Self-evolving AI systems that operate independently and deliver unprecedented results.
            </p>
            <div className="space-y-2 mb-4">
              <Link href="/blog/ai-autonomous-systems-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Autonomous Systems 2026
              </Link>
              <Link href="/blog/ai-autonomous-enterprise-systems" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Enterprise Autonomous Systems
              </Link>
              <Link href="/blog/ai-autonomous-workflows-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Autonomous Workflows
              </Link>
            </div>
            <div className="text-sm text-orange-400 font-semibold">⚡ TRENDING</div>
          </div>

          {/* Enterprise Transformation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold">Enterprise Transformation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Real-world success stories and strategies for enterprise AI transformation.
            </p>
            <div className="space-y-2 mb-4">
              <Link href="/case-studies/ai-enterprise-transformation-mega-success-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • $200M+ Enterprise Success
              </Link>
              <Link href="/case-studies/fortune-500-autonomous-operations-transformation-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Fortune 500 Transformation
              </Link>
              <Link href="/blog/ai-enterprise-transformation-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Enterprise Transformation Guide
              </Link>
            </div>
            <div className="text-sm text-red-400 font-semibold">💎 PREMIUM</div>
          </div>

          {/* Quantum & Advanced AI */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Quantum & Advanced AI</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Next-generation quantum computing and advanced AI technologies.
            </p>
            <div className="space-y-2 mb-4">
              <Link href="/blog/ai-quantum-computing-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Quantum Computing 2026
              </Link>
              <Link href="/blog/ai-quantum-machine-learning" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Quantum Machine Learning
              </Link>
              <Link href="/blog/ai-neural-architecture-search-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Neural Architecture Search
              </Link>
            </div>
            <div className="text-sm text-purple-400 font-semibold">🚀 FUTURE</div>
          </div>

          {/* Industry Solutions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold">Industry Solutions</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Specialized AI solutions for manufacturing, healthcare, finance, and more.
            </p>
            <div className="space-y-2 mb-4">
              <Link href="/case-studies/ai-manufacturing-transformation-mega-success-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Manufacturing Transformation
              </Link>
              <Link href="/case-studies/healthcare-ai-diagnostic-system-2025" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Healthcare AI Diagnostics
              </Link>
              <Link href="/case-studies/ai-finance-automation-success-story" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Finance Automation Success
              </Link>
            </div>
            <div className="text-sm text-teal-400 font-semibold">🏆 SUCCESS</div>
          </div>

          {/* Latest Innovations */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-2xl font-bold">Latest Innovations</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The newest AI innovations and emerging technologies for 2026.
            </p>
            <div className="space-y-2 mb-4">
              <Link href="/blog/ai-2026-next-generation-innovations" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Next-Gen Innovations 2026
              </Link>
              <Link href="/blog/ai-multimodal-agents-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • Multimodal AI Agents
              </Link>
              <Link href="/blog/ai-orchestration-platforms-2026" className="block text-blue-300 hover:text-blue-200 transition-colors">
                • AI Orchestration Platforms
              </Link>
            </div>
            <div className="text-sm text-cyan-400 font-semibold">✨ NEW</div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">AI Blog Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-sm text-gray-300">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$500M+</div>
              <div className="text-sm text-gray-300">Total ROI Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">1000%</div>
              <div className="text-sm text-gray-300">Max Productivity Gain</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center"
            >
              Explore All Content <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center"
            >
              View Success Stories <Star className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Join 25,000+ enterprise leaders who trust our AI insights and strategies
          </p>
        </div>
      </div>
    </section>
  );
}