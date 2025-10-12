import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Brain, Users, Type, Copy, FileText, BarChart3, Globe, Shield, CheckCircle, Star } from 'lucide-react';

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI-Powered Writing',
      description: 'Advanced GPT-4 and Claude-3 powered content generation with 99.9% accuracy and human-like quality.',
      benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation']
    },
    {
      icon: <FileText className="w-5 h-5 ml-2" />,
      title: 'Content Templates',
      description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
      benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools with keyword research, density analysis, and readability scoring.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Readability analysis', 'Competitor analysis']
    },
    {
      icon: <Palette className="w-5 h-5 ml-2" />,
      title: 'Brand Voice Training',
      description: 'Train AI to match your unique brand voice and tone across all content types.',
      benefits: ['Voice consistency', 'Tone adaptation', 'Style guidelines', 'Brand personality']
    },
    {
      icon: <Globe className="w-5 h-5 ml-2" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Local SEO optimization', 'Regional preferences']
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Plagiarism Detection',
      description: 'Built-in plagiarism checker with 99.8% accuracy and originality scoring.',
      benefits: ['Real-time checking', 'Originality reports', 'Citation suggestions', 'Copyright compliance']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 10,000 words/month',
        'Basic AI features',
        '10 content templates',
        'Email support',
        'Basic SEO tools'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for content teams',
      features: [
        'Up to 100,000 words/month',
        'Advanced AI features',
        'All content templates',
        'Priority support',
        'Advanced SEO tools',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Agency',
      content: 'AI Content Generator increased our content production by 500%. The quality is consistently excellent.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Brand',
      content: 'The SEO optimization features helped us rank #1 for our target keywords. ROI is incredible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'SaaS Startup',
      content: 'The brand voice training feature is amazing. All our content now sounds perfectly on-brand.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Content Generator - Create High-Quality Content | Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with AI. Blog posts, social media, emails, and more. 500+ templates, SEO optimization, and brand voice training. Start your free trial today." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, social media content, SEO content, brand voice" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Type className="w-8 h-8 text-green-400 mr-3" />
            <span className="text-green-400 font-semibold">AI-Powered Content Creation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate high-quality content with AI. Create blog posts, social media content, emails, 
            and more with 500+ templates, SEO optimization, and brand voice training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Content Features</h2>
            <p className="text-xl text-gray-300">Everything you need to create engaging, high-quality content</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300">Flexible pricing for content creators and teams of all sizes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-400/40 scale-105 shadow-2xl shadow-green-500/20' 
                  : 'border-green-500/20 hover:border-green-400/40'
              }`}>
                {plan.popular && (
                  <div className="flex items-center justify-center mb-4 text-green-400">
                    <Star className="w-5 h-5 mr-2" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Content Creators</h2>
            <p className="text-xl text-gray-300">See how AI Content Generator transforms content creation workflows</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Content Creation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of content creators who are already using AI Content Generator to produce better content faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
              Start Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}