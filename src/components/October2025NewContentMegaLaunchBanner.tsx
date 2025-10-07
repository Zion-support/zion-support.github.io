import React from 'react';
import { Link } from 'react-router-dom';

const October2025NewContentMegaLaunchBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
            🚀 JUST PUBLISHED - OCTOBER 1, 2025
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
          🌟 Breakthrough AI Content
          <br /> <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            LIVE NOW!
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-center mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
          Discover the latest enterprise AI innovations: Governance frameworks achieving 99.8% compliance, 
          multimodal AI with $89M ROI, and edge deployment revolutionizing real-time intelligence.
        </p>

        {/* Content cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link 
            to="/blog/ai-2025-october-enterprise-ai-governance-framework"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-3">AI Governance Framework</h3>
            <p className="text-white/80 mb-4 text-lg">
              Enterprise governance achieving 99.8% compliance rates and $47M cost savings
            </p>
            <div className="flex items-center justify-between">
              <span className="text-yellow-300 font-semibold">Read Full Guide →</span>
              
            </div>
          </Link>

          <Link 
            to="/blog/ai-2025-october-multimodal-ai-enterprise-deployment"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-3">Multimodal AI Deployment</h3>
            <p className="text-white/80 mb-4 text-lg">
              450% productivity gains and $89M ROI through integrated AI systems
            </p>
            <div className="flex items-center justify-between">
              <span className="text-yellow-300 font-semibold">Explore Now →</span>
              
            </div>
          </Link>

          <Link 
            to="/blog/ai-2025-october-edge-ai-deployment-revolution"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Edge AI Revolution</h3>
            <p className="text-white/80 mb-4 text-lg">
              Sub-millisecond inference and $156M savings with distributed AI
            </p>
            <div className="flex items-center justify-between">
              <span className="text-yellow-300 font-semibold">Learn More →</span>
              
            </div>
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">99.8%</div>
            <div className="text-white/70">Compliance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">$292M</div>
            <div className="text-white/70">Combined ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">450%</div>
            <div className="text-white/70">Productivity Gain</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">&lt;1ms</div>
            <div className="text-white/70">Edge Latency</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Explore All New Content →
          </Link>
          <p className="mt-4 text-white/70">
            Join 50,000+ professionals staying ahead with our AI insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentMegaLaunchBanner;
