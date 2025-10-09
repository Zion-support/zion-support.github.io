'use client';
import React from 'react';
import { Brain, Zap, Target, Users, CheckCircle, Star, ArrowRight, Sparkles, Code, Image, Video, FileText, Mic, Globe, BarChart, Shield, Clock, DollarSign, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentStudio: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality blog posts, articles, and marketing copy with advanced AI',
      price: '$29/month',
      features: ['Unlimited content generation', 'SEO optimization', 'Multiple writing styles', 'Plagiarism detection']
    },
    {
      icon: Image,
      title: 'AI Image Generator',
      description: 'Create stunning visuals, graphics, and illustrations using AI',
      price: '$39/month',
      features: ['High-resolution images', 'Custom style training', 'Batch processing', 'Commercial license']
    },
    {
      icon: Video,
      title: 'AI Video Creator',
      description: 'Produce professional videos with AI-powered editing and effects',
      price: '$79/month',
      features: ['Auto-editing', 'Voice synthesis', 'Background removal', 'Multiple formats']
    },
    {
      icon: Mic,
      title: 'AI Voice Generator',
      description: 'Convert text to natural-sounding speech in multiple languages',
      price: '$19/month',
      features: ['50+ voice options', 'Emotion control', 'SSML support', 'API access']
    },
    {
      icon: Code,
      title: 'AI Code Generator',
      description: 'Generate clean, optimized code for web and mobile applications',
      price: '$49/month',
      features: ['Multiple languages', 'Code review', 'Documentation', 'Testing']
    },
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Track content performance with AI-powered insights and recommendations',
      price: '$39/month',
      features: ['Real-time analytics', 'Performance predictions', 'A/B testing', 'ROI tracking']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '5,000 AI-generated words/month',
        '100 AI-generated images/month',
        'Basic video editing',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '25,000 AI-generated words/month',
        '500 AI-generated images/month',
        'Advanced video creation',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited AI-generated content',
        'Unlimited AI-generated images',
        'Full video production suite',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Inc.',
      content: 'AI Content Studio has revolutionized our content creation process. We\'ve increased our output by 300% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      company: 'Design Studio Pro',
      content: 'The AI image generator is incredible. We can create custom visuals in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Manager',
      company: 'Digital Agency',
      content: 'The analytics dashboard gives us insights we never had before. Our content performance has improved dramatically.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI Content Creation Suite</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Content Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning content at scale with our comprehensive AI-powered content creation suite. 
              Generate text, images, videos, and more with professional quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
              <div className="text-gray-300">Content Pieces Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">4.9/5</div>
              <div className="text-gray-300">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Complete Content Creation Suite</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional content at scale, powered by advanced AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{feature.price}</div>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${
                tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  Get Started
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
            <h2 className="text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their content creation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Content Creation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIContentStudio;