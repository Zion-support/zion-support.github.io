import React from "react";
import { Link    } from "react-router-dom";
import { ArrowRightIcon, PlayIcon    } from "@heroicons/react/24/outline";

const Hero: React.FC = () => {
  return (
<>    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">""
      {/* Background */}
      <div>""</div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
    </>

      {/* Animated background elements */}
      <div>""</div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

      {/* Content */}
      <div>""</div>
        <div>""</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">""
            Transform Your Business with;
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">""
              AI & Technology;
            </h1>
          
          <p>""
            Leading provider of AI and IT solutions, empowering businesses to scale, 
            innovate, and succeed in the digital age.</p>
          </p>
          
          <div>""</div>
            <Link;
              to="/contact"""
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">"
              <span>Get Started Today</span>
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />""
            </Link>
            
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center space-x-2">""
              <PlayIcon className="h-5 w-5" />""
              <span>Watch Demo</button>
          </div>

          {/* Stats */}
          <div>""</div>
            <div>""</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            <div>""</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            <div>""</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
      
      {/* Scroll indicator */}
      <div>""</div>
        <div>""</div>
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </section>
  );
};

export default Hero;