import React from 'react';

const January2025LatestInnovationBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2025: Latest AI Innovation Breakthrough
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI-Powered Business Transformation
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the most advanced AI solutions that are reshaping enterprise operations with unprecedented efficiency, 
            accuracy, and ROI. Join thousands of businesses already transforming with our cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cognitive AI Automation</h3>
            <p className="text-gray-300 mb-6">
              Advanced neural networks that understand context, make decisions, and adapt in real-time. 
              Achieve 95% automation accuracy with human-level reasoning.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Automation Accuracy</span>
                <span className="text-green-400 font-bold">95%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Cost Reduction</span>
                <span className="text-green-400 font-bold">78%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Processing Speed</span>
                <span className="text-green-400 font-bold">10x Faster</span>
              </div>
            </div>
            <a 
              href="/services/cognitive-ai-automation"
              className="inline-block w-full text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Intelligence</h3>
            <p className="text-gray-300 mb-6">
              Process millions of data points in real-time with sub-millisecond response times. 
              Make instant decisions that drive business growth and competitive advantage.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Response Time</span>
                <span className="text-green-400 font-bold">&lt;1ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Data Throughput</span>
                <span className="text-green-400 font-bold">1M+ events/sec</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Accuracy</span>
                <span className="text-green-400 font-bold">99.8%</span>
              </div>
            </div>
            <a 
              href="/services/real-time-intelligence"
              className="inline-block w-full text-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Explore Now →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔮</div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300 mb-6">
              Forecast trends, predict outcomes, and optimize strategies with 92% accuracy. 
              Stay ahead of the competition with data-driven insights and proactive decision making.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Prediction Accuracy</span>
                <span className="text-green-400 font-bold">92%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Revenue Growth</span>
                <span className="text-green-400 font-bold">47%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">ROI Improvement</span>
                <span className="text-green-400 font-bold">8.5x</span>
              </div>
            </div>
            <a 
              href="/services/predictive-analytics"
              className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Get Started →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join over 500+ enterprises already leveraging our AI solutions for unprecedented growth. 
              Get your free consultation and discover how AI can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025LatestInnovationBanner;