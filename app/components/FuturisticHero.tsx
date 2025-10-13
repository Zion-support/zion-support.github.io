import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cpu, Brain, Sparkles } from 'lucide-react';

const FuturisticHero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "AI-Powered Solutions",
    "Digital Transformation",
    "Cybersecurity Excellence",
    "Cloud Innovation",
    "Data Intelligence"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Brain, text: "AI & Machine Learning", color: "text-cyan-400" },
    { icon: Shield, text: "Advanced Security", color: "text-green-400" },
    { icon: Cpu, text: "Cloud Infrastructure", color: "text-purple-400" },
    { icon: Zap, text: "Lightning Fast", color: "text-yellow-400" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text neon-glow">
              Zion Tech Group
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-2xl md:text-4xl font-light mb-8">
            <span className="text-white">Transforming Business Through</span>
            <br />
            <span className="gradient-text hologram-flicker">
              {heroTexts[currentText]}
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge AI, cybersecurity, and IT solutions that propel your business 
            into the future. Experience innovation that transforms possibilities into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover-glow hover-scale transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              to="/services"
              className="group px-8 py-4 glass border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
            >
              <span className="flex items-center">
                <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore Services
              </span>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group glass rounded-xl p-6 hover-glow transition-all duration-500 ${
                    isVisible ? 'fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticHero;