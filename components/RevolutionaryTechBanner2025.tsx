'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Rocket, Target, Award, Zap } from 'lucide-react';

const RevolutionaryTechBanner2025 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-white mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold">Revolutionary Technology 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology is Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience breakthrough innovations in AI, quantum computing, and automation that are reshaping entire industries and creating unprecedented opportunities.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">10x faster processing with quantum acceleration</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Precision AI</h3>
              <p className="text-gray-300">99.9% accuracy in complex decision making</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Industry Leading</h3>
              <p className="text-gray-300">Award-winning solutions trusted by Fortune 500</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/ai-solutions"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Zap className="w-6 h-6 mr-3" />
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400 mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white">Microsoft</div>
              <div className="text-2xl font-bold text-white">Google</div>
              <div className="text-2xl font-bold text-white">Amazon</div>
              <div className="text-2xl font-bold text-white">Tesla</div>
              <div className="text-2xl font-bold text-white">OpenAI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechBanner2025;