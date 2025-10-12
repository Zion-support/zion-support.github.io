'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Mail,
  MessageSquare,
  FileText,
  Cpu,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Settings,
  Brain,
  Database,
  Smartphone,
  Wifi,
  Lock,
  Camera,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Calendar
} from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing tools.',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Build intelligent chatbots for customer support and engagement.',
      features: ['Custom chatbot creation', 'Multi-channel support', 'Analytics dashboard', 'Easy integration'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics and insights for your business.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Export reports'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Automate and optimize your email marketing campaigns.',
      features: ['Email automation', 'A/B testing', 'Personalization', 'Performance tracking'],
      pricing: 'Starting at $25/month',
      link: '/ai-email-assistant',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Generate and qualify leads with AI-powered tools.',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration'],
      pricing: 'Starting at $59/month',
      link: '/ai-lead-generation',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      title: 'AI Document Processor',
      description: 'Automate document processing and data extraction.',
      features: ['OCR technology', 'Data extraction', 'Document classification', 'Batch processing'],
      pricing: 'Starting at $35/month',
      link: '/ai-document-processor',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management and project organization.',
      features: ['Smart scheduling', 'Priority management', 'Team collaboration', 'Progress tracking'],
      pricing: 'Starting at $19/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking and financial management.',
      features: ['Receipt scanning', 'Expense categorization', 'Budget tracking', 'Financial reports'],
      pricing: 'Starting at $15/month',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management and scheduling.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: 'Starting at $18/month',
      link: '/ai-smart-calendar'
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and sustainability solutions powered by AI.',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations'],
      pricing: 'Starting at $35/month',
      link: '/ai-climate-solutions-pro',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security.',
      features: ['Password generation', 'Security monitoring', 'Breach alerts', 'Multi-device sync'],
      pricing: 'Starting at $12/month',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation and financial document management.',
      features: ['Template library', 'Automated calculations', 'Payment tracking', 'Tax compliance'],
      pricing: 'Starting at $22/month',
      link: '/ai-invoice-generator',
      popular: true
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'AI Tools' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS services. AI-powered tools and solutions for modern businesses." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity software, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI-powered micro SaaS applications designed to solve specific business challenges and boost productivity.
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
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold mb-4 text-sm">
                  {service.pricing}
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Trusted by Thousands of Users
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered micro SaaS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServicesPage;