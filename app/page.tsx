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
  Cloud, 
  Database, 
  Code, 
  Smartphone, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation as NavIcon, 
  PieChart, 
  TrendingDown, 
  Activity, 
  MessageSquare, 
  Eye, 
  Sparkles,
  Cpu,
  Award,
  Clock,
  TrendingUp,
  HelpCircle as HelpCircleIcon,
  Ticket as TicketIcon,
  Link as LinkIcon,
  Megaphone as MegaphoneIcon,
  Radio as RadioIcon,
} from 'lucide-react';

// Type definitions
interface MicroSAASService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular: boolean;
  icon?: any;
  link?: string;
}

interface AIService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular: boolean;
  icon?: any;
  link?: string;
}

interface ITService {
  name: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  popular: boolean;
  icon?: any;
  link?: string;
}

const HomePage: React.FC = () => {
  const aiServices: AIService[] = [
    {
      name: 'AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',
      price: 'Starting at $5,000',
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning', 'ROI Analysis'],
      category: 'Consulting',
      popular: true,
      icon: Brain,
      link: '/ai-consulting'
    },
    {
      name: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your specific business needs.',
      price: 'Starting at $10,000',
      features: ['Custom Model Development', 'Data Preprocessing', 'Model Training', 'Performance Optimization'],
      category: 'Development',
      popular: true,
      icon: Cpu,
      link: '/machine-learning'
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      price: 'Starting at $8,000',
      features: ['Text Analysis', 'Chatbot Development', 'Sentiment Analysis', 'Language Translation'],
      category: 'Development',
      popular: false,
      icon: MessageSquare,
      link: '/ai-services'
    }
  ];

  const itServices: ITService[] = [
    {
      name: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      price: 'Starting at $15,000',
      features: ['Infrastructure Assessment', 'Migration Planning', 'Data Transfer', 'Security Implementation'],
      category: 'Infrastructure',
      popular: true,
      icon: Cloud,
      link: '/cloud-migration'
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      price: 'Starting at $12,000',
      features: ['Security Audit', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      category: 'Security',
      popular: true,
      icon: Shield,
      link: '/cybersecurity'
    },
    {
      name: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      price: 'Starting at $20,000',
      features: ['Process Analysis', 'Technology Integration', 'Change Management', 'Training & Support'],
      category: 'Transformation',
      popular: false,
      icon: Settings,
      link: '/digital-transformation'
    }
  ];

  const microSaasServices: MicroSAASService[] = [
    {
      name: 'Project Management Tool',
      description: 'Streamlined project management with AI-powered insights and automation.',
      price: '$29/month',
      features: ['Task Management', 'Team Collaboration', 'AI Insights', 'Progress Tracking'],
      category: 'Productivity',
      popular: true,
      icon: Target,
      link: '/micro-saas'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting dashboard for data-driven decision making.',
      price: '$49/month',
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'API Integration'],
      category: 'Analytics',
      popular: false,
      icon: BarChart,
      link: '/micro-saas'
    }
  ];

  const stats = [
    { number: 500, label: 'Projects Completed', icon: Target },
    { number: 300, label: 'Happy Clients', icon: Users },
    { number: 99.9, label: 'Uptime Guarantee', icon: Shield },
    { number: 24, label: 'Support Hours', icon: Clock }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and gain insights.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business.',
      benefits: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and ensure compliance.',
      benefits: ['Data Encryption', 'Access Control', 'Compliance', 'Threat Detection']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your systems for maximum performance and efficiency.',
      benefits: ['Speed Optimization', 'Resource Management', 'Monitoring', 'Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Transform your business with our cutting-edge AI and IT solutions. Expert consulting, custom development, and enterprise-grade security services."
        keywords="AI solutions, IT consulting, cloud migration, cybersecurity, digital transformation"
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
            Transform your business with our advanced AI capabilities and cutting-edge technology.
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.number} duration={2000} />
                  {stat.number === 99.9 ? '%' : stat.number === 24 ? '/7' : '+'}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2 text-left">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business processes and gain competitive advantages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IT Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure and optimize your technology stack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;