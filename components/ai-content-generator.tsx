<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Brain, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, ArrowRight, Play, Download, Code, Globe, Lock, Sparkles } from 'lucide-react',
=======
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AIContentGeneratorPage() {_const _features = [
    {
<<<<<<< HEAD
      icon: <Brain className=&quot;w-8 h-8 text-white&quot; />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality, engaging content using advanced language models trained on millions of articles, blogs, and marketing copy.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'},
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Real-time Generation',
      description: 'Create content in seconds with our lightning-fast AI engine. No more waiting hours for content creation.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      gradient: 'from-yellow-400 to-orange-500'},
    {
      icon: <Shield className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Plagiarism-Free Content',
      description: 'Every piece of content is unique and original. Our AI ensures 100% plagiarism-free writing.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools that analyze keywords, suggest improvements, and optimize content for search engines.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500'},
    {
      icon: <Users className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with native-level fluency and cultural understanding.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      gradient: 'from-red-400 to-pink-500'},
    {
      icon: <Clock className=&quot;w-8 h-8 text-white&quot; />,
      title: '24/7 Availability',
      description: 'Access our AI content generator anytime, anywhere. No downtime, no waiting, instant results.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',
      gradient: 'from-teal-400 to-blue-500'}],

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small blogs',
      features: [
        '1,000 words per month5 content templatesBasic SEO optimizationEmail supportAPI access (100 calls/month)Content analytics dashboard'
      ],
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10,000 words per month25+ content templatesAdvanced SEO toolsPriority supportAPI access (1,000 calls/month)Advanced analyticsTeam collaborationCustom branding'
      ],
      popular: true,
      color: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited wordsAll templates + customFull SEO suiteDedicated supportUnlimited API accessAdvanced analyticsWhite-label solutionCustom integrations',
        'SLA guarantee'
      ],
      popular: false,
      color: 'border-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ],

  const useCases = [
    {
      title: 'Blog Writing',
      description: 'Generate engaging blog posts, articles, and long-form content in minutes.',
      icon: '📝',
      examples: ['Tech reviewsHow-to guidesIndustry insightsProduct comparisons']
    },
    {
      title: 'Marketing Copy',
      description: 'Create compelling ad copy, landing pages, and marketing materials.',
      icon: '🎯',
      examples: ['Facebook adsGoogle adsLanding pagesEmail campaigns']
    },
    {
      title: 'Social Media',
      description: 'Generate engaging social media posts, captions, and hashtag suggestions.',
      icon: '📱',
      examples: ['Instagram postsTwitter threadsLinkedIn articlesTikTok captions']
    },
    {
      title: 'E-commerce',
      description: 'Write product descriptions, category pages, and promotional content.',
      icon: '🛍️',
      examples: ['Product descriptionsCategory pagesPromotional emailsFAQ sections']
    }
  ],

  const integrations = [
    { name: 'WordPress', icon: '🔌', description: 'Direct plugin integration' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce content automation' },
    { name: 'HubSpot', icon: '📊', description: 'Marketing automation sync' },
    { name: 'Mailchimp', icon: '📧', description: 'Email campaign content' },
    { name: 'Slack', icon: '💬', description: 'Team collaboration' },
    { name: 'Zapier', icon: '⚡', description: '500+ app integrations' }
  ],
=======
      icon: <Brain className="w-8 h-8 text-white" />, _title: 'AI-Powered Content Creation', _description: 'Generate high-quality, _engaging content using advanced language models trained on millions of articles, _blogs, _and marketing copy.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'Real-time Generation', _description: 'Create content in seconds with our lightning-fast AI engine. No more waiting hours for content creation.', _color: 'bg-gradient-to-br from-yellow-500 to-orange-600', _gradient: 'from-yellow-400 to-orange-500'},
    {_icon: <Shield className="w-8 h-8 text-white" />, _title: 'Plagiarism-Free Content', _description: 'Every piece of content is unique and original. Our AI ensures 100% plagiarism-free writing.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'SEO Optimization', _description: 'Built-in SEO tools that analyze keywords, _suggest improvements, _and optimize content for search engines.', _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _gradient: 'from-blue-400 to-cyan-500'},
    {_icon: <Users className="w-8 h-8 text-white" />, _title: 'Multi-Language Support', _description: 'Generate content in 50+ languages with native-level fluency and cultural understanding.', _color: 'bg-gradient-to-br from-red-500 to-pink-600', _gradient: 'from-red-400 to-pink-500'},
    {_icon: <Clock className="w-8 h-8 text-white" />, _title: '24/7 Availability', _description: 'Access our AI content generator anytime, _anywhere. No downtime, _no waiting, _instant results.', _color: 'bg-gradient-to-br from-teal-500 to-blue-600', _gradient: 'from-teal-400 to-blue-500'}];

  const _pricingPlans = [
    {_name: 'Starter', _price: '$29', _period: '/month', _description: 'Perfect for individuals and small blogs', _features: [
        '1, _000 words per month', _'5 content templates', _'Basic SEO optimization', _'Email support', _'API access (100 calls/month)', _'Content analytics dashboard'
      ], _popular: false, _color: 'border-gray-600', _buttonColor: 'bg-gray-600 hover:bg-gray-700'},
    {_name: 'Professional', _price: '$99', _period: '/month', _description: 'Ideal for growing businesses and agencies', _features: [
        '10, _000 words per month', _'25+ content templates', _'Advanced SEO tools', _'Priority support', _'API access (1, _000 calls/month)', _'Advanced analytics', _'Team collaboration', _'Custom branding'
      ], _popular: true, _color: 'border-blue-500', _buttonColor: 'bg-blue-600 hover:bg-blue-700'},
    {_name: 'Enterprise', _price: '$299', _period: '/month', _description: 'For large organizations and enterprises', _features: [
        'Unlimited words', _'All templates + custom', _'Full SEO suite', _'Dedicated support', _'Unlimited API access', _'Advanced analytics', _'White-label solution', _'Custom integrations', _'SLA guarantee'
      ], _popular: false, _color: 'border-purple-600', _buttonColor: 'bg-purple-600 hover:bg-purple-700'}
  ];

  const _useCases = [
    {_title: 'Blog Writing', _description: 'Generate engaging blog posts, _articles, _and long-form content in minutes.', _icon: '📝', _examples: ['Tech reviews', _'How-to guides', _'Industry insights', _'Product comparisons']},
    {_title: 'Marketing Copy', _description: 'Create compelling ad copy, _landing pages, _and marketing materials.', _icon: '🎯', _examples: ['Facebook ads', _'Google ads', _'Landing pages', _'Email campaigns']},
    {_title: 'Social Media', _description: 'Generate engaging social media posts, _captions, _and hashtag suggestions.', _icon: '📱', _examples: ['Instagram posts', _'Twitter threads', _'LinkedIn articles', _'TikTok captions']},
    {_title: 'E-commerce', _description: 'Write product descriptions, _category pages, _and promotional content.', _icon: '🛍️', _examples: ['Product descriptions', _'Category pages', _'Promotional emails', _'FAQ sections']}
  ];

  const _integrations = [
    {_name: 'WordPress', _icon: '🔌', _description: 'Direct plugin integration'},
    {_name: 'Shopify', _icon: '🛒', _description: 'E-commerce content automation'},
    {_name: 'HubSpot', _icon: '📊', _description: 'Marketing automation sync'},
    {_name: 'Mailchimp', _icon: '📧', _description: 'Email campaign content'},
    {_name: 'Slack', _icon: '💬', _description: 'Team collaboration'},
    {_name: 'Zapier', _icon: '⚡', _description: '500+ app integrations'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
        <title>AI Content Generator | Zion Tech Group - Advanced AI-Powered Content Creation</title>
        <meta name=&quot;description&quot; content=&quot;Generate high-quality, SEO-optimized content in seconds with our advanced AI content generator. Support for 50+ languages, plagiarism-free writing, and real-time generation.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Content Generator | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced AI-powered content creation with real-time generation, SEO optimization, and multi-language support.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
=======
      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6&quot;>
              <Sparkles className=&quot;w-4 h-4 mr-2&quot; />
              AI-Powered Content Generation
            </div>
          </div>
          
          <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight&quot;>
            AI Content Generator
          </h1>
          <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed&quot;>
            Create engaging, SEO-optimized content in seconds with the world's most advanced AI writing assistant
          </p>

          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
            <Button
              href=&quot;#pricing&quot;
              size=&quot;lg&quot;
              className=&quot;bg-purple-600 hover:bg-purple-700 shadow-2xl shadow-purple-500/25&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;#demo&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white/20 hover:border-white/40 hover:bg-white/5&quot;
            >
              <Play className=&quot;w-5 h-5 mr-2&quot; />
              Watch Demo
            </Button>
          </div>

<<<<<<< HEAD
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto&quot;>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400&quot;>50+</div>
              <div className=&quot;text-gray-400&quot;>Languages</div>
=======
          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>
              <div className="text-gray-400">Languages</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400&quot;>10M+</div>
              <div className=&quot;text-gray-400&quot;>Words Generated</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-green-400&quot;>99.9%</div>
              <div className=&quot;text-gray-400&quot;>Uptime</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400&quot;>24/7</div>
              <div className=&quot;text-gray-400&quot;>Support</div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
=======
      {_/* Features Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Powerful Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Everything you need to create exceptional content at scale
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <Card
                key={index}
                className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className=&quot;relative&quot;>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300&quot;>
                  {feature.title}
                </h3>
                <p className=&quot;text-gray-400 leading-relaxed&quot;>
                  {feature.description}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map(_(feature, _index) => (
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={_{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className="relative">
                  <div className={_`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {_feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {_feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {_feature.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className=&quot;py-24 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
=======
      {_/* Use Cases Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Use Cases
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Versatile content creation for every industry and purpose
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {useCases.map((useCase, index) => (
              <Card
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_useCases.map(_(useCase, _index) => (_<Card
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={index}
                className=&quot;group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;
              >
<<<<<<< HEAD
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;text-4xl&quot;>{useCase.icon}</div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300&quot;>
                      {useCase.title}
                    </h3>
                    <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                      {useCase.description}
                    </p>
                    <div className=&quot;grid grid-cols-2 gap-2&quot;>
                      {useCase.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                          {example}
=======
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{_useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {_useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {_useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {_useCase.examples.map((example, _exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {_example}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
=======
      {_/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Simple, Transparent Pricing
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Choose the plan that fits your content creation needs
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingPlans.map((plan, index) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Card
                key={index}
                className={_`relative group ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''} border ${_plan.color} hover:border-purple-500/50 transition-all duration-300`}
              >
<<<<<<< HEAD
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>
=======
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Most Popular
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                  <div className=&quot;text-4xl font-bold text-white mb-2&quot;>
                    {plan.price}<span className=&quot;text-lg text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                      {feature}
=======
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {_plan.price}<span className="text-lg text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-400">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>

                <Button
<<<<<<< HEAD
                  href=&quot;/contact&quot;
                  className={`w-full ${plan.buttonColor} text-white`}
                  size=&quot;lg&quot;
=======
                  href="/contact"
                  className={_`w-full ${plan.buttonColor} text-white`}
                  size="lg"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Get Started
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Integrations Section */}
      <section className=&quot;py-24 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
=======
      {_/* Integrations Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Seamless Integrations
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Connect with your favorite tools and platforms
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6&quot;>
            {integrations.map((integration, index) => (
=======
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {_integrations.map(_(integration, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Card
                key={index}
                className=&quot;text-center group border border-gray-700 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;
              >
<<<<<<< HEAD
                <div className=&quot;text-4xl mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                  {integration.icon}
                </div>
                <h3 className=&quot;font-semibold text-white mb-2&quot;>{integration.name}</h3>
                <p className=&quot;text-sm text-gray-400&quot;>{integration.description}</p>
=======
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {_integration.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{_integration.name}</h3>
                <p className="text-sm text-gray-400">{_integration.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
      {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
=======
      <section className=&quot;py-24 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Ready to Transform Your Content Creation?
          </h2>
          <p className=&quot;text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of content creators who are already saving hours every day with AI-powered content generation.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-purple-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;#demo&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl&quot;
            >
              <Play className=&quot;w-5 h-5 mr-2&quot; />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
