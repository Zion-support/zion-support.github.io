'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star, CheckCircle, ArrowRight, Brain, BarChart, Users, TrendingUp, Target, Zap, Shield, Clock, Smartphone, Palette, Code, Database, Cloud, Settings, Award, Globe, Lock, Sparkles, Cpu, Eye, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation, PieChart, Activity, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Play, Download, Share2, BookOpen as BookOpenIcon, Lightbulb, RefreshCw, AlertTriangle, CheckSquare, Timer, DollarSign, TrendingDown, UserPlus, FolderOpen, MessageCircle, Bell, Settings as SettingsIcon, HelpCircle, ExternalLink } from 'lucide-react';

const AIMarketingPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Campaign Optimization',
      description: 'Automatically optimize your marketing campaigns using machine learning algorithms that analyze performance data and adjust strategies in real-time.',
      benefits: ['45% higher conversion rates', '60% reduction in ad spend waste', 'Real-time optimization']
    },
    {
      icon: Target,
      title: 'Intelligent Audience Targeting',
      description: 'Advanced AI algorithms analyze customer behavior and demographics to create highly targeted audience segments for maximum engagement.',
      benefits: ['85% improvement in targeting accuracy', '40% increase in engagement', 'Reduced customer acquisition costs']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast customer behavior, market trends, and campaign performance using advanced predictive models and machine learning.',
      benefits: ['90% accuracy in predictions', 'Data-driven decision making', 'Competitive advantage']
    },
    {
      icon: MessageSquare,
      title: 'Automated Content Generation',
      description: 'Generate high-quality marketing content, ad copy, and social media posts using AI-powered content creation tools.',
      benefits: ['80% faster content creation', 'Consistent brand voice', 'A/B testing automation']
    },
    {
      icon: Users,
      title: 'Customer Journey Optimization',
      description: 'Map and optimize the entire customer journey using AI insights to improve conversion rates at every touchpoint.',
      benefits: ['35% improvement in conversion rates', 'Better customer experience', 'Increased lifetime value']
    },
    {
      icon: TrendingUp,
      title: 'ROI Optimization',
      description: 'Maximize return on investment by automatically allocating budget to the most effective channels and campaigns.',
      benefits: ['50% improvement in ROI', 'Automated budget allocation', 'Performance tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI campaign optimization',
        'Up to 5 campaigns',
        'Standard analytics',
        'Email support',
        'Basic content generation'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI optimization',
        'Up to 25 campaigns',
        'Advanced analytics',
        'Priority support',
        'Full content generation suite',
        'A/B testing automation',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI marketing suite',
        'Unlimited campaigns',
        'Advanced analytics',
        '24/7 dedicated support',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_marketing_phone',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/ai-services" className="text-white hover:text-cyan-400 transition-colors">AI Services</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text cyber-text">
                AI Marketing Solutions
              </h1>
              <p className="text-lg text-pink-400">Revolutionary AI-Powered Marketing Automation</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your marketing with AI-powered automation, intelligent targeting, and predictive analytics. 
            Increase conversion rates by 45% and reduce ad spend waste by 60% with our advanced AI marketing solutions.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">45%</div>
              <div className="text-white font-medium">Higher Conversion</div>
              <div className="text-gray-400 text-sm">Average improvement</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-white font-medium">Ad Spend Reduction</div>
              <div className="text-gray-400 text-sm">Waste elimination</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-white font-medium">Targeting Accuracy</div>
              <div className="text-gray-400 text-sm">AI-powered precision</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50%</div>
              <div className="text-white font-medium">ROI Improvement</div>
              <div className="text-gray-400 text-sm">Average increase</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Marketing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-pink-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'ring-2 ring-pink-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
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
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600' 
                    : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Revolutionize Your Marketing?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join hundreds of businesses already using our AI marketing solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button text-center"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>
            <div className="cyber-card p-6">
              <Location className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});

AIMarketingPage.displayName = 'AIMarketingPage';
export default AIMarketingPage;