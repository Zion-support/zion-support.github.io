import React from 'react';
import { Brain, PenTool, FileText, Zap, BarChart, Globe, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context and generate high-quality, engaging content.'
    },
    {
      icon: PenTool,
      title: 'Multiple Content Types',
      description: 'Create blogs, articles, marketing copy, technical documentation, and more with ease.'
    },
    {
      icon: FileText,
      title: 'Content Templates',
      description: 'Pre-built templates for various content types to speed up your writing process.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'AI-powered suggestions for improving readability, SEO, and engagement in real-time.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track content performance with detailed analytics and insights.'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Generate content in multiple languages with accurate translations.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Up to 10,000 words/month',
        'Basic AI writing',
        '5 content templates',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: [
        'Up to 50,000 words/month',
        'Advanced AI features',
        'Unlimited templates',
        'Priority support',
        'Advanced analytics',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited words',
        'Full AI suite',
        'Custom templates',
        '24/7 support',
        'Custom analytics',
        'API access'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content writing solutions for modern businesses." />
        <meta name="keywords" content="AI writing, content creation, blog writing, marketing copy, content automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Writer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create high-quality, engaging content at scale with our advanced AI-powered writing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-blue-400 ring-2 ring-blue-400/50' : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators already using our AI-powered writing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentWriterPage;