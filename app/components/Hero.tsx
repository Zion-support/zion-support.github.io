import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Star, Users, Award, Clock, Sparkles, Brain, Cpu, Database } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Animated Background with Neon Effects */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Neon grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" 
             style={{
               backgroundImage: `
                 linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                 linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Mouse-following glow effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-cyan-500/25 animate-pulse">
            <Sparkles className="w-4 h-4 mr-2 animate-spin" />
            #1 AI & IT Solutions Provider
            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Transform Your Business
            </span>
            <br />
            <span className="text-white relative">
              With AI & IT Solutions
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping"></div>
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
              className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Explore Services
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </Link>
            <Link 
              to="/contact" 
              className="group relative border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-cyan-400/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <Brain className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get Free Consultation
            </Link>
          </div>
          
          {/* Enhanced Stats with Neon Effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-cyan-500/30 backdrop-blur-sm">
                <Users className="w-10 h-10 text-cyan-400 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">500+</div>
              <div className="text-gray-300 text-sm font-medium">Happy Clients</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-green-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-green-500/30 backdrop-blur-sm">
                <Award className="w-10 h-10 text-green-400 group-hover:animate-bounce" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">1000+</div>
              <div className="text-gray-300 text-sm font-medium">Projects Completed</div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-purple-500/30 backdrop-blur-sm">
                <Clock className="w-10 h-10 text-purple-400 group-hover:animate-spin" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
              <div className="text-gray-300 text-sm font-medium">Uptime Guarantee</div>
            </div>
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-20 h-20 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-orange-500/30 backdrop-blur-sm">
                <Zap className="w-10 h-10 text-orange-400 group-hover:animate-pulse" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-300 text-sm font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;