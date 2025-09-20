import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Cpu, Zap } from 'lucide-react';
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTIwIDIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwdjIwaDIweiIvPjwvZz48L3N2Zz4=')] animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Banner Content */}
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 animate-bounce">
              <Sparkles className="w-4 h-4" />
              REVOLUTIONARY NEW CONTENT 2026
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                AI & Technology
              </span>
              is Here
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore groundbreaking insights into Quantum Neural Networks, Autonomous AI Systems, 
              Neural Interfaces, Consciousness Computing, and Interdimensional Technology
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/revolutionary-content-2026"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6 text-lg">
              Don't miss out on the technological revolution. Join thousands of innovators, researchers, and business leaders 
              who are already exploring the future of AI and technology.
            </p>
            <Link
              to="/revolutionary-content-2026"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25"
            >
              <Sparkles className="w-5 h-5" />
              Discover the Future Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
