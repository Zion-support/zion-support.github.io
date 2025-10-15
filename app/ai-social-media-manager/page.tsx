import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  TrendingUp,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Music
} from 'lucide-react';

const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    'AI-powered content generation for all platforms',
    'Automated posting across 8+ social networks',
    'Smart hashtag optimization and suggestions',
    'Real-time engagement monitoring',
    'Advanced analytics and performance insights',
    'Content calendar and scheduling',
    'Brand voice consistency across platforms',
    'Competitor analysis and benchmarking',
    'Influencer collaboration tools',
    'Crisis management and response automation'
  ];

  const benefits = [
    'Increase social media engagement by 85%',
    'Save 25+ hours per week on content creation',
    'Boost follower growth by 200%',
    'Improve brand consistency across platforms',
    'Reduce social media management costs by 60%',
    'Scale content production without additional staff'
  ];

  const platforms = [
    { name: 'Instagram', icon: <Instagram className="w-6 h-6 text-pink-400" />, users: '2B+' },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6 text-blue-400" />, users: '3B+' },
    { name: 'Twitter', icon: <Twitter className="w-6 h-6 text-sky-400" />, users: '450M+' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6 text-blue-600" />, users: '900M+' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6 text-red-400" />, users: '2.7B+' },
    { name: 'TikTok', icon: <Music className="w-6 h-6 text-white" />, users: '1B+' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39/mo',
      originalPrice: '$59/mo',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 social media accounts',
        'Basic AI content generation',
        '30 posts per month',
        'Standard analytics',
        'Email support',
        'Basic scheduling'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79/mo',
      originalPrice: '$119/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 social media accounts',
        'Advanced AI features',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'Content calendar',
        'Hashtag optimization',
        'Competitor analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149/mo',
      originalPrice: '$199/mo',
      description: 'For large organizations',
      features: [
        'Unlimited social media accounts',
        'Full AI suite',
        'Team collaboration tools',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced reporting',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Drive sales with product showcases and customer testimonials',
      icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
      results: 'Average 150% increase in social sales'
    },
    {
      title: 'SaaS',
      description: 'Build community and showcase product updates',
      icon: <Cloud className="w-6 h-6 text-green-400" />,
      results: '300% increase in user engagement'
    },
    {
      title: 'Agencies',
      description: 'Manage multiple client accounts efficiently',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      results: 'Manage 5x more clients with same team'
    },
    {
      title: 'Personal Brands',
      description: 'Build personal brand and thought leadership',
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      results: '200% increase in follower growth'
    }
  ] {
  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Automated Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Transform your social media with AI-powered automation. Increase engagement by 85%, save 25+ hours weekly, and boost follower growth by 200% with our intelligent social media manager." />
        <meta name="keywords" content="AI social media manager, social media automation, content generation, social media scheduling, social media analytics" />
        <meta property="og:title" content="AI Social Media Manager - Automated Social Media Management" />
        <meta property="og:description" content="Transform your social media with AI-powered automation. Increase engagement by 85% and boost follower growth by 200%." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-social-media-manager" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Social Media
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Manager
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your social media presence with AI-powered automation that increases engagement by 85%, 
              saves 25+ hours weekly, and boosts follower growth by 200%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-gray-300 text-sm">Higher Engagement</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
                <div className="text-gray-300 text-sm">Follower Growth</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-gray-300 text-sm">Hours Saved Weekly</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-orange-400 mb-2">8+</div>
                <div className="text-gray-300 text-sm">Platforms Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Manage All Your Social Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and manage all your social media accounts from one powerful dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="text-sm text-gray-400">{platform.users} users</span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered social media manager includes everything you need to create, 
              schedule, and optimize high-performing social media content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their social media with our AI platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI social media manager works across all industries and business types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="text-sm text-blue-400 font-medium">
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500 bg-slate-700/50' : ''`
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"`
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'`
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using our AI social media manager to increase engagement, 
            save time, and grow their social media presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISocialMediaManagerPage;`