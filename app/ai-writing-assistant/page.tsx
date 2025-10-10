'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain, Clock, DollarSign, Globe, Settings, FileText, PenTool, BookOpen, MessageSquare } from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Generation',
      description: 'Generate high-quality articles, blogs, emails, and social media posts with AI-powered writing assistance',
      benefits: ['50+ content templates', 'SEO-optimized content', 'Multi-language support', 'Brand voice training']
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Writing Enhancement',
      description: 'Improve grammar, style, and readability with advanced AI editing and proofreading tools',
      benefits: ['Grammar checking', 'Style suggestions', 'Tone adjustment', 'Readability scoring']
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Research Assistant',
      description: 'AI-powered research capabilities to gather information and create comprehensive content',
      benefits: ['Fact-checking', 'Source citations', 'Topic research', 'Content outlines']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Social Media',
      description: 'Create engaging social media content across all platforms with platform-specific optimization',
      benefits: ['Platform optimization', 'Hashtag suggestions', 'Engagement tracking', 'Content scheduling']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for individuals and small teams',
      features: ['10,000 words/month', '5 content templates', 'Basic grammar check', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Ideal for content creators and marketing teams',
      features: ['50,000 words/month', '50+ content templates', 'Advanced AI features', 'Priority support', 'Team collaboration'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'For large organizations with advanced needs',
      features: ['Unlimited words', 'All templates', 'Custom AI training', 'Dedicated support', 'API access', 'White-label options'],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechCorp Inc.',
      content: 'AI Writing Assistant has increased our content production by 300% while maintaining quality. The SEO optimization features are game-changing.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Writer',
      company: 'Independent',
      content: 'This tool has revolutionized my writing process. The research capabilities and content suggestions save me hours every day.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Social Media Manager',
      company: 'Digital Agency',
      content: 'Perfect for creating engaging social media content. The platform-specific optimization helps us maintain consistent brand voice.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Writing Assistant - Zion Tech Group | Advanced Content Creation Tool</title>
        <meta name="description" content="Transform your content creation with our AI Writing Assistant. Generate high-quality articles, blogs, emails, and social media content with advanced AI technology." />
        <meta name="keywords" content="AI writing, content creation, writing assistant, content generation, AI tools, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Writing Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content creation with advanced AI technology. Generate high-quality articles, blogs, emails, and social media content in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Writing Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to create exceptional content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                      <div className="text-cyan-400">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your content creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700' 
                      : 'border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of satisfied content creators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-assisted writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIWritingAssistantPage;