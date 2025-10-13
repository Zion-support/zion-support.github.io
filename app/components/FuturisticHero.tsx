import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Brain } from 'lucide-react';

const FuturisticHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 futuristic-grid opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism border border-cyan-400/30 mb-8 neon-glow">
          <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
          <span className="text-sm font-medium text-cyan-400">Advanced AI & IT Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">Transform Your</span>
          <span className="block neon-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Digital Future
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Discover our comprehensive suite of <span className="neon-text-purple">AI-powered services</span>, 
          <span className="neon-text-pink"> micro SAAS solutions</span>, and 
          <span className="neon-text"> cutting-edge IT services</span> designed to accelerate your business growth.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold neon-text mb-2">100+</div>
            <div className="text-sm text-gray-400">Micro SAAS Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold neon-text-purple mb-2">50+</div>
            <div className="text-sm text-gray-400">AI Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold neon-text-pink mb-2">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold neon-text mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/services"
            className="group cyber-button px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:neon-glow"
          >
            Explore Services
            <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/contact"
            className="group px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:neon-glow"
          >
            Get Started Today
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group text-center p-6 glass-morphism rounded-xl hover:neon-glow transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-400">Advanced artificial intelligence solutions for modern businesses</p>
          </div>

          <div className="group text-center p-6 glass-morphism rounded-xl hover:neon-glow-purple transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-400">Optimized performance and instant response times</p>
          </div>

          <div className="group text-center p-6 glass-morphism rounded-xl hover:neon-glow-pink transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
            <p className="text-sm text-gray-400">Enterprise-grade security with 99.9% uptime guarantee</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero;