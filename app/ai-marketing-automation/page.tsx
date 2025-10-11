'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Target, 
  BarChart, 
  Mail, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Globe,
  Smartphone,
  Camera,
  FileText,
  PieChart,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Eye,
  MousePointer,
  Share2,
  Heart,
  ThumbsUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Campaigns',
      description: 'Intelligent campaign creation and optimization with machine learning algorithms',
      benefits: ['Auto-optimization', 'Predictive analytics', 'Smart targeting', 'ROI maximization']
    },
    {
      icon: Target,
      title: 'Advanced Segmentation',
      description: 'Dynamic customer segmentation and personalized messaging based on behavior and preferences',
      benefits: ['Behavioral targeting', 'Personalization', 'Dynamic content', 'Lifecycle marketing']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and reporting with AI-driven insights and recommendations',
      benefits: ['Real-time tracking', 'Performance insights', 'Predictive modeling', 'Custom dashboards']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automated marketing workflows that trigger based on customer actions and engagement',
      benefits: ['Trigger-based automation', 'Multi-channel campaigns', 'Lead nurturing', 'Drip campaigns']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 contacts',
        'Basic automation',
        'Email marketing',
        'Social media posting',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50,000 contacts',
        'Advanced automation',
        'Multi-channel campaigns',
        'A/B testing',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Lead scoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI capabilities',
        'Custom workflows',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'SLA guarantee',
        'Custom development'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with personalized content, optimal send times, and automated follow-ups.',
      metrics: ['40% higher open rates', '60% more clicks', '35% conversion increase']
    },
    {
      icon: MessageSquare,
      title: 'Social Media Management',
      description: 'Automated social media posting, content creation, and engagement across all major platforms.',
      metrics: ['50% time savings', '3x more engagement', 'Automated posting']
    },
    {
      icon: Target,
      title: 'Lead Generation & Nurturing',
      description: 'Intelligent lead scoring, automated nurturing sequences, and conversion optimization.',
      metrics: ['200% more qualified leads', '45% faster conversion', 'Smart lead scoring']
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Continuous campaign optimization with AI-driven insights and automated improvements.',
      metrics: ['30% better ROI', 'Real-time optimization', 'Predictive insights']
    }
  ];

  const channels = [
    {
      icon: Mail,
      name: 'Email Marketing',
      description: 'Automated email campaigns with AI optimization',
      features: ['Personalized content', 'Optimal timing', 'A/B testing', 'Drip campaigns']
    },
    {
      icon: MessageSquare,
      name: 'Social Media',
      description: 'Multi-platform social media automation',
      features: ['Content scheduling', 'Engagement tracking', 'Hashtag optimization', 'Community management']
    },
    {
      icon: Globe,
      name: 'Web Marketing',
      description: 'Website personalization and conversion optimization',
      features: ['Dynamic content', 'Behavioral targeting', 'Landing page optimization', 'Exit-intent campaigns']
    },
    {
      icon: Smartphone,
      name: 'Mobile Marketing',
      description: 'SMS and push notification automation',
      features: ['SMS campaigns', 'Push notifications', 'App marketing', 'Location-based targeting']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'Our email open rates increased by 40% and conversion rates by 35% within the first month. The AI optimization is incredible.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Tech Startup Inc.',
      role: 'Growth Manager',
      content: 'The automated lead nurturing sequences have transformed our sales funnel. We\'re generating 200% more qualified leads.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Retail Solutions',
      role: 'CMO',
      content: 'The AI-powered personalization has revolutionized our customer experience. Our ROI increased by 30% in just 3 months.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Marketing Automation - Zion Tech Group | Intelligent Marketing Campaigns & Lead Generation</title>
        <meta name="description" content="Revolutionary AI-powered marketing automation platform that optimizes campaigns, personalizes content, and maximizes ROI. Increase conversions by 35%." />
        <meta name="keywords" content="AI marketing automation, email marketing, social media automation, lead generation, campaign optimization, marketing AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-4">
                🚀 AI-Powered Marketing Revolution
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              AI Marketing Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered marketing automation that optimizes campaigns, personalizes content, and maximizes ROI. 
              Increase conversions by 35% while reducing marketing workload by 60%.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                <span>35% Higher Conversions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                <span>60% Time Savings</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                <span>40% Higher Open Rates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                <span>200% More Leads</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#demo" 
                className="px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI marketing automation handles everything from campaign creation to optimization with intelligent insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI transforms marketing with intelligent automation and optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-400/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{capability.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {capability.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Channels */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Channel Marketing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Reach your audience across all marketing channels with AI-powered automation and optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
                  <p className="text-gray-300 mb-6">{channel.description}</p>
                  <ul className="space-y-2">
                    {channel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started in minutes with our simple 3-step process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Connect Your Channels</h3>
                <p className="text-gray-300">Connect your email, social media, website, and other marketing channels. Our AI analyzes your existing data and audience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Creates Campaigns</h3>
                <p className="text-gray-300">Our AI automatically creates personalized campaigns, optimizes content, and schedules posts across all your channels.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Optimize & Scale</h3>
                <p className="text-gray-300">Monitor performance in real-time, get AI insights, and automatically optimize campaigns for maximum ROI and engagement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your marketing needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-pink-400/50 shadow-2xl shadow-pink-500/25' 
                      : 'border-white/10 hover:border-pink-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-pink-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses using AI to transform their marketing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-pink-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-pink-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses using AI to automate and optimize their marketing campaigns. 
                Start your free trial today and see the difference AI can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiMarketingAutomationPage;