import React from 'react';

const January2027TechTrendsBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-bold text-lg tracking-wider uppercase">
              🔮 JANUARY 2027: TECH TRENDS FORECAST
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            The Next Wave of Innovation
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Stay ahead of the curve with our comprehensive analysis of emerging technologies 
            that will define the next decade: Edge AI, Federated Learning, and Sustainable Computing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🌐</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Edge AI Revolution</h3>
                <p className="text-gray-400 text-sm">Real-time processing at the network edge</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Distributed intelligence systems bringing AI processing closer to data sources, 
              enabling sub-millisecond response times and 99.9% uptime reliability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400 mb-1">&lt;1ms</div>
                <div className="text-xs text-emerald-300">Latency</div>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400 mb-1">99.9%</div>
                <div className="text-xs text-emerald-300">Uptime</div>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400 mb-1">85%</div>
                <div className="text-xs text-emerald-300">Cost Reduction</div>
              </div>
              <div className="bg-emerald-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-400 mb-1">10M+</div>
                <div className="text-xs text-emerald-300">Devices</div>
              </div>
            </div>
            
            <a 
              href="/blog/edge-ai-2027-revolution"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Explore Edge AI →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🔒</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Federated Learning</h3>
                <p className="text-gray-400 text-sm">Privacy-preserving collaborative AI</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Distributed machine learning that enables model training across multiple 
              organizations without sharing raw data, ensuring privacy and compliance.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-teal-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-teal-400 mb-1">100%</div>
                <div className="text-xs text-teal-300">Privacy</div>
              </div>
              <div className="bg-teal-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-teal-400 mb-1">3x</div>
                <div className="text-xs text-teal-300">Faster Training</div>
              </div>
              <div className="bg-teal-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-teal-400 mb-1">92%</div>
                <div className="text-xs text-teal-300">Accuracy</div>
              </div>
              <div className="bg-teal-500/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-teal-400 mb-1">$500M</div>
                <div className="text-xs text-teal-300">Value Created</div>
              </div>
            </div>
            
            <a 
              href="/blog/federated-learning-2027-guide"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Learn More →
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🌱 Sustainable AI Computing: The Green Revolution
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Discover how we're revolutionizing AI with carbon-neutral computing, 
              renewable energy integration, and 94% reduction in environmental impact.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">94%</div>
                <div className="text-sm text-gray-300">Carbon Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Renewable Energy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3.5x</div>
                <div className="text-sm text-gray-300">Performance Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">$67M</div>
                <div className="text-sm text-gray-300">Cost Savings</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/blog/sustainable-ai-computing-2027"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
              >
                Read Green AI Guide
              </a>
              <a
                href="/case-studies/sustainable-ai-success-stories"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50"
              >
                View Case Studies
              </a>
              <a
                href="/services/green-ai-consulting"
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Get Green AI Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027TechTrendsBanner;