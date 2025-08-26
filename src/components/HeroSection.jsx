import React from 'react';
import { Search, Rocket, Users, TrendingUp, Shield, Zap, Star, Sparkles } from 'lucide-react';

const trustMetrics = [
  { icon: Users, label: "10K+ Users", value: "Trusted by thousands" },
  { icon: TrendingUp, label: "95% Success", value: "Project completion rate" },
  { icon: Shield, label: "Enterprise", value: "Fortune 500 clients" },
  { icon: Rocket, label: "24/7 Support", value: "Always available" }
];

const featureBadges = [
  { icon: Zap, label: "AI-Powered Matching", color: "zion-cyan" },
  { icon: Star, label: "Verified Professionals", color: "zion-purple" },
  { icon: Shield, label: "Secure Payments", color: "zion-cyan" },
  { icon: Rocket, label: "Enterprise Security", color: "zion-purple" }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"/>
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-transparent to-zion-cyan/20 animate-pulse"/>
      
      {/* Main Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Badge */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
            <span className="text-zion-cyan text-lg font-medium">
              AI-Powered Technology Solutions
            </span>
            <Sparkles className="h-8 w-8 text-zion-cyan animate-pulse"/>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-4">
            Transform Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan">
              AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mt-4">
            Leading the future of technology innovation
          </p>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto leading-relaxed">
          Discover cutting-edge AI solutions, expert talent, and innovative services that drive digital transformation. 
          From startups to enterprises, we deliver results that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group rounded-lg text-white font-semibold flex items-center gap-2 justify-center"
          >
            Get Started Today
            <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform"/>
          </a>
          <a 
            href="/services" 
            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-lg py-6 px-8 rounded-lg transition-all duration-300 font-semibold flex items-center gap-2 justify-center"
          >
            Explore Services
            <Search className="h-5 w-5"/>
          </a>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <metric.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.label}</div>
              <div className="text-zion-slate-light text-sm">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {featureBadges.map((badge, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${badge.color}/20 text-${badge.color} border border-${badge.color}/30`}
            >
              <badge.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}