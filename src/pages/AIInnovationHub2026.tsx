import React from 'react';

const AIInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">AI Innovation Hub 2026</h1>
          <p className="text-xl opacity-90">Showcasing cutting-edge AI breakthroughs and research initiatives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">$2.5B</div>
            <div className="text-lg opacity-80">Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">50K+</div>
            <div className="text-lg opacity-80">Researchers</div>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold">
            🚀 Join AI Hub
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-bold">
            📚 Research Papers
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2026;