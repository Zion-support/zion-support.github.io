import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Target, TrendingUp, Users, Zap, CheckCircle, Star, Phone, Mail, MapPin, Award, Shield, Brain, BarChart, DollarSign, Clock, Globe, MessageSquare } from 'lucide-react';

export default function ServicesAdvertisingPage() {
  const advertisingServices = [
    {
      title: 'AI-Powered Ad Campaign Optimization',
      description: 'Revolutionary AI technology that automatically optimizes your ad campaigns for maximum ROI and performance.',
      icon: '🎯',
      price: '$1,999/month',
      features: [
        'Real-time campaign optimization',
        'AI-driven audience targeting',
        'Automated A/B testing',
        'Performance prediction',
        'Cost reduction by 60%',
        'ROI increase by 300%'
      ],
      benefits: [
        'Increase conversion rates by 150%',
        'Reduce cost per acquisition by 60%',
        'Improve ad relevance scores',
        'Maximize return on ad spend'
      ],
      marketPrice: '$3,000-5,000/month',
      technologies: ['Google Ads API', 'Facebook Ads API', 'Machine Learning', 'Python', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'AI Content Generation for Ads',
      description: 'Generate high-converting ad copy, headlines, and creative content using advanced AI technology.',
      icon: '✍️',
      price: '$799/month',
      features: [
        'AI-generated ad copy',
        'Multiple headline variations',
        'Creative content generation',
        'Brand voice consistency',
        'Multi-platform optimization',
        'Performance tracking'
      ],
      benefits: [
        'Create content 10x faster',
        'Improve click-through rates by 45%',
        'Maintain brand consistency',
        'Scale content production'
      ],
      marketPrice: '$1,200-2,000/month',
      technologies: ['OpenAI GPT', 'Claude', 'React', 'Node.js', 'Custom AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'AI Audience Intelligence Platform',
      description: 'Advanced audience analysis and targeting using AI to identify high-value prospects and optimize reach.',
      icon: '👥',
      price: '$1,499/month',
      features: [
        'AI audience segmentation',
        'Behavioral analysis',
        'Lookalike audience creation',
        'Predictive targeting',
        'Cross-platform insights',
        'Real-time optimization'
      ],
      benefits: [
        'Improve targeting accuracy by 95%',
        'Increase audience engagement by 80%',
        'Reduce wasted ad spend by 50%',
        'Identify high-value prospects'
      ],
      marketPrice: '$2,000-4,000/month',
      technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'Analytics APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'AI Social Media Advertising Manager',
      description: 'Comprehensive social media advertising management with AI-powered optimization across all platforms.',
      icon: '📱',
      price: '$1,299/month',
      features: [
        'Multi-platform management',
        'AI content scheduling',
        'Engagement optimization',
        'Influencer identification',
        'Hashtag optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase social engagement by 120%',
        'Reduce management time by 70%',
        'Improve brand awareness',
        'Optimize posting times'
      ],
      marketPrice: '$1,800-3,000/month',
      technologies: ['Social Media APIs', 'Machine Learning', 'React', 'Node.js', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing campaigns with personalization, segmentation, and automated optimization.',
      icon: '📧',
      price: '$899/month',
      features: [
        'AI-powered personalization',
        'Automated segmentation',
        'Send time optimization',
        'Subject line testing',
        'Drip campaign automation',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 35%',
        'Boost click-through rates by 50%',
        'Reduce unsubscribe rates by 40%',
        'Improve email deliverability'
      ],
      marketPrice: '$1,500-2,500/month',
      technologies: ['Email APIs', 'Machine Learning', 'React', 'Node.js', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    },
    {
      title: 'AI Search Engine Marketing (SEM)',
      description: 'Advanced SEM management with AI-powered keyword research, bid optimization, and performance tracking.',
      icon: '🔍',
      price: '$1,799/month',
      features: [
        'AI keyword research',
        'Automated bid management',
        'Landing page optimization',
        'Competitor analysis',
        'Performance tracking',
        'ROI optimization'
      ],
      benefits: [
        'Increase qualified traffic by 200%',
        'Reduce cost per click by 45%',
        'Improve quality scores',
        'Maximize search visibility'
      ],
      marketPrice: '$2,500-4,500/month',
      technologies: ['Google Ads API', 'Bing Ads API', 'Machine Learning', 'Python', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464-0950'
    }
  ];

  const stats = [
    { number: '300%', label: 'Average ROI Increase', icon: TrendingUp },
    { number: '60%', label: 'Cost Reduction', icon: DollarSign },
    { number: '95%', label: 'Targeting Accuracy', icon: Target },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'AI Optimization', icon: Clock },
    { number: '50+', label: 'Platforms Supported', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-600/20 text-cyan-400 text-sm font-semibold mb-6">
            <Target className="w-4 h-4 mr-2" />
            AI-Powered Advertising Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Advertising Services
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-cyan-400 max-w-3xl mx-auto">
            Revolutionize Your Marketing with 300% ROI Guaranteed
          </p>
          
          <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
            Transform your advertising campaigns with our breakthrough AI technology. Achieve 95% targeting accuracy, 
            60% cost reduction, and 300% ROI with intelligent automation and predictive analytics. Our proven 
            methodology has helped 500+ businesses increase their advertising effectiveness while reducing costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Start Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Advertising Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered advertising solutions designed to maximize your ROI and transform your marketing performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advertisingServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Advertising Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with proven marketing expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mb-4">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced AI Technology</h3>
              <p className="text-gray-300">
                Our proprietary AI algorithms continuously learn and optimize your campaigns for maximum performance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mb-4">
                <BarChart className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">
                We've helped 500+ businesses achieve an average 300% ROI increase and 60% cost reduction.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security and compliance ensure your data and campaigns are always protected.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mb-4">
                <Clock className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Optimization</h3>
              <p className="text-gray-300">
                Our AI works around the clock to optimize your campaigns and maximize performance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Platform Support</h3>
              <p className="text-gray-300">
                Manage campaigns across 50+ advertising platforms from a single, unified dashboard.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mb-4">
                <MessageSquare className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300">
                Get dedicated support from our team of AI and marketing experts whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get started with our AI advertising services today and see the difference intelligent automation can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}