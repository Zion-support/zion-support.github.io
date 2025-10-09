'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cpu, Code, BarChart, Calendar, TrendingUp, CheckSquare, Users, Mail, Globe, Sparkles, Target, FileText, Phone, Mail as MailIcon, MapPin, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasServices = [
    {
      category: 'Productivity & Business Tools',
      services: [
        {
          name: 'AI Writing Assistant',
          description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.',
          features: ['50+ content templates', 'Multi-language support', 'SEO optimization', 'Brand voice consistency', 'Plagiarism detection', 'Grammar checking'],
          pricing: '$29/month',
          icon: Code,
          color: 'blue',
          popular: false
        },
        {
          name: 'Smart Analytics',
          description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting.',
          features: ['Real-time dashboards', 'AI-powered insights', 'Automated reporting', 'Predictive analytics', 'Custom metrics', 'Data visualization'],
          pricing: '$49/month',
          icon: BarChart,
          color: 'green',
          popular: true
        },
        {
          name: 'AI Scheduler',
          description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management.',
          features: ['Smart scheduling', 'Calendar integration', 'Meeting optimization', 'Time zone handling', 'Conflict resolution', 'Reminder automation'],
          pricing: '$19/month',
          icon: Calendar,
          color: 'purple',
          popular: false
        },
        {
          name: 'Expense Tracker',
          description: 'AI-powered expense management with receipt scanning, categorization, and budget insights.',
          features: ['Receipt scanning', 'Auto-categorization', 'Budget tracking', 'Expense reports', 'Tax preparation', 'Multi-currency support'],
          pricing: '$15/month',
          icon: TrendingUp,
          color: 'yellow',
          popular: false
        },
        {
          name: 'Task Manager Pro',
          description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking.',
          features: ['AI task prioritization', 'Team collaboration', 'Progress tracking', 'Deadline management', 'Project templates', 'Time tracking'],
          pricing: '$39/month',
          icon: CheckSquare,
          color: 'indigo',
          popular: true
        },
        {
          name: 'CRM Lite',
          description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.',
          features: ['AI lead scoring', 'Contact management', 'Sales pipeline', 'Email integration', 'Deal tracking', 'Performance analytics'],
          pricing: '$59/month',
          icon: Users,
          color: 'pink',
          popular: false
        }
      ]
    },
    {
      category: 'Marketing & Sales Tools',
      services: [
        {
          name: 'AI Design Studio',
          description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools.',
          features: ['AI-generated designs', 'Logo creation', 'Brand templates', 'Image editing', 'Social media graphics', 'Print materials'],
          pricing: '$35/month',
          icon: Sparkles,
          color: 'pink',
          popular: false
        },
        {
          name: 'Landing Page Builder',
          description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities.',
          features: ['Drag-and-drop builder', 'AI optimization', 'A/B testing', 'Mobile responsive', 'SEO tools', 'Analytics integration'],
          pricing: '$29/month',
          icon: Globe,
          color: 'blue',
          popular: true
        },
        {
          name: 'SEO Optimizer',
          description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions.',
          features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Rank tracking', 'Competitor analysis', 'Performance monitoring'],
          pricing: '$49/month',
          icon: Target,
          color: 'green',
          popular: false
        },
        {
          name: 'Ad Campaign Manager',
          description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.',
          features: ['Multi-platform ads', 'AI optimization', 'Budget management', 'Performance tracking', 'Audience targeting', 'ROI optimization'],
          pricing: '$79/month',
          icon: TrendingUp,
          color: 'yellow',
          popular: false
        }
      ]
    },
    {
      category: 'Developer Tools',
      services: [
        {
          name: 'Code Assistant',
          description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
          features: ['Code completion', 'Bug detection', 'Code optimization', 'Multi-language support', 'Documentation generation', 'Code review'],
          pricing: '$39/month',
          icon: Code,
          color: 'cyan',
          popular: true
        },
        {
          name: 'API Builder',
          description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools.',
          features: ['API design', 'Documentation generation', 'Testing tools', 'Version control', 'Rate limiting', 'Analytics'],
          pricing: '$59/month',
          icon: Cpu,
          color: 'indigo',
          popular: false
        },
        {
          name: 'Bug Tracker Pro',
          description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
          features: ['AI issue detection', 'Priority scoring', 'Resolution suggestions', 'Team collaboration', 'Progress tracking', 'Integration tools'],
          pricing: '$25/month',
          icon: Target,
          color: 'red',
          popular: false
        },
        {
          name: 'Doc Generator',
          description: 'Automatically generate technical documentation, API docs, and user guides from code.',
          features: ['Auto-documentation', 'API docs', 'User guides', 'Code comments', 'Version control', 'Export options'],
          pricing: '$19/month',
          icon: FileText,
          color: 'purple',
          popular: false
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'No Setup Required',
      description: 'Start using immediately with our cloud-based solutions',
      icon: Cpu,
      color: 'text-cyan-400'
    },
    {
      title: 'Affordable Pricing',
      description: 'Starting from just $15/month with no hidden fees',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our expert team',
      icon: Clock,
      color: 'text-blue-400'
    },
    {
      title: 'Regular Updates',
      description: 'Continuous improvements and new features',
      icon: Sparkles,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-enhanced particle-system-enhanced quantum-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch-enhanced" data-text="Micro SAAS Solutions">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-text-enhanced">
            50+ AI-Powered Tools for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Affordable, powerful AI-driven tools designed to solve specific business challenges. 
            No complex setup, no long-term contracts - just powerful solutions that work.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Why Choose Our Micro SAAS Tools?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card p-6 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className={`w-12 h-12 mx-auto mb-4 ${benefit.color}`} />
                <h3 className="text-xl font-bold text-white mb-3 neon-text-enhanced">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services by Category */}
        {microSaasServices.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className={`cyber-card-enhanced holographic-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-${service.color}-500/20 rounded-lg flex items-center justify-center`}>
                      <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white neon-text-enhanced">{service.name}</h3>
                      <div className="text-2xl font-bold text-cyan-400 neon-text-enhanced">{service.pricing}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href="/contact"
                      className="cyber-button-enhanced flex-1 text-center text-sm py-2"
                    >
                      Try Free
                    </a>
                    <a
                      href={`/micro-saas/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="border border-cyan-400 text-cyan-400 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center space-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Pricing Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card-enhanced holographic-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$15<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for small businesses and individuals</p>
              <ul className="space-y-2 text-left mb-8">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>1-3 tools</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Basic support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Standard features</span>
                </li>
              </ul>
              <a href="/contact" className="cyber-button-enhanced w-full">Get Started</a>
            </div>
            
            <div className="cyber-card-enhanced holographic-card p-8 text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$49<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Ideal for growing businesses</p>
              <ul className="space-y-2 text-left mb-8">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Up to 10 tools</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Advanced features</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>API access</span>
                </li>
              </ul>
              <a href="/contact" className="cyber-button-enhanced w-full">Get Started</a>
            </div>
            
            <div className="cyber-card-enhanced holographic-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$99<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">For large organizations</p>
              <ul className="space-y-2 text-left mb-8">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Unlimited tools</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>All features</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <a href="/contact" className="cyber-button-enhanced w-full">Get Started</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card-enhanced holographic-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS tools. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button-enhanced"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text-enhanced">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card-enhanced holographic-card p-6 text-center">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="cyber-card-enhanced holographic-card p-6 text-center">
              <MailIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 text-lg">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="cyber-card-enhanced holographic-card p-6 text-center">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;