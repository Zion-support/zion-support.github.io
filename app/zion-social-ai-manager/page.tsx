import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight, 
  Zap,
  Brain,
  Shield,
  Target,
  Calendar,
  MessageSquare,
  Image,
  Video,
  Hash,
  Heart,
  ThumbsUp,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ZionSocialAIManager = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Create engaging posts, captions, and hashtags with AI that understands your brand voice",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Platform Scheduling",
      description: "Post to Facebook, Instagram, Twitter, LinkedIn, and TikTok from one dashboard",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Analytics",
      description: "Track performance with AI-powered insights and recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Hashtag Optimization",
      description: "AI finds the best hashtags to maximize reach and engagement",
      icon: <Hash className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Visual Content Creation",
      description: "Generate stunning images and videos with AI-powered design tools",
      icon: <Image className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Community Management",
      description: "AI-powered responses and automated engagement with your audience",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "3 social media accounts",
        "30 posts per month",
        "Basic AI content generation",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$89",
      period: "/month",
      description: "Most popular for growing brands",
      features: [
        "10 social media accounts",
        "Unlimited posts",
        "Advanced AI features",
        "Advanced analytics",
        "Visual content creation",
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
        "Unlimited accounts",
        "White-label options",
        "Custom AI training",
        "Advanced team collaboration",
        "API access",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: "Facebook", icon: <Globe className="w-8 h-8" />, color: "text-blue-500" },
    { name: "Instagram", icon: <Image className="w-8 h-8" />, color: "text-pink-500" },
    { name: "Twitter", icon: <MessageSquare className="w-8 h-8" />, color: "text-sky-400" },
    { name: "LinkedIn", icon: <Users className="w-8 h-8" />, color: "text-blue-600" },
    { name: "TikTok", icon: <Video className="w-8 h-8" />, color: "text-black dark:text-white" },
    { name: "YouTube", icon: <Video className="w-8 h-8" />, color: "text-red-500" },
    { name: "Pinterest", icon: <Image className="w-8 h-8" />, color: "text-red-600" },
    { name: "Snapchat", icon: <Smartphone className="w-8 h-8" />, color: "text-yellow-400" }
  ];

  const benefits = [
    {
      title: "Save 10+ Hours Weekly",
      description: "Automate content creation and scheduling",
      metric: "10+ hours saved",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Increase Engagement",
      description: "AI-optimized content drives better results",
      metric: "3x more engagement",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Grow Your Following",
      description: "Consistent, high-quality content builds audience",
      metric: "2.5x faster growth",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Posts Created", value: "1M+", icon: <MessageSquare className="w-6 h-6" /> },
    { label: "Brands Using", value: "15K+", icon: <Users className="w-6 h-6" /> },
    { label: "Engagement Rate", value: "85%", icon: <Heart className="w-6 h-6" /> },
    { label: "Time Saved", value: "10hrs", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Social AI Manager - AI-Powered Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Transform your social media with AI-powered content creation, scheduling, and analytics. Save 10+ hours weekly and increase engagement by 3x." />
        <meta name="keywords" content="social media management, AI content creation, social media scheduling, social media analytics, hashtag optimization, social media automation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-social-ai-manager" />
      </Helmet>
      <SEOOptimizer />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-cyan-400 font-medium">AI-Powered Social Media Management</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Social AI Manager
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your social media presence with AI-powered content creation, intelligent scheduling, 
                and advanced analytics. Save 10+ hours weekly and increase engagement by 3x.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/demo"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center"
                >
                  <Share2 className="w-5 h-5 mr-2" />
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
                  <span className="text-gray-300">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">15,000+ Brands</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">3x More Engagement</span>
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
                Everything you need to dominate social media with AI
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

        {/* Platforms Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  All Platforms Supported
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one powerful dashboard
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className={`${platform.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-sm font-medium text-white">{platform.name}</h3>
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
                See the measurable impact on your social media performance
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
                Choose the plan that fits your social media needs
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
                Ready to Transform Your Social Media?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of brands using Zion Social AI Manager to dominate social media
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <Share2 className="w-5 h-5 mr-2" />
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

export default ZionSocialAIManager;