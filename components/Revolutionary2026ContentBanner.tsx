import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Rocket, Brain, Zap, Target } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            REVOLUTIONARY 2026 BREAKTHROUGHS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The AI Revolution is Here
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Transform Your Business Today
            </span>
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Discover the cutting-edge AI technologies that are reshaping industries and creating 
            unprecedented opportunities for growth and innovation.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Autonomous Operations</h3>
            </div>
            <p className="text-purple-100 mb-4">
              AI systems that run your business 24/7 with 99.9% uptime and self-healing capabilities.
            </p>
            <div className="flex items-center gap-2 text-yellow-300 text-sm font-semibold">
              <span>60% Cost Reduction</span>
              <span>•</span>
              <span>300% Efficiency</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Quantum AI</h3>
            </div>
            <p className="text-purple-100 mb-4">
              Revolutionary quantum computing delivering 1000x faster AI processing for complex problems.
            </p>
            <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold">
              <span>1000x Faster</span>
              <span>•</span>
              <span>Real-time Decisions</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Agent Orchestration</h3>
            </div>
            <p className="text-purple-100 mb-4">
              Intelligent agent systems that collaborate and coordinate to achieve complex business objectives.
            </p>
            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
              <span>Multi-Agent Systems</span>
              <span>•</span>
              <span>Smart Coordination</span>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2.5B+</div>
              <div className="text-purple-200 text-sm">ROI Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-purple-200 text-sm">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-purple-200 text-sm">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-purple-200 text-sm">AI Operations</div>
            </div>
          </div>
        </div>

        {/* Featured Content Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-400/30 group-hover:border-green-400/60 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-300 text-sm font-semibold">AUTONOMOUS AI</span>
              </div>
              <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors">
                Enterprise Automation
              </h4>
              <p className="text-purple-200 text-xs mt-1">
                Self-managing business systems
              </p>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-optimization-2026" className="group">
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 p-4 rounded-lg border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-semibold">QUANTUM AI</span>
              </div>
              <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                Quantum Computing
              </h4>
              <p className="text-purple-200 text-xs mt-1">
                1000x faster processing
              </p>
            </div>
          </Link>

          <Link href="/blog/ai-agent-orchestration-2026" className="group">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold">AGENTS</span>
              </div>
              <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                Agent Orchestration
              </h4>
              <p className="text-purple-200 text-xs mt-1">
                Intelligent coordination
              </p>
            </div>
          </Link>

          <Link href="/case-studies" className="group">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-400/30 group-hover:border-orange-400/60 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-semibold">SUCCESS</span>
              </div>
              <h4 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                Case Studies
              </h4>
              <p className="text-purple-200 text-xs mt-1">
                Real transformation stories
              </p>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white hover:from-yellow-300 hover:to-pink-400 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your AI Revolution
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Content
            </Link>
          </div>
          <p className="text-purple-200 text-sm">
            Join the AI revolution. Transform your business with cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
}