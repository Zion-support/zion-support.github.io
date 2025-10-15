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
const page  = React.lazy(() => import('./page'))'"'"
export default page;
