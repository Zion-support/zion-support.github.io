import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FuturisticHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence, cybersecurity, and cloud infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/demo" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Cloud Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero;