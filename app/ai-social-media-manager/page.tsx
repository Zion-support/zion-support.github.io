import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Share2, TrendingUp, Users, BarChart3, Zap, CheckCircle, ArrowRight, Instagram, Twitter, Facebook, Linkedin, Youtube, Clock, Target, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AISocialMediaManagerPage() {
  const features = [
    {
      icon: <Share2 className="w-6 h-6 text-blue-500" />,
      title: 'Multi-Platform Management',
      description: 'Manage Facebook, Instagram, Twitter, LinkedIn, and YouTube from one unified dashboard with AI-powered content optimization.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'AI Content Generation',
      description: 'Generate engaging posts, captions, and hashtags automatically based on trending topics and your brand voice.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Audience Insights',
      description: 'Deep analytics and AI-driven insights about your audience behavior, engagement patterns, and optimal posting times.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Performance Analytics',
      description: 'Track ROI, engagement rates, and campaign performance with detailed reports and AI-powered recommendations.'
    }
  ]

  const platforms = [
    { name: 'Instagram', icon: <Instagram className="w-8 h-8 text-pink-500" />, color: 'bg-pink-50' },
    { name: 'Facebook', icon: <Facebook className="w-8 h-8 text-blue-600" />, color: 'bg-blue-50' },
    { name: 'Twitter', icon: <Twitter className="w-8 h-8 text-blue-400" />, color: 'bg-blue-50' },
    { name: 'LinkedIn', icon: <Linkedin className="w-8 h-8 text-blue-700" />, color: 'bg-blue-50' },
    { name: 'YouTube', icon: <Youtube className="w-8 h-8 text-red-500" />, color: 'bg-red-50' }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        'Basic AI content generation',
        'Scheduled posting',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Advanced AI content generation',
        'All platform integrations',
        'Advanced analytics & insights',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large brands and agencies',
      features: [
        'Unlimited social accounts',
        'Enterprise AI features',
        'Custom integrations',
        'White-label options',
        'Dedicated support',
        'API access'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      title: 'Save 10+ Hours Per Week',
      description: 'Automate content creation, scheduling, and engagement to focus on strategy and growth.',
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Increase Engagement by 300%',
      description: 'AI-optimized content and posting times lead to significantly higher engagement rates.',
      icon: <Heart className="w-8 h-8 text-red-500" />
    },
    {
      title: 'Reach Your Target Audience',
      description: 'AI analyzes your audience and suggests content that resonates with your followers.',
      icon: <Target className="w-8 h-8 text-green-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Social Media Manager - Automated Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management tool that automates content creation, scheduling, and analytics across all major platforms." />
        <meta name="keywords" content="AI social media management, social media automation, content generation, social media analytics, multi-platform posting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-16 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Social Media Manager
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Automate your social media presence with AI-powered content creation, scheduling, and analytics across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Your Social Platforms in One Place
            </h2>
            <p className="text-xl text-gray-600">
              Manage every major social media platform from our unified dashboard
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className={`${platform.color} rounded-lg p-6 text-center hover:shadow-lg transition-shadow`}>
                <div className="flex justify-center mb-3">
                  {platform.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands your brand voice and creates content that engages your audience automatically.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses that have transformed their social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes and see results immediately
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect Your Accounts</h3>
              <p className="text-gray-600">Link your social media accounts and let our AI analyze your existing content and audience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Creates Content</h3>
              <p className="text-gray-600">Our AI generates engaging posts, captions, and hashtags tailored to your brand and audience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule & Optimize</h3>
              <p className="text-gray-600">AI schedules posts at optimal times and continuously optimizes based on performance data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Start with our free trial and upgrade as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-8 shadow-lg border-2 ${plan.popular ? 'border-purple-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who have transformed their social media
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "AI Social Media Manager has completely transformed our social media strategy. We've seen a 300% increase in engagement and save 15 hours per week!"
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-500">Marketing Director, TechStart Inc.</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The AI content generation is incredible. It understands our brand voice perfectly and creates content that our audience loves."
              </p>
              <div className="font-semibold text-gray-900">Mike Chen</div>
              <div className="text-gray-500">CEO, Creative Agency</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Best investment we've made for our social media. The analytics and insights help us make data-driven decisions every day."
              </p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-gray-500">Social Media Manager, Fashion Brand</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of businesses that have automated their social media with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
