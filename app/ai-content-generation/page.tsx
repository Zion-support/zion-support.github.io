import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Star, Zap, Globe, Brain, Target, BarChart, MessageSquare, Eye, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Content Generation - Revolutionary Content Creation | Zion Tech Group',
  description: 'Transform your content strategy with our AI-powered content generation services. Create blogs, social media, emails, and marketing materials with cutting-edge AI technology.',
  keywords: 'AI content generation, content creation, blog writing, social media content, marketing automation, AI writing tools',
  openGraph: {
    title: 'AI Content Generation - Revolutionary Content Creation',
    description: 'Transform your content strategy with our AI-powered content generation services.',
    type: 'website',
  },
};

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '✍️',
      price: '$199/month',
      features: [
        'SEO-optimized content generation',
        'Research integration',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar automation',
        'Performance analytics'
      ]
    },
    {
      title: 'Social Media AI Suite',
      description: 'Complete social media content creation and scheduling with AI-powered engagement optimization.',
      icon: '📱',
      price: '$149/month',
      features: [
        'Platform-specific content creation',
        'Hashtag optimization',
        'Engagement prediction',
        'Visual content generation',
        'Post scheduling automation',
        'Trend analysis'
      ]
    },
    {
      title: 'Email Marketing AI',
      description: 'Intelligent email content creation with personalization, A/B testing, and conversion optimization.',
      icon: '📧',
      price: '$179/month',
      features: [
        'Personalized email content',
        'Subject line optimization',
        'A/B testing automation',
        'Send time optimization',
        'Conversion tracking',
        'List segmentation'
      ]
    },
    {
      title: 'E-commerce Content AI',
      description: 'Product descriptions, reviews, and marketing copy generation for e-commerce platforms.',
      icon: '🛒',
      price: '$129/month',
      features: [
        'Product description generation',
        'Review analysis and response',
        'Marketing copy creation',
        'Category optimization',
        'SEO-friendly content',
        'Multi-platform support'
      ]
    },
    {
      title: 'Technical Writing AI',
      description: 'Professional technical documentation, API guides, and developer content creation.',
      icon: '⚙️',
      price: '$299/month',
      features: [
        'API documentation generation',
        'Technical specification writing',
        'Code comment generation',
        'User manual creation',
        'Developer guide automation',
        'Version control integration'
      ]
    },
    {
      title: 'Creative Writing AI',
      description: 'Creative content generation including stories, scripts, and creative marketing materials.',
      icon: '🎨',
      price: '$159/month',
      features: [
        'Creative story generation',
        'Script writing assistance',
        'Character development',
        'Plot structure optimization',
        'Creative brainstorming',
        'Style adaptation'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: '10x Faster Content Creation',
      description: 'Generate high-quality content in minutes instead of hours, dramatically increasing your content output.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-400" />,
      title: 'SEO Optimized',
      description: 'All content is automatically optimized for search engines with keyword integration and meta descriptions.'
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-400" />,
      title: 'Brand Voice Consistency',
      description: 'AI learns your brand voice and maintains consistency across all content types and platforms.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-400" />,
      title: 'Performance Analytics',
      description: 'Track content performance with detailed analytics and optimization recommendations.'
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      title: 'Multi-Language Support',
      description: 'Create content in over 50 languages with native-level quality and cultural adaptation.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-pink-400" />,
      title: 'Engagement Optimization',
      description: 'AI analyzes engagement patterns to create content that resonates with your target audience.'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Generate product descriptions, category content, and marketing materials at scale.',
      results: '300% increase in content production, 40% improvement in conversion rates'
    },
    {
      industry: 'SaaS',
      description: 'Create technical documentation, user guides, and marketing content for software products.',
      results: '50% reduction in content creation time, 60% improvement in user onboarding'
    },
    {
      industry: 'Marketing Agencies',
      description: 'Scale content production for multiple clients across various industries and platforms.',
      results: '5x increase in client capacity, 80% reduction in content costs'
    },
    {
      industry: 'Publishing',
      description: 'Generate articles, blog posts, and editorial content with consistent quality and style.',
      results: '200% increase in publishing frequency, 35% improvement in reader engagement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Content Generation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Revolutionize your content strategy with our AI-powered content generation services. 
              Create high-quality, engaging content at scale across all platforms and formats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call: (302) 464-0950
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </header>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Content Generation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm">{service.description}</p>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <a 
                      href="/contact" 
                      className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our AI Content Generation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Industry Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4">
                    <p className="text-green-300 text-sm font-semibold">Results: {useCase.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-gray-200 mb-8 text-lg">
              Join thousands of businesses already using our AI content generation to scale their content production and improve engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentGenerationPage;