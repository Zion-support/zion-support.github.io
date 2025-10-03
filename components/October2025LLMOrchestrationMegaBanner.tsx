// import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, DollarSign, Zap, Shield, Award } from 'lucide-react';

const October2025LLMOrchestrationMegaBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400 rounded-full px-6 py-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
              🔥 Just Published: October 1, 2025 - Revolutionary AI Breakthrough
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse">
            Enterprise LLM Orchestration Revolution
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
            Multi-Model AI Strategy Delivering $8.2B Value Creation
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">$8.2B</div>
            <div className="text-sm text-center text-gray-300">Value Created</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">1,840%</div>
            <div className="text-sm text-center text-gray-300">ROI</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-8 h-8 text-red-400" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">73%</div>
            <div className="text-sm text-center text-gray-300">Cost Reduction</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">520%</div>
            <div className="text-sm text-center text-gray-300">Productivity</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">99.97%</div>
            <div className="text-sm text-center text-gray-300">Uptime</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-center mb-1">42K</div>
            <div className="text-sm text-center text-gray-300">AI Agents</div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-purple-800/40 to-blue-800/40 backdrop-blur-md rounded-2xl p-8 mb-10 border border-purple-400/30">
          <h2 className="text-3xl font-bold mb-6 text-center">
            🚀 Transform Your AI Economics: Intelligent Multi-Model Orchestration
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">💰 Breakthrough Cost Optimization</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong>73% average cost reduction</strong> through intelligent routing</li>
                <li>• Route simple queries to GPT-3.5 ($0.002 vs $0.06)</li>
                <li>• Use fine-tuned local models for domain tasks ($0.001)</li>
                <li>• 71% cache hit rate eliminates redundant API calls</li>
                <li>• Fortune 100 retailer saves <strong>$7.9M monthly</strong></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">⚡ Exceptional Performance</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong>520% productivity improvement</strong> across workforce</li>
                <li>• Sub-second latency with smart caching</li>
                <li>• 99.4% optimal model routing accuracy</li>
                <li>• 99.97% platform uptime with automatic failover</li>
                <li>• Scale from 2.8M to 18.4M requests/day seamlessly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Content Showcase */}
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-md rounded-2xl p-8 mb-10 border-2 border-yellow-400/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">
              📚 Comprehensive Resources Just Published Today
            </h2>
            <p className="text-xl text-blue-200">
              Everything you need to implement enterprise LLM orchestration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blog Post */}
            <Link 
              to="/blog/ai-2025-oct-01-enterprise-llm-orchestration-revolution"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                Technical Deep Dive
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                12-minute comprehensive guide to multi-model AI strategy
              </p>
              <div className="flex items-center text-yellow-400 text-sm font-semibold">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Case Study */}
            <Link 
              to="/case-studies/ai-2025-oct-01-fortune-100-retail-llm-orchestration-8-2-billion-success"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                $8.2B Success Story
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Fortune 100 retailer achieves 1,840% ROI with orchestration
              </p>
              <div className="flex items-center text-green-400 text-sm font-semibold">
                View Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Implementation Guide */}
            <Link 
              to="/guides/enterprise-llm-orchestration-implementation-guide-2025"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                Implementation Guide
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Step-by-step 6-month deployment roadmap with code examples
              </p>
              <div className="flex items-center text-blue-400 text-sm font-semibold">
                Get Started <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Platform Services */}
            <Link 
              to="/services/ai-2025-october-enterprise-llm-orchestration-platform"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                Platform Services
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Turnkey implementation with proven 10-20x Year 1 ROI
              </p>
              <div className="flex items-center text-purple-400 text-sm font-semibold">
                Explore Services <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 backdrop-blur-md rounded-xl p-6 border border-blue-400/30">
            <h3 className="text-xl font-bold mb-3 text-blue-300">🎯 Intelligent Routing</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              40+ factor analysis routes each request to the optimal model. Simple queries → GPT-3.5 ($0.002), 
              complex analysis → GPT-4 ($0.06), domain tasks → fine-tuned local models ($0.001). 
              99.4% routing accuracy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 backdrop-blur-md rounded-xl p-6 border border-purple-400/30">
            <h3 className="text-xl font-bold mb-3 text-purple-300">🌍 Global Compliance</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Automatic data residency: EU data stays in EU-hosted models, on-premise routing for restricted data. 
              GDPR, HIPAA, SOC 2 ready. Complete audit trails. Zero compliance violations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600/30 to-green-800/30 backdrop-blur-md rounded-xl p-6 border border-green-400/30">
            <h3 className="text-xl font-bold mb-3 text-green-300">⚡ Production Ready</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              99.97% uptime with multi-region deployment. Automatic failover to backup providers. 
              Handle 6.6x traffic growth with cost decreasing 79%. Real-time monitoring and cost tracking.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50 mb-6">
            <h3 className="text-2xl font-bold mb-4">
              🎁 Limited Time Offer: Complimentary Strategy Assessment
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Schedule by October 31, 2025 and receive <strong>$128,500 in bonus value</strong>:<br/>
              ROI analysis credit, priority implementation, free fine-tuned model, extended support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Sparkles className="w-6 h-6 mr-2" />
                Book Free Assessment ($7,500 Value)
                <span className="ml-2">→</span>
              </Link>
              <Link
                to="/services/ai-2025-october-enterprise-llm-orchestration-platform"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                View Platform Details
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            <p className="mb-2">
              <strong>Proven Results:</strong> 15+ Fortune 500 implementations • $47B+ client value creation • Average 1,600% ROI
            </p>
            <p>
              <strong>Join Industry Leaders:</strong> Transform your AI economics with intelligent multi-model orchestration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025LLMOrchestrationMegaBanner;
