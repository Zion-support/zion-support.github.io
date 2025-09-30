import React from 'react';

const September30NewAIInnovationsBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 border-y border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/30 mb-6 animate-pulse">
            <span className="text-purple-400 font-bold text-2xl tracking-wider uppercase">
              🚀 NEW: September 30, 2025 - Latest AI Innovations Released!
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Next-Generation AI Infrastructure & Intelligence
          </h2>
          
          <p className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto font-semibold">
            Explore cutting-edge AI innovations: <span className="text-purple-400 font-bold">Edge Computing</span>, 
            <span className="text-blue-400 font-bold"> Autonomous Databases</span>, and 
            <span className="text-teal-400 font-bold"> Multi-Modal Intelligence</span> transforming enterprise operations
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">&lt;10ms</div>
              <div className="text-purple-300 text-sm">Edge Inference Latency</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">99.999%</div>
              <div className="text-blue-300 text-sm">Database Uptime</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-extrabold text-teal-400 mb-2">10x</div>
              <div className="text-teal-300 text-sm">Content Production Speed</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-lg rounded-xl p-6 border border-amber-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">70%</div>
              <div className="text-amber-300 text-sm">Cost Reduction</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post 1: Edge Computing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">⚡</div>
              <div>
                <div className="text-purple-400 font-bold text-sm">NEW BLOG POST</div>
                <div className="text-xs text-gray-400">September 30, 2025 • 14 min read</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI-Powered Edge Computing: Real-Time Intelligence
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover how edge AI achieves sub-10ms latency, reduces cloud costs by 70%, and enables
              autonomous decision-making at the network edge with federated learning.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Federated Learning at Scale</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Edge-Cloud Hybrid Orchestration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Autonomous Edge Clusters</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Real-World Implementation Roadmap</span>
              </li>
            </ul>
            <a
              href="/blog/ai-2025-september-30-edge-computing-real-time-intelligence"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50"
            >
              Read Complete Guide →
            </a>
          </div>

          {/* Blog Post 2: Autonomous Databases */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">🤖</div>
              <div>
                <div className="text-blue-400 font-bold text-sm">NEW BLOG POST</div>
                <div className="text-xs text-gray-400">September 30, 2025 • 18 min read</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Autonomous Database Operations: Self-Healing Systems
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Learn how AI-driven databases eliminate manual tuning, prevent outages before they occur,
              and achieve 99.999% uptime with intelligent query optimization.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Self-Tuning Query Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Predictive Failure Detection</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Intelligent Data Tiering</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Migration Strategy & ROI Analysis</span>
              </li>
            </ul>
            <a
              href="/blog/ai-2025-september-30-autonomous-database-operations"
              className="inline-block w-full bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/50"
            >
              Explore Self-Healing DBs →
            </a>
          </div>

          {/* Blog Post 3: Multi-Modal AI */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">🎯</div>
              <div>
                <div className="text-amber-400 font-bold text-sm">NEW BLOG POST</div>
                <div className="text-xs text-gray-400">September 30, 2025 • 16 min read</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Multi-Modal AI: Vision, Language & Audio Intelligence
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore how multi-modal AI unifies text, image, video, and audio processing to create
              seamless workflows that understand context across all communication modalities.
            </p>
            <ul className="space-y-2 mb-6 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Vision-Language Understanding</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Audio-Visual Synthesis</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Cross-Modal Retrieval</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Enterprise Implementation Patterns</span>
              </li>
            </ul>
            <a
              href="/blog/ai-2025-september-30-multimodal-enterprise-workflows"
              className="inline-block w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-amber-500/50"
            >
              Discover Multi-Modal AI →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Implement Next-Gen AI Infrastructure?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join forward-thinking enterprises leveraging edge computing, autonomous databases, and multi-modal AI
            to achieve breakthrough performance, reliability, and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a
              href="/blog"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View All Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default September30NewAIInnovationsBanner;
