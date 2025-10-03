// import React from 'react';

const October2025RealTimeAdaptiveMLBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 mr-2"></span>
            <span className="text-sm font-semibold text-blue-200">JUST PUBLISHED - OCTOBER 2025</span>
          </div>
          
          {/* Main headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            🚀 Real-Time Adaptive ML
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Revolutionizes Enterprise AI
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Continuously learning AI systems that adapt in real-time without costly retraining cycles
          </p>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
            <div className="text-sm text-gray-300">Lower Operational Costs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-purple-400 mb-2">98.7%</div>
            <div className="text-sm text-gray-300">Fraud Detection Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-pink-400 mb-2">&lt;5ms</div>
            <div className="text-sm text-gray-300">Real-Time Latency</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-indigo-400 mb-2">847%</div>
            <div className="text-sm text-gray-300">ROI in 18 Months</div>
          </div>
        </div>
        
        {/* Content cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Blog Post 1 */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all">
            <div className="text-blue-400 text-sm font-semibold mb-2">📘 TECHNICAL GUIDE</div>
            <h3 className="text-xl font-bold mb-3">Real-Time Adaptive Machine Learning</h3>
            <p className="text-gray-300 text-sm mb-4">
              Deep dive into continuous learning pipelines, online algorithms, and production deployment strategies
            </p>
            <a 
              href="/blog/ai-2025-oct-real-time-adaptive-machine-learning"
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center"
            >
              Read Technical Guide →
            </a>
          </div>
          
          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
            <div className="text-purple-400 text-sm font-semibold mb-2">💼 SUCCESS STORY</div>
            <h3 className="text-xl font-bold mb-3">$89M Fintech Transformation</h3>
            <p className="text-gray-300 text-sm mb-4">
              How Global Payments Corp achieved 98.7% fraud detection accuracy and $89M annual savings
            </p>
            <a 
              href="/case-studies/ai-2025-oct-global-fintech-real-time-adaptive-ml-success"
              className="text-purple-400 hover:text-purple-300 text-sm font-semibold inline-flex items-center"
            >
              Read Success Story →
            </a>
          </div>
          
          {/* Services */}
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-pink-400/50 transition-all">
            <div className="text-pink-400 text-sm font-semibold mb-2">🛠️ OUR SERVICES</div>
            <h3 className="text-xl font-bold mb-3">Adaptive ML Platform</h3>
            <p className="text-gray-300 text-sm mb-4">
              End-to-end implementation, fraud detection, dynamic pricing, predictive maintenance, and more
            </p>
            <a 
              href="/services/ai-2025-october-real-time-adaptive-ml-platform"
              className="text-pink-400 hover:text-pink-300 text-sm font-semibold inline-flex items-center"
            >
              Explore Services →
            </a>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <a 
            href="/services/ai-2025-october-real-time-adaptive-ml-platform"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-2xl"
          >
            Start Your Adaptive ML Journey →
          </a>
          <p className="text-sm text-gray-400 mt-4">Free 2-hour consultation • Proof-of-concept in 4-6 weeks</p>
        </div>
      </div>
    </div>
  );
};

export default October2025RealTimeAdaptiveMLBanner;
