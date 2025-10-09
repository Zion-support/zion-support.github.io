import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Share2, Target, BarChart, Users, Zap, Clock, Shield, TrendingUp, Brain, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const AISocialMediaManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags for all major social platforms using advanced AI that understands your brand voice.',
      benefits: ['Multi-platform content', 'Brand voice consistency', 'Hashtag optimization', 'Visual content suggestions']
    },
    {
      icon: Target,
      title: 'Smart Scheduling & Publishing',
      description: 'AI determines the optimal posting times for maximum engagement based on your audience behavior and platform algorithms.',
      benefits: ['Optimal timing', 'Cross-platform posting', 'Content calendar', 'Automated publishing']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics & Insights',
      description: 'Get deep insights into your social media performance with AI-powered recommendations for content optimization and growth.',
      benefits: ['Performance tracking', 'Engagement analysis', 'ROI measurement', 'Growth predictions']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'AI-powered community management that responds to comments, messages, and mentions while maintaining your brand voice.',
      benefits: ['Auto-responses', 'Sentiment analysis', 'Crisis detection', 'Engagement optimization']
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'text-pink-600', bgColor: 'bg-pink-50' },
    { name: 'Twitter', icon: Twitter, color: 'text-blue-400', bgColor: 'bg-blue-50' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', bgColor: 'bg-blue-50' },
    { name: 'TikTok', icon: Share2, color: 'text-black', bgColor: 'bg-gray-50' },
    { name: 'YouTube', icon: Share2, color: 'text-red-600', bgColor: 'bg-red-50' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        'AI content generation (100 posts/month)',
        'Basic scheduling',
        'Essential analytics',
        '1 user account',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Unlimited AI content generation',
        'Advanced scheduling & automation',
        'Comprehensive analytics',
        'Up to 5 user accounts',
        'Priority support',
        'Team collaboration tools',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited social accounts',
        'Custom AI model training',
        'White-label solution',
        'Advanced integrations',
        'Unlimited users',
        'Dedicated account manager',
        'Custom reporting',
        '24/7 phone support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Brand Growth',
      description: 'Increase brand awareness and drive sales with AI-optimized social content that showcases products and engages customers.',
      icon: '🛍️',
      results: '300% increase in engagement'
    },
    {
      title: 'B2B Lead Generation',
      description: 'Generate qualified leads through LinkedIn and Twitter with AI-crafted thought leadership content and automated engagement.',
      icon: '💼',
      results: '250% more qualified leads'
    },
    {
      title: 'Personal Brand Building',
      description: 'Build a strong personal brand across platforms with consistent, engaging content that positions you as an industry expert.',
      icon: '👤',
      results: '500% follower growth'
    },
    {
      title: 'Event Promotion',
      description: 'Promote events and webinars with AI-generated content that adapts to each platform\'s unique audience and format.',
      icon: '📅',
      results: '400% higher attendance'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Manager',
      company: 'Fashion Forward',
      content: 'The AI content generation has revolutionized our social media strategy. We\'re posting 3x more frequently with 5x better engagement rates.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechStart Solutions',
      content: 'The automated community management saves us hours daily while maintaining authentic engagement. Our response time improved by 80%.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      role: 'Social Media Director',
      company: 'Creative Agency Pro',
      content: 'The analytics and insights are incredibly detailed. We can now prove ROI on social media spend and optimize our strategy in real-time.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI Social Media Management</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Social Media Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
              Automate your social media presence with AI that creates content, schedules posts, and engages your audience 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                ✉️ Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Major Social Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Manage all your social media accounts from one powerful AI-driven platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${platform.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <platform.icon className={`w-8 h-8 ${platform.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to dominate social media with AI automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Results
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses are using our AI social media management to drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{useCase.description}</p>
                <div className="text-pink-600 font-bold text-lg">{useCase.results}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your social media needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
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
                  href="tel:+13024640950"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-pink-600 text-white hover:bg-pink-700'
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

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of businesses already using our AI social media management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Start your free trial today and see the power of AI-driven social media management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-pink-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISocialMediaManagementPage;