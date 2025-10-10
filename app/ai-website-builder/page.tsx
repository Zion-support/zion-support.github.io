'use client';
import React from 'react';
import { CheckCircle, Code, Palette, Zap, Smartphone, Laptop, Globe, Search, Phone, Mail, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate clean, optimized code automatically based on your design requirements',
      benefits: ['Clean code', 'Auto-optimization', 'Best practices']
    },
    {
      icon: Palette,
      title: 'Smart Design System',
      description: 'AI-powered design suggestions that adapt to your brand and industry',
      benefits: ['Brand consistency', 'Industry templates', 'Color optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous performance monitoring and automatic improvements',
      benefits: ['Speed optimization', 'SEO enhancement', 'Mobile responsiveness']
    },
    {
      icon: Search,
      title: 'SEO Intelligence',
      description: 'Built-in SEO tools that optimize your site for search engines',
      benefits: ['Keyword optimization', 'Meta tags', 'Performance scoring']
    }
  ];

  const benefits = [
    'Build professional websites in minutes, not months',
    'AI-powered design suggestions and optimization',
    'Mobile-first responsive design',
    'Built-in SEO and performance optimization',
    'No coding knowledge required',
    'Drag-and-drop interface with AI assistance',
    'Real-time preview and testing',
    'One-click deployment to any hosting platform'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for personal projects',
      features: [
        'Up to 5 websites',
        'Basic templates',
        'Mobile optimization',
        'Basic SEO tools',
        'Email support',
        'SSL certificates'
      ],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 25 websites',
        'Premium templates',
        'Advanced AI features',
        'Full SEO suite',
        'Priority support',
        'Custom domains',
        'Analytics integration'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For agencies and large teams',
      features: [
        'Unlimited websites',
        'White-label options',
        'Custom integrations',
        'API access',
        'Dedicated support',
        'Team collaboration',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Website Builder - Create Professional Websites with AI | Zion Tech Group</title>
        <meta name="description" content="Build stunning, professional websites in minutes with our AI-powered website builder. No coding required, mobile-first design, and built-in SEO optimization." />
        <meta name="keywords" content="AI website builder, website creation, no-code website, responsive design, SEO optimization, web development" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-website-builder" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Website Builder
              </h1>
              <p className="text-xl text-cyan-400 mb-8">
                Create professional websites in minutes with AI-powered design
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Build stunning, responsive websites without coding. Our AI handles design, optimization, 
                and SEO while you focus on your content and business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Powerful AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Why Choose Our AI Website Builder?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Choose Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center cyber-card">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Start Building Your Website Today
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of businesses who have built their online presence with our AI website builder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Start Building
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call (302) 464-0950
                  </a>
                </div>
                <div className="mt-8 text-sm opacity-90">
                  <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIWebsiteBuilderPage;