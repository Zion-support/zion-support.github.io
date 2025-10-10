import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Brain, Cpu, Shield, Globe, Sparkles, Star, Phone, Mail, MapPin } from 'lucide-react';

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
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Holographic Scan Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60"></div>
        </div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rotate-45 animate-spin quantum-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-purple-400/30 rounded-full animate-pulse neon-glow" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-pink-400/30 rotate-12 animate-bounce cyber-border" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-blue-400/20 rotate-45 animate-pulse energy-flow" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            {[...Array(25)].map((_, i) => (
              <g key={i}>
                <circle
                  cx={100 + (i * 40) % 800}
                  cy={100 + (i * 25) % 600}
                  r="4"
                  fill="url(#neuralGradient)"
                  className="neural-network"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
                {i < 24 && (
                  <line
                    x1={100 + (i * 40) % 800}
                    y1={100 + (i * 25) % 600}
                    x2={100 + ((i + 1) * 40) % 800}
                    y2={100 + ((i + 1) * 25) % 600}
                    stroke="url(#neuralGradient)"
                    strokeWidth="2"
                    className="neural-network"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
        
        {/* Holographic Data Streams */}
        <div className="absolute inset-0 data-stream">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30"
              style={{
                left: `${20 + i * 20}%`,
                animation: `data-stream ${4 + i}s linear infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="neon-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hologram">
              ZION TECH
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-white/90 relative">
              GROUP
              {/* Holographic Glitch Effect */}
              <span className="absolute inset-0 text-cyan-400/20 animate-pulse" style={{ animationDelay: '0.5s' }}>
                GROUP
              </span>
              <span className="absolute inset-0 text-purple-400/20 animate-pulse" style={{ animationDelay: '1s' }}>
                GROUP
              </span>
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
            <div className="cyber-card p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
              <div className="text-gray-300">AI Solutions</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="cyber-card p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 neon-text">10K+</div>
              <div className="text-gray-300">Happy Clients</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className="cyber-card p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2 neon-text">99.9%</div>
              <div className="text-gray-300">Uptime</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
            <div className="cyber-card p-6 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 neon-text">24/7</div>
              <div className="text-gray-300">Support</div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
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
            <div className="cyber-card p-6 rounded-lg relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-cyan-400 font-semibold mb-2 flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone
              </div>
              <div className="text-white neon-text">+1 302 464 0950</div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
            <div className="cyber-card p-6 rounded-lg relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-purple-400 font-semibold mb-2 flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </div>
              <div className="text-white neon-text">kleber@ziontechgroup.com</div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
            </div>
            <div className="cyber-card p-6 rounded-lg relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-pink-400 font-semibold mb-2 flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                Address
              </div>
              <div className="text-white neon-text">364 E Main St STE 1008<br />Middletown, DE 19709</div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
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