'use client';
import React from 'react';
import Link from 'next/link';
import { Target, Brain, Users, ArrowRight, CheckCircle, Star, Shield, Clock, Zap, TrendingUp } from 'lucide-react';

const AILeadGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring that identifies high-value prospects automatically',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Priority ranking']
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'AI-powered audience targeting and segmentation for maximum conversion',
      benefits: ['Demographic analysis', 'Interest mapping', 'Behavioral targeting']
    },
    {
      icon: Users,
      title: 'Lead Nurturing',
      description: 'Automated lead nurturing campaigns that convert prospects into customers',
      benefits: ['Email sequences', 'Content personalization', 'Follow-up automation']
    }
  ];

  const leadSources = [
    {
      title: 'Website Visitors',
      description: 'Convert website visitors into qualified leads with smart forms and tracking',
      icon: Target,
      features: ['Visitor tracking', 'Smart forms', 'Behavioral triggers']
    },
    {
      title: 'Social Media',
      description: 'Generate leads from social media platforms with targeted campaigns',
      icon: Users,
      features: ['Social listening', 'Engagement tracking', 'Lead capture']
    },
    {
      title: 'Content Marketing',
      description: 'Attract and convert leads through valuable content and gated resources',
      icon: TrendingUp,
      features: ['Content offers', 'Lead magnets', 'Nurture sequences']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Lead Generation
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Generate high-quality leads at scale with our AI-powered lead generation platform. 
              Increase your lead volume by 300% while improving quality and conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Generate More Leads
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                See It In Action
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Lead Generation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI lead generation platform combines machine learning, behavioral analysis, 
              and automated nurturing to deliver qualified leads consistently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Sources Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Multi-Channel Lead Generation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Capture leads from multiple sources and channels with our comprehensive platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadSources.map((source, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <source.icon className="w-8 h-8 text-pink-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{source.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{source.description}</p>
                <ul className="space-y-2">
                  {source.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Lead Generation?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">300% More Leads</h3>
                    <p className="text-gray-300">Average increase in qualified lead volume</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Higher Quality</h3>
                    <p className="text-gray-300">AI-powered qualification ensures better lead quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Generation</h3>
                    <p className="text-gray-300">Continuous lead generation without manual intervention</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Generate More Leads?</h3>
              <p className="text-gray-300 mb-6">
                Get a free lead generation audit and discover how many more qualified 
                leads you could be generating.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Get Free Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop Missing Out on Leads
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let potential customers slip through the cracks. Our AI lead generation 
            platform will help you capture, qualify, and convert more prospects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILeadGenerationPage;