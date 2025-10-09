'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Play, Sparkles, Zap, Brain, Cpu, Target, BarChart, Users, Award, Shield, Globe, Lock, Star, CheckCircle, TrendingUp, Activity, Eye, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock, Compass, Navigation, PieChart, TrendingDown, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const FuturisticHero: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    'Advanced AI Solutions',
    'Quantum Computing',
    'Autonomous Systems',
    'Digital Transformation',
    'Machine Learning',
    'Neural Networks',
    'Blockchain Technology',
    'IoT & Edge Computing'
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, [heroTexts.length]);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'hero_phone_number',
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Cyber Grid */}
        <div className="cyber-grid absolute inset-0 opacity-30"></div>
        
        {/* Neural Network Background */}
        <div className="neural-network-bg absolute inset-0"></div>
        
        {/* Matrix Rain Effect */}
        <div className="matrix-rain absolute inset-0"></div>
        
        {/* Particle Field */}
        <div className="particle-field absolute inset-0"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${
        isLoaded && isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}>
        {/* Logo and Brand */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 energy-pulse">
              <span className="text-white font-bold text-3xl">Z</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 cyber-text neon-text">
            Zion Tech Group
          </h1>
          <div className="text-2xl md:text-3xl text-cyan-400 mb-6 font-medium cyber-glow">
            <span className="inline-block min-h-[2.5rem]">
              {heroTexts[currentText]}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. 
          Transform your business with cutting-edge technology and achieve unprecedented growth.
        </p>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="font-bold text-white mb-3 text-lg">AI-Powered Solutions</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies
            </p>
          </div>
          
          <div className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="font-bold text-white mb-3 text-lg">Proven Results</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients
            </p>
          </div>
          
          <div className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bank-level security and compliance for your critical data and infrastructure
            </p>
          </div>
          
          <div className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
            <h3 className="font-bold text-white mb-3 text-lg">Global Reach</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Serving clients worldwide with 24/7 support and localized solutions
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="tel:+13024640950"
            onClick={handlePhoneClick}
            className="cyber-button text-lg px-8 py-4 group"
            aria-label="Call us at (302) 464-0950"
          >
            <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            Call Now: (302) 464-0950
          </a>
          
          <Link
            to="/contact"
            className="cyber-button text-lg px-8 py-4 group"
            style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
          >
            <Sparkles className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            Get Free Consultation
          </Link>
          
          <Link
            to="/micro-saas"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group flex items-center"
          >
            <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            View Our Micro SAAS
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
            <div className="text-white font-medium">Projects Completed</div>
            <div className="text-gray-400 text-sm">Successfully delivered</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 neon-text">1000+</div>
            <div className="text-white font-medium">Happy Clients</div>
            <div className="text-gray-400 text-sm">Worldwide</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 neon-text">99.9%</div>
            <div className="text-white font-medium">Uptime</div>
            <div className="text-gray-400 text-sm">Reliability</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 neon-text">24/7</div>
            <div className="text-white font-medium">Support</div>
            <div className="text-gray-400 text-sm">Always available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
});

FuturisticHero.displayName = 'FuturisticHero';
export default FuturisticHero;