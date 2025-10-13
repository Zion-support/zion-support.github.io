import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ArrowRight, Mail, Shield, Heart, MessageSquare, Star, CheckCircle, Sparkles, Smartphone, Globe, Settings, Headphones, Play, Share, Zap, Target, Users, BarChart3, TrendingUp} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ZionAIEmailAnalyzerPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      title: 'Sentiment Analysis',
      description: 'Analyze email sentiment and emotional tone to understand customer mood and satisfaction',
      icon: <Heart className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Spam Detection',
      description: 'Advanced AI-powered spam detection with 99.9% accuracy to protect your inbox',
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Auto Response',
      description: 'Generate intelligent email responses based on content analysis and context',
      icon: <MessageSquare className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Email Classification',
      description: 'Automatically categorize emails by type, priority, and department',
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Scoring',
      description: 'AI-powered priority scoring to help you focus on the most important emails',
      icon: <Star className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with team members on email analysis',
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Language Detection',
      description: 'Automatically detect email language and provide translation suggestions',
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Attachment Analysis',
      description: 'Analyze email attachments for security threats and content relevance',
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Email Threading',
      description: 'Intelligently group related emails into conversation threads',
      icon: <MessageSquare className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics on email patterns, response times, and engagement',
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: 'API Integration',
      description: 'Integrate with Gmail, Outlook, and other email providers',
      icon: <Settings className="w-6 h-6" />,
      included: true
    },
    {
      title: 'Priority Support',
      description: '24/7 priority support with dedicated account manager',
      icon: <Headphones className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      originalPrice: '$299',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '1,000 emails per month',
        'Basic sentiment analysis',
        'Email support',
        'Standard reports',
        '5GB storage'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: '$299',
      originalPrice: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '10,000 emails per month',
        'Advanced sentiment analysis',
        'Priority support',
        'Custom reports',
        '25GB storage',
        'Team collaboration',
        'API integration'
      ],
      popular: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Enterprise',
      price: '$599',
      originalPrice: '$1,199',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited emails',
        'Full analytics suite',
        '24/7 support',
        'Advanced reporting',
        'Unlimited storage',
        'Custom models',
        'API access',
        'Team collaboration',
        'Dedicated manager'
      ],
      popular: false,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Improve response times and customer satisfaction with intelligent email analysis',
      icon: <Headphones className="w-8 h-8" />,
      examples: ['Sentiment tracking', 'Priority routing', 'Auto responses', 'Quality monitoring']
    },
    {
      title: 'Sales Teams',
      description: 'Optimize email outreach and follow-up strategies with AI insights',
      icon: <Target className="w-8 h-8" />,
      examples: ['Lead scoring', 'Response optimization', 'Follow-up timing', 'Engagement tracking']
    },
    {
      title: 'Marketing',
      description: 'Analyze campaign performance and optimize email marketing strategies',
      icon: <BarChart3 className="w-8 h-8" />,
      examples: ['Campaign analysis', 'A/B testing', 'Engagement metrics', 'Content optimization']
    },
    {
      title: 'Legal & Compliance',
      description: 'Ensure email compliance and detect potential legal issues',
      icon: <Shield className="w-8 h-8" />,
      examples: ['Compliance monitoring', 'Risk detection', 'Audit trails', 'Legal review']
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      company: 'Customer Support Team',
      role: 'Support Manager',
      content: 'Zion AI Email Analyzer has revolutionized our customer support. We can now respond to urgent emails 3x faster and with better context.',
      rating: 5,
      avatar: 'AF'
    },
    {
      name: 'Carlos Rodriguez',
      company: 'Sales Agency',
      role: 'Sales Director',
      content: 'The sentiment analysis helps us understand our prospects better. We\'ve increased our response rates by 40% and closed more deals.',
      rating: 5,
      avatar: 'CR'
    },
    {
      name: 'Jennifer Lee',
      company: 'Marketing Firm',
      role: 'Email Marketing Manager',
      content: 'The analytics dashboard gives us incredible insights into our email campaigns. We can now optimize our content for maximum engagement.',
      rating: 5,
      avatar: 'JL'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Spam Detection Accuracy', icon: <Shield className="w-6 h-6" /> },
    { number: '3x', label: 'Faster Response Times', icon: <Zap className="w-6 h-6" /> },
    { number: '40%', label: 'Increase in Engagement', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Analyzer Pro - Intelligent Email Analysis with AI | Zion Tech Group</title>
        <meta
          name="description"
          content="Intelligent email analysis with sentiment detection, spam filtering, and automated response suggestions for better communication. Starting at $149/month."
        />
        <meta
          name="keywords"
          content="AI email analyzer, email sentiment analysis, spam detection, email automation, email management, communication AI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">AI-Powered Email Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
                Zion AI Email Analyzer Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Intelligent email analysis with sentiment detection, spam filtering, and automated response suggestions. 
              Transform your email communication and improve productivity with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Start Analyzing Emails
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Intelligent Email Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze, understand, and optimize your email communication with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-orange-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From customer support to sales teams, our AI email analyzer adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-orange-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your email volume and team size.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular
                      ? 'border-orange-500/50 hover:shadow-orange-500/25'
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">{plan.originalPrice}{plan.period}</span>
                    )}
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Email Analyzer Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Analyze Your Emails?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of teams already using Zion AI Email Analyzer Pro. 
                Contact us today for a personalized demo.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-orange-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-orange-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-orange-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                >
                  Start Analyzing Emails
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIEmailAnalyzerPage;