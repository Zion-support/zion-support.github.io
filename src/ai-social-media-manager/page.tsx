'use client';
import React, { useState, useCallback } from 'react';
import { CheckCircle, Star, Users, Clock, TrendingUp, BarChart, Calendar, Target, Zap, Shield, Globe, ArrowRight, Phone, Mail, MapPin, Award, Rocket, Brain, Cpu, Settings, FileText, MessageSquare, Eye, Sparkles, Hash, Share2, Heart, ThumbsUp } from 'lucide-react';
import FuturisticNavigation from '../components/FuturisticNavigation';
import FuturisticFooter from '../components/FuturisticFooter';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AISocialMediaManagerPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [isDemoRequested, setIsDemoRequested] = useState(false);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_social_media_manager_phone'
      });
    }
  }, []);

  const handleDemoRequest = useCallback(() => {
    setIsDemoRequested(true);
    setTimeout(() => setIsDemoRequested(false), 3000);
  }, []);

  const features = [
    {
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags with AI-powered content creation',
      icon: FileText,
      benefits: ['200% more content', 'Consistent brand voice', 'Multi-platform optimization']
    },
    {
      title: 'Smart Scheduling',
      description: 'Optimal posting times based on audience behavior and engagement patterns',
      icon: Calendar,
      benefits: ['40% more reach', 'Peak time optimization', 'Cross-platform sync']
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics with AI-powered insights and recommendations',
      icon: BarChart,
      benefits: ['Real-time metrics', 'ROI tracking', 'Performance predictions']
    },
    {
      title: 'Audience Intelligence',
      description: 'Deep audience analysis and targeting optimization',
      icon: Users,
      benefits: ['Demographic insights', 'Interest mapping', 'Engagement patterns']
    },
    {
      title: 'Hashtag Optimization',
      description: 'AI-powered hashtag research and optimization for maximum reach',
      icon: Hash,
      benefits: ['Trending hashtags', 'Relevance scoring', 'Competitor analysis']
    },
    {
      title: 'Competitor Analysis',
      description: 'Monitor competitors and identify opportunities for growth',
      icon: Eye,
      benefits: ['Competitive insights', 'Content gap analysis', 'Strategy recommendations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '3 social accounts',
        '50 posts/month',
        'Basic analytics',
        'Email support',
        'Content calendar'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$149',
      period: '/month',
      description: 'Most popular for growing brands',
      features: [
        '10 social accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'AI content creation',
        'Hashtag optimization',
        'Competitor analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited accounts',
        'Everything in Pro',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'Our engagement increased by 200% in just 3 months. The AI content creation is incredible!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Kim',
      role: 'Social Media Manager',
      company: 'TechStart Inc.',
      content: 'We save 20+ hours per week on content creation. The scheduling optimization is spot on.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Thompson',
      role: 'Brand Manager',
      company: 'Creative Agency',
      content: 'The audience insights helped us understand our customers better than ever before.',
      rating: 5,
      avatar: '👩‍💼'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Social Media Manager - Automate Your Social Media with AI"
        description="Transform your social media with AI-powered content creation, smart scheduling, and analytics. Achieve 200% engagement increase and 20+ hours saved per week."
        keywords={['AI social media', 'social media automation', 'content creation', 'social media scheduling', 'social media analytics', 'hashtag optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-social-media-manager"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
      />
      <Analytics />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <FuturisticNavigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Social Media Manager
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
                Automate Your Social Media with AI
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transform your social media presence with AI-powered content creation, smart scheduling, and analytics. 
                Achieve 200% engagement increase and save 20+ hours per week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={handleDemoRequest}
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  {isDemoRequested ? 'Demo Requested!' : 'Start Free Trial'}
                </button>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 neon-text">200%</div>
                  <div className="text-sm text-gray-300">Engagement Increase</div>
                </div>
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 neon-text">20+</div>
                  <div className="text-sm text-gray-300">Hours Saved/Week</div>
                </div>
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400 neon-text">40%</div>
                  <div className="text-sm text-gray-300">More Reach</div>
                </div>
                <div className="cyber-card p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 neon-text">50%</div>
                  <div className="text-sm text-gray-300">Better ROI</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Everything you need to dominate social media
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Platforms */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Supported Platforms
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Manage all your social media accounts from one place
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Facebook', icon: '📘', color: 'text-blue-400' },
                { name: 'Instagram', icon: '📷', color: 'text-pink-400' },
                { name: 'Twitter', icon: '🐦', color: 'text-cyan-400' },
                { name: 'LinkedIn', icon: '💼', color: 'text-blue-500' },
                { name: 'TikTok', icon: '🎵', color: 'text-white' },
                { name: 'YouTube', icon: '📺', color: 'text-red-400' },
                { name: 'Pinterest', icon: '📌', color: 'text-red-500' },
                { name: 'Snapchat', icon: '👻', color: 'text-yellow-400' }
              ].map((platform, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className={`text-lg font-semibold ${platform.color}`}>{platform.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Simple Pricing
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400 neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="cyber-button w-full py-3 font-semibold">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Join thousands of brands already using AI Social Media Manager
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Start your free trial today and see the difference AI can make
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
                </button>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <FuturisticFooter />
      </div>
    </>
  );
};

export default AISocialMediaManagerPage;