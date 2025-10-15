<<<<<<< HEAD
<<<<<<< HEAD
import SEOHead from '../components/SEOHead';";"
const AiContentGeneratorPage: React.FC = () => {
  return (
    <>
      <SEOHead= title ="ai-content-generator - Zion Tech Group - Zion Tech Group"";"
        description="Zion Tech Group ai-content-generator service page"";"
      />
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">ai-content-generator - Zion Tech Group</h1>";"
          <p  className ="text-gray-300">Coming soon...</p>";"
        </div>
      </div>
    </>
  )
}
export default AiContentGeneratorPage
=======
'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality, engaging content using advanced AI models trained on millions of articles, blogs, and marketing materials.',
      details: [
        'Natural language processing',
        'Context-aware generation',
        'Multiple content formats',
        'Brand voice adaptation'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Support',
      description: 'Create content in over 50 languages with native-level quality and cultural adaptation.',
      details: [
        '50+ languages supported',
        'Cultural context awareness',
        'Localized content generation',
        'Translation accuracy 95%+'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword integration and meta descriptions.',
      details: [
        'Keyword density optimization',
        'Meta description generation',
        'Title tag suggestions',
        'SEO score analysis'
      ]
    },
    {
      icon: ClockIcon,
      title: 'Content Scheduling',
      description: 'Plan and schedule your content across multiple platforms with automated publishing.',
      details: [
        'Multi-platform scheduling',
        'Optimal timing suggestions',
        'Content calendar management',
        'Automated publishing'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Brand Voice Customization',
      description: 'Train the AI to match your brand voice and tone for consistent messaging across all content.',
      details: [
        'Brand voice training',
        'Tone consistency',
        'Style guide integration',
        'Custom templates'
      ]
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Work together with your team on content creation, review, and approval workflows.',
      details: [
        'Real-time collaboration',
        'Comment and feedback system',
        'Approval workflows',
        'Version control'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Perfect for small businesses and individual creators',
      features: [
        '10,000 words per month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        '3 team members',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/mo',
      originalPrice: '$299/mo',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '50,000 words per month',
        'Unlimited templates',
        'Advanced SEO optimization',
        'Priority support',
        '10 team members',
        'Advanced analytics',
        'Multi-language support',
        'Content scheduling'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/mo',
      originalPrice: '$599/mo',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited words',
        'Custom AI training',
        'White-label options',
        'Dedicated support',
        'Unlimited team members',
        'Custom integrations',
        'API access',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'AI Content Generator Pro has revolutionized our content marketing. We\'ve increased our blog traffic by 300% while reducing content creation time by 70%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'CEO',
      content: 'The multi-language support is incredible. We can now create content for our global audience in their native languages, which has significantly improved engagement.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      role: 'Content Manager',
      content: 'The brand voice customization feature is a game-changer. Our clients love how consistent and on-brand all our content is across different platforms.',
      rating: 5
    }
  ];

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    // Simulate content generation
    setTimeout(() => {
      setGeneratedContent(`
# AI-Generated Blog Post: The Future of Digital Marketing

## Introduction

In today's rapidly evolving digital landscape, businesses must adapt to new technologies and consumer behaviors to stay competitive. Digital marketing has transformed from simple advertising to a complex ecosystem of data-driven strategies, personalized experiences, and automated processes.

## Key Trends Shaping Digital Marketing

### 1. Artificial Intelligence Integration
AI is revolutionizing how businesses approach marketing, from predictive analytics to personalized content creation. Companies using AI in their marketing strategies see 37% higher customer satisfaction rates.

### 2. Voice Search Optimization
With the rise of smart speakers and voice assistants, optimizing for voice search has become crucial. Voice search queries are typically longer and more conversational than traditional text searches.

### 3. Video Marketing Dominance
Video content continues to dominate social media platforms, with 85% of internet users watching video content monthly. Short-form videos, live streaming, and interactive content are particularly effective.

## Best Practices for 2024

- Focus on customer experience and personalization
- Invest in data analytics and measurement tools
- Embrace automation while maintaining human touch
- Prioritize mobile-first strategies
- Build authentic brand relationships

## Conclusion

The future of digital marketing lies in the seamless integration of technology and human creativity. By embracing AI tools, focusing on customer experience, and staying adaptable to new trends, businesses can build sustainable growth in the digital age.

---
*This content was generated using AI Content Generator Pro - Try it free for 14 days!*
      `);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <SEOHead
        title="AI Content Generator Pro - Zion Tech Group"
        description="Generate high-quality content for blogs, social media, and marketing materials using advanced AI. Try our AI Content Generator Pro with 14-day free trial."
        keywords="AI content generator, content creation, blog writing, social media content, marketing automation, AI writing tools"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-cyan-400 font-medium">AI Content</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                  AI Content Generator Pro
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                  Generate high-quality content for blogs, social media, and marketing materials using advanced AI. 
                  Create engaging, SEO-optimized content in minutes, not hours.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleGenerateContent}
                    disabled={isGenerating}
                    className="relative group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center">
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          Try Demo
                          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <Link
                    to="/contact"
                    className="border-2 border-cyan-400 text-cyan-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    Start Free Trial
                  </Link>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    14-day free trial
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    No credit card required
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">Live Demo</h3>
                  {generatedContent ? (
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed">
                        {generatedContent}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <SparklesIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Click "Try Demo" to generate sample content</p>
                    </div>
                  )}
                </div>
              </div>
=======
import React from 'react'
import { ArrowRight  } from 'lucide-react'
import { CheckCircle  } from 'lucide-react'
import { Star  } from 'lucide-react'
import { Users  } from 'lucide-react'
import { Clock  } from 'lucide-react'
import { DollarSign  } from 'lucide-react'
import { Shield  } from 'lucide-react'
import { Code  } from 'lucide-react'
import { Database  } from 'lucide-react'
import { Mail  } from 'lucide-react'
import { Settings  } from 'lucide-react'
import { Target  } from 'lucide-react'
import { TrendingUp  } from 'lucide-react'
import { PieChart  } from 'lucide-react'
import { MessageSquare  } from 'lucide-react'
import { Heart  } from 'lucide-react'
import { Globe  } from 'lucide-react'
import { Smartphone  } from 'lucide-react'
import { Network  } from 'lucide-react'
import { Lock  } from 'lucide-react'
import { Cpu  } from 'lucide-react'
import { Wifi  } from 'lucide-react'
import { Building2  } from 'lucide-react'
import { Briefcase  } from 'lucide-react'
import { Lightbulb  } from 'lucide-react'
import { Link  } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO"'"
const Page  = () => {const features  = [{icon: <CheckCircle className="w-8 h-8" />,";
      title: 'Advanced Features','"'"
      description: 'Cutting-edge technology for maximum efficiency'";
    },
    {
      icon: <Shield className="w-8 h-8" />,";
      title: 'Secure & Reliable','"'"
      description: 'Enterprise-grade security and 99.9% uptime'";
    },
    {
      icon: <Users className="w-8 h-8" />,";
      title: 'Expert Support','"'"
      description: '24/7 support from our team of specialists'";
    }
  ];
  return (
    <>
      <EnhancedSEO: title ="Page - Zion Tech Group";
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.";
        keywords="page, business solutions, technology services, professional services";
      />
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";
        {/* Hero Section */}
        <section: className ="relative py-20 px-4 sm:px-6 lg:px-8">";
          <div: className ="max-w-7xl mx-auto text-center">";
            <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">";
              Page
              <span: className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">";
                Solutions
              </span>
            </h1>
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
              Professional page services designed to help your business succeed and grow.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link: to ="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group";
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />";
              </Link>
              <Link: to ="/demo";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300";
              >
                View Demo
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Content Creation</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to create, optimize, and distribute high-quality content at scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
=======
        <section: className ="py-20 px-4 sm:px-6 lg:px-8">";
          <div: className ="max-w-7xl mx-auto">";
            <div: className ="text-center mb-16">";
              <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">";
                Why Choose Our Page Services?
              </h2>
              <p: className ="text-xl text-gray-300 max-w-2xl mx-auto">";
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";
              {features.map((feature, index) => (
                <div: key ={index} className="text-center">";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>";
                  <p: className ="text-gray-300">{feature.description}</p>";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the plan that fits your content creation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular
                      ? 'border-cyan-500 shadow-cyan-500/20'
                      : 'border-slate-700 hover:border-cyan-500 hover:shadow-cyan-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">{plan.originalPrice}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover:scale-105'
                        : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of satisfied customers who have transformed their content creation process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-cyan-900/40 via-slate-900 to-blue-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your 14-day free trial today and experience the power of AI-driven content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="relative group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
=======
        <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">";
          <div: className ="max-w-4xl mx-auto text-center">";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";
              Ready to Get Started?
            </h2>
            <p: className ="text-xl text-gray-300 mb-8">";
              Let's discuss how our page services can help your business succeed.'";
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <Link: to ="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group";
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />";
              </Link>
              <Link: to ="/services";
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
<<<<<<< HEAD

export default AIContentGeneratorPage;
>>>>>>> main
=======
const page  = React.lazy(() => import('./page'))'"'"
export default page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
