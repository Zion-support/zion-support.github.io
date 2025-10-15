'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  HomeIcon as HomeIconSolid,
  BeakerIcon,
  EyeIcon,
  MapIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const ZionAIRealEstateAnalyzerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: HomeIcon,
      title: 'Property Valuation',
      description: 'AI-powered property valuation with 97.3% accuracy using market data, location analysis, and comparable sales.',
      stats: '1M+ properties analyzed'
    },
    {
      icon: MapIcon,
      title: 'Market Analysis',
      description: 'Comprehensive market trend analysis with predictive insights for investment opportunities.',
      stats: '500+ markets tracked'
    },
    {
      icon: ChartBarIcon,
      title: 'Investment Scoring',
      description: 'Advanced ROI calculations and investment risk assessment for real estate portfolios.',
      stats: '95% accuracy in predictions'
    },
    {
      icon: UserGroupIcon,
      title: 'Client Management',
      description: 'Complete CRM system for real estate agents with lead tracking and client communication tools.',
      stats: '50,000+ agents using'
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Processing',
      description: 'Automated processing of contracts, deeds, and legal documents with AI-powered extraction.',
      stats: '100,000+ documents processed'
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Automated listing management, showing scheduling, and transaction tracking.',
      stats: '80% time savings'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Agent',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual real estate agents',
      features: [
        'Up to 100 property analyses/month',
        'Basic market analysis',
        'Client management (up to 500 contacts)',
        'Document processing',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Real Estate Team',
      price: '$599',
      period: '/month',
      description: 'Ideal for real estate teams and small brokerages',
      features: [
        'Unlimited property analyses',
        'Advanced market insights',
        'Team collaboration tools',
        'Client management (up to 2,000 contacts)',
        'Priority support',
        'Custom reporting',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Brokerage Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large brokerages and real estate companies',
      features: [
        'Everything in Team',
        'Unlimited agents',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced analytics suite',
        'Full API access',
        'Custom integrations',
        'Multi-location support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Top Producer',
      company: 'Premier Realty Group',
      content: 'Zion AI Real Estate Analyzer has helped me close 40% more deals this year. The property valuation accuracy is incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Broker',
      company: 'Chen Real Estate',
      content: 'The market analysis features have given us a competitive edge. We can now identify investment opportunities before our competitors.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Team Leader',
      company: 'Rodriguez Properties',
      content: 'The client management system has streamlined our operations and improved client satisfaction significantly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Real Estate Analyzer - AI-Powered Property Analysis | Zion Tech Group"
        description="Transform real estate with AI-powered property valuation, market analysis, and investment scoring. 97.3% accuracy, 1M+ properties analyzed."
        keywords="AI real estate analyzer, property valuation, market analysis, real estate technology, investment scoring, property management, real estate CRM"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <HomeIconSolid className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">AI Real Estate Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Zion AI Real Estate Analyzer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize real estate with AI-powered property valuation, market analysis, and investment scoring. 
                Achieve 97.3% accuracy in property valuations and identify investment opportunities with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">97.3%</div>
                  <div className="text-gray-300 text-sm">Valuation Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1M+</div>
                  <div className="text-gray-300 text-sm">Properties Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Agents Using</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm">Markets Tracked</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced AI Real Estate Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive real estate technology solutions designed to enhance property analysis and investment decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-orange-400 font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your real estate business. All plans include our core AI analysis features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                    : 'border-slate-700 hover:border-orange-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by Real Estate Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what real estate professionals are saying about Zion AI Real Estate Analyzer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Real Estate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of real estate professionals who trust Zion AI Real Estate Analyzer for their business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIRealEstateAnalyzerPage;