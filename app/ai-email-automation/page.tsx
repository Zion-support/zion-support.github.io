'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, Zap, ArrowRight, CheckCircle, Star, Send, Users, BarChart } from 'lucide-react';

export default function AiEmailAutomationPage() {
  const features = [
    {
      title: "Smart Email Campaigns",
      description: "AI-powered email campaigns that adapt to recipient behavior and preferences",
      icon: <Mail className="w-8 h-8" />,
      benefits: ["Behavioral targeting", "Personalized content", "A/B testing", "Performance optimization"]
    },
    {
      title: "Automated Workflows",
      description: "Set up complex email workflows that trigger based on user actions and data",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Trigger-based automation", "Multi-step sequences", "Conditional logic", "Dynamic content"]
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to optimize your email marketing performance",
      icon: <BarChart className="w-8 h-8" />,
      benefits: ["Open rates tracking", "Click-through analysis", "Conversion metrics", "ROI reporting"]
    }
  ];

  const automationTypes = [
    {
      title: "Welcome Series",
      description: "Automated welcome emails for new subscribers",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Drip Campaigns",
      description: "Nurture leads with automated drip sequences",
      icon: <Send className="w-6 h-6" />
    },
    {
      title: "Abandoned Cart",
      description: "Recover abandoned carts with targeted emails",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Re-engagement",
      description: "Win back inactive subscribers with smart campaigns",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "40%", label: "Higher Open Rates" },
    { number: "60%", label: "More Clicks" },
    { number: "25%", label: "Better Conversions" },
    { number: "50%", label: "Time Saved" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Email Automation - Zion Tech Group</title>
        <meta name="description" content="Automate your email marketing with AI-powered campaigns. Smart targeting, automated workflows, and advanced analytics." />
        <meta name="keywords" content="AI email automation, email marketing, automated campaigns, email workflows, marketing automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Email Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate your email marketing with AI-powered campaigns that adapt to your audience. 
              Increase engagement, conversions, and ROI with intelligent email automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Email Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI email automation platform provides intelligent features that help you create more effective email campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Automation Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Set up various types of automated email campaigns to engage your audience at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI email automation experts help you create campaigns that drive engagement and conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}