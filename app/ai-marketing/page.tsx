'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck, DollarSign, Clock, TrendingDown as TrendingDownIcon } from 'lucide-react';

const AIMarketingPage: React.FC = () => {
  const features = [
    {
      title: 'AI Content Generation',
      description: 'Generate high-quality marketing content with AI',
      icon: FileText,
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Brand consistency', 'Multi-language support']
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict customer behavior and campaign performance',
      icon: BarChart,
      benefits: ['Customer lifetime value', 'Churn prediction', 'Campaign optimization', 'ROI forecasting']
    },
    {
      title: 'Personalization Engine',
      description: 'AI-powered personalization for better engagement',
      icon: Users,
      benefits: ['Dynamic content', 'Personalized offers', 'Behavior-based targeting', 'Customer segmentation']
    },
    {
      title: 'Automated Campaigns',
      description: 'AI-driven marketing campaign automation',
      icon: Settings,
      benefits: ['Campaign optimization', 'A/B testing', 'Multi-channel coordination', 'Performance tracking']
    },
    {
      title: 'Social Media Management',
      description: 'AI-powered social media marketing and management',
      icon: MessageSquare,
      benefits: ['Content scheduling', 'Engagement optimization', 'Trend analysis', 'Influencer identification']
    },
    {
      title: 'Email Marketing AI',
      description: 'Intelligent email marketing with AI optimization',
      icon: Mail,
      benefits: ['Subject line optimization', 'Send time optimization', 'Content personalization', 'Deliverability improvement']
    }
  ];

  const strategies = [
    {
      title: 'Content Marketing',
      description: 'AI-powered content strategy and creation',
      icon: '📝',
      results: ['300% increase in engagement', '50% more leads', 'Better content performance']
    },
    {
      title: 'Social Media Marketing',
      description: 'AI-driven social media strategies',
      icon: '📱',
      results: ['200% more followers', '150% engagement increase', 'Better brand awareness']
    },
    {
      title: 'Email Marketing',
      description: 'Intelligent email campaigns',
      icon: '📧',
      results: ['40% higher open rates', '25% more conversions', 'Better deliverability']
    },
    {
      title: 'Search Marketing',
      description: 'AI-optimized SEO and PPC campaigns',
      icon: '🔍',
      results: ['60% more organic traffic', '35% better ad performance', 'Higher rankings']
    },
    {
      title: 'Influencer Marketing',
      description: 'AI-powered influencer identification and management',
      icon: '👥',
      results: ['Better influencer matches', 'Higher ROI', 'Authentic partnerships']
    },
    {
      title: 'Video Marketing',
      description: 'AI-generated video content and optimization',
      icon: '🎥',
      results: ['Faster video production', 'Better engagement', 'Higher conversion rates']
    }
  ];

  const benefits = [
    {
      title: 'Increased ROI',
      description: 'AI optimization leads to better marketing ROI',
      icon: DollarSign,
      stats: '250% ROI increase'
    },
    {
      title: 'Better Targeting',
      description: 'AI improves audience targeting and segmentation',
      icon: Target,
      stats: '80% better targeting'
    },
    {
      title: 'Time Savings',
      description: 'AI automation saves time on repetitive tasks',
      icon: Clock,
      stats: '70% time savings'
    },
    {
      title: 'Higher Engagement',
      description: 'AI personalization increases customer engagement',
      icon: TrendingUp,
      stats: '150% engagement boost'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 199,
      description: 'Perfect for small businesses',
      features: [
        'Basic AI features',
        'Email support',
        'Standard analytics',
        'Social media management',
        'Content generation',
        'Basic personalization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 499,
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Priority support',
        'Advanced analytics',
        'Multi-channel campaigns',
        'Advanced personalization',
        'A/B testing',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 999,
      description: 'For large organizations',
      features: [
        'Full AI suite',
        '24/7 support',
        'Custom analytics',
        'White-label options',
        'Dedicated account manager',
        'Custom development',
        'Advanced reporting',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Marketing Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your marketing with AI-powered automation. Generate content, 
            optimize campaigns, and deliver personalized experiences at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Free Trial
            </a>
            <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <PhoneIcon className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Marketing Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Marketing Strategies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{strategy.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{strategy.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{strategy.description}</p>
                
                <div className="space-y-2">
                  {strategy.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Marketing Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            AI-powered marketing solutions for businesses of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white' 
                      : 'bg-cyan-400 text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that are already using AI to improve 
              their marketing performance and drive better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIMarketingPage;