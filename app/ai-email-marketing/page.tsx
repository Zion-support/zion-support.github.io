'use client';
import React from 'react';
import { Mail, CheckCircle, ArrowRight, Phone, Users, Target, BarChart, Settings, Brain, Send, TrendingUp, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Create highly personalized email campaigns that resonate with each recipient'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior and preferences'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Predict customer behavior and optimize send times for maximum engagement'
    },
    {
      icon: Send,
      title: 'Automated Campaigns',
      description: 'Set up complex email sequences that trigger based on customer actions'
    }
  ];

  const campaignTypes = [
    {
      title: 'Welcome Series',
      description: 'Onboard new subscribers with a personalized welcome sequence',
      features: ['Brand introduction', 'Value proposition', 'Next steps', 'Engagement tracking']
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Re-engage customers who left items in their cart',
      features: ['Timed reminders', 'Personalized offers', 'Urgency creation', 'Conversion optimization']
    },
    {
      title: 'Product Recommendations',
      description: 'Send relevant product suggestions based on purchase history',
      features: ['AI recommendations', 'Cross-selling', 'Upselling', 'Behavioral triggers']
    },
    {
      title: 'Re-engagement Campaigns',
      description: 'Win back inactive subscribers with targeted messaging',
      features: ['Inactivity detection', 'Win-back offers', 'Preference updates', 'Reactivation tracking']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Higher Open Rates',
      description: 'Increase open rates by up to 40% with AI optimization'
    },
    {
      icon: Target,
      title: 'Better Targeting',
      description: 'Reach the right audience with precision targeting'
    },
    {
      icon: Users,
      title: 'Increased Engagement',
      description: 'Boost click-through rates by 60% with personalized content'
    },
    {
      icon: BarChart,
      title: 'Better ROI',
      description: 'Achieve 300% higher ROI compared to traditional email marketing'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Email
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email marketing with AI-powered personalization, automation, and optimization. 
                Send the right message to the right person at the right time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                  <Mail className="w-5 h-5 mr-2" />
                  Start Campaign
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Email Marketing Features</h2>
            <p className="text-gray-400">Powerful tools to supercharge your email campaigns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Types Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Campaign Types</h2>
            <p className="text-gray-400">Automated campaigns that drive results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Email Marketing?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Simple steps to launch your AI email campaigns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Connect Data</h3>
              <p className="text-gray-400">Connect your customer data and email lists</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
              <p className="text-gray-400">AI analyzes your audience and creates segments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Create Campaigns</h3>
              <p className="text-gray-400">Design and personalize your email campaigns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimize & Scale</h3>
              <p className="text-gray-400">AI continuously optimizes and scales your campaigns</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Email Marketing?</h2>
            <p className="text-gray-300 mb-8">Start using AI to create more effective email campaigns</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIEmailMarketingPage;