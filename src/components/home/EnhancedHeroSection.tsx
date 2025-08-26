import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  ChevronDown,
  Star,
  Users,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-2000"></div>
        
        {/* Cyber grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-2000"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:bg-cyan-400/20">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>New Micro SAAS Services Available</span>
        </div>
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            ZION
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl text-white mt-4 font-normal">
            The Future of Tech & AI
          </span>
        </h1>
        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
          Discover the world's most comprehensive marketplace for AI talent, micro SAAS services, 
          and cutting-edge technology solutions. Transform your business with our innovative platform.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            href="/services/"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Zap className="h-6 w-6 mr-3" />
            Explore Services
            <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/request-quote/"
            className="inline-flex items-center border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Users className="h-6 w-6 mr-3" />
            Get Started
          </Link>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">AI Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/contact/"
          className="group flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}