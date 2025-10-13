<<<<<<< HEAD
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Share2, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Users, BarChart3, Star, Sparkles, TrendingUp, Target, Calendar, MessageSquare } from 'lucide-react'
import Layout from '../layout'

export default function AISocialMediaManager() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI algorithms'
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: 'Smart Scheduling',
      description: 'Optimize posting times based on audience engagement patterns and analytics'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Analytics',
      description: 'Track engagement, reach, and ROI with detailed analytics and insights'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Audience Insights',
      description: 'Understand your audience demographics, interests, and behavior patterns'
    }
  ]

  const platformFeatures = [
    {
      platform: 'Instagram',
      features: ['Story Templates', 'Reels Optimization', 'Hashtag Research', 'IGTV Scheduling', 'Stories Analytics', 'Shopping Integration']
    },
    {
      platform: 'Facebook',
      features: ['Page Management', 'Event Promotion', 'Group Management', 'Live Streaming', 'Ad Integration', 'Community Building']
    },
    {
      platform: 'Twitter',
      features: ['Thread Creation', 'Trend Monitoring', 'Hashtag Tracking', 'Reply Management', 'Moment Creation', 'Engagement Optimization']
    },
    {
      platform: 'LinkedIn',
      features: ['Professional Content', 'Company Updates', 'Article Publishing', 'Event Promotion', 'Lead Generation', 'B2B Analytics']
    },
    {
      platform: 'TikTok',
      features: ['Video Optimization', 'Trend Analysis', 'Sound Selection', 'Effect Recommendations', 'Challenge Participation', 'Viral Content Strategy']
    },
    {
      platform: 'YouTube',
      features: ['Video SEO', 'Thumbnail Optimization', 'Title Generation', 'Description Writing', 'Tag Research', 'Analytics Tracking']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        'Up to 3 social accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 10 social accounts',
        'Advanced AI features',
        'Smart scheduling',
        'Detailed analytics',
        'Priority support',
        'Team collaboration',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited social accounts',
        'Custom AI training',
        'White-label solution',
        'Advanced analytics',
        'Dedicated support',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Brand Co.',
      content: 'AI Social Media Manager increased our engagement by 150% and saved us 20 hours per week on content creation.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Tech Startup',
      content: 'The AI content suggestions are spot-on. Our social media presence has never been stronger.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Marketing Agency',
      content: 'Managing multiple client accounts is now effortless. The analytics insights are incredibly valuable.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Social Media Manager - Automated Social Media Management | Zion Tech Group"
      description="Transform your social media presence with AI-powered content creation, smart scheduling, and analytics. Manage all platforms from one dashboard. Start your free trial today."
      keywords="social media management, AI content creation, social media automation, social media analytics, social media scheduling"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
                <Share2 className="w-4 h-4 mr-2" />
                AI-Powered Social Media
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Social Media Manager
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your social media presence with AI-powered content creation, smart scheduling, 
                and comprehensive analytics. Manage all platforms from one intelligent dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Intelligent Social Media Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-powered features that transform your social media strategy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Multi-Platform Support
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Manage all your social media platforms from one unified dashboard
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((platform, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{platform.platform}</h3>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your social media needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-pink-400/40 scale-105 shadow-2xl shadow-pink-500/20' 
                    : 'border-pink-500/20 hover:border-pink-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Social Media Professionals
              </h2>
              <p className="text-gray-300">
                See how our AI Social Media Manager transforms social media strategies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.</p>
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
      <Footer />

  );
};

export default AiSocialMediaManagerPage;
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
