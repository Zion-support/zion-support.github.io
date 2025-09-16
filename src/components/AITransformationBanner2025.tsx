import React from 'react';

const AITransformationBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white py-12 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 NEW: AI Transformation Revolution 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Experience revolutionary AI technology that thinks, learns, and creates. Join thousands of businesses already transforming with our AI solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 text-center">
            <div className="text-3xl mb-2">🧠</div>
            <div className="text-sm font-semibold">Neural Networks 2.0</div>
            <div className="text-xs opacity-80">1000x faster processing</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 text-center">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-sm font-semibold">Creative AI</div>
            <div className="text-xs opacity-80">Original content generation</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 text-center">
            <div className="text-3xl mb-2">🔬</div>
            <div className="text-sm font-semibold">Scientific Discovery</div>
            <div className="text-xs opacity-80">Accelerated breakthroughs</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-lg p-4 border border-orange-400/30 text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-sm font-semibold">Autonomous Systems</div>
            <div className="text-xs opacity-80">Self-managing operations</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/AITransformationRevolution2025" className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Transformation →
            </a>
            <a href="/pages/AITransformationRevolution2025" className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors font-semibold text-lg">
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITransformationBanner2025;