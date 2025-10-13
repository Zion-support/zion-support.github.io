'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI Design Studio',
      description: 'Create stunning visual content with AI-powered design tools and templates.',
      benefits: ['AI design generation', 'Custom templates', 'Brand consistency', 'High-quality output']
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']},
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and insights to optimize content performance.',
      benefits: ['Performance metrics', 'Engagement analytics', 'ROI tracking', 'Custom reports']
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  const useCases = [
    {
      title: 'Marketing Campaigns',
      description: 'Create compelling marketing campaigns with AI-powered content generation',
      icon: '📢'
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
    <>
  </>
      <Helmet>
        <title>Ai Content Studio - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai content studio solution for modern businesses." />
        <meta name="keywords" content="AI ai content studio, artificial intelligence, ai content studio, AI solutions, intelligent automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Content Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning content with our AI Content Studio. Advanced design tools, 
              content generation, and collaboration features for better content creation.
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Content Studio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Content Studio combines cutting-edge technology with creative expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-rose-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">{/* Hero Section */</main>} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">,</h1>
                AI Content Studio;
  </
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Transform your business with intelligent solutions powered by cutting-edge AI technology.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">,</button>
                  Get Started;
  </
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">,</button>
        {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
                <div key={index}className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow">,</div>
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <li key={benefitIndex}className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
            </div>
          </div>
        </section>
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">,</section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using our AI platform.</p>
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold">,</button>
              <div key={index}className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-blue-400/50 transition-all duration-300 group">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-300">,</div>
                  <CheckCircle className="w-6 h-6 text-white" />
                    <li key={benefitIndex}className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit} </li>
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Content Studio?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our proven solutions;</p>
  </
              <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Transform your content creation with our AI Content Studio solutions today;</p>
  </
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
              Start Free Trial;
  </
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
              Contact Sales;
  </
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  ),
};

export default AiContentStudioPage;
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Palette, Image, FileText, Video, Music, Zap, ArrowRight, CheckCircle, Star, Users, TrendingUp, Brain } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: FileText,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, articles, and marketing materials',
      color: 'blue'
    },
    {
      icon: Image,
      title: 'AI Image Generator',
      description: 'Create stunning visuals and graphics with AI-powered image generation',
      color: 'purple'
    },
    {
      icon: Video,
      title: 'AI Video Creator',
      description: 'Produce engaging videos with automated editing and effects',
      color: 'green'
    },
    {
      icon: Music,
      title: 'AI Audio Generator',
      description: 'Generate background music, sound effects, and voiceovers',
      color: 'orange'
    },
    {
      icon: Palette,
      title: 'AI Design Tools',
      description: 'Create logos, banners, and social media graphics automatically',
      color: 'pink'
    },
    {
      icon: Zap,
      title: 'Content Optimization',
      description: 'Optimize content for SEO, engagement, and conversion',
      color: 'cyan'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      description: 'Perfect for individuals and small teams',
      features: [
        '10 AI-generated images per month',
        '5 video creations per month',
        'Unlimited text generation',
        'Basic templates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      description: 'Ideal for growing businesses',
      features: [
        '100 AI-generated images per month',
        '25 video creations per month',
        'Unlimited text generation',
        'Premium templates',
        'Priority support',
        'Brand customization',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 499,
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited AI-generated content',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      pink: 'from-pink-500 to-pink-600',
      cyan: 'from-cyan-500 to-cyan-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            AI Content Studio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning content with AI-powered tools. Generate text, images, videos, and audio 
            that captivate your audience and drive engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Creating
            </Link>
            <Link
              href="/demo"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
            >
              <Palette className="w-5 h-5 mr-2" />
              View Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Content Tools</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to create professional content at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(feature.color)} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Create professional content in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Vision</h3>
              <p className="text-gray-400">
                Tell our AI what kind of content you want to create with simple prompts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Generates Content</h3>
              <p className="text-gray-400">
                Our advanced AI creates high-quality content based on your specifications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize & Publish</h3>
              <p className="text-gray-400">
                Fine-tune the content and publish directly to your platforms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your content creation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                } hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
              <div className="text-gray-400">Content Pieces Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-400">Happy Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <div className="text-gray-400">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Content?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using AI to produce better content faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Start Creating Today
            </Link>
            <Link
              href="/demo"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
            >
              <Palette className="w-5 h-5 mr-2" />
              Try Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentStudioPage;
