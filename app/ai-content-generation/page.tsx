import React from 'react';
import { Link } from 'next/link';
import Head from 'next/head';
import { CheckCircle, Star, Zap, Globe, Brain, Target, BarChart, MessageSquare, Eye, ArrowRight, Mail } from 'lucide-react';
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
      ],
      benefits: [
        'Create 10x more content',
        'Improve SEO rankings by 150%',
        'Save 40+ hours per week',
        'Increase organic traffic by 200%'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization, hashtag research, and engagement prediction.',
      icon: '📱',
      price: '$149/month',
      features: [
        'Platform-specific optimization',
        'Hashtag research automation',
        'Engagement prediction',
        'Visual content generation',
        'Posting schedule optimization',
        'Viral content analysis'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Grow followers organically',
        'Save 25+ hours per week',
        'Improve brand awareness'
      ],
      marketPrice: '$300-600/month',
      technologies: ['OpenAI GPT-4', 'DALL-E', 'Instagram API', 'Twitter API', 'LinkedIn API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaign creation with personalization, A/B testing, and performance optimization.',
      icon: '📧',
      price: '$99/month',
      features: [
        'Personalized email content',
        'A/B testing automation',
        'Send time optimization',
        'Subject line generation',
        'Email sequence creation',
        'Performance tracking'
      ],
      benefits: [
        'Increase open rates by 250%',
        'Boost click-through rates by 180%',
        'Save 30+ hours per week',
        'Improve customer engagement'
      ],
      marketPrice: '$200-500/month',
      technologies: ['OpenAI GPT-4', 'Mailchimp API', 'SendGrid API', 'Custom ML Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Video Script Generator',
      description: 'Professional video script creation for marketing, educational, and entertainment content with visual cues and timing.',
      icon: '🎬',
      price: '$79/month',
      features: [
        'Video script generation',
        'Visual cue suggestions',
        'Timing optimization',
        'Multiple video formats',
        'Hook and CTA optimization',
        'Trend analysis integration'
      ],
      benefits: [
        'Create engaging video content',
        'Reduce production time by 60%',
        'Improve viewer retention',
        'Increase conversion rates'
      ],
      marketPrice: '$150-400/month',
      technologies: ['OpenAI GPT-4', 'Video Analysis AI', 'Trend Detection APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality blog posts, articles, social media content, and marketing copy in seconds using advanced AI models.',
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Multiple content formats', 'Brand voice consistency']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword research, meta descriptions, and content structure analysis.',
      benefits: ['Higher search rankings', 'Increased organic traffic', 'Better content structure', 'Keyword optimization']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Track content performance with detailed analytics, engagement metrics, and ROI measurement tools.',
      benefits: ['Real-time performance data', 'ROI tracking', 'Content insights', 'Optimization recommendations']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Create content in multiple languages with cultural adaptation and localization features.',
      benefits: ['Global reach', 'Cultural adaptation', 'Language accuracy', 'Local market optimization']
    }
  ];
  const processSteps = [
    {
      step: 1,
      title: 'Content Brief',
      description: 'Provide your content requirements, target audience, and brand guidelines.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'AI Generation',
      description: 'Our AI analyzes your brief and generates optimized content using advanced language models.',
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Review & Edit',
      description: 'Review the generated content, make adjustments, and approve for publication.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Publish & Monitor',
      description: 'Publish your content and monitor performance with detailed analytics.',
      icon: <BarChart className="w-6 h-6" />
    }
  ];
  return (
    <>
      <Head>
        <title>AI Content Generation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your content strategy with our AI-powered content generation services. Create blog posts, social media content, and marketing copy 10x faster." />
        <meta name="keywords" content="AI content generation, automated content creation, blog writing, social media content, marketing copy" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Content Generation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your content strategy with our AI-powered content generation services. 
                Create high-quality blog posts, social media content, and marketing copy 10x faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Content Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered content generation services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">{service.contactInfo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Content Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced AI technology delivers superior content generation capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process makes AI content generation simple and efficient
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI content generation services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AIContentGenerationPage;
