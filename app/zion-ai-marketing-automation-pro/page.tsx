import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Target, 
  BarChart3, 
  Mail, 
  Smartphone, 
  Calendar, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Brain,
  Globe,
  Clock,
  Award,
  Sparkles,
  MessageSquare,
  Share2,
  PieChart
} from 'lucide-react';

const ZionAIMarketingAutomationProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Campaign Optimization',
      description: 'Automatically optimize your marketing campaigns using machine learning algorithms',
      icon: <Target className="w-6 h-6" />,
      benefits: ['40% higher conversion rates', 'Real-time campaign adjustments', 'A/B testing automation']
    },
    {
      title: 'Intelligent Audience Segmentation',
      description: 'AI-driven customer segmentation for highly targeted marketing campaigns',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Dynamic audience creation', 'Behavioral pattern analysis', 'Predictive customer modeling']
    },
    {
      title: 'Multi-Channel Campaign Orchestration',
      description: 'Seamlessly coordinate campaigns across email, social media, SMS, and web',
      icon: <Globe className="w-6 h-6" />,
      benefits: ['Unified campaign management', 'Cross-channel analytics', 'Consistent messaging']
    },
    {
      title: 'Predictive Content Generation',
      description: 'AI creates personalized content that resonates with your audience',
      icon: <MessageSquare className="w-6 h-6" />,
      benefits: ['Personalized email content', 'Social media post generation', 'Ad copy optimization']
    },
    {
      title: 'Advanced Analytics & Insights',
      description: 'Comprehensive analytics with AI-powered insights and recommendations',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['ROI prediction models', 'Customer lifetime value analysis', 'Campaign performance forecasting']
    },
    {
      title: 'Smart Lead Nurturing',
      description: 'Automated lead nurturing sequences that adapt based on customer behavior',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Behavioral trigger automation', 'Lead scoring integration', 'Personalized journey mapping']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 contacts',
        'Basic AI optimization',
        'Email & SMS campaigns',
        'Standard analytics',
        'Email support',
        '5 automation workflows'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25,000 contacts',
        'Advanced AI features',
        'All marketing channels',
        'Advanced analytics',
        'Priority support',
        'Unlimited workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'Our email open rates increased by 65% with Zion AI Marketing Automation Pro. The AI optimization is incredible.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Thompson',
      company: 'SaaS Solutions',
      role: 'VP Marketing',
      content: 'The predictive content generation saves us 20 hours per week. Our campaigns are more effective than ever.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Wang',
      company: 'Retail Innovations',
      role: 'Head of Marketing',
      content: 'Finally, a platform that truly understands our customers. The AI insights have transformed our marketing strategy.',
      rating: 5,
      avatar: 'LW'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '65%', label: 'Average Open Rate Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '40%', label: 'Higher Conversion Rates', icon: <Target className="w-6 h-6" /> },
    { number: '24/7', label: 'AI-Powered Optimization', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Marketing Automation Pro - AI-Powered Marketing Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with Zion AI Marketing Automation Pro. AI-powered campaign optimization, intelligent audience segmentation, multi-channel orchestration, and predictive content generation. Start your free trial today!" />
        <meta name="keywords" content="AI marketing automation, marketing platform, campaign optimization, audience segmentation, content generation, email marketing, social media automation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-marketing-automation-pro" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Marketing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {' '}Automation Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent marketing automation platform that uses AI to optimize campaigns, 
              personalize content, and maximize your marketing ROI. 
              Transform your marketing strategy with cutting-edge artificial intelligence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology automates complex marketing processes and provides 
                insights that help you reach the right audience with the right message at the right time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your marketing needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-pink-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Marketing Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about Zion AI Marketing Automation Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of marketing teams already using Zion AI Marketing Automation Pro 
                to boost their ROI. Start your free 14-day trial today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIMarketingAutomationProPage;