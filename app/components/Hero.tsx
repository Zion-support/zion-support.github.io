import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Star, Users, Award, Clock, Sparkles, Rocket, Brain } from 'lucide-react';
import FuturisticBackground from './FuturisticBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Futuristic Background */}
      <FuturisticBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-cyan-500/25">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              #1 AI & IT Solutions Provider
            </span>
            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Transform Your Business
            </span>
            <br />
            <span className="text-white relative">
              With AI & IT Solutions
              <div className="absolute -top-2 -right-2">
                <Rocket className="w-8 h-8 text-cyan-400 animate-bounce" />
              </div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Leading provider of cutting-edge AI, IT, and 5G solutions. 
            We transform businesses through innovative technology and 
            intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/services" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Explore Services
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center relative backdrop-blur-sm bg-cyan-400/5"
            >
              <Brain className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Get Free Consultation
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-cyan-400/30 backdrop-blur-sm">
                <Users className="w-10 h-10 text-cyan-400 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-300 text-sm font-medium">Happy Clients</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-green-400/30 backdrop-blur-sm">
                <Award className="w-10 h-10 text-green-400 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">1000+</div>
              <div className="text-gray-300 text-sm font-medium">Projects Completed</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-500"></div>
            </div>
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm">
                <Clock className="w-10 h-10 text-purple-400 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
              <div className="text-gray-300 text-sm font-medium">Uptime Guarantee</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
            </div>
            <div className="text-center group relative">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-orange-400/30 backdrop-blur-sm">
                <Zap className="w-10 h-10 text-orange-400 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-300 text-sm font-medium">Support Available</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping delay-1500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;