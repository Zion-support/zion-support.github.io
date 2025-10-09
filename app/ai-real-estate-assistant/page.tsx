'use client';
import React from 'react';
import { Home, TrendingUp, MapPin, Calculator, BarChart, Shield, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, Star } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIRealEstateAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Property Valuation',
      description: 'AI-powered property valuation using market data, comparable sales, and neighborhood trends',
      benefits: ['95% accuracy rate', 'Real-time market data', 'Automated reports']
    },
    {
      icon: BarChart,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis with trend predictions and investment opportunities',
      benefits: ['Market trend analysis', 'Investment scoring', 'Risk assessment']
    },
    {
      icon: TrendingUp,
      title: 'Investment Scoring',
      description: 'AI-driven investment scoring based on ROI potential, market conditions, and risk factors',
      benefits: ['ROI predictions', 'Risk analysis', 'Portfolio optimization']
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Advanced location analysis including demographics, amenities, and future development plans',
      benefits: ['Demographic analysis', 'Amenity mapping', 'Development tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$179',
      period: '/month',
      description: 'Perfect for individual investors and small portfolios',
      features: [
        'Up to 10 property valuations per month',
        'Basic market analysis',
        'Email support',
        'Standard reporting',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for real estate agents and medium portfolios',
      features: [
        'Up to 50 property valuations per month',
        'Advanced market analysis',
        'Priority support',
        'Custom reporting',
        'API access',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large real estate firms and institutional investors',
      features: [
        'Unlimited property valuations',
        'AI-powered investment recommendations',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label options',
        'Advanced analytics dashboard'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Real Estate Investor',
      company: 'Johnson Properties',
      content: 'The AI Real Estate Assistant has transformed how I evaluate properties. The accuracy is incredible and I\'ve increased my ROI by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Real Estate Agent',
      company: 'Premier Realty',
      content: 'This tool gives me a competitive edge. The market analysis is so detailed that my clients trust my recommendations completely.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      company: 'Metro Properties',
      content: 'The investment scoring feature has helped me identify the best opportunities. It\'s like having a team of analysts at my fingertips.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Home className="w-4 h-4" />
            Micro SAAS Solution
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Real Estate Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your real estate investments with AI-powered property analysis, market insights, and investment recommendations. 
            Make smarter decisions with 95% accuracy and 40% better ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">25% Better Investment Decisions</h3>
              <p className="text-gray-300">AI-powered analysis helps you identify the best investment opportunities</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">40% Time Savings</h3>
              <p className="text-gray-300">Automated analysis and reporting saves hours of manual research</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Higher ROI</h3>
              <p className="text-gray-300">Data-driven insights lead to better investment returns</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
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
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of real estate professionals who trust our AI-powered solutions for better investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIRealEstateAssistantPage;