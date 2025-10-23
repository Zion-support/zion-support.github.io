'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, PenTool, Brain, Zap, Target, FileText, Users } from 'lucide-react';

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
      icon: <FileText className="w-6 h-6" loading="lazy" />
    },
    {
      type: 'Social Media',
      description: 'Captivating social media posts for all major platforms',
      icon: <Users className="w-6 h-6" loading="lazy" />
    },
    {
      type: 'Email Marketing',
      description: 'High-converting email campaigns and newsletters',
      icon: <Target className="w-6 h-6" loading="lazy" />
    },
    {
      type: 'Product Descriptions',
      description: 'Compelling product descriptions that drive sales',
      icon: <PenTool className="w-6 h-6" loading="lazy" />
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900" loading="lazy">
      <Helmet>
        <title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content writing platform by Zion Tech Group. Create engaging, SEO-optimized content with artificial intelligence." />
        <meta name="keywords" content="AI content writer, content generation, blog writing, SEO content, marketing copy" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" loading="lazy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" loading="lazy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" loading="lazy" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center" loading="lazy">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" loading="lazy">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent" loading="lazy">AI Content Writer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Create compelling, SEO-optimized content at scale with our advanced AI writing platform. </p>
            From blog posts to social media, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center" loading="lazy" aria-label="Action button">Start Writing</button>
              <ArrowRight className="ml-2 h-5 w-5" loading="lazy" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300" loading="lazy" aria-label="Action button">Try Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-4xl font-bold text-white mb-4" loading="lazy">Powerful Writing Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Everything you need to create high-quality, engaging content with AI assistance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300" loading="lazy">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
                  <feature.icon className="w-8 h-8 text-white" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>
                <p className="text-gray-300 mb-4" loading="lazy">{feature.description}</p>
                <ul className="space-y-2 text-sm text-gray-400" loading="lazy">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center" loading="lazy">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" loading="lazy" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-4xl font-bold text-white mb-4" loading="lazy">Content Types We Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Create any type of content you need with our versatile AI writing platform.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{contentTypes.map((contentType, index) => (</div>
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300" loading="lazy">
                <div className="flex justify-center mb-4 text-green-400" loading="lazy">{contentType.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2" loading="lazy">{contentType.type}</h3>
                <p className="text-gray-300 text-sm" loading="lazy">{contentType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-4xl font-bold text-white mb-4" loading="lazy">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Experience the benefits of AI-powered content creation for your business.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" loading="lazy">{benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6" loading="lazy">
                <div className="flex items-center mb-4" loading="lazy">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                  <p className="text-white font-medium" loading="lazy">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white bg-opacity-5" loading="lazy">
        <div className="max-w-7xl mx-auto" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h2 className="text-4xl font-bold text-white mb-4" loading="lazy">Pricing Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Choose the perfect plan for your content creation needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" loading="lazy">{pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 ${index === 1 ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                <div className="text-center mb-6" loading="lazy">
                  <h3 className="text-2xl font-bold text-white mb-2" loading="lazy">{plan.name}</h3>
                  <p className="text-gray-300 mb-4" loading="lazy">{plan.description}</p>
                  <div className="flex items-baseline justify-center" loading="lazy">
                    <span className="text-4xl font-bold text-white" loading="lazy">{plan.price}</span>
                    <span className="text-gray-300 ml-2" loading="lazy">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8" loading="lazy">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300" loading="lazy">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" loading="lazy" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  index === 1 
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700' 
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`} aria-label="Action button">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600" loading="lazy">
        <div className="max-w-4xl mx-auto text-center" loading="lazy">
          <h2 className="text-4xl font-bold text-white mb-6" loading="lazy">Ready to Transform Your Content Creation?</h2>
          <p className="text-xl text-green-100 mb-8" loading="lazy">Join thousands of content creators who use our AI platform to produce better content faster.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300" loading="lazy" aria-label="Action button">Start Free Trial</button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300" loading="lazy" aria-label="Action button">View Examples</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


