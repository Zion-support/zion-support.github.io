'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, Mail, MapPin, FileText, MessageSquare, Image, BarChart, Calendar, Calculator, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const microSaasServices = [
    {
      id: 'ai-writing-assistant',
      title: 'AI Writing Assistant Pro',
      description: 'Advanced AI-powered writing tool with grammar checking, style suggestions, and content optimization.',
      icon: FileText,
      price: '$29/month',
      originalPrice: '$49/month',
      category: 'Writing & Content',
      features: [
        'AI-powered grammar and style checking',
        'Content optimization suggestions',
        'Tone and voice analysis',
        'Plagiarism detection',
        'Multi-language support',
        'Team collaboration tools',
        'API integration',
        'Custom writing templates'
      ],
      benefits: [
        'Improve writing quality by 85%',
        'Save 60% of writing time',
        'Reduce editing costs by 70%',
        'Enhance brand consistency'
      ],
      technologies: ['OpenAI GPT-4', 'NLP Processing', 'Machine Learning', 'REST APIs'],
      marketPrice: '$49-99/month',
      popularity: 'Most Popular',
      rating: 4.9,
      users: '10,000+',
      freeTrial: '14 days',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Generate high-quality blog posts, articles, social media content, and marketing copy using AI.',
      icon: MessageSquare,
      price: '$39/month',
      originalPrice: '$69/month',
      category: 'Writing & Content',
      features: [
        'Blog post generation',
        'Social media content creation',
        'Email marketing copy',
        'Product descriptions',
        'SEO-optimized content',
        'Content calendar planning',
        'Brand voice customization',
        'Bulk content generation'
      ],
      benefits: [
        'Generate 100+ articles per month',
        'Increase content output by 300%',
        'Improve SEO rankings by 40%',
        'Reduce content creation costs by 80%'
      ],
      technologies: ['GPT-4', 'Content Analysis', 'SEO Tools', 'Scheduling APIs'],
      marketPrice: '$69-149/month',
      popularity: 'Trending',
      rating: 4.8,
      users: '8,500+',
      freeTrial: '7 days',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-image-generator',
      title: 'AI Image Generator Studio',
      description: 'Create stunning images, graphics, and visual content using advanced AI image generation.',
      icon: Image,
      price: '$49/month',
      originalPrice: '$89/month',
      category: 'Design & Visual',
      features: [
        'AI image generation',
        'Style transfer',
        'Background removal',
        'Image upscaling',
        'Custom brand templates',
        'Batch processing',
        'Commercial license included',
        'API access'
      ],
      benefits: [
        'Create unlimited images',
        'Save 90% on design costs',
        'Generate images in seconds',
        'Professional quality results'
      ],
      technologies: ['DALL-E 3', 'Stable Diffusion', 'Computer Vision', 'Image Processing'],
      marketPrice: '$89-199/month',
      popularity: 'Hot',
      rating: 4.9,
      users: '15,000+',
      freeTrial: '5 days',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'smart-analytics',
      title: 'Smart Analytics Dashboard',
      description: 'AI-powered business analytics with automated insights, predictions, and reporting.',
      icon: BarChart,
      price: '$49/month',
      originalPrice: '$89/month',
      category: 'Analytics & Data',
      features: [
        'Automated data analysis',
        'Predictive insights',
        'Custom dashboards',
        'Real-time monitoring',
        'Alert system',
        'Data visualization',
        'Export capabilities',
        'API integration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends automatically',
        'Save 70% on analysis time',
        'Improve business performance'
      ],
      technologies: ['Machine Learning', 'Data Visualization', 'Predictive Analytics', 'REST APIs'],
      marketPrice: '$89-199/month',
      popularity: 'Essential',
      rating: 4.9,
      users: '18,000+',
      freeTrial: '30 days',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-scheduler',
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling system that optimizes meetings, appointments, and resource allocation.',
      icon: Calendar,
      price: '$29/month',
      originalPrice: '$49/month',
      category: 'Productivity',
      features: [
        'AI-powered scheduling',
        'Conflict resolution',
        'Time zone management',
        'Resource optimization',
        'Meeting analytics',
        'Integration with calendars',
        'Automated reminders',
        'Team coordination'
      ],
      benefits: [
        'Reduce scheduling conflicts by 90%',
        'Save 5+ hours per week',
        'Optimize meeting efficiency',
        'Improve team productivity'
      ],
      technologies: ['Scheduling AI', 'Calendar APIs', 'Time Zone Logic', 'Optimization Algorithms'],
      marketPrice: '$49-99/month',
      popularity: 'Productive',
      rating: 4.7,
      users: '9,500+',
      freeTrial: '14 days',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'expense-tracker',
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense management with receipt scanning, categorization, and financial insights.',
      icon: Calculator,
      price: '$19/month',
      originalPrice: '$39/month',
      category: 'Finance',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense analytics',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Team expense management',
        'Integration with accounting'
      ],
      benefits: [
        'Save 10+ hours per month',
        'Improve expense accuracy',
        'Simplify tax preparation',
        'Better financial control'
      ],
      technologies: ['OCR Technology', 'Machine Learning', 'Financial APIs', 'Data Processing'],
      marketPrice: '$39-79/month',
      popularity: 'Essential',
      rating: 4.8,
      users: '22,000+',
      freeTrial: '30 days',
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: microSaasServices.length },
    { name: 'Writing & Content', count: microSaasServices.filter(s => s.category === 'Writing & Content').length },
    { name: 'Design & Visual', count: microSaasServices.filter(s => s.category === 'Design & Visual').length },
    { name: 'Analytics & Data', count: microSaasServices.filter(s => s.category === 'Analytics & Data').length },
    { name: 'Productivity', count: microSaasServices.filter(s => s.category === 'Productivity').length },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS tools for business productivity, marketing, development, and more. Starting at $19/month with free trials." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity tools, marketing automation, development tools" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              50+ AI-powered micro SAAS tools designed to boost productivity, streamline operations, and accelerate business growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">AI Tools</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="text-3xl font-bold text-green-400 mb-2">$19</div>
                <div className="text-gray-300">Starting Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="text-3xl font-bold text-purple-400 mb-2">100K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="text-3xl font-bold text-orange-400 mb-2">4.8</div>
                <div className="text-gray-300">Avg Rating</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-white font-medium">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-white font-medium">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-white font-medium">Middletown, DE</span>
                </div>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Choose Your Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-cyan-500/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cyber-card">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({service.rating})</span>
                        </div>
                      </div>
                    </div>
                    {service.popularity && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.popularity === 'Most Popular' ? 'bg-green-100 text-green-800' :
                        service.popularity === 'Trending' ? 'bg-blue-100 text-blue-800' :
                        service.popularity === 'Hot' ? 'bg-red-100 text-red-800' :
                        service.popularity === 'New' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {service.popularity}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">{service.price}</span>
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Market: {service.marketPrice}</span>
                      <span>•</span>
                      <span>{service.users} users</span>
                      <span>•</span>
                      <span>{service.freeTrial} free trial</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-gray-500">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                    >
                      Start Free Trial
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      {service.contactInfo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get started with our micro SAAS solutions today and boost your productivity with AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;
