import React from 'react';
import { SEO } from "@/components/SEO";
import { 
  PenTool, 
  FileText, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Globe, 
  Shield, 
  Type, 
  Video, 
  ShoppingBag, 
  Mail 
} from "lucide-react";

export default function AIContentGenerator() {
  const features = [
    {
      title: "AI Writing Assistant",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns",
      icon: <PenTool className="h-6 w-6 text-blue-500"/>
    },
    {
      title: "Multi-Format Support",
      description: "Create content in various formats: text, images, videos, and audio",
      icon: <FileText className="h-6 w-6 text-purple-500"/>
    },
    {
      title: "Brand Voice Consistency",
      description: "Maintain your brand's unique voice across all content pieces",
      icon: <Type className="h-6 w-6 text-blue-600"/>
    },
    {
      title: "SEO Optimization",
      description: "AI-powered SEO suggestions to improve content visibility and ranking",
      icon: <Target className="h-6 w-6 text-cyan-500"/>
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "Long-form articles and blog content",
      icon: <FileText className="h-8 w-8 text-blue-500"/>
    },
    {
      title: "Social Media",
      description: "Posts for all major social platforms",
      icon: <Users className="h-8 w-8 text-purple-500"/>
    },
    {
      title: "Marketing Copy",
      description: "Ads, landing pages, and promotional content",
      icon: <Target className="h-8 w-8 text-blue-600"/>
    },
    {
      title: "Product Descriptions",
      description: "Compelling product and service descriptions",
      icon: <ShoppingBag className="h-8 w-8 text-cyan-500"/>
    },
    {
      title: "Email Campaigns",
      description: "Newsletters and email marketing content",
      icon: <Mail className="h-8 w-8 text-purple-500"/>
    },
    {
      title: "Video Scripts",
      description: "Scripts for video content and presentations",
      icon: <Video className="h-8 w-8 text-blue-600"/>
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 50 content pieces/month",
        "Basic AI writing tools",
        "Standard templates",
        "Email support",
        "Basic SEO suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 200 content pieces/month",
        "Advanced AI writing tools",
        "Premium templates",
        "Priority support",
        "Advanced SEO optimization",
        "Team collaboration",
        "Content analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited content pieces",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="AI Content Generator - Zion Tech Group" 
        description="Generate high-quality, SEO-optimized content with our AI-powered writing assistant. Create blogs, social media posts, and marketing copy in seconds." 
        keywords="AI content generator, content writing, AI writing assistant, content creation, Zion Tech Group" 
        canonical="https://ziontechgroup.com/ai-content-generator"
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Generator
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Create high-quality, engaging content in seconds with our advanced AI writing assistant. 
              From blog posts to social media content, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                Start Writing
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Content Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Content Types We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white/5 rounded-lg border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-center mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{type.title}</h3>
                  <p className="text-zinc-300 text-center">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 rounded-lg border p-6 relative ${
                  plan.popular ? 'border-blue-500 bg-blue-500/10' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-1">{plan.price}</div>
                    <div className="text-zinc-400">{plan.period}</div>
                    <p className="text-zinc-300 text-sm mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of content creators who are already using our AI to write better, 
              faster, and more engaging content.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
