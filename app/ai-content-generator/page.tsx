import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  PhoneIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'GPT-4 Powered Generation',
      description: 'Leverage the latest GPT-4 technology for high-quality, contextually relevant content generation.'
    },
    {
      icon: DocumentTextIcon,
      title: '50+ Content Templates',
      description: 'Choose from a wide variety of pre-built templates for blogs, social media, emails, and more.'
    },
    {
      icon: ChartBarIcon,
      title: 'SEO Optimization',
      description: 'Built-in SEO suggestions and keyword optimization to improve your content\'s search rankings.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Support',
      description: 'Generate content in 25+ languages with native-level quality and cultural adaptation.'
    },
    {
      icon: CogIcon,
      title: 'Brand Voice Customization',
      description: 'Train the AI to match your brand\'s unique voice, tone, and style preferences.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Plagiarism Detection',
      description: 'Built-in plagiarism checker ensures all generated content is original and unique.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: 'month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words per month',
        '20 content templates',
        'Basic SEO suggestions',
        '5 language support',
        'Standard support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: 'month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words per month',
        'All 50+ templates',
        'Advanced SEO optimization',
        '25+ language support',
        'Brand voice training',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: 'month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'All templates + custom',
        'Full SEO suite',
        'All languages',
        'Custom brand training',
        'Dedicated support',
        'Custom analytics',
        'Full API access',
        'White-label options',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Blog Content Creation',
      description: 'Generate engaging blog posts on any topic with proper structure, SEO optimization, and call-to-actions.',
      icon: DocumentTextIcon
    },
    {
      title: 'Social Media Posts',
      description: 'Create compelling social media content for all platforms with platform-specific formatting and hashtags.',
      icon: GlobeAltIcon
    },
    {
      title: 'Email Marketing',
      description: 'Generate personalized email campaigns, newsletters, and promotional content that converts.',
      icon: UsersIcon
    },
    {
      title: 'Product Descriptions',
      description: 'Create compelling product descriptions that highlight features, benefits, and drive sales.',
      icon: ChartBarIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content creation tool that generates high-quality articles, blog posts, social media content, and marketing copy using GPT-4 technology." />
        <meta name="keywords" content="AI content generator, content creation, GPT-4, blog writing, social media content, marketing copy, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/50 mb-8">
                <CpuChipIcon className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Content Generation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Content Generator Pro
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your content creation process with our advanced AI-powered tool. Generate high-quality articles, blog posts, social media content, and marketing copy in minutes, not hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Live Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">10M+</div>
                  <div className="text-gray-300 text-sm">Words Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">25+</div>
                  <div className="text-gray-300 text-sm">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Templates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create exceptional content with AI assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Perfect For <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Every Use Case</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a blogger, marketer, or business owner, our AI content generator adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                  plan.popular 
                    ? 'border-purple-500/50 relative' 
                    : 'border-slate-700/50 hover:border-purple-500/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'neon-button'
                        : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators who are already using AI to produce better content faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;