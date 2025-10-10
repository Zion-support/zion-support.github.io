'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Sparkles, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Target, TrendingUp, Award } from 'lucide-react';

const FuturisticHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "Advanced AI Solutions",
    "Cutting-Edge Technology",
    "Digital Transformation",
    "Innovation Excellence"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "99%", label: "Success Rate" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: Zap, value: "24/7", label: "Support" }
  ];

  const services = [
    { icon: Brain, name: "AI Services", color: "from-purple-500 to-pink-600" },
    { icon: Cloud, name: "IT Solutions", color: "from-blue-500 to-cyan-600" },
    { icon: Code, name: "Micro SAAS", color: "from-green-500 to-emerald-600" },
    { icon: Shield, name: "Cybersecurity", color: "from-red-500 to-orange-600" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-pink-400/30 rotate-12 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-yellow-400/30 animate-ping-slow"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Main Heading with Typewriter Effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 neon-text cyber-text-enhanced">
            Zion Tech Group
          </h1>
          <div className="h-16 flex items-center justify-center">
            <span className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-medium typewriter-text">
              {heroTexts[currentText]}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform your business with cutting-edge AI and IT solutions. 
          We deliver innovative technology that drives growth, efficiency, and competitive advantage.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a 
            href="tel:+13024640950" 
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow flex items-center justify-center"
          >
            <Phone className="mr-2" size={20} />
            Call Now: +1 302 464 0950
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow flex items-center justify-center"
          >
            <Mail className="mr-2" size={20} />
            Email Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 4) * 200}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-medium text-center">{service.name}</div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-gray-400">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              364 E Main St STE 1008, Middletown DE 19709
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +1 302 464 0950
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              kleber@ziontechgroup.com
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
        
        .cyber-text-enhanced {
          background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
        }
        
        .typewriter-text {
          border-right: 2px solid #00ffff;
          animation: blink 1s infinite;
        }
        
        .neon-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3);
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes blink {
          0%, 50% { border-color: #00ffff; }
          51%, 100% { border-color: transparent; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FuturisticHero;