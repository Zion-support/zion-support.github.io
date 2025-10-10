'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, FileText, Target, Code, Users, Mail, Globe } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const microSaasTools = [
    {
      title: 'Zion AI Content Studio',
      description: 'Advanced AI-powered content creation platform with GPT-4 integration, brand voice training, and multi-platform publishing.',
      features: ['GPT-4 & Claude Integration', 'Brand Voice AI Training', 'SEO Optimization', 'Multi-language Support', 'Content Calendar', 'Team Collaboration'],
      price: '$89/month',
      marketPrice: '$200-500/month',
      benefits: ['Save 90% content creation time', 'Increase engagement by 300%', 'SEO-optimized content', 'Consistent brand voice'],
      icon: Zap,
      category: 'Content',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-studio'
    },
    {
      title: 'Zion Analytics Pro',
      description: 'Real-time business intelligence platform with AI-powered insights, predictive analytics, and custom dashboard builder.',
      features: ['Real-time Data Visualization', 'AI Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Reports', 'Multi-tenant Architecture'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Data-driven decisions', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
      icon: Star,
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/analytics-pro'
    },
    {
      title: 'Zion Security Sentinel',
      description: 'AI-powered cybersecurity monitoring with real-time threat detection, automated response, and compliance management.',
      features: ['Real-time Threat Detection', 'AI Behavioral Analysis', 'Automated Incident Response', 'Compliance Reporting', 'Vulnerability Scanning', 'Security Training'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['99.9% threat detection accuracy', 'Reduce security incidents by 85%', 'Automated compliance', '24/7 monitoring'],
      icon: Shield,
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/security-sentinel'
    },
    {
      title: 'Zion TaskFlow AI',
      description: 'Intelligent project management with AI-powered task prioritization, resource optimization, and predictive scheduling.',
      features: ['AI Task Prioritization', 'Resource Optimization', 'Predictive Scheduling', 'Team Collaboration', 'Progress Analytics', 'Integration Hub'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase productivity by 40%', 'Reduce project delays by 60%', 'Optimized resource allocation', 'Predictive insights'],
      icon: Clock,
      category: 'Productivity',
      popular: false,
      link: 'https://ziontechgroup.com/taskflow-ai'
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing, payment tracking, and financial analytics.',
      features: ['AI Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays by 50%', 'Automated follow-ups', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: false,
      link: 'https://ziontechgroup.com/invoice-genius'
    },
    {
      title: 'Zion Lead Magnet Pro',
      description: 'Advanced lead generation platform with AI-powered prospect scoring, automated nurturing, and conversion optimization.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration', 'A/B Testing', 'Conversion Analytics'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Target,
      category: 'Marketing',
      popular: true,
      link: 'https://ziontechgroup.com/lead-magnet-pro'
    },
    {
      title: 'Zion Code Assistant',
      description: 'AI-powered coding assistant with real-time code review, automated testing, and intelligent debugging capabilities.',
      features: ['AI Code Review', 'Automated Testing', 'Intelligent Debugging', 'Code Generation', 'Security Scanning', 'Performance Optimization'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Reduce bugs by 70%', 'Faster development cycles', 'Improved code quality', 'Automated testing'],
      icon: Code,
      category: 'Development',
      popular: false,
      link: 'https://ziontechgroup.com/code-assistant'
    },
    {
      title: 'Zion Customer Insights',
      description: 'AI-powered customer analytics platform with sentiment analysis, behavior prediction, and personalized engagement.',
      features: ['Sentiment Analysis', 'Behavior Prediction', 'Personalized Engagement', 'Customer Journey Mapping', 'Churn Prediction', 'Lifetime Value Analysis'],
      price: '$179/month',
      marketPrice: '$350-900/month',
      benefits: ['Increase customer retention by 45%', 'Predict customer behavior', 'Personalized experiences', 'Reduce churn by 60%'],
      icon: Users,
      category: 'Customer Success',
      popular: true,
      link: 'https://ziontechgroup.com/customer-insights'
    },
    {
      title: 'Zion Email Automation Pro',
      description: 'Advanced email marketing automation with AI-powered personalization, send time optimization, and engagement analytics.',
      features: ['AI Personalization', 'Send Time Optimization', 'Engagement Analytics', 'A/B Testing', 'Segmentation', 'Deliverability Monitoring'],
      price: '$69/month',
      marketPrice: '$150-500/month',
      benefits: ['Increase open rates by 250%', 'Automated personalization', 'Optimal send times', 'Better deliverability'],
      icon: Mail,
      category: 'Marketing',
      popular: false,
      link: 'https://ziontechgroup.com/email-automation-pro'
    },
    {
      title: 'Zion Document AI',
      description: 'Intelligent document processing with OCR, data extraction, automated classification, and smart search capabilities.',
      features: ['Advanced OCR', 'Data Extraction', 'Automated Classification', 'Smart Search', 'Version Control', 'Collaboration Tools'],
      price: '$89/month',
      marketPrice: '$200-600/month',
      benefits: ['Process documents 10x faster', '99% accuracy in data extraction', 'Automated organization', 'Smart search capabilities'],
      icon: FileText,
      category: 'Document Management',
      popular: false,
      link: 'https://ziontechgroup.com/document-ai'
    },
    {
      title: 'Zion Social Media Manager',
      description: 'AI-powered social media management with content scheduling, engagement optimization, and performance analytics.',
      features: ['AI Content Scheduling', 'Engagement Optimization', 'Performance Analytics', 'Multi-platform Support', 'Hashtag Research', 'Competitor Analysis'],
      price: '$79/month',
      marketPrice: '$150-450/month',
      benefits: ['Increase engagement by 200%', 'Automated scheduling', 'Optimal posting times', 'Performance insights'],
      icon: Globe,
      category: 'Social Media',
      popular: false,
      link: 'https://ziontechgroup.com/social-media-manager'
    },
    {
      title: 'Zion HR Assistant',
      description: 'AI-powered HR management with automated screening, performance tracking, and employee engagement analytics.',
      features: ['AI Resume Screening', 'Performance Tracking', 'Engagement Analytics', 'Automated Scheduling', 'Compliance Monitoring', 'Employee Portal'],
      price: '$159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduce hiring time by 50%', 'Improve employee engagement', 'Automated compliance', 'Better candidate matching'],
      icon: Users,
      category: 'Human Resources',
      popular: false,
      link: 'https://ziontechgroup.com/hr-assistant'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Tools', count: microSaasTools.length },
    { id: 'Content', name: 'Content', count: microSaasTools.filter(t => t.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: microSaasTools.filter(t => t.category === 'Analytics').length },
    { id: 'Security', name: 'Security', count: microSaasTools.filter(t => t.category === 'Security').length },
    { id: 'Productivity', name: 'Productivity', count: microSaasTools.filter(t => t.category === 'Productivity').length },
    { id: 'Finance', name: 'Finance', count: microSaasTools.filter(t => t.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasTools.filter(t => t.category === 'Marketing').length },
    { id: 'Development', name: 'Development', count: microSaasTools.filter(t => t.category === 'Development').length },
    { id: 'Customer Success', name: 'Customer Success', count: microSaasTools.filter(t => t.category === 'Customer Success').length },
    { id: 'Document Management', name: 'Document Management', count: microSaasTools.filter(t => t.category === 'Document Management').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasTools.filter(t => t.category === 'Social Media').length },
    { id: 'Human Resources', name: 'Human Resources', count: microSaasTools.filter(t => t.category === 'Human Resources').length }
  ];

  const filteredTools = microSaasTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'popular') return b.popular ? 1 : -1;
    if (sortBy === 'price-low') return parseInt(a.price.replace('$', '').replace('/month', '')) - parseInt(b.price.replace('$', '').replace('/month', ''));
    if (sortBy === 'price-high') return parseInt(b.price.replace('$', '').replace('/month', '')) - parseInt(a.price.replace('$', '').replace('/month', ''));
    return a.title.localeCompare(b.title);
  });

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: CheckCircle
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI-powered intelligence and rapid deployment.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search micro SaaS tools..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-lg"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-lg"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-lg"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {filteredTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group relative">
                  {tool.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{tool.price}</div>
                      {tool.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{tool.marketPrice}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-block bg-white/10 text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto">
                    <a
                      href={tool.link}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs. 
                All our tools come with 30-day free trial and dedicated support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">30-Day Free Trial</h3>
                  <p className="text-gray-300 text-sm">Try any tool risk-free for 30 days</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300 text-sm">Dedicated support team always available</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-gray-300 text-sm">Get started in minutes, not days</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>🌐 <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default MicroSaasPage;