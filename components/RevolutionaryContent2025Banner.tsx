import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-semibold">✨ REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Cutting-Edge AI Insights
            </span>
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI automation, quantum computing, 
            and business transformation that are reshaping industries in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-10 border border-white border-opacity-30">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">🚀</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">AI Automation Revolution</h3>
                <p className="text-lg opacity-90">Complete Implementation Guide</p>
              </div>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Master the art of AI automation with our comprehensive guide covering 
              implementation strategies, real-world applications, and proven ROI methodologies.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">340%</div>
                <div className="text-sm opacity-80">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">98%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div>
            <Link 
              href="/blog/ai-automation-2025-comprehensive-guide"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Read Complete Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-10 border border-white border-opacity-30">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-4">⚛️</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Quantum Computing</h3>
                <p className="text-lg opacity-90">Business Applications</p>
              </div>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Explore how quantum computing is revolutionizing business operations 
              with unprecedented computational power and optimization capabilities.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10x</div>
                <div className="text-sm opacity-80">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                <div className="text-sm opacity-80">Accuracy</div>
              </div>
            </div>
            <Link 
              href="/blog/quantum-computing-business-applications-2025"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Applications →
            </Link>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-12 border border-white border-opacity-20">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">Real-World Success Stories</h3>
            <p className="text-xl opacity-90">
              Learn from companies that achieved remarkable results through AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$50M+</div>
              <div className="text-lg opacity-90">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-lg opacity-90">Process Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">40%</div>
              <div className="text-lg opacity-90">Customer Satisfaction</div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/case-studies/ai-transformation-success-story"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              View Success Stories →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;