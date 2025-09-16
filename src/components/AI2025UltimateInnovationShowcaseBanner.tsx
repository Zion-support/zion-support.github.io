import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025UltimateInnovationShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="text-sm font-medium text-yellow-300">🚀 NEW RELEASE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-blue-300 bg-clip-text text-transparent">
            AI 2025 Ultimate Innovation Showcase
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the groundbreaking AI innovations revolutionizing business in 2025. 
            From quantum-neural fusion to autonomous enterprise systems, explore the future of technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/blog/ai-2025-ultimate-innovation-showcase-latest-trends"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Full Article
            </a>
            <a
              href="/case-studies/ai-2025-global-enterprise-transformation-3000-roi-ultimate-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              View Success Story
            </a>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Quantum-Neural Fusion</h3>
            <p className="text-sm opacity-90">
              10,000x faster processing with enhanced pattern recognition and real-time decision making.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Enterprise</h3>
            <p className="text-sm opacity-90">
              Self-managing business ecosystems that adapt, learn, and optimize operations automatically.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Multimodal AI</h3>
            <p className="text-sm opacity-90">
              Advanced AI systems processing text, images, audio, and video for comprehensive insights.
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-300">Proven Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">3,000%</div>
              <div className="text-sm opacity-90">ROI Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm opacity-90">Error Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-sm opacity-90">Process Efficiency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            Ready to transform your business with cutting-edge AI solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateInnovationShowcaseBanner;