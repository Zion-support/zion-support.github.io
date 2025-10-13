import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Brain, Cloud } from 'lucide-react';

const FuturisticHero: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI & IT Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence, cybersecurity, 
          and cloud infrastructure solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
            Learn More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Solutions</h3>
            <p className="text-gray-300">Advanced artificial intelligence for business automation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
            <p className="text-gray-300">Comprehensive security solutions for your digital assets</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cloud Computing</h3>
            <p className="text-gray-300">Scalable cloud infrastructure and migration services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero;