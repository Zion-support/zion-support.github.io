import React from 'react';

export default function October2025NewInnovationsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm py-20 border-y border-indigo-500/20">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 mb-6 animate-pulse">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🚀 NEW: October 1, 2025 - Latest AI Innovation Breakthroughs
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            4 Breakthrough AI Solutions Transforming Enterprise Operations
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore our latest research on cutting-edge AI technologies delivering unprecedented business value—
            from <strong className="text-green-400">$4.2B in cloud cost savings</strong> to 
            <strong className="text-pink-400"> 93% customer satisfaction</strong> and 
            <strong className="text-indigo-400"> 99.4% fraud detection accuracy</strong>.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">💰</div>
              <div className="text-2xl font-extrabold text-green-400 mb-2">68% Cost</div>
              <div className="text-sm text-green-300">Cloud Cost Reduction</div>
              <div className="text-xs text-gray-400 mt-2">AI-Powered FinOps</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🛡️</div>
              <div className="text-2xl font-extrabold text-red-400 mb-2">99.4%</div>
              <div className="text-sm text-red-300">Fraud Detection</div>
              <div className="text-xs text-gray-400 mt-2">Real-Time Security</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">📦</div>
              <div className="text-2xl font-extrabold text-indigo-400 mb-2">91%</div>
              <div className="text-sm text-indigo-300">On-Time Delivery</div>
              <div className="text-xs text-gray-400 mt-2">Supply Chain AI</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">💬</div>
              <div className="text-2xl font-extrabold text-pink-400 mb-2">93%</div>
              <div className="text-sm text-pink-300">Customer Satisfaction</div>
              <div className="text-xs text-gray-400 mt-2">Conversational AI</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">💰</div>
              <div>
                <div className="text-sm text-green-400 font-semibold">AI FinOps</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Intelligent Cloud Cost Optimization</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              AI-powered FinOps platforms reducing cloud spend by 68% while achieving 92% resource utilization—
              saving enterprises $4.2B annually.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Cost Optimization</span>
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">Auto Scaling</span>
            </div>
            <a 
              href="/blog/ai-2025-october-intelligent-cloud-cost-optimization"
              className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
            >
              Read Full Article →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🛡️</div>
              <div>
                <div className="text-sm text-red-400 font-semibold">Fraud Detection</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Real-Time AI Fraud Detection</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Next-gen fraud detection systems processing 100M+ transactions per second with 99.4% accuracy, 
              preventing $18.7B in losses.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">Real-Time Security</span>
              <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">Anomaly Detection</span>
            </div>
            <a 
              href="/blog/ai-2025-october-real-time-fraud-detection-systems"
              className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
            >
              Read Full Article →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">📦</div>
              <div>
                <div className="text-sm text-indigo-400 font-semibold">Supply Chain AI</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Intelligent Supply Chain Automation</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              AI-driven logistics achieving 91% on-time delivery, 76% cost reduction, and $12.4B in annual 
              efficiency gains through autonomous operations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">Route Optimization</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Predictive Analytics</span>
            </div>
            <a 
              href="/blog/ai-2025-october-intelligent-supply-chain-automation"
              className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
            >
              Read Full Article →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">💬</div>
              <div>
                <div className="text-sm text-pink-400 font-semibold">Customer Experience</div>
                <div className="text-xs text-gray-400">October 2025</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Conversational AI & CX Revolution</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Human-level conversational AI achieving 93% customer satisfaction, 87% self-service resolution, 
              and $9.3B in support cost savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">Natural Language</span>
              <span className="px-2 py-1 bg-rose-500/20 text-rose-300 text-xs rounded-full">Empathy AI</span>
            </div>
            <a 
              href="/blog/ai-2025-october-conversational-ai-customer-experience"
              className="text-pink-400 hover:text-pink-300 text-sm font-semibold transition-colors"
            >
              Read Full Article →
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">🎯 Combined Enterprise Impact</h3>
          <p className="text-gray-300 text-center mb-6 max-w-3xl mx-auto">
            These four AI innovation areas are delivering transformational results for Fortune 500 companies
          </p>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">$44.6B</div>
              <div className="text-xs text-gray-400">Total Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400 mb-1">87%</div>
              <div className="text-xs text-gray-400">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-1">92%</div>
              <div className="text-xs text-gray-400">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-xs text-gray-400">Autonomous Operations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">&lt;2ms</div>
              <div className="text-xs text-gray-400">Average Response Time</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/blog"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
          >
            Explore All Articles →
          </a>
          <a 
            href="/case-studies"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            View Success Stories →
          </a>
          <a 
            href="/contact"
            className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-center"
          >
            Start Your AI Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
