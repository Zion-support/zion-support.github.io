import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Shield, Database, Smartphone, CreditCard, FileText, Calendar, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Clock, DollarSign, PieChart, Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline prediction, and automated scheduling.',
      features: ['AI Priority Scoring', 'Smart Deadline Alerts', 'Team Collaboration', 'Progress Analytics', 'Mobile App'],
      pricing: '$19/month',
      popular: true,
      link: '/ai-task-manager',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-emerald-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Reports', 'Multi-Currency'],
      pricing: '$15/month',
      popular: true,
      link: '/ai-expense-tracker',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security analysis and breach monitoring.',
      features: ['Password Generation', 'Security Scoring', 'Breach Monitoring', '2FA Integration', 'Secure Sharing'],
      pricing: '$12/month',
      popular: false,
      link: '/ai-password-manager',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <FileText className="w-12 h-12 text-purple-400" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      features: ['Smart Templates', 'Auto Calculations', 'Payment Tracking', 'Client Portal', 'Tax Compliance'],
      pricing: '$25/month',
      popular: true,
      link: '/ai-invoice-generator',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Calendar className="w-12 h-12 text-orange-400" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Time Blocking', 'Conflict Resolution', 'Team Sync'],
      pricing: '$18/month',
      popular: false,
      link: '/ai-smart-calendar',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-indigo-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and predictive forecasting.',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Data Visualization', 'Export Reports'],
      pricing: '$29/month',
      popular: true,
      link: '/ai-analytics-dashboard',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-pink-400" />,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and multi-channel support.',
      features: ['24/7 Support', 'Multi-language', 'Ticket Routing', 'Knowledge Base', 'Human Handoff'],
      pricing: '$35/month',
      popular: false,
      link: '/ai-customer-support-bot',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Globe className="w-12 h-12 text-teal-400" />,
      title: 'AI Website Builder',
      description: 'AI-powered website creation with intelligent design suggestions and automated content generation.',
      features: ['AI Design Suggestions', 'Auto Content', 'SEO Optimization', 'Mobile Responsive', 'E-commerce Ready'],
      pricing: '$39/month',
      popular: true,
      link: '/ai-website-builder',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Mail className="w-12 h-12 text-yellow-400" />,
      title: 'AI Email Marketing',
      description: 'Automated email marketing campaigns with AI-powered personalization and performance optimization.',
      features: ['Smart Segmentation', 'Auto Personalization', 'A/B Testing', 'Performance Analytics', 'Template Library'],
      pricing: '$22/month',
      popular: false,
      link: '/ai-email-marketing',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-12 h-12 text-violet-400" />,
      title: 'AI HR Assistant',
      description: 'Human resources automation with AI-powered recruitment, onboarding, and employee management.',
      features: ['Resume Screening', 'Interview Scheduling', 'Onboarding Automation', 'Performance Tracking', 'Compliance'],
      pricing: '$45/month',
      popular: true,
      link: '/ai-hr-assistant',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: <PieChart className="w-12 h-12 text-rose-400" />,
      title: 'AI Financial Planner',
      description: 'Personal financial planning with AI-powered investment recommendations and budget optimization.',
      features: ['Investment Analysis', 'Budget Optimization', 'Goal Tracking', 'Risk Assessment', 'Tax Planning'],
      pricing: '$32/month',
      popular: false,
      link: '/ai-financial-planner',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: <Code2 className="w-12 h-12 text-slate-400" />,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistance with code generation, debugging, and optimization suggestions.',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Documentation', 'Multi-language'],
      pricing: '$28/month',
      popular: true,
      link: '/ai-code-assistant',
      gradient: 'from-slate-500 to-gray-500'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Rapid Deployment',
      description: 'Get up and running in minutes with our pre-built, customizable solutions.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'Cost Effective',
      description: 'Affordable pricing starting from $12/month with no hidden fees or setup costs.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible plans and unlimited usage.'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service.'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'The AI Task Manager Pro has revolutionized how we manage projects. The AI prioritization saves us 10+ hours per week.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      company: 'FinanceFlow',
      role: 'CFO',
      content: 'AI Expense Tracker made our financial management effortless. The receipt scanning and categorization is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Sarah Wilson',
      company: 'TechStart',
      role: 'CEO',
      content: 'The AI Invoice Generator has streamlined our billing process completely. We can now focus on growing our business.',
      rating: 5,
      avatar: 'SW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive micro SAAS services powered by AI. From task management to financial planning, we have the perfect solution for your business needs. Starting at $12/month." />
        <meta name="keywords" content="micro SAAS, AI services, business automation, task management, expense tracking, invoice generation, AI tools, business software" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">AI-Powered Micro Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Micro <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Powerful, AI-driven micro software solutions designed to solve specific business problems. 
              Affordable, scalable, and ready to transform your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose from our comprehensive suite of AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {microSaasServices.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20 inline-block`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing}</span>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Micro SAAS Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern technology and designed for maximum efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Join thousands of satisfied users who have transformed their business with our micro SAAS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-purple-400 text-xs">{testimonial.role}</p>
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
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Start your free trial today and experience the power of AI-driven micro SAAS solutions. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Sales
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Call: <a href="tel:+13024640950" className="font-semibold hover:text-white transition-colors">+1 302 464 0950</a></p>
                  <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:text-white transition-colors">kleber@ziontechgroup.com</a></p>
                  <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}