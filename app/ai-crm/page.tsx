'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, Brain, Users, BarChart, MessageSquare, Target, TrendingUp, Shield, Zap, Globe, Award, Calendar, FileText, PieChart, Activity, DollarSign, Eye, Settings, Database, Cloud, Smartphone, Laptop, Monitor } from 'lucide-react';

const AICRMPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior, engagement, and conversion probability.',
      benefits: ['95% accuracy in lead qualification', '40% increase in conversion rates', 'Automated lead prioritization']
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Chat Automation',
      description: 'AI chatbots that handle initial customer inquiries, qualify leads, and seamlessly transfer to human agents when needed.',
      benefits: ['24/7 customer engagement', 'Instant response times', 'Reduced support workload']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Advanced analytics that predict customer behavior, sales trends, and revenue opportunities using AI and machine learning.',
      benefits: ['Data-driven decisions', 'Revenue forecasting', 'Customer lifetime value prediction']
    },
    {
      icon: Target,
      title: 'Automated Follow-ups',
      description: 'Smart follow-up sequences that adapt based on customer behavior, engagement levels, and response patterns.',
      benefits: ['Personalized communication', 'Increased engagement', 'Automated nurturing']
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'AI automatically segments customers based on behavior, preferences, and value to enable targeted marketing campaigns.',
      benefits: ['Improved targeting', 'Higher conversion rates', 'Personalized experiences']
    },
    {
      icon: TrendingUp,
      title: 'Sales Forecasting',
      description: 'Accurate sales predictions using historical data, market trends, and customer behavior patterns.',
      benefits: ['Better planning', 'Revenue optimization', 'Risk mitigation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI CRM',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Mobile app access',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI features',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI analytics',
        'Chatbot integration',
        'Sales forecasting',
        'Custom workflows',
        'Priority support',
        'API access',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete AI CRM solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'Multi-user management'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'The AI lead scoring increased our conversion rate by 40% in just 3 months. It\'s like having a sales expert working 24/7.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'CEO',
      content: 'The predictive analytics helped us identify our most valuable customers and optimize our marketing spend. ROI improved by 300%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SalesPro LLC',
      role: 'Marketing Manager',
      content: 'The automated follow-ups and customer segmentation features have transformed our marketing campaigns. Engagement is up 60%.',
      rating: 5
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <SEOOptimizer
        title="AI-Powered CRM - Zion Tech Group | Intelligent Customer Relationship Management"
        description="Revolutionary AI-powered CRM with intelligent lead scoring, automated follow-ups, and predictive analytics. Boost sales by 40% with our advanced AI CRM solution. Starting at $99/month."
        keywords={['AI CRM', 'intelligent CRM', 'lead scoring', 'sales automation', 'customer relationship management', 'predictive analytics', 'AI chatbots']}
        canonicalUrl="https://ziontechgroup.com/ai-crm"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered CRM
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationships with intelligent AI that scores leads, automates follow-ups, and predicts sales opportunities. 
              Boost conversion rates by 40% and revenue by 300%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              AI-Powered Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Interest in ${plan.name} AI CRM Plan`}
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 cyber-card text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Sales?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of businesses using AI to boost their sales performance. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=AI CRM Free Trial Request`}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICRMPage;