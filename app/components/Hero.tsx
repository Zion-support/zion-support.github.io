import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Star, Users, Award, Clock, Brain, Cloud, Wifi, Shield, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse neon-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 neon-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000 neon-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-3000 neon-pulse"></div>
        
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-20 animate-bounce">
          <Brain className="w-8 h-8 text-cyan-400 opacity-60" />
        </div>
        <div className="absolute top-48 right-32 animate-bounce delay-1000">
          <Cloud className="w-8 h-8 text-purple-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-2000">
          <Wifi className="w-8 h-8 text-pink-400 opacity-60" />
        </div>
        <div className="absolute bottom-48 right-20 animate-bounce delay-3000">
          <Shield className="w-8 h-8 text-green-400 opacity-60" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8 cyber-glow">
            <Star className="w-5 h-5 mr-2 neon-pulse" />
            <span className="neon-text">#1 AI & IT Solutions Provider</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="cyber-text neon-pulse">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">With AI & IT Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Leading provider of cutting-edge AI, IT, and 5G solutions. 
            We transform businesses through innovative technology and 
            intelligent automation. Experience the future of business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/services" 
              className="cyber-button px-8 py-4 text-lg font-semibold flex items-center justify-center group"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="cyber-button-secondary px-8 py-4 text-lg font-semibold flex items-center justify-center group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get Free Consultation
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cyber-card p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 cyber-glow">
                <Users className="w-8 h-8 text-cyan-400 neon-pulse" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 neon-text">500+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center group cyber-card p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 cyber-glow">
                <Award className="w-8 h-8 text-green-400 neon-pulse" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 neon-text">1000+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center group cyber-card p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 cyber-glow">
                <Clock className="w-8 h-8 text-purple-400 neon-pulse" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 neon-text">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center group cyber-card p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 cyber-glow">
                <Zap className="w-8 h-8 text-orange-400 neon-pulse" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 neon-text">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;