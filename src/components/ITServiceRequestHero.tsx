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
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Lab",
      description: "Research and development in quantum computing and emerging technologies."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "World-class engineers and consultants with deep industry expertise."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and support."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/5 opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-gradient"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container mx-auto px-4 text-center">
        {/* Enhanced main heading */}
        <NeonGlow color="zion-cyan" intensity="high">
          <GradientHeading size="6xl" className="mb-6 font-futuristic">
            Zion Tech Group
          </GradientHeading>
        </NeonGlow>
        
        {/* Enhanced subtitle */}
        <NeonGlow color="zion-purple" intensity="medium">
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed font-tech">
            Pioneering the future of technology with revolutionary AI consciousness, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
        </NeonGlow>

        {/* Enhanced tagline */}
        <div className="mb-8">
          <p className="text-lg text-zion-cyan font-semibold mb-2">Where Innovation Meets Implementation</p>
          <p className="text-zion-slate-light">Empowering enterprises with next-generation technology solutions</p>
        </div>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white hover:shadow-neon transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </Link>
          <Link
            to="/request-quote"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-zion-blue-dark border border-zion-blue text-white rounded-lg text-lg font-semibold hover:bg-zion-blue hover:shadow-neon transition-all duration-300 transform hover:scale-105"
          >
            Request Quote
            <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-1">{stat.number}</div>
              <div className="text-sm text-zion-slate-light">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-tech">{feature.title}</h3>
              <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-zion-slate-light mb-4">Trusted by leading enterprises worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-zion-slate-light">ISO 27001 Certified</div>
            <div className="text-zion-slate-light">SOC 2 Type II</div>
            <div className="text-zion-slate-light">GDPR Compliant</div>
            <div className="text-zion-slate-light">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}