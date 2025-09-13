import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Rocket, Satellite, Zap, Globe, Users, Shield } from 'lucide-react';

const NeuralInterfaceSpaceTechPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-semibold mb-6">
            <Brain className="w-4 h-4 mr-2" />
            NEW: Neural Interfaces & Space Technology
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Neural-Space
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Revolution
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover revolutionary neural interface technologies and advanced space systems that will 
            enable direct human-space interaction, autonomous space operations, and interplanetary AI networks.
          </p>

          {/* Technology Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4 mx-auto">
                <Brain className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Neural Interfaces</h3>
              <p className="text-gray-300 text-sm">Direct brain-computer interfaces with real-time data transfer and 99.5% accuracy</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-lg mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Space Technology</h3>
              <p className="text-gray-300 text-sm">Autonomous space operations with AI-driven decision making and self-repair systems</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-lg mb-4 mx-auto">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-time Connection</h3>
              <p className="text-gray-300 text-sm">Instant neural communication with space systems</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-lg mb-4 mx-auto">
                <Shield className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Security</h3>
              <p className="text-gray-300 text-sm">Unbreakable quantum-encrypted space communication</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-600/20 rounded-lg mb-4 mx-auto">
                <Globe className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Interplanetary AI</h3>
              <p className="text-gray-300 text-sm">Distributed AI networks across multiple planets</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-600/20 rounded-lg mb-4 mx-auto">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Space Colonization</h3>
              <p className="text-gray-300 text-sm">AI-powered autonomous space habitat construction</p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-1">99.5%</div>
              <div className="text-sm text-gray-300">Neural Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">100%</div>
              <div className="text-sm text-gray-300">Space Autonomy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">Global</div>
              <div className="text-sm text-gray-300">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">Multi-Planetary</div>
              <div className="text-sm text-gray-300">AI Networks</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/neural-space-technology"
              className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Technologies
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/neural-space-consulting"
              className="group border-2 border-white/30 hover:border-red-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-lg"
            >
              Get Expert Consultation
              <Brain className="w-5 h-5 ml-2 inline group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Developed in collaboration with leading research institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">NASA</div>
              <div className="text-white font-semibold">SpaceX</div>
              <div className="text-white font-semibold">Neuralink</div>
              <div className="text-white font-semibold">MIT</div>
              <div className="text-white font-semibold">Stanford</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralInterfaceSpaceTechPromotionBanner;