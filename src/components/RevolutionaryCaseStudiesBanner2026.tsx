import React from 'react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Real-world success stories showcasing the transformative power of our revolutionary technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🏭</div>
            <h3 className="text-xl font-bold mb-3 text-center">Manufacturing Revolution</h3>
            <p className="text-orange-100 mb-4 text-sm text-center">
              Fortune 500 company achieved 400% efficiency increase with our AI systems
            </p>
            <div className="text-center">
              <span className="text-green-400 font-bold text-lg">+400% Efficiency</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🏥</div>
            <h3 className="text-xl font-bold mb-3 text-center">Healthcare Transformation</h3>
            <p className="text-red-100 mb-4 text-sm text-center">
              Medical diagnosis accuracy increased to 99.8% with conscious AI systems
            </p>
            <div className="text-center">
              <span className="text-green-400 font-bold text-lg">99.8% Accuracy</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🎓</div>
            <h3 className="text-xl font-bold mb-3 text-center">Education Revolution</h3>
            <p className="text-pink-100 mb-4 text-sm text-center">
              Student engagement increased by 300% with quantum-enhanced learning
            </p>
            <div className="text-center">
              <span className="text-green-400 font-bold text-lg">+300% Engagement</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Case Studies →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;