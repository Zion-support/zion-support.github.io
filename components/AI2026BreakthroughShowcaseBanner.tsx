import React from 'react';
import Link from 'next/link';

const AI2026BreakthroughShowcaseBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-emerald-400 text-2xl">✨</span>
            <span className="font-semibold text-lg">2026 AI Breakthrough Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              AI Breakthrough
            </span>
            <br />
            <span className="text-white">Technologies 2026</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of artificial intelligence with groundbreaking innovations, 
            revolutionary algorithms, and transformative enterprise solutions that are reshaping the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/services"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105"
            >
              Discover AI Services
            </Link>
            <Link
              href="/blog/ai-breakthroughs-2026"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Read Breakthrough Guide
            </Link>
          </div>
        </div>
        
        {/* Breakthrough Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Autonomous Agents</h3>
            <p className="text-gray-200 text-sm mb-4">
              Self-managing AI agents that operate independently across complex business environments.
            </p>
            <div className="text-emerald-400 font-semibold text-sm">99.7% Accuracy</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Neural Architecture</h3>
            <p className="text-gray-200 text-sm mb-4">
              Advanced neural networks with unprecedented learning capabilities and efficiency.
            </p>
            <div className="text-cyan-400 font-semibold text-sm">10x Faster Learning</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-3 text-teal-400">Global AI Mesh</h3>
            <p className="text-gray-200 text-sm mb-4">
              Distributed AI networks providing real-time intelligence across global infrastructure.
            </p>
            <div className="text-teal-400 font-semibold text-sm">Sub-10ms Response</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Predictive Intelligence</h3>
            <p className="text-gray-200 text-sm mb-4">
              Advanced forecasting systems with 98% accuracy in business and market predictions.
            </p>
            <div className="text-blue-400 font-semibold text-sm">98% Accuracy</div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join thousands of enterprises already leveraging our breakthrough AI technologies 
            to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026BreakthroughShowcaseBanner;