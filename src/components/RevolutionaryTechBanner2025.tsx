import React from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-16 mb-8">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY TECHNOLOGY • 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Future is Here
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience breakthrough technologies that are transforming every aspect of human life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Revolutionary Breakthroughs</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">AI Innovation Breakthrough</h4>
                  <p className="opacity-90">Revolutionary AI innovations transforming industries with cognitive systems, research automation, and creative AI studios.</p>
                  <Link to="/ai-innovation-breakthrough-2025" className="text-emerald-300 hover:text-white transition-colors duration-300 font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Quantum Computing Revolution</h4>
                  <p className="opacity-90">Experience exponential computing power with quantum processors, algorithms, and simulations solving impossible problems.</p>
                  <Link to="/quantum-computing-revolution-2025" className="text-emerald-300 hover:text-white transition-colors duration-300 font-semibold">
                    Explore Quantum →
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Neural Interface Revolution</h4>
                  <p className="opacity-90">Bridge mind and machine with brain-computer interfaces, neural stimulation, and cognitive enhancement technologies.</p>
                  <Link to="/neural-interface-revolution-2025" className="text-emerald-300 hover:text-white transition-colors duration-300 font-semibold">
                    Discover Neural →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-6">Technology Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-emerald-300 mb-2">10,000x</div>
                  <div className="text-sm opacity-90">Computing Speed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-300 mb-2">95%</div>
                  <div className="text-sm opacity-90">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-300 mb-2">99.9%</div>
                  <div className="text-sm opacity-90">Reliability</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">∞</div>
                  <div className="text-sm opacity-90">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full animate-ping delay-2000"></div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;