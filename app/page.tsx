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
  Truck, 
  ChefHat, 
  Rocket, 
  Sprout, 
  Scale, 
  Package, 
  Music, 
  Video, 
  Camera, 
  Activity, 
  Factory, 
  ShoppingCart, 
  Calculator
} from 'lucide-react';

// Sample services data
const services = [
  {
    id: 1,
    title: 'AI Analytics Dashboard',
    description: 'Advanced AI-powered analytics and insights for your business data',
    icon: BarChart,
    popular: true,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization']
  },
  {
    id: 2,
    title: 'AI Automation Suite',
    description: 'Intelligent process automation to streamline your workflows',
    icon: Zap,
    popular: true,
    features: ['Workflow Automation', 'Task Scheduling', 'Smart Notifications', 'Process Optimization']
  },
  {
    id: 3,
    title: 'AI Content Generation',
    description: 'AI-powered content creation for blogs, social media, and marketing',
    icon: FileText,
    popular: true,
    features: ['Content Writing', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Matching']
  },
  {
    id: 4,
    title: 'AI Customer Support',
    description: 'Intelligent customer service with 24/7 AI-powered chatbots',
    icon: MessageSquare,
    popular: true,
    features: ['24/7 Support', 'Natural Language Processing', 'Multi-channel Support', 'Sentiment Analysis']
  },
  {
    id: 5,
    title: 'AI Data Analytics',
    description: 'Advanced data insights and business intelligence solutions',
    icon: Database,
    popular: true,
    features: ['Data Mining', 'Pattern Recognition', 'Predictive Modeling', 'Real-time Processing']
  },
  {
    id: 6,
    title: 'AI Marketing Automation',
    description: 'AI-driven marketing campaigns and customer engagement',
    icon: Target,
    popular: true,
    features: ['Campaign Optimization', 'Customer Segmentation', 'A/B Testing', 'ROI Tracking']
  }
];

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOHead 
          title="Zion Tech Group - AI & IT Solutions"
          description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services."
        />
        <Navigation />
        
        <main className="relative">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Transform Your Business with
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {' '}AI-Powered Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
                  Transform your business with our advanced AI capabilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-gray-300 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our AI Services
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Comprehensive AI solutions designed to accelerate your business growth and innovation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                          {service.title}
                        </h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={500} duration={2000} />
                    +
                  </div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={100} duration={2000} />
                    +
                  </div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={50} duration={2000} />
                    +
                  </div>
                  <div className="text-gray-300">AI Solutions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={99} duration={2000} />
                    %
                  </div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our experts to discuss your AI and IT needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Us: +1-302-464-0950</span>
                </button>
                <button className="border border-gray-300 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;