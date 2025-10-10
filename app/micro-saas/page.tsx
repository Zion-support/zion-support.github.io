'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Settings, Calendar, CheckSquare, FileText, 
  MessageCircle, Heart, DollarSign, Box, Monitor, Package,
  Star, CheckCircle, ExternalLink, Play, Download, Mail,
  Phone, MapPin, Clock, Award, Rocket, Lightbulb
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, and marketing copy.',
      icon: FileText,
      price: '$29/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      benefits: [
        'Save 80% time on content creation',
        'Increase content output by 500%',
        'Improve SEO rankings',
        'Maintain consistent brand voice'
      ],
      stats: { users: '10,000+', rating: '4.9', savings: '$50K+' },
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      description: 'Smart email management and automation platform with AI-powered responses and scheduling.',
      icon: Mail,
      price: '$19/month',
      features: [
        'AI email composition',
        'Smart scheduling',
        'Email templates',
        'Spam filtering',
        'Follow-up automation',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce email time by 70%',
        'Improve response rates by 40%',
        'Never miss important emails',
        'Professional communication'
      ],
      stats: { users: '8,500+', rating: '4.8', savings: '$30K+' },
      cta: 'Try Now'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Intelligent expense management with automated categorization and financial insights.',
      icon: TrendingUp,
      price: '$15/month',
      features: [
        'Receipt scanning',
        'Auto-categorization',
        'Budget tracking',
        'Tax preparation',
        'Expense reports',
        'Financial analytics'
      ],
      benefits: [
        'Save 5 hours/week on expense tracking',
        'Reduce accounting errors by 90%',
        'Automated tax preparation',
        'Real-time budget monitoring'
      ],
      stats: { users: '12,000+', rating: '4.7', savings: '$25K+' },
      cta: 'Get Started'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation and management with AI-powered pricing suggestions.',
      icon: FileText,
      price: '$25/month',
      features: [
        'Auto-invoice generation',
        'Smart pricing suggestions',
        'Payment tracking',
        'Recurring billing',
        'Multi-currency support',
        'Client portal'
      ],
      benefits: [
        'Create invoices in 30 seconds',
        'Increase payment speed by 60%',
        'Reduce billing errors by 95%',
        'Professional invoice templates'
      ],
      stats: { users: '7,200+', rating: '4.9', savings: '$35K+' },
      cta: 'Start Free'
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generator',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      icon: Target,
      price: '$39/month',
      features: [
        'AI prospect identification',
        'Lead scoring algorithm',
        'Email outreach automation',
        'CRM integration',
        'Lead nurturing campaigns',
        'Performance analytics'
      ],
      benefits: [
        'Generate 300% more qualified leads',
        'Reduce lead cost by 50%',
        'Improve conversion rates by 80%',
        'Automated follow-up sequences'
      ],
      stats: { users: '5,800+', rating: '4.8', savings: '$75K+' },
      cta: 'Free Trial'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered task prioritization and resource allocation.',
      icon: Calendar,
      price: '$35/month',
      features: [
        'AI task prioritization',
        'Resource optimization',
        'Risk assessment',
        'Progress tracking',
        'Team collaboration',
        'Performance insights'
      ],
      benefits: [
        'Complete projects 40% faster',
        'Reduce project overruns by 60%',
        'Optimize team productivity',
        'Predict and prevent delays'
      ],
      stats: { users: '9,100+', rating: '4.7', savings: '$45K+' },
      cta: 'Try Free'
    },
    {
      id: 'ai-crm-assistant',
      name: 'AI CRM Assistant',
      description: 'Smart customer relationship management with AI-powered insights and automation.',
      icon: Users,
      price: '$45/month',
      features: [
        'AI customer insights',
        'Automated follow-ups',
        'Sales forecasting',
        'Pipeline management',
        'Customer segmentation',
        'Performance analytics'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve customer retention by 50%',
        'Reduce manual data entry by 80%',
        'Predict customer behavior'
      ],
      stats: { users: '6,500+', rating: '4.9', savings: '$60K+' },
      cta: 'Start Trial'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Intelligent inventory optimization with AI-powered demand forecasting and stock management.',
      icon: Package,
      price: '$32/month',
      features: [
        'Demand forecasting',
        'Stock optimization',
        'Reorder automation',
        'Supplier management',
        'Cost analysis',
        'Inventory analytics'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts by 90%',
        'Optimize cash flow',
        'Automated reordering'
      ],
      stats: { users: '4,200+', rating: '4.6', savings: '$40K+' },
      cta: 'Get Started'
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'Custom AI Models',
      description: 'Tailored AI models trained on your specific data and business requirements.',
      icon: Brain,
      price: 'Custom'
    },
    {
      title: 'White-label Solutions',
      description: 'Fully customizable white-label versions of our micro SAAS products.',
      icon: Code,
      price: 'Custom'
    },
    {
      title: 'API Integration',
      description: 'Comprehensive APIs for seamless integration with your existing systems.',
      icon: Settings,
      price: 'Custom'
    },
    {
      title: 'Dedicated Support',
      description: '24/7 dedicated support with dedicated account managers.',
      icon: Users,
      price: 'Custom'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 50,000+ Businesses Worldwide
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                Micro SAAS Solutions
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">
                for Modern Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Powerful, AI-powered micro SAAS tools designed to automate and optimize your business processes. 
              Start with our free trials and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50K+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$2M+</div>
                <div className="text-sm text-gray-300">Customer Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">4.8★</div>
                <div className="text-sm text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SAAS tools designed to streamline your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={service.id}
                className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                  service.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{service.stats.users}</div>
                      <div className="text-xs text-gray-400">Users</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{service.stats.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{service.stats.savings}</div>
                      <div className="text-xs text-gray-400">Saved</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="w-full cyber-button text-center py-3 block"
                    >
                      {service.cta}
                    </a>
                    <a
                      href={`/demo?service=${service.id}`}
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-3 rounded-lg font-semibold text-center block transition-colors"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Watch Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom micro SAAS solutions tailored to your enterprise needs with dedicated support and advanced features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={index}
                className="cyber-card group hover:scale-105 transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{feature.price}</div>
                  <a
                    href="/contact?type=enterprise"
                    className="cyber-button-secondary w-full text-center py-3 block"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Start with our free trials and experience the power of AI-driven micro SAAS solutions. 
            No credit card required for most services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;