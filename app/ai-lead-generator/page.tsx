'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AILeadGeneratorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: BoltIcon,
      title: 'AI-Powered Lead Discovery',
      description: 'Automatically find and qualify leads using advanced AI algorithms that analyze company data, social signals, and intent indicators.',
      benefits: ['10x more qualified leads', '95% accuracy in lead scoring', 'Real-time lead identification']
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Intent-Based Targeting',
      description: 'Identify prospects who are actively looking for your services using AI-powered intent analysis and behavioral tracking.',
      benefits: ['Higher conversion rates', 'Reduced sales cycle', 'Better prospect quality']
    },
    {
      icon: EnvelopeIcon,
      title: 'Automated Outreach',
      description: 'Generate personalized email sequences and follow-up campaigns that adapt based on prospect behavior and engagement.',
      benefits: ['40% higher open rates', 'Automated follow-ups', 'Personalized messaging']
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Forecast lead conversion probability and optimize your sales pipeline with AI-driven insights and recommendations.',
      benefits: ['Sales forecasting', 'Pipeline optimization', 'ROI prediction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI features',
        'Email integration',
        'Basic analytics',
        'Email support',
        'CRM integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI features',
        'Multi-channel outreach',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI training',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Sales Director, TechCorp',
      content: 'Our lead generation increased by 300% since using this AI tool. The quality of leads is outstanding.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'CEO, StartupXYZ',
      content: 'This AI lead generator helped us scale from 0 to 100 customers in just 3 months. Game-changing technology.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Marketing Manager, GrowthCo',
      content: 'The automated outreach sequences are incredibly effective. Our conversion rates have never been higher.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'B2B Sales Teams',
      description: 'Generate high-quality B2B leads with AI-powered company research and contact discovery.',
      icon: UserGroupIcon
    },
    {
      title: 'E-commerce Businesses',
      description: 'Identify potential customers and create targeted marketing campaigns based on purchase intent.',
      icon: GlobeAltIcon
    },
    {
      title: 'Service Providers',
      description: 'Find prospects actively looking for your services and automate your outreach process.',
      icon: CogIcon
    },
    {
      title: 'SaaS Companies',
      description: 'Identify companies ready to adopt your software solution with AI-powered lead scoring.',
      icon: ChartBarIcon
    }
  ];

  const industries = [
    'Technology & Software',
    'Healthcare & Medical',
    'Financial Services',
    'Real Estate',
    'E-commerce & Retail',
    'Professional Services',
    'Manufacturing',
    'Education & Training',
    'Marketing & Advertising',
    'Consulting & Advisory'
  ];

  return (
    <>
      <SEOHead 
        title="AI Lead Generator - Zion Tech Group"
        description="Revolutionary AI-powered lead generation platform that automatically finds, qualifies, and nurtures prospects. Boost your sales pipeline with intelligent automation."
        keywords="AI lead generator, lead generation automation, prospect discovery, sales automation, lead qualification, AI sales, prospect research"
        canonicalUrl="https://ziontechgroup.com/ai-lead-generator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI Lead Generator
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize your sales pipeline with AI-powered lead generation that automatically finds, qualifies, and nurtures prospects. 
                <br className="hidden sm:block" />
                <span className="text-cyan-400 font-semibold">Contact us at +1 302 464 0950 or kleber@ziontechgroup.com</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-400/25 neon-border-animated">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Harness the power of artificial intelligence to automatically generate, qualify, and nurture high-quality leads.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect for <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI lead generator adapts to your industry and business model to deliver the most relevant prospects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Trusted by <span className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">Leading Industries</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI lead generator works across all industries and business types.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="group relative bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                  <h3 className="text-sm font-bold text-white text-center group-hover:text-pink-300 transition-colors">
                    {industry}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your lead generation needs. All plans include our core AI features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-indigo-500 shadow-indigo-500/20' 
                    : 'border-slate-700 hover:border-indigo-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of sales teams who have transformed their lead generation with our AI-powered platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Generate More Leads?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free 14-day trial today. No credit card required. Experience the power of AI-driven lead generation.
              <br className="hidden sm:block" />
              <span className="text-cyan-400 font-semibold">Get in touch: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-indigo-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a href="tel:+13024640950" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILeadGeneratorPage;