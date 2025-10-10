'use client';
import React from 'react';
import { Calendar, Clock, Zap, Users, BarChart3, CheckCircle, ArrowRight, Bell, Smartphone, Globe } from 'lucide-react';

const AISmartCalendarProPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Intelligent Scheduling',
      description: 'AI-powered scheduling that automatically finds optimal meeting times for all participants.'
    },
    {
      icon: Clock,
      title: 'Time Zone Management',
      description: 'Automatic time zone detection and conversion for global teams and clients.'
    },
    {
      icon: Zap,
      title: 'Smart Reminders',
      description: 'Context-aware reminders that adapt to your work patterns and preferences.'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Advanced team scheduling with conflict resolution and resource optimization.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Detailed analytics on time usage, meeting patterns, and productivity trends.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Intelligent notifications that reduce noise and focus on what matters most.'
    }
  ];

  const benefits = [
    'Save 2+ hours per week on scheduling',
    'Reduce meeting conflicts by 80%',
    'Improve team productivity by 35%',
    'Automate routine calendar tasks',
    'Enhance work-life balance',
    'Integrate with 100+ apps and tools'
  ];

  const useCases = [
    {
      title: 'Executive Assistants',
      description: 'Streamline complex scheduling for executives and busy professionals.',
      icon: '👔'
    },
    {
      title: 'Sales Teams',
      description: 'Optimize client meetings and follow-up scheduling for sales success.',
      icon: '💼'
    },
    {
      title: 'Project Managers',
      description: 'Coordinate team schedules and project milestones efficiently.',
      icon: '📋'
    },
    {
      title: 'Remote Teams',
      description: 'Manage distributed teams across different time zones and locations.',
      icon: '🌍'
    }
  ];

  const metrics = [
    { label: 'Time Saved', value: '2.5hrs', color: 'text-green-400' },
    { label: 'Conflict Reduction', value: '80%', color: 'text-blue-400' },
    { label: 'Productivity Gain', value: '+35%', color: 'text-purple-400' },
    { label: 'User Satisfaction', value: '97%', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart Calendar
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {' '}Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent calendar management that automates scheduling, optimizes your time, 
              and enhances productivity with AI-powered insights and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border border-blue-400 text-blue-400 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Real improvements from our AI smart calendar platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive calendar management powered by advanced artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 inline-block">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your calendar management with measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <div className="text-white font-semibold">Week 1: Setup</div>
                    <div className="text-gray-300 text-sm">Configure calendar integrations</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <div className="text-white font-semibold">Week 2: Training</div>
                    <div className="text-gray-300 text-sm">Train AI models on your patterns</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <div className="text-white font-semibold">Week 3: Optimization</div>
                    <div className="text-gray-300 text-sm">Fine-tune settings and preferences</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <div className="text-white font-semibold">Week 4: Go Live</div>
                    <div className="text-gray-300 text-sm">Full AI calendar deployment</div>
                  </div>
                </div>

<!-- Merged from origin/main -->

import React from 'react';
import { Helmet } from 'react-helmet-async';

const aismartcalendarPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Smart Calendar | Zion Tech Group</title>
        <meta name="description" content="Professional ai smart calendar services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai smart calendar, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Smart Calendar
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ai smart calendar services powered by advanced AI and cutting-edge technology.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <div>
                <a 
                  href="/" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ← Back to Home
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by professionals and teams worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Calendar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the calendar revolution with AI-powered intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISmartCalendarProPage;

<!-- Merged from origin/main -->
      </div>
    </>
  );
};

export default aismartcalendarPage;
=======
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
'use client';
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Zap, 

  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Smartphone,
  Mail,
  Video,
  MapPin,
  Bell,
  Settings,
  BarChart,
  Target,
  Award,
  Shield,
  Globe
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
} from 'lucide-react';

const AISmartCalendarPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {

      icon: Brain,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent meeting scheduling that considers all participants\' preferences, time zones, and availability patterns.',
      benefits: ['95% reduction in scheduling conflicts', 'Automatic time zone handling', 'Smart meeting duration optimization']
    },
    {
      icon: Zap,
      title: 'Smart Conflict Resolution',
      description: 'Automatically resolves scheduling conflicts by finding alternative times and suggesting optimal meeting slots.',
      benefits: ['Real-time conflict detection', 'Alternative time suggestions', 'Priority-based scheduling']
    },
    {
      icon: BarChart,
      title: 'Productivity Analytics',
      description: 'Advanced analytics to track meeting patterns, productivity metrics, and time optimization opportunities.',
      benefits: ['Meeting effectiveness scoring', 'Time waste identification', 'Productivity trend analysis']
    },
    {
      icon: Target,
      title: 'Goal-Oriented Planning',
      description: 'AI-driven goal tracking that automatically schedules time blocks for important tasks and projects.',
      benefits: ['Automatic goal prioritization', 'Smart time blocking', 'Progress tracking']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with end-to-end encryption and GDPR compliance for all calendar data.',
      benefits: ['End-to-end encryption', 'GDPR compliant', 'SOC 2 certified']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Sync',
      description: 'Seamless integration with Google Calendar, Outlook, Apple Calendar, and 50+ other platforms.',
      benefits: ['Universal calendar sync', 'Real-time updates', 'Cross-platform compatibility']
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { Calendar, Clock, Users, CheckCircle, Star, ArrowRight, Zap, Brain, Shield, Globe, Phone, Mail, MapPin, Award, TrendingUp, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Settings, FileText, MessageSquare, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function AISmartCalendarPage() {
  const features = [
    {
      icon: Calendar,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent calendar management with automatic conflict resolution and optimal time slot suggestions.'
    },
    {
      icon: Brain,
      title: 'Smart Meeting Optimization',
      description: 'AI analyzes meeting patterns to suggest better times and reduce scheduling conflicts.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team scheduling with availability detection and automatic coordination.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: Globe,
      title: 'Multi-Timezone Support',
      description: 'Automatic timezone detection and conversion for global teams and clients.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Detailed analytics on meeting patterns, productivity metrics, and time optimization.'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',

        'Email notifications',
        'Mobile app access',
        'Standard support'
      ],
      popular: false
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
      description: 'Perfect for small teams',
      features: [
        'Up to 5 users',
        'Basic AI scheduling',
        'Calendar integration',
        'Email support',
        'Mobile app access'
      ],
      popular: false
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
    },
    {
      name: 'Professional',
      price: '$89',
      period: '/month',

      description: 'Ideal for growing businesses',
      features: [
        'Unlimited calendars',
        'Advanced AI features',
        'Team collaboration tools',
        'Analytics dashboard',
        'Priority support',
        'API access'
      ],
      popular: true
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Team collaboration tools',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',

      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Full AI capabilities',
        'Custom workflows',
        '24/7 support',
        'API access',
        'Advanced security',
        'Custom training'
      ],
      popular: false
    }
  ];

>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',

      content: 'AI Smart Calendar has revolutionized how we manage our time. The AI suggestions have increased our productivity by 40%.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, GlobalCorp',

      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Advanced security',
        'Dedicated support',
        'Custom AI training',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      content: 'AI Smart Calendar has revolutionized how we manage our time. The AI scheduling alone saves us 10+ hours per week.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Manager, Global Corp',
      content: 'The conflict resolution feature is incredible. It automatically finds the best meeting times for our international team.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Freelance Consultant',
      content: 'As a freelancer, this tool helps me manage multiple client calendars seamlessly. The productivity insights are game-changing.',
      rating: 5
    }
  ];

>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}

      content: 'The team collaboration features are incredible. We\'ve eliminated 90% of scheduling conflicts since implementing this.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Director, InnovateLabs',
      content: 'The analytics insights help us understand our meeting patterns and optimize our time better than ever.',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Smart Calendar Pro - Intelligent Scheduling & Time Management | Zion Tech Group"
        description="Revolutionary AI-powered calendar management with smart scheduling, conflict resolution, and team collaboration. Boost productivity by 40% with intelligent time optimization."
        keywords="AI calendar, smart scheduling, time management, productivity tools, team collaboration, meeting optimization"
      />
      
      <Navigation />
      
      {/* Hero Section */}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Smart Calendar Pro</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Smart Calendar Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary calendar management with AI-powered scheduling, conflict resolution, 
              and intelligent meeting optimization. Used by Fortune 500 companies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">5,000+ Users</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">40% Productivity Boost</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
              </a>
            </div>
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">

              Powerful Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your time and boost productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">

              Choose the plan that fits your team size and needs
            </p>
          </div>
          
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">

      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                <Calendar className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart Calendar Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The world's most intelligent calendar system. Let AI handle your scheduling, optimize your time, and boost your productivity with smart automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of calendar management with AI-powered automation and intelligent insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-fit mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400 ring-2 ring-cyan-400/50' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
                      Most Popular
                    </span>
                  </div>
                )}

                
                <div className="text-center mb-6">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
                
                <div className="text-center mb-6">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>

                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Start Free Trial
                </button>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
              </div>
            ))}
          </div>
        </div>

      {/* Testimonials Section */}
      <section className="py-20">
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their productivity
            </p>
          </div>

          
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">

            Ready to Transform Your Calendar?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven scheduling.
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >

              <Calendar className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
            </a>
          </div>
        </div>
      </section>

      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by 10,000+ Users
          </h2>
          <p className="text-xl text-gray-300">
            See what our customers are saying about AI Smart Calendar Pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Calendar?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of professionals who have revolutionized their time management with AI Smart Calendar Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-cyan-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
    </div>
  );
};

export default AISmartCalendarPage;
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======

      <Footer />
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003

