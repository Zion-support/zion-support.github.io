'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShareIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  HashtagIcon,
  PhotoIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function AISocialMediaManagerPage() {
  const features = [
    "AI-powered content creation and curation",
    "Optimal posting time prediction",
    "Hashtag research and optimization",
    "Multi-platform scheduling (Instagram, Facebook, Twitter, LinkedIn, TikTok)",
    "Engagement rate optimization",
    "Brand voice consistency across platforms",
    "Trend analysis and content suggestions",
    "Automated response to comments and messages",
    "Performance analytics and reporting",
    "Competitor analysis and benchmarking",
    "Visual content generation with AI",
    "Influencer collaboration management"
  ];

  const benefits = [
    "300% increase in engagement rates",
    "Save 20+ hours per week",
    "Consistent brand presence",
    "Data-driven content strategy",
    "Automated customer service",
    "ROI tracking and optimization"
  ];

  const platforms = [
    { name: "Instagram", icon: "📸", features: ["Stories automation", "Reels optimization", "IGTV scheduling"] },
    { name: "Facebook", icon: "📘", features: ["Page management", "Event promotion", "Group engagement"] },
    { name: "Twitter", icon: "🐦", features: ["Thread creation", "Trend monitoring", "Real-time engagement"] },
    { name: "LinkedIn", icon: "💼", features: ["Professional content", "B2B networking", "Industry insights"] },
    { name: "TikTok", icon: "🎵", features: ["Viral content creation", "Trend participation", "Short-form video"] },
    { name: "YouTube", icon: "📺", features: ["Video optimization", "SEO for videos", "Community management"] }
  ];

  const pricing = {
    starter: {
      price: "$99",
      period: "month",
      platforms: 3,
      posts: 30,
      features: [
        "3 social media platforms",
        "30 posts per month",
        "Basic AI content creation",
        "Scheduling and automation",
        "Basic analytics",
        "Email support"
      ]
    },
    professional: {
      price: "$199",
      period: "month",
      platforms: 5,
      posts: 100,
      features: [
        "5 social media platforms",
        "100 posts per month",
        "Advanced AI content creation",
        "Hashtag research",
        "Engagement automation",
        "Advanced analytics",
        "Priority support",
        "Team collaboration"
      ]
    },
    enterprise: {
      price: "$399",
      period: "month",
      platforms: "Unlimited",
      posts: "Unlimited",
      features: [
        "Unlimited platforms",
        "Unlimited posts",
        "Custom AI models",
        "White-label solution",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI social media management platform that automates content creation, scheduling, and engagement. Increase engagement by 300% with intelligent automation." />
        <meta name="keywords" content="AI social media, social media automation, content creation, social media management, engagement optimization, social media analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Social Media Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI that manages your social media presence 24/7
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your social media strategy with intelligent automation, AI-powered content creation, 
              and data-driven optimization. Our AI learns your brand voice and engages your audience 
              while you focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Social Media Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that understand your audience and optimize your social media strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one intelligent dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{platform.name}</h3>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-pink-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses achieving remarkable social media success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing that scales with your social media needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${index === 1 ? 'border-pink-500 relative' : 'border-slate-600'}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="text-4xl font-bold text-pink-400 mb-6">
                  {details.price}<span className="text-lg text-gray-400">/{details.period}</span>
                </div>
                <div className="mb-6">
                  <div className="text-gray-300 mb-2">
                    <span className="font-semibold">{details.platforms}</span> platforms
                  </div>
                  <div className="text-gray-300">
                    <span className="font-semibold">{details.posts}</span> posts per month
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-pink-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full ${index === 1 ? 'bg-white text-pink-900' : 'bg-gradient-to-r from-pink-600 to-rose-600 text-white'} px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial today and see the difference AI can make for your social media presence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-pink-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-pink-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}