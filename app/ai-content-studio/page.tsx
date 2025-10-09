'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, PenTool, Brain, FileText, Image, Video, Music, Globe, Zap, Target, Users, TrendingUp, Award, Calendar, Settings, Database, Cloud, Smartphone, Laptop, Monitor, MessageSquare, BarChart, Eye } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, social media, emails, and marketing materials using advanced AI.',
      benefits: ['SEO-optimized content', 'Multiple content types', 'Brand voice consistency', 'Plagiarism-free content']
    },
    {
      icon: Image,
      title: 'AI Image Creation',
      description: 'Create stunning visuals, graphics, and images using AI-powered design tools and templates.',
      benefits: ['Custom image generation', 'Brand-consistent designs', 'Multiple formats', 'High-resolution output']
    },
    {
      icon: Video,
      title: 'AI Video Production',
      description: 'Generate engaging videos with AI-powered editing, voiceovers, and automated production.',
      benefits: ['Automated video creation', 'Professional voiceovers', 'Multiple templates', 'Social media optimization']
    },
    {
      icon: Music,
      title: 'AI Audio Generation',
      description: 'Create background music, jingles, and audio content using AI composition and sound design.',
      benefits: ['Custom music creation', 'Multiple genres', 'Royalty-free audio', 'Professional quality']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate content in multiple languages with accurate translation and cultural adaptation.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Accurate translation', 'Localized content']
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'Optimize content for different platforms, audiences, and marketing goals automatically.',
      benefits: ['Platform optimization', 'Audience targeting', 'Performance prediction', 'A/B testing']
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: 'Blog Content',
      description: 'SEO-optimized blog posts, articles, and long-form content',
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership']
    },
    {
      icon: MessageSquare,
      title: 'Social Media',
      description: 'Engaging posts for all major social media platforms',
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Compelling email campaigns and newsletters',
      examples: ['Welcome series', 'Newsletters', 'Promotional emails', 'Transactional emails']
    },
    {
      icon: PenTool,
      title: 'Marketing Copy',
      description: 'Persuasive copy for ads, landing pages, and sales materials',
      examples: ['Ad copy', 'Landing pages', 'Sales letters', 'Product descriptions']
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Images, infographics, and visual assets',
      examples: ['Social media graphics', 'Infographics', 'Banners', 'Thumbnails']
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Video scripts, descriptions, and production',
      examples: ['YouTube scripts', 'TikTok content', 'Explainer videos', 'Product demos']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$149',
      period: '/month',
      description: 'Perfect for individual creators and small businesses',
      features: [
        '10,000 words/month',
        '50 images/month',
        '5 videos/month',
        'Basic templates',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$399',
      period: '/month',
      description: 'Ideal for content teams and growing businesses',
      features: [
        '50,000 words/month',
        '200 images/month',
        '20 videos/month',
        'Premium templates',
        'Priority support',
        'High quality output',
        'Brand voice training',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete content solution for large organizations',
      features: [
        'Unlimited content',
        'Unlimited images',
        'Unlimited videos',
        'Custom templates',
        'Dedicated support',
        'Highest quality',
        'Custom AI training',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Pro',
      role: 'Content Director',
      content: 'The AI Content Studio has revolutionized our content production. We\'ve increased our output by 300% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Digital Agency Co.',
      role: 'Creative Director',
      content: 'The multi-language support and brand voice training features are game-changers. Our clients love the consistent, high-quality content.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      role: 'Marketing Manager',
      content: 'From blog posts to social media content, everything is generated quickly and professionally. It\'s like having a full content team.',
      rating: 5
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <>
      <SEOOptimizer
        title="AI Content Studio - Zion Tech Group | Complete Content Creation Suite"
        description="Revolutionary AI-powered content creation platform for blogs, social media, videos, and marketing materials. Generate high-quality content 10x faster. Starting at $149/month."
        keywords={['AI content creation', 'content marketing', 'AI writing', 'content generation', 'social media content', 'blog writing', 'video creation']}
        canonicalUrl="https://ziontechgroup.com/ai-content-studio"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                AI Content Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The complete content creation suite powered by AI. Generate blogs, social media posts, videos, images, 
              and marketing materials 10x faster with professional quality and brand consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Complete Content Creation Suite
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                  <feature.icon className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Create Any Type of Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((content, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                  <content.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{content.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{content.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400">Examples:</h4>
                    {content.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-xs text-gray-300">
                        <ArrowRight className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Content Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
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
                    href={`mailto:${contactInfo.email}?subject=Interest in ${plan.name} AI Content Studio Plan`}
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              What Content Creators Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8 cyber-card text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Content Creation?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of content creators using AI to produce high-quality content at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=AI Content Studio Free Trial Request`}
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                >
                  <PenTool className="w-5 h-5" />
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIContentStudioPage;