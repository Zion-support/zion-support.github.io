<<<<<<< HEAD
'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle, FileText, MessageCircle, Target, Globe, Send, BarChart3, Shield, Zap, DollarSign, Clock, Star, Activity, Lock, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

export default function AIContentGeneratorPage() {
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { PenTool, Brain, Zap, Target, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, FileText, Image, Video, Mic } from 'lucide-react'
const AiContentGeneratorPage: React.FC = () => {
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
<<<<<<< HEAD
      description: 'Advanced AI-powered content generation with high accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: FileText,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: MessageCircle,
      title: 'Social Media Content',
      description: 'Generate engaging social media posts, captions, and hashtags for all platforms.',
      benefits: ['Platform-specific content', 'Trending hashtags', 'Engagement optimization', 'Visual content suggestions']
=======
      description: 'Advanced AI that creates high-quality content in any style or tone',
      details: ['Natural Language Generation', 'Style Adaptation', 'Tone Matching', 'Brand Voice']
    },
    {
      icon: FileText,
      title: 'Multiple Content Types',
      description: 'Generate blogs, articles, social media posts, emails, and more',
      details: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions']
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Create stunning images and graphics to accompany your content',
      details: ['AI Image Generation', 'Custom Graphics', 'Brand Templates', 'Stock Photos']
    },
    {
      icon: Video,
      title: 'Video Scripts',
      description: 'Generate engaging video scripts and storyboards',
      details: ['YouTube Scripts', 'Tutorial Videos', 'Marketing Videos', 'Storyboards']
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
    },
    {
      icon: Target,
      title: 'SEO Optimization',
<<<<<<< HEAD
      description: 'AI-optimized content that ranks higher in search engines and drives organic traffic.',
      benefits: ['Keyword research', 'Content optimization', 'Meta descriptions', 'Schema markup']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Generator</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content creation with our advanced AI-powered writing assistant. Generate high-quality, engaging content for any platform or purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Generating
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link href="/ai-services" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              View Examples
            </Link>
=======
      description: 'Automatically optimize content for search engines',
      details: ['Keyword Integration', 'Meta Descriptions', 'Title Optimization', 'SEO Scoring']
    },
    {
      icon: Zap,
      title: 'Bulk Generation',
      description: 'Create hundreds of pieces of content in minutes',
      details: ['Batch Processing', 'Template System', 'Auto-scheduling', 'Content Calendar']
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '1,000 words/month',
        'Basic AI models',
        '5 content types',
        'Standard templates',
        'Email support',
        '1 user'
  ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for content creators and agencies',
      features: [
        '10,000 words/month',
        'Advanced AI models',
        'All content types',
        'Custom templates',
        'Priority support',
        '3 users',
        'API access'
  ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large teams and organizations',
      features: [
        'Unlimited words',
        'Premium AI models',
        'All features included',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations'
  ],
      popular: false
  ]
  const stats = [
    { value: '10x', label: 'Faster Content Creation', icon: <Clock className="w-8 h-8 text-green-400" /> },
    { value: '95%', label: 'Content Quality Score', icon: <Star className="w-8 h-8 text-blue-400" /> },
    { value: '80%', label: 'Time Savings', icon: <Zap className="w-8 h-8 text-purple-400" /> },
    { value: '50+', label: 'Content Types', icon: <FileText className="w-8 h-8 text-cyan-400" />
  ]
  const contentTypes = [,
    {
      title: 'Blog Posts',
      description: 'Long-form articles optimized for SEO and engagement',
      icon: <FileText className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Social Media',
      description: 'Captions, posts, and stories for all platforms',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Email Marketing',
      description: 'Newsletters, campaigns, and automated sequences',
      icon: <Target className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Product Descriptions',
      description: 'Compelling product copy that converts',
      icon: <BarChart className="w-8 h-8 text-purple-400" />
  ]
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Manager, TechBlog',
      content: 'AI Content Generator increased our content output by 500% while maintaining quality.',
      rating: 5,
      company: 'TechBlog',
    },
    {
      name: 'Mike Chen',
      role: 'Marketing Director, E-commerce Plus',
      content: 'The SEO optimization feature improved our organic traffic by 200% in 3 months.',
      rating: 5,
      company: 'E-commerce Plus',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Founder, Creative Agency',
      content: 'We can now serve 3x more clients with the same team. Game-changing tool!',
      rating: 5,
      company: 'Creative Agency'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      
      {/* Hero Section */
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Content Generator</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create high-quality content 10x faster with AI. Generate blogs, social media posts, 
              emails, and more with just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>
                <div className="flex justify-center mb-4">
                  {stat.icon
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value
                </div>
                <div className="text-gray-300">
                  {stat.label
                </div>
              </div>
            ))}
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI content generator comes with everything you need to create compelling content at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional content at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4"></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
                    </li>
                  ))
                </ul>
              </div>
            ))
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start generating high-quality content with our AI-powered writing assistant today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="w-8 h-8" />
              </Link>
              <Link href="/ai-services" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Types
            </h2>
            <p className="text-xl text-gray-300">
              Generate any type of content your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex justify-center mb-4">
                  {type.icon
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))
          </div>
        </div>
      </section>
      {/* Pricing Section */
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your content needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 bg-white/15' : ''
              }`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature
                    </li>
                  ))
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))
          </div>
        </div>
      </section>
      {/* Testimonials Section */
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of content creators using our AI platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"></div>
                <div className="flex items-center mb-4"></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))
          </div>
        </div>
      </section>
      {/* CTA Section */
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI content generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )

export default AiContentGeneratorPage
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
