import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Star, Users, Award, Clock } from 'lucide-react';

const Hero: React.FC = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0">
        {/* Neon Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-1000"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Neon Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-pulse delay-1000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            #1 AI & IT Solutions Provider
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Transform Your Business
            </span>
            <br />
            <span className="text-white relative">
              With AI & IT Solutions
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-sm -z-10"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Leading provider of cutting-edge AI, IT, and 5G solutions. 
            We transform businesses through innovative technology and 
            intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/services" 
              className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
              <Zap className="w-5 h-5 mr-2 relative z-10 group-hover:animate-spin" />
              <span className="relative z-10">Explore Services</span>
            </Link>
            <Link 
              to="/contact" 
              className="group relative border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-cyan-400/50 animate-pulse"></div>
              <span className="relative z-10">Get Free Consultation</span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-cyan-500/30">
                <Users className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">500+</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Happy Clients</div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-green-500/30">
                <Award className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">1000+</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Projects Completed</div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-purple-500/30">
                <Clock className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">99.9%</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Uptime Guarantee</div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-orange-500/30">
                <Zap className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">24/7</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;