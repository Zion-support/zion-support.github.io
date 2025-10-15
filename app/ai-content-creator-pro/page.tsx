import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

const AIContentCreatorProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$39',
      period: '/month',
      features: [
        '10,000 words per month',
        '5 content templates',
        'Basic AI writing tools',
        'Social media posts',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: [
        '50,000 words per month',
        'Unlimited templates',
        'Advanced AI features',
        'Multi-language support',
        'SEO optimization',
        'Priority support',
        'Brand voice training',
        'Content calendar'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      features: [
        'Unlimited words',
        'Custom AI models',
        'White-label solution',
        'Team collaboration',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const features = [
    {
      title: 'AI-Powered Writing Assistant',
      description: 'Generate high-quality content for any purpose using advanced natural language processing and machine learning.',
      icon: '✍️',
      benefits: ['10x faster content creation', 'Consistent brand voice', 'Error-free writing']
    },
    {
      title: 'Multi-Format Content Generation',
      description: 'Create blog posts, social media content, emails, ads, and more with specialized AI models for each format.',
      icon: '📝',
      benefits: ['Versatile content types', 'Format-specific optimization', 'Consistent quality across channels']
    },
    {
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword suggestions, meta descriptions, and structure.',
      icon: '🔍',
      benefits: ['Higher search rankings', 'Better organic traffic', 'SEO best practices built-in']
    },
    {
      title: 'Brand Voice Training',
      description: 'Train the AI to match your unique brand voice and tone across all content types.',
      icon: '🎭',
      benefits: ['Consistent brand identity', 'Custom tone adaptation', 'Brand-specific language']
    },
    {
      title: 'Content Planning & Calendar',
      description: 'Plan and schedule content with AI-powered topic suggestions and optimal posting times.',
      icon: '📅',
      benefits: ['Strategic content planning', 'Optimal timing', 'Content gap analysis']
    },
    {
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with native-level quality and cultural adaptation.',
      icon: '🌍',
      benefits: ['Global reach', 'Cultural adaptation', 'Native-level quality']
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'Long-form content optimized for engagement and SEO',
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership'],
      icon: '📰'
    },
    {
      title: 'Social Media Content',
      description: 'Engaging posts for all major social platforms',
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions'],
      icon: '📱'
    },
    {
      title: 'Email Marketing',
      description: 'High-converting email campaigns and newsletters',
      examples: ['Welcome series', 'Product announcements', 'Newsletters', 'Promotional emails'],
      icon: '📧'
    },
    {
      title: 'Advertising Copy',
      description: 'Compelling ad copy for all platforms and formats',
      examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display banners'],
      icon: '📢'
    },
    {
      title: 'Product Descriptions',
      description: 'Persuasive product copy that drives conversions',
      examples: ['E-commerce listings', 'Feature descriptions', 'Benefit-focused copy', 'Call-to-actions'],
      icon: '🛍️'
    },
    {
      title: 'Technical Documentation',
      description: 'Clear and comprehensive technical content',
      examples: ['API documentation', 'User guides', 'Tutorials', 'Help articles'],
      icon: '📚'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Content Marketing Manager',
      company: 'Digital Innovations',
      content: 'AI Content Creator Pro has revolutionized our content strategy. We\'re producing 5x more content with better quality and engagement rates.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Founder',
      company: 'StartupHub',
      content: 'The brand voice training feature is incredible. The AI perfectly captures our tone and style across all content types.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'SEO Specialist',
      company: 'Growth Marketing Co',
      content: 'The SEO optimization features have improved our organic traffic by 150%. The content ranks better and converts more effectively.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Content Creator Pro - Advanced Content Generation Platform | Zion Tech Group"
        description="Create high-quality content at scale with AI-powered writing tools. Generate blog posts, social media content, emails, and more. Start your free trial today."
        keywords="AI content creation, content writing, blog writing, social media content, email marketing, content generation"
        canonicalUrl="https://ziontechgroup.com/ai-content-creator-pro"
      />
      
      <div className="min-h-screen futuristic-bg">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 fade-in-up">
                AI Content Creator Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
                Create compelling content at scale with AI-powered writing tools. 
                Generate blog posts, social media content, emails, and more in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
                <button className="futuristic-btn">
                  Start Free Trial
                </button>
                <button className="futuristic-btn futuristic-btn-secondary">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-blue mb-4">Powerful AI Writing Features</h2>
              <p className="text-xl text-gray-300">Everything you need to create amazing content at scale</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card futuristic-card-enter p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold neon-text-purple mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Types Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-pink mb-4">Create Any Type of Content</h2>
              <p className="text-xl text-gray-300">From blog posts to social media, we've got you covered</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="futuristic-card p-6">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold neon-text-green mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-neon-orange rounded-full mr-3"></span>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-orange mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your content needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`futuristic-card p-8 relative ${plan.popular ? 'ring-2 ring-neon-cyan' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-neon-cyan text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold neon-text mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold neon-text-blue">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-neon-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full futuristic-btn ${plan.popular ? '' : 'futuristic-btn-secondary'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-green mb-4">Loved by Content Creators</h2>
              <p className="text-xl text-gray-300">See what our users are saying about AI Content Creator Pro</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="futuristic-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-neon-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold neon-text">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Transform Your Content Strategy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators, marketers, and businesses using AI Content Creator Pro to scale their content production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn">
                Start Your Free Trial
              </button>
              <button className="futuristic-btn futuristic-btn-secondary">
                View Pricing
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentCreatorProPage;