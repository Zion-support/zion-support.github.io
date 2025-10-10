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
  Code, 
  Smartphone, 
  Monitor, 
  Server, 
  Wifi, 
  HardDrive, 
  Terminal, 
  GitBranch,
  Layers,
  Workflow,
  Bot,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  Star as StarIcon,
  Quote,
  User,
  Building,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Calendar,
  Clock as ClockIcon,
  DollarSign,
  PieChart,
  BarChart3,
  LineChart,
  Activity,
  Zap as ZapIcon,
  Target as TargetIcon,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Wifi as WifiIcon,
  HardDrive as HardDriveIcon,
  Terminal as TerminalIcon,
  GitBranch as GitBranchIcon,
  Layers as LayersIcon,
  Workflow as WorkflowIcon,
  Bot as BotIcon,
  Sparkles as SparklesIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  Clock as ClockIcon2,
  CheckCircle2 as CheckCircle2Icon,
  ArrowUpRight as ArrowUpRightIcon,
  ChevronRight as ChevronRightIcon,
  Play as PlayIcon,
  Download as DownloadIcon,
  ExternalLink as ExternalLinkIcon,
  StarIcon as StarIcon2,
  Quote as QuoteIcon,
  User as UserIcon,
  Building as BuildingIcon,
  MapPinIcon as MapPinIcon2,
  PhoneIcon as PhoneIcon2,
  MailIcon as MailIcon2,
  Calendar as CalendarIcon,
  ClockIcon as ClockIcon3,
  DollarSign as DollarSignIcon,
  PieChart as PieChartIcon,
  BarChart3 as BarChart3Icon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon
} from 'lucide-react';

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
    <div className="absolute inset-0 bg-black/20" />
    
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Transform Your Business with
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
          Transform your business with our advanced AI capabilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Get Started Today
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
            <Play className="inline-block mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-400" />
            <span>500+ Successful Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400" />
            <span>4.9/5 Client Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="text-purple-400" />
            <span>Industry Recognition</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for automation, prediction, and intelligent decision-making.",
      features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our analytics solutions.",
      features: ["Business Intelligence", "Real-time Analytics", "Data Visualization", "Predictive Modeling"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications with cutting-edge technologies.",
      features: ["React/Next.js", "E-commerce", "Progressive Web Apps", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRight className="inline-block ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Our track record speaks for itself. See why businesses choose Zion Tech Group for their technology needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={parseInt(stat.number.replace(/\D/g, ''))} />
                  {stat.number.includes('%') && '%'}
                  {stat.number.includes('+') && '+'}
                  {stat.number.includes('/') && '/'}
                </div>
                <p className="text-cyan-100 text-lg font-semibold">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => (
  <section className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Let's discuss how our AI-powered solutions can transform your business. 
          Contact us today for a free consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-cyan-500/20 rounded-lg">
              <Phone className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1-302-464-0950</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-cyan-500/20 rounded-lg">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-cyan-500/20 rounded-lg">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Get a Free Quote</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Main HomePage Component
const HomePage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Zion Tech Group - AI-Powered Enterprise Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities."
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
      <PerformanceMonitor />
    </ErrorBoundary>
  );
};

export default HomePage;