import React from 'react';
import { Link } from 'react-router-dom';

const NewContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ✨ NEW CONTENT ALERT • SEPTEMBER 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">Latest AI 2026 Innovations & Breakthroughs</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover our newest revolutionary content covering autonomous business operations, consciousness computing, quantum intelligence, and AI-powered sustainability solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">Autonomous Business Operations</h3>
            <p className="text-emerald-100 text-sm mb-4">Complete business automation with 95% operational autonomy</p>
            <div className="text-sm font-semibold text-yellow-400 mb-2">New Article Available</div>
            <Link 
              to="/blog/ai-2026-autonomous-business-operations-revolution" 
              className="text-emerald-300 hover:text-white transition-colors text-sm font-medium"
            >
              Read Article →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Consciousness Computing</h3>
            <p className="text-purple-100 text-sm mb-4">First truly conscious AI with genuine self-awareness</p>
            <div className="text-sm font-semibold text-yellow-400 mb-2">Revolutionary Breakthrough</div>
            <Link 
              to="/blog/revolutionary-ai-consciousness-computing-breakthrough" 
              className="text-purple-300 hover:text-white transition-colors text-sm font-medium"
            >
              Explore Technology →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Quantum Business Intelligence</h3>
            <p className="text-cyan-100 text-sm mb-4">500% decision accuracy with quantum computing</p>
            <div className="text-sm font-semibold text-yellow-400 mb-2">Next-Gen Analytics</div>
            <Link 
              to="/blog/quantum-business-intelligence-next-gen-decision-making" 
              className="text-cyan-300 hover:text-white transition-colors text-sm font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Sustainability</h3>
            <p className="text-green-100 text-sm mb-4">Actively reversing climate change with profitable solutions</p>
            <div className="text-sm font-semibold text-yellow-400 mb-2">Environmental Impact</div>
            <Link 
              to="/blog/ai-powered-sustainability-saving-planet-technology" 
              className="text-green-300 hover:text-white transition-colors text-sm font-medium"
            >
              Save the Planet →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">AI-Human Collaboration</h3>
            <p className="text-orange-100 text-sm mb-4">400% productivity increase through seamless partnerships</p>
            <div className="text-sm font-semibold text-yellow-400 mb-2">Future of Work</div>
            <Link 
              to="/blog/future-work-ai-human-collaboration-excellence" 
              className="text-orange-300 hover:text-white transition-colors text-sm font-medium"
            >
              Transform Work →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/services" 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg mr-4"
          >
            Explore All Services →
          </Link>
          <Link 
            to="/blog" 
            className="border-2 border-emerald-400 text-emerald-400 px-12 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg"
          >
            Read All Articles →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;