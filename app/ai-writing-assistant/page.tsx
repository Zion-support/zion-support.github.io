'use client';
import React from 'react';
import { CheckCircle, Star, Zap, Brain, Code, BarChart, Users, Clock, Shield, ArrowRight, Play, Download, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context and generate high-quality content across multiple formats and styles.'
    },
    {
      icon: Code,
      title: '50+ Templates',
      description: 'Pre-built templates for blogs, emails, reports, social media, and more to jumpstart your content creation.'
    },
    {
      icon: BarChart,
      title: 'Content Analytics',
      description: 'Track performance metrics, readability scores, and engagement rates to optimize your content strategy.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration features with version control, comments, and approval workflows for teams.'
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Reduce content creation time by up to 80% with intelligent automation and smart suggestions.'
    },
    {
      icon: Shield,
      title: 'Plagiarism Check',
      description: 'Built-in plagiarism detection and originality scoring to ensure your content is unique and authentic.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words per month',
        '20+ templates',
        'Basic AI writing tools',
        'Email support',
        'Standard quality output'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words per month',
        '50+ templates',
        'Advanced AI features',
        'Priority support',
        'Team collaboration',
        'Content analytics',
        'Plagiarism check'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited words',
        'All templates',
        'Custom AI training',
        'Dedicated support',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Manager',
      company: 'TechStart Inc.',
      content: 'The AI Writing Assistant has revolutionized our content creation process. We can now produce 3x more content with better quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'GrowthCorp',
      content: 'The templates and AI suggestions have saved us countless hours. Our blog engagement has increased by 150%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Writer',
      company: 'Independent',
      content: 'This tool has become my secret weapon. The quality of AI-generated content is impressive and saves me so much time.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
                AI Writing Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your content creation with our advanced AI-powered writing assistant. 
                Generate high-quality content 10x faster with 50+ templates and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button-advanced px-8 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Writing</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Templates</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-pink-400 mb-2">80%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-gray-300">Happy Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              Simple Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-2 border-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'cyber-button-advanced' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Writing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of content creators who are already using AI to write better, faster, and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button-advanced px-8 py-4 text-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-all">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIWritingAssistantPage;