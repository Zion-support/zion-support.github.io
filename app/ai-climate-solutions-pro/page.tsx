'use client';

import React from 'react';
import { Globe, Leaf, Wind, Sun, Droplets, TreePine, Zap, Shield, Target, Award, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

export default function AIClimateSolutionsProPage() {
  const features = [
    'Carbon Footprint Analysis',
    'Renewable Energy Optimization',
    'Climate Risk Assessment',
    'Sustainable Supply Chain',
    'Green Building Design',
    'Emission Reduction Planning',
    'Environmental Monitoring',
    'ESG Reporting Automation'
  ];

  const benefits = [
    {
      icon: Leaf,
      title: '50% Carbon Reduction',
      description: 'Achieve significant carbon footprint reduction within 12 months'
    },
    {
      icon: DollarSign,
      title: '30% Cost Savings',
      description: 'Reduce operational costs through energy efficiency optimization'
    },
    {
      icon: Shield,
      title: '100% Compliance',
      description: 'Ensure full compliance with environmental regulations'
    },
    {
      icon: Target,
      title: 'Net Zero Goals',
      description: 'Accelerate progress towards net zero emissions targets'
    }
  ];

  const solutions = [
    {
      title: 'Smart Energy Management',
      description: 'AI-powered energy consumption optimization and renewable energy integration',
      icon: Zap,
      impact: 'Reduce energy costs by 40%'
    },
    {
      title: 'Carbon Tracking & Analytics',
      description: 'Real-time carbon footprint monitoring and reduction recommendations',
      icon: Globe,
      impact: 'Track emissions across all operations'
    },
    {
      title: 'Sustainable Supply Chain',
      description: 'Optimize supply chain for environmental impact and sustainability',
      icon: TreePine,
      impact: 'Reduce supply chain emissions by 60%'
    },
    {
      title: 'Climate Risk Assessment',
      description: 'Predict and mitigate climate-related risks to your business',
      icon: Shield,
      impact: 'Protect against climate risks'
    }
  ];

  const pricingTiers = [
    {
      name: 'Startup',
      price: '$3,200',
      period: '/month',
      description: 'For small businesses starting their sustainability journey',
      features: [
        'Up to 10 locations',
        'Basic carbon tracking',
        'Energy optimization',
        'Email support',
        'Standard reporting'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$8,500',
      period: '/month',
      description: 'For mid-size companies with complex operations',
      features: [
        'Up to 100 locations',
        'Advanced analytics',
        'Supply chain optimization',
        'Priority support',
        'Custom reporting',
        'API integrations'
      ],
      popular: true
    },
    {
      name: 'Global Corporation',
      price: 'Custom',
      period: '',
      description: 'For large multinational corporations',
      features: [
        'Unlimited locations',
        'Custom AI models',
        'Full ESG suite',
        '24/7 dedicated support',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Santos',
      company: 'GreenTech Industries',
      role: 'Chief Sustainability Officer',
      content: 'AI Climate Solutions Pro helped us achieve our net zero goals 2 years ahead of schedule while reducing costs by 35%.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'EcoManufacturing Corp',
      role: 'VP of Operations',
      content: 'The supply chain optimization feature reduced our carbon footprint by 60% and saved us $2M annually.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Sustainable Energy Ltd',
      role: 'Director of Environmental Affairs',
      content: 'Real-time monitoring and AI recommendations helped us exceed all environmental compliance targets.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">AI Climate Solutions Pro</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Climate Solutions Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Combat climate change with AI-powered environmental solutions. 
              Optimize energy usage, reduce carbon emissions, and achieve sustainability goals faster than ever.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Leaf className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">50% Carbon Reduction</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">30% Cost Savings</span>
              </div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Net Zero Goals</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Globe className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Climate Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Address every aspect of your environmental impact with our AI-powered platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{solution.description}</p>
                <div className="text-green-400 text-sm font-medium">{solution.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI to optimize your environmental impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                <p className="text-gray-400 text-sm">
                  AI-powered {feature.toLowerCase()} with real-time monitoring and optimization
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Environmental Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Achieve measurable results in sustainability and environmental responsibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your sustainability goals and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-green-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all block text-center ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  {tier.name === 'Global Corporation' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Sustainability Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how leading companies are using AI Climate Solutions Pro to achieve their environmental goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-green-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Lead the Climate Revolution?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join forward-thinking companies using AI to create a sustainable future for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Globe className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-green-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-green-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}