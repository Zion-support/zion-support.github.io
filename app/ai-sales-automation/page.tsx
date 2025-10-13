'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Target, ArrowRight, CheckCircle, Star, Users, BarChart, Zap } from 'lucide-react';

export default function AiSalesAutomationPage() {
  const features = [
    {
      title: "AI-Powered Lead Scoring",
      description: "Intelligent lead scoring that identifies high-value prospects automatically",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Behavioral analysis", "Predictive scoring", "Lead prioritization", "Conversion optimization"]
    },
    {
      title: "Automated Sales Workflows",
      description: "Streamline sales processes with AI-driven automation and intelligent routing",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Workflow automation", "Task routing", "Follow-up automation", "Pipeline management"]
    },
    {
      title: "Sales Analytics & Insights",
      description: "Comprehensive analytics that provide actionable insights for sales optimization",
      icon: <BarChart className="w-8 h-8" />,
      benefits: ["Performance tracking", "Trend analysis", "ROI measurement", "Predictive forecasting"]
    }
  ];

  const automationTypes = [
    {
      title: "Lead Management",
      description: "Automated lead capture, scoring, and nurturing",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Email Automation",
      description: "Intelligent email campaigns and follow-up sequences",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "CRM Integration",
      description: "Seamless integration with existing CRM systems",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive sales performance tracking and reporting",
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "40%", label: "Higher Conversion" },
    { number: "60%", label: "Time Saved" },
    { number: "35%", label: "More Leads" },
    { number: "50%", label: "Better ROI" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Sales Automation - Zion Tech Group</title>
        <meta name="description" content="Automate your sales process with AI-powered tools. Lead scoring, workflow automation, and sales analytics for better results." />
        <meta name="keywords" content="AI sales automation, sales automation, lead scoring, CRM integration, sales analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Sales Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate your sales process with AI-powered tools that identify high-value leads, 
              streamline workflows, and optimize conversion rates for maximum revenue.
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
              AI-Powered Sales Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI sales automation platform provides intelligent tools that help you close more deals and grow revenue.
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
              Sales Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive sales automation tools that cover all aspects of the sales process.
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
            Ready to Automate Your Sales?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI sales automation experts help you implement intelligent sales tools that drive better results.
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