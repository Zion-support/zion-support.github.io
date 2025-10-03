// import React from 'react';
import { Link } from 'react-router-dom';

const January2025NextGenerationAISystemsBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🚀 NEW JANUARY 2025 BREAKTHROUGH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Next-Generation AI Systems Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the revolutionary breakthrough in next-generation AI systems that are transforming enterprise operations 
            with <span className="text-yellow-400 font-bold">99.9% automation accuracy</span> and 
            <span className="text-green-400 font-bold"> $2.8B proven ROI</span>.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 text-center">
            <div className="text-3xl font-extrabold text-indigo-400 mb-2">99.9%</div>
            <div className="text-sm text-indigo-300">Automation Accuracy</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
            <div className="text-3xl font-extrabold text-purple-400 mb-2">$2.8B</div>
            <div className="text-sm text-purple-300">Proven ROI</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
            <div className="text-3xl font-extrabold text-green-400 mb-2">87%</div>
            <div className="text-sm text-green-300">Cost Reduction</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 text-center">
            <div className="text-3xl font-extrabold text-orange-400 mb-2">156%</div>
            <div className="text-sm text-orange-300">Productivity Boost</div>
          </div>
        </div>

        {/* Content Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Next-Gen AI Systems</h3>
                <p className="text-sm text-gray-400">Revolutionary Breakthrough</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Discover how next-generation AI systems are transforming enterprise operations with 
              multi-modal intelligence, real-time learning, and autonomous decision-making capabilities.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">12 min read</div>
              <Link to="/blog/ai-2025-january-next-generation-ai-systems-revolution"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Article →
              </Link>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Autonomous BI</h3>
                <p className="text-sm text-gray-400">Business Intelligence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Transform your business intelligence with autonomous systems that provide 
              95% decision accuracy, real-time insights, and $1.2B proven value creation.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">15 min read</div>
              <Link to="/blog/ai-2025-january-autonomous-business-intelligence-revolution"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Article →
              </Link>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$2.8B Success Story</h3>
                <p className="text-sm text-gray-400">Fortune 100 Case Study</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Learn how a Fortune 100 manufacturing conglomerate achieved $2.8B ROI with 
              next-generation AI systems across 47 countries and 2.3M employees.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">18 min read</div>
              <Link to="/case-studies/ai-2025-january-next-generation-ai-systems-2-8-billion-success"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Next-Generation AI?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Join leading enterprises that are achieving unprecedented results with our next-generation AI systems. 
              Get your free consultation and discover how we can help you achieve similar success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link to="/services/ai-solutions"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore AI Solutions →
              </Link>
              <Link to="/case-studies"
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View All Success Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics Highlight */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
          <div className="text-center">
            <h4 className="text-xl font-bold text-green-400 mb-4">
              🏆 Proven Results Across Industries
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-green-300">Automation Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$2.8B</div>
                <div className="text-green-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">87%</div>
                <div className="text-green-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">156%</div>
                <div className="text-green-300">Productivity Gain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NextGenerationAISystemsBanner;