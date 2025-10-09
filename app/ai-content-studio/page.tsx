import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, PenTool, Image, Video, Music, FileText } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const contentFeatures = [
    {
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, articles, social media, and marketing materials.',
      icon: '✍️',
      benefits: [
        'Generate 10,000+ words per hour',
        'Maintain consistent brand voice',
        'Optimize for SEO automatically',
        'Support 50+ languages'
      ]
    },
    {
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and artwork using advanced AI image generation.',
      icon: '🎨',
      benefits: [
        'Generate unlimited images',
        'Custom styles and themes',
        'High-resolution output',
        'Commercial use rights'
      ]
    },
    {
      title: 'AI Video Creation',
      description: 'Produce professional videos with AI-powered editing, effects, and voiceovers.',
      icon: '🎬',
      benefits: [
        'Create videos in minutes',
        'Professional quality output',
        'Auto-generated voiceovers',
        'Multiple format support'
      ]
    },
    {
      title: 'AI Music & Audio',
      description: 'Generate background music, sound effects, and audio content for your projects.',
      icon: '🎵',
      benefits: [
        'Royalty-free music generation',
        'Custom sound effects',
        'Voice synthesis',
        'Multiple genres and styles'
      ]
    },
    {
      title: 'Social Media Automation',
      description: 'Automatically create and schedule content across all social media platforms.',
      icon: '📱',
      benefits: [
        'Multi-platform posting',
        'Optimal timing algorithms',
        'Hashtag optimization',
        'Engagement tracking'
      ]
    },
    {
      title: 'Content Analytics',
      description: 'Track performance and optimize content strategy with AI-powered insights.',
      icon: '📊',
      benefits: [
        'Real-time performance tracking',
        'Content optimization suggestions',
        'Audience engagement analysis',
        'ROI measurement'
      ]
    }
  ];

  const contentTypes = [
    {
      type: 'Blog Posts',
      description: 'SEO-optimized articles and blog content',
      price: '$0.10 per 100 words',
      features: ['SEO optimization', 'Multiple formats', 'Research integration', 'Fact-checking']
    },
    {
      type: 'Social Media',
      description: 'Engaging posts for all social platforms',
      price: '$0.50 per post',
      features: ['Platform optimization', 'Hashtag research', 'Visual integration', 'Scheduling']
    },
    {
      type: 'Marketing Copy',
      description: 'Sales pages, ads, and promotional content',
      price: '$1.00 per 100 words',
      features: ['Conversion optimization', 'A/B testing', 'Personalization', 'Brand consistency']
    },
    {
      type: 'Video Content',
      description: 'Scripts, captions, and video descriptions',
      price: '$2.00 per minute',
      features: ['Script writing', 'Subtitle generation', 'SEO optimization', 'Engagement hooks']
    },
    {
      type: 'Email Campaigns',
      description: 'Newsletters, sequences, and email content',
      price: '$0.25 per email',
      features: ['Subject line optimization', 'Personalization', 'A/B testing', 'Deliverability']
    },
    {
      type: 'Product Descriptions',
      description: 'Compelling product copy and descriptions',
      price: '$0.30 per description',
      features: ['Feature highlighting', 'Benefit focus', 'SEO optimization', 'Conversion focus']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$299/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        '10,000 words per month',
        '100 images per month',
        '10 videos per month',
        'Basic templates',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$599/month',
      description: 'Advanced features for growing content teams',
      features: [
        '50,000 words per month',
        '500 images per month',
        '50 videos per month',
        'Premium templates',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'Complete content creation solution for large organizations',
      features: [
        'Unlimited content',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Unlimited users',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Complete AI-powered content creation suite with writing, image generation, video editing, and social media automation. Create professional content at scale." />
        <meta name="keywords" content="ai content creation, content studio, ai writing, image generation, video creation, social media automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Studio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete content creation suite powered by AI. Generate high-quality text, images, videos, and audio content at scale.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-300">Words/Hour</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Content Generation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
              <div className="text-gray-300">Quality Score</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Complete Content Creation Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Content Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{content.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{content.price}</div>
                </div>
                <ul className="space-y-2">
                  {content.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Content Studio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Creative AI</h3>
              <p className="text-gray-300">Advanced AI that understands creativity and produces content that resonates with your audience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Generate professional content in minutes, not hours. Scale your content production instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven</h3>
              <p className="text-gray-300">AI analyzes what works and optimizes your content for maximum engagement and conversion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Content Studio Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of creators and businesses using AI to produce professional content at scale.
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
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentStudioPage;