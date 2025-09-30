import React from 'react';

export default function NewContent2026MegaShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/40 via-purple-900/40 to-blue-900/40 border-y border-purple-500/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Mega Showcase Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase flex items-center gap-2">
              🚀 NEW CONTENT 2026 MEGA SHOWCASE
            </span>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content
            <br />
            <span className="text-5xl md:text-6xl">Mega Showcase 2026</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            🧠 Neuromorphic Computing • 🔒 Federated Learning • 🤖 Autonomous Operations
          </p>
          
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary AI breakthroughs of 2026. Explore cutting-edge technologies that are transforming 
            enterprise operations with unprecedented efficiency, privacy, and automation capabilities.
          </p>
          
          {/* Content Showcase Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {/* Neuromorphic Computing */}
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neuromorphic Computing Revolution</h3>
              <p className="text-gray-300 mb-6">Brain-inspired AI that achieves 99.7% neural efficiency and 1000x processing speed with ultra-low power consumption.</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Neural Efficiency:</span>
                  <span className="text-purple-400 font-bold">99.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Processing Speed:</span>
                  <span className="text-purple-400 font-bold">1000x</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Energy Reduction:</span>
                  <span className="text-purple-400 font-bold">99%</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2026-neuromorphic-computing-revolution" 
                className="block w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Explore Neuromorphic AI →
              </a>
            </div>

            {/* Federated Learning */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">Federated Learning Breakthrough</h3>
              <p className="text-gray-300 mb-6">Privacy-first AI that enables collaboration across organizations with 100% data privacy and 98% model accuracy.</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Data Privacy:</span>
                  <span className="text-blue-400 font-bold">100%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Model Accuracy:</span>
                  <span className="text-blue-400 font-bold">98%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Organizations:</span>
                  <span className="text-blue-400 font-bold">500+</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2026-federated-learning-breakthrough" 
                className="block w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Explore Federated Learning →
              </a>
            </div>

            {/* Autonomous Operations */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Enterprise Operations</h3>
              <p className="text-gray-300 mb-6">Self-managing AI systems that achieve 99% automation rates and deliver $100M+ annual savings.</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Automation Rate:</span>
                  <span className="text-green-400 font-bold">99%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Annual Savings:</span>
                  <span className="text-green-400 font-bold">$100M+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Operations:</span>
                  <span className="text-green-400 font-bold">24/7</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2026-autonomous-enterprise-operations" 
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
              >
                Explore Autonomous Operations →
              </a>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore All Content →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get AI Consultation
            </a>
          </div>
        </div>
        
        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🚀',
              title: 'Revolutionary Technology',
              description: 'Cutting-edge AI breakthroughs'
            },
            {
              icon: '💡',
              title: 'Enterprise Ready',
              description: 'Production-grade solutions'
            },
            {
              icon: '🔒',
              title: 'Privacy First',
              description: 'Secure and compliant'
            },
            {
              icon: '📈',
              title: 'Proven Results',
              description: 'Measurable ROI and impact'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}