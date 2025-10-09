import React from 'react';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Code, BarChart, Users, Shield, Clock, DollarSign } from 'lucide-react';

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content using advanced AI models trained on millions of articles, blogs, and marketing materials.'
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: '50+ Content Templates',
      description: 'Choose from a wide variety of templates including blog posts, social media content, emails, product descriptions, and more.'
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: 'SEO Optimization',
      description: 'Automatically optimize your content for search engines with keyword suggestions, meta descriptions, and readability scores.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your brand voice and tone for consistent messaging across all content.'
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      title: 'Bulk Content Generation',
      description: 'Generate multiple pieces of content at once with our bulk processing feature for maximum efficiency.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Plagiarism Detection',
      description: 'Ensure originality with built-in plagiarism detection and content uniqueness scoring.'
    }
  ];

  const templates = [
    { name: 'Blog Posts', count: '15+ templates', icon: '📝' },
    { name: 'Social Media', count: '12+ templates', icon: '📱' },
    { name: 'Email Marketing', count: '8+ templates', icon: '📧' },
    { name: 'Product Descriptions', count: '6+ templates', icon: '🛍️' },
    { name: 'Ad Copy', count: '10+ templates', icon: '📢' },
    { name: 'Press Releases', count: '4+ templates', icon: '📰' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        '10,000 words/month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Standard quality',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '50,000 words/month',
        'All 50+ templates',
        'Advanced SEO optimization',
        'Brand voice training',
        'Priority support',
        '5 user accounts',
        'API access',
        'Bulk generation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'All templates + custom',
        'Advanced AI models',
        'Custom brand training',
        '24/7 phone support',
        'Unlimited users',
        'Full API access',
        'White-label option',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Content Generator Pro
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Create high-quality content at scale with AI
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your content strategy with our advanced AI-powered content generation platform. 
            Create engaging blog posts, social media content, emails, and more in minutes, not hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Start Free Trial
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Content Templates</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300">Words/Month</div>
            </div>
            <div className="cyber-card text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Content Templates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="cyber-card text-center p-6">
                <div className="text-4xl mb-4">{template.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
                <p className="text-gray-400 text-sm">{template.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already using AI Content Generator Pro to create 
            high-quality content at scale and boost their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Start Free Trial
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ 14-day free trial for all plans</p>
            <p>✓ No credit card required to start</p>
            <p>✓ Cancel anytime with 30-day notice</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGeneratorPage;
