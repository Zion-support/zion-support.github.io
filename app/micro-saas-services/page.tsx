'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Clock,
  Target,
  Rocket,
  Award,
  Settings,
  Monitor,
  Heart,
  Calendar,
  Smartphone as PhoneIcon,
  Laptop,
  Server,
  Wifi as WifiIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Database as DatabaseIcon,
  BarChart3 as ChartIcon,
  MessageSquare as MessageIcon,
  FileText as FileIcon,
  Camera as CameraIcon,
  Mail as MailIcon,
  Phone as PhoneCallIcon,
  MapPin as MapIcon,
  DollarSign as DollarIcon,
  Clock as ClockIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Award as AwardIcon,
  Settings as SettingsIcon
} from 'lucide-react';

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      id: 'ai-task-manager',
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline prediction, and productivity insights.',
      icon: <TargetIcon className="w-8 h-8 text-cyan-400" />,
      price: '$29/month',
      features: [
        'AI-powered task prioritization',
        'Smart deadline prediction',
        'Productivity analytics',
        'Team collaboration tools',
        'Mobile & desktop sync',
        'Calendar integration'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce missed deadlines by 60%',
        'Real-time team collaboration',
        'Advanced reporting & insights'
      ],
      link: '/ai-task-manager',
      category: 'Productivity',
      popular: true
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with automatic categorization, receipt scanning, and budget optimization.',
      icon: <DollarIcon className="w-8 h-8 text-green-400" />,
      price: '$19/month',
      features: [
        'Automatic expense categorization',
        'Receipt scanning with OCR',
        'Budget alerts & recommendations',
        'Multi-currency support',
        'Tax preparation tools',
        'Expense reporting'
      ],
      benefits: [
        'Save 5+ hours per month',
        'Reduce expense errors by 80%',
        'Optimize budget allocation',
        'Simplify tax preparation'
      ],
      link: '/ai-expense-tracker',
      category: 'Finance'
    },
    {
      id: 'ai-password-manager',
      title: 'AI Password Manager',
      description: 'Advanced password security with AI-powered breach detection and smart password generation.',
      icon: <ShieldIcon className="w-8 h-8 text-red-400" />,
      price: '$15/month',
      features: [
        'AI-powered breach monitoring',
        'Smart password generation',
        'Biometric authentication',
        'Secure sharing',
        'Dark web monitoring',
        'Family plans available'
      ],
      benefits: [
        '100% secure password storage',
        'Real-time breach alerts',
        'One-click password updates',
        'Zero-knowledge architecture'
      ],
      link: '/ai-password-manager',
      category: 'Security',
      popular: true
    },
    {
      id: 'ai-invoice-generator',
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates, payment tracking, and client management.',
      icon: <FileIcon className="w-8 h-8 text-purple-400" />,
      price: '$25/month',
      features: [
        'AI-generated invoice templates',
        'Automatic payment tracking',
        'Client management system',
        'Multi-currency support',
        'Tax calculation',
        'Payment reminders'
      ],
      benefits: [
        'Reduce invoice creation time by 70%',
        'Improve payment collection by 45%',
        'Professional invoice templates',
        'Automated follow-ups'
      ],
      link: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      id: 'ai-health-tracker',
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      price: '$22/month',
      features: [
        'AI health insights',
        'Symptom tracking & analysis',
        'Medication reminders',
        'Health goal setting',
        'Doctor appointment scheduling',
        'Health report generation'
      ],
      benefits: [
        'Personalized health insights',
        'Early warning system',
        'Improved health outcomes',
        'Seamless doctor integration'
      ],
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      id: 'ai-smart-calendar',
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      price: '$18/month',
      features: [
        'AI-powered scheduling',
        'Meeting optimization',
        'Time blocking suggestions',
        'Conflict resolution',
        'Smart notifications',
        'Integration with all calendars'
      ],
      benefits: [
        'Optimize meeting efficiency by 50%',
        'Reduce scheduling conflicts',
        'Smart time management',
        'Seamless integrations'
      ],
      link: '/ai-smart-calendar',
      category: 'Productivity'
    },
    {
      id: 'ai-climate-solutions',
      title: 'AI Climate Solutions Pro',
      description: 'Environmental impact tracking with AI-powered sustainability recommendations and carbon footprint analysis.',
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      price: '$35/month',
      features: [
        'Carbon footprint tracking',
        'AI sustainability recommendations',
        'Environmental impact reports',
        'Green energy optimization',
        'Waste reduction strategies',
        'Sustainability goal tracking'
      ],
      benefits: [
        'Reduce carbon footprint by 30%',
        'Achieve sustainability goals',
        'Cost savings on energy',
        'Environmental compliance'
      ],
      link: '/ai-climate-solutions-pro',
      category: 'Sustainability',
      popular: true
    },
    {
      id: 'ai-email-assistant',
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses, priority sorting, and automated follow-ups.',
      icon: <MailIcon className="w-8 h-8 text-orange-400" />,
      price: '$20/month',
      features: [
        'AI email responses',
        'Priority email sorting',
        'Automated follow-ups',
        'Email templates',
        'Spam detection',
        'Email analytics'
      ],
      benefits: [
        'Save 3+ hours per day',
        'Improve response time by 60%',
        'Reduce email overwhelm',
        'Professional communication'
      ],
      link: '/ai-email-assistant',
      category: 'Communication'
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Advanced content creation with AI-powered writing, SEO optimization, and multi-platform publishing.',
      icon: <BrainIcon className="w-8 h-8 text-indigo-400" />,
      price: '$45/month',
      features: [
        'AI content writing',
        'SEO optimization',
        'Multi-platform publishing',
        'Content calendar',
        'Brand voice training',
        'Performance analytics'
      ],
      benefits: [
        '10x faster content creation',
        'SEO-optimized content',
        'Consistent brand voice',
        'Multi-platform reach'
      ],
      link: '/ai-content-generator',
      category: 'Marketing',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics with AI insights, predictive modeling, and automated reporting.',
      icon: <ChartIcon className="w-8 h-8 text-teal-400" />,
      price: '$55/month',
      features: [
        'AI-powered insights',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards',
        'Real-time monitoring',
        'Data visualization'
      ],
      benefits: [
        'Data-driven decisions',
        'Predict future trends',
        'Automated insights',
        'Customizable dashboards'
      ],
      link: '/ai-analytics-dashboard',
      category: 'Analytics'
    },
    {
      id: 'ai-chatbot-builder',
      title: 'AI Chatbot Builder',
      description: 'No-code chatbot creation with AI training, multi-channel deployment, and conversation analytics.',
      icon: <MessageIcon className="w-8 h-8 text-rose-400" />,
      price: '$40/month',
      features: [
        'No-code chatbot builder',
        'AI conversation training',
        'Multi-channel deployment',
        'Live chat integration',
        'Conversation analytics',
        'Custom branding'
      ],
      benefits: [
        '24/7 customer support',
        'Reduce support costs by 60%',
        'Improve response time',
        'Scale customer service'
      ],
      link: '/ai-chatbot-builder',
      category: 'Customer Service'
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with AI decision-making, process optimization, and error handling.',
      icon: <SettingsIcon className="w-8 h-8 text-amber-400" />,
      price: '$65/month',
      features: [
        'AI workflow automation',
        'Process optimization',
        'Error handling & recovery',
        'Custom integrations',
        'Performance monitoring',
        'Scalable automation'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Eliminate human errors',
        'Scale operations efficiently',
        'Custom business logic'
      ],
      link: '/ai-automation',
      category: 'Automation',
      popular: true
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Security', 'Business', 'Health', 'Sustainability', 'Communication', 'Marketing', 'Analytics', 'Customer Service', 'Automation'];

  const stats = [
    { number: '50+', label: 'Micro SAAS Services', icon: <RocketIcon className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Support', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services powered by AI. From task management to analytics, boost your business productivity with our innovative solutions." />
        <meta name="keywords" content="micro saas, ai services, business automation, productivity tools, ai solutions, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive suite of micro SAAS services powered by AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-micro-saas.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta name="twitter:description" content="Discover our comprehensive suite of micro SAAS services powered by AI." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-micro-saas.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Micro SAAS Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Powerful AI-driven micro applications designed to solve specific business challenges and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose from our comprehensive suite of AI-powered micro applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400 font-semibold">{service.category}</span>
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                    >
                      Get Started
                    </Link>
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
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start with any of our micro SAAS services and scale as you grow. All services include 24/7 AI support and 99.9% uptime guarantee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}