import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Shield, Cloud, Rocket, Users, Globe, Target } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { NeonGlow } from '@/components/ui/NeonGlow';

export function ITServiceRequestHero() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that learns and adapts to your business needs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Advanced security solutions protecting your digital assets and infrastructure."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing",
      description: "Scalable cloud solutions that optimize performance and reduce costs."
    }
  ];

  const highlights = [
    { icon: <Users className="w-5 h-5" />, text: "10K+ Satisfied Clients" },
    { icon: <Globe className="w-5 h-5" />, text: "Global Presence" },
    { icon: <Target className="w-5 h-5" />, text: "99.9% Success Rate" },
    { icon: <Rocket className="w-5 h-5" />, text: "24/7 Support" }
  ];

  return (
    <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/5 opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-zion-cyan opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-zion-purple opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-cyan opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-zion-purple opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        {/* Main Heading */}
        <NeonGlow color="zion-cyan" intensity="high">
          <GradientHeading size="6xl" className="mb-6">
            Zion Tech Group
          </GradientHeading>
        </NeonGlow>
        
        {/* Subtitle */}
        <NeonGlow color="zion-purple" intensity="medium">
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of technology with revolutionary AI consciousness, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
        </NeonGlow>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="text-zion-cyan">
                {highlight.icon}
              </div>
              <span className="text-white text-sm font-medium">{highlight.text}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/micro-saas-services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zion-slate-light">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zion-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}