'use client';
import React from 'react';
import { Palette, Sparkles, Zap, Target, BarChart, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Brain, Users, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

const AIDesignStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI Logo Generator',
      description: 'Create stunning logos in seconds with AI-powered design tools that understand your brand and industry.',
      benefit: 'Generate 50+ logo variations in 2 minutes'
    },
    {
      icon: Sparkles,
      title: 'Smart Brand Kit',
      description: 'Automatically generate complete brand identity packages including colors, fonts, and style guidelines.',
      benefit: 'Save 20+ hours on brand development'
    },
    {
      icon: Zap,
      title: 'One-Click Design',
      description: 'Transform text prompts into professional designs for social media, web, and print materials.',
      benefit: 'Create designs 10x faster than traditional methods'
    },
    {
      icon: Target,
      title: 'Design Optimization',
      description: 'AI analyzes your designs and suggests improvements for better engagement and conversion rates.',
      benefit: 'Increase design effectiveness by 40%'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track how your designs perform across different platforms with detailed engagement metrics.',
      benefit: 'Data-driven design decisions'
    },
    {
      icon: Brain,
      title: 'Style Learning',
      description: 'AI learns your design preferences and creates consistent visuals that match your brand aesthetic.',
      benefit: 'Maintain brand consistency automatically'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers',
      features: [
        '100 AI designs per month',
        'Basic logo generator',
        'Standard templates',
        'Mobile app access',
        'Email support',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        '500 AI designs per month',
        'Advanced logo generator',
        'Premium templates',
        'Brand kit generator',
        'Priority support',
        '10GB storage',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For agencies and large teams',
      features: [
        'Unlimited AI designs',
        'Custom AI training',
        'White-label options',
        'Advanced analytics',
        'Dedicated support',
        '100GB storage',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const designTypes = [
    { name: 'Logos & Branding', icon: '🎨', description: 'Professional logos and brand identity' },
    { name: 'Social Media', icon: '📱', description: 'Instagram, Facebook, LinkedIn posts' },
    { name: 'Web Design', icon: '🌐', description: 'Landing pages and website mockups' },
    { name: 'Print Materials', icon: '📄', description: 'Business cards, flyers, brochures' },
    { name: 'Presentations', icon: '📊', description: 'PowerPoint and Keynote slides' },
    { name: 'Email Templates', icon: '📧', description: 'Newsletter and marketing emails' },
    { name: 'Advertisements', icon: '📺', description: 'Banner ads and promotional materials' },
    { name: 'Packaging', icon: '📦', description: 'Product packaging and labels' }
  ];

  const testimonials = [
    {
      name: 'Emma Rodriguez',
      company: 'Creative Agency',
      role: 'Creative Director',
      content: 'AI Design Studio revolutionized our workflow. We can now create client designs in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Startup Founder',
      role: 'CEO',
      content: 'The logo generator created the perfect brand identity for our startup. Professional quality at a fraction of the cost.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Marketing Manager',
      role: 'Marketing Manager',
      content: 'Our social media engagement increased 300% after using AI-optimized designs. The analytics are incredibly helpful.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Design Studio
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Professional Design Made Simple
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Create stunning designs in seconds with our AI-powered design studio. From logos to social media posts, 
            generate professional-quality visuals that engage your audience and drive results.
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
            <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
            <div className="text-white font-semibold mb-2">Faster Design</div>
            <div className="text-gray-300 text-sm">Than traditional methods</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-white font-semibold mb-2">Logo Variations</div>
            <div className="text-gray-300 text-sm">Generated in 2 minutes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-white font-semibold mb-2">Better Engagement</div>
            <div className="text-gray-300 text-sm">With AI-optimized designs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">20+</div>
            <div className="text-white font-semibold mb-2">Hours Saved</div>
            <div className="text-gray-300 text-sm">On brand development</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful Design Features
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

        {/* Design Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Create Any Type of Design
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
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
            Ready to Create Stunning Designs?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of designers, marketers, and business owners using AI Design Studio 
            to create professional visuals that drive engagement and results.
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

export default AIDesignStudioPage;