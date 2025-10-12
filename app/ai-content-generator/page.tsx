import React, { useState } from 'react';
import { Brain, ArrowRight, MessageSquare, Image, Code, BookOpen, PenTool } from 'lucide-react';
'use client';






const AiContentGeneratorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Writing',
      description: 'Advanced natural language processing for human-like content generation',
      benefits: ['Context-aware writing', 'Multiple writing styles', 'Industry-specific content']
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level quality',
      benefits: ['Automatic translation', 'Cultural adaptation', 'Local SEO optimization']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to maximize your content\'s search visibility',
      benefits: ['Keyword optimization', 'Meta descriptions', 'Content structure analysis']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Content Analytics',
      description: 'Track performance and optimize your content strategy',
      benefits: ['Engagement metrics', 'A/B testing', 'Performance insights']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Plagiarism Detection',
      description: 'Ensure originality with built-in plagiarism checking',
      benefits: ['Real-time checking', 'Source citations', 'Originality reports']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Batch Processing',
      description: 'Generate multiple pieces of content simultaneously',
      benefits: ['Bulk content creation', 'Template automation', 'Workflow optimization']
    }
  ];

  const contentTypes = [
    {
      type: 'Blog Posts',
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      description: 'Engaging blog articles with SEO optimization',
      examples: ['How-to guides', 'Industry insights', 'Product reviews']
    },
    {
      type: 'Social Media',
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      description: 'Captivating social media content for all platforms',
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles']
    },
    {
      type: 'Marketing Copy',
      icon: <Target className="w-6 h-6 text-green-400" />,
      description: 'Compelling marketing materials and ad copy',
      examples: ['Email campaigns', 'Landing pages', 'Product descriptions']
    },
    {
      type: 'Technical Writing',
      icon: <Code className="w-6 h-6 text-purple-400" />,
      description: 'Precise technical documentation and guides',
      examples: ['API documentation', 'User manuals', 'Technical specs']
    },
    {
      type: 'Creative Content',
      icon: <PenTool className="w-6 h-6 text-pink-400" />,
      description: 'Creative writing and storytelling content',
      examples: ['Stories', 'Poems', 'Creative narratives']
    },
    {
      type: 'Multimedia',
      icon: <Image className="w-6 h-6 text-orange-400" />,
      description: 'Content for images, videos, and audio',
      examples: ['Video scripts', 'Image captions', 'Podcast outlines']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '10,000 words per month',
        '5 content types',
        'Basic SEO optimization',
        'Email support',
        'Standard templates'
      ],
      popular: false;
    },
    {
      name: 'Pro',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words per month',
        'All content types',
        'Advanced SEO tools',
        'Priority support',
        'Custom templates',
        'Analytics dashboard',
        'Team collaboration'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited words',
        'All features included',
        'Custom AI training',
        'Dedicated support',
        'API access',
        'White-label options',
        'Custom integrations'
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'The AI Content Generator has revolutionized our content marketing. We\'ve increased our blog traffic by 300% in just 3 months.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Pro',
      content: 'The quality of generated content is incredible. It\'s hard to tell it\'s AI-generated. Our team saves 10+ hours per week.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      content: 'The SEO optimization features are game-changing. Our search rankings improved significantly across all target keywords.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Words Generated', icon: <FileText className="w-6 h-6" /> },
    { number: '50+', label: 'Languages Supported', icon: <Globe className="w-6 h-6" /> },
    { number: '99.8%', label: 'Customer Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'AI Processing', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Content Generator - Zion Tech Group | Advanced AI Writing Tool</title>
        <meta name="description" content="Transform your content strategy with our advanced AI Content Generator. Create high-quality, SEO-optimized content in 50+ languages. Boost your content marketing with AI-powered writing." />
        <meta name="keywords" content="AI content generator, AI writing tool, content creation, SEO content, blog writing, social media content, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Generator;
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your content strategy with our advanced AI-powered writing tool. 
            Generate high-quality, SEO-optimized content in 50+ languages with just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link;
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link;
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All AI Services;
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful AI Features</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI Content Generator comes packed with advanced features to create;
              professional-quality content that engages and converts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Content Types We Support</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Generate any type of content you need for your business, 
              from blog posts to social media content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {type.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{type.type}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-1">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-400">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to scale with your content needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link;
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started;
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their content strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start generating high-quality content with our AI Content Generator. 
              Join thousands of businesses already using our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial;
                <Sparkles className="w-5 h-5 ml-2" />
              </Link>
              <Link;
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More;
                <Wand2 className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
}