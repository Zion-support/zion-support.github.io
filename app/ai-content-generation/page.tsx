import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      price: '$199/month',
      features: [
        'SEO-optimized content generation',
        'Brand voice customization',
        'Research integration',
        'Multi-language support',
        'Content calendar planning'
      ],
      icon: MessageSquare,
      color: 'text-blue-400'
    },
    {
      title: 'Social Media Content Suite',
      description: 'Comprehensive social media content creation for all platforms with engagement optimization and scheduling.',
      price: '$149/month',
      features: [
        'Platform-specific optimization',
        'Visual content generation',
        'Hashtag research and optimization',
        'Engagement prediction',
        'Content scheduling'
      ],
      icon: Globe,
      color: 'text-purple-400'
    },
    {
      title: 'Email Marketing Content AI',
      description: 'Professional email content generation with personalization, A/B testing, and conversion optimization.',
      price: '$99/month',
      features: [
        'Personalized email content',
        'A/B testing variants',
        'Subject line optimization',
        'Call-to-action optimization',
        'Performance analytics'
      ],
      icon: Mail,
      color: 'text-green-400'
    },
    {
      title: 'Product Description Generator',
      description: 'E-commerce product descriptions with conversion optimization, SEO, and multi-variant support.',
      price: '$79/month',
      features: [
        'Conversion-optimized descriptions',
        'SEO-friendly content',
        'Multiple variants per product',
        'Category-specific templates',
        'Bulk generation support'
      ],
      icon: Target,
      color: 'text-orange-400'
    },
    {
      title: 'Technical Documentation AI',
      description: 'Professional technical documentation generation with code examples, API docs, and user guides.',
      price: '$299/month',
      features: [
        'Code documentation generation',
        'API documentation',
        'User guide creation',
        'Technical writing assistance',
        'Version control integration'
      ],
      icon: Cpu,
      color: 'text-cyan-400'
    },
    {
      title: 'Marketing Copy Generator',
      description: 'High-converting marketing copy for ads, landing pages, and sales materials with psychological triggers.',
      price: '$179/month',
      features: [
        'Psychological trigger integration',
        'Conversion rate optimization',
        'A/B testing support',
        'Industry-specific templates',
        'Performance tracking'
      ],
      icon: BarChart,
      color: 'text-pink-400'
    }
  ];

  const useCases = [
    {
      title: 'Content Marketing Agencies',
      description: 'Scale content production for multiple clients with consistent quality and brand voice.',
      icon: Users,
      benefits: ['10x content production', 'Consistent brand voice', 'Reduced costs', 'Faster delivery']
    },
    {
      title: 'E-commerce Businesses',
      description: 'Generate product descriptions, marketing copy, and social media content at scale.',
      icon: Globe,
      benefits: ['Bulk content generation', 'SEO optimization', 'Conversion focus', 'Multi-language support']
    },
    {
      title: 'SaaS Companies',
      description: 'Create technical documentation, user guides, and marketing materials efficiently.',
      icon: Cpu,
      benefits: ['Technical accuracy', 'User-friendly content', 'Version control', 'API integration']
    },
    {
      title: 'Digital Marketing Teams',
      description: 'Produce high-quality content for campaigns, social media, and email marketing.',
      icon: TrendingUp,
      benefits: ['Campaign optimization', 'Engagement focus', 'Performance tracking', 'Creative variety']
    }
  ];

  const features = [
    {
      title: 'Advanced AI Models',
      description: 'State-of-the-art language models trained on diverse content types and industries.',
      icon: Brain
    },
    {
      title: 'Brand Voice Training',
      description: 'Customize AI to match your brand voice, tone, and style preferences.',
      icon: Shield
    },
    {
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword integration.',
      icon: Target
    },
    {
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with cultural and linguistic accuracy.',
      icon: Globe
    },
    {
      title: 'Content Templates',
      description: 'Pre-built templates for various content types and industries.',
      icon: MessageSquare
    },
    {
      title: 'Real-time Collaboration',
      description: 'Team collaboration features with version control and commenting.',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered content generation for blogs, social media, emails, and marketing materials. Scale your content production with our advanced AI tools." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, email marketing, content automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <MessageSquare className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              AI Content Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content strategy with our revolutionary AI-powered content generation tools. 
              Create high-quality, engaging content at scale for blogs, social media, emails, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Explore Services
              </a>
              <a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Content Generation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <useCase.icon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Content Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using our AI content generation tools to scale their content production and improve engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIContentGenerationPage;