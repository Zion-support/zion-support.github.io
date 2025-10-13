import React from 'react';
import { Share2, TrendingUp, Users, BarChart3, ArrowRight, Star, CheckCircle, DollarSign, Clock, Heart, MessageCircle, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasAISocialMediaManagerPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Social Media Manager",
    "description": "AI-powered social media management platform that automates content creation, scheduling, and analytics across all major platforms",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "79",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      title: "AI Content Creation",
      description: "Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice",
      icon: <Share2 className="w-8 h-8" />,
      benefits: ["Brand voice consistency", "Engaging content", "Hashtag optimization"]
    },
    {
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience behavior and engagement patterns",
      icon: <Clock className="w-8 h-8" />,
      benefits: ["Optimal timing", "Cross-platform sync", "Automated posting"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to track performance and optimize your social media strategy",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance tracking", "ROI analysis", "Audience insights"]
    },
    {
      title: "Engagement Automation",
      description: "AI-powered engagement tools to respond to comments, messages, and mentions automatically",
      icon: <MessageCircle className="w-8 h-8" />,
      benefits: ["Auto-responses", "Sentiment analysis", "24/7 engagement"]
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      description: "Complete Facebook page and group management with AI-optimized content",
      icon: "📘",
      features: ["Page management", "Group automation", "Ad integration"]
    },
    {
      name: "Instagram",
      description: "Instagram feed, stories, and reels management with visual content optimization",
      icon: "📷",
      features: ["Feed optimization", "Stories automation", "Reels creation"]
    },
    {
      name: "Twitter",
      description: "Twitter account management with trending hashtag integration and engagement",
      icon: "🐦",
      features: ["Tweet scheduling", "Trend analysis", "Thread management"]
    },
    {
      name: "LinkedIn",
      description: "Professional LinkedIn content and networking automation for B2B growth",
      icon: "💼",
      features: ["Professional content", "Network building", "Lead generation"]
    },
    {
      name: "TikTok",
      description: "TikTok content creation and optimization for viral potential",
      icon: "🎵",
      features: ["Video optimization", "Trend tracking", "Viral analysis"]
    },
    {
      name: "YouTube",
      description: "YouTube channel management with video optimization and SEO",
      icon: "📺",
      features: ["Video SEO", "Thumbnail optimization", "Comment management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "month",
      description: "Perfect for small businesses and influencers",
      features: [
        "3 social media accounts",
        "Basic AI content creation",
        "Standard scheduling",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Advanced features for growing businesses",
      features: [
        "10 social media accounts",
        "Advanced AI content creation",
        "Smart scheduling",
        "Advanced analytics",
        "Priority support",
        "Team collaboration",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "month",
      description: "Full-featured solution for large organizations",
      features: [
        "Unlimited accounts",
        "Premium AI features",
        "Custom AI training",
        "White-label solution",
        "24/7 support",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const stats = [
    {
      number: "500%",
      label: "Engagement Increase",
      description: "Average engagement boost for our users"
    },
    {
      number: "50+",
      label: "Content Ideas Daily",
      description: "AI-generated content suggestions per day"
    },
    {
      number: "2M+",
      label: "Posts Scheduled",
      description: "Successful posts scheduled by our platform"
    },
    {
      number: "95%",
      label: "Time Saved",
      description: "Time saved on social media management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Social Media Manager | Micro SAAS | Zion Tech Group"
        description="AI-powered social media management platform that automates content creation, scheduling, and analytics. Starting at $79/month."
        keywords="social media manager, AI content creation, social media automation, micro saas, social media analytics, content scheduling"
        structuredData={structuredData}
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 mb-6">
            <Star className="w-5 h-5 text-pink-400 mr-2" />
            <span className="text-pink-300 font-medium">Micro SAAS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">
            AI Social Media Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your social media presence with AI-powered content creation, smart scheduling, 
            and advanced analytics. Grow your audience and engagement automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
            <FuturisticButton
              href="#pricing"
              variant="outline"
              className="border-pink-500 text-pink-300 hover:bg-pink-500/10"
            >
              View Pricing
            </FuturisticButton>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Social Media Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to dominate social media with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Platforms Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Major Platforms Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your social media accounts from one powerful platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300 mb-4">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-pink-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your social media needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700' 
                        : 'border border-pink-500 text-pink-300 hover:bg-pink-500/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <FuturisticCard className="max-w-4xl mx-auto p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses and influencers who trust AI Social Media Manager 
              to grow their audience and engagement. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                className="border-pink-500 text-pink-300 hover:bg-pink-500/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default MicroSaasAISocialMediaManagerPage;