'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { PenTool, Brain, Zap, Target, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, FileText, Image, Video, Mic } from 'lucide-react';

const AiContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced AI algorithms trained on millions of articles.',
      benefits: ['Natural language generation', 'Context-aware writing', 'Multiple writing styles', 'SEO optimization']
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Create content in seconds, not hours. Our AI generates articles, blogs, and copy instantly.',
      benefits: ['Instant generation', 'Batch processing', 'Real-time editing', 'Quick iterations']
    },
    {
      icon: Target,
      title: 'Targeted Content',
      description: 'Generate content tailored to your audience, industry, and specific requirements.',
      benefits: ['Audience targeting', 'Industry-specific', 'Custom tone', 'Brand voice']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track content performance and optimize based on real engagement data.',
      benefits: ['Engagement metrics', 'A/B testing', 'Performance insights', 'ROI tracking']
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: 'Blog Posts',
      description: 'Long-form articles and blog posts on any topic',
      features: ['SEO optimized', 'Multiple formats', 'Research-backed', 'Engaging headlines']
    },
    {
      icon: Image,
      title: 'Social Media',
      description: 'Captions, posts, and content for all social platforms',
      features: ['Platform-specific', 'Hashtag suggestions', 'Visual descriptions', 'Engagement hooks']
    },
    {
      icon: Video,
      title: 'Video Scripts',
      description: 'Scripts for YouTube, TikTok, and other video platforms',
      features: ['Hook creation', 'Story structure', 'Call-to-actions', 'Visual cues']
    },
    {
      icon: Mic,
      title: 'Podcast Scripts',
      description: 'Professional podcast scripts and show notes',
      features: ['Episode outlines', 'Interview questions', 'Show notes', 'Transcriptions']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words/month',
        '5 content types',
        'Basic templates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words/month',
        'All content types',
        'Advanced templates',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'Custom AI models',
        'API access',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator | Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content instantly with our AI-powered content generator. Create blogs, social media posts, scripts, and more." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, social media content, AI writing tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create high-quality content in seconds with our advanced AI-powered content generator. Perfect for blogs, social media, scripts, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Start Generating
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Try Demo
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
                Why Choose Our AI Content Generator?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powered by cutting-edge AI technology to create content that engages, converts, and performs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Generate any type of content you need for your business or personal projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <type.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your content needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Start generating high-quality content today and see the difference AI can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Examples
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiContentGeneratorPage;