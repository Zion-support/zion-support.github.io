import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Brain, Cpu, Shield, Globe, Sparkles, Star } from 'lucide-react';

const FuturisticHero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "AI-Powered Enterprise Solutions",
    "Quantum Computing Innovation",
    "Digital Transformation Excellence",
    "Next-Gen Technology Stack"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-spin" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-purple-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-pink-400/30 rotate-12 animate-bounce" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-blue-400/20 rotate-45 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="neon-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ZION TECH
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-white/90">
              GROUP
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <div className="h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-cyan-400 hologram">
              {heroTexts[currentText]}
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions, quantum computing, and 
            innovative micro SAAS services. Achieve unprecedented growth and efficiency.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="cyber-card p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">AI Solutions</div>
            </div>
            <div className="cyber-card p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="cyber-card p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="cyber-card p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="quantum-button px-8 py-4 text-lg">
              <span className="flex items-center">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </button>
            <button className="cyber-button px-8 py-4 text-lg">
              <span className="flex items-center">
                <Zap className="mr-2 w-5 h-5" />
                Get Started
              </span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="cyber-card p-6 rounded-lg">
              <div className="text-cyan-400 font-semibold mb-2">Phone</div>
              <div className="text-white">+1 302 464 0950</div>
            </div>
            <div className="cyber-card p-6 rounded-lg">
              <div className="text-cyan-400 font-semibold mb-2">Email</div>
              <div className="text-white">kleber@ziontechgroup.com</div>
            </div>
            <div className="cyber-card p-6 rounded-lg">
              <div className="text-cyan-400 font-semibold mb-2">Address</div>
              <div className="text-white">364 E Main St STE 1008<br />Middletown, DE 19709</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Brain className="absolute top-1/4 left-1/4 w-8 h-8 text-cyan-400/30 floating" />
        <Cpu className="absolute top-1/3 right-1/4 w-6 h-6 text-purple-400/30 floating" style={{ animationDelay: '1s' }} />
        <Shield className="absolute bottom-1/3 left-1/3 w-7 h-7 text-pink-400/30 floating" style={{ animationDelay: '2s' }} />
        <Globe className="absolute bottom-1/4 right-1/3 w-9 h-9 text-blue-400/30 floating" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400/30 floating" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default FuturisticHero;