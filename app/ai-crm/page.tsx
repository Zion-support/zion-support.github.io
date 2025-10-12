import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Zap, Brain, Users, CheckCircle, Star, Clock, BarChart3, 
  Sparkles, Target, Award, Lightbulb, Globe, Shield, MessageCircle, 
  Mail, Phone, MapPin, Play, Pause, Download, Upload, Edit, Copy, 
  Share, Bookmark, Heart, ThumbsUp, RefreshCw, Settings, Database, 
  Cloud, Lock, TrendingUp, PieChart, LineChart, Activity, Eye, Search, 
  Filter, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, 
  Mic, Headphones, Speaker, Volume2, VolumeX, FileText, Package
} from 'lucide-react'

export default function AICRMPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro')

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Sales Intelligence',
      description: 'Advanced AI analyzes customer behavior, predicts buying patterns, and suggests optimal engagement strategies.',
      benefits: ['Predictive analytics', 'Lead scoring', 'Sales forecasting', 'Customer insights']
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: 'Smart Contact Management',
      description: 'Automatically organize and segment contacts with AI-driven categorization and relationship mapping.',
      benefits: ['Auto-categorization', 'Relationship mapping', 'Duplicate detection', 'Contact enrichment']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time insights and performance metrics with AI-powered recommendations for sales optimization.',
      benefits: ['Real-time analytics', 'Performance tracking', 'ROI analysis', 'Custom reports']
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-400" />,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot that handles customer inquiries, schedules meetings, and provides instant support.',
      benefits: ['24/7 availability', 'Natural conversations', 'Meeting scheduling', 'FAQ automation']
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: 'Automated Lead Generation',
      description: 'AI identifies and qualifies leads from multiple sources, scoring them based on conversion probability.',
      benefits: ['Lead identification', 'Qualification scoring', 'Multi-source integration', 'Follow-up automation']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with GDPR compliance, data encryption, and advanced access controls.',
      benefits: ['GDPR compliant', 'End-to-end encryption', 'Role-based access', 'Audit trails']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 contacts',
        'Basic AI features',
        'Email integration',
        'Mobile app access',
        'Standard support',
        'Basic analytics',
        '5 team members'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and sales teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'All integrations',
        'Mobile + desktop apps',
        'Priority support',
        'Advanced analytics',
        'Unlimited team members',
        'Custom fields',
        'API access',
        'Workflow automation'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'All platform access',
        '24/7 dedicated support',
        'Enterprise analytics',
        'Unlimited everything',
        'Custom development',
        'Full API access',
        'White-label options',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'Sales Director',
      company: 'TechFlow Solutions',
      content: 'Our sales team productivity increased by 250% since implementing Zion\'s AI CRM. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Jennifer Lee',
      role: 'VP of Sales',
      company: 'GrowthCorp',
      content: 'The AI lead scoring has transformed our sales process. We\'re closing 40% more deals with the same effort.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Robert Kim',
      role: 'CEO',
      company: 'StartupHub',
      content: 'The automation features save us 20 hours per week. The ROI was evident within the first month.',
      rating: 5,
      avatar: 'RK'
    }
  ]

  const integrations = [
    {
      name: 'Email Marketing',
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      description: 'Sync with Mailchimp, Constant Contact, and other email platforms'
    },
    {
      name: 'Calendar',
      icon: <Calendar className="w-8 h-8 text-emerald-400" />,
      description: 'Integrate with Google Calendar, Outlook, and scheduling tools'
    },
    {
      name: 'Communication',
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      description: 'Connect with Slack, Microsoft Teams, and messaging platforms'
    },
    {
      name: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      description: 'Link with Google Analytics, Mixpanel, and business intelligence tools'
    },
    {
      name: 'E-commerce',
      icon: <Package className="w-8 h-8 text-orange-400" />,
      description: 'Integrate with Shopify, WooCommerce, and online stores'
    },
    {
      name: 'Social Media',
      icon: <Share className="w-8 h-8 text-blue-400" />,
      description: 'Connect with LinkedIn, Twitter, Facebook, and social platforms'
    }
  ]

  const useCases = [
    {
      title: 'Sales Teams',
      description: 'Streamline sales processes with AI-powered lead management and forecasting.',
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      benefits: ['Lead scoring', 'Pipeline management', 'Sales forecasting', 'Performance tracking']
    },
    {
      title: 'Marketing Teams',
      description: 'Align marketing efforts with sales goals using integrated campaign management.',
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      benefits: ['Campaign tracking', 'Lead attribution', 'ROI measurement', 'Customer journey mapping']
    },
    {
      title: 'Customer Success',
      description: 'Deliver exceptional customer experiences with AI-driven support and insights.',
      icon: <Users className="w-8 h-8 text-purple-400" />,
      benefits: ['Customer health scoring', 'Churn prediction', 'Support automation', 'Success metrics']
    },
    {
      title: 'Management',
      description: 'Get comprehensive insights and control over your entire sales organization.',
      icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
      benefits: ['Executive dashboards', 'Team performance', 'Revenue forecasting', 'Strategic insights']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI CRM - Intelligent Customer Relationship Management | Zion Tech Group</title>
        <meta name="description" content="Transform your sales with our AI-powered CRM. Advanced lead scoring, predictive analytics, and automated workflows. Starting at $49/month. Free trial available." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, lead scoring, predictive analytics, sales intelligence, CRM software" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-crm" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2.5s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Sales Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI CRM
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your sales process with intelligent customer relationship management. 
              <br />
              <span className="text-cyan-400 font-semibold">Predictive analytics • Lead scoring • Sales automation • 250% productivity boost</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>5,000+ Sales Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Sales Teams</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to manage relationships, close deals, and grow your business with AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From sales to customer success, our AI CRM adapts to your team's unique needs and workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-cyan-400 text-sm">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Connect with your favorite tools and platforms for a unified sales experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {integration.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your team size and needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5,000+ Sales Teams</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our customers say about their experience with our AI CRM platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Sales Process?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join thousands of sales teams who are already using our AI CRM to close more deals and grow faster. 
                    Start your free trial today - no credit card required.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Sales</span>
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-300" />
                      <span className="text-sm">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-300" />
                      <span className="text-sm">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span className="text-sm">Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}