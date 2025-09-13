import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Zap, Network, ArrowRight, Sparkles, Eye } from 'lucide-react';

const NeuralInterfaceRevolutionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Brain className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-white">Neural Interface</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Neural Interface Revolution
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Mind-Machine Fusion
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future where human consciousness seamlessly integrates with artificial intelligence 
            through revolutionary neural interfaces. Direct brain-computer communication is no longer science fiction.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-lg mb-4 mx-auto">
                <Brain className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Brain Interface</h3>
              <p className="text-gray-300 text-sm">
                Seamless communication between human thoughts and AI systems
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-lg mb-4 mx-auto">
                <Network className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Neural Networks</h3>
              <p className="text-gray-300 text-sm">
                Advanced neural pathways for enhanced cognitive capabilities
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-lg mb-4 mx-auto">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-gray-300 text-sm">
                Complete fusion of human intelligence with artificial consciousness
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/neural-interface-solutions" 
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/neural-interface-future-2035" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2"
            >
              <span>Future Vision</span>
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>🧠 Revolutionary brain-computer interface • 🚀 Next-gen neural technology • ⚡ Mind-machine fusion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceRevolutionBanner;