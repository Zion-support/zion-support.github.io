'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  Shield,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  FileText,
  PieChart,
  Activity,
  DollarSign,
  Cloud
} from 'lucide-react';

export default function AICRMAssistantPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms',
      benefits: ['Predictive lead scoring', 'Behavioral analysis', 'Conversion probability']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      title: 'Smart Email Automation',
      description: 'Send personalized emails at the perfect time with AI-driven content',
      benefits: ['Personalized messaging', 'Optimal send times', 'A/B testing automation']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior and preferences',
      benefits: ['Dynamic segmentation', 'Behavioral patterns', 'Custom segments']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Predictive Analytics',
      description: 'Forecast sales, churn, and customer lifetime value with AI insights',
      benefits: ['Sales forecasting', 'Churn prediction', 'LTV analysis']
    },
    {
      icon: <Activity className="w-8 h-8 text-red-400" />,
      title: 'Real-time Insights',
      description: 'Get instant insights and recommendations for better customer relationships',
      benefits: ['Live dashboards', 'Instant alerts', 'Action recommendations']
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: 'Data Security',
      description: 'Enterprise-grade security with GDPR compliance and data encryption',
      benefits: ['GDPR compliant', 'End-to-end encryption', 'SOC 2 certified']
    }
  ];

  const integrations = [
    {
      name: 'Salesforce',
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      description: 'Seamless integration with Salesforce CRM'
    },
    {
      name: 'HubSpot',
      icon: <Target className="w-6 h-6 text-orange-400" />,
      description: 'Connect with HubSpot for enhanced marketing automation'
    },
    {
      name: 'Slack',
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      description: 'Get notifications and updates directly in Slack'
    },
    {
      name: 'Zapier',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      description: 'Connect with 3000+ apps through Zapier'
    },
    {
      name: 'Google Workspace',
      icon: <Mail className="w-6 h-6 text-green-400" />,
      description: 'Sync with Gmail, Calendar, and Drive'
    },
    {
      name: 'Microsoft 365',
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      description: 'Integrate with Outlook, Teams, and Office 365'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 contacts',
        'Basic AI insights',
        'Email automation',
        'Lead scoring',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and sales teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Predictive analytics',
        'Custom integrations',
        'Team collaboration',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contacts',
        'All AI features',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'TechStart Inc.',
      content: 'The AI CRM Assistant has transformed our sales process. We\'ve seen a 45% increase in lead conversion rates and our sales team is 60% more productive.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'David Chen',
      company: 'Growth Marketing Co.',
      content: 'The predictive analytics are incredibly accurate. We can now forecast our sales pipeline with 90% accuracy, which has revolutionized our planning.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Maria Rodriguez',
      company: 'E-commerce Solutions',
      content: 'The AI-powered lead scoring has helped us focus on the right prospects. Our sales cycle has been reduced by 30% and our close rate increased by 25%.',
      rating: 5,
      avatar: 'MR'
    }
  ];

  const stats = [
    { number: '45%', label: 'Increase in Lead Conversion', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '60%', label: 'Boost in Sales Productivity', icon: <Zap className="w-6 h-6" /> },
    { number: '90%', label: 'Forecast Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '30%', label: 'Reduced Sales Cycle', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI CRM Assistant - Zion Tech Group | Intelligent Customer Relationship Management</title>
        <meta name="description" content="Transform your customer relationships with our AI-powered CRM Assistant. Automate lead scoring, email marketing, and predictive analytics. Boost sales by 45% with intelligent automation." />
        <meta name="keywords" content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI CRM{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Assistant
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your customer relationships with our AI-powered CRM Assistant. 
            Automate lead scoring, email marketing, and predictive analytics to boost sales by 45%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All AI Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Intelligent CRM Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI CRM Assistant comes packed with advanced features to automate and optimize 
              your customer relationship management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Connect with your favorite tools and platforms to create a unified workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group text-center">
                <div className="flex items-center justify-center mb-4">
                  {integration.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-xs text-gray-400">{integration.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to scale with your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their sales process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our AI CRM Assistant today and see how intelligent automation 
              can boost your sales performance by 45%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Brain className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}