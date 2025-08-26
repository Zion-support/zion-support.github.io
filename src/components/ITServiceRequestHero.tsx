import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Shield, Cloud } from 'lucide-react';
import { GradientHeading } from '../ui/GradientHeading';
import { NeonGlow } from '../ui/NeonGlow';

export function ITServiceRequestHero() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that learns and adapts to your business needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Advanced security solutions protecting your digital assets and infrastructure.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing",
      description: "Scalable cloud solutions that optimize performance and reduce costs.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const highlights = [
    "24/7 Expert Support",
    "99.9% Uptime Guarantee",
    "Enterprise-Grade Security",
    "AI-Powered Automation"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zion-blue/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 mb-8 animate-fade-in-up animate-delay-200">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>Trusted by 500+ Companies Worldwide</span>
        </div>

        {/* Main Heading */}
        <NeonGlow color="zion-cyan" intensity="high">
          <GradientHeading size="6xl" className="mb-6 animate-fade-in-up animate-delay-400">
            Zion Tech Group
          </GradientHeading>
        </NeonGlow>
        
        {/* Subtitle */}
        <NeonGlow color="zion-purple" intensity="medium">
          <p className="text-xl md:text-3xl text-white mb-8 max-w-5xl mx-auto leading-relaxed font-light animate-fade-in-up animate-delay-600">
            Pioneering the future of technology with revolutionary{' '}
            <span className="text-zion-cyan font-semibold">AI consciousness</span>,{' '}
            <span className="text-zion-purple font-semibold">quantum computing</span>, and{' '}
            <span className="text-zion-blue font-semibold">autonomous solutions</span> that transform businesses worldwide.
          </p>
        </NeonGlow>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animate-delay-800">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/80">
              <CheckCircle className="w-4 h-4 text-zion-cyan" />
              <span className="text-sm font-medium">{highlight}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animate-delay-1000">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <Rocket className="w-5 h-5 group-hover:animate-bounce" />
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/5"
          >
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Get Started Today
          </Link>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up animate-delay-1200">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">{feature.title}</h3>
              <p className="text-zion-slate-light leading-relaxed group-hover:text-white/80 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 animate-fade-in-up animate-delay-1400">
          <p className="text-white/60 text-sm mb-6">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/40 text-xs font-semibold">COMPANY 1</span>
            </div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/40 text-xs font-semibold">COMPANY 2</span>
            </div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/40 text-xs font-semibold">COMPANY 3</span>
            </div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/40 text-xs font-semibold">COMPANY 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}