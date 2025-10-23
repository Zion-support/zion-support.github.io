'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, PenTool, Brain, Zap, Target, FileText, Users } from 'lucide-react';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context, tone, and audience to create compelling content',
      benefits: ['Natural language generation', 'Context-aware writing', 'Tone adaptation', 'Audience targeting']
    },
    {
      icon: PenTool,
      title: 'Multi-Format Support',
      description: 'Create content in various formats including blogs, articles, social media, and marketing copy',
      benefits: ['Blog posts', 'Social media content', 'Email campaigns', 'Product descriptions']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword integration and meta descriptions',
      benefits: ['Keyword optimization', 'Meta descriptions', 'SEO scoring', 'Content suggestions']
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time with live editing and commenting features',
      benefits: ['Live editing', 'Team comments', 'Version control', 'Approval workflows']
    }
  ];

  const contentTypes = [
    {
      type: 'Blog Posts',
      description: 'Engaging blog articles optimized for SEO and reader engagement',
      icon: <FileText className="w-6 h-6" />
    },
    {
      type: 'Social Media',
      description: 'Captivating social media posts for all major platforms',
      icon: <Users className="w-6 h-6" />
    },
    {
      type: 'Email Marketing',
      description: 'High-converting email campaigns and newsletters',
      icon: <Target className="w-6 h-6" />
    },
    {
      type: 'Product Descriptions',
      description: 'Compelling product descriptions that drive sales',
      icon: <PenTool className="w-6 h-6" />
    }
  ];

  const benefits = [
    'Save up to 80% of content creation time',
    'Improve content quality with AI suggestions',
    'Maintain consistent brand voice across all content',
    'Generate unlimited content ideas and topics',
    'Automatically optimize for SEO and readability',
    'Scale content production without hiring more writers'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'month',
      description: 'Perfect for individual content creators',
      features: [
        'Up to 50 articles/month',
        'Basic AI writing tools',
        'Standard templates',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      period: 'month',
      description: 'Ideal for small teams and agencies',
      features: [
        'Up to 200 articles/month',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Team collaboration'
      ]
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited articles',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label options'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Head>
        <title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content writing platform by Zion Tech Group. Create engaging, SEO-optimized content with artificial intelligence." />
        </Head>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span>AI Content Writer
            </span>
          </h1>
          <p>Create compelling, SEO-optimized content at scale with our advanced AI writing platform. 
            From blog posts to social media, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Start Writing
              <ArrowRight> </ArrowRight>button>
            <button>Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Powerful Writing Features</h2>
            <p>Everything you need to create high-quality, engaging content with AI assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature> </feature>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle>{benefit}
                    </CheckCircle>li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Content Types We Support</h2>
            <p>Create any type of content you need with our versatile AI writing platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((contentType, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div>{contentType.icon}
                </div>
                <h3>{contentType.type}</h3>
                <p>{contentType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Why Choose Our Platform?</h2>
            <p>Experience the benefits of AI-powered content creation for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <p>{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Pricing Plans</h2>
            <p>Choose the perfect plan for your content creation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 ${index === 1 ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                <div className="text-center mb-6">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span>{plan.price}</span>
                    <span>/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle>{feature}
                    </CheckCircle>li>
                  ))}
                </ul>
                <button>Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2>Ready to Transform Your Content Creation?</h2>
          <p>Join thousands of content creators who use our AI platform to produce better content faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button>Start Free Trial
            </button>
            <button>View Examples
            </button>
          </div>
        </div>
      </section>

      <Footer> </Footer>div>
  );
};

export default AIContentWriterPage;
