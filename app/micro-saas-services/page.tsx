'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Brain,
  Cloud,
  Shield,
  Database,
  Code,
  Smartphone,
  Cpu,
  Globe,
  Lock,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Settings,
  FileText,
  BarChart3,
  MessageSquare,
  Calendar,
  CreditCard,
  Zap
} from 'lucide-react';

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, automation, and team collaboration.',
      features: ['Smart prioritization', 'Automated scheduling', 'Progress tracking', 'Team collaboration', 'Deadline optimization', 'Workload balancing'],
      pricing: 'Starting at $29/month',
      link: '/ai-task-manager',
      popular: true,
      category: 'Productivity',
      rating: 4.8,
      reviews: 234
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI categorization, budget insights, and financial forecasting.',
      features: ['Auto categorization', 'Budget alerts', 'Receipt scanning', 'Financial reports', 'Tax preparation', 'Multi-currency support'],
      pricing: 'Starting at $19/month',
      link: '/ai-expense-tracker',
      popular: false,
      category: 'Finance',
      rating: 4.6,
      reviews: 189
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'Auto-generation', 'Breach monitoring', 'Multi-device sync', '2FA integration', 'Security scoring'],
      pricing: 'Starting at $15/month',
      link: '/ai-password-manager',
      popular: false,
      category: 'Security',
      rating: 4.7,
      reviews: 156
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered customization, tracking, and payment management.',
      features: ['Auto-generation', 'Custom templates', 'Payment tracking', 'Tax calculations', 'Recurring billing', 'Client portal'],
      pricing: 'Starting at $25/month',
      link: '/ai-invoice-generator',
      popular: true,
      category: 'Business',
      rating: 4.9,
      reviews: 278
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization', 'Automated reports', 'API integration'],
      pricing: 'Starting at $49/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      rating: 4.8,
      reviews: 312
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer service, support automation, and lead generation.',
      features: ['No-code builder', 'Multi-channel support', 'Sentiment analysis', 'Custom training', 'Live chat integration', 'Analytics dashboard'],
      pricing: 'Starting at $39/month',
      link: '/ai-chatbot-builder',
      popular: false,
      category: 'Customer Service',
      rating: 4.5,
      reviews: 198
    },
    {
      icon: <Calendar className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent scheduling with AI-powered optimization, conflict resolution, and meeting insights.',
      features: ['Smart scheduling', 'Conflict detection', 'Meeting optimization', 'Integration sync', 'Time zone handling', 'Meeting analytics'],
      pricing: 'Starting at $22/month',
      link: '/ai-smart-calendar',
      popular: false,
      category: 'Productivity',
      rating: 4.4,
      reviews: 167
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and sustainability solutions powered by AI for carbon footprint tracking.',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations', 'ESG reporting', 'Supply chain analysis'],
      pricing: 'Starting at $35/month',
      link: '/ai-climate-solutions-pro',
      popular: true,
      category: 'Sustainability',
      rating: 4.7,
      reviews: 145
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification and scoring using AI to identify high-value prospects.',
      features: ['Lead scoring', 'Behavioral analysis', 'Predictive modeling', 'CRM integration', 'Automated follow-ups', 'ROI tracking'],
      pricing: 'Starting at $45/month',
      link: '/ai-lead-scoring',
      popular: true,
      category: 'Sales',
      rating: 4.6,
      reviews: 203
    },
    {
      icon: <FileText className="w-8 h-8 text-amber-500" />,
      title: 'AI Document Processor',
      description: 'Automated document processing with AI-powered extraction, classification, and data validation.',
      features: ['Document extraction', 'Auto-classification', 'Data validation', 'OCR technology', 'Batch processing', 'API integration'],
      pricing: 'Starting at $32/month',
      link: '/ai-document-processor',
      popular: false,
      category: 'Document Management',
      rating: 4.5,
      reviews: 134
    },
    {
      icon: <Mail className="w-8 h-8 text-rose-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered sorting, responses, and productivity optimization.',
      features: ['Smart sorting', 'Auto-responses', 'Priority detection', 'Scheduling assistance', 'Template suggestions', 'Spam filtering'],
      pricing: 'Starting at $18/month',
      link: '/ai-email-assistant',
      popular: false,
      category: 'Communication',
      rating: 4.3,
      reviews: 189
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content creation and scheduling.',
      features: ['Content generation', 'Auto-scheduling', 'Engagement analysis', 'Hashtag optimization', 'Multi-platform support', 'Performance tracking'],
      pricing: 'Starting at $42/month',
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      rating: 4.7,
      reviews: 267
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'AI Security Monitor',
      description: 'Real-time security monitoring with AI-powered threat detection and incident response.',
      features: ['Threat detection', 'Real-time monitoring', 'Incident response', 'Compliance tracking', 'Security reports', 'Alert management'],
      pricing: 'Starting at $55/month',
      link: '/ai-security-monitor',
      popular: false,
      category: 'Security',
      rating: 4.8,
      reviews: 156
    },
    {
      icon: <Cpu className="w-8 h-8 text-violet-500" />,
      title: 'AI Code Assistant',
      description: 'Intelligent code completion, debugging, and optimization powered by advanced AI models.',
      features: ['Code completion', 'Bug detection', 'Code optimization', 'Documentation generation', 'Multi-language support', 'IDE integration'],
      pricing: 'Starting at $38/month',
      link: '/ai-code-assistant',
      popular: true,
      category: 'Development',
      rating: 4.9,
      reviews: 298
    },
    {
      icon: <Globe className="w-8 h-8 text-sky-500" />,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO optimization with AI-powered keyword research and content optimization.',
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Competitor analysis', 'Technical SEO', 'Performance reports'],
      pricing: 'Starting at $28/month',
      link: '/ai-seo-optimizer',
      popular: false,
      category: 'Marketing',
      rating: 4.4,
      reviews: 178
    },
    {
      icon: <Database className="w-8 h-8 text-lime-500" />,
      title: 'AI Data Cleaner',
      description: 'Automated data cleaning and validation with AI-powered error detection and correction.',
      features: ['Data validation', 'Error detection', 'Auto-correction', 'Duplicate removal', 'Format standardization', 'Quality reports'],
      pricing: 'Starting at $24/month',
      link: '/ai-data-cleaner',
      popular: false,
      category: 'Data Management',
      rating: 4.5,
      reviews: 142
    }
  ];

  const stats = [
    { number: '16+', label: 'Micro SAAS Products', icon: <Brain className="w-6 h-6" /> },
    { number: '25K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Phone className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupCo',
      content: 'The AI Task Manager has revolutionized how we manage our projects. The AI prioritization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'TechFlow',
      content: 'AI Expense Tracker saved us hours every week. The automatic categorization is spot-on.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataDriven Inc.',
      content: 'The AI Analytics Dashboard provides insights we never knew we needed. Game changer for our business.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Solutions</title>
        <meta name="description" content="Discover our collection of AI-powered micro SAAS solutions including task management, expense tracking, password management, and more. Streamline your business operations." />
        <meta name="keywords" content="micro SAAS, AI solutions, task management, expense tracking, password manager, invoice generator, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Discover our collection of AI-powered micro SAAS solutions including task management, expense tracking, password management, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta name="twitter:description" content="Discover our collection of AI-powered micro SAAS solutions including task management, expense tracking, password management, and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Powerful AI-driven micro applications designed to streamline your business operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Products</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                AI-powered solutions designed to solve specific business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">{service.icon}</div>
                    <div className="ml-2 sm:ml-3 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-purple-300 transition-colors truncate">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base line-clamp-2">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center">
                      <div className="flex items-center mr-1 sm:mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't just take our word for it - hear from users who have transformed their workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Streamline Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Choose from our collection of AI-powered micro SAAS solutions and start optimizing your workflows today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Trial
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Us
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