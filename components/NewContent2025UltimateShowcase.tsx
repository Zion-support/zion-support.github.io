'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Users, Globe, Shield } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Automation",
      description: "Revolutionary AI solutions that transform your business operations with intelligent automation.",
      stats: "95% Efficiency Gain"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      stats: "1000x Faster Processing"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Precision Analytics",
      description: "Advanced analytics and insights that drive data-driven decision making across your organization.",
      stats: "99.9% Accuracy"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Growth Acceleration",
      description: "Proven strategies and tools to accelerate your business growth and market expansion.",
      stats: "300% ROI Average"
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Team Collaboration",
      description: "Enhanced collaboration tools that connect your teams and streamline communication.",
      stats: "50% Productivity Boost"
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      title: "Global Reach",
      description: "Scale your business globally with our international expansion and localization services.",
      stats: "150+ Countries"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      title: "Enterprise Security",
      description: "Military-grade security solutions to protect your data and ensure compliance.",
      stats: "Zero Breaches"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Legacy system modernization",
      solution: "AI-powered digital transformation",
      results: "400% increase in operational efficiency",
      logo: "TC"
    },
    {
      company: "FinanceFlow Inc",
      industry: "Financial Services",
      challenge: "Manual process automation",
      solution: "Intelligent workflow automation",
      results: "60% reduction in processing time",
      logo: "FF"
    },
    {
      company: "HealthTech Solutions",
      industry: "Healthcare",
      challenge: "Patient data management",
      solution: "AI-driven analytics platform",
      results: "90% improvement in diagnosis accuracy",
      logo: "HT"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            New Content 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Technology Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the future of technology with our comprehensive suite of AI, automation, and digital transformation solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {study.logo}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{study.company}</h4>
                <p className="text-sm text-gray-600 mb-3">{study.industry}</p>
                <div className="text-left space-y-2">
                  <div>
                    <span className="text-xs font-medium text-gray-500">Challenge:</span>
                    <p className="text-sm text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500">Solution:</span>
                    <p className="text-sm text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500">Results:</span>
                    <p className="text-sm text-green-600 font-medium">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our cutting-edge solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;