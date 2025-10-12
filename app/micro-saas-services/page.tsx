'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings, Cpu, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content automatically using advanced AI technology with 99.9% accuracy.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content scheduling', 'Plagiarism detection'],
      pricing: '$99/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content Creation'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation for maximum productivity.',
      features: ['Smart prioritization', 'Team collaboration', 'Progress tracking', 'Deadline alerts', 'Time analytics'],
      pricing: '$29/month',
      link: '/ai-task-manager',
      category: 'Productivity'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI-powered categorization and financial insights.',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Financial reports', 'Tax preparation'],
      pricing: '$19/month',
      link: '/ai-expense-tracker',
      category: 'Finance'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Multi-device sync', '2FA integration'],
      pricing: '$39/month',
      link: '/ai-password-manager',
      category: 'Security'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered customization and payment tracking.',
      features: ['Template library', 'Auto-calculation', 'Payment tracking', 'Client management', 'Tax compliance'],
      pricing: '$49/month',
      link: '/ai-invoice-generator',
      category: 'Business'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI-powered insights and personalized recommendations.',
      features: ['Health metrics', 'Goal tracking', 'AI insights', 'Progress reports', 'Doctor integration'],
      pricing: '$24/month',
      link: '/ai-health-tracker',
      category: 'Health'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization and meeting insights.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync', 'Productivity analytics'],
      pricing: '$34/month',
      link: '/ai-smart-calendar',
      category: 'Productivity'
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and sustainability solutions powered by AI for eco-conscious businesses.',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations', 'ESG compliance'],
      pricing: '$79/month',
      link: '/ai-climate-solutions-pro',
      category: 'Sustainability'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: 'AI Project Manager',
      description: 'AI-powered project management with intelligent resource allocation and risk prediction.',
      features: ['Resource optimization', 'Risk prediction', 'Timeline forecasting', 'Team coordination', 'Progress analytics'],
      pricing: '$59/month',
      link: '/ai-project-manager',
      category: 'Project Management'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business analytics with AI-powered insights and predictive modeling.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports', 'Data visualization', 'Trend analysis'],
      pricing: '$89/month',
      link: '/ai-analytics-dashboard',
      category: 'Analytics'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI-Powered Intelligence',
      description: 'All our micro SAAS solutions leverage cutting-edge AI technology with 99.9% accuracy.'
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows in minutes.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Pricing',
      description: 'Flexible pricing plans that grow with your business needs and budget.'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-500" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from certified professionals to ensure your success.'
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: 'Proven Results',
      description: 'Over 10,000+ satisfied customers with measurable ROI and productivity gains.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI Content Generator has revolutionized our content creation process. We increased our output by 300% while maintaining quality.',
      rating: 5,
      industry: 'Technology'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'The AI Task Manager keeps our team organized and productive. We saved 15 hours per week on project management.',
      rating: 5,
      industry: 'Data Analytics'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'These micro SAAS solutions are game-changers. The AI Expense Tracker alone saved us $50K in tax deductions.',
      rating: 5,
      industry: 'Software Development'
    },
    {
      name: 'David Kim',
      company: 'HealthTech Innovations',
      content: 'The AI Health Tracker helped our team maintain better work-life balance. Productivity increased by 40%.',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      name: 'Lisa Martinez',
      company: 'EcoSolutions Ltd.',
      content: 'AI Climate Solutions helped us achieve carbon neutrality 2 years ahead of schedule. Incredible impact!',
      rating: 5,
      industry: 'Sustainability'
    },
    {
      name: 'James Wilson',
      company: 'FinanceFlow',
      content: 'The AI Analytics Dashboard provides insights we never had before. Our decision-making is now data-driven.',
      rating: 5,
      industry: 'Finance'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Micro SAAS Services - AI-Powered Business Solutions | Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS services powered by AI. From task management to expense tracking, boost productivity with intelligent solutions. Starting at $19/month."
        keywords="micro SAAS, AI tools, task management, expense tracking, password manager, business automation, productivity tools, AI solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>

        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-6">
                <span className="text-purple-300 text-sm font-medium">🚀 AI-Powered Micro Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
                Micro SAAS Services
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Specialized micro services designed to streamline your business operations with AI-powered solutions. 
                <span className="text-purple-300 font-semibold"> Contact us: +1 302 464 0950</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#services" 
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View All Services
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {microSAAS.map((service, index) => (
                <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative hover:scale-105">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold text-lg">{service.pricing}</span>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 mb-6">
                <span className="text-green-300 text-sm font-medium">✨ Why Choose Our Micro SAAS?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4 bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We deliver specialized solutions that focus on specific business needs with proven results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 mb-6">
                <span className="text-yellow-300 text-sm font-medium">💬 What Our Users Say</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
                What Our Users Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Don't just take our word for it - hear from users who have transformed their workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-blue-300 text-xs font-medium mt-1">{testimonial.industry}</p>
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
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
                <div className="relative">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                    <span className="text-white text-sm font-medium">🚀 Ready to Get Started?</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Streamline Your Business?
                  </h2>
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Choose from our range of micro SAAS solutions to optimize your business operations.
                    <span className="block mt-2 text-lg">Contact us: <span className="font-semibold">+1 302 464 0950</span> | <span className="font-semibold">kleber@ziontechgroup.com</span></span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-white/25"
                    >
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link 
                      to="/ai-services" 
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      View AI Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASServicesPage;
