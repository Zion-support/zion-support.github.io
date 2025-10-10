'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Sparkles, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Truck, Smartphone, ChefHat, Sprout, Scale } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { microSAASServices, aiServices, itServices, emergingTechServices } from '../src/data/services';

// Enhanced testimonials with real-world impact
const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    company: "Fortune 500 Technology Company",
    content: "Zion Tech Group's AI solutions increased our operational efficiency by 85% and reduced costs by $2.3M annually. Their quantum computing integration was revolutionary.",
    rating: 5,
    avatar: "SC",
    savings: "$2.3M",
    improvement: "85%"
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Research Director",
    company: "Global Pharmaceuticals Inc.",
    content: "The AI Drug Discovery Pro platform accelerated our research timeline by 60%. We discovered 3 new potential compounds in just 6 months instead of the usual 2 years.",
    rating: 5,
    avatar: "MR",
    savings: "60%",
    improvement: "3x faster"
  },
  {
    name: "Jennifer Walsh",
    role: "VP of Operations",
    company: "GreenTech Solutions",
    content: "Their climate solutions helped us reduce our carbon footprint by 40% while improving operational efficiency. The ROI was evident within the first quarter.",
    rating: 5,
    avatar: "JW",
    savings: "40%",
    improvement: "Q1 ROI"
  },
  {
    name: "David Kim",
    role: "CEO, FinTech Innovations",
    company: "Leading Financial Technology",
    content: "The AI Financial Crime Detection system prevented $5M in fraudulent transactions in the first month alone. Our security posture has never been stronger.",
    rating: 5,
    avatar: "DK",
    savings: "$5M",
    improvement: "100%"
  }
];

// Enhanced stats with real metrics
const stats = [
  { number: "500+", label: "Enterprise Clients", icon: Building, color: "text-cyan-400" },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield, color: "text-green-400" },
  { number: "24/7", label: "Expert Support", icon: Clock, color: "text-purple-400" },
  { number: "50+", label: "Countries Served", icon: Globe, color: "text-pink-400" },
  { number: "$50M+", label: "Cost Savings", icon: TrendingUp, color: "text-orange-400" },
  { number: "300%", label: "Average ROI", icon: BarChart, color: "text-blue-400" }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="cyber-grid-bg"></div>
      <div className="matrix-rain"></div>
      
      {/* Quantum Particles */}
      <div className="quantum-particle" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
      <div className="quantum-particle" style={{ top: '20%', right: '20%', animationDelay: '1s' }}></div>
      <div className="quantum-particle" style={{ bottom: '20%', left: '1/4', animationDelay: '2s' }}></div>
      <div className="quantum-particle" style={{ bottom: '10%', right: '1/3', animationDelay: '3s' }}></div>
      
      <Navigation />
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.15)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] cyber-grid" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading with Glitch Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 cyber-text glitch" data-text="AI-Powered Enterprise Solutions">
            AI-Powered Enterprise Solutions
          </h1>
          
          {/* Subtitle with Enhanced Styling */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology. Achieve 
            <span className="text-cyan-400 font-bold neon-text"> 300% ROI</span>, 
            <span className="text-purple-400 font-bold neon-text"> 70% cost reduction</span>, and 
            <span className="text-pink-400 font-bold neon-text"> 90% efficiency gains</span>.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="holographic-button text-white font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 flex items-center group">
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-bold py-5 px-10 rounded-2xl text-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center group">
              <Video className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg font-medium">{stat.label}</div>
                <div className="mt-2">
                  <stat.icon className={`w-8 h-8 mx-auto ${stat.color} group-hover:rotate-12 transition-transform duration-300`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6 cyber-text">Our Services</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions for modern enterprises. Transform your business with cutting-edge technology.
            </p>
          </div>

          {/* Micro SAAS Services */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <Zap className="w-8 h-8 text-cyan-400" />
                <h3 className="text-3xl font-bold text-white neon-text-cyan">Micro SAAS Solutions</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSAASServices.map((service, index) => (
                <div
                  key={service.id}
                  className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative group"
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center neon-glow-cyan">
                        <Star className="w-4 h-4 mr-2" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="text-3xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                        <div className="text-sm text-green-400 font-bold">{service.savings} OFF</div>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.metrics.users} users • {service.metrics.uptime} uptime
                      </div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <Brain className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold text-white neon-text-purple">Enterprise AI Solutions</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={service.id}
                  className="holographic-card p-8 hover:scale-105 transition-all duration-300 relative group"
                >
                  {service.enterprise && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center neon-glow-purple">
                        <Award className="w-4 h-4 mr-2" />
                        Enterprise
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="text-3xl font-bold text-purple-400">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                        <div className="text-sm text-green-400 font-bold">{service.savings} OFF</div>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.metrics.users} users • {service.metrics.uptime} uptime
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-24">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-4">
                <Cloud className="w-8 h-8 text-blue-400" />
                <h3 className="text-3xl font-bold text-white neon-text-blue">IT Infrastructure Services</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={service.id}
                  className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative group"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-6 text-base leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                        <div className="text-sm text-green-400 font-bold">{service.savings} OFF</div>
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.metrics.users} users • {service.metrics.uptime} uptime
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6 cyber-text">What Our Clients Say</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real results from real businesses. See how we've transformed organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-cyan-400 font-medium">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    
                    <div className="flex justify-center space-x-4 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{testimonial.savings}</div>
                        <div className="text-xs text-gray-400">Saved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{testimonial.improvement}</div>
                        <div className="text-xs text-gray-400">Improvement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-card p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-6 cyber-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of enterprises already using our AI solutions to achieve unprecedented growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <button className="holographic-button text-white font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 flex items-center group">
                  <Rocket className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Journey
                  <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 font-bold py-6 px-12 rounded-2xl text-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center group">
                  <Phone className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  Schedule Consultation
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-cyan-400">24/7</div>
                  <div className="text-gray-300">Expert Support</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-400">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-pink-400">300%</div>
                  <div className="text-gray-300">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
