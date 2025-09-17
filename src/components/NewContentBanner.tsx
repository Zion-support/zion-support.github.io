import React from 'react';

const NewContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-4 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-2xl animate-bounce">🚀</div>
            <div>
              <h3 className="text-xl font-bold">NEW CONTENT ALERT!</h3>
              <p className="text-sm opacity-90">Revolutionary Technology 2025 is now live</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="/pages/RevolutionaryTech2025" className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-50 transition-colors">
              🧠 Revolutionary Tech
            </a>
            <a href="/pages/NextGenAISolutions2025" className="bg-white text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-50 transition-colors">
              🤖 Next-Gen AI
            </a>
            <a href="/pages/QuantumComputingBreakthrough2025" className="bg-white text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-50 transition-colors">
              ⚡ Quantum Computing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner;