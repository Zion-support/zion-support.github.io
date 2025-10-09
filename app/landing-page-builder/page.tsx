'use client';
import React from 'react';
import { Globe, Zap, Target, BarChart, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Brain, Users, Shield, Clock, Palette } from 'lucide-react';
import Link from 'next/link';

const LandingPageBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'AI Page Generator',
      description: 'Create high-converting landing pages in minutes with AI that understands your business and target audience.',
      benefit: 'Build pages 5x faster than traditional builders'
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'AI analyzes your page and suggests improvements to increase conversions and reduce bounce rates.',
      benefit: 'Increase conversions by 60% on average'
    },
    {
      icon: Zap,
      title: 'One-Click Publishing',
      description: 'Publish your landing pages instantly with our global CDN and automatic mobile optimization.',
      benefit: 'Go live in under 60 seconds'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Track visitor behavior, conversion rates, and performance metrics with detailed analytics dashboard.',
      benefit: 'Make data-driven decisions'
    },
    {
      icon: Brain,
      title: 'A/B Testing',
      description: 'Automatically test different versions of your pages to find the highest converting elements.',
      benefit: 'Optimize performance continuously'
    },
    {
      icon: Palette,
      title: 'Custom Templates',
      description: 'Choose from 100+ professionally designed templates or create completely custom designs.',
      benefit: 'Match your brand perfectly'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '5 landing pages',
        'Basic AI generator',
        'Mobile optimization',
        'Analytics dashboard',
        'Email support',
        'Custom domain'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '25 landing pages',
        'Advanced AI features',
        'A/B testing',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Team collaboration',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For agencies and large teams',
      features: [
        'Unlimited pages',
        'Custom AI training',
        'Advanced A/B testing',
        'Custom analytics',
        'Dedicated support',
        'API access',
        'Custom compliance',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const templates = [
    { name: 'SaaS Landing', icon: '💻', description: 'Software as a Service' },
    { name: 'E-commerce', icon: '🛒', description: 'Online store pages' },
    { name: 'Lead Generation', icon: '📧', description: 'Lead capture forms' },
    { name: 'Event Pages', icon: '🎉', description: 'Conference and events' },
    { name: 'Product Launch', icon: '🚀', description: 'New product announcements' },
    { name: 'Portfolio', icon: '🎨', description: 'Creative portfolios' },
    { name: 'App Download', icon: '📱', description: 'Mobile app promotion' },
    { name: 'Webinar', icon: '🎥', description: 'Educational content' }
  ];

  const testimonials = [
    {
      name: 'Mark Thompson',
      company: 'SaaS Startup',
      role: 'Marketing Director',
      content: 'Our conversion rate increased from 2% to 8% using AI-optimized landing pages. The ROI is incredible.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      company: 'E-commerce Store',
      role: 'Owner',
      content: 'We can now create and test new landing pages in minutes instead of days. The A/B testing feature is game-changing.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Marketing Agency',
      role: 'Creative Director',
      content: 'Our clients love the results. We can deliver high-converting pages faster than ever before.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Landing Page Builder
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            AI-Powered High-Converting Pages
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Create stunning, high-converting landing pages in minutes with our AI-powered builder. 
            No coding required. Just describe your business and watch AI create the perfect page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5x</div>
            <div className="text-white font-semibold mb-2">Faster Building</div>
            <div className="text-gray-300 text-sm">Than traditional builders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-white font-semibold mb-2">Higher Conversions</div>
            <div className="text-gray-300 text-sm">With AI optimization</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">60s</div>
            <div className="text-white font-semibold mb-2">Publish Time</div>
            <div className="text-gray-300 text-sm">From creation to live</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100+</div>
            <div className="text-white font-semibold mb-2">Templates</div>
            <div className="text-gray-300 text-sm">Professional designs</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful Landing Page Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Professional Templates for Every Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{template.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
                <p className="text-gray-300 text-sm">{template.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build High-Converting Pages?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers and business owners using our AI-powered landing page builder 
            to create pages that convert visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default LandingPageBuilderPage;