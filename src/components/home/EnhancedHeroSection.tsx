=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
          {/* Right Content - 3D Cards */}
          <div className="relative hidden lg:block">
            <div className="relative space-y-6">
              {/* Main Service Card */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-zion-blue-dark/80 backdrop-blur-sm border border-zion-purple/50 rounded-2xl p-6 shadow-2xl shadow-zion-purple/20 hover:shadow-zion-purple/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">AI Chatbot Builder</h3>
                      <p className="text-zion-slate-light text-sm">No-code AI solutions</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">Advanced NLP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                      <span className="text-zion-slate-light">Multi-language</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
                      <span className="text-zion-slate-light">Analytics Dashboard</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-purple/20">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-bold">$299/mo</span>
                      <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        Popular
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Service Card */}
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500 ml-12">
                <div className="bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/50 rounded-2xl p-6 shadow-2xl shadow-zion-cyan/20 hover:shadow-zion-cyan/40 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Cybersecurity Audit</h3>
                      <p className="text-zion-slate-light text-sm">Complete security assessment</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">Penetration Testing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
                      <span className="text-zion-slate-light">Compliance Review</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-bold">$3,500</span>
                      <Badge className="bg-zion-cyan/20 text-white border-zion-cyan/30">
                        One-time
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-zion-purple/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-zion-cyan/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zion-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
=======
  Shield, 
  Globe, 
  ChevronDown,
  Star,
  Users,
  TrendingUp
} from "lucide-react";

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-zion-blue/10 rounded-full animate-float delay-2000"></div>
        
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-blue to-transparent animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zion-cyan/10 text-zion-cyan px-6 py-3 rounded-full text-sm font-medium mb-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:bg-zion-cyan/20">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span className="neon-text">New Micro SAAS Services Available</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent neon-pulse">
            ZION
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl text-white mt-4 font-normal">
            The Future of Tech & AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-12 max-w-5xl mx-auto leading-relaxed">
          Discover the world's most comprehensive marketplace for AI talent, micro SAAS services, 
          and cutting-edge technology solutions. Transform your business with our innovative platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-zion-slate font-semibold px-8 py-6 text-lg hover-lift hover-glow transition-all duration-300"
          >
            <Link to="/micro-saas-services">
              <Zap className="h-6 w-6 mr-3" />
              Explore Services
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-2 border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold px-8 py-6 text-lg hover-lift transition-all duration-300"
          >
            <Link to="/request-quote">
              <Users className="h-6 w-6 mr-3" />
              Get Started
            </Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300 group-hover:scale-105">
                <stat.icon className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2 text-zion-slate-light">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zion-blue-dark via-transparent to-transparent pointer-events-none"></div>
    </section>
=======
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Zap, 
  Shield,
  Brain,
  Cloud,
  Code,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import { SimpleFuturisticBackground } from "@/components/ui/FuturisticBackground";

export function EnhancedHeroSection() {
  const stats = [
    { label: 'Active Users', value: '50K+', icon: <Users className="h-5 w-5" /> },
    { label: 'Services Delivered', value: '10K+', icon: <Zap className="h-5 w-5" /> },
    { label: 'Success Rate', value: '99.9%', icon: <Shield className="h-5 w-5" /> },
    { label: 'Global Reach', value: '150+', icon: <TrendingUp className="h-5 w-5" /> }
  ];

  const features = [
    'AI-Powered Matching',
    '24/7 Global Support',
    'Enterprise Security',
    'Real-time Analytics',
    'Multi-platform Integration',
    'Custom Solutions'
  ];

  return (
    <SimpleFuturisticBackground>
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Brain className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm font-medium text-zion-cyan">AI-Powered Technology Solutions</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    The Future of
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-zion-purple via-zion-cyan to-white bg-clip-text text-transparent">
                    Tech & AI
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Marketplace
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zion-slate-light max-w-2xl leading-relaxed">
                  Discover cutting-edge AI services, enterprise IT solutions, and innovative SaaS platforms. 
                  Connect with top talent and transform your business with next-generation technology.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg font-semibold gap-3 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 px-8 py-4 text-lg font-semibold gap-3 backdrop-blur-sm"
                  onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-zion-purple to-zion-cyan border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm text-zion-slate-light">Trusted by 50K+ users</span>
                </div>
                
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-zion-slate-light ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 w-64 h-40 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl backdrop-blur-sm animate-float">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-zion-cyan" />
                      <span className="text-sm font-medium text-white">AI Services</span>
                    </div>
                    <p className="text-xs text-zion-slate-light">Content Generation, Analytics, Automation</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-56 h-32 bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 border border-zion-blue/30 rounded-2xl backdrop-blur-sm animate-float delay-1000">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Cloud className="h-5 w-5 text-zion-blue" />
                      <span className="text-sm font-medium text-white">Cloud Solutions</span>
                    </div>
                    <p className="text-xs text-zion-slate-light">Infrastructure, Security, Management</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-72 h-44 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl backdrop-blur-sm animate-float delay-500">
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Code className="h-6 w-6 text-zion-cyan" />
                      <span className="text-lg font-semibold text-white">Development</span>
                    </div>
                    <p className="text-sm text-zion-slate-light">Custom Software, APIs, Integration</p>
                    <div className="mt-3 flex justify-center">
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                        Most Popular
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Central Orb */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-zion-purple-dark via-zion-slate to-zion-blue-dark rounded-full"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow delay-1000"></div>
                  <div className="absolute inset-12 bg-gradient-to-r from-zion-purple-dark via-zion-slate to-zion-blue-dark rounded-full"></div>
                  <div className="absolute inset-16 bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue rounded-full animate-pulse-slow delay-500"></div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">ZION</div>
                      <div className="text-sm text-zion-cyan">Tech Group</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-zion-cyan group-hover:text-white transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-zion-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Join thousands of businesses already transforming their operations with our cutting-edge 
                technology solutions. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Contact Our Team
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 gap-3"
                  onClick={() => window.open('https://ziontechgroup.com/services', '_blank')}
                >
                  <Zap className="h-4 w-4" />
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SimpleFuturisticBackground>
  );
}