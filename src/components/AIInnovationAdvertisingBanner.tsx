import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Target, ArrowRight } from 'lucide-react';

const AIInnovationAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border-y border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-200 font-medium">AI Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary AI Solutions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology that delivers unprecedented results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-blue-100">
              Deploy AI solutions in record time with our streamlined implementation process
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Precision Targeting
            </h3>
            <p className="text-blue-100">
              Achieve 99.9% accuracy with our advanced AI targeting algorithms
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Innovation First
            </h3>
            <p className="text-blue-100">
              Stay ahead with the latest AI breakthroughs and cutting-edge technology
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Discover AI Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationAdvertisingBanner;