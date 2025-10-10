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
  Quote, 
  User, 
  Building, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Eye, 
  MousePointer, 
  Volume2, 
  Accessibility, 
  Wrench, 
  Cog, 
  Layers, 
  Network, 
  Database as DatabaseIcon, 
  Server as ServerIcon, 
  Cloud as CloudIcon, 
  Smartphone as SmartphoneIcon, 
  Monitor as MonitorIcon, 
  Wifi as WifiIcon, 
  Code as CodeIcon, 
  Palette as PaletteIcon, 
  Search as SearchIcon, 
  MessageSquare as MessageSquareIcon, 
  Calendar as CalendarIcon, 
  FileText as FileTextIcon, 
  TrendingUp as TrendingUpIcon, 
  Award as AwardIcon, 
  Clock as ClockIcon, 
  CheckCircle2 as CheckCircle2Icon, 
  ArrowRight as ArrowRightIcon2, 
  Play as PlayIcon, 
  Download as DownloadIcon, 
  ExternalLink as ExternalLinkIcon, 
  ChevronRight as ChevronRightIcon, 
  Star as StarIcon2, 
  Quote as QuoteIcon, 
  User as UserIcon, 
  Building as BuildingIcon, 
  Briefcase as BriefcaseIcon, 
  GraduationCap as GraduationCapIcon, 
  Heart as HeartIcon, 
  ThumbsUp as ThumbsUpIcon, 
  MessageCircle as MessageCircleIcon, 
  Share2 as Share2Icon, 
  Bookmark as BookmarkIcon, 
  Eye as EyeIcon, 
  MousePointer as MousePointerIcon, 
  Volume2 as Volume2Icon, 
  Accessibility as AccessibilityIcon, 
  Wrench as WrenchIcon, 
  Cog as CogIcon, 
  Layers as LayersIcon, 
  Network as NetworkIcon
} from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'IT Services',
      description: 'Comprehensive IT services including cloud migration, cybersecurity, and infrastructure management.',
      features: ['Cloud Migration', 'Cybersecurity', 'Infrastructure Management', 'System Integration']
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions and modern technologies.',
      features: ['Process Automation', 'Digital Strategy', 'Technology Consulting', 'Change Management']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and business intelligence solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and compliance services.',
      features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert consulting services to help you make informed technology decisions.',
      features: ['Technology Strategy', 'Architecture Design', 'Implementation Planning', 'Training & Support']
    }
  ];

  const stats = [
    { number: 500, label: 'Projects Completed', suffix: '+' },
    { number: 100, label: 'Enterprise Clients', suffix: '+' },
    { number: 50, label: 'AI Models Deployed', suffix: '+' },
    { number: 99.9, label: 'Uptime Guarantee', suffix: '%' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'The digital transformation services provided by Zion Tech Group were exceptional. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their cybersecurity solutions gave us peace of mind. Professional, reliable, and innovative.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Zion Tech Group - AI & IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services."
        keywords="AI solutions, IT services, digital transformation, cybersecurity, data analytics"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI & Technology
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
            Transform your business with our advanced AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.number} duration={2000} />
                  {stat.suffix}
                </div>
                <div className="text-gray-300">{stat.label}</div>
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
              Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star className="w-5 h-5 text-yellow-400" key={i} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss how our AI and IT solutions can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;