'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Image, Video, Music, Globe, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Shield, Brain, Palette, Camera, Headphones } from 'lucide-react';

const AIContentGeneratorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: FileText,
      title: 'AI Blog Writing',
      description: 'Generate high-quality blog posts, articles, and long-form content with AI',
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Multiple writing styles']
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and artwork with AI-powered image generation',
      benefits: ['Unlimited image creation', 'Professional quality', 'Custom brand styling']
    },
    {
      icon: Video,
      title: 'AI Video Creation',
      description: 'Generate engaging videos with AI-powered editing and content creation',
      benefits: ['Automated video editing', 'Voice synthesis', 'Multiple formats']
    },
    {
      icon: Music,
      title: 'AI Music Composition',
      description: 'Create original music and soundtracks with AI composition tools',
      benefits: ['Royalty-free music', 'Multiple genres', 'Custom length']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        '1,000 content pieces/month',
        'Basic AI models',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for marketing agencies and growing businesses',
      features: [
        '5,000 content pieces/month',
        'Advanced AI models',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited content pieces',
        'Premium AI models',
        'Custom AI training',
        'Dedicated support',
        'Advanced analytics',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Marketing Agencies',
      description: 'Generate client content at scale with consistent quality and brand voice',
      icon: '🎯',
      results: '80% faster content delivery'
    },
    {
      title: 'E-commerce Stores',
      description: 'Create product descriptions, ads, and social media content automatically',
      icon: '🛒',
      results: '300% more product content'
    },
    {
      title: 'Bloggers & Influencers',
      description: 'Maintain consistent posting schedule with AI-generated content ideas',
      icon: '📝',
      results: '5x more content output'
    },
    {
      title: 'Corporate Communications',
      description: 'Generate internal communications, reports, and presentations',
      icon: '🏢',
      results: '60% time savings'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with AI-powered writing, image, video, and music creation tools. Perfect for marketers, agencies, and content creators." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, image generation, video creation, marketing automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
                <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
                <a href="/ai-services" className="text-white hover:text-cyan-400 transition-colors">AI Services</a>
                <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content Generator
              </h1>
              <p className="text-xl text-cyan-400 mb-8">
                Create stunning content with AI-powered writing, image, video, and music generation
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your content creation process with our advanced AI tools. Generate high-quality blog posts, 
                images, videos, and music in minutes instead of hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Powerful AI Content Creation Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                  <div className="text-cyan-400 font-semibold text-sm">{useCase.results}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Interest in AI Content Generator - {plan.name} Plan"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of content creators who are already using AI to produce better content faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Inquiry"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-md border-t border-cyan-500/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">AI Services</a></li>
                  <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors">IT Services</a></li>
                  <li><a href="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors">Micro SAAS</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Phone: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;