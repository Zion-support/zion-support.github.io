import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, BarChart3, Zap, Shield, Smartphone, Globe, ArrowRight, Star, DollarSign, Calendar, Target, Brain, TrendingUp, MessageSquare, Phone, Mail, FileText, PieChart, Smartphone as Mobile, Database } from 'lucide-react';
import Layout from '../layout';

export default function AICRMAssistantPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior, engagement, and conversion patterns.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'Intelligent Email Automation',
      description: 'Create personalized email campaigns that adapt to customer behavior, send-time optimization, and A/B testing for maximum engagement.'
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-500" />,
      title: 'Smart Call Analytics',
      description: 'Analyze call recordings, extract key insights, and provide recommendations for improving sales conversations and closing rates.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast sales, identify upsell opportunities, and predict customer churn with advanced AI-powered analytics and reporting.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Automated Follow-ups',
      description: 'Never miss an opportunity with intelligent follow-up reminders, task automation, and personalized outreach sequences.'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: '360° Customer View',
      description: 'Get a complete picture of every customer with unified data from all touchpoints, communication history, and interaction insights.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 contacts',
        'AI lead scoring',
        'Basic email automation',
        'Mobile app access',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI analytics',
        'Call analytics & recording',
        'Custom automation workflows',
        'Integration with 100+ tools',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI model training',
        'White-label solution',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'Sales Director, TechCorp',
      content: 'AI CRM Assistant increased our conversion rate by 35%. The lead scoring is incredibly accurate and saves us hours every week.',
      rating: 5,
      avatar: 'JA'
    },
    {
      name: 'Robert Kim',
      company: 'Marketing Manager, GrowthCo',
      content: 'The email automation features are game-changing. Our open rates increased by 60% and we\'re closing more deals than ever.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Lisa Thompson',
      company: 'CEO, StartupXYZ',
      content: 'The predictive analytics helped us identify high-value customers and prevent churn. ROI was positive within the first month.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: '35% Higher Conversion',
      description: 'AI-powered lead scoring and automation boost sales performance'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Save 10+ Hours/Week',
      description: 'Automated tasks and intelligent workflows free up your time'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: '60% Better Engagement',
      description: 'Personalized communications and optimized timing increase response rates'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      title: '300% ROI Average',
      description: 'Most customers see positive ROI within the first 30 days'
    }
  ];

  return (
    <Layout
      title="AI CRM Assistant - Intelligent Sales Management | Zion Tech Group"
      description="Revolutionary AI-powered CRM that automates lead scoring, email campaigns, and sales analytics. Boost conversion rates by 35% and save 10+ hours per week. Start your free trial today."
      keywords="AI CRM, sales automation, lead scoring, email marketing, customer relationship management, sales analytics"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered Sales
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI CRM Assistant
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                That Closes More Deals
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your sales process with our revolutionary AI-powered CRM. 
              Automate lead scoring, personalize communications, and boost conversion rates by up to 35%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">35%</div>
                <div className="text-gray-300 text-sm">Higher Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-300 text-sm">Hours Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-300 text-sm">Better Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.8★</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose AI CRM Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of sales management with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Sales Teams
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage leads, close deals, and grow your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your team size and needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trusted by Sales Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers are saying about AI CRM Assistant
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of sales teams already using AI CRM Assistant to close more deals and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}