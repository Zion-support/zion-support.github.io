'use client';
import React from 'react';
import { Target, BarChart, Users, Zap, CheckCircle, ArrowRight, Brain, Code, Settings, Shield, Globe, Smartphone, DollarSign, Clock, Star, Award, TrendingUp, Heart, Mail, MessageSquare, Search, FileText, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign as Money, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesAdvertisingPage: React.FC = () => {
  const advertisingServices = [
    {
      title: 'AI-Powered Ad Campaigns',
      description: 'Create, optimize, and manage advertising campaigns using artificial intelligence for maximum ROI and engagement.',
      icon: Target,
      price: 'Starting at $2,500/month',
      features: [
        'AI campaign optimization',
        'Multi-platform management',
        'Real-time performance tracking',
        'A/B testing automation',
        'Audience targeting',
        'Budget optimization',
        'Creative generation',
        'Conversion tracking'
      ],
      benefits: [
        '300% higher ROI',
        '50% lower cost per acquisition',
        'Automated optimization',
        '24/7 campaign monitoring'
      ],
      platforms: ['Google Ads', 'Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'Twitter'],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      category: 'Digital Advertising'
    },
    {
      title: 'Social Media Advertising',
      description: 'Comprehensive social media advertising across all major platforms with AI-powered optimization and creative development.',
      icon: MessageSquare,
      price: 'Starting at $1,800/month',
      features: [
        'Platform-specific strategies',
        'Creative content development',
        'Influencer partnerships',
        'Community management',
        'Engagement optimization',
        'Story and Reels ads',
        'Video advertising',
        'Analytics and reporting'
      ],
      benefits: [
        '5x audience reach',
        'Higher engagement rates',
        'Brand awareness boost',
        'Community building'
      ],
      platforms: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'Twitter', 'Pinterest'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      category: 'Social Media'
    },
    {
      title: 'Search Engine Marketing (SEM)',
      description: 'Maximize your visibility on search engines with strategic PPC campaigns and SEO-optimized content.',
      icon: Search,
      price: 'Starting at $2,000/month',
      features: [
        'Google Ads management',
        'Bing Ads optimization',
        'Keyword research',
        'Landing page optimization',
        'Quality score improvement',
        'Competitor analysis',
        'Local SEO integration',
        'Performance tracking'
      ],
      benefits: [
        'Top search rankings',
        'Qualified traffic increase',
        'Higher conversion rates',
        'Competitive advantage'
      ],
      platforms: ['Google Ads', 'Bing Ads', 'Yahoo Ads', 'Yandex'],
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      category: 'Search Marketing'
    },
    {
      title: 'Programmatic Advertising',
      description: 'Automated ad buying across multiple platforms and channels for maximum efficiency and reach.',
      icon: Zap,
      price: 'Starting at $3,000/month',
      features: [
        'Real-time bidding',
        'Cross-platform targeting',
        'Audience data integration',
        'Fraud prevention',
        'Brand safety controls',
        'Frequency capping',
        'Attribution modeling',
        'Performance analytics'
      ],
      benefits: [
        'Efficient ad spend',
        'Wide audience reach',
        'Real-time optimization',
        'Fraud protection'
      ],
      platforms: ['DSPs', 'Ad Exchanges', 'SSPs', 'Video Platforms'],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30',
      category: 'Programmatic'
    },
    {
      title: 'Video Advertising',
      description: 'Engaging video ad campaigns across YouTube, social media, and streaming platforms.',
      icon: Video,
      price: 'Starting at $2,200/month',
      features: [
        'Video production',
        'YouTube advertising',
        'Social video ads',
        'OTT/CTV campaigns',
        'Video SEO optimization',
        'Thumbnail optimization',
        'A/B testing',
        'Performance metrics'
      ],
      benefits: [
        'Higher engagement',
        'Better brand recall',
        'Mobile-optimized',
        'Cross-platform reach'
      ],
      platforms: ['YouTube', 'Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'Hulu'],
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30',
      category: 'Video Marketing'
    },
    {
      title: 'Display Advertising',
      description: 'Strategic display ad campaigns across websites, apps, and digital publications.',
      icon: Monitor,
      price: 'Starting at $1,500/month',
      features: [
        'Banner ad creation',
        'Retargeting campaigns',
        'Contextual targeting',
        'Behavioral targeting',
        'Lookalike audiences',
        'Creative rotation',
        'Frequency management',
        'Conversion tracking'
      ],
      benefits: [
        'Brand awareness',
        'Retargeting effectiveness',
        'Visual impact',
        'Wide reach'
      ],
      platforms: ['Google Display', 'Facebook Audience Network', 'Ad Networks', 'Publishers'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30',
      category: 'Display Marketing'
    },
    {
      title: 'Mobile Advertising',
      description: 'Mobile-first advertising strategies for apps and mobile web experiences.',
      icon: Smartphone,
      price: 'Starting at $1,800/month',
      features: [
        'App install campaigns',
        'In-app advertising',
        'Mobile web optimization',
        'Location-based targeting',
        'Mobile video ads',
        'Interactive ads',
        'App store optimization',
        'Mobile analytics'
      ],
      benefits: [
        'Mobile user engagement',
        'App install growth',
        'Location targeting',
        'Mobile-optimized experience'
      ],
      platforms: ['Google Play', 'App Store', 'Facebook', 'Instagram', 'TikTok', 'Snapchat'],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      category: 'Mobile Marketing'
    },
    {
      title: 'Email Marketing Automation',
      description: 'Automated email campaigns with personalization and behavioral triggers for maximum engagement.',
      icon: Mail,
      price: 'Starting at $1,200/month',
      features: [
        'Email automation',
        'Personalization',
        'Behavioral triggers',
        'A/B testing',
        'Segmentation',
        'Template design',
        'Deliverability optimization',
        'Performance analytics'
      ],
      benefits: [
        'Higher open rates',
        'Automated nurturing',
        'Personalized content',
        'ROI tracking'
      ],
      platforms: ['Mailchimp', 'HubSpot', 'Pardot', 'Marketo', 'ActiveCampaign'],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-400/30',
      category: 'Email Marketing'
    }
  ];

  const industries = [
    {
      name: 'E-commerce',
      icon: ShoppingCart,
      color: 'text-blue-400',
      description: 'Drive sales and conversions with targeted advertising campaigns',
      strategies: ['Product ads', 'Retargeting', 'Seasonal campaigns', 'Influencer marketing']
    },
    {
      name: 'Healthcare',
      icon: Heart,
      color: 'text-red-400',
      description: 'Compliant healthcare advertising that builds trust and drives patient engagement',
      strategies: ['HIPAA-compliant ads', 'Patient education', 'Provider marketing', 'Telehealth promotion']
    },
    {
      name: 'Technology',
      icon: Code,
      color: 'text-green-400',
      description: 'B2B and B2C tech advertising for software, hardware, and services',
      strategies: ['SaaS marketing', 'Product launches', 'Developer outreach', 'Enterprise sales']
    },
    {
      name: 'Finance',
      icon: DollarSign,
      color: 'text-yellow-400',
      description: 'Financial services advertising with compliance and trust-building focus',
      strategies: ['Fintech marketing', 'Investment services', 'Insurance ads', 'Banking solutions']
    },
    {
      name: 'Education',
      icon: GraduationCap,
      color: 'text-purple-400',
      description: 'Educational institution and EdTech advertising for student acquisition',
      strategies: ['Student recruitment', 'Course promotion', 'Online learning', 'Certification programs']
    },
    {
      name: 'Real Estate',
      icon: Home,
      color: 'text-orange-400',
      description: 'Property marketing and real estate service advertising',
      strategies: ['Property listings', 'Agent marketing', 'Mortgage services', 'Property management']
    }
  ];

  const stats = [
    { label: 'Campaigns Managed', value: '500+', icon: Target },
    { label: 'Average ROI', value: '400%', icon: TrendingUp },
    { label: 'Ad Spend Managed', value: '$10M+', icon: DollarSign },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Platforms Covered', value: '20+', icon: Globe },
    { label: 'Years Experience', value: '8+', icon: Award }
  ];

  const process = [
    {
      step: 1,
      title: 'Strategy & Planning',
      description: 'We analyze your business, target audience, and competition to create a comprehensive advertising strategy.',
      icon: Brain,
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Campaign Setup',
      description: 'We set up and configure all advertising platforms, targeting, and tracking systems.',
      icon: Settings,
      duration: '1 week'
    },
    {
      step: 3,
      title: 'Creative Development',
      description: 'Our team creates compelling ad creatives, copy, and landing pages optimized for conversions.',
      icon: Palette,
      duration: '1-2 weeks'
    },
    {
      step: 4,
      title: 'Launch & Optimize',
      description: 'We launch campaigns and continuously optimize based on performance data and insights.',
      icon: Zap,
      duration: 'Ongoing'
    },
    {
      step: 5,
      title: 'Monitor & Report',
      description: 'Regular reporting and analysis to ensure campaigns meet your goals and deliver maximum ROI.',
      icon: BarChart,
      duration: 'Monthly'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Advertising <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Maximize your advertising ROI with our AI-powered campaigns across all major platforms. 
            We create, optimize, and manage advertising that drives results.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Advertising Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advertisingServices.map((service, index) => (
              <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.borderColor}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <div className={`text-sm font-semibold ${service.color}`}>{service.category}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Platforms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className={`text-lg font-bold mb-4 neon-text ${service.color}`}>
                    {service.price}
                  </div>
                  <a 
                    href="/contact" 
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Industries We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <industry.icon className={`w-8 h-8 ${industry.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white neon-text">{industry.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Strategies:</h4>
                  <ul className="space-y-1">
                    {industry.strategies.map((strategy, strategyIndex) => (
                      <li key={strategyIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Process
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                </div>
                <step.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3 neon-text">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                <div className="text-xs text-cyan-400 font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Scale Your Advertising?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your advertising goals and create a strategy that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Campaign
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesAdvertisingPage;