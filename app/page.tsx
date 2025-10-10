'use client';

import React, { Suspense } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ServiceCardSkeleton } from '../src/components/LoadingStates';
import LazyImage from './components/LazyImage';
import AnimatedCounter from './components/AnimatedCounter';
import Navigation from './components/Navigation';
import OptimizedImage from './components/OptimizedImage';
import EnhancedLoading from './components/EnhancedLoading';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import {
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  Cpu, 
  Database, 
  Cloud, 
  Smartphone, 
  Monitor, 
  Server, 
  Wifi, 
  Code, 
  Palette, 
  Search, 
  MessageSquare, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight as ArrowRightIcon, 
  Play, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Star as StarIcon, 
  Heart, 
  ThumbsUp, 
  Eye, 
  Activity, 
  PieChart, 
  TrendingDown, 
  RefreshCw, 
  Plus, 
  Minus, 
  X, 
  Menu, 
  Home, 
  User, 
  Mail, 
  Phone, 
  MapPin as MapPinIcon, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar as CalendarIcon, 
  Clock as ClockIcon, 
  Compass, 
  Navigation as NavIcon, 
  PieChart as PieChartIcon, 
  TrendingDown as TrendingDownIcon, 
  Activity as ActivityIcon, 
  MessageSquare as MessageSquareIcon, 
  Eye as EyeIcon, 
  Sparkles
} from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your specifications',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      features: ['Data Visualization', 'Business Intelligence', 'Data Warehousing', 'Real-time Analytics']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: BarChart },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'Outstanding cloud migration service. They made the complex process seamless and efficient.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, DataFlow Inc',
      content: 'Their data analytics platform gave us insights we never knew we had. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Zion Tech Group - Leading AI & IT Solutions"
        description="Transform your business with cutting-edge AI and IT solutions. Expert services in cloud computing, cybersecurity, custom development, and data analytics."
        keywords="AI solutions, IT services, cloud computing, cybersecurity, custom development, data analytics"
      />
      
      <EnhancedErrorBoundary>
        <PerformanceMonitor>
          <Navigation />
          
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Leading provider of cutting-edge artificial intelligence and information technology 
                solutions that drive innovation and growth for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      <AnimatedCounter end={parseInt(stat.number.replace(/\D/g, ''))} suffix={stat.number.replace(/\d/g, '')} />
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions designed to accelerate your digital transformation
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Trusted by industry leaders worldwide
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-purple-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/30">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of companies that have already revolutionized their operations 
                  with our AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    Get Started Today
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                  <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </PerformanceMonitor>
      </EnhancedErrorBoundary>
    </div>
  );
};

export default HomePage;