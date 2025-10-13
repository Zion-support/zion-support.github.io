import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight, 
  Zap,
  Brain,
  Shield,
  Target,
  Send,
  Eye,
  MousePointer,
  Clock,
  CheckCircle,
  AlertCircle,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  MessageSquare,
  FileText,
  Image,
  Video,
  Hash,
  Heart,
  ThumbsUp
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionEmailAIAutomation = () => {
  const features = [
    {
      title: "AI Email Writing",
      description: "Generate compelling subject lines and email content that converts with AI",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Segmentation",
      description: "Automatically segment your audience based on behavior and preferences",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Behavioral Triggers",
      description: "Send personalized emails based on user actions and engagement",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "A/B Testing AI",
      description: "AI automatically tests and optimizes your email campaigns",
      icon: <Target className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Predictive Analytics",
      description: "Predict customer behavior and optimize send times for maximum engagement",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Visual Email Builder",
      description: "Create stunning emails with AI-powered design suggestions",
      icon: <Image className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 subscribers",
        "10,000 emails/month",
        "Basic AI features",
        "Email templates",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25,000 subscribers",
        "Unlimited emails",
        "Advanced AI features",
        "A/B testing",
        "Behavioral triggers",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited subscribers",
        "White-label options",
        "Custom AI training",
        "Advanced analytics",
        "API access",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const automationWorkflows = [
    {
      title: "Welcome Series",
      description: "Automatically onboard new subscribers with personalized content",
      icon: <Heart className="w-8 h-8" />,
      benefit: "40% higher engagement"
    },
    {
      title: "Cart Abandonment",
      description: "Recover lost sales with smart follow-up sequences",
      icon: <ShoppingCart className="w-8 h-8" />,
      benefit: "25% recovery rate"
    },
    {
      title: "Re-engagement",
      description: "Win back inactive subscribers with targeted campaigns",
      icon: <Users className="w-8 h-8" />,
      benefit: "30% reactivation"
    }
  ];

  const benefits = [
    {
      title: "Increase Open Rates",
      description: "AI-optimized subject lines and send times",
      metric: "45% higher open rates",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Boost Click-Through Rates",
      description: "Personalized content that resonates with your audience",
      metric: "60% more clicks",
      icon: <MousePointer className="w-8 h-8" />
    },
    {
      title: "Save Time",
      description: "Automate your entire email marketing workflow",
      metric: "15+ hours saved weekly",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Emails Sent", value: "100M+", icon: <Send className="w-6 h-6" /> },
    { label: "Businesses Using", value: "25K+", icon: <Users className="w-6 h-6" /> },
    { label: "Open Rate", value: "45%", icon: <Eye className="w-6 h-6" /> },
    { label: "Time Saved", value: "15hrs", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Email AI Automation - AI-Powered Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Transform your email marketing with AI-powered automation, personalization, and optimization. Increase open rates by 45% and save 15+ hours weekly." />
        <meta name="keywords" content="email marketing automation, AI email writing, email personalization, behavioral triggers, email analytics, email templates" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-email-ai-automation" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-cyan-400 font-medium">AI-Powered Email Marketing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Email AI Automation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your email marketing with AI-powered automation, personalization, and optimization. 
                Increase open rates by 45% and save 15+ hours weekly with intelligent email campaigns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/demo"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-300">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">25,000+ Businesses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">45% Higher Open Rates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create high-converting email campaigns with AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Workflows Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Smart Automation Workflows
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pre-built workflows that drive results automatically
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {automationWorkflows.map((workflow, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {workflow.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{workflow.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{workflow.description}</p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-medium">
                    {workflow.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Proven Results
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the measurable impact on your email marketing performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-medium text-lg">
                    {benefit.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Simple Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your email marketing needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Email Marketing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion Email AI Automation to boost engagement and drive sales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionEmailAIAutomation;