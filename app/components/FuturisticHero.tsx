'use client';

import React, { memo } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code } from 'lucide-react';

const FuturisticHero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(139,92,246,0.1)_60deg,_transparent_120deg,_rgba(236,72,153,0.1)_180deg,_transparent_240deg,_rgba(0,255,255,0.1)_300deg,_transparent_360deg)] animate-spin-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Leading AI & IT Solutions Provider</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Transform Your Business
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl mt-4">
            with <span className="text-cyan-400">AI</span> & <span className="text-purple-400">Technology</span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Unlock the power of artificial intelligence and cutting-edge technology to revolutionize your business operations, 
          enhance productivity, and drive unprecedented growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="#services"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-lg"
          >
            Explore Our Services
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+1-302-464-0950"
            className="group inline-flex items-center justify-center bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <Phone className="w-6 h-6 mr-2" />
            Get Started Today
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">99%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
});

FuturisticHero.displayName = 'FuturisticHero';

export default FuturisticHero;