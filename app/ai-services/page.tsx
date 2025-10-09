'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Target, BarChart, Users, Settings, Shield, Clock, CheckCircle, ArrowRight, Star, Award, TrendingUp, Cpu, Database, Cloud, Code, Smartphone, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-analytics',
      name: 'AI Analytics Platform',
      icon: BarChart,
      price: '$299/month',
      description: 'Advanced AI-powered analytics platform that transforms raw data into actionable insights with 95% accuracy.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Machine learning insights',
        'API integration'
      ],
      benefits: [
        'Increase revenue by 40%',
        'Reduce analysis time by 80%',
        'Improve decision making',
        'Automate reporting processes'
      ],
      useCases: [
        'E-commerce sales optimization',
        'Customer behavior analysis',
        'Financial forecasting',
        'Marketing campaign optimization'
      ],
      testimonials: [
        {
          name: 'Sarah Johnson',
          company: 'TechCorp Inc.',
          quote: 'AI Analytics helped us increase our conversion rate by 35% in just 3 months.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      icon: Settings,
      price: '$399/month',
      description: 'Intelligent automation platform that streamlines business processes and eliminates manual tasks.',
      features: [
        'Process automation',
        'Document processing',
        'Email automation',
        'Task scheduling',
        'Exception handling',
        'Integration capabilities'
      ],
      benefits: [
        'Save 20+ hours per week',
        'Reduce human errors by 90%',
        'Improve process efficiency',
        'Scale operations easily'
      ],
      useCases: [
        'Invoice processing',
        'Customer onboarding',
        'Data entry automation',
        'Report generation'
      ],
      testimonials: [
        {
          name: 'Michael Chen',
          company: 'FinanceFlow LLC',
          quote: 'We automated 80% of our manual processes, saving $50K annually.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      icon: Users,
      price: '$199/month',
      description: '24/7 AI-powered customer support system that provides instant, accurate responses to customer queries.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Ticket routing',
        'Knowledge base integration',
        'Human handoff capability'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time to 2 seconds',
        'Increase customer satisfaction',
        'Available 24/7'
      ],
      useCases: [
        'E-commerce support',
        'SaaS customer service',
        'Technical support',
        'FAQ automation'
      ],
      testimonials: [
        {
          name: 'Emily Rodriguez',
          company: 'ShopEasy',
          quote: 'Our customer satisfaction increased by 45% with AI support.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      icon: PieChart,
      price: '$249/month',
      description: 'Intelligent data visualization platform that automatically creates stunning, interactive charts and dashboards.',
      features: [
        'Auto-chart generation',
        'Interactive dashboards',
        'Real-time updates',
        'Custom styling',
        'Export capabilities',
        'Mobile responsive'
      ],
      benefits: [
        'Create visualizations 10x faster',
        'Improve data comprehension',
        'Share insights easily',
        'Make data-driven decisions'
      ],
      useCases: [
        'Business intelligence',
        'Sales reporting',
        'Marketing analytics',
        'Financial analysis'
      ],
      testimonials: [
        {
          name: 'David Kim',
          company: 'DataDriven Corp',
          quote: 'We can now create complex visualizations in minutes instead of hours.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      icon: Mail,
      price: '$149/month',
      description: 'AI-powered email marketing platform that optimizes campaigns for maximum engagement and conversions.',
      features: [
        'Content generation',
        'Send time optimization',
        'Subject line testing',
        'Segmentation',
        'A/B testing',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 50%',
        'Boost click-through rates by 35%',
        'Reduce unsubscribe rates',
        'Save 15+ hours per week'
      ],
      useCases: [
        'Newsletter campaigns',
        'Product promotions',
        'Customer retention',
        'Lead nurturing'
      ],
      testimonials: [
        {
          name: 'Lisa Wang',
          company: 'MarketingPro',
          quote: 'Our email engagement rates doubled with AI optimization.',
          rating: 5
        }
      ]
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      icon: Target,
      price: '$349/month',
      description: 'Intelligent sales automation platform that identifies leads, nurtures prospects, and closes deals automatically.',
      features: [
        'Lead scoring',
        'Prospect identification',
        'Follow-up automation',
        'Pipeline management',
        'Sales forecasting',
        'CRM integration'
      ],
      benefits: [
        'Increase sales by 40%',
        'Reduce sales cycle by 30%',
        'Improve lead quality',
        'Automate follow-ups'
      ],
      useCases: [
        'B2B sales',
        'Lead generation',
        'Customer acquisition',
        'Sales pipeline management'
      ],
      testimonials: [
        {
          name: 'Robert Taylor',
          company: 'SalesForce Pro',
          quote: 'AI helped us close 60% more deals with less effort.',
          rating: 5
        }
      ]
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including analytics, automation, customer support, data visualization, email marketing, and sales automation. Transform your business with cutting-edge AI technology."
        keywords={['AI services', 'artificial intelligence', 'machine learning', 'automation', 'analytics', 'customer support', 'data visualization', 'email marketing', 'sales automation']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our comprehensive AI services help businesses automate processes, gain insights, and achieve unprecedented growth. 
              From analytics to automation, we provide cutting-edge AI solutions tailored to your needs.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 neon-text mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 neon-text mb-2">95%</div>
                <div className="text-gray-300">Process Automation</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 neon-text mb-2">$50M+</div>
                <div className="text-gray-300">Annual Savings</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 neon-text mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our AI Services
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <article key={service.id} className={`quantum-card p-8 energy-pulse transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.name}</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-blue-400 mr-2" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {service.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm italic mb-2">"{testimonial.quote}"</p>
                      <div className="text-cyan-400 text-sm font-medium">
                        {testimonial.name}, {testimonial.company}
                      </div>
                    </div>
                  ))}

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center justify-center inline-flex items-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI services to achieve unprecedented growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default AIServicesPage;