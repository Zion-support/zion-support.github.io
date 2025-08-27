import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star, Users, Zap, Shield, Globe } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
          <Zap className="h-4 w-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Leading AI & Technology Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Business with
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Innovation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          Zion Tech Group delivers cutting-edge technology solutions, expert talent, and comprehensive services 
          to accelerate your digital transformation and drive sustainable growth.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="text-white text-lg font-semibold">4.9/5</span>
            <span className="text-slate-400 text-sm">Client Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-green-500" />
            <span className="text-white text-lg font-semibold">500+</span>
            <span className="text-slate-400 text-sm">Happy Clients</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-blue-500" />
            <span className="text-white text-lg font-semibold">25+</span>
            <span className="text-slate-400 text-sm">Countries Served</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-purple-500" />
            <span className="text-white text-lg font-semibold">99.9%</span>
            <span className="text-slate-400 text-sm">Uptime</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 px-8 py-4 text-lg font-semibold transition-all duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>

        {/* Video Demo Button */}
        <div className="flex items-center justify-center space-x-3">
          <Button variant="ghost" size="lg" className="text-slate-300 hover:text-white hover:bg-white/5">
            <Play className="h-5 w-5 mr-2" />
            Watch Demo
          </Button>
          <span className="text-slate-400 text-sm">2 min overview</span>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <p className="text-slate-400 text-sm mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-slate-300 font-semibold text-lg">Microsoft</div>
            <div className="text-slate-300 font-semibold text-lg">Google</div>
            <div className="text-slate-300 font-semibold text-lg">Amazon</div>
            <div className="text-slate-300 font-semibold text-lg">IBM</div>
            <div className="text-slate-300 font-semibold text-lg">Oracle</div>
            <div className="text-slate-300 font-semibold text-lg">Salesforce</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-float">
        <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/4 left-10 animate-float-delayed">
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/2 left-20 animate-float-slow">
        <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;