'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Leaf, BarChart, Globe } from 'lucide-react';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    'AI-powered crop monitoring and analysis',
    'Predictive yield forecasting',
    'Automated irrigation management',
    'Pest and disease detection',
    'Soil health assessment',
    'Weather pattern analysis',
    'Precision farming recommendations',
    'Resource optimization',
    'Real-time field monitoring',
    'Data-driven decision making'
  ];

  const benefits = [
    'Increase crop yields by 25-40%',
    'Reduce water usage by 30%',
    'Minimize pesticide use by 50%',
    'Lower operational costs by 35%',
    'Improve crop quality and consistency',
    'Enable sustainable farming practices',
    'Reduce environmental impact',
    'Maximize resource efficiency'
  ];

  const applications = [
    {
      title: 'Crop Monitoring',
      description: 'Real-time monitoring of crop health and growth patterns',
      icon: Leaf
    },
    {
      title: 'Yield Prediction',
      description: 'Accurate forecasting of crop yields using AI models',
      icon: BarChart
    },
    {
      title: 'Resource Management',
      description: 'Optimized water, fertilizer, and pesticide usage',
      icon: Globe
    },
    {
      title: 'Disease Detection',
      description: 'Early detection and prevention of plant diseases',
      icon: Shield
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$199',
      period: '/month',
      features: [
        'Up to 100 acres monitoring',
        'Basic crop analysis',
        'Weather integration',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: [
        'Up to 500 acres monitoring',
        'Advanced AI analysis',
        'Real-time alerts',
        'Priority support',
        'Custom recommendations',
        'API access',
        'Mobile app'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited acres',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'Training included'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Transform your farming operations with AI-powered agricultural intelligence. Increase yields, reduce costs, and optimize resources with our advanced AI solutions." />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop monitoring, yield prediction, agricultural AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Agricultural <span className="text-cyan-400">Intelligence Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your farming operations with AI-powered agricultural intelligence. 
                Maximize yields, minimize costs, and optimize resources with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Agricultural AI Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to optimize your farming operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-white font-semibold">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart Farming Applications
              </h2>
              <p className="text-xl text-gray-300">
                See how AI transforms modern agriculture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <app.icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Agricultural Benefits
              </h2>
              <p className="text-xl text-gray-300">
                Experience measurable improvements in your farming operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300">
                Flexible pricing for farms of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                  tier.popular ? 'border-cyan-400' : 'border-white/20'
                } relative`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-cyan-400 mr-3" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Agriculture?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of farmers who are already using AI to optimize their operations and increase yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our AI agricultural solutions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center justify-center">
                <Phone className="text-cyan-400 mr-3" size={24} />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="text-cyan-400 mr-3" size={24} />
                <span className="text-white">agriculture@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="text-cyan-400 mr-3" size={24} />
                <span className="text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;