'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Target, ArrowRight, CheckCircle, Star, BarChart, Users, Zap } from 'lucide-react';

export default function AiMarketingPage() {
  const features = [
    {
      title: "AI-Powered Campaigns",
      description: "Create and optimize marketing campaigns with AI-driven insights and automation",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Campaign optimization", "Audience targeting", "Content personalization", "Performance tracking"]
    },
    {
      title: "Predictive Analytics",
      description: "Predict customer behavior and optimize marketing strategies with AI analytics",
      icon: <BarChart className="w-8 h-8" />,
      benefits: ["Customer insights", "Trend prediction", "ROI optimization", "Conversion forecasting"]
    },
    {
      title: "Automated Marketing",
      description: "Streamline marketing processes with AI automation and intelligent workflows",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Workflow automation", "Lead nurturing", "Email marketing", "Social media management"]
    }
  ];

  const marketingTypes = [
    {
      title: "Content Marketing",
      description: "AI-powered content creation and optimization",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Social Media",
      description: "Intelligent social media management and engagement",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Email Marketing",
      description: "Automated email campaigns and personalization",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive marketing analytics and insights",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "45%", label: "Higher Engagement" },
    { number: "35%", label: "More Conversions" },
    { number: "50%", label: "Better ROI" },
    { number: "60%", label: "Time Saved" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Marketing - Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered campaigns. Predictive analytics, automated workflows, and intelligent targeting." />
        <meta name="keywords" content="AI marketing, marketing automation, predictive analytics, campaign optimization, digital marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your marketing with AI-powered campaigns that deliver better results. 
              Predictive analytics, automated workflows, and intelligent targeting for maximum impact.
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
              AI-Powered Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI marketing platform provides intelligent tools that help you create, optimize, and scale your marketing campaigns.
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

      {/* Marketing Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Marketing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive marketing solutions that cover all aspects of digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingTypes.map((type, index) => (
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
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI marketing experts help you implement intelligent marketing strategies that drive better results.
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