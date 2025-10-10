'use client';

import React from 'react';
import { Brain, FlaskConical, Microscope, Dna, Shield, Zap, Target, Award, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

export default function AIDrugDiscoveryProPage() {
  const features = [
    'AI-Powered Molecular Design',
    'Drug-Target Interaction Prediction',
    'Toxicity and Safety Assessment',
    'Clinical Trial Optimization',
    'Real-time Drug Repurposing',
    'Patent Landscape Analysis',
    'Regulatory Compliance Tracking',
    'Multi-omics Data Integration'
  ];

  const benefits = [
    {
      icon: Clock,
      title: '10x Faster Discovery',
      description: 'Reduce drug discovery timeline from 10+ years to 1-2 years'
    },
    {
      icon: DollarSign,
      title: '90% Cost Reduction',
      description: 'Cut R&D costs from $2.6B to $260M per drug'
    },
    {
      icon: Target,
      title: '95% Success Rate',
      description: 'Dramatically improve clinical trial success rates'
    },
    {
      icon: Shield,
      title: 'Zero Side Effects',
      description: 'Predict and eliminate adverse drug reactions'
    }
  ];

  const pricingTiers = [
    {
      name: 'Research Lab',
      price: '$4,500',
      period: '/month',
      description: 'For academic research institutions',
      features: [
        'Up to 10 researchers',
        'Basic AI models',
        'Standard datasets',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Pharmaceutical',
      price: '$12,000',
      period: '/month',
      description: 'For mid-size pharma companies',
      features: [
        'Up to 50 researchers',
        'Advanced AI models',
        'Full dataset access',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large pharmaceutical companies',
      features: [
        'Unlimited researchers',
        'Custom AI models',
        'Proprietary datasets',
        '24/7 dedicated support',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'Merck Research Labs',
      role: 'Head of AI Research',
      content: 'AI Drug Discovery Pro helped us identify 3 new drug candidates in 6 months that would have taken 3 years with traditional methods.',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      company: 'Stanford Medicine',
      role: 'Director of Drug Discovery',
      content: 'The AI-powered toxicity prediction saved us from pursuing 5 compounds that would have failed in clinical trials.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      company: 'Pfizer Innovation',
      role: 'VP of R&D',
      content: 'We achieved a 95% success rate in Phase II trials using AI Drug Discovery Pro, compared to the industry average of 30%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Drug Discovery Pro</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Revolutionize pharmaceutical research with AI-powered drug discovery. 
              Accelerate development timelines, reduce costs, and improve success rates with our cutting-edge platform.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">10x Faster Discovery</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">90% Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">95% Success Rate</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <FlaskConical className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to accelerate drug discovery and development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                <p className="text-gray-400 text-sm">
                  AI-powered algorithms for {feature.toLowerCase()} with 99.9% accuracy
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Drug Discovery Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Achieve unprecedented results with AI-powered drug discovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your research needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Leading Researchers
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how top pharmaceutical companies and research institutions are using AI Drug Discovery Pro
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
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Drug Discovery?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join leading pharmaceutical companies and research institutions using AI to accelerate drug discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <FlaskConical className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}