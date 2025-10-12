'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Globe,
  Zap,
  Target,
  Clock,
  DollarSign,
  Sparkles,
  Settings,
  Smartphone,
  Shield,
  BarChart3,
  FileText,
  Mail,
  MessageSquare,
  TrendingUp,
  Calendar,
  Camera,
  Database
} from 'lucide-react';

export default function MicroSAASServicesPage() {
  const services = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered task prioritization and resource allocation.',
      features: ['AI task prioritization', 'Resource optimization', 'Risk analysis', 'Progress tracking'],
      pricing: '$29/month',
      marketPrice: '$50-80/month',
      link: '/ai-project-manager',
      popular: true,
      icon: <Settings className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'AI Expense Tracker',
      description: 'Smart expense management with AI-powered receipt scanning and categorization.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget insights', 'Tax optimization'],
      pricing: '$9.99/month',
      marketPrice: '$15-30/month',
      link: '/ai-expense-tracker',
      popular: false,
      icon: <DollarSign className="w-6 h-6 text-green-400" />
    },
    {
      title: 'AI Password Manager',
      description: 'Advanced password security with AI-powered breach detection and biometric authentication.',
      features: ['AI password generation', 'Breach monitoring', 'Biometric security', 'Multi-device sync'],
      pricing: '$4.99/month',
      marketPrice: '$8-15/month',
      link: '/ai-password-manager',
      popular: false,
      icon: <Shield className="w-6 h-6 text-red-400" />
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered pricing suggestions and payment tracking.',
      features: ['Auto-invoice generation', 'Smart pricing', 'Payment tracking', 'Multi-currency support'],
      pricing: '$19.99/month',
      marketPrice: '$30-50/month',
      link: '/ai-invoice-generator',
      popular: true,
      icon: <FileText className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and team collaboration.',
      features: ['Smart prioritization', 'Team collaboration', 'Time tracking', 'Progress analytics'],
      pricing: '$15/month',
      marketPrice: '$25-40/month',
      link: '/ai-task-manager',
      popular: false,
      icon: <Target className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI-powered insights and wellness recommendations.',
      features: ['Health monitoring', 'AI insights', 'Wellness tips', 'Goal tracking'],
      pricing: '$12/month',
      marketPrice: '$20-35/month',
      link: '/ai-health-tracker',
      popular: false,
      icon: <Users className="w-6 h-6 text-pink-400" />
    },
    {
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling and meeting optimization.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: '$8/month',
      marketPrice: '$15-25/month',
      link: '/ai-smart-calendar',
      popular: false,
      icon: <Calendar className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content creation and scheduling.',
      features: ['Content creation', 'Auto-scheduling', 'Engagement analytics', 'Multi-platform support'],
      pricing: '$25/month',
      marketPrice: '$40-70/month',
      link: '/ai-social-media-manager',
      popular: true,
      icon: <MessageSquare className="w-6 h-6 text-indigo-400" />
    },
    {
      title: 'AI Email Marketing',
      description: 'Intelligent email campaigns with AI-powered personalization and automation.',
      features: ['AI personalization', 'Campaign automation', 'A/B testing', 'Analytics dashboard'],
      pricing: '$35/month',
      marketPrice: '$60-100/month',
      link: '/ai-email-marketing',
      popular: false,
      icon: <Mail className="w-6 h-6 text-orange-400" />
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Services', icon: <Cpu className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Freelance Designer',
      role: 'Business Owner',
      content: 'The AI Project Manager has revolutionized how I handle client projects. I\'m 40% more productive now.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      company: 'StartupCo',
      role: 'CEO',
      content: 'AI Expense Tracker has saved us hours every week. The receipt scanning is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      company: 'Consulting Firm',
      role: 'Accountant',
      content: 'The AI Invoice Generator has streamlined our billing process completely. Highly recommended!',
      rating: 5,
      avatar: 'LT'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Specialized Business Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of specialized micro SAAS services including AI project management, expense tracking, password management, and more. Boost your productivity." />
        <meta name="keywords" content="micro SAAS, AI tools, project management, expense tracking, password manager, invoice generator, business productivity" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Services - Specialized Business Tools" />
        <meta property="og:description" content="Discover our collection of specialized micro SAAS services including AI project management, expense tracking, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services - Specialized Business Tools" />
        <meta name="twitter:description" content="Discover our collection of specialized micro SAAS services including AI project management, expense tracking, and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-micro-saas.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Micro SAAS Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Specialized micro services designed for specific business needs and workflows. 
                Boost your productivity with our collection of AI-powered tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Collection
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized tools designed to solve specific business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:bg-white/15 ${
                  service.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20'
                }`}>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.pricing}</span>
                      <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of users already boosting their productivity with our micro SAAS tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-cyan-500/30">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Boost Your Productivity?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start using our micro SAAS tools today and transform how you work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Questions? Call us: <a href="tel:+13024640950" className="underline hover:text-white">+1 302 464 0950</a></p>
                  <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}