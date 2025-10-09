'use client';
import React, { useState } from 'react';
import { PenTool, Sparkles, Zap, CheckCircle, Star, ArrowRight, Brain, FileText, Wand2, Target, Clock, Users } from 'lucide-react';
import Link from 'next/link';

const AIWritingAssistant: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent("Here's your AI-generated content based on your requirements...");
      setIsGenerating(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Writing",
      description: "Advanced GPT-4 integration for intelligent content generation"
    },
    {
      icon: FileText,
      title: "Multiple Formats",
      description: "Blog posts, emails, social media, ads, and more"
    },
    {
      icon: Wand2,
      title: "Tone Adjustment",
      description: "Professional, casual, creative, or technical writing styles"
    },
    {
      icon: Target,
      title: "SEO Optimized",
      description: "Built-in SEO optimization for better search rankings"
    },
    {
      icon: Clock,
      title: "Real-time Generation",
      description: "Get content in seconds, not hours"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share and collaborate on content with your team"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for individuals and small teams",
      features: [
        "10,000 words/month",
        "5 content templates",
        "Basic SEO optimization",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 79,
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "50,000 words/month",
        "Unlimited templates",
        "Advanced SEO tools",
        "Priority support",
        "5 user accounts",
        "Brand voice training",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited words",
        "Custom templates",
        "White-label solution",
        "24/7 phone support",
        "Unlimited users",
        "Custom AI training",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Writing Assistant
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Writing Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your writing with our advanced AI assistant. Generate high-quality content, 
              optimize for SEO, and maintain consistent brand voice across all your communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    Try AI Writing
                  </>
                )}
              </button>
              <Link href="#pricing" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
                <Target className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Try It Now</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Input Your Requirements</h3>
                <textarea
                  className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  placeholder="Describe what you want to write about... (e.g., 'Write a blog post about AI trends in 2024')"
                />
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="mt-4 w-full cyber-button"
                >
                  {isGenerating ? 'Generating...' : 'Generate Content'}
                </button>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI-Generated Content</h3>
                <div className="h-32 bg-gray-700 border border-gray-600 rounded-lg p-4 text-white">
                  {generatedContent || "Your AI-generated content will appear here..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create compelling, professional content at scale
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
              plan.popular 
                ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20' 
                : 'border-gray-600'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.popular
                  ? 'cyber-button'
                  : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 text-center border border-cyan-500/20">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Writing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of writers, marketers, and businesses who trust our AI writing assistant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              <PenTool className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWritingAssistant;