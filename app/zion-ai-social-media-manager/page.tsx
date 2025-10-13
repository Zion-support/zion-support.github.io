import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Share2, TrendingUp, Calendar, BarChart3, Users, Zap, Target, Clock, Star, ArrowRight, CheckCircle, Smartphone, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ZionAISocialMediaManager() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice",
      icon: <Share2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience behavior and engagement patterns",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Platform Management",
      description: "Manage Instagram, Twitter, LinkedIn, Facebook, and TikTok from one unified dashboard",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive insights and performance tracking with AI-powered recommendations",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const platforms = [
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, color: "from-pink-500 to-purple-500" },
    { name: "Twitter", icon: <Twitter className="w-6 h-6" />, color: "from-blue-400 to-cyan-400" },
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, color: "from-blue-600 to-blue-800" },
    { name: "Facebook", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-indigo-500" },
    { name: "TikTok", icon: <Zap className="w-6 h-6" />, color: "from-black to-gray-800" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses and influencers",
      features: [
        "Up to 3 social media accounts",
        "AI content generation (50 posts/month)",
        "Basic scheduling",
        "Essential analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 10 social media accounts",
        "Unlimited AI content generation",
        "Advanced scheduling & automation",
        "Comprehensive analytics",
        "Hashtag research & optimization",
        "Priority support",
        "Team collaboration (3 users)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited social media accounts",
        "Everything in Professional",
        "Advanced AI insights",
        "Custom reporting",
        "API access",
        "Dedicated account manager",
        "Unlimited team members",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Fashion Brand",
      role: "Marketing Director",
      content: "Zion AI Social Media Manager has increased our engagement by 300%. The AI content suggestions are spot-on and save us hours every week.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "Tech Startup",
      role: "Growth Manager",
      content: "The multi-platform management is incredible. We can now maintain a consistent presence across all channels without the hassle.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Amanda Foster",
      company: "E-commerce Store",
      role: "Social Media Manager",
      content: "The analytics and insights are game-changing. We finally understand what content resonates with our audience.",
      rating: 5,
      avatar: "AF"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Social Media Manager - AI-Powered Social Media Management Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your social media strategy with Zion AI Social Media Manager. AI content generation, smart scheduling, multi-platform management, and advanced analytics. Starting at $39/month." />
        <meta name="keywords" content="AI social media manager, social media automation, AI content generation, social media scheduling, social media analytics, multi-platform management" />
        <meta property="og:title" content="Zion AI Social Media Manager - AI-Powered Social Media Management Platform" />
        <meta property="og:description" content="Transform your social media strategy with AI-powered content generation and management tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-social-media-manager" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-social-media-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI-Powered Social Media</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion AI Social Media Manager
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Master social media with AI-powered content generation, smart scheduling, and comprehensive analytics. Manage all platforms from one dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Analytics Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-gray-300">Engagement Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-gray-300">Platforms Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">10K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful AI Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI to create, schedule, and optimize your social media content across all platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                All Platforms, One Dashboard
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from a single, powerful interface
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${platform.color} mb-4`}>
                  {platform.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as you grow. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50'
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trusted by Marketers Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers are saying about Zion AI Social Media Manager
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Social Media?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of marketers who are already using Zion AI Social Media Manager to grow their presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}