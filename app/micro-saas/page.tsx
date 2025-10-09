'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Check, Star, Zap, Shield, Clock, Users, TrendingUp } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      category: 'Productivity & Automation',
      services: [
        {
          name: 'AI Document Processor',
          price: '$49/month',
          description: 'Intelligent document analysis, extraction, and processing with 99.9% accuracy',
          features: ['OCR Technology', 'Data Extraction', 'Format Conversion', 'Batch Processing'],
          icon: '📝',
          color: 'text-green-400'
        },
        {
          name: 'AI Task Manager',
          price: '$79/month',
          description: 'Intelligent task prioritization, deadline prediction, and workflow optimization',
          features: ['Smart Prioritization', 'Deadline Alerts', 'Team Collaboration', 'Progress Tracking'],
          icon: '🎯',
          color: 'text-violet-400'
        },
        {
          name: 'AI Calendar Optimizer',
          price: '$59/month',
          description: 'Smart scheduling, meeting optimization, and productivity enhancement',
          features: ['Auto Scheduling', 'Meeting Optimization', 'Time Blocking', 'Conflict Resolution'],
          icon: '📅',
          color: 'text-teal-400'
        },
        {
          name: 'AI Workflow Engine',
          price: '$149/month',
          description: 'Intelligent workflow automation with decision trees and exception handling',
          features: ['Process Automation', 'Decision Trees', 'Exception Handling', 'Custom Rules'],
          icon: '⚡',
          color: 'text-cyan-400'
        }
      ]
    },
    {
      category: 'Marketing & Sales',
      services: [
        {
          name: 'AI Lead Scoring',
          price: '$79/month',
          description: 'Automated lead qualification and scoring to boost conversion rates by 300%',
          features: ['Behavioral Analysis', 'Scoring Algorithms', 'CRM Integration', 'Real-time Updates'],
          icon: '🎯',
          color: 'text-blue-400'
        },
        {
          name: 'AI Email Optimizer',
          price: '$69/month',
          description: 'Smart email marketing with subject line optimization and send time prediction',
          features: ['Subject Optimization', 'Send Time Prediction', 'A/B Testing', 'Performance Analytics'],
          icon: '📧',
          color: 'text-yellow-400'
        },
        {
          name: 'AI Social Media Manager',
          price: '$99/month',
          description: 'Automated social media posting, engagement analysis, and content optimization',
          features: ['Auto Posting', 'Engagement Analysis', 'Content Optimization', 'Multi-platform Support'],
          icon: '📱',
          color: 'text-rose-400'
        },
        {
          name: 'AI SEO Optimizer',
          price: '$89/month',
          description: 'Automated SEO analysis, keyword research, and content optimization',
          features: ['Keyword Research', 'Content Analysis', 'Rank Tracking', 'Technical SEO'],
          icon: '🔍',
          color: 'text-sky-400'
        }
      ]
    },
    {
      category: 'Development & Code',
      services: [
        {
          name: 'AI Code Reviewer',
          price: '$149/month',
          description: 'Automated code analysis, bug detection, and quality improvement suggestions',
          features: ['Code Analysis', 'Bug Detection', 'Security Scanning', 'Performance Optimization'],
          icon: '🔍',
          color: 'text-cyan-400'
        },
        {
          name: 'AI Report Generator',
          price: '$89/month',
          description: 'Automated business report generation with insights and visualizations',
          features: ['Auto Generation', 'Data Visualization', 'Custom Templates', 'Scheduled Reports'],
          icon: '📊',
          color: 'text-pink-400'
        },
        {
          name: 'AI Design Assistant',
          price: '$119/month',
          description: 'AI-powered design tools for logos, graphics, and visual content creation',
          features: ['Logo Generation', 'Graphic Design', 'Brand Guidelines', 'Template Library'],
          icon: '🎨',
          color: 'text-indigo-400'
        }
      ]
    },
    {
      category: 'Business Intelligence',
      services: [
        {
          name: 'AI Sales Predictor',
          price: '$129/month',
          description: 'Predictive analytics for sales forecasting and revenue optimization',
          features: ['Sales Forecasting', 'Revenue Prediction', 'Trend Analysis', 'Risk Assessment'],
          icon: '📈',
          color: 'text-orange-400'
        },
        {
          name: 'AI Customer Insights',
          price: '$119/month',
          description: 'Deep customer behavior analysis, sentiment tracking, and personalized recommendations',
          features: ['Behavior Analysis', 'Sentiment Tracking', 'Personalization', 'Churn Prediction'],
          icon: '🎯',
          color: 'text-indigo-400'
        },
        {
          name: 'AI Performance Monitor',
          price: '$139/month',
          description: 'Real-time system monitoring, performance analysis, and optimization recommendations',
          features: ['Real-time Monitoring', 'Performance Analysis', 'Alert System', 'Optimization Tips'],
          icon: '📈',
          color: 'text-amber-400'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          name: 'AI Password Manager',
          price: '$39/month',
          description: 'Intelligent password generation, storage, and security monitoring',
          features: ['Password Generation', 'Secure Storage', 'Breach Monitoring', 'Multi-device Sync'],
          icon: '🔐',
          color: 'text-red-400'
        },
        {
          name: 'AI Compliance Checker',
          price: '$159/month',
          description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulations',
          features: ['GDPR Compliance', 'HIPAA Monitoring', 'SOX Compliance', 'Audit Reports'],
          icon: '🔐',
          color: 'text-red-400'
        }
      ]
    },
    {
      category: 'Finance & Operations',
      services: [
        {
          name: 'AI Expense Tracker',
          price: '$49/month',
          description: 'Automated expense categorization, receipt processing, and budget analysis',
          features: ['Receipt Processing', 'Auto Categorization', 'Budget Analysis', 'Tax Preparation'],
          icon: '💰',
          color: 'text-emerald-400'
        },
        {
          name: 'AI Inventory Manager',
          price: '$109/month',
          description: 'Smart inventory tracking, demand forecasting, and stock optimization',
          features: ['Inventory Tracking', 'Demand Forecasting', 'Stock Optimization', 'Reorder Alerts'],
          icon: '📊',
          color: 'text-lime-400'
        }
      ]
    },
    {
      category: 'Communication & Support',
      services: [
        {
          name: 'AI Chat Assistant',
          price: '$99/month',
          description: 'Intelligent customer support chatbot with natural language processing',
          features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Escalation Handling'],
          icon: '💬',
          color: 'text-purple-400'
        },
        {
          name: 'AI Voice Assistant',
          price: '$129/month',
          description: 'Voice-controlled business automation and hands-free productivity tools',
          features: ['Voice Commands', 'Hands-free Operation', 'Multi-language Support', 'Custom Commands'],
          icon: '🎵',
          color: 'text-fuchsia-400'
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Choose any 3 Micro SAAS tools',
        'Basic support',
        'Standard integrations',
        'Monthly reports',
        'Up to 5 users'
      ],
      popular: false,
      color: 'border-gray-600'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Choose any 8 Micro SAAS tools',
        'Priority support',
        'Advanced integrations',
        'Weekly reports',
        'Up to 25 users',
        'Custom workflows'
      ],
      popular: true,
      color: 'border-cyan-500'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited Micro SAAS tools',
        '24/7 dedicated support',
        'Custom integrations',
        'Real-time reports',
        'Unlimited users',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false,
      color: 'border-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg quantum-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-glow">
            50+ AI-Powered Tools for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business operations with our comprehensive suite of AI-driven micro SAAS applications. 
            Each tool is designed to solve specific business challenges with cutting-edge artificial intelligence.
          </p>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Flexible pricing plans designed to scale with your business needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card hologram-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Services by Category */}
        {microSaasServices.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center neon-text">
              {category.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.services.map((service, serviceIndex) => (
                <article
                  key={serviceIndex}
                  className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <div className={`text-2xl font-bold ${service.color} mb-2`}>
                      {service.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 ${service.color} hover:bg-opacity-20 border border-current`}
                  >
                    Learn More
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="cyber-card hologram-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 holographic-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SAAS solutions 
              to streamline operations and boost productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center text-lg px-8 py-4"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;