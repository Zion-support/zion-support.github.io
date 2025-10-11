'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, CheckCircle, ArrowRight, Brain, Users, Clock, Globe, Target, Star, Eye, AlertTriangle } from 'lucide-react';

const AiContentModerationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Moderation - Automated Content Filtering | Zion Tech Group</title>
        <meta name="description" content="Automate content moderation with AI-powered filtering. Detect inappropriate content, hate speech, and policy violations across all platforms." />
        <meta name="keywords" content="AI content moderation, automated filtering, content safety, hate speech detection, policy compliance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI Safety Solution
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Content Moderation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Automate content moderation with advanced AI that detects inappropriate content, 
                hate speech, and policy violations across text, images, and video content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Content <span className="text-cyan-400">Detection</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your platform with AI-powered content moderation that scales with your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: 'Multi-Modal Detection',
                  description: 'Analyze text, images, and video content with advanced AI models.',
                  features: ['Text Analysis', 'Image Recognition', 'Video Processing', 'Audio Analysis']
                },
                {
                  icon: Shield,
                  title: 'Hate Speech Detection',
                  description: 'Identify and flag hate speech, harassment, and toxic content.',
                  features: ['Hate Speech', 'Harassment', 'Toxicity', 'Bias Detection']
                },
                {
                  icon: AlertTriangle,
                  title: 'NSFW Content Filter',
                  description: 'Automatically detect and filter inappropriate adult content.',
                  features: ['Adult Content', 'Violence', 'Gore', 'Explicit Material']
                },
                {
                  icon: Zap,
                  title: 'Real-time Processing',
                  description: 'Process content in real-time with sub-second response times.',
                  features: ['Instant Detection', 'Live Filtering', 'Auto-moderation', 'Real-time Alerts']
                },
                {
                  icon: Target,
                  title: 'Custom Policies',
                  description: 'Create and enforce custom content policies for your platform.',
                  features: ['Policy Creation', 'Custom Rules', 'Brand Safety', 'Compliance']
                },
                {
                  icon: Clock,
                  title: '24/7 Monitoring',
                  description: 'Continuous content monitoring with automated moderation actions.',
                  features: ['Always On', 'Automated Actions', 'Escalation Rules', 'Audit Trails']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="text-cyan-400">Platform</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From social media to enterprise platforms, our AI content moderation scales to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Social Media',
                  description: 'Moderate user-generated content on social platforms and communities.',
                  icon: '📱',
                  benefits: ['User Posts', 'Comments', 'Messages', 'Community Safety']
                },
                {
                  title: 'E-commerce',
                  description: 'Filter product listings, reviews, and marketplace content.',
                  icon: '🛒',
                  benefits: ['Product Listings', 'Reviews', 'Seller Content', 'Marketplace Safety']
                },
                {
                  title: 'Gaming',
                  description: 'Moderate in-game chat, user-generated content, and community interactions.',
                  icon: '🎮',
                  benefits: ['Chat Moderation', 'User Content', 'Community Safety', 'Fair Play']
                },
                {
                  title: 'Education',
                  description: 'Ensure safe learning environments with content filtering and monitoring.',
                  icon: '🎓',
                  benefits: ['Student Safety', 'Content Filtering', 'Platform Monitoring', 'Compliance']
                },
                {
                  title: 'Enterprise',
                  description: 'Moderate internal communications and external-facing content.',
                  icon: '🏢',
                  benefits: ['Internal Communications', 'External Content', 'Brand Safety', 'Compliance']
                },
                {
                  title: 'Dating Apps',
                  description: 'Create safe dating environments with advanced content moderation.',
                  icon: '💕',
                  benefits: ['Profile Safety', 'Message Filtering', 'Photo Moderation', 'User Safety']
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content moderation needs. Scale as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$299',
                  period: '/month',
                  description: 'Perfect for small platforms and communities',
                  features: [
                    'Up to 50,000 content pieces/month',
                    'Basic text moderation',
                    'Standard accuracy',
                    'Email support',
                    'API access'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$999',
                  period: '/month',
                  description: 'Ideal for growing platforms and businesses',
                  features: [
                    'Up to 500,000 content pieces/month',
                    'Multi-modal detection',
                    'High accuracy models',
                    'Priority support',
                    'Custom policies',
                    'Analytics dashboard'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  description: 'Tailored solutions for large platforms',
                  features: [
                    'Unlimited content processing',
                    'Custom AI models',
                    'On-premise deployment',
                    'Dedicated support',
                    'SLA guarantees',
                    'White-label options'
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Protecting Your Platform
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Keep your platform safe with AI-powered content moderation. 
              Get started with a free demo and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiContentModerationPage;