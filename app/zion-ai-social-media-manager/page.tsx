import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  BarChart3, 
  Users, 
  Calendar, 
  Image, 
  Video, 
  MessageSquare, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Zap,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Award
} from 'lucide-react';

const ZionAISocialMediaManagerPage: React.FC = () => {
  const features = [
    'AI-Powered Content Generation',
    'Multi-Platform Scheduling',
    'Advanced Analytics & Insights',
    'Hashtag Optimization',
    'Engagement Automation',
    'Brand Voice Training',
    'Visual Content Creation',
    'Competitor Analysis',
    'Influencer Collaboration Tools',
    'ROI Tracking & Reporting',
    'Social Listening',
    'Crisis Management Alerts'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '3 Social Media Accounts',
        '50 Posts per Month',
        'Basic Analytics',
        'Content Calendar',
        'Hashtag Suggestions',
        'Email Support'
      ],
      popular: false,
      marketPrice: '$149',
      savings: '67%'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 Social Media Accounts',
        'Unlimited Posts',
        'Advanced Analytics',
        'AI Content Generation',
        'Multi-Platform Scheduling',
        'Engagement Automation',
        'Priority Support',
        'Team Collaboration'
      ],
      popular: true,
      marketPrice: '$299',
      savings: '67%'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited Social Media Accounts',
        'Unlimited Posts',
        'Enterprise Analytics',
        'Custom AI Training',
        'White-label Options',
        'API Access',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Advanced Security'
      ],
      popular: false,
      marketPrice: '$599',
      savings: '67%'
    }
  ];

  const benefits = [
    {
      title: 'Save 10+ Hours Weekly',
      description: 'Automate content creation and scheduling to focus on strategy',
      icon: Clock,
      stat: '10+ hours saved'
    },
    {
      title: 'Increase Engagement by 300%',
      description: 'AI-optimized content and timing for maximum engagement',
      icon: TrendingUp,
      stat: '300% more engagement'
    },
    {
      title: 'Grow Followers 5x Faster',
      description: 'Smart hashtag optimization and content strategies',
      icon: Users,
      stat: '5x faster growth'
    },
    {
      title: 'ROI Tracking & Analytics',
      description: 'Comprehensive analytics to measure your social media success',
      icon: BarChart3,
      stat: 'Detailed ROI reports'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      role: 'Marketing Director',
      content: 'Zion AI Social Media Manager transformed our social media strategy. We increased engagement by 400% and saved 15 hours per week.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      role: 'Founder',
      content: 'The AI content generation is incredible. Our posts are more engaging and we\'ve grown our following by 300% in just 3 months.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Restaurant Chain',
      role: 'Brand Manager',
      content: 'Perfect for managing multiple locations. The scheduling and analytics features help us maintain consistent branding across all platforms.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const socialPlatforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B' },
    { name: 'Instagram', icon: '📷', users: '2B' },
    { name: 'Twitter', icon: '🐦', users: '450M' },
    { name: 'LinkedIn', icon: '💼', users: '900M' },
    { name: 'TikTok', icon: '🎵', users: '1B' },
    { name: 'YouTube', icon: '📺', users: '2.7B' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - Automated Social Media Management | Zion Tech Group</title>
        <meta name="description" content="AI-powered social media management platform with automated content generation, scheduling, analytics, and engagement optimization. Save 10+ hours weekly and grow your social presence." />
        <meta name="keywords" content="social media management, AI content generation, social media automation, social media analytics, social media scheduling, hashtag optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-social-media-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Social Media Manager 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Social Media Manager</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                The most advanced AI-powered social media management platform. Automate content creation, 
                scheduling, and engagement while growing your audience 5x faster with intelligent optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>

              {/* Social Platforms */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {socialPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <span className="text-2xl">{platform.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{platform.name}</div>
                      <div className="text-gray-400 text-xs">{platform.users} users</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion AI Social Media Manager?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your social media strategy with AI-powered automation and optimization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 mb-3">{benefit.description}</p>
                    <div className="text-cyan-400 font-semibold text-sm">{benefit.stat}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features for Social Media Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage, grow, and optimize your social media presence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm text-gray-400 line-through">{plan.marketPrice}</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                        Save {plan.savings}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by 50,000+ Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about their social media transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Social Media Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Zion AI Social Media Manager to grow their social presence and save time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAISocialMediaManagerPage;