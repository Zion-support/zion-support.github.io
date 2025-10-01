import React, { JSX } from "react";
import October2025SwarmIntelligenceBreakthroughBanner from "./components/October2025SwarmIntelligenceBreakthroughBanner";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950">
      <October2025SwarmIntelligenceBreakthroughBanner />

      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 Zion Tech Group: Leading AI Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI Solutions for Enterprise
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
              Transform Your Business with Distributed AI, Swarm Intelligence, and Proven Results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/services/distributed-ai-swarm-intelligence-services" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Explore Swarm Intelligence →
              </a>
              <a 
                href="/blog/ai-2025-october-distributed-ai-swarm-intelligence-revolution" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Guide →
              </a>
              <a 
                href="/case-studies/ai-2025-october-global-telecom-swarm-intelligence-890-million-success" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $890M Success Story
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">98.7%</div>
                <div className="text-xs text-blue-300">Operational Efficiency</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">$890M</div>
                <div className="text-xs text-purple-300">Value Creation</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">15x</div>
                <div className="text-xs text-green-300">Faster Decisions</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">99.999%</div>
                <div className="text-xs text-orange-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Cutting-Edge AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven AI technologies that deliver measurable business results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🐝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Swarm Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Distribute 10K-1M+ self-organizing AI agents that deliver 98.7% efficiency, 
                15x faster decisions, and $427M average savings.
              </p>
              <a 
                href="/services/distributed-ai-swarm-intelligence-services"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural-Symbolic AI</h3>
              <p className="text-gray-300 mb-6">
                Combine deep learning with logical reasoning for 96.4% accuracy on complex 
                enterprise decisions with full explainability.
              </p>
              <a 
                href="/blog/ai-2025-october-neural-symbolic-fusion-enterprise-reasoning"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Explore Framework →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Enterprise Results</h3>
              <p className="text-gray-300 mb-6">
                Real-world Fortune 500 success: $890M value creation, 99.997% uptime, 
                94% cost reduction, and transformational ROI.
              </p>
              <a 
                href="/case-studies/ai-2025-october-global-telecom-swarm-intelligence-890-million-success"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View Case Study →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest AI Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with cutting-edge AI research, implementation guides, and proven enterprise transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">🐝</div>
              <h3 className="text-2xl font-bold text-white mb-3">Distributed AI Swarm Intelligence Revolution</h3>
              <p className="text-gray-300 mb-4">
                Complete technical guide to implementing self-organizing AI swarms. Learn from deployments 
                achieving 98.7% efficiency, 15x speed improvements, and $427M average savings.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-cyan-400">October 2025 • 12 min read</span>
                <a 
                  href="/blog/ai-2025-october-distributed-ai-swarm-intelligence-revolution"
                  className="text-cyan-400 hover:text-cyan-300 font-bold"
                >
                  Read Guide →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">Fortune 50 Telecom: $890M Success with 500K AI Agents</h3>
              <p className="text-gray-300 mb-4">
                How a global telecommunications provider deployed 500,000 distributed AI agents to achieve 
                99.997% uptime, 94% cost reduction, and $890M annual value creation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-400">October 2025 • Case Study</span>
                <a 
                  href="/case-studies/ai-2025-october-global-telecom-swarm-intelligence-890-million-success"
                  className="text-purple-400 hover:text-purple-300 font-bold"
                >
                  View Success Story →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-3">Neural-Symbolic AI: Enterprise Reasoning Revolution</h3>
              <p className="text-gray-300 mb-4">
                Bridge deep learning and logical reasoning for 96.4% accuracy in complex decisions. 
                Includes Fortune 100 healthcare implementation achieving $250M value.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-indigo-400">October 2025 • 15 min read</span>
                <a 
                  href="/blog/ai-2025-october-neural-symbolic-fusion-enterprise-reasoning"
                  className="text-indigo-400 hover:text-indigo-300 font-bold"
                >
                  Explore Framework →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">Swarm Intelligence Implementation Services</h3>
              <p className="text-gray-300 mb-4">
                Transform your enterprise with distributed AI swarms. Get started with a complimentary 
                2-week assessment, 90-day pilot program, and guaranteed results.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-cyan-400">Services • Free Assessment</span>
                <a 
                  href="/services/distributed-ai-swarm-intelligence-services"
                  className="text-cyan-400 hover:text-cyan-300 font-bold"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Explore All AI Insights →
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Fortune 500 companies leveraging swarm intelligence, neural-symbolic AI, and cutting-edge 
              distributed systems for unprecedented results. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Schedule Consultation
              </a>
              <a 
                href="/services/distributed-ai-swarm-intelligence-services" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Services →
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
